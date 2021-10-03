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
    
    const isVietNamese = () => {
        if (i18n.language === "vi-VN") {
            return true;
        }
        return false;
    }

    function renderOnDesktop() {
        return (
            <div className="hidden lg:flex justify-around text-bvsDrakTeal space-x-0">
                <div className="flex flex-col justify-center rounded-[20px] h-[250px] lg:h-auto lg:rounded-none  w-[400px] lg:w-[120px] bg-white bg-opacity-40 lg:bg-transparent lg:bg-opacity-100">
                    <div className="w-full">
                        <div className="mb-[15px] w-full lg:max-w-180px">
                            <div className="flex justify-center">
                                <Image alt="image" src={renderThermometerSmall(connectScore)}/>
                            </div>
                        </div>
                        <div className=" w-full flex flex-row-reverse lg:flex-col items-center justify-around">
                            <p className="text-base font-medium mb-0 lg:mb-[13px]">{t('connect')}</p>
                            <div className="w-[30px] lg:w-auto">
                                <Image alt="image" src={connectIcon}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center rounded-[20px] h-[250px] lg:h-auto lg:rounded-none  w-[400px] lg:w-[120px] bg-white bg-opacity-40 lg:bg-transparent lg:bg-opacity-100">
                    <div className="w-full">
                        <div className="mb-[15px] w-full lg:max-w-180px">
                            <div className="flex justify-center">
                                <Image alt="image" src={renderThermometerSmall(beActiveScore)}/>
                            </div>
                        </div>
                        <div className=" w-full flex flex-row-reverse lg:flex-col items-center justify-around">
                            <p className="text-base font-medium mb-0 lg:mb-[13px]">{t('be-active')}</p>
                            <div className="w-[30px] lg:w-auto">
                                <Image alt="image" src={beActiveIcon}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center rounded-[20px] h-[250px] lg:h-auto lg:rounded-none  w-[400px] lg:w-[120px] bg-white bg-opacity-40 lg:bg-transparent lg:bg-opacity-100">
                    <div className="w-full">
                        <div className="mb-[15px] w-full lg:max-w-180px">
                            <div className="flex justify-center">
                                <Image alt="image" src={renderThermometerSmall(keepLearningScore)}/>
                            </div>
                        </div>
                        <div className=" w-full flex flex-row-reverse lg:flex-col items-center justify-around">
                            <p className="text-base font-medium mb-0 lg:mb-[13px]">{t('keep-learning')}</p>
                            <div className="w-[30px] lg:w-auto">
                                <Image alt="image" src={keepLearningIcon}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center rounded-[20px] h-[250px] lg:h-auto lg:rounded-none  w-[400px] lg:w-[120px] bg-white bg-opacity-40 lg:bg-transparent lg:bg-opacity-100">
                    <div className="w-full">
                        <div className="mb-[15px] w-full lg:max-w-180px">
                            <div className="flex justify-center">
                                <Image alt="image" src={renderThermometerSmall(giveScore)}/>
                            </div>
                        </div>
                        <div className=" w-full flex flex-row-reverse lg:flex-col items-center justify-around">
                            <p className="text-base font-medium mb-0 lg:mb-[13px]">{t('give')}</p>
                            <div className="w-[30px] lg:w-auto">
                                <Image alt="image" src={giveIcon}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center rounded-[20px] h-[250px] lg:h-auto lg:rounded-none  w-[400px] lg:w-[120px] bg-white bg-opacity-40 lg:bg-transparent lg:bg-opacity-100">
                    <div className="w-full">
                        <div className="mb-[15px] w-full lg:max-w-180px">
                            <div className="flex justify-center">
                                <Image alt="image" src={renderThermometerSmall(takeNoticeScore)}/>
                            </div>
                        </div>
                        <div className=" w-full flex flex-row-reverse lg:flex-col items-center justify-around">
                            <p className="text-base font-medium mb-0 lg:mb-[13px]">{t('take-notice')}</p>
                            <div className="w-[30px] lg:w-auto">
                                <Image alt="image" src={takeNoticeIcon}/>
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
                        <p className="max-w-[200px] text-[24px] font-semibold text-bvsNavy leading-[27px] mb-8 text-right">{t('wellbeingTracker')}</p>
                    </div>
                    <div className="flex justify-end mb-3 md:mb-6">
                        <div className="flex flex-col justify-center rounded-[20px] h-[250px] lg:h-auto lg:rounded-none w-[177px] bg-white bg-opacity-40 relative right-0">
                            <div>
                                <div className="mb-[15px] w-full lg:max-w-180px">
                                    <div className="flex justify-center">
                                        <Image alt="image" src={renderThermometerMobile(beActiveScore)}/>
                                    </div>
                                </div>
                                <div className=" w-full flex flex-row-reverse items-center justify-around">
                                    <p className="text-base lg:text-xs font-medium mb-0 lg:mb-[13px]">{t('be-active')}</p>
                                    <div className="w-[30px] h-[30px] lg:w-auto">
                                        <Image alt="image" src={beActiveIcon}/>
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
                                        <Image alt="image" src={renderThermometerMobile(giveScore)}/>
                                    </div>
                                </div>
                                <div className=" w-full flex flex-row-reverse items-center justify-around">
                                    <p className="text-base lg:text-xs font-medium mb-0 lg:mb-[13px]">{t('give')}</p>
                                    <div className="w-[30px] h-[30px] lg:w-auto">
                                        <Image alt="image" src={giveIcon}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <div className="flex flex-col items-center mt-12 mr-4">
                            <Link href="/action-plan" passHref>
                                <button className={"bg-bvsPeach rounded-[15px] text-base font-medium text-white mb-2 " + (isVietNamese() ? "w-[200px] h-[40px]" : "w-[144px] h-[35px]")}>
                                    <a>{t('actionPlanButotn').toLocaleUpperCase()}</a>
                                </button>
                            </Link>
                            <p className={"text-base text-black text-opacity-60 text-center "  + (isVietNamese() ? "max-w-[260px]" : "max-w-[200px]")}>{t('clickToActionPlan')}</p>

                        </div>
                    </div>
                </div>
                <div className="flex-1" >
                    <div className="flex flex-col justify-center rounded-[20px] h-[250px] lg:h-auto lg:rounded-none  w-[177px] bg-white bg-opacity-40 mb-3 md:mb-6">
                        <div className="w-full">
                            <div className="mb-[15px] w-full lg:max-w-180px">
                                <div className="flex justify-center">
                                    <Image alt="image" src={renderThermometerMobile(connectScore)}/>
                                </div>
                            </div>
                            <div className=" w-full flex flex-row-reverse items-center justify-around">
                                <p className="text-base lg:text-xs font-medium mb-0 lg:mb-[13px]">{t('connect')}</p>
                                <div className="w-[30px] h-[30px] lg:w-auto">
                                    <Image alt="image" src={connectIcon}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center rounded-[20px] h-[250px] lg:h-auto lg:rounded-none  w-[177px] bg-white bg-opacity-40 mb-3 md:mb-6">
                        <div className="w-full">
                            <div className="mb-[15px] w-full lg:max-w-180px">
                                <div className="flex justify-center">
                                    <Image alt="image" src={renderThermometerMobile(keepLearningScore)}/>
                                </div>
                            </div>
                            <div className=" w-full flex flex-row-reverse items-center justify-around">
                                <p className="text-base lg:text-xs font-medium mb-0 lg:mb-[13px]">{t('keep-learning')}</p>
                                <div className="w-[30px] h-[30px] lg:w-auto">
                                    <Image alt="image" src={keepLearningIcon}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex flex-col justify-center rounded-[20px] h-[250px] lg:h-auto lg:rounded-none  w-[177px] bg-white bg-opacity-40 mb-3 md:mb-6">
                        <div className="w-full">
                            <div className="mb-[15px] w-full lg:max-w-180px">
                                <div className="flex justify-center">
                                    <Image alt="image" src={renderThermometerMobile(takeNoticeScore)}/>
                                </div>
                            </div>
                            <div className=" w-full flex flex-row-reverse items-center justify-around">
                                <p className="text-base lg:text-xs font-medium mb-0 lg:mb-[13px]">{t('take-notice')}</p>
                                <div className="w-[30px] h-[30px] lg:w-auto">
                                    <Image alt="image" src={takeNoticeIcon}/>
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
            <div className="h-full 2xl:h-heightBody">
                <div className="flex flex-col h-32 pt-4 2xl:pt-[10px] items-center">
                    <p className="font-medium text-[20px]">{`${name}${t('suffix')}`}</p>
                    <h1 className="font-semibold text-[36px] text-bvsPeach inline-block">{t('wellbeingReport').toLocaleUpperCase()}</h1>
                </div>
                <div className="w-full flex flex-col 2xl:flex-row">
                     <p className="lg:hidden text-[24px] font-semibold text-bvsNavy leading-[27px] mb-5 text-center">{t('overallWellbeing')}</p>
                    <div className="w-full 2xl:w-1/3">
                        <p className="hidden lg:block text-[24px] font-semibold text-bvsNavy leading-[27px] mb-10 2xl:mb-20 text-center">{t('overallWellbeing')}</p>
                       <div className="flex flex-col items-center">
                           <div className="flex">
                               <div className="text-base font-normal text-bvsDrakTeal leading-[16px] relative -left-10 top-[50px] lg:-left-3 lg:top-[44px] xl:-left-10">
                                    <p
                                        className={"mb-[14px] xl:mb-[29px] flex justify-end text-right "
                                        + (i18n.language === 'vi-VN' ? "max-w-[180px] " : "max-w-[130px] ") + (totalScore <= 60 && totalScore > 45 ? "text-bvsPeach font-semibold" : "")}
                                    >{t('wellbeingChampion')}</p>
                                    <p className={"mb-[29px] text-right " 
                                        + (i18n.language === 'vi-VN' ? "max-w-[180px] " : "max-w-[130px] ")
                                        + (totalScore <= 45 && totalScore > 30 ? "text-bvsPeach font-semibold" : "")
                                        }>{t('doingWell')}</p>
                                    <p className={"mb-[29px] text-right "
                                         + (i18n.language === 'vi-VN' ? "max-w-[180px] " : "max-w-[130px] ")
                                         + (totalScore <= 30 && totalScore > 15 ? "text-bvsPeach font-semibold" : "")
                                        }>{t('makingProcess')}</p>
                                    <p className={"mb-[29px] text-right " 
                                         + (i18n.language === 'vi-VN' ? "max-w-[180px] " : "max-w-[130px] ")
                                         + (totalScore <= 15 ? "text-bvsPeach font-semibold" : "")
                                         }>{t('trySomethingNew')}</p>
                               </div>
                               <div>
                                 <div className="w-[205px] lg:w-[180px] xl:w-[205px]">
                                   <Image alt="image" src={renderThermometerMain()}/>
                                </div>
                               </div>
                           </div>
                       </div>
                    </div>
                    <p className="hidden lg:block 2xl:hidden text-[24px] font-semibold text-bvsNavy leading-[27px] mt-10 mb-10 xl:mb-5 xl:mt-5 text-center">{t('wellbeingTracker')}</p>
                    <div className="w-full 2xl:w-2/3 flex">
                        <div className={"flex flex-col w-full " + (isVietNamese() ? "lg:w-[80%] 2xl:w-[70%]" : "lg:w-[80%] 2xl:w-5/6 ")}>
                            <p className="hidden 2xl:block text-[24px] font-semibold text-bvsNavy leading-[27px] mb-20 text-center">{t('wellbeingTracker')}</p>
                            {renderOnMobile()}
                            {renderOnDesktop()}
                            <div className="hidden 2xl:flex flex-col items-center mt-16">
                                <Link href="/action-plan" passHref>
                                    <button className={"hover:scale-105 bg-bvsPeach rounded-[15px] text-base font-medium text-white mb-2 " + (isVietNamese() ? "w-[240px] h-[35px]" : "w-[144px] h-[35px]")}>
                                        <a>{t('actionPlanButotn').toLocaleUpperCase()}</a>
                                    </button>
                                </Link>
                                <p className={"text-base text-black opacity-60 text-center "  + (isVietNamese() ? "max-w-[260px]" : "max-w-[200px]")}>{t('clickToActionPlan')}</p>
                            </div>
                        </div>
                        
                        <div className={"h-2/4 hidden lg:block relative top-2 2xl:top-[116px] text-black text-opacity-60 " + (isVietNamese() ? "w-[30%]" : "w-1/6 xl:w-2/6 2xl:w-1/6 ")}>
                            <div className="text-xs font-medium mb-[6px] xl:mb-1">
                                <div className="flex items-center">
                                    <div className="w-1 h-1 bg-black rounded-[4px]"></div>
                                    <p className="ml-3 max-w-[250px] h-[14px]">{t('wellbeingChampion')}</p>
                                </div>
                            </div>
                            <div className="text-xs font-medium mb-1">
                                <div className="flex items-center">
                                    <div className="w-1 h-1 bg-black rounded-[4px]"></div>
                                    <p className="ml-3 max-w-[250px] h-[14px]">{t('doingWell')}</p>
                                </div>
                            </div>
                            <div className="text-xs font-medium mb-1">
                                <div className="flex items-center">
                                    <div className="w-1 h-1 bg-black rounded-[4px]"></div>
                                    <p className="ml-3 max-w-[250px] h-[14px]">{t('makingProcess')}</p>
                                </div>
                            </div>
                            <div className="text-xs font-medium mb-1">
                                <div className="flex items-center">
                                    <div className="w-1 h-1 bg-black rounded-[4px]"></div>
                                    <p className="ml-3 max-w-[250px] h-[14px]">{t('trySomethingNew')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:flex 2xl:hidden flex-col items-center mt-16">
                    <Link href="/action-plan" passHref>
                        <button className={"hover:scale-105 bg-bvsPeach rounded-[15px] text-base font-medium text-white mb-2 " + (isVietNamese() ? "w-[240px] h-[35px]" : "w-[144px] h-[35px]")}>
                            <a>{t('actionPlanButotn').toLocaleUpperCase()}</a>
                        </button>
                    </Link>
                    <p className={"text-base text-black opacity-60 text-center "  + (isVietNamese() ? "max-w-[260px]" : "max-w-[200px]")}>{t('clickToActionPlan')}</p>
                </div>
            </div>
        </div>
    )
}



