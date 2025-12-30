import React from 'react';
import { t } from "@/lib/i18n";

export default function JobDetailsModal({ isOpen, onClose, job, onApply, lang }) {
    if (!isOpen || !job) return null;

    return (
        <div className="job-details-modal">
            <div className="modal-content">
                {/* Header */}
                <div className="modal-header">
                    <div className="z-10 relative w-full">
                        <div className="header-top">
                            <span className="dept-badge">
                                {t(lang, "full_time")} {/* Assuming full time / part time or department */}
                            </span>
                        </div>

                        <div className="header-main">
                            <h2>{job.title}</h2>
                            <div className="job-meta">
                                <div className="meta-item">
                                    <i className="fa-regular fa-clock"></i>
                                    <span>{job.experience}</span>
                                </div>
                                <div className="meta-item">
                                    <i className="fa-solid fa-location-dot"></i>
                                    <span>{job.location}</span>
                                </div>
                                <div className="meta-item">
                                    <i className="fa-solid fa-warehouse"></i>
                                    <span>{job.dept}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Background decoration */}
                    <div className="header-bg-decoration"></div>
                </div>

                {/* Body */}
                <div className="modal-body">
                    <div className="section">
                        <h3>
                            {t(lang, "job_desc_title")}
                        </h3>
                        <p>
                            {job.desc}
                        </p>
                    </div>

                    <div className="section">
                        <h3>
                            {t(lang, "job_requirements_title")}
                        </h3>
                        <ul>
                            {[1, 2, 3, 4].map((item) => (
                                <li key={item}>
                                    <i className="fa-regular fa-circle-check"></i>
                                    <span>{t(lang, "job_sales_desc")}</span> {/* Placeholder for requirements */}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="section">
                        <h3>
                            {t(lang, "job_benefits_title")}
                        </h3>
                        <ul className='grid-features'>
                            {[1, 2].map((item) => (
                                <li key={item}>
                                    <i className="fa-regular fa-circle-check"></i>
                                    <span>{t(lang, "job_sales_desc")}</span> {/* Placeholder for benefits */}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Footer */}
                <div className="modal-footer">
                    <button onClick={onClose} className="cancel-btn" > {t(lang, "form_cancel")} </button>
                    <button onClick={onApply} className="apply-btn" > {t(lang, "apply_now")}</button>
                </div>
            </div>
        </div>
    );
}
