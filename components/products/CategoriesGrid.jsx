import React from "react";
import Image from "next/image";
import { t } from "@/lib/i18n";
import scissors from "@/src/assets/icons/scissors.svg";
import scope from "@/src/assets/icons/scope.svg";
import star from "@/src/assets/icons/star.svg";
import tooth from "@/src/assets/icons/tooth.svg";
import smile from "@/src/assets/icons/smile.svg";
import heart from "@/src/assets/icons/heart.svg";
import hand from "@/src/assets/icons/hand.svg";
import kid from "@/src/assets/icons/kid.svg";
import stethoscope from "@/src/assets/icons/stethoscope.svg";
import Link from "next/link";



export default function CategoriesGrid({ lang }) {
    const categories = [
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

    return (
        <div className="categories-sec">
            <div className="container">
                <div className="categories-cont">
                    <div className="section-badge">{t(lang, "products_badge")}</div>
                    <p className="section-p">{t(lang, "products_desc")}</p>
                    <div className="categories-grid">
                        {categories.map((category) => (
                            <Link href={`/categories/${category.id}`} className="category-card" key={category.id}>
                                <div className="icon-wrapper">
                                    <Image src={category.icon} alt={category.title} width={40} height={40} className="category-icon" />
                                </div>
                                <h3>{category.title}</h3>
                                <p>{category.desc}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
