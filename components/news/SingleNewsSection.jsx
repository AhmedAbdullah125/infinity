import React from "react";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "../ui/breadcrumb";
import Image from "next/image";
import img1 from "@/src/assets/entrepreneurs/3.png";
import { t } from "@/lib/i18n";

export default function SingleNewsSection({ lang }) {
    const news = {
        title: t(lang, "single_news_title"),
        description: t(lang, "single_news_desc"),
        image: img1,
        date: t(lang, "single_news_date")
    }

    return (
        <div className="single-news" style={{ direction: lang == "ar" ? "rtl" : "ltr" }}>
            <div className="container">
                <div className="single-news-cont">
                    <Breadcrumb className="category-breadcrumb">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/news" className="breadcrumb-link">{t(lang, "news_crumb")}</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage className="breadcrumb-link breadcrumb-active-page">{news.title}</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <div className="single-news-content">
                        <Image src={news.image} alt="" />
                        <div className="single-news-content-head">
                            <h1>{news.title}</h1>
                            <div className="date">
                                <i className="fa-solid fa-calendar"></i>
                                <span>{news.date}</span>
                            </div>
                        </div>
                        <div className="single-news-content-body">
                            <h3>{t(lang, "news_details")}</h3>
                            <p>{news.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
