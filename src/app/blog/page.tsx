import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { blogPosts } from "@/data/blog";

export const metadata = {
  title: "Kilimanjaro & Mt Kenya Climbing Guides | Forever Athletic",
  description:
    "Practical, honest guides for climbing Mt Kilimanjaro and Mt Kenya — best time to go, route comparisons, packing lists, and more.",
};

export default function BlogIndexPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        eyebrow="Guides"
        title="Everything we know about climbing these mountains."
        subtitle="Written from years of actually guiding these routes — not recycled from someone else's trip."
      />
      <main className="bg-paper pb-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <div className="divide-y divide-basalt/10">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block py-8"
              >
                <p className="font-data text-xs text-basalt/40">
                  {new Date(post.publishedDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                  {" · "}
                  {post.readMinutes} min read
                </p>
                <h2 className="mt-2 font-display text-2xl text-basalt transition group-hover:text-glacier sm:text-3xl">
                  {post.title}
                </h2>
                <p className="mt-2 max-w-2xl text-basalt/70">
                  {post.metaDescription}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
