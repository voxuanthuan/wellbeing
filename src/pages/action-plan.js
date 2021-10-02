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

import connectIconSmall from '../../public/connect/connect-dot-small.svg';
import beActiveIconSmall from '../../public/be-active/be-active-dot-small.svg';
import keepLearningIconSmall from '../../public/keep-learning/keep-learning-dot-small.svg';
import giveIconSmall from '../../public/give/give-dot-small.svg';
import takeNoticeIconSmall from '../../public/take-notice/take-notice-dot-small.svg';

import musicImage from '../../public/music-image.svg';
import introductionImage from '../../public/introduction.png';


export default function ActionPlan() {
    const {t} = useTranslation();
    const {name} = useAppContext();
    return (
        <div>
            <div className="bg-[#FAF5ED] w-full h-screen relative">
            <Header />
                <div className="absolute z-10 h-full top-0 bottom-0 right-0 left-0">
                    <div className="h-full flex">
                        <div className="w-1/3 h-full">
                        <div className="mt-40 ml-20 relative">
                                <div className="absolute -top-4 -left-4 w-[81px] h-[71px]">
                                    <Image alt="quote image" src={quoteIcon} />
                                </div>
                            <p className="text-black text-opacity-60 relative z-10">{t('topTip')}</p>
                            <p className="max-w-[207px] text-[24px] font-semibold text-bvsTeal leading-[29px] relative z-10">{t('topTipContent')}</p>
                        </div>
                        <div className="mt-40 flex justify-end">
                            <p className="w-full text-[#1E96A5] text-[24px] font-semibold max-w-[327px] leading-7 relative z-10">{t('importantThing')}</p>
                        </div>
                        <Link href="/result" passHref>
                                <button className="w-full hover:scale-105 hover:opacity-40 text-black text-opacity-60 mt-20">
                                        <div className="w-full flex items-center justify-center space-x-2">
                                            <div className="w-[18px] h-[18px] rounded-[14px]">
                                                <Image alt="arrow back" src={arrowBack}/>
                                                </div>
                                                <p><a>{t('backToReport')}</a></p>
                                        </div>
                                </button>
                        </Link>
                        </div>
                        <div className="w-2/3 bg-bvsTealLight relative top-0">
                            <div className="ml-20">
                                <p className="mt-[20px] mb-[13px] text-[20px] font-medium">{`${name}${t('suffix')}`}</p>
                                <h1 className="text-bvsPeach font-bold text-[36px] mb-[81px]" dangerouslySetInnerHTML={{__html: t('wellbeingActionPlan').toLocaleUpperCase()}}></h1>
                                <div className="flex  mb-16">
                                    <div className="max-w-[360px] h-[110px] relative">
                                        <div className="flex">
                                            <div className="w-[55px] h-[55px] mt-1">
                                                <Image alt="connect icon" src={connectIconSmall}/>
                                            </div>
                                            <div className="ml-[26px]">
                                                <p className="text-2xl text-bvsNavy font-medium mb-2 p-0">{t('connect')}</p>
                                                <p className="text-bvsDrakTeal text-base font-normal  max-w-[280px]">{t('connectGuide')}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="max-w-[360px] ml-20 h-[110px] relative">
                                        <div className="flex">
                                            <div className="w-[55px] h-[55px] mt-1">
                                                <Image alt="beactive icon" src={beActiveIconSmall}/>
                                            </div>
                                            <div className="ml-[26px]">
                                                <p className="text-2xl text-bvsNavy font-medium mb-2">{t('be-active')}</p>
                                                <p className="text-bvsDrakTeal text-base font-normal  max-w-[280px]">
                                                    {t('beActiveGuide')}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="flex  mb-16">
                                <div className="max-w-[360px] h-[110px] relative">
                                        <div className="flex">
                                            <div className="w-[55px] h-[55px] mt-1">
                                                    <Image alt="keep learning icon" src={keepLearningIconSmall}/>
                                            </div>
                                            <div className="ml-[26px]">
                                                <p className="text-2xl text-bvsNavy font-medium mb-2">{t('keep-learning')}</p>
                                                <p className="text-bvsDrakTeal text-base font-normal  max-w-[280px]">{t('keepLearningGuide')}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="max-w-[360px] ml-20 h-[110px] relative">
                                        <div className="flex">
                                            <div className="w-[55px] h-[55px]  mt-1">
                                                <Image alt="give icon" src={giveIconSmall}/>
                                            </div>
                                            <div className="ml-[26px]">
                                                <p className="text-2xl text-[#003255] font-medium mb-2">{t('give')}</p>
                                                <p className="text-bvsDrakTeal text-base font-normal  max-w-[280px]">
                                                    {t('givingGuide')}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div>
                                <div className="max-w-[360px] h-[110px] relative">
                                    <div className="flex">
                                            <div className="w-[55px] h-[55px] mt-1">
                                                    <Image alt="take notice icon" src={takeNoticeIconSmall}/>
                                            </div>
                                        <div className="ml-[26px]">
                                            <p className="text-2xl text-bvsNavy font-medium mb-2">{t('take-notice')}</p>
                                            <p className="text-bvsDrakTeal text-base font-normal  max-w-[280px]">{t('takeNoticeGuide')}</p>
                                        </div>
                                    </div>
                                    </div>
                                </div>

                                <div className="flex mt-[60px] items-center">
                                        <Link href="/help" passHref>
                                            <button className="hover:scale-105 w-[130px] h-[39px] bg-bvsPeach font-medium rounded-[17px] text-white text-base"><a>{t('needHelp').toLocaleUpperCase()}</a></button>
                                        </Link>
                                        <p className="text-[16px] text-black text-opacity-60 max-w-[338px] ml-10">{t('clickGotHelp')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-screen w-full bg-bvsTealLight">
                <div className="pt-[120px] pl-[286px]">
                    <p className="text-[36px] font-semibold text-bvsNavy max-w-[658px] leading-[44px]">{t('tips')}</p>
                </div>
              <div className="relative w-full">
                    <div className="absolute top-[160px] right-64">
                        <Image src={introductionImage}/>
                    </div>
                    <div className="absolute top-[90px] right-0">
                        <Image src={musicImage}/>
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