const path = require("path");
const jsonServer = require("json-server");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = jsonServer.create();
  const router = jsonServer.router(path.join(__dirname, "db.json"));
  const middlewares = jsonServer.defaults();

  server.get("/", (req, res) => handle(req, res));
  server.use(jsonServer.bodyParser);
  server.use(middlewares);
  server.use("/api", router);
  server.get("*", (req, res) => handle(req, res));

  server.listen(3000, () => {
    console.log("Running!");
  });
});
