import GalleryWrapper from "@/components/Gallery/GalleryWrapper";
import React from "react";
export default function page({ params }) {
    return (
        <GalleryWrapper id={params.id} />
    )
}
