import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import BookNowButton from "@/components/BookNowButton";
import { blogPosts, findPost } from "@/data/blog";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = findPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Forever Athletic`,
    description: post.metaDescription,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = findPost(slug);
  if (!post) return notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedDate,
    author: { "@type": "Organization", name: "Forever Athletic" },
    publisher: { "@type": "Organization", name: "Forever Athletic" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <PageHeader
        eyebrow={`${post.readMinutes} min read`}
        title={post.title}
      />
      <main className="bg-paper pb-24">
        <article className="mx-auto max-w-3xl px-6 pt-12 lg:px-10">
          <Link
            href="/blog"
            className="text-sm text-basalt/50 hover:text-basalt"
          >
            ← All guides
          </Link>

          <div className="mt-10 space-y-10">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-display text-2xl text-basalt">
                  {section.heading}
                </h2>
                {section.body.map((para, i) => (
                  <p key={i} className="mt-3 leading-relaxed text-basalt/80">
                    {para}
                  </p>
                ))}
              </section>
            ))}
          </div>

          <div className="mt-16 rounded-2xl bg-basalt p-8 text-center text-mist">
            <h2 className="font-display text-2xl">
              Ready to see it for yourself?
            </h2>
            <div className="mt-5 flex justify-center">
              <BookNowButton routeName="Kilimanjaro or Mt Kenya Expedition" />
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
