/**
 * Botón / enlace CTA del sitio. Centraliza estilos y hover usando tokens (--id-accent, etc.).
 * Variantes: primary (gradiente + glow), secondary (outline), accent (relleno acento).
 * Si se pasa href se renderiza <a>; si no, <button> con onClick.
 */
import type { CSSProperties } from "react";

const baseClass = "rounded font-mono transition-all cursor-pointer border-none outline-none text-center inline-block";

const variants = {
  primary: {
    base: {
      background: "linear-gradient(135deg, var(--id-accent-soft) 0%, var(--id-accent-secondary) 100%)",
      color: "var(--id-bg-page)",
      boxShadow: "0 0 20px rgba(0, 217, 255, 0.3)",
      letterSpacing: "0.05em",
      textDecoration: "none",
    } as CSSProperties,
    hover: {
      boxShadow: "0 0 30px rgba(0, 217, 255, 0.5)",
      transform: "translateY(-2px)",
    } as CSSProperties,
    leave: {
      boxShadow: "0 0 20px rgba(0, 217, 255, 0.3)",
      transform: "translateY(0)",
    } as CSSProperties,
  },
  secondary: {
    base: {
      backgroundColor: "var(--id-bg-card)",
      color: "var(--id-accent)",
      border: "1px solid var(--id-accent)",
      letterSpacing: "0.05em",
      textDecoration: "none",
    } as CSSProperties,
    hover: {
      backgroundColor: "var(--id-accent)",
      color: "var(--id-bg-page)",
    } as CSSProperties,
    leave: {
      backgroundColor: "var(--id-bg-card)",
      color: "var(--id-accent)",
    } as CSSProperties,
  },
  accent: {
    base: {
      backgroundColor: "var(--id-accent)",
      color: "var(--id-bg-page)",
      letterSpacing: "0.05em",
      textDecoration: "none",
    } as CSSProperties,
    hover: {
      transform: "translateY(-2px)",
      boxShadow: "0 4px 16px rgba(0, 217, 255, 0.35)",
      opacity: 0.95,
    } as CSSProperties,
    leave: {
      transform: "translateY(0)",
      boxShadow: "none",
      opacity: 1,
    } as CSSProperties,
  },
} as const;

export type SiteButtonVariant = keyof typeof variants;

export function SiteButton({
  variant = "accent",
  size = "default",
  href,
  target,
  rel,
  onClick,
  children,
  className = "",
  style,
  ...rest
}: {
  variant?: SiteButtonVariant;
  /** default = px-6 py-3; small = px-4 py-2 text-sm; lg = px-8 py-3 */
  size?: "default" | "small" | "lg";
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "target" | "rel" | "onClick"> &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick">) {
  const v = variants[variant];
  const sizeClass =
    size === "small" ? "px-4 py-2 text-sm" : size === "lg" ? "px-8 py-3" : "px-6 py-3";
  const baseStyle: CSSProperties = { ...v.base, ...style };

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    const el = e.currentTarget;
    Object.assign(el.style, v.hover);
  };
  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    const el = e.currentTarget;
    Object.assign(el.style, v.leave);
  };

  if (href != null) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={`${baseClass} ${sizeClass} ${className}`.trim()}
        style={baseStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${baseClass} ${sizeClass} ${className}`.trim()}
      style={baseStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      {children}
    </button>
  );
}
