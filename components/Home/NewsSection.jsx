import Link from "next/link";
import React from "react";
import clinc from '@/src/assets/home/clinc.jpg'
import calender from '@/src/assets/icons/calender.svg'
import Image from "next/image";
import { t } from "@/lib/i18n";

export default function NewsSection({ lang }) {

    return (
        <div className="services-sec">
            <div className="container">
                <div className="services-sec-cont">
                    <div className="sec-head">
                        <div className="section-badge">اخبارنا</div>
                        <Link href={'/products'} className="link-btn"><span>عرض المزيد من الاخبار</span> <i className={`fa-solid ${lang == "ar" ? "fa-chevron-left" : "fa-chevron-right"}`}></i></Link>
                    </div>
                    <div className="sec-text">
                        <h2>آخر اخبارنا</h2>
                        <p>تابع أحدث التطورات في القطاع الطبي والتقني</p>
                    </div>
                    <div className="services-grid news-grid">
                        <div className="prod-grid-item">
                            <Image src={clinc} alt="clincs" width={50} height={50} />
                            <div className="text-cont">
                                <div className="calender-cont">
                                    <Image src={calender} alt="clincs" width={16} height={16} />
                                    <span>15 أكتوبر 2025</span>
                                </div>
                                <h3>إطلاق نظام إدارة المستشفيات الجديد</h3>
                                <p>تم إطلاق نظام إدارة المستشفيات الجديد لضمان جودة خدماتنا وضمان رضا العملاء</p>
                                <Link href={'/news/1'} className="link-btn"><span>عرض المزيد</span> <i className={`fa-solid ${lang == "ar" ? "fa-chevron-left" : "fa-chevron-right"}`}></i></Link>
                            </div>
                        </div>
                        <Link href={'/news/2'} className="prod-grid-item">
                            <Image src={clinc} alt="clincs" width={50} height={50} />
                            <div className="text-cont">
                                <div className="calender-cont">
                                    <Image src={calender} alt="clincs" width={16} height={16} />
                                    <span>15 أكتوبر 2025</span>
                                </div>
                                <h3>شراكة استراتيجية مع وزارة الصحة</h3>
                                <p>تم توسيع نطاق شركتنا مع وزارة الصحة لضمان جودة خدماتنا وضمان رضا العملاء</p>
                            </div>
                        </Link>
                        <Link href={'/news/3'} className="prod-grid-item">
                            <Image src={clinc} alt="clincs" width={50} height={50} />
                            <div className="text-cont">
                                <div className="calender-cont">
                                    <Image src={calender} alt="clincs" width={16} height={16} />
                                    <span>15 أكتوبر 2025</span>
                                </div>
                                <h3>ورشة عمل حول التحول الرقمي الصحي</h3>
                                <p>تم تنظيم ورشة عمل حول التحول الرقمي الصحي لضمان جودة خدماتنا وضمان رضا العملاء</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
