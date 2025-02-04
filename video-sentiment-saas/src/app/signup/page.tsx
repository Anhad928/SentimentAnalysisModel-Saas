"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import type { SignupSchema } from "~/schemas/auth";
import { signupScheme } from "~/schemas/auth";

export default function SignupPage() {
    const [error, setError] = useState<string>("test error");
    const form = useForm<SignupSchema>({
        resolver: zodResolver(signupScheme),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        }

    });

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    async function onSubmit(data: SignupSchema) {

    }
    return (
        <div className="min-h-screen bg-white">
            <nav className="flex h-16 items-center justify-between border-b border-gray-200 px-10">
                <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-800 text-white">
                        SA
                    </div>
                    <span className="text-lg font-medium">Sentiment Analysis</span>
                </div>
            </nav>

            <main className="flex h-[calc[100vh-4rem]] items-center justify-center">
                <div className="w-full max-w-md space-y-8 px-4">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold">Create an account</h2>
                        <p className="mt-2 text-sm text-gray-600">
                            Signup to get Sentiment Analysis
                        </p>
                    </div>

                    <form className="mt-8 space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
                        {error && (
                            <div className="rounded-md bg-red-50 p-4 text-sm text-red-500">
                                {error}
                                </div>
                            )}

                            <div className="space-y-4">
                                <div>
                                    <label>Full Name</label>
                                </div>
                            </div>
                    </form>
                </div>
            </main>
        </div>
    )
}