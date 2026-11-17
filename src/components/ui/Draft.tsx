import { isStaging } from "@/lib/site";
import { cn } from "@/lib/utils";

/** "Draft copy" marker for text awaiting ZARX sign-off. Renders only on staging builds. */
export function DraftTag({ className }: { className?: string }) {
  if (!isStaging) return null;
  return (
    <span
      className={cn(
        "ml-2 inline-flex whitespace-nowrap rounded-full border border-dashed border-amber-500 bg-amber-50 px-2 py-0.5 align-middle text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-amber-800",
        className
      )}
    >
      Draft copy
    </span>
  );
}

/** A "Draft copy" marker on its own line, for blocks without a heading of their own. */
export function DraftBlock({ className }: { className?: string }) {
  if (!isStaging) return null;
  return (
    <p className={cn("mb-6", className)}>
      <DraftTag className="ml-0" />
    </p>
  );
}

/** Corner note on staging builds explaining the draft markers. Never blocks taps. */
export function StagingBanner() {
  if (!isStaging) return null;
  return (
    <div
      role="note"
      className="pointer-events-none fixed bottom-2 left-2 z-[70] max-w-[17rem] rounded-full border border-amber-500 bg-amber-50 px-2.5 py-1 text-[0.6875rem] font-semibold leading-snug text-amber-900 shadow-md sm:bottom-3 sm:left-3 sm:rounded-md sm:px-3 sm:py-2 sm:text-xs sm:font-normal"
    >
      {/* Phones get a small pill so it never hides buttons; larger screens get the explanation. */}
      <span className="sm:hidden">Staging preview</span>
      <span className="hidden sm:inline">
        <strong>Staging preview – not live.</strong> Text marked “Draft copy” is placeholder copy awaiting ZARX sign-off.
      </span>
    </div>
  );
}
