import React, {useRef} from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

import Header from '../components/Header';

import connectIcon from '../../public/connect-icon.svg';
import porTraitFrame from '../../public/help/portrait-frame.png';
import mrLukeCurranImage from '../../public/help/mr-luke-curran.png';
import headImage from '../../public/help/head.png';
import mailBoxImage from '../../public/help/mail-box.png';
import teacherImage from '../../public/help/teacher.png';




export default function Connect() {
    const {t} = useTranslation()

    return (
        <div className="bg-bvsTealLight">
            <div className="relative">
                <Header />
                <div className="h-heightBody w-full pt-40">
                   <div className="w-full mx-auto  text-center">
                    <p className="font-medium text-[24px] mx-auto w-[740px] text-bvsNavy">If you have any questions or are worried about your wellbeing,
    there are lots of people you can talk to at BVIS</p>
                    </div>
                    <div className="flex justify-around mt-24 w-[900px] mx-auto">
                        <div className="flex flex-col items-center max-w-[204px]">

                            <div className="w-[151px] bg-bvsOrange relative">
                                <Image alt="frame image" src={porTraitFrame}/>
                                <div className="absolute z-10 w-full">
                                    <Image alt="teacher image" src={teacherImage}/>
                                </div>
                            </div>
                            <p className="font-medium text-xs text-bvsDrakTeal mt-[21px] text-center">Your class teacher​ in Primary or​ Your Form Tutor​ in Secondary</p>
                        </div>
                        <div className="flex flex-col items-center max-w-[204px] relative">
                            <div className="w-[151px] bg-bvsOrange">
                                <Image alt="house of head image" src={porTraitFrame}/>
                            </div>
                            <p className="font-medium text-xs text-bvsDrakTeal mt-[21px] text-center">Your Head of House or Head of Sixth Form​
                            in Secondary</p>
                        </div>
                        <div className="flex flex-col items-center max-w-[204px]">
                            <div className="w-[151px] bg-bvsOrange">
                                <Image alt="mr luke curran" src={porTraitFrame}/>
                            </div>
                                <span className="font-medium text-xs text-bvsDrakTeal mt-[21px] text-center">Mr. Luke Curran​​
                                The School Counsellor​
                                </span>
                                <span className="font-medium text-xs text-bvsDrakTeal text-center">Luke.Curran@bvisivietnam.com 
                                </span>
                        </div>
                        <div className="flex flex-col items-center max-w-[204px]">
                            <div className="w-[151px] bg-bvsOrange">
                                <Image alt="student council" src={porTraitFrame}/>
                            </div>
                            <p className="font-medium text-xs text-bvsDrakTeal mt-[21px] text-center">The Student Council​
                            Worry box​</p>
                            <p className="font-medium text-xs text-bvsDrakTeal text-center">Theworrybox@bvisivietnam.com​</p>
                        </div>
                    </div>
                    <p className="font-medium text-[36px] text-center text-bvsPeach">we are here to help</p>
                </div>
            </div>
        </div>
    )
}