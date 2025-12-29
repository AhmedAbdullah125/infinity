import React from "react";
import { t } from "@/lib/i18n";

export default function Features({ lang, data }) {

    return (
        <div className="entrepreneurs-feats">
            <div className="container">
                <div className="entrepreneurs-feats-cont">
                    <h3 className="feats-title">{data.title}</h3>
                    <p className="feats-desc">{data.desc}</p>
                </div>
            </div>
        </div>
    );
}