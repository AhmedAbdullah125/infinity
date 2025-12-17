import Link from "next/link";
import React from "react";
import Image from "next/image";
import { t } from "@/lib/i18n";

import settingImg from "@/src/assets/icons/settings.svg";
import clincs from "@/src/assets/icons/clincs.svg";
import tool from "@/src/assets/icons/tool.svg";
import acadimy from "@/src/assets/icons/acadmic.svg";
import { usePathname } from "next/navigation";

export default function ServicesSection({ lang }) {
    const pathname = usePathname();
    const services = [
        { id: 1, title: t(lang, "service_1"), image: settingImg },
        { id: 2, title: t(lang, "service_2"), image: clincs },
        { id: 3, title: t(lang, "service_3"), image: tool },
        { id: 4, title: t(lang, "service_4"), image: acadimy },
        { id: 5, title: t(lang, "service_1"), image: settingImg },
        { id: 6, title: t(lang, "service_2"), image: clincs },
        { id: 7, title: t(lang, "service_3"), image: tool },
        { id: 8, title: t(lang, "service_4"), image: acadimy },
    ];

    const selectedServices = pathname == "/" ? services.slice(0, 4) : services;

    return (
        <div className="services-sec">
            <div className="container">
                <div className="services-sec-cont">
                    <div className="sec-head">
                        <div className="section-badge">{t(lang, "medical_services")}</div>
                        {
                            pathname == "/" &&
                            <Link href="/services" className="link-btn">
                                <span>{t(lang, "view_more_services")}</span>{" "}
                                <i className={`fa-solid ${lang === "ar" ? "fa-chevron-left" : "fa-chevron-right"}`} />
                            </Link>
                        }
                    </div>

                    <div className="sec-text">
                        <h2>{t(lang, "our_medical_tech_services")}</h2>
                        <p>{t(lang, "services_desc")}</p>
                    </div>

                    <div className="services-grid">
                        {selectedServices.map((service) => (
                            <div className="grid-item" key={service.id}>
                                <div className="icon-cont">
                                    <Image src={service.image} alt={service.title} width={50} height={50} />
                                </div>
                                <h3>{service.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
