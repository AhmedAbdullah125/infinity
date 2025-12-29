import SeminarsWrapper from "@/components/seminars/SeminarsWrapper";
import React from "react";
export default function page({ params }) {
    return (
        <SeminarsWrapper id={params.id} />
    )
}
