import React, {useRef} from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import Header from '../components/Header';
import transitionImage from '../../public/transition.png';
import arrowImage from '../../public/connect/connect_arrow.svg';
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
    const elementRef = useRef(null)
    const onScroll = () => {
        const scroll = elementRef.current.scrollHeight - elementRef.current.clientHeight;
        elementRef.current.scrollTo({ top: scroll, behavior:'smooth'});
    }
    return (
        <div ref={elementRef} className="bg-[#FAF5ED] overflow-scroll h-screen">
            <div className="relative">
                <Header />
                <div className="absolute top-6 right-16 flex items-center">
                    <p className="text-bvsOrange font-medium">{t('connect').toLocaleUpperCase()}</p>
                    <div className="ml-3"><Image src={connectTag}/></div>
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
                    <div className="absolute top-[45%] right-0 w-[647px] leading-[110px]">
                        <div className="relative">
                            <div className="flex flex-col items-end m-0 p-0  mr-10 pb-6">
                                <span className="font-semibold text-[110px] opacity-25 text-bvsOrange absolute right-32">{t('connect').toLocaleUpperCase()}</span>
                            </div>
                            <div className="absolute top-16 right-0">
                                <Image src={musicImage}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-connect bg-no-repeat bg-cover relative">
                <Header/>
                <div className="absolute top-6 right-16 flex items-center">
                    <p className="text-bvsOrange font-medium">{t('connect').toLocaleUpperCase()}</p>
                    <div className="ml-3"><Image src={connectTag}/></div>
                </div>
                <div className="h-heightBody w-full flex pt-10">
                    <div className="w-1/6 h-5/6 flex flex-col pl-32 pt-24">
                        <div>
                            <Image width="105px" src={connectIcon}/>
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
                            <div className="ml-5 text-sm font-normal text-black opacity-70 leading-[17px]">
                                <ul>
                                    <li>
                                        <div className="mb-4 flex items-center">
                                            <Image src={familyImage}/>
                                            <span className="ml-6">{t('connectInfo.talk')}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="mb-4 flex items-center">
                                            <Image src={friendImage}/>
                                            <span className="ml-6">{t('connectInfo.help')}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="mb-4 flex items-center">
                                            <Image src={mealImage}/>
                                            <span className="ml-6">{t('connectInfo.eatMeal')}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="mb-4 flex items-center">
                                            <Image src={highFive}/>
                                            <span className="ml-6">{t('connectInfo.makeFriend')}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="mb-4 flex items-center">
                                            <Image src={hiImage}/>
                                            <span className="ml-6">{t('connectInfo.sayHello')}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="mb-4 flex items-center">
                                            <Image src={pieImage}/>
                                            <span className="ml-6">{t('connectInfo.bakeSomeCakes')}</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex mt-20">
                            <Link href="/action-plan">
                                <button className="w-[180px] h-[35px] rounded-[15px] text-white bg-bvsPeach text-xs"><span className="font-normal">BACK TO </span><span className="font-medium">ACTION PLAN</span></button>
                            </Link>
                            <Link href="/help">
                                <button className="w-[115px] h-[35px] rounded-[15px] bg-transparent border-2 border-bvsPeach text-bvsPeach ml-8"><p className="text-xs font-medium">NEED HELP?</p></button>
                            </Link>
                            <p className="max-w-[257px] font-normal text-xs opacity-25 ml-3">If you would like some help with your wellbeing or to talk to someone click here</p>
                        </div>
                    </div>
                    <div className="w-2/6 h-full">
                           <div className="mt-20">
                               <Image src={musicImage}/>
                           </div>
                           <div className="relative w-full right-20 top-4">
                               <Image src={connectImage}/>
                           </div>
                    </div>
                </div>
            </div>
        </div>
    )
}