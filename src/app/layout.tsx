import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

// Configuração da fonte Inter do Google Fonts
const inter = Inter({
    subsets: ['latin'], // Subconjunto de caracteres
    variable: '--font-inter', // Variável CSS customizada
});

// Metadados da aplicação para SEO
export const metadata: Metadata = {
    title: 'Smart Microblog Generator | Create Impactful Contents with AI',
    description:
        'Transform your ideas into engaging microblogs with AI. Generate optimized social media content with different tones of voice and trend-based insights.',

    // Palavras-chave para otimização de busca
    keywords: [
        'microblogging',
        'AI content generation',
        'social media',
        'content creation',
        'smart microblog',
        'AI writing assistant',
        'content optimization',
        'engaging content',
        'social media strategy',
    ],

    // Informações sobre o autor
    authors: [
        {
            name: 'Christian',
            url: 'https://www.linkedin.com/in/christiancordeiro/',
        },
    ],

    // Metadados para redes sociais (Open Graph)
    openGraph: {
        title: 'Smart Microblog Generator',
        description: 'Transform your ideas into engaging microblogs with AI.',
        type: 'website',
    },
};

// Componente de layout principal
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={inter.variable}>
            <body className="antialiased">{children}</body>
        </html>
    );
}
