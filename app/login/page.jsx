"use client";
import { supabase } from "@/lib/supabaseClient";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Login() {
const router = useRouter();
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


const handleLogin = async () => {
const { error } = await supabase.auth.signInWithPassword({ email, password });
if (!error) router.push("/dashboard");
else alert(error.message);
};


return (
<div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-lg shadow">
<h1 className="text-2xl font-bold mb-4">Iniciar sesión</h1>
<input
className="w-full border p-2 rounded mb-2"
placeholder="Email"
value={email}
onChange={(e) => setEmail(e.target.value)}
/>
<input
className="w-full border p-2 rounded mb-4"
placeholder="Contraseña"
type="password"
value={password}
onChange={(e) => setPassword(e.target.value)}
/>
<button
className="w-full bg-blue-600 text-white py-2 rounded"
onClick={handleLogin}
>
Entrar
</button>
<a href="/signup" className="block text-center mt-4 text-sm">
Crear cuenta
</a>
</div>
);
}
