import React, {useRef} from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

import Header from '../components/Header';
import transitionImage from '../../public/transition.png';
import arrowImage from '../../public/be-active/arrow.svg';
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
    const elementRef = useRef();
    const onScroll = () => {
        const scroll = elementRef.current.scrollHeight - elementRef.current.clientHeight;
        elementRef.current.scrollTo({ top: scroll, behavior:'smooth'});
    }
    return (
        <div ref={elementRef} className="bg-bvsTealLight overflow-scroll h-screen w-full">
            <div className="relative">
                <Header />
                <div className="absolute top-6 right-16 flex items-center">
                    <p className="text-bvsTeal font-medium">{t('be-active').toLocaleUpperCase()}</p>
                    <div className="ml-3"><Image src={beActiveTag}/></div>
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
                        <div className="max-w-[658px] mt-36 ml-56">
                            <div className="font-semibold text-4xl mb-32" dangerouslySetInnerHTML={{__html: t('introDetail')}} />
                            <div className="w-[472px]"><Image src={transitionImage}/></div>
                        </div>
                    </div>
                    <div className="absolute top-1/3 right-0 w-[647px] leading-[110px]">
                        <div className="relative">
                            <div className="flex flex-col items-end m-0 p-0  mr-10 pb-6">
                                <span className="font-semibold text-[110px] opacity-25 text-bvsTeal">{t('be-active').toLocaleUpperCase()}</span>
                            </div>
                            <div className="absolute top-[60%] right-0">
                                <Image src={musicImage}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-beActive bg-no-repeat bg-cover relative">
                <div className="pt-4">
                    <Header/>
                </div>
                <div className="absolute top-10 right-16 flex items-center">
                    <p className="text-bvsTeal font-medium">{t('be-active').toLocaleUpperCase()}</p>
                    <div className="ml-3"><Image src={beActiveTag}/></div>
                </div>
                <div className="h-heightBody w-full flex">
                    <div className="w-1/6 h-5/6 flex flex-col pl-32 pt-24">
                        <div>
                            <Image src={beActiveIcon}/>
                        </div>
                        <div className="mt-48">
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
                        <h1 className="font-semibold text-4xl mt-20" dangerouslySetInnerHTML={{__html: t('beactiveDetail')}}></h1>
                        <div className="mt-20">
                            <h3 className="font-medium text-[18px] mb-10">{t('whynot')}</h3>
                            <div className="flex text-sm font-normal text-black opacity-70">
                                <ul className="ml-5">
                                    <li>
                                        <div className="mb-4 flex items-center">
                                            <Image src={dacingIcon}/>
                                            <span className="ml-6">{t('beActive.danceWithSong')}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="mb-4 flex items-center">
                                            <Image src={dogIcon}/>
                                            <span className="ml-6">{t('beActive.walk')}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="mb-4 flex items-center">
                                            <Image src={hulaHoopIcon}/>
                                            <span className="ml-6">{t('beActive.hualHoop')}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="mb-4 flex items-center">
                                            <Image src={teamIcon}/>
                                            <span className="ml-6">{t('beActive.sportTeams')}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="mb-4 flex items-center">
                                            <Image src={playGroundIcon}/>
                                            <span className="ml-6">{t('beActive.playGames')}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="mb-4 flex items-center">
                                            <Image src={bicycleIcon}/>
                                            <span className="ml-6">{t('beActive.walkOrCycle')}</span>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="ml-10">
                                    <li>
                                        <div className="mb-4 flex items-center">
                                            <Image src={gardenIcon}/>
                                            <span className="ml-6">{t('beActive.garden')}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="mb-4 flex items-center">
                                            <Image src={runIcon}/>
                                            <span className="ml-6">{t('beActive.raceWithFriends')}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="mb-4 flex items-center">
                                            <Image src={sportIcon}/>
                                            <span className="ml-6">{t('beActive.makeUp')}</span>
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
                            </Link>                            <p className="max-w-[257px] font-normal text-xs opacity-25 ml-3">If you would like some help with your wellbeing or to talk to someone click here</p>
                        </div>
                    </div>
                    <div className="w-2/6 h-full">
                           <div className="mt-20">
                               <Image src={musicImage}/>
                           </div>
                           <div className="w-[700px] mt-16 relative right-52 -z-10">
                               <Image src={beActiveImage}/>
                           </div>
                    </div>
                </div>
            </div>
        </div>
    )
}