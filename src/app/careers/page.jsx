import CareersWrapper from "@/components/Careers/CareersWrapper";
import React from "react";
export default function page({ params }) {
    return (
        <CareersWrapper id={params.id} />
    )
}
