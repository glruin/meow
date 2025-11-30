"use client";
import { supabase } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


export default function Dashboard() {
const router = useRouter();
const [user, setUser] = useState(null);


useEffect(() => {
supabase.auth.getUser().then(({ data }) => {
if (!data?.user) router.push("/login");
else setUser(data.user);
});
}, []);


const logout = async () => {
await supabase.auth.signOut();
router.push("/login");
};


return (
<div className="p-6">
<h1 className="text-3xl font-bold">Dashboard</h1>
<p className="mt-4">Bienvenido: {user?.email}</p>
<button className="mt-6 bg-red-600 text-white px-4 py-2 rounded" onClick={logout}>
Cerrar sesión
</button>
</div>
);
}
