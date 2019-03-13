#!/usr/bin/env node

const glob = require("glob");
const path = require("path");
const { spawnSync } = require("child_process");

const [executor, binary, script, ...args] = process.argv;

if (script) {
  let scriptPath = null;

  try {
    scriptPath = require.resolve(path.join(__dirname, "./scripts", script));
  } catch (error) {
    throw new Error(`Unknown script "${script}".`);
  }

  const result = spawnSync(executor, [scriptPath, ...args], { stdio: "inherit" });

  if (!result.signal) {
    process.exit(result.status);
  }

  if (result.signal === "SIGKILL") {
    console.log(
      `The script "${script}" failed because the process exited too early. `
      + "This probably means the system ran out of memory or someone called "
      + "`kill -9` on the process.",
    );
  }

  if (result.signal === "SIGTERM") {
    console.log(
      `The script "${script}" failed because the process exited too early. `
      + "Someone might have called `kill` or `killall`, or the system could "
      + "be shutting down.",
    );
  }

  process.exit(1);
}

const scriptsPath = path.join(__dirname, "scripts/");
const scriptsAvailable = glob.sync(path.join(__dirname, "scripts", "*")).map(scriptPath => (
  scriptPath.replace(scriptsPath, "").replace(/\.js$/, "")
));

console.log(`
Usage: ${binary} [script] [--flags]
Available Scripts:
  ${scriptsAvailable.join("\n  ")}
`);
