import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {

  const { products , search , showSearch } = useContext(ShopContext);
  const [showFilter,setShowFilter] = useState(false);
  const [filterProducts,setFilterProducts] = useState([]);
  const [category,setCategory] = useState([]);
  const [subCategory,setSubCategory] = useState([]);
  const [sortType,setSortType] = useState('relavent')

  const toggleCategory = (e) => {

    if (category.includes(e.target.value)) {
        setCategory(prev=> prev.filter(item => item !== e.target.value))
    }
    else{
      setCategory(prev => [...prev,e.target.value])
    }

  }

  const toggleSubCategory = (e) => {

    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev=> prev.filter(item => item !== e.target.value))
    }
    else{
      setSubCategory(prev => [...prev,e.target.value])
    }
  }

  const applyFilter = () => {

    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    if (subCategory.length > 0 ) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }

    setFilterProducts(productsCopy)

  }

  const sortProduct = () => {

    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)));
        break;

      case 'high-low':
        setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)));
        break;

      default:
        applyFilter();
        break;
    }

  }

  useEffect(()=>{
      applyFilter();
  },[category,subCategory,search,showSearch,products])

  useEffect(()=>{
    sortProduct();
  },[sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      
      {/* Filter Options */}
      <div className='min-w-60'>
        <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTROS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>
        {/* Category Filter */}
        <div className={`gradient-border pl-5 py-3 mt-6 ${showFilter ? '' :'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium gradient-text'>CATEGORIAS (A-Z)</p>
          <div className='flex flex-col gap-2 text-sm font-light gradient-text3'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'SPOTIFY'} onChange={toggleCategory}/>  SPOTIFY
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'NETFLIX'} onChange={toggleCategory}/> NETFLIX
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'DISNEY+'} onChange={toggleCategory}/> DISNEY+
            </p>

            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'DISCORD'} onChange={toggleCategory}/>  DISCORD
            </p>
            
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'PLAYSTATION'} onChange={toggleCategory}/>  PLAYSTATION
            </p>
            
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'STEAM WALLET'} onChange={toggleCategory}/>  STEAM WALLET
            </p>
            
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'XBOX LIVE'} onChange={toggleCategory}/>  XBOX LIVE
            </p>
            
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'ADMINVPS'} onChange={toggleCategory}/>  ADMINVPS
            </p>
            
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'AI STUDIO'} onChange={toggleCategory}/>  AI STUDIO
            </p>
            
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'AIRBNB'} onChange={toggleCategory}/>  AIRBNB
            </p>
            
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'AIRO'} onChange={toggleCategory}/>  AIRO
            </p>
            
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'AITARGET'} onChange={toggleCategory}/>   AITARGET
            </p>
            
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'ALIPAY'} onChange={toggleCategory}/>  ALIPAY
            </p>
            
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'ALYTICS'} onChange={toggleCategory}/>  ALYTICS
            </p>
            
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'AMAZON'} onChange={toggleCategory}/>  AMAZON
            </p>
            
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'ANATOMY & PHYSIOLOGY'} onChange={toggleCategory}/>   ANATOMY & PHYSIOLOGY
            </p>
            
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'ANIME DIGITAL NETWORK'} onChange={toggleCategory}/>  ANIME DIGITAL NETWORK
            </p>
            
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'ANIMELAB'} onChange={toggleCategory}/>  ANIMELAB
            </p>
            
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'ANKETOLOG'} onChange={toggleCategory}/>  ANKETOLOG
            </p>
            
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'APPLE ARCADE'} onChange={toggleCategory}/>  APPLE ARCADE
            </p>
            
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'APPLE FITNESS'} onChange={toggleCategory}/>  APPLE FITNESS
            </p>
            
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'APPLE ICLOUD'} onChange={toggleCategory}/>  APPLE ICLOUD
            </p>
            
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'APPLE ID'} onChange={toggleCategory}/>  APPLE ID
            </p>
            
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'APPLE MUSIC'} onChange={toggleCategory}/>  APPLE MUSIC
            </p>
            
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'APPLE NEWS'} onChange={toggleCategory}/>  APPLE NEWS
            </p>
            
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'APPLE ONE'} onChange={toggleCategory}/>  APPLE ONE
            </p>
            
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'APPLE TV+'} onChange={toggleCategory}/>  APPLE TV+
            </p>
            
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'BADOO'} onChange={toggleCategory}/>  BADOO
            </p>
            
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'BANDCAMP'} onChange={toggleCategory}/>  BANDCAMP
            </p>
            
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'BINANCE'} onChange={toggleCategory}/>  BINANCE
            </p>
            
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'BLIZZARD BATTLE.NET'} onChange={toggleCategory}/>  BLIZZARD BATTLE.NET
            </p>
            
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'BOOKMATE'} onChange={toggleCategory}/>  BOOKMATE
            </p>
            
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'BOOKRAGS'} onChange={toggleCategory}/>  BOOKRAGS
            </p>
            
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'BOOSTY'} onChange={toggleCategory}/>  BOOSTY
            </p>
            
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'BRAZZERS'} onChange={toggleCategory}/>  BRAZZERS
            </p>
            
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'BRITBOX'} onChange={toggleCategory}/>  BRITBOX
            </p>
            
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'BUMBLE'} onChange={toggleCategory}/>  BUMBLE
            </p>
            
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'BUSUU'} onChange={toggleCategory}/>  BUSUU
            </p>
            
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'CALLIBRI.RU'} onChange={toggleCategory}/>  CALLIBRI.RU
            </p>
            
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'CALLTOUCH'} onChange={toggleCategory}/>  CALLTOUCH
            </p>
            
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'CALM'} onChange={toggleCategory}/>  CALM
            </p>
            
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'CANDY AI'} onChange={toggleCategory}/>  CANDY AI
            </p>
            
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'CARROT QUEST'} onChange={toggleCategory}/>  CARROT QUEST
            </p>
            
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'CENTR.COM'} onChange={toggleCategory}/>  CENTR.COM
            </p>
            
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'CHARACTER.AI'} onChange={toggleCategory}/>  CHARACTER.AI
            </p>
            
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'OPENAI'} onChange={toggleCategory}/>  OPENAI
            </p>
            
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'CHECKME'} onChange={toggleCategory}/>  CHECKME
            </p>
            
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'CHESS.COM'} onChange={toggleCategory}/>  CHESS.COM
            </p>
            
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'CHORDIFY'} onChange={toggleCategory}/>  CHORDIFY
            </p>
                        
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'CLAUDE.AI'} onChange={toggleCategory}/>  CLAUDE.AI
            </p>
                        
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'CODECADEMY'} onChange={toggleCategory}/>  CODECADEMY
            </p>
                        
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'CODEIUM'} onChange={toggleCategory}/>  CODEIUM
            </p>
                        
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'COURSERA PLUS'} onChange={toggleCategory}/>  COURSERA PLUS
            </p>
                        
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'CRM FOR SIMPLE BUSINESS'} onChange={toggleCategory}/>  CRM FOR SIMPLE BUSINESS
            </p>
                        
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'CRUNCHYROLL'} onChange={toggleCategory}/>  CRUNCHYROLL
            </p>
                        
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'CRYPTO VOUCHER'} onChange={toggleCategory}/>  CRYPTO VOUCHER
            </p>
                        
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'CURIOSITYSTREAM'} onChange={toggleCategory}/>  CURIOSITYSTREAM
            </p>
                        
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'DASHAMAIL'} onChange={toggleCategory}/>  DASHAMAIL
            </p>
                        
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'DATACAMP'} onChange={toggleCategory}/>  DATACAMP
            </p>
                        
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'DEEPL'} onChange={toggleCategory}/>  DEEPL
            </p>
                        
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'DEEZER'} onChange={toggleCategory}/>   DEEZER
            </p>
                        
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'DIGITAL MARKETPLACE'} onChange={toggleCategory}/>  DIGITAL MARKETPLACE
            </p>
                        
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'DISNEY'} onChange={toggleCategory}/>  DISNEY
            </p>
                        
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'DPD'} onChange={toggleCategory}/>  DPD
            </p>
                        
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'DROPBOX'} onChange={toggleCategory}/>  DROPBOX
            </p>
                        
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'DROPS'} onChange={toggleCategory}/>  DROPS
            </p>
                        
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'DUOCARDS'} onChange={toggleCategory}/>  DUOCARDS
            </p>
                        
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'DUOLINGO'} onChange={toggleCategory}/>  DUOLINGO
            </p>
                        
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'EASYWEEK'} onChange={toggleCategory}/>  EASYWEEK
            </p>
                        
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'ENEBA'} onChange={toggleCategory}/>  ENEBA
            </p>
                        
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'ENVATO ELEMENTS'} onChange={toggleCategory}/>  ENVATO ELEMENTS
            </p>
                        
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'ENVYBOX'} onChange={toggleCategory}/>  ENVYBOX
            </p>
                        
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'ENVYCRM'} onChange={toggleCategory}/>  ENVYCRM
            </p>
                        
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'EPIC GAMES STORE'} onChange={toggleCategory}/>  EPIC GAMES STORE
            </p>
                        
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'EPIDEMIC SOUND'} onChange={toggleCategory}/>   EPIDEMIC SOUND
            </p>
                        
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'ESPN+'} onChange={toggleCategory}/>  ESPN+
            </p>
                        
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'ETXT'} onChange={toggleCategory}/>  ETXT
            </p>
                        
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'FACEBOOK'} onChange={toggleCategory}/>  FACEBOOK
            </p>
                        
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'FIREWORKS AI'} onChange={toggleCategory}/>  FIREWORKS AI
            </p>
                        
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'FIRSTVDS'} onChange={toggleCategory}/>  FIRSTVDS
            </p>
                        
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'FLATICON'} onChange={toggleCategory}/>  FLATICON
            </p>
                        
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'FLIGHTRADAR24'} onChange={toggleCategory}/>  FLIGHTRADAR24
            </p>
                        
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'FRAMER'} onChange={toggleCategory}/>   FRAMER
            </p>
                        
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'FREEPIK'} onChange={toggleCategory}/>  FREEPIK
            </p>
                        
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'FRESHDOC'} onChange={toggleCategory}/>  FRESHDOC
            </p>
                        
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'FUBO TV'} onChange={toggleCategory}/>  FUBO TV
            </p>
                        
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'FUNIMATION'} onChange={toggleCategory}/>  FUNIMATION
            </p>
                        
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'GAMMA.APP'} onChange={toggleCategory}/>  GAMMA.APP
            </p>
                        
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'GEFORCE NOW'} onChange={toggleCategory}/>  GEFORCE NOW
            </p>
                        
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'GEMINI AI'} onChange={toggleCategory}/>  GEMINI AI
            </p>
                        
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'GITBOOK'} onChange={toggleCategory}/>  GITBOOK
            </p>
                        
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'GITHUB'} onChange={toggleCategory}/>  GITHUB
            </p>
                        
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'GOG'} onChange={toggleCategory}/>  GOG
            </p>
                        
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'GOOGLE ADS'} onChange={toggleCategory}/>  GOOGLE ADS 
            </p>
                        
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'GOOGLE COLAB'} onChange={toggleCategory}/>  GOOGLE COLAB
            </p>
                        
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'GOOGLE DRIVE (THE GOOGLE DISK)'} onChange={toggleCategory}/>  GOOGLE DRIVE (THE GOOGLE DISK)
            </p>
                        
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'GOOGLE PLAY'} onChange={toggleCategory}/>  GOOGLE PLAY
            </p>
                        
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'GROK'} onChange={toggleCategory}/>  GROK
            </p>
                        
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'HALLMARK'} onChange={toggleCategory}/>  HALLMARK
            </p>
                        
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'HBO'} onChange={toggleCategory}/>  HBO
            </p>
                        
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'HELLOTALK'} onChange={toggleCategory}/>  HELLOTALK
            </p>
                        
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'HEYGEN'} onChange={toggleCategory}/>  HEYGEN
            </p>
                        
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'HISTORY VAULT'} onChange={toggleCategory}/>  HISTORY VAULT
            </p>
                        
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'HOTELS'} onChange={toggleCategory}/>  HOTELS
            </p>
                        
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'HUD SPEED'} onChange={toggleCategory}/>  HUD SPEED
            </p>
                        
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'HULU'} onChange={toggleCategory}/>  HULU
            </p>
                        
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'IDAGIO'} onChange={toggleCategory}/>  IDAGIO
            </p>
                        
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'iHerb'} onChange={toggleCategory}/>  iHerb
            </p>
                                    
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'InSales'} onChange={toggleCategory}/>  InSales
            </p>
                                    
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'InstaForex'} onChange={toggleCategory}/>  InstaForex
            </p>
                                    
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Investing.com'} onChange={toggleCategory}/>  Investing.com
            </p>
                                    
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'iSmart'} onChange={toggleCategory}/>  iSmart
            </p>
                                    
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Istock'} onChange={toggleCategory}/>  Istock
            </p>
                                    
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'ITSM 365'} onChange={toggleCategory}/>  ITSM 365
            </p>
                                    
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'iTunes'} onChange={toggleCategory}/>  iTunes
            </p>
                                    
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'JivoSite'} onChange={toggleCategory}/>  JivoSite
            </p>
                                    
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'kassir.ru'} onChange={toggleCategory}/>  kassir.ru
            </p>
                                    
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Kits AI'} onChange={toggleCategory}/>    Kits AI
            </p>
                                    
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Kling AI'} onChange={toggleCategory}/>  Kling AI
            </p>
                                    
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Krea Ai'} onChange={toggleCategory}/>  Krea Ai
            </p>
                                    
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'LeadBack'} onChange={toggleCategory}/>  LeadBack
            </p>
                                    
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'LeadGenic'} onChange={toggleCategory}/>  LeadGenic
            </p>
                                    
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Leonardo.ai'} onChange={toggleCategory}/>  Leonardo.ai
            </p>
                                    
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Level Travel'} onChange={toggleCategory}/>  Level Travel
            </p>
                                    
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Likee'} onChange={toggleCategory}/>  Likee
            </p>
                                    
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'LinkedIn'} onChange={toggleCategory}/>  LinkedIn
            </p>
                                    
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Litres'} onChange={toggleCategory}/>  Litres
            </p>
                                    
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'LPgenerator'} onChange={toggleCategory}/>  LPgenerator
            </p>
                                    
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Luma AI'} onChange={toggleCategory}/>  Luma AI
            </p>
                                    
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'MEGA'} onChange={toggleCategory}/>  MEGA
            </p>
                                                
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Meta Quest'} onChange={toggleCategory}/>  Meta Quest
            </p>
                                                
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'OnlyFans'} onChange={toggleCategory}/>    OnlyFans
            </p>
                                                
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Paramount'} onChange={toggleCategory}/>  Paramount
            </p>
                                                
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Pornhub Premium'} onChange={toggleCategory}/>   Pornhub Premium
            </p>
                                                
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'SCRIBD'} onChange={toggleCategory}/>  SCRIBD
            </p>
                                                
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Telegram'} onChange={toggleCategory}/>  Telegram
            </p>
                                                
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Tinder'} onChange={toggleCategory}/>  Tinder
            </p>
                                                
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Twitch'} onChange={toggleCategory}/>  Twitch
            </p>
                                                
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'WordPress'} onChange={toggleCategory}/>  WordPress
            </p>
                                                
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'YouTube Music'} onChange={toggleCategory}/>  YouTube Music
            </p>
                                                
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'YouTube Premium'} onChange={toggleCategory}/>  YouTube Premium
            </p>
                                                
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Zoom'} onChange={toggleCategory}/>  Zoom
            </p>
                                                
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Windows'} onChange={toggleCategory}/>  Windows
            </p>
          
          </div>
        </div>
        {/* SubCategory Filter */}
        <div className={`gradient-border pl-5 py-3 my-5 ${showFilter ? '' :'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium gradient-text'>DURACION</p>
          <div className='flex flex-col gap-2 text-sm font-light gradient-text3'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'1-MES'} onChange={toggleSubCategory}/> 1 MES
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'2-MESES'} onChange={toggleSubCategory}/>  2 MESES
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'3-MESES'} onChange={toggleSubCategory}/>  3 MESES
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'4-MESES'} onChange={toggleSubCategory}/>  4 MESES
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'5-MESES'} onChange={toggleSubCategory}/>  5 MESES
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'6-MESES'} onChange={toggleSubCategory}/>  6 MESES
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'7-MESES'} onChange={toggleSubCategory}/>  7 MESES
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'8-MESES'} onChange={toggleSubCategory}/>  8 MESES
            </p>

            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'9-MESES'} onChange={toggleSubCategory}/>  9 MESES
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'10-MESES'} onChange={toggleSubCategory}/>  10 MESES
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'11-MESES'} onChange={toggleSubCategory}/>  11 MESES
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'12-MESES'} onChange={toggleSubCategory}/>   12 MESES
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'24-MESES'} onChange={toggleSubCategory}/>  24 MESES
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'inf'} onChange={toggleSubCategory}/> DE POR VIDA
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className='flex-1'>

        <div className='flex justify-between text-base sm:text-2xl mb-4'>
            <Title text1={'TODOS LOS'} text2={'PRODUCTOS'} />
            {/* Porduct Sort */}
            <select  onChange={(e)=>setSortType(e.target.value)} className='animated-gradients text-sm px-2'>
              <option value="relavent">Ordenar por: Relevancia</option>
              <option value="low-high">Ordenar por: Precio de menor a mayor</option>
              <option value="high-low">Ordenar por: Precio de mayor a menor</option>
            </select>
        </div>

        {/* Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProducts.map((item,index)=>(
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Collection
