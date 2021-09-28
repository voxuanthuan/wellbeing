import Image from 'next/image';
import {useTranslation} from "react-i18next";
import Header from '../components/Header';
import Link from 'next/link';
import {useAppContext} from  '../context';

import connectIcon from '../../public/connect-icon.svg';
import beActiveIcon from '../../public/be-active-icon.svg';
import keepLearningIcon from '../../public/keep-learning-icon.svg';
import giveIcon from '../../public/give-icon.svg';
import takeNoticeIcon from '../../public/take-notice-icon.svg';

import thermometerMain1 from '../../public/thermomet/thermometer_main_1.svg';
import thermometerMain2 from '../../public/thermomet/thermometer_main_2.svg';
import thermometerMain3 from '../../public/thermomet/thermometer_main_3.svg';
import thermometerMain4 from '../../public/thermomet/thermometer_main_4.svg';
import thermometerMobile1 from '../../public/thermomet/thermometer_mobile_1.svg';
import thermometerMobile2 from '../../public/thermomet/thermometer_mobile_2.svg';
import thermometerMobile3 from '../../public/thermomet/thermometer_mobile_3.svg';
import thermometerMobile4 from '../../public/thermomet/thermometer_mobile_4.svg';
import thermometerSmall1 from '../../public/thermomet/thermometer_small_1.svg';
import thermometerSmall2 from '../../public/thermomet/thermometer_small_2.svg';
import thermometerSmall3 from '../../public/thermomet/thermometer_small_3.svg';
import thermometerSmall4 from '../../public/thermomet/thermometer_small_4.svg';



