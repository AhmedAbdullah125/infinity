"use client";
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

import { t } from "@/lib/i18n";

const phoneRegex = /^\+?[0-9\s()-]{7,20}$/;

export default function ContactSection({ lang }) {
    const formSchema = z.object({
        fullName: z.string().min(2, t(lang, "name_too_short")).max(80, t(lang, "name_too_long")),
        phone: z.string().trim().optional().refine((v) => !v || phoneRegex.test(v), t(lang, "phone_invalid")),
        subject: z.string().trim().optional(),
        message: z.string().min(10, t(lang, "message_too_short")).max(2000, t(lang, "message_too_long")),
    });

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: { fullName: "", phone: "", subject: "", message: "", },
        mode: "onTouched",
    });

    async function onSubmit(values) {
        // TODO: replace with your API route call
        console.log("Submit:", values);
    }

    return (
        <div className="contact-sec">
            <div className="container">
                <div className="contact-cont">
                    <div className="section-badge">{t(lang, "contact_us_badge")}</div>
                    <p className="section-p">{t(lang, "contact_desc")}</p>
                    <Card className="contact-card">
                        <CardHeader className="card-header">
                            <CardTitle className="card-title">{t(lang, "send_message_title")}</CardTitle>
                        </CardHeader>
                        <CardContent className="card-content">
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="contact-form">
                                    <div className="form-grid">
                                        <FormField
                                            control={form.control}
                                            name="fullName"
                                            render={({ field }) => (
                                                <FormItem className="form-item">
                                                    <FormLabel className="form-label">
                                                        {t(lang, "full_name_label")} <span className="text-destructive">*</span>
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input {...field} placeholder={t(lang, "full_name_placeholder")} className="form-input" />
                                                    </FormControl>
                                                    <FormMessage className="form-message" />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="phone"
                                            render={({ field }) => (
                                                <FormItem className="form-item">
                                                    <FormLabel className="form-label">{t(lang, "phone_label")}</FormLabel>
                                                    <FormControl>
                                                        <Input {...field} placeholder={t(lang, "phone_placeholder")} inputMode="tel" className="form-input" />
                                                    </FormControl>
                                                    <FormMessage className="form-message" />
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <FormField
                                        control={form.control}
                                        name="subject"
                                        render={({ field }) => (
                                            <FormItem className="form-item">
                                                <FormLabel className="form-label">{t(lang, "subject_label")}</FormLabel>
                                                <FormControl>
                                                    <Input {...field} placeholder={t(lang, "subject_placeholder")} className="form-input" />
                                                </FormControl>
                                                <FormMessage className="form-message" />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="message"
                                        render={({ field }) => (
                                            <FormItem className="form-item">
                                                <FormLabel className="form-label">
                                                    {t(lang, "message_label")} <span className="text-destructive">*</span>
                                                </FormLabel>
                                                <FormControl>
                                                    <Textarea {...field} placeholder={t(lang, "message_placeholder")} className="form-textarea" />
                                                </FormControl>
                                                <FormMessage className="form-message" />
                                            </FormItem>
                                        )}
                                    />

                                    <Button type="submit" className="submit-btn" disabled={form.formState.isSubmitting} >
                                        <Send className="submit-icon" />{t(lang, "send_message_btn")}
                                    </Button>
                                    <p className="footer-text">{t(lang, "contact_footer")}</p>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
