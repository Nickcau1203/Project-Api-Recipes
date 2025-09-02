import "./globals.css";

export const metadata = {
    title: "Project Recips",
    description: "Projeto para mostrar tudo que eu sei",
    icons: {
        icon: "/icons/favicon.ico",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body>{children}</body>
        </html>
    );
}