import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { useAppContext } from '../context';

import Header from '../components/Header';

import porTraitFrame from '../../public/help/portrait-frame.png';
import mrLukeCurranImage from '../../public/help/mr-luke-curran.png';
import headImage from '../../public/help/head.png';
import mailBoxImage from '../../public/help/mail-box.png';
import teacherImage from '../../public/help/teacher.png';




export default function Connect() {
    const {t} = useTranslation();
    const {name} = useAppContext();

    return (
        <div className="bg-bvsTealLight h-full">
            <div className="relative">
                <Header />
                <div className="h-full lg:h-heightBody w-full flex justify-center items-center">
                   <div className="w-full">
                    <div className="w-full mx-auto  text-center">
                        <p className="font-semibold text-[18px] sm:text-[24px] mx-auto w-auto lg:w-[740px] text-bvsNavy pt-5">{t('helpTitle')}</p>
                        </div>
                        <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-around mt-10 2xl:mt-20 w-full lg:w-[900px] mx-auto space-x-0 lg:space-x-12">
                            <div className="flex flex-row lg:flex-col items-center sm:w-[400px] md:min-w-[500px] lg:min-w-0 max-w-[500px] lg:max-w-[204px] mb-6 lg:mb-0">
                                <div className="hover:scale-110 w-[115px] sm:w-[151px] relative">
                                    <div className="w-full h-full">
                                        <Image alt="frame image" src={porTraitFrame}/>
                                    </div>
                                    <div className="absolute z-10 top-[22px] right-[36px]">
                                        <Image alt="teacher image" src={teacherImage}/>
                                    </div>
                                </div>
                                <p className="font-semibold text-base text-bvsDrakTeal mt-[21px] text-center ml-1 sm:ml-5 lg:ml-0">{t('formTutor')}</p>
                            </div>
                            <div className="flex flex-row lg:flex-col items-center sm:w-[400px] md:min-w-[500px] lg:min-w-0 max-w-[500px] lg:max-w-[204px] mb-6 lg:mb-0 relative">
                                <div className="hover:scale-110 w-[115px] sm:w-[151px] relative">
                                    <div className="w-full h-full">
                                        <Image alt="frame image" src={porTraitFrame}/>
                                    </div>
                                    <div className="absolute z-10 top-[20px] right-[33px]">
                                        <Image alt="teacher image" src={headImage}/>
                                    </div>
                                </div>
                                <p className="font-semibold text-base text-bvsDrakTeal mt-[21px] text-center ml-1 sm:ml-5 lg:ml-0 max-w-[170px]">{t('headOfHouse')}</p>
                            </div>
                            <div className="flex flex-row lg:flex-col items-center sm:w-[400px] md:min-w-[500px] lg:min-w-0 max-w-[500px] lg:max-w-[204px] mb-6 lg:mb-0">
                                <div className="hover:scale-110  relative">
                                    <div className="w-[115px] sm:w-[151px]">
                                        <Image alt="Mr.Luke Curran image" src={mrLukeCurranImage}/>
                                    </div>
                                </div>
                                <div className="ml-1 sm:ml-5 lg:ml-0 text-center max-w-[190px]">
                                    <span className="font-semibold text-base text-bvsDrakTeal mt-[21px] text-center" dangerouslySetInnerHTML={{__html: t('mrLukeCurran')}} />
                                    <span className="font-semibold text-[11px] sm:text-sm text-bvsDrakTeal text-center">Luke.Curran@bvisivietnam.com </span>
                                </div>
                            </div>
                            <div className="flex flex-row lg:flex-col items-center sm:w-[400px] md:min-w-[500px] lg:min-w-0 max-w-[500px] lg:max-w-[204px] mb-6 lg:mb-0">
                                <div className="hover:scale-110 relative">
                                    <div className=" w-[115px] sm:w-[151px]">
                                        <Image alt="frame image" src={mailBoxImage}/>
                                    </div>
                                </div>
                                <div className="ml-1 sm:ml-5 lg:ml-0 max-w-[190px] lg:max-w-[100%] text-center">
                                    <p className="font-semibold text-base text-bvsDrakTeal mt-[21px]">{t('worryBox')}</p>
                                    <p className="font-semibold text-[11px] sm:text-sm text-bvsDrakTeal">Theworrybox@bvisivietnam.com​</p>
                                </div>
                            </div>
                        </div>
                        <p className="font-semibold text-[36px] text-center text-bvsPeach mt-[30px] 2xl:mt-[40px]">{`${name}, ${t('toHelp').toLocaleUpperCase()}`}</p>
                    </div>
                   </div>
            </div>
        </div>
    )
}