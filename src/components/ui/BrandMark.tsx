/**
 * Ayishaz Cakery wordmark — two-line script + spaced caps.
 * Shared by the top nav and the footer so branding stays consistent.
 *
 * @param size `"md"` (default, nav) or `"lg"` (footer/hero variants).
 */
export function BrandMark({ size = "md" }: { size?: "md" | "lg" }) {
  const scriptClass = size === "lg" ? "text-4xl" : "text-3xl";
  return (
    <span className="flex flex-col leading-none">
      <span className={`font-script text-gold-gradient ${scriptClass}`}>Ayishaz</span>
      <span className="text-[0.6rem] tracking-[0.4em] text-[var(--caramel)] mt-1 pl-1">
        CAKERY
      </span>
    </span>
  );
}
