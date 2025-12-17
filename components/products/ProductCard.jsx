import Image from "next/image";
import Link from "next/link";
import React from "react";


export default function ProductCard({ product }) {

    return (
        <Link href={`/product/${product.id}`} className="product-card">
            <Image src={product.image} alt={product.title} width={200} height={200} className="product-image" />
            <div className="text-cont">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-description">{product.description}</p>
            </div>
        </Link>
    )
}
