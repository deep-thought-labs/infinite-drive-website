import { Link } from "react-router-dom";

/**
 * Mobile nav link. Uses design tokens for colors.
 */
export function MobileNavLink({
  to,
  children,
  isActive,
  onNavigate,
}: {
  to: string;
  children: React.ReactNode;
  isActive: boolean;
  onNavigate: () => void;
}) {
  return (
    <Link
      to={to}
      onClick={onNavigate}
      className="text-left font-mono transition-all duration-200 px-4 py-2 rounded block"
      style={{
        color: isActive ? "var(--id-accent-soft)" : "var(--id-text-muted)",
        background: isActive ? "rgba(0, 217, 255, 0.1)" : "transparent",
        border: "none",
        cursor: "pointer",
        letterSpacing: "0.05em",
        textDecoration: "none",
      }}
    >
      {children}
    </Link>
  );
}
