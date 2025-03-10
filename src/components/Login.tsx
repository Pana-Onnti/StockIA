import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "../components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "../components/ui/label"
import { EyeIcon, EyeOffIcon } from 'lucide-react'

export default function Login() {
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [nameError, setNameError] = useState('')
    const [formError, setFormError] = useState(false)

    const togglePasswordVisibility = () => setShowPassword(!showPassword)

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setEmail(value)

        // Validación de correo electrónico
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if (!emailRegex.test(value)) {
            setEmailError('Por favor, ingresa un correo electrónico válido')
        } else {
            setEmailError('')
        }
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setPassword(value)

        // Validación de contraseña (mínimo 6 caracteres)
        if (value.length < 6) {
            setPasswordError('La contraseña debe tener al menos 6 caracteres')
        } else {
            setPasswordError('')
        }
    }

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setName(value)

        // Validación de nombre (no vacío)
        if (value.trim() === '') {
            setNameError('El nombre no puede estar vacío')
        } else {
            setNameError('')
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (!emailError && !passwordError && !nameError && email && password && name) {
            setFormError(false)
            // Realizar la lógica de inicio de sesión
            console.log('Formulario enviado')
        } else {
            setFormError(true)
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-4">
            <Card className="w-full max-w-md bg-gray-800 border-gray-700">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center text-white">Iniciar sesión</CardTitle>
                    <CardDescription className="text-center text-gray-400">
                        Ingresa tus credenciales para acceder a tu portafolio
                    </CardDescription>


                    <CardDescription className="text-center text-3xl  text-red-700">
                    El acceso anticipado a la plataforma se encuentra cerrado, estara disponible a partir del 15 de mayo
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="name" className="text-white">Nombre</Label>
                                <Input
                                    id="name"
                                    placeholder="Tu nombre completo"
                                    value={name}
                                    onChange={handleNameChange}
                                    required
                                    className="bg-gray-700 border-gray-600 text-white"
                                />
                                {nameError && <p className="text-red-500 text-sm">{nameError}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-white">Correo electrónico</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="nombre@ejemplo.com"
                                    value={email}
                                    onChange={handleEmailChange}
                                    required
                                    className="bg-gray-700 border-gray-600 text-white"
                                />
                                {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="password" className="text-white">Contraseña</Label>
                                <div className="relative">
                                    <Input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        onChange={handlePasswordChange}
                                        required
                                        className="bg-gray-700 border-gray-600 text-white pr-10"
                                    />
                                    <button
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white"
                                    >
                                        {showPassword ? (
                                            <EyeOffIcon className="h-5 w-5" />
                                        ) : (
                                            <EyeIcon className="h-5 w-5" />
                                        )}
                                    </button>
                                </div>
                                {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
                            </div>
                        </div>

                        {formError && (
                            <div className="text-red-500 text-center mb-4">
                                Por favor, corrige los errores antes de enviar el formulario.
                            </div>
                        )}
                        <div className="mt-4">
                            {/* Botón dentro del formulario */}
                            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">Iniciar sesión</Button>
                        </div>

                    </form>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                    <div className="text-sm text-center text-gray-400">
                        ¿No tienes una cuenta?{" "}
                        <a href="/register" className="text-blue-400 hover:underline">
                            Regístrate
                        </a>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}
