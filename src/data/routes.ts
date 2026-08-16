export type Route = {
  slug: string;
  mountain: "Kilimanjaro" | "Kenya";
  name: string;
  days: number;
  difficulty: "Moderate" | "Challenging" | "Strenuous";
  summitViaScree: boolean;
  highlight: string;
};

export const kilimanjaroRoutes: Route[] = [
  {
    slug: "lemosho-route",
    mountain: "Kilimanjaro",
    name: "Lemosho",
    days: 8,
    difficulty: "Moderate",
    summitViaScree: false,
    highlight: "Longest approach, highest success rate, quietest trail",
  },
  {
    slug: "machame-route",
    mountain: "Kilimanjaro",
    name: "Machame",
    days: 7,
    difficulty: "Challenging",
    summitViaScree: true,
    highlight: "The classic \"Whiskey Route\" — varied scenery, busier camps",
  },
  {
    slug: "northern-circuit-route",
    mountain: "Kilimanjaro",
    name: "Northern Circuit",
    days: 9,
    difficulty: "Moderate",
    summitViaScree: false,
    highlight: "Longest route on the mountain, circles the quiet north side",
  },
  {
    slug: "rongai-route",
    mountain: "Kilimanjaro",
    name: "Rongai",
    days: 7,
    difficulty: "Moderate",
    summitViaScree: false,
    highlight: "Approaches from the drier north, good in rainy season",
  },
  {
    slug: "marangu-route",
    mountain: "Kilimanjaro",
    name: "Marangu",
    days: 6,
    difficulty: "Challenging",
    summitViaScree: false,
    highlight: "Only route with hut accommodation instead of tents",
  },
  {
    slug: "umbwe-route",
    mountain: "Kilimanjaro",
    name: "Umbwe",
    days: 6,
    difficulty: "Strenuous",
    summitViaScree: true,
    highlight: "Steepest, most direct line — for experienced trekkers",
  },
];

export const kenyaRoutes: Route[] = [
  {
    slug: "chogoria-route",
    mountain: "Kenya",
    name: "Chogoria",
    days: 5,
    difficulty: "Moderate",
    summitViaScree: false,
    highlight: "Widely called the most scenic approach, via Lake Michaelson",
  },
  {
    slug: "naro-moru-route",
    mountain: "Kenya",
    name: "Naro Moru",
    days: 4,
    difficulty: "Challenging",
    summitViaScree: false,
    highlight: "Fastest, most direct line up Point Lenana",
  },
  {
    slug: "sirimon-route",
    mountain: "Kenya",
    name: "Sirimon",
    days: 4,
    difficulty: "Moderate",
    summitViaScree: false,
    highlight: "Drier route through open moorland, good acclimatization profile",
  },
];

export function generateItinerary(route: Route): { day: number; title: string; description: string }[] {
  const days = route.days;
  const itinerary: { day: number; title: string; description: string }[] = [];

  itinerary.push({
    day: 1,
    title: "Arrival at the gate",
    description: `Meet your guide, register at the park gate, and begin walking into the ${
      route.mountain === "Kilimanjaro" ? "rainforest" : "lower forest"
    } zone.`,
  });

  const middleDays = days - 3;
  for (let i = 0; i < middleDays; i++) {
    itinerary.push({
      day: i + 2,
      title: `Ascent, day ${i + 1}`,
      description:
        "Continue climbing through changing terrain, with time built in for acclimatization.",
    });
  }

  itinerary.push({
    day: days - 1,
    title: "Summit push",
    description:
      "A midnight start to reach the summit at sunrise, followed by a long descent to a lower camp the same day.",
  });

  itinerary.push({
    day: days,
    title: "Descent & exit",
    description: "Final descent to the park gate, and certificates for those who summited.",
  });

  return itinerary;
}

export function findRoute(slug: string): Route | undefined {
  return [...kilimanjaroRoutes, ...kenyaRoutes].find((r) => r.slug === slug);
}

export function generateWriteUp(route: Route): string {
  const openers: Record<string, string> = {
    Moderate:
      "This is one of our most forgiving routes on the mountain — a steady, well-paced climb that gives your body real time to adjust to the altitude.",
    Challenging:
      "This route asks more of you than most, packing serious elevation change into a shorter window on the mountain.",
    Strenuous:
      "This is the route for climbers who want the mountain on its own terms — direct, demanding, and unforgiving of a rushed pace.",
  };

  return `${openers[route.difficulty]} Over ${route.days} days you'll move through several distinct climate zones, from lower forest to bare alpine terrain, before a final push to the summit. ${route.highlight}. As with every route we guide, you'll be accompanied by an experienced team from the first morning at the gate to the descent.`;
}

export function routeImage(index: number): string {
  const photoCount = 6; // matches public/images/general
  return `/images/general/${(index % photoCount) + 1}.jpg`;
}

export const altitudeZones = [
  {
    name: "Cultivation",
    elevation: "800–1,800m",
    color: "var(--color-moorland)",
    description:
      "Farmland and villages at the mountain's base. This is where your trek begins.",
  },
  {
    name: "Rainforest",
    elevation: "1,800–2,800m",
    color: "var(--color-rainforest)",
    description:
      "Dense, humid forest. Look for colobus monkeys and turacos overhead.",
  },
  {
    name: "Moorland",
    elevation: "2,800–4,000m",
    color: "var(--color-moorland)",
    description:
      "Giant heather and lobelia. The air thins noticeably and camps get cold at night.",
  },
  {
    name: "Alpine Desert",
    elevation: "4,000–5,000m",
    color: "var(--color-glacier)",
    description:
      "Bare volcanic rock, near-freezing nights, and thin air. Little grows here.",
  },
  {
    name: "Arctic Summit",
    elevation: "5,000–5,895m",
    color: "#B8C4CE",
    description:
      "Glaciers and permanent snow. Most summit pushes start at midnight to catch sunrise at the top.",
  },
];
