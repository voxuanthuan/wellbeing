import Image from 'next/image';
import transition from '../../public/transition.png';
import {useTranslation} from "react-i18next";
import Header from '../components/Header';
import Link from 'next/link';

import connectIcon from '../../public/connect-icon.svg';
import beActiveIcon from '../../public/be-active-icon.svg';
import keepLearningIcon from '../../public/keep-learning-icon.svg';
import giveIcon from '../../public/give-icon.svg';
import takeNoticeIcon from '../../public/take-notice-icon.svg';

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
                            <div className="font-medium text-[18px] mb-16">Wellbeing is about feeling good both mentally and physically.
                                There are 5 things we can all do to really help our wellbeing:
                            </div>
                            <div className="w-full flex justify-center mb-9">
                                <div className="lg:max-w-[429px]">
                                    <Image alt="mascots" src={transition}/>
                                </div>
                            </div>
                            <div className="hidden lg:flex flex-col items-center">
                                <Link href="/quizzes/1">
                                    <button className="w-[130px] h-[39px] rounded-[17px] font-medium text-sm bg-bvsPeach text-white">
                                        <a>TAKE QUIZ</a>
                                    </button>
                                </Link>
                                <p className="font-normal text-sm text-black text-opacity-50 mb-4 mt-6 max-w-[350px] text-center">So how good is you wellbeing? Click here to do Wellbeing Buddies’s checkup</p>
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
                                            <div className="w-[75px] h-[75px]"><Image src={connectIcon} /></div>
                                            <div className="max-h-[78px] max-w-[350px] 2xl:max-w-[205px] text-sm justify-around">
                                                <h1 className={"text-2xl font-semibold text-bvsOrange"} >{t('connect')}</h1>
                                                <p className="text-sm font-medium">{t('connect-content')}</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="animate-left-to-right-1">
                                        <div className={"w-full h-[78px] space-x-[55px] flex mb-[50px]"}>
                                            <div className="w-[75px] h-[75px]"><Image width="75px" height="75px" src={beActiveIcon} /></div>
                                            <div className="max-h-[78px] max-w-[350px] 2xl:max-w-[205px] text-sm justify-around">
                                                <h1 className={"text-2xl font-semibold text-bvsTeal"} >{t('be-active')}</h1>
                                                <p className="text-sm font-medium">{t('be-active-content')}</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className={"animate-left-to-right-2"}>
                                        <div className={"w-full h-[78px] space-x-[55px] flex mb-[50px]"}>
                                            <div className="w-[75px] h-[75px]"><Image src={keepLearningIcon} /></div>
                                            <div className="max-h-[78px] max-w-[350px] 2xl:max-w-[205px] text-sm justify-around">
                                                <h1 className={"text-2xl font-semibold text-bvsBrightYellow"} >{t('keep-learning')}</h1>
                                                <p className="text-sm font-medium">{t('keep-learning-content')}</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className={"animate-left-to-right-3"}>
                                        <div className={"w-full h-[78px] space-x-[55px] flex mb-[50px]"}>
                                            <div className="w-[75px] h-[75px]"><Image src={giveIcon} /></div>
                                            <div className="max-h-[78px] max-w-[350px] 2xl:max-w-[205px] text-sm justify-around">
                                                <h1 className={"text-2xl font-semibold text-bvsPeach"} >{t(`give`)}</h1>
                                                <p className="text-sm font-medium">{t('give-content')}</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className={"animate-left-to-right-4"}>
                                        <div className={"w-full h-[78px] space-x-[55px] flex mb-[50px]"}>
                                            <div className="w-[75px] h-[75px]"><Image src={takeNoticeIcon} /></div>
                                            <div className="max-h-[78px] max-w-[350px] 2xl:max-w-[205px] text-sm justify-around">
                                                <h1 className={"text-2xl font-semibold text-bvsDrakTeal"} >{t('take-notice')}</h1>
                                                <p className="text-sm font-medium">{t('take-notice-content')}</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className= "flex flex-col items-center lg:hidden">
                                    <Link href="/quizzes/1">
                                        <button className="w-[178px] h-[42px] rounded-[17px] font-medium text-sm bg-bvsPeach text-white">
                                            <a>TAKE QUIZ</a>
                                        </button>
                                    </Link>
                                    <p className="font-normal text-sm text-black text-opacity-50 mb-4 mt-[14px] max-w-[350px] text-center">So how good is you wellbeing? Click here to do Wellbeing Buddies’s checkup</p>
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