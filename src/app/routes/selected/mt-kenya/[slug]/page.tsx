import { notFound } from "next/navigation";
import { kenyaRoutes } from "@/data/routes";
import RouteDetailPage from "@/components/RouteDetailPage";

export function generateStaticParams() {
  return kenyaRoutes.map((r) => ({ slug: r.slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = kenyaRoutes.findIndex((r) => r.slug === slug);
  const route = kenyaRoutes[index];
  if (!route) return notFound();

  return <RouteDetailPage route={route} imageIndex={index + 3} />;
}
