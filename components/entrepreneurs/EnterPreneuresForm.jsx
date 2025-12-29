"use client"

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { t } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function EnterPreneuresForm({ lang }) {
    const formSchema = z.object({
        firstName: z.string().min(2, {
            message: t(lang, "ent_val_name"),
        }),
        lastName: z.string().min(2, {
            message: t(lang, "ent_val_name"),
        }),
        country: z.string().min(2, {
            message: t(lang, "ent_val_country"),
        }),
        phone: z.string().min(9, {
            message: t(lang, "ent_val_phone"),
        }),
        clinicName: z.string().min(2, {
            message: t(lang, "ent_val_clinic"),
        }),
    });

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            country: "",
            phone: "",
            clinicName: "",
        },
    });

    function onSubmit(values) {
        console.log(values);
        // Handle form submission here
    }

    return (
        <div className="entrepreneurs-form-section">
            <div className="container">
                <div className="form-wrapper">
                    <div className="form-header">
                        <h3 className="form-title">{t(lang, "ent_register_title")}</h3>
                        <p className="form-desc">{t(lang, "ent_register_desc")}</p>
                    </div>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <div className="form-grid">
                                {/* Row 1: Last Name (Right) - First Name (Left) in RTL */}
                                {/* In code order, we'll put them standard, CSS will handle RTL grid */}

                                <FormField
                                    control={form.control}
                                    name="lastName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-white">{t(lang, "ent_last_name")}</FormLabel>
                                            <FormControl>
                                                <Input placeholder={t(lang, "ent_last_name_ph")} {...field} className="custom-input" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="firstName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-white">{t(lang, "ent_first_name")}</FormLabel>
                                            <FormControl>
                                                <Input placeholder={t(lang, "ent_first_name_ph")} {...field} className="custom-input" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="form-grid">
                                <FormField
                                    control={form.control}
                                    name="country"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-white">{t(lang, "ent_country")}</FormLabel>
                                            <FormControl>
                                                <Input placeholder={t(lang, "ent_country_ph")} {...field} className="custom-input" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-white">{t(lang, "ent_phone")}</FormLabel>
                                            <FormControl>
                                                <Input placeholder={t(lang, "ent_phone_ph")} {...field} className="custom-input text-left" dir="ltr" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <FormField
                                control={form.control}
                                name="clinicName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-white">{t(lang, "ent_clinic")}</FormLabel>
                                        <FormControl>
                                            <Input placeholder={t(lang, "ent_clinic_ph")} {...field} className="custom-input" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button type="submit" className="submit-btn w-full">
                                {t(lang, "ent_send_btn")}
                            </Button>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    );
}