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
// import fullLogo from '@/src/assets/home/fullLogo.svg'
import fullLogo from '@/src/assets/home/simpleLogo.svg'

import { t } from '@/lib/i18n'
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
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
              <Link href={'/services'}>{t(lang, 'services')}</Link>
              <Link href={'/products'}>{t(lang, 'products')}</Link>
              <Link href={'/entrepreneurs'}>{t(lang, 'entrepreneurs_and_investors')}</Link>
              <Link href={'/more'}>{t(lang, 'more')}</Link>
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
                <div className="mobile-menu-cont">
                  <Link href={'/'} onClick={() => setMobileOpen(false)}>{t(lang, 'home')}</Link>
                  <Link href={'/about'} onClick={() => setMobileOpen(false)}>{t(lang, 'about')}</Link>
                  <Link href={'/services'} onClick={() => setMobileOpen(false)}>{t(lang, 'services')}</Link>
                  <Link href={'/products'} onClick={() => setMobileOpen(false)}>{t(lang, 'products')}</Link>
                  <Link href={'/entrepreneurs'} onClick={() => setMobileOpen(false)}>{t(lang, 'entrepreneurs_and_investors')}</Link>
                  <Link href={'/more'} onClick={() => setMobileOpen(false)}>{t(lang, 'more')}</Link>
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
