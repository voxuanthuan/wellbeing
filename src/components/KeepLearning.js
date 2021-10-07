import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import musicImage from '../../public/music-image.svg';
import keepLearningImage from '../../public/keep-learning.png'

import keepLearningTag from '../../public/tags/keep-learning.svg';

import artGalleryIcon from '../../public/keep-learning/art-gallery.svg';
import bassGuiterIcon from '../../public/keep-learning/bass-guiter.svg';
import beeIcon from '../../public/keep-learning/bee.svg';
import cookIcon from '../../public/keep-learning/cook.svg';
import mapIcon from '../../public/keep-learning/map.svg';
import mealIcon from '../../public/keep-learning/meal.svg';
import noteIcon from '../../public/keep-learning/note.svg';
import searchIcon from '../../public/keep-learning/search.svg';
import wordIcon from '../../public/keep-learning/word.svg';

import keepLearningIcon from '../../public/keep-learning/keep-learning.svg';



export default function KeepLearning() {
    const {t} = useTranslation()
    return (
        <div className="h-screen bg-keepLearning bg-no-repeat bg-cover">
            <div className="flex justify-end pt-5 pr-8">
                <div className="flex items-center">
                    <p className="text-bvsBrightYellow font-medium">{t('keep-learning').toLocaleUpperCase()}</p>
                    <div className="ml-3"><Image alt="beactive tag" src={keepLearningTag}/></div>
                </div>
            </div>
            <div className="h-full w-full flex justify-center">
                <div>
                    <div className="h-heightBody w-full flex items-center">
                        <div className="w-[15%] xl:w-1/6 h-full flex items-center justify-end">
                                <div>
                                    <div className="lg:h-[400px] xl:h-[450px] flex flex-col justify-around items-start">
                                        <div className="flex justify-start">
                                            <div className="2xl:h-[80px] min-w-[105px]">
                                                <div className="w-[64px] 2xl:w-auto">
                                                    <Image alt="connect icon" src={keepLearningIcon}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="h-[265px] w-[2px] flex flex-col">
                                                <div>
                                                    <div className="bg-black opacity-25 h-[140px]"></div>
                                                    <div className="bg-bvsBrightYellow h-[79px]"></div>
                                                </div>
                                                <div className="w-full block">
                                                    <h1 className="w-full text-bvsBrightYellow text-xs font-medium mt-24 transform -rotate-90 origin-center whitespace-nowrap">{t('keep-learning').toLocaleUpperCase()}</h1>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        <div className="h-full lg:w-[55%] xl:w-3/6 max-w-[828px] flex flex-col justify-center">
                            <h1 className="font-semibold text-2xl xl:text-3xl 2xl:text-4xl mt-10 2xl:mt-20" dangerouslySetInnerHTML={{__html: t('keepLeaningDetail')}}></h1>
                            <div className="mt-10 2xl:mt-20">
                                <h3 className="font-medium text-[18px] mb-5 2xl:mb-10">{t('whynot')}</h3>
                                <div className="flex text-sm font-normal text-black text-opacity-70">
                                <ul className="ml-5">
                                        <li>
                                            <div className="mb-4 flex items-center">
                                                <Image alt="word icon" src={wordIcon}/>
                                                <span className="ml-6 lg:max-w-[190px] xl:max-w-[210px]">{t('keepLearning.newWord')}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="mb-4 flex items-center">
                                                <Image alt="gallery" src={artGalleryIcon}/>
                                                <span className="ml-6 lg:max-w-[190px] xl:max-w-[210px]">{t('keepLearning.artGallery')}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="mb-4 flex items-center">
                                                <Image alt="guitar" src={bassGuiterIcon}/>
                                                <span className="ml-6 lg:max-w-[190px] xl:max-w-[210px]">{t('keepLearning.musicalInstrument')}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="mb-4 flex items-center">
                                                <Image alt="search" src={searchIcon}/>
                                                <span className="ml-6 lg:max-w-[190px] xl:max-w-[210px]">{t('keepLearning.wordSearch')}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="mb-4 flex items-center">
                                                <Image alt="meal" src={mealIcon}/>
                                                <span className="ml-6 lg:max-w-[190px] xl:max-w-[210px]">{t('keepLearning.newFood')}</span>
                                            </div>
                                        </li>
                                    </ul>
                                    <ul className="ml-10">
                                        <li>
                                            <div className="mb-4 flex items-center">
                                                <Image alt="cook" src={cookIcon}/>
                                                <span className="ml-6 lg:max-w-[190px] xl:max-w-[210px]">{t('keepLearning.cookRecipe')}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="mb-4 flex items-center">
                                                <Image alt="bee" src={beeIcon}/>
                                                <span className="ml-6 lg:max-w-[190px] xl:max-w-[210px]">{t('keepLearning.animalOrBug')}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="mb-4 flex items-center">
                                                <Image alt="map icon" src={mapIcon}/>
                                                <span className="ml-6 lg:max-w-[190px] xl:max-w-[210px]">{t('keepLearning.newPlace')}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="mb-4 flex items-center">
                                                <Image alt="note icon" src={noteIcon}/>
                                                <span className="ml-6 lg:max-w-[190px] xl:max-w-[210px]">{t('keepLearning.storyOrSong')}</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-2/6 lg:w-[30%] h-full  flex flex-col justify-center items-end">
                            <div className="mt-20">
                                <Image alt="music image" src={musicImage}/>
                            </div>
                            <div className="w-[250px] xl:w-[300px] 2xl:w-[450px] mt-16 xl:mt-32 relative 2xl:mt-20 top-6 xl:-top-10 2xl:top-0 right-5 xl:right-10 2xl:right-0">
                                <Image alt="beactive image" src={keepLearningImage}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}