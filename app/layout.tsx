import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CaseCraft — Practice with purpose",
  description: "Practice legal research with three focused challenges. Build skills, earn XP, and track your progress.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
