import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import musicImage from '../../public/music-image.svg';
import giveImage from '../../public/give.png'

import giveTag from '../../public/tags/give.svg';

import doorIcon from '../../public/give/door.svg';
import giftIcon from '../../public/give/gift.svg';
import giveIcon from '../../public/give/give.svg';
import givingIcon from '../../public/give/giving.svg';
import hugIcon from '../../public/give/hug.svg';
import presentIcon from '../../public/give/present.svg';
import sharingIcon from '../../public/give/sharing.svg';
import smileIcon from '../../public/give/smile.svg';
import washDishesIcon from '../../public/give/wash-dishes.svg';

export default function Give() {
    const {t} = useTranslation()
    return (
        <div className="h-screen bg-give bg-no-repeat bg-cover">
            <div className="flex justify-end pt-5 pr-8">
                <div className="flex items-center">
                    <p className="text-bvsPeach font-medium  text-xs">{t('give').toLocaleUpperCase()}</p>
                    <span className="ml-3 relative top-[2px]"><Image alt="image" src={giveTag}/></span>
                </div>
            </div>
            <div className="h-heightBody w-full flex pt-10">
                <div className="w-1/6 h-5/6 flex flex-col pl-32 pt-24">
                    <div>
                        <Image alt="image" src={giveIcon}/>
                    </div>
                    <div className="mt-52">
                        <div className="h-[265px] w-[2px]">
                            <div className="bg-black opacity-25 h-[168px]"></div>
                            <div className="bg-bvsPeach h-[79px]"></div>
                            <div className="relative w-full block">
                                <h1 className="w-full text-bvsPeach text-xs font-medium top-14 absolute transform -rotate-90 origin-center whitespace-nowrap">{t('give').toLocaleUpperCase()}</h1>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="h-full w-3/6 max-w-[828px]">
                    <h1 className="font-semibold text-4xl mt-20" dangerouslySetInnerHTML={{__html: t('giveDetail')}}></h1>
                    <div className="mt-20">
                        <h3 className="font-medium text-[18px] mb-10">{t('whynot')}</h3>
                        <div className="flex  text-sm font-normal text-black text-opacity-70">
                            <ul className="ml-5">
                                <li>
                                    <div className="mb-4 flex items-center">
                                        <Image alt="word icon" src={smileIcon}/>
                                        <span className="ml-6  max-w-[335px]">{t('giveInfo.smile')}</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="mb-4 flex items-center">
                                        <Image alt="gallery" src={giftIcon}/>
                                        <span className="ml-6  max-w-[335px]">{t('giveInfo.make')}</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="mb-4 flex items-center">
                                        <Image alt="guitar" src={doorIcon}/>
                                        <span className="ml-6  max-w-[335px]">{t('giveInfo.hold')}</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="mb-4 flex items-center">
                                        <Image alt="search" src={givingIcon}/>
                                        <span className="ml-6  max-w-[335px]">{t('giveInfo.give')}</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="mb-4 flex items-center">
                                        <Image alt="meal" src={presentIcon}/>
                                        <span className="ml-6  max-w-[335px]">{t('giveInfo.send')}</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="mb-4 flex items-center">
                                        <Image alt="cook" src={sharingIcon}/>
                                        <span className="ml-6  max-w-[335px]">{t('giveInfo.share')}</span>
                                    </div>
                                </li>
                            </ul>
                            <ul className="ml-10">
                                <li>
                                    <div className="mb-4 flex items-center">
                                        <Image alt="bee" src={washDishesIcon}/>
                                        <span className="ml-6  max-w-[335px]">{t('giveInfo.help')}</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="mb-4 flex items-center">
                                        <Image alt="map icon" src={hugIcon}/>
                                        <span className="ml-6  max-w-[335px]">{t('giveInfo.listen')}</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-2/6 h-full relative">
                    <div className="absolute right-0 top-14">
                        <Image alt="music image" src={musicImage}/>
                    </div>
                    <div className="w-[500px] absolute top-96 right-10 -z-10">
                        <Image alt="music image" src={giveImage}/>
                    </div>
                </div>
            </div>
        </div>
    )
}