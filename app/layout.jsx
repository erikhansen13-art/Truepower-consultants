import "./globals.css";

export const metadata = {
  title: "TruePower Consultants",
  description: "Your trusted energy consulting partner.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
