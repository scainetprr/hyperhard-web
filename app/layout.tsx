import "./globals.css";

export const metadata = {
  title: "HyperHard Network",
  description: "Servidor oficial de HyperHard Network",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: "#000",
        }}
      >
        {children}
      </body>
    </html>
  );
}