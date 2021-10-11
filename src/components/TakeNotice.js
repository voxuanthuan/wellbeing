import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

import musicImage from '../../public/music-image.svg';
import takeNoticeImage from '../../public/take-notice.png'

import takeNoticeTag from '../../public/tags/take-notice.svg';

import familyIcon from '../../public/take-notice/family.svg';
import moonIcon from '../../public/take-notice/moon-star.svg';
import paintIcon from '../../public/take-notice/paint.svg';
import rainIcon from '../../public/take-notice/rain.svg';
import searchIcon from '../../public/take-notice/search.svg';
import thinkingIcon from '../../public/take-notice/thinking.svg';
import windowIcon from '../../public/take-notice/window.svg';
import takeNoticeIcon from '../../public/take-notice/take-notice.svg';


export default function TakeNotice() {
    const {t, i18n} = useTranslation()
    return (
        <div className={"h-full sm:min-h-0 md:h-screen bg-takeNotice bg-no-repeat bg-cover flex justify-center items-center md:block " + (i18n.language === 'vi-VN' ? "min-h-[1150px]" : "min-h-[1000px]")}>
            <div>
                <div className="hidden sm:flex justify-end pt-5 pr-8">
                    <div className="flex items-center">
                        <p className="text-bvsDrakTeal font-medium">{t('take-notice').toLocaleUpperCase()}</p>
                        <div className="ml-3"><Image alt="beactive tag" src={takeNoticeTag}/></div>
                    </div>
                </div>
                <div className="w-full flex justify-center">
                <div>
                    <div className="h-heightBody w-full flex items-center">
                    <div className="lg:w-[15%] xl:w-1/6 h-full hidden lg:flex items-center justify-end">
                            <div>
                                <div className="lg:h-[40px] xl:h-[450px] flex flex-col justify-around">
                                    <div className="2xl:h-[80px] flex justify-start min-w-[105px]">
                                        <div className="w-[64px] 2xl:w-auto">
                                            <Image alt="connect icon" src={takeNoticeIcon}/>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="h-[265px] w-[2px] flex flex-col">
                                            <div>
                                                <div className="bg-black opacity-25 h-[150px] 2xl:h-[168px]"></div>
                                                <div className="bg-bvsDrakTeal h-[79px]"></div>
                                            </div>
                                            <div className="w-full block">
                                                <h1 className="w-full text-bvsDrakTeal text-xs font-medium mt-20 transform -rotate-90 origin-center whitespace-nowrap">{t('take-notice').toLocaleUpperCase()}</h1>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-full w-full lg:w-[55%] xl:w-3/6 max-w-[828px] pl-3 lg:pl-0 flex flex-col justify-center">
                            <div>
                                <div className="w-[48px] sm:w-[52px] lg:hidden ml-3">
                                    <Image alt="connect icon" src={takeNoticeIcon}/>
                                </div>
                                <h1 className="font-semibold text-2xl sm:text-3xl lg:text-2xl xl:text-3xl 2xl:text-4xl mt-0 lg:mt-10 2xl:mt-20" dangerouslySetInnerHTML={{__html: t('takeNoticeDetail')}}></h1>
                            </div>
                            <div className="mt-8 2xl:mt-20">
                                <h3 className="font-medium text-base lg:text-[18px] mb-5 2xl:mb-10">{t('whynot')}</h3>
                                <div className="flex flex-col  md:flex-row text-base lg:text-sm font-normal text-black text-opacity-70">
                                <ul className="flex-1 ml-3">
                                    <li>
                                        <div className="mb-5 lg:mb-4 flex items-center">
                                            <div className="w-[33px] h-[33px]">
                                                <Image width="33px" height="33px" alt="word icon" src={windowIcon}/>
                                            </div>
                                            <span className="pl-6 max-w-[220px] sm:max-w-[280px] lg:max-w-[200px] xl:max-w-[250px]  2xl:max-w-[300px]">{t('takeNoticeInfo.look')}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="mb-5 lg:mb-4 flex items-center">
                                            <Image alt="gallery" src={paintIcon}/>
                                            <span className="pl-6 max-w-[220px] sm:max-w-[280px] lg:max-w-[200px] xl:max-w-[250px]  2xl:max-w-[300px]">{t('takeNoticeInfo.paint')}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="mb-5 lg:mb-4 flex items-center">
                                            <Image alt="guitar" src={thinkingIcon}/>
                                            <span className="pl-6 max-w-[220px] sm:max-w-[280px] lg:max-w-[200px] xl:max-w-[250px]  2xl:max-w-[300px]">{t('takeNoticeInfo.think')}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="mb-5 lg:mb-4 flex items-center">
                                            <Image alt="search" src={rainIcon}/>
                                            <span className="pl-6 max-w-[220px] sm:max-w-[280px] lg:max-w-[200px] xl:max-w-[250px]  2xl:max-w-[300px]">{t('takeNoticeInfo.listen')}</span>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="ml-3 md:ml-10 flex-1">
                                    <li>
                                        <div className="mb-5 lg:mb-4 flex items-center">
                                            <Image alt="meal" src={searchIcon}/>
                                            <span className="pl-6 max-w-[220px] sm:max-w-[280px] lg:max-w-[200px] xl:max-w-[250px]  2xl:max-w-[300px]">{t('takeNoticeInfo.play')}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="mb-5 lg:mb-4 flex items-center">
                                            <Image alt="cook" src={familyIcon}/>
                                            <span className="pl-6 max-w-[220px] sm:max-w-[280px] lg:max-w-[200px] xl:max-w-[250px]  2xl:max-w-[300px]">{t('takeNoticeInfo.notice')}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="mb-5 lg:mb-4 flex items-center">
                                            <Image alt="bee" src={moonIcon}/>
                                            <span className="pl-6 max-w-[220px] sm:max-w-[280px] lg:max-w-[200px] xl:max-w-[250px]  2xl:max-w-[300px]">{t('takeNoticeInfo.lookAt')}</span>
                                        </div>
                                    </li>
                                    <li>
                                    <div className="">
                                           <div className="">
                                            <p className="text-[13px] 2xl:text-[16px] text-black text-opacity-60 max-w-[250px] text-left">{t('clickGotHelp')}</p>

                                                <Link href="/help" passHref>
                                                        <button className="hover:scale-105 w-[130px] h-[39px] bg-bvsPeach font-medium rounded-[17px] text-white text-base"><a>{t('needHelp').toLocaleUpperCase()}</a></button>
                                                    </Link>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-[30%] xl:w-2/6 h-full hidden lg:flex flex-col justify-center items-end">
                            <div className="mt-20">
                                <Image alt="music image" src={musicImage}/>
                            </div>
                            <div className="w-[300px] xl:w-[400px] 2xl:w-[500px] mt-32 2xl:mt-20 relative -top-10 xl:-top-16 right-0 xl:right-10 2xl:right-0">
                                <Image alt="beactive image" src={takeNoticeImage}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}