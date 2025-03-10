import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        nombre: ''
    });

    const navigate = useNavigate();

    //change 
    const url = 'https://44.220.160.70';

    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const validateForm = () => {
        const newErrors = { email: '', password: '', confirmPassword: '', nombre: '' };

        if (!formData.nombre) {
            newErrors.nombre = 'El nombre completo es obligatorio.';
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email || !emailPattern.test(formData.email)) {
            newErrors.email = 'Por favor, ingresa un correo electrónico válido.';
        }

        if (!formData.password) {
            newErrors.password = 'La contraseña es obligatoria.';
        } else if (formData.password.length < 6) {
            newErrors.password = 'La contraseña debe tener al menos 6 caracteres.';
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Las contraseñas no coinciden.';
        }

        setErrors(newErrors);
        return Object.values(newErrors).every(error => error === '');
    };
   

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            fetch(url+'/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nombre: formData.nombre,
                    email: formData.email,
                    password: formData.password,
                    confirmPassword: formData.confirmPassword,
                }), 
            })
            .then(response => response.json())
            .then(data => {
                if (data.message === 'Datos registrados exitosamente') {
                    localStorage.setItem('formData', JSON.stringify(formData));
                    navigate('/login');
                } else {
                    console.error('Error:', data);
                }
            })
            .catch(error => {
                console.error('Hubo un error con la solicitud:', error);
            });
        }
    };
    
    

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-4">
            <Card className="w-full max-w-md bg-gray-800 border-gray-700">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center text-white">Crea tu cuenta</CardTitle>
                    <CardDescription className="text-center text-gray-400">
                        Únete al futuro de las inversiones
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="nombre" className="text-white">Nombre Completo</Label>
                                <Input
                                    id="nombre"
                                    name="nombre"
                                    value={formData.nombre}
                                    onChange={handleChange}
                                    placeholder="Juan Pérez"
                                    required
                                    className="bg-gray-700 border-gray-600 text-white"
                                />
                                {errors.nombre && <div className="text-red-500 text-sm">{errors.nombre}</div>}
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-white">Correo Electrónico</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="nombre@ejemplo.com"
                                    required
                                    className="bg-gray-700 border-gray-600 text-white"
                                />
                                {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password" className="text-white">Contraseña</Label>
                                <div className="relative">
                                    <Input
                                        id="password"
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        value={formData.password}
                                        onChange={handleChange}
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
                                {errors.password && <div className="text-red-500 text-sm">{errors.password}</div>}
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="confirmPassword" className="text-white">Confirmar Contraseña</Label>
                                <div className="relative">
                                    <Input
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        type={showConfirmPassword ? "text" : "password"}
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        required
                                        className="bg-gray-700 border-gray-600 text-white pr-10"
                                    />
                                    <button
                                        type="button"
                                        onClick={toggleConfirmPasswordVisibility}
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white"
                                    >
                                        {showConfirmPassword ? (
                                            <EyeOffIcon className="h-5 w-5" />
                                        ) : (
                                            <EyeIcon className="h-5 w-5" />
                                        )}
                                    </button>
                                </div>
                                {errors.confirmPassword && <div className="text-red-500 text-sm">{errors.confirmPassword}</div>}
                            </div>
                        </div>
                        <div className="mt-4">
                            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">Crear cuenta</Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
