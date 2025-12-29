import React from "react";
import { t } from "@/lib/i18n";
import Image from "next/image";
import Link from "next/link";
import img1 from "@/src/assets/entrepreneurs/1.png";
import img2 from "@/src/assets/entrepreneurs/2.png";

export default function SeminarsContent({ lang }) {
    const seminars = [
        {
            id: 1,
            badge: t(lang, "seminar_online"),
            date: t(lang, "seminar_date"),
            desc: t(lang, "seminar_desc"),
            btnText: t(lang, "seminar_btn_watch"),
            link: "#",
            image: img1,
            type: "online"
        },
        {
            id: 2,
            badge: t(lang, "seminar_location_riyadh"),
            date: t(lang, "seminar_date"),
            desc: t(lang, "seminar_desc"),
            btnText: t(lang, "seminar_btn_register"),
            link: "/seminars/1",
            image: img2,
            type: "physical"
        },
        {
            id: 3,
            badge: t(lang, "seminar_online"),
            date: t(lang, "seminar_date"),
            desc: t(lang, "seminar_desc"),
            btnText: t(lang, "seminar_btn_watch"),
            link: "#",
            image: img2,
            type: "online"
        },
        {
            id: 4,
            badge: t(lang, "seminar_location_riyadh"),
            date: t(lang, "seminar_date"),
            desc: t(lang, "seminar_desc"),
            btnText: t(lang, "seminar_btn_register"),
            link: "/seminars/2",
            image: img1,
            type: "physical"
        }
    ];

    return (
        <div className="seminars-content-sec">
            <div className="container">
                <div className="seminars-grid">
                    {seminars.map((item) => (
                        <div key={item.id} className="seminar-card">
                            <div className="card-image">
                                <Image src={item.image} alt="seminar" />
                                <div className="card-badge">{item.badge}</div>
                                <div className="card-date">
                                    <i className="fa-regular fa-calendar"></i>
                                    <span>{item.date}</span>
                                </div>
                            </div>
                            <div className="card-body">
                                <p className="card-desc">{item.desc}</p>
                                <Link href={item.link} className="card-btn">
                                    {item.btnText}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}