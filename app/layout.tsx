import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Inter } from "next/font/google";

import { ClerkProvider } from "@clerk/nextjs";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="m-0">
			<ClerkProvider>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<body className={`${inter.className} `}>
						<Nav />
						{children}
					</body>
				</ThemeProvider>
			</ClerkProvider>
		</html>
	);
}
