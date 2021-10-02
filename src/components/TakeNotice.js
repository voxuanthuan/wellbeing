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
            <div className="w-full flex justify-center items-center">
                <div>
                    <div className="h-heightBody w-full flex">
                        <div className="w-1/6 h-5/6 flex flex-col pl-32 pt-24">
                            <div>
                                <Image alt="beactive icon" src={takeNoticeIcon}/>
                            </div>
                            <div className="mt-28">
                                <div className="h-[265px] w-[2px]">
                                    <div className="bg-black opacity-25 h-[168px]"></div>
                                    <div className="bg-bvsTeal h-[79px]"></div>
                                    <div className="relative w-full block">
                                    <h1 className="w-full text-bvsDrakTeal text-xs font-medium top-24 absolute transform -rotate-90 origin-center whitespace-nowrap">{t('be-active').toLocaleUpperCase()}</h1>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="h-full w-3/6 max-w-[828px]">
                            <h1 className="font-semibold text-4xl mt-20" dangerouslySetInnerHTML={{__html: t('takeNoticeDetail')}}></h1>
                            <div className="mt-20">
                                <h3 className="font-medium text-[18px] mb-10">{t('whynot')}</h3>
                                <div className="flex text-sm font-normal text-black text-opacity-70">
                                <ul className="ml-5">
                                    <li>
                                        <div className="mb-4 flex items-center">
                                            <Image alt="word icon" src={windowIcon}/>
                                            <span className="ml-6  max-w-[335px]">{t('takeNoticeInfo.look')}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="mb-4 flex items-center">
                                            <Image alt="gallery" src={paintIcon}/>
                                            <span className="ml-6  max-w-[335px]">{t('takeNoticeInfo.paint')}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="mb-4 flex items-center">
                                            <Image alt="guitar" src={thinkingIcon}/>
                                            <span className="ml-6  max-w-[335px]">{t('takeNoticeInfo.think')}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="mb-4 flex items-center">
                                            <Image alt="search" src={rainIcon}/>
                                            <span className="ml-6  max-w-[335px]">{t('takeNoticeInfo.listen')}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="mb-4 flex items-center">
                                            <Image alt="meal" src={searchIcon}/>
                                            <span className="ml-6  max-w-[335px]">{t('takeNoticeInfo.play')}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="mb-4 flex items-center">
                                            <Image alt="cook" src={familyIcon}/>
                                            <span className="ml-6  max-w-[335px]">{t('takeNoticeInfo.notice')}</span>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="ml-10">
                                    <li>
                                        <div className="mb-4 flex items-center">
                                            <Image alt="bee" src={moonIcon}/>
                                            <span className="ml-6  max-w-[335px]">{t('takeNoticeInfo.lookAt')}</span>
                                        </div>
                                    </li>
                                </ul>
                                </div>
                            </div>
                        </div>
                        <div className="w-2/6 h-full">
                            <div className="mt-20">
                                <Image alt="music image" src={musicImage}/>
                            </div>
                            <div className="w-[400px] 2xl:w-[500px] mt-32 2xl:mt-20 relative top-10 xl:top-0 right-20 2xl:right-32">
                                <Image alt="beactive image" src={takeNoticeImage}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}