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
    const {t} = useTranslation()
    return (
        <div className="h-screen bg-takeNotice bg-no-repeat bg-cover">
            <div className="flex justify-end pt-5 pr-8">
                <div className="flex items-center">
                    <p className="text-bvsDrakTeal font-medium">{t('take-notice').toLocaleUpperCase()}</p>
                    <div className="ml-3"><Image alt="beactive tag" src={takeNoticeTag}/></div>
                </div>
            </div>
            <div className="w-full flex justify-center">
                <div>
                    <div className="h-heightBody w-full flex items-center">
                    <div className="w-1/6 h-full flex items-center justify-end">
                            <div>
                                <div className="lg:h-[480px] xl:h-[650px] flex flex-col justify-around">
                                    <div className="2xl:h-[80px] flex justify-start min-w-[105px]">
                                        <Image alt="connect icon" src={takeNoticeIcon}/>
                                    </div>
                                    <div>
                                        <div className="h-[265px] w-[2px] flex flex-col">
                                            <div>
                                                <div className="bg-black opacity-25 h-[168px]"></div>
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
                        <div className="h-full w-3/6 max-w-[828px] flex flex-col justify-center">
                            <h1 className="font-semibold text-2xl xl:text-3xl 2xl:text-4xl mt-16 xl:mt-20" dangerouslySetInnerHTML={{__html: t('takeNoticeDetail')}}></h1>
                            <div className="mt-8 xl:mt-20">
                                <h3 className="font-medium text-[18px] mb-5 xl:mb-10">{t('whynot')}</h3>
                                <div className="flex text-sm font-normal text-black text-opacity-70">
                                <ul className="flex-1">
                                    <li>
                                        <div className="mb-4 flex items-center">
                                            <Image alt="word icon" src={windowIcon}/>
                                            <span className="ml-6 max-w-[250px]  xl:max-w-[335px]">{t('takeNoticeInfo.look')}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="mb-4 flex items-center">
                                            <Image alt="gallery" src={paintIcon}/>
                                            <span className="ml-6 max-w-[250px]  xl:max-w-[335px]">{t('takeNoticeInfo.paint')}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="mb-4 flex items-center">
                                            <Image alt="guitar" src={thinkingIcon}/>
                                            <span className="ml-6 max-w-[250px]  xl:max-w-[335px]">{t('takeNoticeInfo.think')}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="mb-4 flex items-center">
                                            <Image alt="search" src={rainIcon}/>
                                            <span className="ml-6 max-w-[250px]  xl:max-w-[335px]">{t('takeNoticeInfo.listen')}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="mb-4 flex items-center">
                                            <Image alt="meal" src={searchIcon}/>
                                            <span className="ml-6 max-w-[250px]  xl:max-w-[335px]">{t('takeNoticeInfo.play')}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="mb-4 flex items-center">
                                            <Image alt="cook" src={familyIcon}/>
                                            <span className="ml-6 max-w-[250px]  xl:max-w-[335px]">{t('takeNoticeInfo.notice')}</span>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="ml-10">
                                    <li>
                                        <div className="mb-4 flex items-center">
                                            <Image alt="bee" src={moonIcon}/>
                                            <span className="ml-6 max-w-[200px]  xl:max-w-[335px]">{t('takeNoticeInfo.lookAt')}</span>
                                        </div>
                                    </li>
                                </ul>
                                </div>
                            </div>
                        </div>
                        <div className="w-2/6 h-full flex flex-col justify-center">
                            <div className="mt-20">
                                <Image alt="music image" src={musicImage}/>
                            </div>
                            <div className="w-[300px] xl:w-[450px] mt-32 2xl:mt-20 relative -top-10 xl:top-0 right-20 2xl:right-16">
                                <Image alt="beactive image" src={takeNoticeImage}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}