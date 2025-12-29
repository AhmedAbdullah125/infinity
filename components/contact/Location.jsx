"use client";
import React from "react";
import { t } from "@/lib/i18n";

export default function Location({ lang }) {

    return (
        <div className="location-sec">
            <div className="container">
                <div className="location-cont">
                    <div className="section-badge">{t(lang, "our_location")}</div>
                    <div className="map-container">
                        <iframe
                            width="100%"
                            height="600"
                            src="https://maps.google.com/maps?q=31.041715,31.383059&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            frameBorder="0"
                            scrolling="no"
                            marginHeight="0"
                            marginWidth="0"
                            title="location"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}
