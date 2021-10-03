import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

import {useAppContext} from '../../context';
import Header from '../../components/Header';
import quizBW from '../../../public/quiz_bw.png';
import quizColor from '../../../public/quiz_color.png';
import arrowNext from '../../../public/arrow_next.svg';
import arrowBack from '../../../public/arrow_back.svg';

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
            return "text-black"
        } else if (questions[questionNumber - 1].score !== undefined) {
            return "text-bvsTeal";
        } else {
            return "text-black text-opacity-60"
        }
    }

    const isDisableButton = (questionNumber) => {
        if (currentCheckedQuestion === questionNumber || questions[questionNumber - 1].score !== undefined) {
            return false
        }
        return true
    }

    const isCompleted = currentCheckedQuestion > Number(id)*5;

    const classStr = (number) => `p-3 max-w-[470px] ${getColor(number)}`

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
            <div className="bg-bvsTealLight w-3/4 2xl:w-2/3">
                <Header />
                <div className="w-full h-heightBody">
                    <div className="h-full w-full flex justify-center items-center relative">
                        <div className="relative">
                            <p className="ml-3 text-base font-medium text-black opacity-60">{pagesNumber} / 15</p>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th className="p-3 text-left font-semibold text-[18px] xl:text-[30px] 2xl:text-[36px] text-bvsPeach underline">{t('question')}</th>
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
                        </div>
                        { Number(id) !== 1 &&
                            (
                            <Link href={`/quizzes/${(Number(id) - 1)}`} passHref>
                                <div className="hover:cursor-pointer hover:opacity-40 pl-3 h-100px text-black text-opacity-70 text-base mt-10 absolute bottom-14 left-0 2xl:left-8">
                                    <div className="flex items-center">
                                        <div className="pr-2 flex items-center">
                                            <Image alt="arrowBack" src={arrowBack}/>
                                        </div>
                                        <p>{t('back')}</p>
                                    </div>
                                </div>
                            </Link>
                            )
                        }
                    </div>
                   
                </div>
            </div>
            <div className="bg-[#FAF5ED] w-1/4 2xl:w-1/3">
                <div className={"h-full flex justify-center items-center" + (image === quizColor ? " animate-left-to-right-5" : "")}>
                    <div className="w-[80%]">
                        <Image alt="image" src={image}/>
                    </div>
                </div>
                <button onClick={() => handleNextPage()} disabled={!isCompleted} className={"flex items-center justify-center relative bottom-[18%] left-submmitBetween text-base w-[123px] h-[40px] font-medium rounded-[15px] border-bvsPeach border-solid border-2 hover:scale-110 " + (isCompleted ? 'bg-bvsPeach text-white' : 'bg-transparent text-[#F0B4A0] hover:scale-100 hover:cursor-not-allowed')}>
                    <a>{id == 3 ? t('submit').toLocaleUpperCase() : t('next').toLocaleUpperCase()}</a>
                    <div className="pl-1">
                        <Image alt="arrow next" src={arrowNext}/>
                    </div>
                </button>
            </div>
        </div>
    )
}
