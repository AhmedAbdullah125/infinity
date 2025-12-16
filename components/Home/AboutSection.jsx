import React from "react";
import { t } from "@/lib/i18n";
import aboutImg from '@/src/assets/home/about.png'
import checkIcon from '@/src/assets/icons/check.svg'
import Image from "next/image";
import Link from "next/link";
export default function AboutSection({ lang }) {
    const features = [
        {
            id: 1,
            title: t(lang, "about_features_1"),
        },
        {
            id: 2,
            title: t(lang, "about_features_2"),
        },
        {
            id: 3,
            title: t(lang, "about_features_3"),
        }
    ]
    return (
        <div className="about-section" >
            <div className="container">
                <div className="about-sec-cont">
                    <div className="r-side">
                        <div className="section-badge">
                            {t(lang, "about")}
                        </div>
                        <h1 className="sec-title">{t(lang, "site_name")}</h1>
                        <div className="sec-content">
                            <p>{t(lang, "about_desc_1")}</p>
                            <p>{t(lang, "about_desc_2")}</p>
                            <div className="feats">
                                {
                                    features.map((feature) => (
                                        <div className="feature" key={feature.id}>
                                            <div className="feature-icon">
                                                <Image src={checkIcon} alt="check" width={20} height={20} />
                                            </div>
                                            <p>{feature.title}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="btns">
                            <Link href={"/about"} className="main-btn">
                                <span>{t(lang, "know_more_about_us")}</span>
                                <i className={`fa-solid ${lang == "ar" ? "fa-arrow-right-long" : "fa-arrow-left-long"}`}></i>
                            </Link>
                            <Link href={'/about'} className="arrow-btn">
                                <i className={`fa-solid ${lang == "ar" ? "fa-arrow-left" : "fa-arrow-right"}`}></i>
                            </Link>
                        </div>
                    </div>
                    <div className="l-side">
                        <Image src={aboutImg} alt="about" width={500} height={500} />
                    </div>
                </div>
            </div>
        </div>
    );
}