import "./globals.css";

export const metadata = {
  title: "FireCode",
  description: "Real-time collaborative code editing made easy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
