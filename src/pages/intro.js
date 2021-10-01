import Image from 'next/image';
import transition from '../../public/introduction.png';
import {useTranslation} from "react-i18next";
import Header from '../components/Header';
import Link from 'next/link';

import connectIcon from '../../public/connect/connect_dot.svg';
import beActiveIcon from '../../public/be-active/be_active_dot.svg';
import keepLearningIcon from '../../public/keep-learning/keep_learning_dot.svg';
import giveIcon from '../../public/give/give_dot.svg';
import takeNoticeIcon from '../../public/take-notice/take_notice_dot.svg';
import quoteIcon from '../../public/quote.svg';

export default function Intro() {
    const {t} = useTranslation();
    return (
        <div className="bg-introduction bg-no-repeat bg-cover">
            <Header/>
            <div className="h-full lg:h-heightBody w-[90%] mx-auto mt-12 lg:mt-0">
            <div className="h-full lg:flex flex-col lg:flex-row">
                <div className="lg:flex-1 text-center">
                    <div className="lg:flex flex-col justify-center items-center h-full">
                        <div className="lg:max-w-[472px]">
                            <div className="relative">
                                <div className="absolute -top-2 -left-7">
                                    <Image alt="quote" src={quoteIcon} />
                                </div>
                                <h1 className="font-semibold text-[28px] text-left">{t('aboutWellbeing').toLocaleUpperCase()}</h1>
                                <p className="font-normal text-[20px] mb-16 leading-6 text-left">{t('wellbeingMean')}</p>
                            </div>
                            <div className="w-full flex justify-center mb-9">
                                <div className="lg:max-w-[429px]">
                                    <Image alt="mascots" src={transition}/>
                                </div>
                            </div>
                            <div className="hidden lg:flex flex-col items-center">
                                <Link href="/quizzes/1" passHref>
                                    <button className="hover:scale-x-105 w-[130px] h-[39px] rounded-[17px] font-medium text-sm bg-bvsPeach text-white">
                                        <a>{t('takeQuiz').toLocaleUpperCase()}</a>
                                    </button>
                                </Link>
                                <p className="font-normal text-sm text-black text-opacity-50 mb-4 mt-6 max-w-[350px] text-center">{t('hintWellbeing')}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:flex-1 mt-16 lg:mt-0">
                    <div className="h-full w-full flex">
                        <div className="w-full 2xl:w-2/3">
                            <div className="h-full lg:flex items-center justify-center">
                                <ul>
                                    <li className="animate-left-to-right-0">
                                        <div className={"w-full h-[78px] space-x-[55px] flex mb-[50px]"}>
                                            <div className="w-[75px] h-[75px]"><Image alt="connect icon" src={connectIcon} /></div>
                                            <div className="max-h-[78px] xl:max-w-[350px] 2xl:max-w-[308px] text-sm justify-around">
                                                <h1 className={"text-2xl font-semibold text-bvsOrange"} >{t('connect')}</h1>
                                                <p className="text-[16px] font-normal">{t('connect-content')}</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="animate-left-to-right-1">
                                        <div className={"w-full h-[78px] space-x-[55px] flex mb-[50px]"}>
                                            <div className="w-[75px] h-[75px]"><Image alt="beactive icon" width="75px" height="75px" src={beActiveIcon} /></div>
                                            <div className="max-h-[78px] xl:max-w-[350px] 2xl:max-w-[308px] text-sm justify-around">
                                                <h1 className={"text-2xl font-semibold text-bvsTeal"} >{t('be-active')}</h1>
                                                <p className="text-[16px] font-normal">{t('be-active-content')}</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className={"animate-left-to-right-2"}>
                                        <div className={"w-full h-[78px] space-x-[55px] flex mb-[50px]"}>
                                            <div className="w-[75px] h-[75px]"><Image alt="keeplearning" src={keepLearningIcon} /></div>
                                            <div className="max-h-[78px] xl:max-w-[350px] 2xl:max-w-[308px] text-sm justify-around">
                                                <h1 className={"text-2xl font-semibold text-bvsBrightYellow"} >{t('keep-learning')}</h1>
                                                <p className="text-[16px] font-normal">{t('keep-learning-content')}</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className={"animate-left-to-right-3"}>
                                        <div className={"w-full h-[78px] space-x-[55px] flex mb-[50px]"}>
                                            <div className="w-[75px] h-[75px]"><Image alt="give icon" src={giveIcon} /></div>
                                            <div className="max-h-[78px] xl:max-w-[350px] 2xl:max-w-[308px] text-sm justify-around">
                                                <h1 className={"text-2xl font-semibold text-bvsPeach"} >{t(`give`)}</h1>
                                                <p className="text-[16px] font-normal">{t('give-content')}</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className={"animate-left-to-right-4"}>
                                        <div className={"w-full h-[78px] space-x-[55px] flex mb-[50px]"}>
                                            <div className="w-[75px] h-[75px]"><Image alt="take notice icon" src={takeNoticeIcon} /></div>
                                            <div className="max-h-[78px] xl:max-w-[350px] 2xl:max-w-[308px] text-sm justify-around">
                                                <h1 className={"text-2xl font-semibold text-bvsDrakTeal"} >{t('take-notice')}</h1>
                                                <p className="text-[16px] font-normal">{t('take-notice-content')}</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className= "flex flex-col items-center lg:hidden">
                                    <Link href="/quizzes/1" passHref>
                                        <button className="w-[178px] h-[42px] rounded-[17px] font-medium text-sm bg-bvsPeach text-white">
                                            <a>{t('takeQuiz')}</a>
                                        </button>
                                    </Link>
                                    <p className="font-normal text-base text-black text-opacity-60 mb-4 mt-[14px] max-w-[350px] text-center">{t('hintWellbeing')}</p>
                                </div>
                            </div>
                        </div>
                            

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}