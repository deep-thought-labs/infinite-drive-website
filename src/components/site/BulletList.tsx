/**
 * List with "→" prefix and token-based text color. Accepts items array or children.
 */
export function BulletList({
  items,
  children,
  className = "",
}: {
  items?: (string | React.ReactNode)[];
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <ul
      className={`space-y-2 text-sm ml-4 ${className}`.trim()}
      style={{ listStyleType: "none", color: "var(--id-text-secondary)" }}
    >
      {items != null
        ? items.map((item, i) => (
            <li key={i}>
              → {item}
            </li>
          ))
        : children}
    </ul>
  );
}
