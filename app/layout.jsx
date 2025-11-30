export const metadata = { title: "StudentHub" };


export default function RootLayout({ children }) {
return (
<html lang="es">
<body className="p-4">{children}</body>
</html>
);
}
