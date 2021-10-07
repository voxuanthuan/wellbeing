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
        <>
        <div className="h-screen bg-give bg-no-repeat bg-cover">
        <div className="flex justify-end pt-5 pr-8">
            <div className="flex items-center">
                <p className="text-bvsPeach font-medium">{t('give').toLocaleUpperCase()}</p>
                <div className="ml-3"><Image alt="give tag" src={giveTag}/></div>
            </div>
        </div>
        <div className="h-full w-full flex justify-center">
            <div>
                <div className="h-heightBody w-full flex items-center">
                    <div className="w-[15%] xl:w-1/6 h-full flex items-center justify-end">
                            <div>
                                <div className="lg:h-[440px] flex flex-col justify-around items-start">
                                    <div className="flex justify-start">
                                        <div className="2xl:h-[80px] min-w-[105px]">
                                            <div className="w-[64px] 2xl:w-auto">
                                                <Image alt="connect icon" src={giveIcon}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="h-[265px] w-[2px] flex flex-col">
                                            <div>
                                                <div className="bg-black opacity-25 h-[168px]"></div>
                                                <div className="bg-bvsPeach h-[79px]"></div>
                                            </div>
                                            <div className="w-full block">
                                                <h1 className="w-full text-bvsPeach text-xs font-medium mt-16 transform -rotate-90 origin-center whitespace-nowrap">{t('give').toLocaleUpperCase()}</h1>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className="h-full w-[55%] xl:w-3/6 max-w-[828px] flex flex-col justify-center">
                        <h1 className="font-semibold text-2xl xl:text-3xl 2xl:text-4xl mt-10 2xl:mt-20" dangerouslySetInnerHTML={{__html: t('giveDetail')}}></h1>
                        <div className="mt-10 2xl:mt-20">
                            <h3 className="font-medium text-[18px] mb-5 2xl:mb-10">{t('whynot')}</h3>
                            <div className="flex text-sm font-normal text-black text-opacity-70">
                            <ul className="flex-1">
                                    <li>
                                        <div className="mb-4 flex items-center">
                                            <Image alt="word icon" src={smileIcon}/>
                                            <span className="ml-6 max-w-[200px] xl:max-w-[240px]">{t('giveInfo.smile')}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="mb-4 flex items-center">
                                            <Image alt="gallery" src={giftIcon}/>
                                            <span className="ml-6 max-w-[200px] xl:max-w-[240px]">{t('giveInfo.make')}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="mb-4 flex items-center">
                                            <Image alt="guitar" src={doorIcon}/>
                                            <span className="ml-6 max-w-[200px] xl:max-w-[240px]">{t('giveInfo.hold')}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="mb-4 flex items-center">
                                            <Image alt="search" src={givingIcon}/>
                                            <span className="ml-6 max-w-[200px] xl:max-w-[240px]">{t('giveInfo.give')}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="mb-4 flex items-center">
                                            <Image alt="meal" src={presentIcon}/>
                                            <span className="ml-6 max-w-[200px] xl:max-w-[240px]">{t('giveInfo.send')}</span>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="pl-5 flex-1">
                                    <li>
                                        <div className="mb-4 flex items-center">
                                            <Image alt="cook" src={sharingIcon}/>
                                            <span className="ml-6 max-w-[200px] xl:max-w-[240px]">{t('giveInfo.share')}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="mb-4 flex items-center">
                                            <Image alt="bee" src={washDishesIcon}/>
                                            <span className="ml-6 max-w-[200px] xl:max-w-[240px]">{t('giveInfo.help')}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="mb-4 flex items-center">
                                            <Image alt="map icon" src={hugIcon}/>
                                            <span className="ml-6 max-w-[200px] xl:max-w-[240px]">{t('giveInfo.listen')}</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="w-[30%] xl:w-2/6 h-full  flex flex-col justify-center items-end">
                        <div className="mt-20">
                            <Image alt="music image" src={musicImage}/>
                        </div>
                        <div className="w-[300px] xl:w-[400px] 2xl:w-[500px] mt-16 xl:mt-32 relative 2xl:mt-20 xl:-top-10 2xl:top-0 right-10 2xl:right-0">
                            <Image alt="beactive image" src={giveImage}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}