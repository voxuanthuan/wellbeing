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
        <div className="h-screen bg-beActive bg-no-repeat bg-cover">
            <div className="flex justify-end pt-5 pr-8">
                <div className="flex items-center">
                    <p className="text-bvsTeal font-medium">{t('be-active').toLocaleUpperCase()}</p>
                    <div className="ml-3"><Image alt="beactive tag" src={beActiveTag}/></div>
                </div>
            </div>
            <div className="h-full w-full flex justify-center">
                <div>
                    <div className="h-heightBody w-full flex items-center">
                        <div className="w-1/6 h-5/6 flex flex-col justify-center pl-32 pt-24">
                            <div className="h-[180px]">
                                <Image alt="beactive icon" src={beActiveIcon}/>
                            </div>
                            <div className="mt-20">
                                <div className="h-[265px] w-[2px]">
                                    <div className="bg-black opacity-25 h-[168px]"></div>
                                    <div className="bg-bvsTeal h-[79px]"></div>
                                    <div className="relative w-full block">
                                    <h1 className="w-full text-bvsDrakTeal text-xs font-medium top-24 absolute transform -rotate-90 origin-center whitespace-nowrap">{t('be-active').toLocaleUpperCase()}</h1>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="h-full w-3/6 max-w-[828px] flex flex-col justify-center">
                            <h1 className="font-semibold text-4xl mt-20" dangerouslySetInnerHTML={{__html: t('beactiveDetail')}}></h1>
                            <div className="mt-20">
                                <h3 className="font-medium text-[18px] mb-10">{t('whynot')}</h3>
                                <div className="flex text-sm font-normal text-black text-opacity-70">
                                    <ul className="ml-5">
                                        <li>
                                            <div className="mb-4 flex items-center">
                                                <Image alt="dancing icon" src={dacingIcon}/>
                                                <span className="ml-6">{t('beActive.danceWithSong')}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="mb-4 flex items-center">
                                                <Image alt="dog icon" src={dogIcon}/>
                                                <span className="ml-6">{t('beActive.walk')}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="mb-4 flex items-center">
                                                <Image alt="hula loop icon" src={hulaHoopIcon}/>
                                                <span className="ml-6">{t('beActive.hulaHoop')}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="mb-4 flex items-center">
                                                <Image alt="team icon" src={teamIcon}/>
                                                <span className="ml-6">{t('beActive.sportTeams')}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="mb-4 flex items-center">
                                                <Image alt="playground icon" src={playGroundIcon}/>
                                                <span className="ml-6">{t('beActive.playGames')}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="mb-4 flex items-center">
                                                <Image alt="bicycle icon" src={bicycleIcon}/>
                                                <span className="ml-6">{t('beActive.walkOrCycle')}</span>
                                            </div>
                                        </li>
                                    </ul>
                                    <ul className="ml-10">
                                        <li>
                                            <div className="mb-4 flex items-center">
                                                <Image alt="garden icon" src={gardenIcon}/>
                                                <span className="ml-6">{t('beActive.garden')}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="mb-4 flex items-center">
                                                <Image  alt="run icon" src={runIcon}/>
                                                <span className="ml-6">{t('beActive.raceWithFriends')}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="mb-4 flex items-center">
                                                <Image alt="sport icon" src={sportIcon}/>
                                                <span className="ml-6">{t('beActive.makeUp')}</span>
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
                            <div className="w-[500px] 2xl:w-[600px] mt-32 2xl:mt-20 relative right-32 2xl:right-32">
                                <Image alt="beactive image" src={beActiveImage}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}