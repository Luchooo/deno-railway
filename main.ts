const port = parseInt(Deno.env.get("PORT") ?? "8080");

const handler = (_request: Request): Response => {
    const body = `Hello lulo ${port}`;

    return new Response(body, { status: 200 });
};

console.log(`HTTP server running. Access it at: http://localhost:8080/`);
Deno.serve({ port }, handler);