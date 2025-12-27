export async function GET() {
  return new Response(
    JSON.stringify({ ok: true, source: "app-router" }),
    { status: 200 }
  );
}