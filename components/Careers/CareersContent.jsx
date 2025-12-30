"use client";
import React, { useState } from "react";
import { t } from "@/lib/i18n";
import Image from "next/image";
import Link from "next/link";
import img1 from "@/src/assets/entrepreneurs/1.png";
import img2 from "@/src/assets/entrepreneurs/2.png";
import img3 from "@/src/assets/entrepreneurs/3.png";
import JobDetailsModal from "./JobDetailsModal";
import ApplicationFormModal from "./ApplicationFormModal";

export default function CareersContent({ lang }) {
    const [selectedJob, setSelectedJob] = useState(null);
    const [isApplyOpen, setIsApplyOpen] = useState(false);
    const [applyingJob, setApplyingJob] = useState(null);

    const jobs = [
        {
            id: 1,
            title: t(lang, "job_medical_sales_manager"),
            experience: t(lang, "job_experience_years"),
            desc: t(lang, "job_sales_desc"),
            image: img1,
            location: t(lang, "job_location_riyadh"),
            dept: t(lang, "job_sales_dept")
        },
        {
            id: 2,
            title: t(lang, "job_medical_sales_manager"),
            experience: t(lang, "job_experience_years"),
            desc: t(lang, "job_sales_desc"),
            image: img1,
            location: t(lang, "job_location_riyadh"),
            dept: t(lang, "job_sales_dept")
        },
        {
            id: 3,
            title: t(lang, "job_medical_sales_manager"),
            experience: t(lang, "job_experience_years"),
            desc: t(lang, "job_sales_desc"),
            image: img1,
            location: t(lang, "job_location_riyadh"),
            dept: t(lang, "job_sales_dept")
        },
        {
            id: 4,
            title: t(lang, "job_medical_sales_manager"),
            experience: t(lang, "job_experience_years"),
            desc: t(lang, "job_sales_desc"),
            image: img1,
            location: t(lang, "job_location_riyadh"),
            dept: t(lang, "job_sales_dept")
        }
    ];

    const handleViewDetails = (job) => {
        setSelectedJob(job);
    };

    const handleCloseDetails = () => {
        setSelectedJob(null);
    };

    const handleApplyFromDetails = () => {
        setApplyingJob(selectedJob);
        setSelectedJob(null);
        setIsApplyOpen(true);
    };

    const handleCloseApply = () => {
        setIsApplyOpen(false);
        setApplyingJob(null);
    };

    return (
        <div className="careers-content-sec">
            <div className="container">
                <div className="careers-grid">
                    {jobs.map((job) => (
                        <div key={job.id} className="career-card">
                            <div className="career-image">
                                <Image src={job.image} alt={job.title} />
                                <div className="career-title-overlay">
                                    <h3>{job.title}</h3>
                                </div>
                            </div>
                            <div className="career-body">
                                <div className="career-meta">
                                    <div className="meta-item">
                                        <i className="fa-solid fa-location-dot"></i>
                                        <span>{job.location}</span>
                                    </div>
                                    <div className="meta-item">
                                        <i className="fa-regular fa-clock"></i>
                                        <span>{job.experience}</span>
                                    </div>
                                    <div className="meta-item">
                                        <i className="fa-solid fa-warehouse"></i>
                                        <span>{job.dept}</span>
                                    </div>
                                </div>
                                <p className="career-desc">{job.desc}</p>
                                <button
                                    onClick={() => handleViewDetails(job)}
                                    className="career-btn w-full"
                                >
                                    {t(lang, "view_details_apply")}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <JobDetailsModal
                isOpen={!!selectedJob}
                onClose={handleCloseDetails}
                job={selectedJob}
                onApply={handleApplyFromDetails}
                lang={lang}
            />

            <ApplicationFormModal
                isOpen={isApplyOpen}
                onClose={handleCloseApply}
                jobTitle={applyingJob?.title}
                lang={lang}
            />
        </div>
    );
}