"use client"
import React, { useEffect, useState } from "react";
import Hero from "../Home/Hero";
import { t } from "@/lib/i18n";
import { BreadcrumbSeparator, Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage } from "../ui/breadcrumb";
import Link from "next/link";
import ProductCard from "./ProductCard";
import img1 from "@/src/assets/products/1.jpg";
import img2 from "@/src/assets/products/2.jpg";
import img3 from "@/src/assets/products/3.jpg";
import img4 from "@/src/assets/products/4.jpg";


export default function CategoryPageWrraper({ id }) {
    const [lang, setLang] = useState('ar');
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedLang = localStorage.getItem('lang');
            setLang(savedLang || 'ar');
        }
    }, []);
    const categories = [
        {
            id: 1,
            title: t(lang, "prod_medical_devices_title"),
            desc: t(lang, "prod_medical_devices_desc"),
        },
        {
            id: 2,
            title: t(lang, "prod_skin_care_title"),
            desc: t(lang, "prod_skin_care_desc"),
        },
        {
            id: 3,
            title: t(lang, "prod_baby_care_title"),
            desc: t(lang, "prod_baby_care_desc"),
        },
        {
            id: 4,
            title: t(lang, "prod_body_care_title"),
            desc: t(lang, "prod_body_care_desc"),
        },
        {
            id: 5,
            title: t(lang, "prod_health_wellness_title"),
            desc: t(lang, "prod_health_wellness_desc"),
        },
        {
            id: 6,
            title: t(lang, "prod_makeup_title"),
            desc: t(lang, "prod_makeup_desc"),
        },
        {
            id: 7,
            title: t(lang, "prod_perfumes_title"),
            desc: t(lang, "prod_perfumes_desc"),
        },
        {
            id: 8,
            title: t(lang, "prod_hair_care_title"),
            desc: t(lang, "prod_hair_care_desc"),
        },
        {
            id: 9,
            title: t(lang, "prod_dental_care_title"),
            desc: t(lang, "prod_dental_care_desc"),
        }
    ];
    const products = [
        {
            id: 1,
            image: img1,
            title: "كريم الترطيب اليومي SPF 30",
            description: "كريم مرطب يومي خفيف الوزن مع حماية من الشمس SPF 30. يحافظ على رطوبة البشرة.",
            category: 1,
        },
        {
            id: 2,
            image: img2,
            title: "كريم الليل المغذي",
            description: "كريم ليلي مكثف يعمل أثناء النوم على تجديد البشرة. غني بالبيبتيدات وحمض الهيالورونيك.",
            category: 2,
        },
        {
            id: 3,
            image: img3,
            title: "جل الترطيب الخفيف",
            description: "جل مرطب خفيف للبشرة الدهنية والمختلطة. يمتص بسرعة ولا يترك لمعان دهني.",
            category: 3,
        },
        {
            id: 4,
            image: img4,
            title: "واقي الشمس SPF 50+",
            description: "حماية عالية جداً من الشمس مع تركيبة خفيفة لا تترك أثراً أبيض. مقاوم للماء لمدة 80 دقيقة.",
            category: 4,
        },
        {
            id: 5,
            image: img1,
            title: "واقي الشمس للبشرة الحساسة",
            description: "تركيبة معدنية لطيفة خالية من العطور للبشرة الحساسة. SPF 50 مع أكسيد الزنك.",
            category: 5,
        },
        {
            id: 6,
            image: img2,
            title: "بخاخ واقي الشمس SPF 30",
            description: "بخاخ سهل الاستخدام لحماية سريعة من الشمس. مثالي للاستخدام اليومي وإعادة التطبيق.",
            category: 6,
        },
    ];
    const [selectedCategory, setSelectedCategory] = useState(id || "all");
    const filteredProducts = selectedCategory === "all" ? products : products.filter((product) => String(product.category) === String(selectedCategory));
    console.log(selectedCategory);

    return (
        <div className="home-page-content" style={{ direction: lang == "ar" ? "rtl" : "ltr" }}>
            <Hero lang={lang} />
            <div className="category-sec">
                <div className="container">
                    <div className="category-cont">
                        <Breadcrumb className="category-breadcrumb">
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/" className="breadcrumb-link">{t(lang, "categories")}</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage className="breadcrumb-link breadcrumb-active-page">{categories.find((category) => String(category.id) === String(id)).title}</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                        <p className="section-p">{t(lang, "products_desc")}</p>
                        <div className="categories-links">
                            <button className={`category-link ${selectedCategory === "all" ? "active" : ""}`} onClick={() => { setSelectedCategory("all") }}>{t(lang, "all")}</button>
                            {
                                categories.map((category) => (
                                    <Link href={`/categories/${category.id}`} key={category.id} className={`category-link ${String(selectedCategory) === String(category.id) ? "active" : ""}`} onClick={() => { setSelectedCategory(category.id) }}>
                                        {category.title}
                                    </Link>
                                ))
                            }
                        </div>
                        <div className="products-grid">
                            {
                                filteredProducts.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
