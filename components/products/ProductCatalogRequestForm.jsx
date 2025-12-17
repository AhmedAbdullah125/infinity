"use client";

import * as React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { t } from '@/lib/i18n'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import CongatsCard from "../global/CongatsCard";


export default function ProductCatalogRequestForm({ product, lang = "ar" }) {
    const schema = z.object({
        name: z.string().min(2, t(lang, "val_name_req")).max(80, t(lang, "val_name_long")),
        email: z.string().email(t(lang, "val_email_valid")),
        productName: z.string().min(2, t(lang, "val_prod_req")).max(120, t(lang, "val_prod_long")),
    });

    const form = useForm({
        resolver: zodResolver(schema),
        mode: "onTouched",
        defaultValues: {
            name: "",
            email: "",
            productName: product?.name || "",
        },
    });
    const [showCongatsCard, setShowCongatsCard] = React.useState(false);
    // لو المنتج بيتغير (صفحة ديناميكية)، حدّث القيمة
    React.useEffect(() => {
        form.setValue("productName", product?.name || "");
    }, [product?.name]); // eslint-disable-line react-hooks/exhaustive-deps

    async function onSubmit(values) {
        // TODO: call your API route
        console.log("Catalog request:", values);
        setShowCongatsCard(true);
        setTimeout(() => {
            setShowCongatsCard(false);
        }, 3000);

    }

    return (
        <section dir={lang === "ar" ? "rtl" : "ltr"} className="catalog-request-form">
            {
                showCongatsCard && <CongatsCard title={t(lang, "congrats_title")} description={t(lang, "congrats_desc")} />
            }
            <Card className="request-card">
                <CardHeader className="card-header">
                    <CardTitle className="card-title">
                        {t(lang, "catalog_title")}
                    </CardTitle>
                </CardHeader>

                <CardContent className="card-content">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="form-container">
                            <div className="form-fields-spacing">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem className="form-item">
                                            <FormLabel className="form-label">{t(lang, "name_label")}</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    placeholder={t(lang, "name_placeholder")}
                                                    className="form-input"
                                                />
                                            </FormControl>
                                            <FormMessage className="form-message" />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem className="form-item">
                                            <FormLabel className="form-label">{t(lang, "email_label")}</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    type="email"
                                                    placeholder={t(lang, "email_placeholder")}
                                                    className="form-input"
                                                />
                                            </FormControl>
                                            <FormMessage className="form-message" />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="productName"
                                    render={({ field }) => (
                                        <FormItem className="form-item">
                                            <FormLabel className="form-label">{t(lang, "product_name_label")}</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    className="form-input"
                                                />
                                            </FormControl>
                                            <FormMessage className="form-message" />
                                        </FormItem>
                                    )}
                                />

                                <Button
                                    type="submit"
                                    className="submit-btn"
                                    disabled={form.formState.isSubmitting}
                                >
                                    {t(lang, "submit_request")}
                                </Button>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </section>
    );
}
