import * as ftp from "basic-ftp";
import { readFileSync } from "fs";
import { execSync } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Load .env.deploy
const env = Object.fromEntries(
  readFileSync(path.join(__dirname, ".env.deploy"), "utf8")
    .split("\n")
    .filter((l) => l.includes("="))
    .map((l) => l.split("=").map((s) => s.trim()))
);

async function deploy() {
  console.log("📦 Building...");
  execSync("npm run build", { stdio: "inherit" });

  console.log("\n🚀 Uploading to Hostinger...");
  const client = new ftp.Client();
  client.ftp.verbose = false;

  try {
    await client.access({
      host: env.FTP_HOST,
      user: env.FTP_USER,
      password: env.FTP_PASSWORD,
      secure: false,
    });

    await client.ensureDir(env.FTP_REMOTE_DIR);
    await client.uploadFromDir(path.join(__dirname, "dist"), env.FTP_REMOTE_DIR);

    console.log("✅ Deploy completado!");
  } catch (err) {
    console.error("❌ Error en deploy:", err);
    process.exit(1);
  } finally {
    client.close();
  }
}

deploy();
