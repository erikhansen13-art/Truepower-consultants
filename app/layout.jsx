import './globals.css';

export const metadata = {
  title: 'Truepower Consultants',
  description: 'Your trusted energy consulting partner.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <img
          src="/logo.png"
          alt="Truepower Consultants Logo"
          width="200"
          style={{ display: "block", margin: "40px auto" }}
        />
        {children}
      </body>
    </html>
  );
}
