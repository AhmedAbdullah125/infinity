"use client"
import React, { useEffect, useState } from "react";
import Hero from "../Home/Hero";
import { t } from "@/lib/i18n";
import { BreadcrumbSeparator, Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage } from "../ui/breadcrumb";
import img1 from "@/src/assets/products/1.jpg";
import img2 from "@/src/assets/products/2.jpg";
import img3 from "@/src/assets/products/3.jpg";
import img4 from "@/src/assets/products/4.jpg";
import img5 from "@/src/assets/products/5.jpg";
import ProductText from "./ProductText";
import ProductImages from "./ProductImages";
import ProductCatalogRequestForm from "./ProductCatalogRequestForm";


export default function ProductWrapper({ id }) {
    const [lang, setLang] = useState('ar');
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedLang = localStorage.getItem('lang');
            setLang(savedLang || 'ar');
        }
    }, []);

    const product =
    {
        id: 1,
        images: [img1, img2, img3, img4, img5],
        title: "كريم الترطيب اليومي SPF 30",
        description: "ينظف ويزيل المكياج ويرطب في خطوة واحدة. لا يحتاج للشطف، مناسب لجميع أنواع البشرة. ينظف ويزيل المكياج ويرطب في خطوة واحدة. لا يحتاج للشطف، مناسب لجميع أنواع البشرة.ينظف ويزيل المكياج ويرطب في خطوة واحدة. لا يحتاج للشطف، مناسب لجميع أنواع البشرة.ينظف ويزيل المكياج ويرطب في خطوة واحدة. لا يحتاج للشطف، مناسب لجميع أنواع البشرة.ينظف ويزيل المكياج ويرطب في خطوة واحدة. لا يحتاج للشطف، مناسب لجميع أنواع البشرة.",
        category: 1,
        categoryTitle: t(lang, "prod_hair_care_title"),
    }
    return (
        <div className="home-page-content" style={{ direction: lang == "ar" ? "rtl" : "ltr" }}>
            <Hero lang={lang} />
            <div className="product-sec">
                <div className="container">
                    <div className="product-cont">
                        <Breadcrumb className="category-breadcrumb">
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/" className="breadcrumb-link">الأقسام</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbLink href={`/categories/${product.category}`} className="breadcrumb-link">{product.categoryTitle}</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage className="breadcrumb-link breadcrumb-active-page">{product.title}</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                        <div className="product-details">
                            <ProductText product={product} lang={lang} />
                            <ProductImages product={product} />
                        </div>
                        <ProductCatalogRequestForm product={product} lang={lang} />
                    </div>
                </div>
            </div>
        </div>
    )
}
