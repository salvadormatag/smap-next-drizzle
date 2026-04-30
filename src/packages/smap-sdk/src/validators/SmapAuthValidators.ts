import {z} from "zod";

// 1. Definim l'esquema de validació
export const SmapAuthSchema = z.object({
    email: z.email({message: "L'email no sembla una adreça de correu electrònic vàlida."})
    .toLowerCase()
    .trim(),
    
    password: z.string()
    .min(12, {message: "Per la teva propia seguretat, recomanem un mínim de 12 caràcters."})
    .max(100)
    // Validació de Majúscula
    .refine((val) => /[A-Z]/.test(val), {
        message: "Cal almenys una lletra majúscula.",
    })
    // Validació de Número
    .refine((val) => /[0-9]/.test(val), {
        message: "Cal almenys un número.",
    })
    // Validació de Caràcter Especial
    .refine((val) => /[!@#$%^&*(),.?":{}|<>]/.test(val), {
        message: "Cal almenys un caràcter especial.",
    }),
});

// 2. Extraiem el tipus automàticament (Això és màgia de TS)
export type SmapAuthCredentials = z.infer<typeof SmapAuthSchema>;