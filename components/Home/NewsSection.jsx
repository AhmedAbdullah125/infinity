import Link from "next/link";
import React from "react";
import clinc from '@/src/assets/home/clinc.jpg'
import calender from '@/src/assets/icons/calender.svg'
import Image from "next/image";
import { t } from "@/lib/i18n";

export default function NewsSection({ lang }) {
    console.log(lang);


    return (
        <div className="services-sec">
            <div className="container">
                <div className="services-sec-cont">
                    <div className="sec-head">
                        <div className="section-badge">{t(lang, "our_news")}</div>
                        <Link href={'/products'} className="link-btn"><span>{t(lang, "view_more_news")}</span> <i className={`fa-solid ${lang == "ar" ? "fa-chevron-left" : "fa-chevron-right"}`}></i></Link>
                    </div>
                    <div className="sec-text">
                        <h2>{t(lang, "latest_news_title")}</h2>
                        <p>{t(lang, "latest_news_desc")}</p>
                    </div>
                    <div className="services-grid news-grid">
                        <div className="prod-grid-item">
                            <Image src={clinc} alt="clincs" width={50} height={50} />
                            <div className="text-cont">
                                <div className="calender-cont">
                                    <Image src={calender} alt="clincs" width={16} height={16} />
                                    <span>{t(lang, "news_date")}</span>
                                </div>
                                <h3>{t(lang, "news_1_title")}</h3>
                                <p>{t(lang, "news_1_desc")}</p>
                                <Link href={'/news/1'} className="link-btn"><span>{t(lang, "view_more")}</span> <i className={`fa-solid ${lang == "ar" ? "fa-chevron-left" : "fa-chevron-right"}`}></i></Link>
                            </div>
                        </div>
                        <div href={'/news/2'} className="prod-grid-item">
                            <Image src={clinc} alt="clincs" width={50} height={50} />
                            <div className="text-cont">
                                <div className="calender-cont">
                                    <Image src={calender} alt="clincs" width={16} height={16} />
                                    <span>{t(lang, "news_date")}</span>
                                </div>
                                <h3>{t(lang, "news_2_title")}</h3>
                                <p>{t(lang, "news_2_desc")}</p>
                                <Link href={'/news/1'} className="link-btn"><span>{t(lang, "view_more")}</span> <i className={`fa-solid ${lang == "ar" ? "fa-chevron-left" : "fa-chevron-right"}`}></i></Link>
                            </div>
                        </div>
                        <div href={'/news/3'} className="prod-grid-item">
                            <Image src={clinc} alt="clincs" width={50} height={50} />
                            <div className="text-cont">
                                <div className="calender-cont">
                                    <Image src={calender} alt="clincs" width={16} height={16} />
                                    <span>{t(lang, "news_date")}</span>
                                </div>
                                <h3>{t(lang, "news_3_title")}</h3>
                                <p>{t(lang, "news_3_desc")}</p>
                                <Link href={'/news/1'} className="link-btn"><span>{t(lang, "view_more")}</span> <i className={`fa-solid ${lang == "ar" ? "fa-chevron-left" : "fa-chevron-right"}`}></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
