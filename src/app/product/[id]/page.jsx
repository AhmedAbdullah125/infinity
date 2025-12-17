import ProductWrapper from "@/components/products/ProductWrapper";
import React from "react";
export default function page({ params }) {
    return (
        <ProductWrapper id={params.id} />
    )
}
