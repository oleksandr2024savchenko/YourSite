import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostView from "@/views/BlogPostView";
import { blogPosts, getPost } from "@/content/blog";
import { metadataForPage } from "@/lib/render-page";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return metadataForPage("de", ["blog", slug]);
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  return <BlogPostView locale="de" post={post} />;
}
