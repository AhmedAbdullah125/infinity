import React from "react";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "../ui/breadcrumb";
import Image from "next/image";
import img3 from "@/src/assets/entrepreneurs/3.png";
import { t } from "@/lib/i18n";

export default function SingleSeminarsSection({ lang }) {
    const seminar = {
        title: t(lang, "single_seminar_title"),
        description: t(lang, "single_seminar_desc"),
        image: img3,
        date: t(lang, "seminar_date"),
        location: t(lang, "seminar_location_riyadh")
    }

    return (
        <div className="single-seminar-sec" style={{ direction: lang == "ar" ? "rtl" : "ltr" }}>
            <div className="container">
                <div className="single-seminar-cont">
                    <Breadcrumb className="category-breadcrumb">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="#" className="breadcrumb-link">{t(lang, "extra_pages")}</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/seminars" className="breadcrumb-link">{t(lang, "seminars_events")}</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage className="breadcrumb-link breadcrumb-active-page">{seminar.title}</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <div className="single-seminars-content">
                        <div className="seminar-hero">
                            <Image src={seminar.image} alt={seminar.title} className="hero-img" />
                            <div className="hero-overlay-date">
                                <i className="fa-regular fa-calendar"></i>
                                <span>{seminar.date}</span>
                            </div>
                            <div className="hero-overlay-location">
                                {seminar.location}
                            </div>
                        </div>

                        <div className="seminar-body">
                            <h1>{seminar.title}</h1>
                            <p>{seminar.description}</p>
                            <button className="register-btn">{t(lang, "seminar_btn_register")}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
