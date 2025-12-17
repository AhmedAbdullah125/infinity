import { t } from "@/lib/i18n";
import Link from "next/link";
import React from "react";
export default function ProductText({ product, lang }) {

    return (
        <div className="product-text">
            <h2 className="product-title">{product.title}</h2>
            <p className="product-description">{product.description}</p>
            <Link href={`https://wa.me/20123456789?text= اريد مناقشتكم بخصوص المنتج ${product.title}`} target="_blank" className="product-whatsapp">
                <span>{t(lang, "whatsapp")}</span>
                <i className="fa-brands fa-whatsapp"></i>
            </Link>
        </div>
    )
}
