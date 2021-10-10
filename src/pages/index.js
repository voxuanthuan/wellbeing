import React, {useRef} from 'react';
import Head from 'next/head'
import { useTranslation } from "react-i18next";
import Image from 'next/image';
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
    router.push('/result')
  }
  return (
    <div className="bg-[#B4EBF5] relative h-screen">
      <Header/>
      <Head>
        <title>BVIS WELLBEING</title>
      </Head>
      <div className="w-full h-heightBody">
        <div className="pl-3 md:pl-6 lg:pl-16 xl:pl-48 h-full flex flex-col justify-around">
          <div className="font-bold text-2xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-7xl pt-0 md:pt-10">
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
                  <p className=" lg:text-4xl">{t('campagin').toLocaleUpperCase()}</p>
                  <p className=" text-[#cc2c40] lg:text-4xl">{t('wellbeing').toLocaleUpperCase()}</p>
                </div>
              )
            }
          </div>
          <div className="flex flex-col lg:flex-row h-heightMinusWellBeing pt-0 md:pt-11 lg:pt-0 pb-0 xl:pb-11">
              <div className=" lg:w-[360px] 2xl:w-[480px]">
                <div className="h-full flex flex-col lg:flex-row items-start lg:items-end justify-between">
                  <div className="space-x-4">
                    <button onClick={() => onChangeLanguage("vi-VN")} className="hover:scale-110 w-[71px] h-[37px] lg:w-[67px] lg:h-[35px] rounded-[18px] bg-[#1E96A5] border-[1px] border-[#1E96A5]  text-white font-medium text-xs">VIE</button>
                    <button onClick={() => onChangeLanguage("en-US")} className="hover:scale-110 w-[71px] h-[37px] lg:w-[67px] lg:h-[35px] rounded-[18px] bg-transparent border-[1px] border-bvsDrakTeal text-bvsDrakTeal font-medium text-xs">ENG</button>
                  </div>
                 <div>
                  <div className="hidden lg:block relative">
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
                <div className="w-full h-full flex items-end md:justify-center justify-start">
                  <div className="relative z-10">
                    <div className={"absolute top-[110px] sm:top-[120px] md:left-7 lg:left-5 2xl:left-6 z-20 animate-hide-and-up-2 text-[12px] sm:text-[14px] md:text-base lg:text-[15px] " 
                    + (i18n.language === "vi-VN" ? "top-[50px] left-2 md:top-[108px]  lg:top-[90px] md:left-[21px] lg:left-4 text-[7px] md:text-[14px] lg:text-[12px] xl:text-[13px] 2xl:text-[16px] 2xl:top-32 xl:top-[98px] xl:left-5" 
                    : " top-[50px] md:top-[110px]  lg:top-[90px] left-3 md:left-5 text-[7px] lg:text-[14px] xl:text-[14px] 2xl:text-[19px] 2xl:top-32 xl:top-[98px] xl:left-5 2xl:left-7")}>
                      <p className="font-medium"dangerouslySetInnerHTML={{__html: t('hi')}}/>
                      <input ref={inputEl} value={name} onChange={(e) => setName(e.target.value)}
                        className={"focus:placeholder-opacity-40 bg-transparent text-bvsPeach font-medium focus:outline-none placeholder-[#FF3750] " + (i18n.language === "vi-VN" ? "sm:w-[100px] lg:w-[100px] 2xl:w-[126px]": "sm:w-[100px] lg:w-[80px] xl:w-[100px] 2xl:w-[120px]")} placeholder={i18n.language === 'vi-VN' ? 'Tên bạn' : 'Your Name'}
                         type="text"/>
                      <p className="font-medium">{t('amHappie')}</p>
                    </div>
                    <div className={"absolute font-semibold animate-hide-and-up-3 w-auto lg:w-[310px] "
                      + (i18n.language === "vi-VN" ?
                       " top-1 md:top-3 right-5 md:right-12 lg:-right-20 lg:top-3 xl:-right-20 xl:top-2 2xl:right-0 2xl:top-3 z-20 text-[11px] md:text-[23px] lg:text-[19px] xl:text-[21px] 2xl:text-[27px]":
                       " right-7 top-1 md:right-16 lg:-right-20 lg:top-4 xl:-right-16 xl:top-2 2xl:right-0 2xl:top-5 z-20 text-[14px] md:text-[30px] lg:text-[22px] xl:text-[28px] 2xl:text-[32px]" )
                    }>
                      <p dangerouslySetInnerHTML={{__html: t('weAre')}} />
                    </div>
                    <div className="w-[300px] sm:w-[400px] md:w-[650px] lg:w-[550px] xl:w-[600px] 2xl:w-[766px]">
                      <Image alt="title mascot" src={titleMascot}/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:hidden mt-4 mb-2 mx-auto">
                      <button onClick={handleOnClick} className="hover:scale-105 w-[146px] h-[42px] lg:w-[130px] lg:h-9 border-1 rounded-[17px] bg-bvsPeach text-white font-medium text-base flex items-center justify-center">
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
