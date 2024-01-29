import express from "npm:express@4.18.2";
const app = express();

app.get("/", (_req, res) => {
  res.send("Welcome to the Dinosaur API!");
});

const PORT = Deno.env.get("PORT") || 3000;
app.listen(PORT);

console.log(`API server running on port ${PORT}`);