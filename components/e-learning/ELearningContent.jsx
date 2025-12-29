import React from "react";
import { t } from "@/lib/i18n";
import Image from "next/image";
import Link from "next/link";
import img1 from "@/src/assets/entrepreneurs/1.png";
import img2 from "@/src/assets/entrepreneurs/2.png";
import img3 from "@/src/assets/entrepreneurs/3.png";

export default function ELearningContent({ lang }) {
    const courses = [
        {
            id: 1,
            title: t(lang, "elearning_course_title"),
            desc: t(lang, "elearning_course_desc"),
            image: img1
        },
        {
            id: 2,
            title: t(lang, "elearning_course_title"),
            desc: t(lang, "elearning_course_desc"),
            image: img2
        },
        {
            id: 3,
            title: t(lang, "elearning_course_title"),
            desc: t(lang, "elearning_course_desc"),
            image: img3
        },
        {
            id: 4,
            title: t(lang, "elearning_course_title"),
            desc: t(lang, "elearning_course_desc"),
            image: img2
        },
        {
            id: 5,
            title: t(lang, "elearning_course_title"),
            desc: t(lang, "elearning_course_desc"),
            image: img3
        },
        {
            id: 6,
            title: t(lang, "elearning_course_title"),
            desc: t(lang, "elearning_course_desc"),
            image: img1
        }
    ];

    return (
        <div className="elearning-content-sec">
            <div className="container">
                <div className="elearning-grid">
                    {courses.map((item) => (
                        <div key={item.id} className="elearning-card">
                            <div className="card-image">
                                <Image src={item.image} alt={item.title} />
                            </div>
                            <div className="card-body">
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}