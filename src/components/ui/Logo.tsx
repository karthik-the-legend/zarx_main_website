import Image from "next/image";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";
import wordmarkDark from "../../../public/zarx-wordmark-dark.png";
import wordmarkLight from "../../../public/zarx-wordmark-light.png";

/** ZARX wordmark. "dark" ink for light surfaces, "light" for dark ones. */
export function Logo({
  tone = "dark",
  className,
  priority,
}: {
  tone?: "dark" | "light";
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={tone === "dark" ? wordmarkDark : wordmarkLight}
      alt={site.name}
      priority={priority}
      sizes="120px"
      className={cn("h-auto w-[5.75rem]", className)}
    />
  );
}
