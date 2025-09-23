import "./globals.css";

export const metadata = {
    title: "Project Recipes",
    description: "Projeto para mostrar tudo que eu sei sobre receitas culinárias",
    keywords: ["receitas", "culinária", "cozinha", "ingredientes", "preparo"],
    authors: [{ name: "Seu Nome" }],
    creator: "Seu Nome",
    publisher: "Project Recipes",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    icons: {
        icon: "/icons/favicon.ico",
        shortcut: "/icons/favicon-16x16.png",
        apple: "/icons/apple-touch-icon.png",
    },
    manifest: "/manifest.json",
    openGraph: {
        title: "Project Recipes",
        description: "Descubra receitas deliciosas com ingredientes e tempo de preparo",
        url: "https://seusite.com",
        siteName: "Project Recipes",
        images: [
            {
                url: "/images/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Project Recipes - Coleção de Receitas",
            },
        ],
        locale: "pt_BR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Project Recipes",
        description: "Descubra receitas deliciosas com ingredientes e tempo de preparo",
        creator: "@seuusuario",
        images: ["/images/og-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    verification: {
        google: "seu-codigo-google-verification",
        yandex: "seu-codigo-yandex",
        yahoo: "seu-codigo-yahoo",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#ffffff" />
                <link rel="canonical" href="https://seusite.com" />
            </head>
            <body className="antialiased bg-gray-50 text-gray-900">
                {/* Skip to main content - Acessibilidade */}
                <a
                    href="#main-content"
                    className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium z-50"
                >
                    Pular para o conteúdo principal
                </a>

                {/* Layout wrapper */}
                <div className="min-h-screen flex flex-col">
                    {/* Main content */}
                    <main id="main-content" className="flex-grow">
                        {children}
                    </main>

                    {/* Footer global simples */}
                    <footer className="bg-white border-t border-gray-200 mt-auto">
                        <div className="max-w-6xl mx-auto px-4 py-6 text-center">
                            <p className="text-sm text-gray-600">
                                © 2024 Project Recipes. Feito com ❤️
                            </p>
                        </div>
                    </footer>
                </div>

                {/* Scripts opcionais */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            // Analytics ou outros scripts podem ir aqui
                            console.log('Project Recipes carregado!');
                        `,
                    }}
                />
            </body>
        </html>
    );
}