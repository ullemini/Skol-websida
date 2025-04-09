// src/routes/devblog/[slug]/+page.js

export const prerender = false;


/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const post = await import("../"+params.slug+ ".svx");

  const { title, date } = post.metadata;
  const content = post.default;

  return {
    content,
    title,
    date,
  };
};