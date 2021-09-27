import React, {useRef} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import {useAppContext} from  '../context';

import Header from '../components/Header';
import quizColor from '../../public/quiz_color.png';

import connectIcon from '../../public/connect-icon.svg';
import beActiveIcon from '../../public/be-active-icon.svg';
import keepLearningIcon from '../../public/keep-learning-icon.svg';
import giveIcon from '../../public/give-icon.svg';
import takeNoticeIcon from '../../public/take-notice-icon.svg';





export default function ActionPlan() {
    const {t} = useTranslation();
    const {name} = useAppContext();
    return (
        <div className="bg-[#FAF5ED] w-full h-screen relative">
           <Header />
            <div className="absolute z-10 h-full top-0 bottom-0 right-0 left-0">
                <div className="h-full flex">
                    <div className="w-1/3 h-full">
                       <div className="h-full w-full flex items-center justify-center">
                            <div >
                                <Image src={quizColor}/>
                            </div>
                        </div>
                        <div className="relative left-5 bottom-[120px] text-left text-xs">
                            <p className="font-normal mb-[9px] text-black opacity-25">{t('topTip')}</p>
                            <p className="font-medium text-bvsTeal max-w-[391px]">{t('topTipContent')}</p>
                        </div>
                    </div>
                    <div className="w-2/3 bg-bvsTealLight relative top-0">
                        <div className="ml-20">
                            <p className="mt-[110px] mb-[13px]">Thuan</p>
                            <h1 className="text-bvsPeach font-semibold text-[36px] mb-[81px]">{t('wellbeingActionPlay')}</h1>
                            <div className="flex  mb-16">
                                <div className="max-w-[360px] h-[110px] relative">
                                    <div className="flex items-center">
                                        <Link href="connect">
                                            <div className="w-[55px] h-[55px]">
                                                <button>
                                                    <Image src={connectIcon}/>
                                                </button>
                                            </div>
                                        </Link>
                                        <div className="ml-[26px]">
                                            <p className="text-2xl text-bvsNavy font-medium mb-2">{t('connect')}</p>
                                            <p className="text-bvsDrakTeal text-xs font-normal  max-w-[280px]">{t('connectGuide')}</p>
                                        </div>
                                    </div>
                                    <Link href="/connect">
                                        <button>
                                            <p className="text-[10px] font-normal text-black opacity-25 text-right mt-10 pr-2 absolute bottom-0 right-0">{t('learnMore')}</p>
                                        </button>
                                    </Link>
                                </div>
                                <div className="max-w-[360px] ml-20 h-[110px] relative">
                                    <div className="flex items-center">
                                        <Link href="be-active">
                                            <div className="w-[55px] h-[55px]">
                                                <button>
                                                    <Image src={beActiveIcon}/>
                                                </button>
                                            </div>
                                        </Link>
                                        <div className="ml-[26px]">
                                            <p className="text-2xl text-bvsNavy font-medium mb-2">{t('be-active')}</p>
                                            <p className="text-bvsDrakTeal text-xs font-normal  max-w-[280px]">
                                                {t('beActiveGuide')}
                                            </p>
                                        </div>
                                    </div>
                                    <Link href="/be-active">
                                        <button>
                                            <p className="text-[10px] font-normal text-black opacity-25 text-right mt-10 pr-2 absolute bottom-0 right-0">{t('learnMore')}</p>
                                        </button>
                                    </Link>
                                </div>
                                
                            </div>
                            <div className="flex  mb-16">
                            <div className="max-w-[360px] h-[110px] relative">
                                    <div className="flex items-center">
                                        <Link href="/keep-learning">
                                            <div className="w-[55px] h-[55px]">
                                                <button>
                                                    <Image src={keepLearningIcon}/>
                                                </button>
                                            </div>
                                        </Link>
                                        <div className="ml-[26px]">
                                            <p className="text-2xl text-bvsNavy font-medium mb-2">{t('keep-learning')}</p>
                                            <p className="text-bvsDrakTeal text-xs font-normal  max-w-[280px]">{t('keepLearningGuide')}</p>
                                        </div>
                                    </div>
                                    <Link href="/keep-learning">
                                        <button>
                                            <p className="text-[10px] font-normal text-black opacity-25 text-right mt-10 pr-2 absolute bottom-0 right-0">{t('learnMore')}</p>
                                        </button>
                                    </Link>
                                </div>
                                <div className="max-w-[360px] ml-20 h-[110px] relative">
                                    <div className="flex items-center">
                                        <Link href="/give">
                                            <div className="w-[55px] h-[55px]">
                                                <button>
                                                    <Image src={giveIcon}/>
                                                </button>
                                            </div>
                                        </Link>
                                        <div className="ml-[26px]">
                                            <p className="text-2xl text-[#003255] font-medium mb-2">{t('give')}</p>
                                            <p className="text-bvsDrakTeal text-xs font-normal  max-w-[280px]">
                                                {t('givingGuide')}
                                            </p>
                                        </div>
                                    </div>
                                    <Link href="/give">
                                        <button>
                                            <p className="text-[10px] font-normal text-black opacity-25 text-right mt-10 pr-2 absolute bottom-0 right-0">{t('learnMore')}</p>
                                        </button>
                                    </Link>
                                </div>
                                
                            </div>
                            <div>
                            <div className="max-w-[360px] h-[110px] relative">
                                    <div className="flex items-center">
                                        <Link href="/take-notice">
                                            <div className="w-[55px] h-[55px]">
                                                <button>
                                                    <Image src={takeNoticeIcon}/>
                                                </button>
                                            </div>
                                        </Link>
                                        <div className="ml-[26px]">
                                            <p className="text-2xl text-bvsNavy font-medium mb-2">{t('take-notice')}</p>
                                            <p className="text-bvsDrakTeal text-xs font-normal  max-w-[280px]">{t('takeNoticeGuide')}</p>
                                        </div>
                                    </div>
                                    <Link href="/take-notice">
                                        <button>
                                            <p className="text-[10px] font-normal text-black opacity-25 text-right mt-10 pr-2 absolute bottom-0 right-0">{t('learnMore')}</p>
                                        </button>
                                    </Link>
                                </div>
                            </div>

                            <div className="flex items-center mt-20">
                                <Link href="/result">
                                    <button>
                                        <p className="text-black opacity-25">{t('backToReport')}</p>
                                    </button>
                                </Link>
                                <div className="flex items-center ml-60">
                                    <p className="text-[10px] text-black opacity-25 max-w-[209px]">{t('clickGotHelp')}</p>
                                    <Link href="/help">
                                        <button className="w-[110px] h-[39px] bg-bvsPeach font-medium rounded-[17px] text-white">{t('needHelp')}</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}