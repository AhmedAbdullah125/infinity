import React from "react";
import { t } from "@/lib/i18n";

export default function EntrepreneursHeader({ lang }) {


    return (
        <div className="entrepreneurs-header">

            <div className="container">
                <div className="entrepreneurs-header-cont">
                    <h3 className="sec-title">{t(lang, "EntrepreneursHeader_title")}</h3>
                    <p className="entrepreneurs-header-cont-p">
                        {t(lang, "EntrepreneursHeader_desc")}
                    </p>
                </div>
            </div>
        </div>
    );
}