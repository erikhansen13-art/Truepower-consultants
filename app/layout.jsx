import './globals.css';

export const metadata = {
  title: 'Truepower Consultants',
  description: 'Your trusted energy consulting partner.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
