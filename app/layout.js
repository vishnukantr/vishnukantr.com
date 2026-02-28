import "./globals.css";

export const metadata = {
  title: "Vishnukant Ramachandran — Growth Strategist & Partnership Architect",
  description:
    "Founder-minded growth strategist & partnership architect. Cross-market expansion, strategic partnerships, and cultural platforms.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
