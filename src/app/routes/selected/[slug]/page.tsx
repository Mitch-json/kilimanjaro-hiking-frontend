import { notFound } from "next/navigation";
import { kilimanjaroRoutes } from "@/data/routes";
import RouteDetailPage from "@/components/RouteDetailPage";

export function generateStaticParams() {
  return kilimanjaroRoutes.map((r) => ({ slug: r.slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = kilimanjaroRoutes.findIndex((r) => r.slug === slug);
  const route = kilimanjaroRoutes[index];
  if (!route) return notFound();

  return <RouteDetailPage route={route} imageIndex={index} />;
}
