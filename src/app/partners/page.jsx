import PartnerWrapper from "@/components/Partner/PartnerWrapper";
import React from "react";
export default function page({ params }) {
    return (
        <PartnerWrapper id={params.id} />
    )
}
