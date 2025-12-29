import ELearningWrapper from "@/components/e-learning/ELearningWrapper";
import React from "react";
export default function page({ params }) {
    return (
        <ELearningWrapper id={params.id} />
    )
}
