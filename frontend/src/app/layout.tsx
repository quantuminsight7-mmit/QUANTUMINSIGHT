
import "./globals.css";
import { AuthProvider } from "../lib/auth";
import AppShell from "../components/AppShell";
import { ThemeProvider } from "../components/ThemeProvider";

export const metadata = {
  title: "QuantumInsight | Quantum Circuit Intelligence",
  description:
    "Analyze, debug and optimize quantum circuits with QuantumInsight.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <AuthProvider>
            <AppShell>{children}</AppShell>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
