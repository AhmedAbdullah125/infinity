import Link from "next/link";
import React from "react";
import settingImg from '@/src/assets/icons/settings.svg'
import clincs from '@/src/assets/icons/clincs.svg'
import tool from '@/src/assets/icons/tool.svg'
import acadimy from '@/src/assets/icons/acadmic.svg'
import Image from "next/image";
import { t } from "@/lib/i18n";

export default function ServicesSection({ lang }) {

    return (
        <div className="services-sec">
            <div className="container">
                <div className="services-sec-cont">
                    <div className="sec-head">
                        <div className="section-badge">
                            {t(lang, "medical_services")}
                        </div>
                        <Link href={'/services'} className="link-btn"><span>{t(lang, "view_more_services")}</span> <i className={`fa-solid ${lang == "ar" ? "fa-chevron-left" : "fa-chevron-right"}`}></i></Link>
                    </div>
                    <div className="sec-text">
                        <h2>{t(lang, "our_medical_tech_services")}</h2>
                        <p>{t(lang, "services_desc")}</p>
                    </div>
                    <div className="services-grid">
                        <div className="grid-item">
                            <div className="icon-cont">
                                <Image src={settingImg} alt="setting" width={50} height={50} />
                            </div>
                            <h3>{t(lang, "service_1")}</h3>
                        </div>
                        <div className="grid-item">
                            <div className="icon-cont">
                                <Image src={clincs} alt="clincs" width={50} height={50} />
                            </div>
                            <h3>{t(lang, "service_2")}</h3>
                        </div>
                        <div className="grid-item">
                            <div className="icon-cont">
                                <Image src={tool} alt="tool" width={50} height={50} />
                            </div>
                            <h3>{t(lang, "service_3")}</h3>
                        </div>
                        <div className="grid-item">
                            <div className="icon-cont">
                                <Image src={acadimy} alt="acadimy" width={50} height={50} />
                            </div>
                            <h3>{t(lang, "service_4")}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
