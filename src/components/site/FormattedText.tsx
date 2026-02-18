import type { FormattedSegment } from "@/content/locales/types";

/**
 * Renders an array of segments with inline formatting (bold, accent color) using tokens.
 * Used for ecosystemIntro, openSourceNote, subtitles, etc. to match production.
 */
export type { FormattedSegment };

export function FormattedText({
  segments,
  className = "",
  style,
  as: Tag = "span",
}: {
  segments: FormattedSegment[];
  className?: string;
  style?: React.CSSProperties;
  as?: "span" | "p";
}) {
  return (
    <Tag className={className} style={style}>
      {segments.map((seg, i) => {
        const key = `${i}-${seg.type}-${seg.content.slice(0, 12)}`;
        const isBold = seg.type === "bold" || seg.type === "boldAccent";
        const isAccent = seg.type === "accent" || seg.type === "boldAccent";
        const isItalic = seg.type === "italic";
        const style: React.CSSProperties = {
          fontWeight: isBold ? "bold" : undefined,
          color: isAccent ? "var(--id-accent)" : undefined,
          fontStyle: isItalic ? "italic" : undefined,
        };
        return (
          <span key={key} style={Object.keys(style).length ? style : undefined}>
            {seg.content}
          </span>
        );
      })}
    </Tag>
  );
}
