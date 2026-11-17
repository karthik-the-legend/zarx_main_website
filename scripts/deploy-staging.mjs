// Builds the site in staging mode (draft-copy markers on, search engines blocked)
// and publishes it to a Firebase preview channel, never to the live site.
//
//   npm run deploy:staging   build + publish to the "staging" preview link
//   npm run build:staging    build only (out/ then holds a staging build)
import { spawnSync } from "node:child_process";
import { writeFileSync } from "node:fs";

const env = { ...process.env, NEXT_PUBLIC_STAGING: "1", ZARX_STAGING_DEPLOY: "1" };

function run(command) {
  const result = spawnSync(command, { stdio: "inherit", env, shell: true });
  if (result.status !== 0) process.exit(result.status ?? 1);
}

run("npx next build");
run("node scripts/flatten-segment-data.mjs");
// Marker read by scripts/guard-production.mjs; dotfiles are never uploaded.
writeFileSync("out/.staging", "Staging build. Run `npm run build` before deploying to production.\n");

if (!process.argv.includes("--build-only")) {
  run("firebase hosting:channel:deploy staging --expires 30d");
}
