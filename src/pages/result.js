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
    return (
        <div className="bg-[#FAF5ED] bg-no-repeat bg-cover">
            <Header/>
            <div className="h-heightBody">
                <div className="flex flex-col h-48 pt-[40px] items-center">
                    <p className="font-medium text-[18px]">{`${name}${t('suffix')}`}</p>
                    <h1 className="font-semibold text-[36px] text-bvsPeach inline-block">{t('wellbeingReport')}</h1>
                </div>
                <div className="w-full flex">
                    <div className="w-1/3">
                       <div className="flex flex-col items-center">
                           <div className="flex">
                               <div className="text-xs font-normal text-bvsDrakTeal text-right leading-[14px] relative top-40 -left-10">
                                    <p
                                        className={"mb-[29px] "  + (i18n.language === 'vi-VN' ? "max-w-[123px]" : "max-w-[96px]")}
                                    >{t('wellbeingChampion')}</p>
                                    <p className={"mb-[29px] "  + (i18n.language === 'vi-VN' ? "max-w-[123px]" : "max-w-[96px]")}>{t('doingWell')}</p>
                                    <p className={"mb-[29px] "  + (i18n.language === 'vi-VN' ? "max-w-[123px]" : "max-w-[96px]")}>{t('makingProcess')}</p>
                                    <p className={"mb-[29px] "  + (i18n.language === 'vi-VN' ? "max-w-[123px]" : "max-w-[96px]")}>{t('trySomethingNew')}</p>
                               </div>
                               <div>
                                 <p className="text-[22px] font-semibold text-bvsNavy leading-[27px] mb-20">{t('overallWellbeing')}</p>
                                   <Image src={renderThermometerMain()}/>
                               </div>
                           </div>
                       </div>
                    </div>
                    <div className="w-2/3 flex">
                        <div className="flex flex-col w-5/6">
                            <p className="text-[22px] font-semibold text-bvsNavy leading-[27px] mb-32 text-center">{t('wellbeingTracker')}</p>
                            <div className="flex justify-around text-bvsDrakTeal">
                                <div className="flex flex-col items-center">
                                    <div className="mb-[15px]">
                                        <Image src={renderThermometerSmall(connectScore)}/>
                                    </div>
                                    <p className="text-xs font-medium mb-[13px]">{t('connect')}</p>
                                    <div>
                                        <Image src={connectIcon}/>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="mb-[15px]">
                                        <Image src={renderThermometerSmall(beActiveScore)}/>
                                    </div>
                                    <p className="text-xs font-medium mb-[13px]">{t('be-active')}</p>
                                    <div>
                                        <Image src={beActiveIcon}/>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="mb-[15px]">
                                        <Image src={renderThermometerSmall(keepLearningScore)}/>
                                    </div>
                                    <p className="text-xs font-medium mb-[13px]">{t('keep-learning')}</p>
                                    <div>
                                        <Image src={keepLearningIcon}/>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="mb-[15px]">
                                        <Image src={renderThermometerSmall(giveScore)}/>
                                    </div>
                                    <p className="text-xs font-medium mb-[13px]">{t('give')}</p>
                                    <div>
                                        <Image src={giveIcon}/>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="mb-[15px]">
                                        <Image src={renderThermometerSmall(takeNoticeScore)}/>
                                    </div>
                                    <p className="text-xs font-medium mb-[13px]">{t('take-notice')}</p>
                                    <div>
                                        <Image src={takeNoticeIcon}/>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center mt-12">
                                <Link href="/action-plan">
                                    <button className="w-[144px] h-[35px] bg-bvsPeach rounded-[15px] text-[12px] font-medium text-white mb-2">
                                        <a>{t('actionPlanButotn')}</a>
                                    </button>
                                </Link>
                                <p className="text-[10px] text-black opacity-25 max-w-[140px] text-center">{t('clickToActionPlan')}</p>
                            </div>
                        </div>
                        <div className="w-1/6 relative top-[164px] opacity-40">
                            <div className="text-[7px] font-medium text-black mb-1">
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