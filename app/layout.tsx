import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";


export const metadata: Metadata = {
	title: {
		default: "MILO",
		template: "%s | SO COOL",
	},
	description: "PORTFOLIO",
	openGraph: {
		title: "MILO",
		description:
			"PORTFOLIO",
		url: "https://portfoliov2-milo-socool.vercel.app",
		siteName: "MILO",
		images: [
			{
				url: "https://portfoliov2-milo-socool.vercel.app/og.png",
				width: 1920,
				height: 1080,
			},
		],
		locale: "en-US",
		type: "website",
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
	twitter: {
		title: "MILO",
		card: "summary_large_image",
	},
	icons: {
		shortcut: "/favicon.png",
	},
};
const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const calSans = LocalFont({
	src: "../public/fonts/CalSans-SemiBold.ttf",
	variable: "--font-calsans",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
			<head>
			</head>
			<body
				className="bg-black"
			>
				{children}
			</body>
		</html>
	);
}
