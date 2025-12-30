"use client";
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { t } from "@/lib/i18n";

export default function ApplicationFormModal({ isOpen, onClose, jobTitle, lang }) {
    if (!isOpen) return null;

    const formSchema = z.object({
        firstName: z.string().min(2, { message: t(lang, "validation_required") }),
        lastName: z.string().min(2, { message: t(lang, "validation_required") }),
        email: z.string().email({ message: t(lang, "validation_email") }),
        phone: z.string().min(10, { message: t(lang, "validation_required") }),
        cv: z.any()
        // .refine((files) => files?.length == 1, "File is required.") // distinct validation for file
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = (data) => {
        console.log("Form Data:", data);
        alert(t(lang, "form_success"));
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-white rounded-[24px] w-full max-w-2xl overflow-hidden shadow-xl animate-in fade-in zoom-in-95 duration-300 relative">
                {/* Header */}
                <div className="bg-[#0f172a] px-8 py-6 text-white flex justify-between items-center relative overflow-hidden">
                    <div className="z-10">
                        <span className="bg-[#075B58] px-3 py-1 rounded text-xs font-medium mb-2 inline-block">
                            {t(lang, "apply_now")}
                        </span>
                        <h2 className="text-2xl font-bold">{jobTitle}</h2>
                    </div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#075B58]/20 rounded-full blur-2xl -mr-8 -mt-8 pointer-events-none"></div>
                </div>

                {/* Body */}
                <div className="p-8">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="firstName" className="text-right block">{t(lang, "form_fname")}</Label>
                                <Input id="firstName" {...register("firstName")} className="text-right" />
                                {errors.firstName && <span className="text-red-500 text-sm block text-right">{errors.firstName.message}</span>}
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="lastName" className="text-right block">{t(lang, "form_lname")}</Label>
                                <Input id="lastName" {...register("lastName")} className="text-right" />
                                {errors.lastName && <span className="text-red-500 text-sm block text-right">{errors.lastName.message}</span>}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-right block">{t(lang, "form_email")}</Label>
                            <Input id="email" type="email" {...register("email")} className="text-right" />
                            {errors.email && <span className="text-red-500 text-sm block text-right">{errors.email.message}</span>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="phone" className="text-right block">{t(lang, "form_phone")}</Label>
                            <Input id="phone" type="tel" {...register("phone")} className="text-right" />
                            {errors.phone && <span className="text-red-500 text-sm block text-right">{errors.phone.message}</span>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="cv" className="text-right block">{t(lang, "form_cv")}</Label>
                            <Input id="cv" type="file" {...register("cv")} className="text-right file:bg-[#075B58] file:text-white file:border-0 file:rounded-md file:px-4 file:py-2 file:mr-4 file:hover:bg-[#064e4b] cursor-pointer" />
                            {errors.cv && <span className="text-red-500 text-sm block text-right">{errors.cv.message}</span>}
                        </div>

                        <div className="pt-4 flex gap-4 flex-row-reverse">
                            <Button type="submit" className="flex-1 bg-[#075B58] hover:bg-[#064e4b] h-12 text-base">
                                {t(lang, "form_submit")}
                            </Button>
                            <Button type="button" variant="outline" onClick={onClose} className="flex-1 h-12 text-base">
                                {t(lang, "form_cancel")}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
