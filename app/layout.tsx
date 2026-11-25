import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vijay Yadav — Full-Stack & Mobile App Developer",
  description: "Vijay Yadav is a software engineer building web platforms, mobile applications and scalable digital products.",
  metadataBase: new URL("https://example.pages.dev"),
  openGraph: {
    title: "Vijay Yadav — Full-Stack & Mobile App Developer",
    description: "Web, iOS and cross-platform mobile application development.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body>{children}</body></html>;
}
