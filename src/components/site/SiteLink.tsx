/**
 * Enlace externo con estilo del sitio (acento + subrayado). Centraliza target _blank y rel.
 */
export function SiteLink({
  href,
  children,
  className = "",
  style,
  ...rest
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={{
        color: "var(--id-accent)",
        textDecoration: "underline",
        ...style,
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
