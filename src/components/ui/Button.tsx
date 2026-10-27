import type { AnchorHTMLAttributes } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "inverse" | "inverse-secondary";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white shadow-xs hover:bg-accent-hover disabled:bg-accent/50",
  secondary:
    "border border-line bg-canvas text-ink shadow-xs hover:border-ink/20 hover:bg-subtle",
  inverse: "bg-white text-night hover:bg-white/90",
  "inverse-secondary":
    "border border-white/15 text-night-fg hover:border-white/30 hover:bg-white/[0.06]",
};

const sizes: Record<Size, string> = {
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-[0.9375rem]",
};

export function buttonStyles({
  variant = "primary",
  size = "md",
  className,
}: { variant?: Variant; size?: Size; className?: string } = {}) {
  return cn(
    "group/btn inline-flex select-none items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium",
    "transition-[background-color,border-color,color,transform,box-shadow] duration-fast ease-out",
    "active:scale-[0.98] disabled:cursor-not-allowed disabled:active:scale-100",
    variants[variant],
    sizes[size],
    className
  );
}

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: Variant;
  size?: Size;
};

/** Internal paths use next/link for client-side navigation; anything else is a plain anchor. */
export function ButtonLink({ variant, size, className, href, ...props }: ButtonLinkProps) {
  const classes = buttonStyles({ variant, size, className });
  if (href.startsWith("/") && !href.startsWith("//")) {
    return <Link href={href} className={classes} {...props} />;
  }
  return <a href={href} className={classes} {...props} />;
}

/** Arrow that nudges right when its parent button or link is hovered. */
export function ButtonArrow({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className={cn(
        "h-4 w-4 transition-transform duration-base ease-out group-hover/btn:translate-x-0.5 group-hover/link:translate-x-0.5",
        className
      )}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

/** Text link with a trailing arrow, for "Learn more"-style links. */
export function ArrowLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group/link inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-hover",
        className
      )}
    >
      {children}
      <ButtonArrow />
    </Link>
  );
}
