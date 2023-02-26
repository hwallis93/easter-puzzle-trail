import type { APIRoute } from "astro";

export const post: APIRoute = async function post({ request }) {
  const data = await request.json();

  if (data.password === "arisesirian") {
    return { body: JSON.stringify({ message: "win-bcdbaea5" }) };
  } else {
    return { body: JSON.stringify({ message: "wrong" }) };
  }
};
