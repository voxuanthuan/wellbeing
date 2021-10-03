import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import musicImage from '../../public/music-image.svg';

import familyImage from '../../public/connect/family.svg';
import friendImage from '../../public/connect/friends.svg';
import hiImage from '../../public/connect/hi.svg';
import highFive from '../../public/connect/high-five.svg';
import mealImage from '../../public/connect/meal.svg';
import pieImage from '../../public/connect/pie.svg';
import connectIcon from '../../public/connect/connect.svg';
import connectImage from '../../public/connect.png';
import connectTag from '../../public/tags/connect.svg';


export default function Connect() {
    const {t} = useTranslation()
    return (
        <div className="h-screen bg-connect bg-no-repeat bg-cover">
            <div className="w-full flex justify-end pt-5 pr-8">
                <div className="flex items-center">
                    <p className="text-bvsOrange font-medium">{t('connect').toLocaleUpperCase()}</p>
                    <div className="ml-3"><Image alt="connect icon" src={connectTag}/></div>
                </div>
            </div>
            <div className="flex justify-center items-center w-full h-full">
               <div>
                    <div className="h-heightBody w-full flex">
                        <div className="w-1/6 h-5/6 flex flex-col pl-32 pt-24">
                            <div>
                                <Image alt="connect icon" width="105px" src={connectIcon}/>
                            </div>
                            <div className="mt-48">
                                <div className="h-[265px] w-[2px]">
                                    <div className="bg-black opacity-25 h-[168px]"></div>
                                    <div className="bg-bvsPeach h-[79px]"></div>
                                    <div className="relative w-full block">
                                        <h1 className="w-full text-bvsPeach text-xs font-medium top-24 absolute transform -rotate-90 origin-center whitespace-nowrap">{t('connect').toLocaleUpperCase()}</h1>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="h-full w-3/6 max-w-[828px]">
                            <h1 className="font-semibold text-4xl mt-20" dangerouslySetInnerHTML={{__html: t('connectDetail')}}/>
                            <div className="mt-20">
                                <h3 className="font-medium text-[18px] mb-10">{t('whynot')}</h3>
                                <div className="ml-5 text-sm font-normal text-black text-opacity-70 leading-[17px]">
                                    <ul>
                                        <li>
                                            <div className="mb-4 flex items-center">
                                                <Image alt="family icon" src={familyImage}/>
                                                <span className="ml-6">{t('connectInfo.talk')}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="mb-4 flex items-center">
                                                <Image alt="friend image" src={friendImage}/>
                                                <span className="ml-6">{t('connectInfo.help')}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="mb-4 flex items-center">
                                                <Image alt="meal image" src={mealImage}/>
                                                <span className="ml-6">{t('connectInfo.eatMeal')}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="mb-4 flex items-center">
                                                <Image alt="highfive" src={highFive}/>
                                                <span className="ml-6">{t('connectInfo.makeFriend')}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="mb-4 flex items-center">
                                                <Image alt="hi image" src={hiImage}/>
                                                <span className="ml-6">{t('connectInfo.sayHello')}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="mb-4 flex items-center">
                                                <Image alt="pie image" src={pieImage}/>
                                                <span className="ml-6">{t('connectInfo.bakeSomeCakes')}</span>
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
                            <div className="relative w-full right-20 top-4">
                                <Image alt="connect image" src={connectImage}/>
                            </div>
                        </div>
                    </div>    
               </div>
            </div>        
        </div>
    )
}