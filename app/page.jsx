export default function Home() {
return (
<div className="flex flex-col items-center justify-center mt-20">
<h1 className="text-4xl font-bold">StudentHub</h1>
<p className="mt-4 text-gray-700">Tu centro académico personal</p>
<a
href="/login"
className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg"
>
Ir al login
</a>
</div>
);
}
