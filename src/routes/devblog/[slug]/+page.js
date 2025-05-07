// src/routes/devblog/[slug]/+page.js

export const prerender = false;


/** @type {import('./$types').PageLoad} */
export async function load({ params }) {

  // Dynamically import all .svx files in the current directory 
  const allPosts = import.meta.glob('../*.svx');
  const postImport = allPosts["../"+params.slug+".svx"];

  if (!postImport) {
    throw new Error("Post not found: "+params.slug);
  }

  const post = await postImport();
  const { title, date } = post.metadata;
  const content = post.default;

  return {
    content,
    title,
    date,
  };
};