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
export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-8">
        
        <h1 className="text-2xl font-bold text-center mb-4">
          Iniciar sesión
        </h1>

        <p className="text-gray-600 text-center mb-6">
          Ingresa con tu cuenta institucional
        </p>

        <form className="flex flex-col space-y-4">

          <div>
            <label className="text-sm font-medium">Correo</label>
            <input
              type="email"
              className="w-full mt-1 p-2 border rounded-lg"
              placeholder="correo@uss.cl"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Contraseña</label>
            <input
              type="password"
              className="w-full mt-1 p-2 border rounded-lg"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
          >
            Entrar
          </button>

        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          ¿Olvidaste tu contraseña?
        </p>
      </div>
    </div>
  );
}

