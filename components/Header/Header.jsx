'use client'
import React, { useEffect, useState } from 'react'
import mailIcon from '@/src/assets/icons/mail.svg'
import phoneIcon from '@/src/assets/icons/phone.svg'
import whatsappIcon from '@/src/assets/icons/whatsapp.svg'
import youtubeIcon from '@/src/assets/icons/YouTube.svg'
import facebookIcon from '@/src/assets/icons/facebook.svg'
import instagramIcon from '@/src/assets/icons/instagram.svg'
import linkedinIcon from '@/src/assets/icons/linkedin.svg'
import snapchatIcon from '@/src/assets/icons/snapchat.svg'
import tiktokIcon from '@/src/assets/icons/tiktok.svg'
import xIcon from '@/src/assets/icons/x.svg'
import shareIcon from '@/src/assets/icons/share.svg'
import Image from 'next/image'
import Link from 'next/link'
import scissors from "@/src/assets/icons/scissors.svg";
import scope from "@/src/assets/icons/scope.svg";
import star from "@/src/assets/icons/star.svg";
import tooth from "@/src/assets/icons/tooth.svg";
import smile from "@/src/assets/icons/smile.svg";
import heart from "@/src/assets/icons/heart.svg";
import hand from "@/src/assets/icons/hand.svg";
import kid from "@/src/assets/icons/kid.svg";
import stethoscope from "@/src/assets/icons/stethoscope.svg";
// import fullLogo from '@/src/assets/home/fullLogo.svg'
import fullLogo from '@/src/assets/home/simpleLogo.svg'

