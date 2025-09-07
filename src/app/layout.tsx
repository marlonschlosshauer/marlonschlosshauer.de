import { PropsWithChildren } from "react";
import clsx from "clsx";
import { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/header/Header";
import "./global.css";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
});

export const viewport: Viewport = {
    themeColor: "#1E1E1E",
};

export const metadata: Metadata = {
    title: {
        default: "Marlon Schlosshauer",
        template: "%s - Marlon Schlosshauer",
    },
    metadataBase: new URL("https://marlonschlosshauer.de"),
    openGraph: {
        siteName: "Marlon Schlosshauer",
        url: "https://marlonschlosshauer.de",
        locale: "en",
        firstName: "Marlon",
        lastName: "Schlosshauer",
    },
    alternates: {
        canonical: "/",
    },
};

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <html lang="en" className={clsx(inter.className, "bg-black text-white")}>
            <body className="antialiased px-8 py-10 flex flex-col gap-8 min-h-screen mx-auto my-auto md:max-w-[600px] md:pt-14 md:min-h-[minmax(800px,100svh)] md:justify-center">
                <nav>
                    <Header />
                </nav>
                <main>{children}</main>
            </body>
        </html>
    );
}
