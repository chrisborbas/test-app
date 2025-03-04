import type { Metadata } from "next";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "My Apps",
  description: "A collection of useful web applications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
