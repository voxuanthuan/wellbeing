import React, {useRef} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import {useAppContext} from  '../context';

import KeepLearning from '../components/KeepLearning';
import BeActive from '../components/BeActive';
import Give from '../components/Give';
import Connect from '../components/Connect';
import Header from '../components/Header';
import TakeNotice from '../components/TakeNotice';

import quoteIcon from '../../public/quote.svg';
import arrowBack from '../../public/arrow_back.svg';
import arrowButtonDown from '../../public/scroll-down-button.svg';

import connectIconSmall from '../../public/connect/connect-dot-small.svg';
import beActiveIconSmall from '../../public/be-active/be-active-dot-small.svg';
import keepLearningIconSmall from '../../public/keep-learning/keep-learning-dot-small.svg';
import giveIconSmall from '../../public/give/give-dot-small.svg';
import takeNoticeIconSmall from '../../public/take-notice/take-notice-dot-small.svg';

import musicImage from '../../public/music-image.svg';
import introductionImage from '../../public/introduction.png';


export default function ActionPlan() {
    const {t, i18n} = useTranslation();
    const {
        connectScore,
        takeNoticeScore,
        keepLearningScore,
        beActiveScore,
        giveScore,
        name
    } = useAppContext();
    const renderConnectByScore = (score, type) => {
        if (type === 'connect') {
            if (score <= 3) {
                return t('connectGuideTrySomeThing');
            } else if (score <= 6) {
                return t('connectGuideProgress');
            } else if (score <= 9) {
                return t('connectGuideGood');
            } else if (score <= 12) {
                return t('connectGuideWellBeing');
            }
        }

        if (type === 'be-active') {
            if (score <= 3) {
                return t('beActiveGuideTrySomeThing');
            } else if (score <= 6) {
                return t('beActiveGuideProgress');
            } else if (score <= 9) {
                return t('beActiveGuideGood');
            } else if (score <= 12) {
                return t('beActiveGuideWellBeing');
            }
        }

        if (type === 'keep-learning') {
            if (score <= 3) {
                return t('keepLearningGuideTrySomeThing');
            } else if (score <= 6) {
                return t('keepLearningGuideProgress');
            } else if (score <= 9) {
                return t('keepLearningGuideGood');
            } else if (score <= 12) {
                return t('keepLearningGuideWellBeing');
            }
        }

        if (type === 'give') {
            if (score <= 3) {
                return t('givingGuideTrySomeThing');
            } else if (score <= 6) {
                return t('givingGuideProgress');
            } else if (score <= 9) {
                return t('givingGuideGood');
            } else if (score <= 12) {
                return t('givingGuideWellBeing');
            }
        }
        if (type === 'take-notice') {
            if (score <= 3) {
                return t('takeNoticeGuideTrySomeThing');
            } else if (score <= 6) {
                return t('takeNoticeGuideProgress');
            } else if (score <= 9) {
                return t('takeNoticeGuideGood');
            } else if (score <= 12) {
                return t('takeNoticeGuideWellBeing');
            }
        }
        
    }
    return (
        <div className="h-screen">
            <div className="bg-bvsTealLight md:bg-bvsWarmWhite w-full h-full  min-h-[900px] sm:min-h-0 relative flex flex-col justify-center items-center ">
            <div className="block md:relative z-20 w-full"><Header /></div>
                <div className="h-full w-full flex justify-center items-center">
                    <div>
                        <div className="block md:absolute z-10 h-full top-0 bottom-0 right-0 left-0">
                        <div className="h-full flex">
                            <div className="w-1/3 h-full hidden md:flex justify-center items-center">
                                <div className="w-full">
                                    <div className="ml-6 mt-12 lg:mt-10 lg:ml-10 2xl:mt-40 relative">
                                        <div className="absolute -top:3 -left-3 xl:-top-4 xl:-left-4 w-[42px] h-[31px] 2xl:w-[81px] 2xl:h-[71px]">
                                            <Image alt="quote image" src={quoteIcon} />
                                        </div>
                                        <p className="text-black text-opacity-60 relative z-10">{t('topTip')}</p>
                                        <p className="max-w-[80%] xl:max-w-[207px] text-[20px] 2xl:text-[24px] font-semibold text-bvsTeal relative z-10">{t('topTipContent')}</p>
                                    </div>
                                    <div className="mt-20 2xl:mt-40 flex justify-end">
                                        <p className="w-full text-[#1E96A5] text-[20px] 2xl:text-[24px] font-semibold  max-w-[80%] xl:max-w-[327px] leading-7 relative z-10">{t('importantThing')}</p>
                                    </div>
                                    <Link href="/result" passHref>
                                            <button className="w-full hover:opacity-40 text-black text-opacity-60 mt-14 xl:mt-20">
                                                    <div className="w-full flex items-center justify-center space-x-2">
                                                        <div className="w-[18px] h-[18px] rounded-[14px]">
                                                            <Image alt="arrow back" src={arrowBack}/>
                                                            </div>
                                                            <p className="md:max-w-[210px] lg:max-w-[100%]"><a>{t('backToReport')}</a></p>
                                                    </div>
                                            </button>
                                    </Link>
                                </div>
                            </div>
                            <div className="w-full md:w-2/3 bg-bvsTealLight relative top-0">
                            <div className="h-screen w-full flex justify-center items-center">
                                <div className="w-full ml-5 xl:ml-20 flex justify-center flex-col items-center">
                                    <p className="mt-0 2xl:mt-[20px] mb-[5px] xl:mb-[13px] text-[20px] font-medium">{`${name}${t('suffix')}`}</p>
                                    <h1 className="text-bvsPeach font-bold text-[20px] md:text-[24px] 2xl:text-[36px] mb-[15px] 2xl:mb-[81px] text-center sm:text-left" dangerouslySetInnerHTML={{__html: t('wellbeingActionPlan').toLocaleUpperCase()}}></h1>
                                        <div>
                                            <div className="block mb-0 sm:flex sm:mb-[44px] 2xl:mb-[70px] justify-around xl:justify-start">
                                                <div className="max-w-[360px] h-[110px] relative mb-4 sm:mb-0">
                                                    <div className="flex">
                                                        <div className="hidden xl:block w-[55px] h-[55px] mt-1">
                                                            <Image alt="connect icon" src={connectIconSmall}/>
                                                        </div>
                                                        <div className="ml-[10px] xl:ml-[26px]">
                                                            <div className="flex items-center mb-2 p-0">
                                                                <div className="block xl:hidden w-[55px] h-[55px] mt-1">
                                                                    <Image alt="connect icon" src={connectIconSmall}/>
                                                                </div>
                                                                <p className="text-2xl text-bvsNavy font-medium pl-2 xl:pl-0">{t('connect')}</p>

                                                            </div>
                                                            <p className="text-bvsDrakTeal text-base font-normal  max-w-[300px] xl:max-w-[280px]">{renderConnectByScore(connectScore, "connect")}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="max-w-[360px] ml-0 xl:ml-20 h-[110px] relative mb-4 sm:mb-0">
                                                    <div className="flex">
                                                        <div className="hidden xl:block w-[55px] h-[55px] mt-1">
                                                            <Image alt="beactive icon" src={beActiveIconSmall}/>
                                                        </div>
                                                        <div className="ml-[10px] xl:ml-[26px]">
                                                            <div className="flex justify-start items-center mb-2 p-0">
                                                                <div className="block xl:hidden w-[55px] h-[55px] mt-1">
                                                                    <Image alt="beactive icon" src={beActiveIconSmall}/>
                                                                </div>
                                                                <p className="text-2xl text-bvsNavy font-medium pl-2 xl:pl-0">{t('be-active')}</p>
                                                            </div>
                                                            <p className="text-bvsDrakTeal text-base font-normal  max-w-[300px] xl:max-w-[280px]">
                                                                {renderConnectByScore(beActiveScore, "be-active")}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <div className="block sm:flex sm:mb-[50px] 2xl:mb-20 justify-around xl:justify-start">
                                                <div className="max-w-[360px] h-[110px] relative mb-4 sm:mb-0">
                                                    <div className="flex">
                                                        <div className="hidden xl:block w-[55px] h-[55px] mt-1">
                                                                <Image alt="keep learning icon" src={keepLearningIconSmall}/>
                                                        </div>
                                                        <div className="ml-[10px] xl:ml-[26px]">
                                                            <div className="flex justify-start items-center mb-2 p-0">
                                                                <div className="block xl:hidden w-[55px] h-[55px] mt-1">
                                                                    <Image alt="keep learning icon" src={keepLearningIconSmall}/>
                                                                </div>
                                                                <p className="text-2xl text-bvsNavy font-medium mb-0 xl:mb-2 pl-2 xl:pl-0">{t('keep-learning')}</p>
                                                            </div>
                                                            <p className="text-bvsDrakTeal text-base font-normal  max-w-[300px] xl:max-w-[280px]">{renderConnectByScore(beActiveScore, "keep-learning")}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="max-w-[360px] ml-0 xl:ml-20 h-[110px] relative mb-4 sm:mb-0">
                                                    <div className="flex">
                                                        <div className="hidden xl:block w-[55px] h-[55px] mt-1">
                                                            <Image alt="give icon" src={giveIconSmall}/>
                                                        </div>
                                                        <div className="ml-[10px] xl:ml-[26px]">
                                                            <div className="flex justify-start items-center mb-2 p-0">
                                                                <div className="block xl:hidden w-[55px] h-[55px] mt-1">
                                                                    <Image alt="give icon" src={giveIconSmall}/>
                                                                </div>
                                                                <p className="text-2xl text-[#003255] font-medium mb-0 xl:mb-2 pl-2 xl:pl-0">{t('give')}</p>
                                                            </div>
                                                            <p className="text-bvsDrakTeal text-base font-normal  max-w-[300px] xl:max-w-[280px]">
                                                                {renderConnectByScore(giveScore, "give")}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <div className="flex">
                                                <div className="max-w-[360px] h-[110px] relative flex-1">
                                                    <div className="flex">
                                                            <div className="hidden xl:block w-[55px] h-[55px] mt-1">
                                                                    <Image alt="take notice icon" src={takeNoticeIconSmall}/>
                                                            </div>
                                                        <div className="ml-[10px] xl:ml-[26px]">
                                                            <div className="flex justify-start items-center mb-2 p-0">
                                                                <div className="block xl:hidden w-[55px] h-[55px] mt-1">
                                                                        <Image alt="give icon" src={takeNoticeIconSmall}/>
                                                                </div>
                                                                <p className="text-2xl text-bvsNavy font-medium mb-0 xl:mb-2 pl-2 xl:pl-0">{t('take-notice')}</p>
                                                            </div>
                                                            <p className="text-bvsDrakTeal text-base font-normal max-w-[300px] xl:max-w-[280px]">{renderConnectByScore(takeNoticeScore, "take-notice")}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-auto xl:min-w-[350px] h-[110px] relative flex-1 hidden sm:flex justify-center items-end">
                                                    <div className=" flex items-center flex-col">
                                                        <div>
                                                            <Image alt="arrow-down-button" src={arrowButtonDown}/>
                                                        </div>
                                                        <p className="max-w-[118px] text-center text-black text-opacity-60 text-sm">{t('scrollDown')}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        </div>
                    </div>
                </div>
            <div className={"h-full sm:min-h-0 w-full  bg-bvsTealLight" + (i18n.language === 'vi-VN' ? " min-h-[800px]" : " min-h-[667px]")}>
                <div className="w-full flex justify-center pt-12 2xl:pt-28">
                    <p className="pl-2 sm:pl-0 text-[30px] font-semibold text-bvsNavy max-w-[700px] 2xl:max-w-[658px] leading-[44px]" dangerouslySetInnerHTML={{__html: t('tips')}}/>
                </div>
              <div className="relative w-full">
                    <div className="block absolute top-[140px] 2xl:top-[160px]  right-4  sm:right-56 xl:right-64 w-[260px] sm:w-[360px] 2xl:w-auto">
                        <Image alt="introduction image" src={introductionImage}/>
                    </div>
                    <div className="hidden sm:block absolute top-[70px] 2xl:top-[90px] right-0 w-[380px] 2xl:w-auto">
                        <Image alt="music" src={musicImage}/>
                    </div>
                </div>
            </div>
            <Connect/>
            <BeActive/>
            <KeepLearning />
            <Give/>
            <TakeNotice/>
        </div>
    )
}