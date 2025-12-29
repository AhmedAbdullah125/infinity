import React from "react";
import { t } from "@/lib/i18n";

export default function SeminarsHeader({ lang }) {


    return (
        <div className="entrepreneurs-header">

            <div className="container">
                <div className="entrepreneurs-header-cont">
                    <i className="fa-solid fa-graduation-cap"></i>
                    <h2>{t(lang, "seminars_events")}</h2>
                    <p className="entrepreneurs-header-cont-p">
                        {t(lang, "seminars_header_desc")}
                    </p>
                </div>
            </div>
        </div>
    );
}