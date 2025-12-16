import Link from "next/link";
import React from "react";
import product from '@/src/assets/home/product.jpg'

import Image from "next/image";
import { t } from "@/lib/i18n";

export default function ProductsSection({ lang }) {

    return (
        <div className="services-sec">
            <div className="container">
                <div className="services-sec-cont">
                    <div className="sec-head">
                        <div className="section-badge">{t(lang, "medical_products_badge")}</div>
                        <Link href={'/products'} className="link-btn"><span>{t(lang, "view_more_products")}</span> <i className={`fa-solid ${lang == "ar" ? "fa-chevron-left" : "fa-chevron-right"}`}></i></Link>
                    </div>
                    <div className="sec-text">
                        <h2>{t(lang, "featured_products_title")}</h2>
                        <p>{t(lang, "products_desc")}</p>
                    </div>
                    <div className="services-grid">
                        <Link href={'/product/1'} className="prod-grid-item">
                            <Image src={product} alt="clincs" width={50} height={50} />
                            <div className="text-cont">
                                <h3>{t(lang, "product_1_title")}</h3>
                                <p>{t(lang, "product_1_desc")}</p>
                            </div>
                        </Link>
                        <Link href={'/product/2'} className="prod-grid-item">
                            <Image src={product} alt="clincs" width={50} height={50} />
                            <div className="text-cont">
                                <h3>{t(lang, "product_2_title")}</h3>
                                <p>{t(lang, "product_2_desc")}</p>
                            </div>
                        </Link>
                        <Link href={'/product/3'} className="prod-grid-item">
                            <Image src={product} alt="clincs" width={50} height={50} />
                            <div className="text-cont">
                                <h3>{t(lang, "product_3_title")}</h3>
                                <p>{t(lang, "product_3_desc")}</p>
                            </div>
                        </Link>
                        <Link href={'/product/4'} className="prod-grid-item">
                            <Image src={product} alt="clincs" width={50} height={50} />
                            <div className="text-cont">
                                <h3>{t(lang, "product_4_title")}</h3>
                                <p>{t(lang, "product_4_desc")}</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
