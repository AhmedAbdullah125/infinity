import React from "react";
import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";
import partner1 from '@/src/assets/parteners/1.svg'
import partner2 from '@/src/assets/parteners/2.svg'
import partner3 from '@/src/assets/parteners/3.svg'
import partner4 from '@/src/assets/parteners/4.svg'
import partner5 from '@/src/assets/parteners/5.svg'
import partner6 from '@/src/assets/parteners/6.svg'
import partner7 from '@/src/assets/parteners/7.svg'
import { t } from "@/lib/i18n";

export default function PartenerSection({ lang }) {

    const data = [
        { id: 1, image: partner1 },
        { id: 2, image: partner2 },
        { id: 3, image: partner3 },
        { id: 4, image: partner4 },
        { id: 5, image: partner5 },
        { id: 6, image: partner6 },
        { id: 7, image: partner7 },
        { id: 8, image: partner1 },
        { id: 9, image: partner2 },
        { id: 10, image: partner3 },
        { id: 11, image: partner4 },
        { id: 12, image: partner5 },
        { id: 13, image: partner6 },
        { id: 14, image: partner7 },
    ]
    return (
        <div className="partener-sec">
            <div className="container">
                <div className="partener-cont">
                    <div className="section-badge">{t(lang, "partners_badge")}</div>
                    <p className="section-p">{t(lang, "partners_desc")}</p>
                    <Marquee pauseOnHover reverse={lang == "ar" ? false : true} className="[--duration:20s]" style={{ direction: "ltr" }}>
                        {data.map((img) => (
                            <div className="parner-marquee-item" key={img.id}>
                                <Image src={img.image} alt="partner-img" className="marquee-image" />
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    );
}
