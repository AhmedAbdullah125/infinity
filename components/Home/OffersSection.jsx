"use client";
import { t } from "@/lib/i18n";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function OffersSection({ lang }) {
    return (
        <section className="hero-slider" style={{ direction: "rtl" }}>
            <div className="container">
                <div className="offers-sec-cont">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 4000 }}
                        loop
                        className="hero-swiper"
                    >
                        <SwiperSlide>
                            <div className="slide-content">
                                <p className="badge">{t(lang, "special_offer")}</p>
                                <h2>{t(lang, "limited_time_offer")}</h2>
                                <a href="#" className="cta">
                                    <span>{t(lang, "click_for_more")} </span> <i className={`fa-solid ${lang === "ar" ? "fa-arrow-up-left-from-square" : "fa-arrow-up-right-from-square"}`}></i>
                                </a>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="slide-content">
                                <p className="badge">{t(lang, "seasonal_sales")}</p>
                                <h2>{t(lang, "best_offers")}</h2>
                                <a href="#" className="cta">
                                    <span>{t(lang, "click_for_more")} </span> <i className={`fa-solid ${lang === "ar" ? "fa-arrow-up-left-from-square" : "fa-arrow-up-right-from-square"}`}></i>
                                </a>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div className="abs1"></div>
                    <div className="abs2"></div>
                </div>
            </div>
        </section>
    );
}
