'use client'


import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { zodResolver } from "@hookform/resolvers/zod"

import { useState } from "react"
import { useForm } from "react-hook-form"

import { z } from "zod"


const loginSchema = z.object({
  email: z.string().email({ message: "Ingrese un correo electrónico válido" }),
  password: z.string().min(8, { message: "La contraseña debe tener al menos 8 caracteres" }),
})

type LoginFormValues = z.infer<typeof loginSchema>

export function Login() {
  const [isLoading, setIsLoading] = useState(false)

  const {
    handleSubmit,
    register,
    formState: { errors },

   } = useForm(
    {
      mode: "onChange",
      resolver: zodResolver(loginSchema),
      defaultValues: {
        email: "",
        password: "",
      }
      
    }
   )

  const onSubmit = async (data: LoginFormValues) => {
    setIsLoading(true)
    //simulate
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log(data)
    setIsLoading(false)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">Inicio de sesión</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-200">
              Correo
            </Label>
            <Input
              id="email"
              type="email"
              className="w-full mt-1"
              {...register("email")}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="password" className="text-sm font-medium text-gray-700 dark:text-gray-200">
              Contraseña
            </Label>
            <Input
              id="password"
              type="password"
              className="w-full mt-1"
              {...register("password")}
            />
            {errors.password && (
              <p className="mt-1 text-sm text-destructive">{errors.password.message} </p>
              
            )}
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              "Iniciando sesión..."
            ) : (
              <>

                Iniciar sesión
              </>
            )}
          </Button>
        </form>
      </div>
    </div>
  )
}