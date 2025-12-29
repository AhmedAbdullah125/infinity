import React from "react";
import { t } from "@/lib/i18n";
import Link from "next/link";

export default function ELearningFooter({ lang }) {
    return (
        <div className="elearning-footer-sec">
            <div className="container">
                <div className="elearning-footer-content">
                    <h2>{t(lang, "elearning_footer_title")}</h2>
                    <p>{t(lang, "elearning_footer_desc")}</p>
                    <Link href="/contact" className="contact-btn">
                        {t(lang, "contact_us")}
                    </Link>
                </div>
            </div>
        </div>
    );
}