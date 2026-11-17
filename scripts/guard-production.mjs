// Firebase predeploy hook: refuses to publish a staging build (draft markers,
// noindex) anywhere except a preview channel started by deploy-staging.mjs.
import { existsSync } from "node:fs";

if (existsSync("out/.staging") && process.env.ZARX_STAGING_DEPLOY !== "1") {
  console.error("\nout/ holds a staging build. Run `npm run deploy` to rebuild it for production first.\n");
  process.exit(1);
}
