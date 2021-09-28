import React, {useRef} from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import Link from 'next/link';
import Header from '../components/Header';
import transitionImage from '../../public/transition.png';
import arrowImage from '../../public/connect/connect_arrow.svg';
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

import connectIcon from '../../public/connect/connect.svg';



export default function Give() {
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
                <div className="absolute top-6 right-16">
                    <div className="flex items-center">
                        <p className="text-bvsPeach font-medium text-xs">{t('give').toLocaleUpperCase()}</p>
                        <span className="ml-3 relative top-[2px]"><Image src={giveTag}/></span>
                    </div>
                </div>
                <div onClick={onScroll} className="absolute right-10 bottom-10">DOWN</div>
                <div className="h-heightBody w-full">
                    <div className="h-full w-2/3 flex">
                        <div className="mt-[360px]">
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
                            <div className="flex flex-col items-end m-0 p-0 mr-28">
                                <span className="font-semibold text-[110px] opacity-25 text-bvsPeach">{t('give')}</span>
                            </div>
                            <div className="absolute top-[60%] right-0">
                                <Image src={musicImage}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-give bg-no-repeat bg-cover relative">
                <Header/>
                <div className="absolute top-6 right-16">
                    <div className="flex items-center">
                        <p className="text-bvsPeach font-medium  text-xs">{t('give').toLocaleUpperCase()}</p>
                        <span className="ml-3 relative top-[2px]"><Image src={giveTag}/></span>
                    </div>
                </div>
                <div className="h-heightBody w-full flex pt-10">
                    <div className="w-1/6 h-5/6 flex flex-col pl-32 pt-24">
                        <div>
                            <Image src={giveIcon}/>
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
                            <div className="flex  text-sm font-normal opacity-70">
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
                        <div className="flex mt-24">
                            <Link href="/action-plan">
                                <button className="w-[180px] h-[35px] rounded-[15px] text-white bg-bvsPeach text-xs"><span className="font-normal">BACK TO </span><span className="font-medium">ACTION PLAN</span></button>
                            </Link>
                            <Link href="/help">
                                <button className="w-[115px] h-[35px] rounded-[15px] bg-transparent border-2 border-bvsPeach text-bvsPeach ml-8"><p className="text-xs font-medium">NEED HELP?</p></button>
                            </Link>
                            <p className="max-w-[257px] font-normal text-xs opacity-25 ml-3">{t('clickGotHelp')}</p>
                        </div>
                    </div>
                    <div className="w-2/6 h-full relative">
                           <div className="absolute right-0 top-14">
                               <Image src={musicImage}/>
                           </div>
                           <div className="w-[500px] absolute top-96 right-10 -z-10">
                               <Image src={giveImage}/>
                           </div>
                    </div>
                </div>
            </div>
        </div>
    )
}