import { t } from '@/lib/i18n'
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);
  const [lang, setLang] = useState('ar');
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('lang');
      setLang(savedLang || 'ar');

      const handleScroll = () => {
        if (window.scrollY > 300) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };

      window.addEventListener('scroll', handleScroll);

      // Check initial scroll position
      handleScroll();

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);
  const products = [
    {
      id: 1,
      title: t(lang, "prod_medical_devices_title"),
      desc: t(lang, "prod_medical_devices_desc"),
      icon: stethoscope
    },
    {
      id: 2,
      title: t(lang, "prod_skin_care_title"),
      desc: t(lang, "prod_skin_care_desc"),
      icon: smile
    },
    {
      id: 3,
      title: t(lang, "prod_baby_care_title"),
      desc: t(lang, "prod_baby_care_desc"),
      icon: kid
    },
    {
      id: 4,
      title: t(lang, "prod_body_care_title"),
      desc: t(lang, "prod_body_care_desc"),
      icon: hand
    },
    {
      id: 5,
      title: t(lang, "prod_health_wellness_title"),
      desc: t(lang, "prod_health_wellness_desc"),
      icon: heart
    },
    {
      id: 6,
      title: t(lang, "prod_makeup_title"),
      desc: t(lang, "prod_makeup_desc"),
      icon: star
    },
    {
      id: 7,
      title: t(lang, "prod_perfumes_title"),
      desc: t(lang, "prod_perfumes_desc"),
      icon: scope
    },
    {
      id: 8,
      title: t(lang, "prod_hair_care_title"),
      desc: t(lang, "prod_hair_care_desc"),
      icon: scissors
    },
    {
      id: 9,
      title: t(lang, "prod_dental_care_title"),
      desc: t(lang, "prod_dental_care_desc"),
      icon: tooth
    }
  ];

  const moreMenu = [
    { id: 1, title: t(lang, "seminars_events"), link: "/seminars" },
    { id: 2, title: t(lang, "e_learning"), link: "/e-learning" },
    { id: 3, title: t(lang, "careers"), link: "/careers" },
    { id: 4, title: t(lang, "photo_gallery"), link: "/gallery" },
    { id: 5, title: t(lang, "partners_menu"), link: "/partners" },
    { id: 6, title: t(lang, "our_location_map"), link: "/location" },
    { id: 7, title: t(lang, "complaints_suggestions"), link: "/complaints" },
  ];

  return (
    <div className="header" style={{ direction: lang == "ar" ? "rtl" : "ltr" }}>
      <div className="upper-header">
        <div className="container">
          <div className="uper-cont">
            <div className="nav-contact">
              <div className="contact-method">
                <Image src={mailIcon} alt="mail" width={15} height={13} />
                <Link href="mailto:info@infinity.com">INFINITY MEDICAL COMPANY@gmail.com</Link>
              </div>
              <div className="contact-method">
                <Image src={phoneIcon} alt="phone" width={15} height={13} />
                <Link href="tel:+96648232009">+٩٦٦٤٨٢٣٢٠٠٩</Link>
              </div>
            </div>
            <div className="social-icons">
              <Link href={'https://x.com/'}><Image src={xIcon} alt="x" width={20} height={20} /></Link>
              <Link href={'https://www.tiktok.com/'}><Image src={tiktokIcon} alt="tiktok" width={20} height={20} /></Link>
              <Link href={'https://www.instagram.com/'}><Image src={instagramIcon} alt="instagram" width={20} height={20} /></Link>
              <Link href={'https://www.snapchat.com/'}><Image src={snapchatIcon} alt="snapchat" width={20} height={20} /></Link>
              <Link href={'https://www.linkedin.com/'}><Image src={linkedinIcon} alt="linkedin" width={20} height={20} /></Link>
              <Link href={'https://www.facebook.com/'}><Image src={facebookIcon} alt="facebook" width={20} height={20} /></Link>
              <Link href={'https://www.youtube.com/'}><Image src={youtubeIcon} alt="youtube" width={20} height={20} /></Link>
              <Link href={'https://wa.me/96648232009'}><Image src={whatsappIcon} alt="whatsapp" width={20} height={20} /></Link>
            </div>
          </div>
        </div>
      </div>
      <div className={`main-nav ${scrolled ? "scrolled-nav" : ""}`}>
        <div className="container">
          <div className="main-nav-cont">
            <Link href={'/'} className='home-logo'><Image src={fullLogo} alt="logo" width={150} height={50} className="logo-image" /></Link>
            <div className="links">
              <Link href={'/'}>{t(lang, 'home')}</Link>
              <Link href={'/about'}>{t(lang, 'about')}</Link>
              <div className="dropdown-container">
                <Link href={'/services'}>{t(lang, 'services')}</Link>
              </div>
              <div className="dropdown-container products-dropdown">
                <Link href={'/categories'}>{t(lang, 'products')}</Link>
                <div className="dropdown-menu">
                  {products.map((prod) => (
                    <Link href={`/categories/${prod.id}`} key={prod.id} className="dropdown-item">
                      <div className="icon-cont">
                        <Image src={prod.icon} alt={prod.title} width={20} height={20} />
                      </div>
                      <span>{prod.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
              <Link href={'/entrepreneurs'}>{t(lang, 'entrepreneurs_and_investors')}</Link>

              {/* Desktop More Dropdown */}
              <div className="dropdown-container more-dropdown">
                <div className='dropdown-more'>
                  {t(lang, 'more')}
                  <i className={`fa-solid fa-chevron-down mx-1 text-xs`} style={{ fontSize: '12px' }}></i>
                </div>
                <div className="dropdown-menu">
                  {moreMenu.map((item) => (
                    <Link href={item.link} key={item.id} className="dropdown-item">
                      <span>{item.title}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <Link href={'/news'}>{t(lang, 'news')}</Link>
              <Link href={'/contact'}>{t(lang, 'contact_us')}</Link>
            </div>
            <div className="lang-share">
              <button className="share-btn">
                <Image src={shareIcon} alt="share" width={20} height={20} />
              </button>
              <button className={"lang-btn"} type="button"
                onClick={() => {
                  if (lang === 'ar') {
                    localStorage.setItem('lang', 'en');
                    setLang('en');
                    window.location.reload();
                  }
                  else {
                    localStorage.setItem('lang', 'ar');
                    setLang('ar');
                    window.location.reload();
                  }
                }}
              >
                <span className={"langText"}>{lang === 'ar' ? 'En' : 'ع'}</span>
              </button>
              <button
                className="menu-btn"
                aria-label="Menu"
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen((v) => !v)}
              >
                <i className="fa-solid fa-bars text-white"></i>
              </button>
            </div>
          </div>

          {mobileOpen && (
            <div className="mobile-menu" role="menu" aria-label="Main">
              <div className="container">
                <div className="mobile-menu-cont" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                  <Link href={'/'} onClick={() => setMobileOpen(false)}>{t(lang, 'home')}</Link>
                  <Link href={'/about'} onClick={() => setMobileOpen(false)}>{t(lang, 'about')}</Link>
                  <Link href={'/services'} onClick={() => setMobileOpen(false)}>{t(lang, 'services')}</Link>

                  <div className="mobile-dropdown-trigger">
                    <div className="trigger-row" onClick={() => setMobileProductsOpen(!mobileProductsOpen)} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', padding: '12px 10px', color: 'white', fontSize: '18px' }}>
                      <span>{t(lang, 'products')}</span>
                      <i className={`fa-solid fa-chevron-${mobileProductsOpen ? 'up' : 'down'}`} style={{ fontSize: '14px' }}></i>
                    </div>
                    {mobileProductsOpen && (
                      <div className="mobile-submenu" >
                        <Link href={'/categories'} onClick={() => setMobileOpen(false)} style={{ fontSize: '16px', opacity: 0.9 }}>{t(lang, 'view_more_products')}</Link>
                        {products.map((prod) => (
                          <Link href={`/categories/${prod.id}`} key={prod.id} onClick={() => setMobileOpen(false)} className='mobile-submenu-item'>
                            <div className="icon-cont">
                              <Image src={prod.icon} alt={prod.title} width={16} height={16} />
                            </div>
                            <span>{prod.title}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  <Link href={'/entrepreneurs'} onClick={() => setMobileOpen(false)}>{t(lang, 'entrepreneurs_and_investors')}</Link>

                  {/* Mobile More Dropdown */}
                  <div className="mobile-dropdown-trigger">
                    <div className="trigger-row" onClick={() => setMobileMoreOpen(!mobileMoreOpen)} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', padding: '12px 10px', color: 'white', fontSize: '18px' }}>
                      <span>{t(lang, 'more')}</span>
                      <i className={`fa-solid fa-chevron-${mobileMoreOpen ? 'up' : 'down'}`} style={{ fontSize: '14px' }}></i>
                    </div>
                    {mobileMoreOpen && (
                      <div className="mobile-submenu" >
                        {moreMenu.map((item) => (
                          <Link href={item.link} key={item.id} onClick={() => setMobileOpen(false)} style={{ display: 'block', padding: '8px 0', fontSize: '16px', color: 'white', opacity: 0.9 }}>
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  <Link href={'/news'} onClick={() => setMobileOpen(false)}>{t(lang, 'news')}</Link>
                  <Link href={'/contact'} onClick={() => setMobileOpen(false)}>{t(lang, 'contact_us')}</Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
