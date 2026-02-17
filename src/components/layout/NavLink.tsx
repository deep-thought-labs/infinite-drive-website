import { Link } from "react-router-dom";

/**
 * Desktop nav link. Uses design tokens for colors.
 * See src/styles/tokens.css — change --id-accent-soft / --id-text-muted for global nav look.
 */
export function NavLink({
  to,
  children,
  isActive,
}: {
  to: string;
  children: React.ReactNode;
  isActive: boolean;
}) {
  return (
    <Link
      to={to}
      className="text-sm font-mono transition-all duration-200"
      style={{
        color: isActive ? "var(--id-accent-soft)" : "var(--id-text-muted)",
        borderBottomWidth: "2px",
        borderBottomStyle: "solid",
        borderBottomColor: isActive ? "var(--id-accent-soft)" : "transparent",
        paddingBottom: "0.25rem",
        letterSpacing: "0.05em",
        textDecoration: "none",
      }}
      onMouseEnter={(e) => {
        if (!isActive) e.currentTarget.style.color = "var(--id-text-secondary)";
      }}
      onMouseLeave={(e) => {
        if (!isActive) e.currentTarget.style.color = "var(--id-text-muted)";
      }}
    >
      {children}
    </Link>
  );
}
