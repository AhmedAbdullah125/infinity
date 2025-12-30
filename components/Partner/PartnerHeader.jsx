import React from "react";
import { t } from "@/lib/i18n";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, BreadcrumbLink } from "../ui/breadcrumb";

export default function GalleryHeader({ lang }) {


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
                            <BreadcrumbPage className="breadcrumb-link breadcrumb-active-page">{t(lang, "partners_menu")}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
        </div>
    );
}