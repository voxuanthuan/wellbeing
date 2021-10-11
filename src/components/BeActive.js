import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import musicImage from '../../public/music-image.svg';
import beActiveImage from '../../public/be-active.png'
import beActiveTag from '../../public/tags/be-active.svg';

import bicycleIcon from '../../public/be-active/bicycle.svg';
import dacingIcon from '../../public/be-active/dancing.svg';
import dogIcon from '../../public/be-active/dog.svg';
import gardenIcon from '../../public/be-active/garden.svg';
import hulaHoopIcon from '../../public/be-active/hula-hoop.svg';
import playGroundIcon from '../../public/be-active/play-ground.svg';
import runIcon from '../../public/be-active/run.svg';
import sportIcon from '../../public/be-active/sport.svg';
import teamIcon from '../../public/be-active/team.svg';
import beActiveIcon from '../../public/be-active/be-active.svg';





export default function BeActive() {
    const {t} = useTranslation()
    return (
        <div className="h-full min-h-[830px] sm:min-h-0 bg-bvsTealLight md:h-screen md:bg-beActive bg-no-repeat bg-cover flex justify-center items-center md:block">
            <div>
                <div className="hidden md:flex justify-end pt-5 pr-8">
                    <div className="flex items-center">
                        <p className="text-bvsTeal font-medium">{t('be-active').toLocaleUpperCase()}</p>
                        <div className="ml-3"><Image alt="beactive tag" src={beActiveTag}/></div>
                    </div>
                </div>
                <div className="h-full w-full flex justify-center">
                    <div>
                        <div className="h-heightBody w-full flex items-center">
                        <div className="lg:w-[15%] w-1/6 h-full hidden lg:flex items-center justify-end">
                                <div>
                                    <div className="lg:h-[420px] xl:h-[500px] flex flex-col justify-around">
                                        <div className="2xl:h-[80px] flex justify-start min-w-[105px]">
                                            <div className="w-[64px] 2xl:w-auto">
                                                <Image alt="connect icon" src={beActiveIcon}/>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="h-[265px] w-[2px] flex flex-col">
                                                <div>
                                                    <div className="bg-black opacity-25 h-[168px]"></div>
                                                    <div className="bg-bvsDrakTeal h-[79px]"></div>
                                                </div>
                                                <div className="w-full block">
                                                    <h1 className="w-full text-bvsDrakTeal text-xs font-medium mt-20 transform -rotate-90 origin-center whitespace-nowrap">{t('be-active').toLocaleUpperCase()}</h1>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="h-full w-full lg:w-[55%] xl:w-3/6 max-w-[828px] pl-3 lg:pl-0 flex flex-col justify-center">
                                <div>
                                    <div className="w-[48px] sm:w-[52px] lg:hidden ml-3">
                                        <Image alt="connect icon" src={beActiveIcon}/>
                                    </div>
                                    <h1 className="font-semibold text-2xl sm:text-3xl lg:text-2xl xl:text-3xl 2xl:text-4xl mt-0 lg:mt-10 2xl:mt-20" dangerouslySetInnerHTML={{__html: t('beactiveDetail')}}></h1>
                                </div>
                                <div className="mt-10 2xl:mt-20">
                                    <h3 className="font-medium text-[20px] lg:text-[18px] mb-5 xl:mb-10">{t('whynot')}</h3>
                                    <div className="flex flex-col md:flex-row text-base lg:text-sm font-normal text-black text-opacity-70">
                                        <ul className="ml-3">
                                            <li>
                                                <div className="mb-5 lg:mb-4 flex items-center">
                                                    <Image alt="dancing icon" src={dacingIcon}/>
                                                    <span className="ml-6 max-w-[240px] sm:max-w-[280px] lg:max-w-[190px] xl:max-w-[210px]">{t('beActive.danceWithSong')}</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="mb-5 lg:mb-4 flex items-center">
                                                    <Image alt="dog icon" src={dogIcon}/>
                                                    <span className="ml-6 max-w-[240px] sm:max-w-[280px] lg:max-w-[190px] xl:max-w-[210px]">{t('beActive.walk')}</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="mb-5 lg:mb-4 flex items-center">
                                                    <Image alt="hula loop icon" src={hulaHoopIcon}/>
                                                    <span className="ml-6 max-w-[240px] sm:max-w-[280px] lg:max-w-[190px] xl:max-w-[210px]">{t('beActive.hulaHoop')}</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="mb-5 lg:mb-4 flex items-center">
                                                    <Image alt="team icon" src={teamIcon}/>
                                                    <span className="ml-6 max-w-[240px] sm:max-w-[280px] lg:max-w-[190px] xl:max-w-[210px]">{t('beActive.sportTeams')}</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="mb-5 lg:mb-4 flex items-center">
                                                    <Image alt="playground icon" src={playGroundIcon}/>
                                                    <span className="ml-6 max-w-[240px] sm:max-w-[280px] lg:max-w-[190px] xl:max-w-[210px]">{t('beActive.playGames')}</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="mb-5 lg:mb-4 flex items-center">
                                                    <Image alt="bicycle icon" src={bicycleIcon}/>
                                                    <span className="ml-6 max-w-[240px] sm:max-w-[280px] lg:max-w-[190px] xl:max-w-[210px]">{t('beActive.walkOrCycle')}</span>
                                                </div>
                                            </li>
                                        </ul>
                                        <ul className="ml-3 md:ml-10">
                                            <li>
                                                <div className="mb-5 lg:mb-4 flex items-center">
                                                    <Image alt="garden icon" src={gardenIcon}/>
                                                    <span className="ml-6 max-w-[240px] sm:max-w-[280px] lg:max-w-[190px] xl:max-w-[210px]">{t('beActive.garden')}</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="mb-5 lg:mb-4 flex items-center">
                                                    <Image  alt="run icon" src={runIcon}/>
                                                    <span className="ml-6 max-w-[240px] sm:max-w-[280px] lg:max-w-[190px] xl:max-w-[210px]">{t('beActive.raceWithFriends')}</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="mb-5 lg:mb-4 flex items-center">
                                                    <Image alt="sport icon" src={sportIcon}/>
                                                    <span className="ml-6 max-w-[240px] sm:max-w-[280px] lg:max-w-[190px] xl:max-w-[210px]">{t('beActive.makeUp')}</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="w-2/6 lg:w-[30%] xl:w-2/6 h-full hidden lg:flex flex-col justify-center">
                                <div className="mt-0 2xl:mt-20">
                                    <Image alt="music image" src={musicImage}/>
                                </div>
                                <div className="w-[350px] xl:w-[450px] 2xl:w-[600px] relative mt-[110px] top-10 xl:top-0 right-20 xl:right-10 xl:mt-20 2xl:right-32">
                                    <Image alt="beactive image" src={beActiveImage}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}