export default function Result() {
    const {t, i18n} = useTranslation();
    const {
        totalScore,
        connectScore,
        takeNoticeScore,
        keepLearningScore,
        beActiveScore,
        giveScore,
        name
    } = useAppContext();
    const renderThermometerMain = () => {
        if (totalScore <= 15) {
            return thermometerMain1;
        } else if (totalScore <= 30) {
            return thermometerMain2;
        } else if (totalScore <= 45) {
            return thermometerMain3;
        } else if (totalScore <= 60) {
            return thermometerMain4
        }
    }
    const renderThermometerSmall = (score) => {
        if (score <= 3) {
            return thermometerSmall1;
        } else if (score <= 6) {
            return thermometerSmall2;
        } else if (score <= 9) {
            return thermometerSmall3;
        } else if (score <= 12) {
            return thermometerSmall4;
        }
    }

    const renderThermometerMobile = (score) => {
        if (score <= 3) {
            return thermometerMobile1;
        } else if (score <= 6) {
            return thermometerMobile2;
        } else if (score <= 9) {
            return thermometerMobile3;
        } else if (score <= 12) {
            return thermometerMobile4;
        }
    }

    function renderOnDesktop() {
        return (
            <div className="hidden lg:flex justify-around text-bvsDrakTeal">
                <div className="flex flex-col justify-center rounded-[20px] h-[250px] lg:h-auto lg:rounded-none  w-[400px] lg:w-[115px] bg-white bg-opacity-40 lg:bg-transparent lg:bg-opacity-100">
                    <div className="w-full">
                        <div className="mb-[15px] w-full lg:max-w-180px">
                            <div className="flex justify-center">
                                <Image src={renderThermometerSmall(connectScore)}/>
                            </div>
                        </div>
                        <div className=" w-full flex flex-row-reverse lg:flex-col items-center justify-around">
                            <p className="text-base lg:text-xs font-medium mb-0 lg:mb-[13px]">{t('connect')}</p>
                            <div className="w-[30px] lg:w-auto">
                                <Image src={connectIcon}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center rounded-[20px] h-[250px] lg:h-auto lg:rounded-none  w-[400px] lg:w-[115px] bg-white bg-opacity-40 lg:bg-transparent lg:bg-opacity-100">
                    <div className="w-full">
                        <div className="mb-[15px] w-full lg:max-w-180px">
                            <div className="flex justify-center">
                                <Image src={renderThermometerSmall(beActiveScore)}/>
                            </div>
                        </div>
                        <div className=" w-full flex flex-row-reverse lg:flex-col items-center justify-around">
                            <p className="text-base lg:text-xs font-medium mb-0 lg:mb-[13px]">{t('be-active')}</p>
                            <div className="w-[30px] lg:w-auto">
                                <Image src={beActiveIcon}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center rounded-[20px] h-[250px] lg:h-auto lg:rounded-none  w-[400px] lg:w-[115px] bg-white bg-opacity-40 lg:bg-transparent lg:bg-opacity-100">
                    <div className="w-full">
                        <div className="mb-[15px] w-full lg:max-w-180px">
                            <div className="flex justify-center">
                                <Image src={renderThermometerSmall(keepLearningScore)}/>
                            </div>
                        </div>
                        <div className=" w-full flex flex-row-reverse lg:flex-col items-center justify-around">
                            <p className="text-base lg:text-xs font-medium mb-0 lg:mb-[13px]">{t('keep-learning')}</p>
                            <div className="w-[30px] lg:w-auto">
                                <Image src={keepLearningIcon}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center rounded-[20px] h-[250px] lg:h-auto lg:rounded-none  w-[400px] lg:w-[115px] bg-white bg-opacity-40 lg:bg-transparent lg:bg-opacity-100">
                    <div className="w-full">
                        <div className="mb-[15px] w-full lg:max-w-180px">
                            <div className="flex justify-center">
                                <Image src={renderThermometerSmall(giveScore)}/>
                            </div>
                        </div>
                        <div className=" w-full flex flex-row-reverse lg:flex-col items-center justify-around">
                            <p className="text-base lg:text-xs font-medium mb-0 lg:mb-[13px]">{t('give')}</p>
                            <div className="w-[30px] lg:w-auto">
                                <Image src={giveIcon}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center rounded-[20px] h-[250px] lg:h-auto lg:rounded-none  w-[400px] lg:w-[115px] bg-white bg-opacity-40 lg:bg-transparent lg:bg-opacity-100">
                    <div className="w-full">
                        <div className="mb-[15px] w-full lg:max-w-180px">
                            <div className="flex justify-center">
                                <Image src={renderThermometerSmall(takeNoticeScore)}/>
                            </div>
                        </div>
                        <div className=" w-full flex flex-row-reverse lg:flex-col items-center justify-around">
                            <p className="text-base lg:text-xs font-medium mb-0 lg:mb-[13px]">{t('take-notice')}</p>
                            <div className="w-[30px] lg:w-auto">
                                <Image src={takeNoticeIcon}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    function renderOnMobile() {
        return (
            <div className="lg:hidden flex justify-around text-bvsDrakTeal space-x-3 md:space-x-10 mt-10">
                <div className="flex-1">
                    <div className="flex justify-end">
                        <p className="max-w-[200px] text-[22px] font-semibold text-bvsNavy leading-[27px] mb-8 text-right">{t('wellbeingTracker')}</p>
                    </div>
                    <div className="flex justify-end mb-3 md:mb-6">
                        <div className="flex flex-col justify-center rounded-[20px] h-[250px] lg:h-auto lg:rounded-none w-[177px] bg-white bg-opacity-40 relative right-0">
                            <div>
                                <div className="mb-[15px] w-full lg:max-w-180px">
                                    <div className="flex justify-center">
                                        <Image src={renderThermometerMobile(beActiveScore)}/>
                                    </div>
                                </div>
                                <div className=" w-full flex flex-row-reverse items-center justify-around">
                                    <p className="text-base lg:text-xs font-medium mb-0 lg:mb-[13px]">{t('be-active')}</p>
                                    <div className="w-[30px] h-[30px] lg:w-auto">
                                        <Image src={beActiveIcon}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end mb-3 md:mb-6">
                        <div className="flex flex-col justify-center rounded-[20px] h-[250px] lg:h-auto lg:rounded-none  w-[177px] bg-white bg-opacity-40 relative right-0">
                            <div className="w-full">
                                <div className="mb-[15px] w-full lg:max-w-180px">
                                    <div className="flex justify-center">
                                        <Image src={renderThermometerMobile(giveScore)}/>
                                    </div>
                                </div>
                                <div className=" w-full flex flex-row-reverse items-center justify-around">
                                    <p className="text-base lg:text-xs font-medium mb-0 lg:mb-[13px]">{t('give')}</p>
                                    <div className="w-[30px] h-[30px] lg:w-auto">
                                        <Image src={giveIcon}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <div className="flex flex-col items-center mt-12 mr-4">
                            <Link href="/action-plan">
                                <button className="w-[144px] h-[35px] bg-bvsPeach rounded-[15px] text-[12px] font-medium text-white mb-2">
                                    <a>{t('actionPlanButotn').toLocaleUpperCase()}</a>
                                </button>
                            </Link>
                            <p className="text-[10px] text-black opacity-25 max-w-[140px] text-center">{t('clickToActionPlan')}</p>
                        </div>
                    </div>
                </div>
                <div className="flex-1" >
                    <div className="flex flex-col justify-center rounded-[20px] h-[250px] lg:h-auto lg:rounded-none  w-[177px] bg-white bg-opacity-40 mb-3 md:mb-6">
                        <div className="w-full">
                            <div className="mb-[15px] w-full lg:max-w-180px">
                                <div className="flex justify-center">
                                    <Image src={renderThermometerMobile(connectScore)}/>
                                </div>
                            </div>
                            <div className=" w-full flex flex-row-reverse items-center justify-around">
                                <p className="text-base lg:text-xs font-medium mb-0 lg:mb-[13px]">{t('connect')}</p>
                                <div className="w-[30px] h-[30px] lg:w-auto">
                                    <Image src={connectIcon}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center rounded-[20px] h-[250px] lg:h-auto lg:rounded-none  w-[177px] bg-white bg-opacity-40 mb-3 md:mb-6">
                        <div className="w-full">
                            <div className="mb-[15px] w-full lg:max-w-180px">
                                <div className="flex justify-center">
                                    <Image src={renderThermometerMobile(keepLearningScore)}/>
                                </div>
                            </div>
                            <div className=" w-full flex flex-row-reverse items-center justify-around">
                                <p className="text-base lg:text-xs font-medium mb-0 lg:mb-[13px]">{t('keep-learning')}</p>
                                <div className="w-[30px] h-[30px] lg:w-auto">
                                    <Image src={keepLearningIcon}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex flex-col justify-center rounded-[20px] h-[250px] lg:h-auto lg:rounded-none  w-[177px] bg-white bg-opacity-40 mb-3 md:mb-6">
                        <div className="w-full">
                            <div className="mb-[15px] w-full lg:max-w-180px">
                                <div className="flex justify-center">
                                    <Image src={renderThermometerMobile(takeNoticeScore)}/>
                                </div>
                            </div>
                            <div className=" w-full flex flex-row-reverse items-center justify-around">
                                <p className="text-base lg:text-xs font-medium mb-0 lg:mb-[13px]">{t('take-notice')}</p>
                                <div className="w-[30px] h-[30px] lg:w-auto">
                                    <Image src={takeNoticeIcon}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <div className="bg-bvsTealLight lg:bg-[#FAF5ED] bg-no-repeat bg-cover">
            <Header/>
            <div className="h-full lg:h-heightBody">
                <div className="flex flex-col h-44 pt-[40px] items-center">
                    <p className="font-medium text-[18px]">{`${name}${t('suffix')}`}</p>
                    <h1 className="font-semibold text-[36px] text-bvsPeach inline-block">{t('wellbeingReport').toLocaleUpperCase()}</h1>
                </div>
                <div className="w-full flex flex-col lg:flex-row">
                     <p className="lg:hidden text-[22px] font-semibold text-bvsNavy leading-[27px] mb-7 text-center">{t('overallWellbeing')}</p>
                    <div className="w-full lg:w-1/3">
                        <p className="hidden lg:block text-[22px] font-semibold text-bvsNavy leading-[27px] mb-20 text-center">{t('overallWellbeing')}</p>
                       <div className="flex flex-col items-center">
                           <div className="flex">
                               <div className="text-xs font-normal text-bvsDrakTeal text-right leading-[14px] relative -left-10 top-[50px] lg:-left-3 lg:top-[44px] xl:-left-10">
                                    <p
                                        className={"mb-[14px] xl:mb-[29px] "  + (i18n.language === 'vi-VN' ? "max-w-[123px]" : "max-w-[96px]")}
                                    >{t('wellbeingChampion')}</p>
                                    <p className={"mb-[29px] "  + (i18n.language === 'vi-VN' ? "max-w-[123px]" : "max-w-[96px]")}>{t('doingWell')}</p>
                                    <p className={"mb-[29px] "  + (i18n.language === 'vi-VN' ? "max-w-[123px]" : "max-w-[96px]")}>{t('makingProcess')}</p>
                                    <p className={"mb-[29px] "  + (i18n.language === 'vi-VN' ? "max-w-[123px]" : "max-w-[96px]")}>{t('trySomethingNew')}</p>
                               </div>
                               <div>
                                 <div className="w-[205px] lg:w-[180px] xl:w-[205px]">
                                   <Image src={renderThermometerMain()}/>
                                </div>
                               </div>
                           </div>
                       </div>
                    </div>
                    <div className="w-full lg:w-2/3 flex">
                        <div className="flex flex-col w-full lg:w-5/6">
                            <p className="hidden lg:block text-[22px] font-semibold text-bvsNavy leading-[27px] mb-32 text-center">{t('wellbeingTracker')}</p>
                            {renderOnMobile()}
                            {renderOnDesktop()}
                            <div className="hidden lg:flex flex-col items-center mt-12">
                                <Link href="/action-plan">
                                    <button className="w-[144px] h-[35px] bg-bvsPeach rounded-[15px] text-[12px] font-medium text-white mb-2">
                                        <a>{t('actionPlanButotn')}</a>
                                    </button>
                                </Link>
                                <p className="text-[10px] text-black opacity-25 max-w-[140px] text-center">{t('clickToActionPlan')}</p>
                            </div>
                        </div>
                        <div className="w-1/6 h-2/4 hidden lg:block relative top-[164px] opacity-40">
                            <div className="text-[7px] font-medium text-black mb-[6px] xl:mb-1">
                                <div className="flex items-center">
                                    <div className="w-1 h-1 bg-black rounded-[4px]"></div>
                                    <p className="ml-3 max-w-[108px] h-[14px]">{t('wellbeingChampion')}</p>
                                </div>
                            </div>
                            <div className="text-[7px] font-medium text-black mb-1">
                                <div className="flex items-center">
                                    <div className="w-1 h-1 bg-black rounded-[4px]"></div>
                                    <p className="ml-3 max-w-[108px] h-[14px]">{t('doingWell')}</p>
                                </div>
                            </div>
                            <div className="text-[7px] font-medium text-black mb-1">
                                <div className="flex items-center">
                                    <div className="w-1 h-1 bg-black rounded-[4px]"></div>
                                    <p className="ml-3 max-w-[108px] h-[14px]">{t('makingProcess')}</p>
                                </div>
                            </div>
                            <div className="text-[7px] font-medium text-black mb-1">
                                <div className="flex items-center">
                                    <div className="w-1 h-1 bg-black rounded-[4px]"></div>
                                    <p className="ml-3 max-w-[108px] h-[14px]">{t('trySomethingNew')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



