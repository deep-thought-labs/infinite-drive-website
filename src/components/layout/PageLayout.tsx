/**
 * Layout compartido para páginas de contenido.
 * Centraliza max-width, padding y estructura; las vistas solo envuelven con PageLayout.
 */

interface PageLayoutProps {
  children: React.ReactNode;
  /** "default" = max-w-7xl (páginas estándar), "narrow" = max-w-4xl (legal, etc.) */
  variant?: "default" | "narrow";
  /** Clases adicionales para el main */
  className?: string;
}

const variantMaxWidth = {
  default: "max-w-7xl",
  narrow: "max-w-4xl",
} as const;

export function PageLayout({
  children,
  variant = "default",
  className = "",
}: PageLayoutProps) {
  return (
    <main
      className={`flex-1 px-4 md:px-8 py-12 ${variantMaxWidth[variant]} mx-auto w-full ${className}`.trim()}
    >
      {children}
    </main>
  );
}
