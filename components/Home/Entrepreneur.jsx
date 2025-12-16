import { t } from "@/lib/i18n";
import entrepreneur from '@/src/assets/home/Entrepreneur.png'
import Image from "next/image";
import creativity from '@/src/assets/icons/creativity.svg'
import growth from '@/src/assets/icons/growth.svg'
import network from '@/src/assets/icons/network.svg'
import Link from "next/link";

export default function Entrepreneur({ lang }) {
    return (
        <section className="entrepreneur-sec">
            <div className="colored-entrepreneur">
                <div className="abs1"></div>
                <div className="abs2"></div>
                <div className="abs3"></div>
                <div className="abs4"></div>
                <div className="container">
                    <div className="entrepreneur-cont">
                        <div className="sec-text">
                            <div className="section-badge">{t(lang, "entrepreneurs_advisors")}</div>
                            <p className="entrepreneur-p">{t(lang, "entrepreneurs_desc")}</p>
                            <div className="items-cont">
                                <div className="item">
                                    <div className="icon-cont">
                                        <Image src={creativity} alt="creativity" width={50} height={50} />
                                    </div>
                                    <div className="text">
                                        <h6>{t(lang, "entrepreneur_feat_1_title")}</h6>
                                        <span>{t(lang, "entrepreneur_feat_1_desc")}</span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="icon-cont">
                                        <Image src={growth} alt="growth" width={50} height={50} />
                                    </div>
                                    <div className="text">
                                        <h6>{t(lang, "entrepreneur_feat_2_title")}</h6>
                                        <span>{t(lang, "entrepreneur_feat_2_desc")}</span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="icon-cont">
                                        <Image src={network} alt="network" width={50} height={50} />
                                    </div>
                                    <div className="text">
                                        <h6>{t(lang, "entrepreneur_feat_3_title")}</h6>
                                        <span>{t(lang, "entrepreneur_feat_3_desc")}</span>
                                    </div>
                                </div>
                            </div>
                            <Link href={'/entrepreneur'} className="entrepreneur-link">{t(lang, "join_entrepreneur_program")}</Link>
                        </div>
                        <div className="sec-img">
                            <Image src={entrepreneur} alt="clincs" width={1000} height={1000} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
