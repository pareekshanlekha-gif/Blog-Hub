import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import fs from "fs";

const root = process.cwd();

const isProd = process.env.NODE_ENV === "production";
const port = process.env.PORT || 3000;

async function startServer() {
  const app = express();

  let vite: any;

  if (!isProd) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "custom"
    });

    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(root, "dist/public")));
  }

  // API example
  app.get("/api/hello", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

  // SPA fallback
  app.use(async (req, res, next) => {
    if (!isProd) {
      try {
        let template = fs.readFileSync(
          path.resolve(root, "client/index.html"),
          "utf-8"
        );

        template = await vite.transformIndexHtml(req.originalUrl, template);

        res.status(200).set({ "Content-Type": "text/html" }).end(template);
      } catch (e) {
        vite.ssrFixStacktrace(e);
        next(e);
      }
    } else {
      try {
        const template = fs.readFileSync(
          path.resolve(root, "dist/public/index.html"),
          "utf-8"
        );

        res.status(200).set({ "Content-Type": "text/html" }).end(template);
      } catch (e) {
        next(e);
      }
    }
  });

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

startServer();