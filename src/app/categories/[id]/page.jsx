import CategoryPageWrraper from "@/components/products/CategoryPageWrraper";
import React from "react";
export default function page({ params }) {
    return (
        <CategoryPageWrraper id={params.id} />
    )
}
