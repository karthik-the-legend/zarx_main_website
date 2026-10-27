// Runs after `npm run build` (see "postbuild" in package.json).
//
// Next.js 16 static export writes per-segment prefetch data nested, e.g.
//   out/solutions/web3/__next.solutions/$d$slug/__PAGE__.txt
// but the browser requests the flat form,
//   /solutions/web3/__next.solutions.$d$slug.__PAGE__.txt
// `next start` maps one to the other; a plain file host like Hostinger can't,
// so we write a flat copy next to each nested file.
import { copyFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const outDir = new URL("../out/", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
let copied = 0;

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (!statSync(path).isDirectory()) continue;
    if (name === "_next") continue;
    if (name.startsWith("__next.")) flatten(dir, path);
    else walk(path);
  }
}

// routeDir/__next.a/b/__PAGE__.txt  ->  routeDir/__next.a.b.__PAGE__.txt
function flatten(routeDir, segmentDir) {
  const visit = (dir) => {
    for (const name of readdirSync(dir)) {
      const path = join(dir, name);
      if (statSync(path).isDirectory()) visit(path);
      else {
        const flatName = relative(routeDir, path).split(sep).join(".");
        copyFileSync(path, join(routeDir, flatName));
        copied++;
      }
    }
  };
  visit(segmentDir);
}

walk(outDir);
console.log(`flatten-segment-data: wrote ${copied} flat prefetch files`);
