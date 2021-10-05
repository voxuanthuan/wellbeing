import React, {useRef} from 'react';
import Head from 'next/head'
import { useTranslation } from "react-i18next";
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import titleMascot from '../../public/title-mascots.png';
import { useAppContext } from '../context';
import NextArrow from '../../public/arrow_next.svg'
import {useRouter} from 'next/router';

export default function Index() {
  const router = useRouter();
  const inputEl = useRef(null);
  const {name, setName} = useAppContext();
  const { t, i18n } = useTranslation();
  
  function onChangeLanguage(lang) {
    i18n.changeLanguage(lang)
  }
  const handleOnClick = () => {
    if (inputEl.current.value === undefined || inputEl.current.value.trim() === "") {
      return inputEl.current.focus();
    }
    router.push('/action-plan')
  }
  return (
    <div className="bg-[#B4EBF5] relative">
      <Header/>
      <Head>
        <title>BVIS WELLBEING</title>
      </Head>
      <div className="w-full h-heightBody">
        <div className="pl-16 xl:pl-48 h-full">
          <div className="font-bold text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl pt-10 lg:pt-20">
            {
              i18n.language !== "vi-VN" ? (
                <div>
                  <div className="flex items-start">
                    <p>{t('bvis').toLocaleUpperCase()}&#160;</p>
                    <p className=" text-[#cc2c40] animate-fade-in-up inline">{t("wellbeing").toLocaleUpperCase()}</p>
                  </div>
                  <p>{t('campagin').toLocaleUpperCase()}</p>
                </div>
              ) : (
                <div>
                  <p>{t('campagin').toLocaleUpperCase()}</p>
                  <p className=" text-[#cc2c40]">{t('wellbeing').toLocaleUpperCase()}</p>
                </div>
              )
            }
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
                      <button onClick={handleOnClick} className="hover:scale-105 w-[130px] h-9 border-1 rounded-[17px] bg-bvsPeach text-white font-medium text-base flex items-center justify-center">
                          <a>{t('next').toLocaleUpperCase()}</a>
                          <div className="ml-3">
                            <Image alt="next arrow" src={NextArrow}/>
                          </div>
                    </button>
                  </div>
                 </div>
                  
                </div>
              </div>
              <div className="flex-1">
                <div className="w-full h-full flex items-end">
                  <div className="relative z-10">
                    <div className={"absolute top-[110px] sm:top-[120px] md:top-[130px] lg:top-[105px] left-5 lg:left-5 2xl:left-6 z-20 animate-hide-and-up-2 text-[12px] sm:text-[14px] lg:text-[17px] " + (i18n.language === "vi-VN" ? "xl:text-[14px] 2xl:text-[16px] 2xl:top-32 xl:top-28 xl:left-6" : " xl:text-[16px] 2xl:text-[19px] 2xl:top-36 xl:top-28 xl:left-5")}>
                      <p className="font-medium "dangerouslySetInnerHTML={{__html: t('hi')}} />
                      <input ref={inputEl} value={name} onChange={(e) => setName(e.target.value)} className="focus:placeholder-opacity-40 bg-transparent text-bvsPeach font-medium sm:w-[100px] lg:w-[120px] focus:outline-none placeholder-[#FF3750]" placeholder="Your Name" type="text"/>
                    </div>
                    <div className={"absolute font-semibold animate-hide-and-up-3 w-[310px] "
                      + (i18n.language === "vi-VN" ? " -right-16 top-3 md:-right-6 lg:right-8 lg:top-4 xl:-right-10 xl:top-2 2xl:right-0 2xl:top-3 z-20 text-[24px] xl:text-[22px] 2xl:text-[27px]": " -right-16 top-3 md:-right-6 lg:right-8 lg:top-4 xl:-right-9 xl:top-6 2xl:right-0 2xl:top-5 z-20 text-[26px] xl:text-[25px] 2xl:text-[28px]" )
                    }>
                      <p dangerouslySetInnerHTML={{__html: t('weAre')}} />
                    </div>
                    <div className="w-[600px] xl:w-[650px] 2xl:w-[766px]">
                      <Image alt="title mascot" src={titleMascot}/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:hidden mt-4 mx-auto pr-[46px]">
                      <button onClick={handleOnClick} className="hover:scale-105 w-[130px] h-9 border-1 rounded-[17px] bg-bvsPeach text-white font-medium text-base flex items-center justify-center">
                          <a>{t('next').toLocaleUpperCase()}</a>
                          <div className="ml-3">
                            <Image alt="next arrow" src={NextArrow}/>
                          </div>
                    </button>
                  </div>
            </div>
        </div>

      </div>
    </div>
  )
}
