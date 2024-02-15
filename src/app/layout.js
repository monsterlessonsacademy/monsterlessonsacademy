import Link from "next/link";
import { useEffect } from "react";

export default function RootLayout({ children }) {
  useEffect(() => {}, []);
  return (
    <html lang="en">
      <body>
        <div>
          <Link href="/">Home</Link>
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
