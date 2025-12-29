import React from "react";
import { t } from "@/lib/i18n";
import Image from "next/image";
import img1 from "@/src/assets/entrepreneurs/1.png"
import img2 from "@/src/assets/entrepreneurs/2.png"
import img3 from "@/src/assets/entrepreneurs/3.png"

export default function CurrentOpportunities({ lang }) {

    const opportunities = [
        {
            id: 1,
            img: img1,
            title: t(lang, "opportunity_1_title"),
            desc: t(lang, "opportunity_1_desc")
        },
        {
            id: 2,
            img: img2,
            title: t(lang, "opportunity_2_title"),
            desc: t(lang, "opportunity_2_desc")
        },
        {
            id: 3,
            img: img3,
            title: t(lang, "opportunity_3_title"),
            desc: t(lang, "opportunity_3_desc")
        },
    ]

    return (
        <div className="entrepreneurs-current-opportunities">
            <div className="container">
                <div className="opportunities-cont">
                    <h3 className="sec-title">{t(lang, "current_opportunities_title")}</h3>
                    <p className="opportunities-cont-p">
                        {t(lang, "current_opportunities_desc")}
                    </p>

                    <div className="opportunities-grid">
                        {opportunities.map((opportunity, index) => (
                            <div
                                key={opportunity.id}
                                className={`opportunity-card ${index % 2 === 0 ? 'image-left' : 'image-right'}`}
                            >
                                <div className="opportunity-image-wrapper">
                                    <Image
                                        src={opportunity.img}
                                        alt={opportunity.title}
                                        className="opportunity-image"
                                    />
                                    <div className="opportunity-badge">
                                        <span>{opportunity.id}</span>
                                    </div>
                                </div>
                                <div className="opportunity-content">
                                    <h4 className="opportunity-title">{opportunity.title}</h4>
                                    <p className="opportunity-desc">{opportunity.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}