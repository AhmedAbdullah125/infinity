import SingleSeminarsWrapper from "@/components/seminars/SingleSeminarsWrapper";
import React from "react";
export default function page({ params }) {
    return (
        <SingleSeminarsWrapper id={params.id} />
    )
}
