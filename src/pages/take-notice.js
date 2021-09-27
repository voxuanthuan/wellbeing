import React, {useRef} from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import Header from '../components/Header';
import transitionImage from '../../public/transition.png';
import arrowImage from '../../public/be-active/arrow.svg';
import musicImage from '../../public/music-image.svg';
import takeNoticeImage from '../../public/take-notice.png'

import takeNoticeTag from '../../public/tags/take-notice.svg';

import familyIcon from '../../public/take-notice/family.svg';
import moonIcon from '../../public/take-notice/moon-star.svg';
import paintIcon from '../../public/take-notice/paint.svg';
import rainIcon from '../../public/take-notice/rain.svg';
import searchIcon from '../../public/take-notice/search.svg';
import thinkingIcon from '../../public/take-notice/thinking.svg';
import windowIcon from '../../public/take-notice/window.svg';
import takeNoticeIcon from '../../public/take-notice/take-notice.svg';


export default function TakeNotice() {
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
                <div className="absolute top-6 right-16">
                    <div className="flex items-center">
                        <p className="text-bvsDrakTeal font-medium text-xs">{t('take-notice').toLocaleUpperCase()}</p>
                        <span className="ml-3 relative top-[2px]"><Image src={takeNoticeTag}/></span>
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
                            <div className="flex flex-col items-end m-0 p-0  mr-5 pb-6">
                                <span className="font-semibold text-[110px] opacity-25 text-bvsTeal">{t('takeNoticeInfo.Take').toLocaleUpperCase()}</span>
                                <span className="font-semibold text-[110px] opacity-25 text-bvsTeal relative">{t('takeNoticeInfo.Notice').toLocaleUpperCase()}</span>
                            </div>
                            <div className="absolute top-[60%] right-0">
                                <Image src={musicImage}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-takeNotice bg-no-repeat bg-cover relative">
                <Header/>
                <div className="absolute top-6 right-16">
                    <div className="flex items-center">
                        <p className="text-bvsDrakTeal font-medium  text-xs">{t('take-notice').toLocaleUpperCase()}</p>
                        <span className="ml-3 relative top-[2px]"><Image src={takeNoticeTag}/></span>
                    </div>
                </div>
                <div className="h-heightBody w-full flex pt-10">
                    <div className="w-1/6 h-5/6 flex flex-col pl-32 pt-24">
                        <div>
                            <Image src={takeNoticeIcon}/>
                        </div>
                        <div className="mt-52">
                            <div className="h-[265px] w-[2px]">
                                <div className="bg-black opacity-25 h-[168px]"></div>
                                <div className="bg-bvsDrakTeal h-[79px]"></div>
                                <div className="relative w-full block">
                                    <h1 className="w-full text-bvsDrakTeal text-xs font-medium top-20 absolute transform -rotate-90 origin-center whitespace-nowrap">{t('take-notice').toLocaleUpperCase()}</h1>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="h-full w-3/6 max-w-[828px]">
                        <h1 className="font-semibold text-4xl mt-20" dangerouslySetInnerHTML={{__html: t('takeNoticeDetail')}}></h1>
                        <div className="mt-20">
                            <h3 className="font-medium text-[18px] mb-10">{t('whynot')}</h3>
                            <div className="flex  text-sm font-normal opacity-70">
                                <ul className="ml-5">
                                    <li>
                                        <div className="mb-4 flex items-center">
                                            <Image alt="word icon" src={windowIcon}/>
                                            <span className="ml-6  max-w-[335px]">{t('takeNoticeInfo.look')}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="mb-4 flex items-center">
                                            <Image alt="gallery" src={paintIcon}/>
                                            <span className="ml-6  max-w-[335px]">{t('takeNoticeInfo.paint')}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="mb-4 flex items-center">
                                            <Image alt="guitar" src={thinkingIcon}/>
                                            <span className="ml-6  max-w-[335px]">{t('takeNoticeInfo.think')}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="mb-4 flex items-center">
                                            <Image alt="search" src={rainIcon}/>
                                            <span className="ml-6  max-w-[335px]">{t('takeNoticeInfo.listen')}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="mb-4 flex items-center">
                                            <Image alt="meal" src={searchIcon}/>
                                            <span className="ml-6  max-w-[335px]">{t('takeNoticeInfo.play')}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="mb-4 flex items-center">
                                            <Image alt="cook" src={familyIcon}/>
                                            <span className="ml-6  max-w-[335px]">{t('takeNoticeInfo.notice')}</span>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="ml-10">
                                    <li>
                                        <div className="mb-4 flex items-center">
                                            <Image alt="bee" src={moonIcon}/>
                                            <span className="ml-6  max-w-[335px]">{t('takeNoticeInfo.lookAt')}</span>
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
                           <div className="absolute top-12 right-0">
                               <Image src={musicImage}/>
                           </div>
                           <div className="w-[500px] top-80 absolute right-32 -z-10">
                               <Image src={takeNoticeImage}/>
                           </div>
                    </div>
                </div>
            </div>
        </div>
    )
}