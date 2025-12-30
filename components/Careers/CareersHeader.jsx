import React from "react";
import { t } from "@/lib/i18n";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, BreadcrumbLink } from "../ui/breadcrumb";

export default function CareersHeader({ lang }) {


    return (
        <div className="entrepreneurs-header">

            <div className="container">
                <Breadcrumb className="category-breadcrumb">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/" className="breadcrumb-link">{t(lang, "home")}</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage className="breadcrumb-link breadcrumb-active-page">{t(lang, "careers_header_title")}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <div className="entrepreneurs-header-cont">
                    <i className="fa-solid fa-suitcase"></i>
                    <h2>{t(lang, "careers_header_title")}</h2>
                    <p className="entrepreneurs-header-cont-p">
                        {t(lang, "careers_header_desc")}
                    </p>
                </div>
            </div>
        </div>
    );
}