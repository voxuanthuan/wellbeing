import React, {useRef} from 'react';
import Head from 'next/head'
import { useTranslation } from "react-i18next";
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import titleMascot from '../../public/title-mascots.png';
import { useAppContext } from '../context';
import NextArrow from '../../public/arrow_next.svg'

export default function Index() {
  const inputEl = useRef(null);
  const {setName} = useAppContext();
  const { t, i18n } = useTranslation();

  function onChangeLanguage(lang) {
    i18n.changeLanguage(lang)
  }
  const updateName = (e) => {
    setName(inputEl.current.value);
  }
  return (
    <div className="bg-[#B4EBF5] relative">
      <Header/>
      <div className="w-full h-heightBody">
      <Head>
        <title>Wellbeing Buddy</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className="pl-16 xl:pl-48 h-full">
          <div className="font-bold text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl pt-10 lg:pt-20">
            <div>
              <div className="flex items-start">
                <h1 className="">BVS&#160;</h1>
                <h1 className=" text-[#cc2c40] animate-fade-in-up inline">WELLBEING</h1>
              </div>
              <h1>CAMPAIGN</h1>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row h-heightMinusWellBeing pt-11 lg:pt-0 pb-0 lg:pb-11">
              <div className=" lg:w-[360px] 2xl:w-[480px]">
                <div className="h-full flex flex-col lg:flex-row items-start lg:items-end justify-between">
                  <div className="space-x-4">
                    <button onClick={() => onChangeLanguage("vi-VN")} className="hover:scale-110 w-[71px] h-[37px] lg:w-[67px] lg:h-[35px] rounded-[18px] bg-[#1E96A5] border-[1px] border-[#1E96A5]  text-white font-medium text-xs">VIE</button>
                    <button onClick={() => onChangeLanguage("en-US")} className="hover:scale-110 w-[71px] h-[37px] lg:w-[67px] lg:h-[35px] rounded-[18px] bg-transparent border-[1px] border-bvsDrakTeal text-bvsDrakTeal font-medium text-xs">ENG</button>
                  </div>
                 <div>
                  <div className="hidden lg:block">
                    <Link href="/intro" passHref>
                        <button onClick={updateName} className="hover:scale-105 w-[130px] h-9 border-1 rounded-[17px] bg-bvsPeach text-white font-medium text-base flex items-center justify-center">
                            <a>{t('next').toLocaleUpperCase()}</a>
                            <div className="ml-3">
                              <Image src={NextArrow}/>
                            </div>
                      </button>
                      </Link>
                  </div>
                 </div>
                  
                </div>
              </div>
              <div className="flex-1">
                <div className="w-full h-full flex items-end">
                  <div className="relative z-10">
                    <div className="absolute top-[110px] sm:top-[120px] md:top-[130px] lg:top-[105px] left-5 lg:left-5 xl:top-32 xl:left-6 2xl:top-36 2xl:left-8 z-20 animate-hide-and-up-2 text-[12px] sm:text-[14px] lg:text-[17px] xl:text-[20px]">
                      <p className="font-medium ">{t('hi')}</p>
                      <input ref={inputEl} className="bg-transparent text-bvsPeach font-medium sm:w-[100px] lg:w-[120px] focus:outline-none placeholder-[#FF3750]" placeholder="Your Name" type="text"/>
                    </div>
                    <div className={"absolute -right-16 top-3 md:-right-6 lg:-right-14 lg:top-4 xl:-right-4 xl:top-4 2xl:right-8 2xl:top-4 z-20 text-[26px] xl:text-[30px] 2xl:text-[34px] font-semibold animate-hide-and-up-3 w-[310px]"}>
                      <p>{t('weAre')}</p>
                      <p className="text-bvsTeal">{t('areFriend')}</p>
                      <p className="text-bvsTeal">{t('wellbeingBVSI')}</p>
                    </div>
                    <div className="2xl:w-[766px]">
                      <Image alt="title mascot" src={titleMascot}/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:hidden mt-4 mx-auto pr-[46px]">
                    <Link href="/intro" passHref>
                        <button onClick={updateName} className="hover:scale-105 w-[130px] h-9 border-1 rounded-[17px] bg-bvsPeach text-white font-medium text-base flex items-center justify-center">
                            <a>{t('next').toLocaleUpperCase()}</a>
                            <div className="ml-3">
                              <Image src={NextArrow}/>
                            </div>
                      </button>
                    </Link>
                  </div>
            </div>
        </div>

      </div>
    </div>
  )
}
