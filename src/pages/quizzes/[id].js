import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

import {useAppContext} from '../../context';
import Header from '../../components/Header';
import quizBW from '../../../public/quiz_bw.png';
import quizColor from '../../../public/quiz_color.png';


export default function Quizzes() {
    const {t} = useTranslation();
    const {
        questions,
        setQuestions,
        setTotalScore,
        setConnectScore,
        setTakeNoticeScore,
        setKeepLearningScore,
        setBeActiveScore,
        setGiveScore
    } = useAppContext();
    const router = useRouter();
    const {id} = router.query;

    const firstQuestion = () => {
        if (id == 1) {
            return 0;
        } else if(id == 2) {
            return 5;
        }
        return 10;
    }
    
    const currentQuestions  = questions.slice(firstQuestion(), Number(id)*5);


    const [currentCheckedQuestion, setCurrentCheckedQuestion] = useState(1);

    const getColor = (questionNumber) => {
        if (currentCheckedQuestion === questionNumber) {
            return "text-bvsDrakTeal"
        } else if (questions[questionNumber - 1].score !== undefined) {
            return "text-bvsTeal";
        } else {
            return "text-black font-[16px]"
        }
    }

    const isDisableButton = (questionNumber) => {
        if (currentCheckedQuestion === questionNumber || questions[questionNumber - 1].score !== undefined) {
            return false
        }
        return true
    }

    const isCompleted = currentCheckedQuestion > Number(id)*5;

    const classStr = (number) => `p-3 max-w-[470px]  ${getColor(number)}`

    const handleSelect = (e, index) => {
        const updateQuestion = [...questions];
        if (updateQuestion[index].score === undefined) {
            setCurrentCheckedQuestion(currentCheckedQuestion + 1);
        }
        updateQuestion[index].score = Number(e.target.value);
        setQuestions(updateQuestion);
    }
    const image = isCompleted ? quizColor : quizBW;

    const pagesNumber = id == 1 ? "1 - 5" : id == 2 ? "6-10" : "10 - 15";


    const pathNextPage = () => {
        if (id == 1) {
            return '/quizzes/2'
        } else if (id == 2) {
            return '/quizzes/3'
        }
        return '/result';
    }

    const calculateScore = () => {
        setConnectScore(questions[1].score + questions[8].score + questions[11].score);
        setTakeNoticeScore(questions[0].score + questions[6].score + questions[14].score);
        setKeepLearningScore(questions[2].score + questions[9].score + questions[12].score);
        setBeActiveScore(questions[3].score + questions[7].score + questions[13].score);
        setGiveScore(questions[4].score + questions[5].score + questions[10].score);
        const overallTotal = questions.reduce((a, b) => {
            return a + b.score
        }, 0);
        setTotalScore(overallTotal);
    }

    const handleNextPage = () => {
        const href = pathNextPage()
        if (id == 3) {
            calculateScore();
        }
        router.push(href);
    }

    return (
        <div className="w-full flex">
            <div className="bg-bvsTealLight w-2/3">
                <Header />
                <div className="w-full h-heightBody">
                    <div className="h-full w-full flex justify-center items-center">
                        <div className="relative">
                            <p className="relative -top-16 left-6 text-base font-medium text-black opacity-60">{pagesNumber} / 15</p>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th className="p-3 text-left font-semibold text-[36px] text-bvsPeach underline">{t('question')}</th>
                                        <th className="p-3 font-normal text-sm text-black text-opacity-80">{t('never')}</th>
                                        <th className="p-3 font-normal text-sm text-black text-opacity-80">{t('onceAMonth')}</th>
                                        <th className="p-3 font-normal text-sm text-black text-opacity-80">{t('onceAWeek')}</th>
                                        <th className="p-3 font-normal text-sm text-black text-opacity-80">{t('mostDays')}</th>
                                        <th className="p-3 font-normal text-sm text-black text-opacity-80">{t('everyDay')}</th>
                                    </tr>
                                </thead>
                                <tbody className="font-semibold">
                                    {
                                        currentQuestions.map((question) => {
                                            return (
                                                <tr key={question.id}>
                                                    <td className={classStr(question.id + 1)}>{t(`${question.content}`)}</td>
                                                    <td className="p-3 text-center"><input type="radio" name={`question${(question.id + 1)}`} checked={question.score == 0} className="cursor-pointer" value="0" disabled={isDisableButton(question.id + 1)} onChange={(e) => handleSelect(e, question.id)}/></td>
                                                    <td className="p-3 text-center"><input type="radio" name={`question${(question.id + 1)}`} checked={question.score == 1} className="cursor-pointer" value="1" disabled={isDisableButton(question.id + 1)} onChange={(e) => handleSelect(e, question.id)}/></td>
                                                    <td className="p-3 text-center"><input type="radio" name={`question${(question.id + 1)}`} checked={question.score == 2} className="cursor-pointer" value="2" disabled={isDisableButton(question.id + 1)} onChange={(e) => handleSelect(e, question.id)}/></td>
                                                    <td className="p-3 text-center"><input type="radio" name={`question${(question.id + 1)}`} checked={question.score == 3} className="cursor-pointer" value="3" disabled={isDisableButton(question.id + 1)} onChange={(e) => handleSelect(e, question.id)}/></td>
                                                    <td className="p-3 text-center"><input type="radio" name={`question${(question.id + 1)}`} checked={question.score == 4} className="cursor-pointer" value="4" disabled={isDisableButton(question.id + 1)} onChange={(e) => handleSelect(e, question.id)}/></td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                            { Number(id) !== 1 &&
                                (<div className="absolute pl-3 lg:-bottom-28 xl:-bottom-40 w-[68px] h-[18px] text-black text-opacity-60 text-base">
                                    <Link href={`/quizzes/${(Number(id) - 1)}`} passHref>
                                        <button><a>{t('back')}</a></button>
                                    </Link>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#FAF5ED] w-1/3">
                <div className="h-full flex justify-center items-center">
                    <div className="w-[387px]">
                        <Image alt="image" src={image}/>
                    </div>
                </div>
                <button onClick={() => handleNextPage()} disabled={!isCompleted} className={"relative bottom-[18%] left-submmitBetween text-base hover:scale-110 w-[123px] h-[40px] font-medium rounded-[15px] border-bvsPeach border-solid border-2 " + (isCompleted ? 'bg-bvsPeach text-white' : 'bg-transparent text-[#F0B4A0]')}>
                    <a>{t('next').toLocaleUpperCase()}</a>
                    <span className="w-[10px] h-[6px] bg-white after:bg-bvsWarmWhite" />
                </button>
            </div>
        </div>
    )
}
