import { z } from "zod"

export const registerFormSchema = z.object({
    name: z.string().nonempty("O nome é obrigatório."),
    email: z.string().nonempty("O e-mail é obrigatório").email("Digite um e-mail válido."),
    password: z
    .string()
    .nonempty("A senha é obrigatória.")
    .min(8, "A senha precisa conter pelo menos 8 caracteres.")
    .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula.")
    .regex(/(?=.*?[a-z])/, "É necessário pelo menos um caractere minúsculo.")
    .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número.")
    .regex(/(?=.*?[$*&!@#])/, "É necessário pelo menos um caractere especial."),
    confirm: z.string().nonempty("Confirmar a senha é obrigatório."),
}).refine(({
    password,
    confirm
}) => password === confirm, {
    message: "As senhas não correspondem.",
    path: ["confirm"],
})

export type RegisterForm = z.infer<typeof registerFormSchema>