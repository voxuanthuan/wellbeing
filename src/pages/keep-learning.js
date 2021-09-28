import React, {useState, useRef} from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

import Header from '../components/Header';
import transitionImage from '../../public/transition.png';
import arrowImage from '../../public/keep-learning/arrow.svg';
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



export default function keepLearning() {
    const {t} = useTranslation()
    const elementRef = useRef();
    const onScroll = () => {
        const scroll = elementRef.current.scrollHeight - elementRef.current.clientHeight;
        elementRef.current.scrollTo({ top: scroll, behavior:'smooth'});
    }
    return (
        <div ref={elementRef} className="bg-[#FAF5ED] overflow-scroll h-screen w-full">
            <div className="relative">
                <Header />
                <div className="absolute top-6 right-16 flex items-center">
                    <p className="text-bvsBrightYellow font-medium text-xs">{t('keep-learning').toLocaleUpperCase()}</p>
                    <div className="ml-3"><Image src={keepLearningTag}/></div>
                </div>
                <div onClick={onScroll} className="absolute right-10 bottom-10">DOWN</div>
                <div className="h-heightBody w-full">
                    <div className="h-full w-2/3 flex">
                        <div className="mt-80">
                            <div>
                                <div className="relative left-32">
                                    <Image src={arrowImage}/>
                                </div>
                            </div>
                        </div>
                        <div className="max-w-[658px] mt-32 ml-56">
                            <div className="font-semibold text-4xl mb-40" dangerouslySetInnerHTML={{__html: t('introDetail')}} />
                            <div className="w-[472px]"><Image src={transitionImage}/></div>
                        </div>
                    </div>
                    <div className="absolute top-1/3 right-0 w-[647px] leading-[110px]">
                        <div className="relative">
                            <div className="flex flex-col items-end m-0 p-0  mr-16 pb-6">
                                <span className="font-semibold text-[110px] opacity-25 text-bvsBrightYellow">{t('keepLearning.keep').toLocaleUpperCase()}</span>
                                <span className="font-semibold text-[110px] opacity-25 text-bvsBrightYellow relative bottom-5">{t('keepLearning.learning').toLocaleUpperCase()}</span>
                            </div>
                            <div className="absolute top-[60%] right-0">
                                <Image src={musicImage}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-keepLearning bg-no-repeat bg-cover relative">
                    <Header/>
                <div className="absolute top-6 right-16 flex items-center">
                    <p className="text-bvsBrightYellow font-medium  text-xs">{t('keep-learning').toLocaleUpperCase()}</p>
                    <div className="ml-3"><Image src={keepLearningTag}/></div>
                </div>
                <div className="h-heightBody w-full flex pt-20">
                    <div className="w-1/6 h-5/6 flex flex-col pl-32 pt-24">
                        <div>
                            <Image src={keepLearningIcon}/>
                        </div>
                        <div className="mt-48">
                            <div className="h-[265px] w-[2px]">
                                <div className="bg-black opacity-25 h-[168px]"></div>
                                <div className="bg-bvsBrightYellow h-[79px]"></div>
                                <div className="relative w-full block">
                                    <h1 className="w-full text-bvsBrightYellow text-xs font-medium top-24 absolute transform -rotate-90 origin-center whitespace-nowrap">{t('keep-learning').toLocaleUpperCase()}</h1>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="h-full w-3/6 max-w-[828px]">
                        <h1 className="font-semibold text-4xl mt-20" dangerouslySetInnerHTML={{__html: t('keepLeaningDetail')}}></h1>
                        <div className="mt-20">
                            <h3 className="font-medium text-[18px] mb-10">{t('whynot')}</h3>
                            <div className="flex  text-sm font-normal opacity-70">
                                <ul className="ml-5">
                                    <li>
                                        <div className="mb-4 flex items-center">
                                            <Image alt="word icon" src={wordIcon}/>
                                            <span className="ml-6">{t('keepLearning.newWord')}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="mb-4 flex items-center">
                                            <Image alt="gallery" src={artGalleryIcon}/>
                                            <span className="ml-6">{t('keepLearning.artGallery')}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="mb-4 flex items-center">
                                            <Image alt="guitar" src={bassGuiterIcon}/>
                                            <span className="ml-6">{t('keepLearning.musicalInstrument')}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="mb-4 flex items-center">
                                            <Image alt="search" src={searchIcon}/>
                                            <span className="ml-6">{t('keepLearning.wordSearch')}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="mb-4 flex items-center">
                                            <Image alt="meal" src={mealIcon}/>
                                            <span className="ml-6">{t('keepLearning.newFood')}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="mb-4 flex items-center">
                                            <Image alt="cook" src={cookIcon}/>
                                            <span className="ml-6">{t('keepLearning.cookRecipe')}</span>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="ml-10">
                                    <li>
                                        <div className="mb-4 flex items-center">
                                            <Image alt="bee" src={beeIcon}/>
                                            <span className="ml-6">{t('keepLearning.animalOrBug')}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="mb-4 flex items-center">
                                            <Image alt="map icon" src={mapIcon}/>
                                            <span className="ml-6">{t('keepLearning.newPlace')}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="mb-4 flex items-center">
                                            <Image alt="note icon" src={noteIcon}/>
                                            <span className="ml-6">{t('keepLearning.storyOrSong')}</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex mt-24">
                            <Link href="/action-plan">
                                <button className="w-[180px] h-[35px] rounded-[15px] text-white bg-bvsPeach text-xs"><span className="font-normal">BACK TO </span><span className="font-medium">ACTION PLAN</span></button>
                            </Link>
                            <Link href="/help">
                                <button className="w-[115px] h-[35px] rounded-[15px] bg-transparent border-2 border-bvsPeach text-bvsPeach ml-8"><p className="text-xs font-medium">NEED HELP?</p></button>
                            </Link>                            <p className="max-w-[257px] font-normal text-xs opacity-25 ml-3">{t('clickGotHelp')}</p>
                        </div>
                    </div>
                    <div className="w-2/6 h-full relative">
                           <div className="mt-20 absolute right-0 -top-6">
                               <Image src={musicImage}/>
                           </div>
                           <div className="w-[478px] mt-16 absolute right-20 top-60 -z-10">
                               <Image src={keepLearningImage}/>
                           </div>
                    </div>
                </div>
            </div>
        </div>
    )
}