// app/layout.jsx
import './globals.css';

export const metadata = {
  title: 'TruePower Consultants',
  description: 'Independent energy procurement, risk management and advisory.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
