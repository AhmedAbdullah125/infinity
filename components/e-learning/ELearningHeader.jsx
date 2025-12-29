import React from "react";
import { t } from "@/lib/i18n";

export default function ELearningHeader({ lang }) {


    return (
        <div className="entrepreneurs-header">

            <div className="container">
                <div className="entrepreneurs-header-cont">
                    <i className="fa-solid fa-graduation-cap"></i>
                    <h2>{t(lang, "e_learning")}</h2>
                    <p className="entrepreneurs-header-cont-p">
                        {t(lang, "elearning_header_desc")}
                    </p>
                </div>
            </div>
        </div>
    );
}