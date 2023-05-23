import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";

const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Learn nextjs 13, and tailwindcss.",
  description: "Learn how to make a website with nextjs 13, and tailwindcss.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={plus_jakarta_sans.className}
      >
        {children}
      </body>
    </html>
  );
}