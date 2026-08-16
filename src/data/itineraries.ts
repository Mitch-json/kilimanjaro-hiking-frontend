export type ItineraryDay = {
  day: number;
  title: string;
  altitude: string;
  distance: string;
  duration: string;
  description: string;
};

export const itineraries: Record<string, ItineraryDay[]> = {
  "lemosho-route": [
    { day: 1, title: "Londorossi Gate to Mti Mkubwa (Forest Camp)", altitude: "2,100m → 2,835m", distance: "6 km", duration: "3–4 hrs", description: "Registration at the gate, then a gentle walk through rainforest to your first camp, also known as Big Tree Camp." },
    { day: 2, title: "Mti Mkubwa to Shira 1 Camp", altitude: "2,835m → 3,500m", distance: "8 km", duration: "5–6 hrs", description: "Climb out of the rainforest into moorland, crossing the Shira Ridge before dropping to the open Shira Plateau." },
    { day: 3, title: "Shira 1 Camp to Shira 2 Camp", altitude: "3,500m → 3,900m", distance: "8 km", duration: "3–4 hrs", description: "A shorter day crossing the Shira Plateau itself, with good views of the summit massif ahead." },
    { day: 4, title: "Shira 2 Camp to Barranco Camp via Lava Tower", altitude: "3,900m → 4,600m → 3,960m", distance: "10 km", duration: "6–7 hrs", description: "The key acclimatization day — climb high to Lava Tower (4,600m), then descend to sleep at Barranco. \"Climb high, sleep low.\"" },
    { day: 5, title: "Barranco Camp to Karanga Camp", altitude: "3,960m → 4,035m", distance: "7 km", duration: "4 hrs", description: "Starts with the Barranco Wall — a steep but non-technical scramble — followed by undulating terrain to Karanga." },
    { day: 6, title: "Karanga Camp to Barafu Camp", altitude: "4,035m → 4,640m", distance: "6 km", duration: "3–4 hrs", description: "A shorter day across alpine desert to reach your final camp before the summit push." },
    { day: 7, title: "Barafu Camp to Summit to Mweka Camp", altitude: "4,640m → 5,895m → 3,100m", distance: "17 km", duration: "12–14 hrs", description: "Depart around midnight for Uhuru Peak, timed for sunrise, then descend all the way to Mweka Camp the same day." },
    { day: 8, title: "Mweka Camp to Mweka Gate", altitude: "3,100m → 1,630m", distance: "10 km", duration: "3–4 hrs", description: "Final descent through rainforest to the gate, where summit certificates are issued." },
  ],
  "machame-route": [
    { day: 1, title: "Machame Gate to Machame Camp", altitude: "1,830m → 3,000m", distance: "11 km", duration: "5–7 hrs", description: "Registration, then a steady climb through dense rainforest to your first camp." },
    { day: 2, title: "Machame Camp to Shira 2 Camp", altitude: "3,000m → 3,850m", distance: "5 km", duration: "4–5 hrs", description: "Leave the forest behind for open moorland, climbing a steep ridge onto the Shira Plateau." },
    { day: 3, title: "Shira 2 Camp to Barranco Camp via Lava Tower", altitude: "3,850m → 4,600m → 3,950m", distance: "10 km", duration: "6–7 hrs", description: "Climb to Lava Tower for acclimatization, then descend to sleep at the lower Barranco Camp." },
    { day: 4, title: "Barranco Camp to Karanga Camp", altitude: "3,950m → 4,035m", distance: "5 km", duration: "4 hrs", description: "The Barranco Wall scramble first thing, followed by a shorter push across ridges to Karanga." },
    { day: 5, title: "Karanga Camp to Barafu Camp", altitude: "4,035m → 4,640m", distance: "4 km", duration: "3–4 hrs", description: "A relatively short, steady climb to your final camp before the summit attempt." },
    { day: 6, title: "Barafu Camp to Summit to Mweka Camp", altitude: "4,640m → 5,895m → 3,100m", distance: "17 km", duration: "12–14 hrs", description: "Midnight departure for a sunrise summit at Uhuru Peak, then a long descent to Mweka Camp." },
    { day: 7, title: "Mweka Camp to Mweka Gate", altitude: "3,100m → 1,630m", distance: "10 km", duration: "3–4 hrs", description: "A short final descent through rainforest to receive your summit certificate." },
  ],
  "northern-circuit-route": [
    { day: 1, title: "Londorossi Gate to Forest Camp", altitude: "2,100m → 2,835m", distance: "6 km", duration: "3–4 hrs", description: "Registration, then rainforest walking to your first camp." },
    { day: 2, title: "Forest Camp to Shira 1 Camp", altitude: "2,835m → 3,500m", distance: "8 km", duration: "5–6 hrs", description: "Climb out of the forest onto the Shira Plateau's western edge." },
    { day: 3, title: "Shira 1 Camp to Shira 2 Camp", altitude: "3,500m → 3,900m", distance: "8 km", duration: "3–4 hrs", description: "A gentler day crossing the plateau, with views of the summit massif ahead." },
    { day: 4, title: "Shira 2 Camp to Moir Hut via Lava Tower", altitude: "3,900m → 4,600m → 4,200m", distance: "11 km", duration: "7–8 hrs", description: "Climb to Lava Tower before turning north onto the quiet Northern Circuit trail toward Moir Hut." },
    { day: 5, title: "Moir Hut to Buffalo Camp", altitude: "4,200m → 4,020m", distance: "12 km", duration: "5–7 hrs", description: "An optional detour to the summit of Lent Hills for acclimatization, then on toward the Kenyan border views at Buffalo Camp." },
    { day: 6, title: "Buffalo Camp to Third Cave Camp", altitude: "4,020m → 3,800m", distance: "8 km", duration: "5–7 hrs", description: "One of the quietest, least-trafficked stretches on the entire mountain." },
    { day: 7, title: "Third Cave Camp to School Hut", altitude: "3,800m → 4,700m", distance: "6 km", duration: "4–5 hrs", description: "A steady climb crossing the Saddle between Kibo and Mawenzi peaks." },
    { day: 8, title: "School Hut to Summit to Mweka Camp", altitude: "4,700m → 5,895m → 3,100m", distance: "18 km", duration: "12–14 hrs", description: "Summit night, timed for sunrise at Uhuru Peak, followed by a long descent." },
    { day: 9, title: "Mweka Camp to Mweka Gate", altitude: "3,100m → 1,630m", distance: "10 km", duration: "3–4 hrs", description: "Final descent through rainforest to the gate." },
  ],
  "rongai-route": [
    { day: 1, title: "Rongai Gate to Simba Camp", altitude: "1,950m → 2,650m", distance: "8 km", duration: "3–4 hrs", description: "A gentle start through forest on the mountain's drier northern side." },
    { day: 2, title: "Simba Camp to Kikelewa Camp", altitude: "2,650m → 3,600m", distance: "15 km", duration: "6–7 hrs", description: "A long day through moorland, passing Second Cave, with views toward the Kenyan plains." },
    { day: 3, title: "Kikelewa Camp to Mawenzi Tarn Camp", altitude: "3,600m → 4,330m", distance: "6 km", duration: "3–4 hrs", description: "A shorter but steep climb to a dramatic camp beside an alpine lake at the foot of Mawenzi Peak." },
    { day: 4, title: "Acclimatization day at Mawenzi Tarn", altitude: "4,330m", distance: "up to 5 km", duration: "3–4 hrs", description: "An optional day hike higher on Mawenzi's slopes before returning to camp to rest." },
    { day: 5, title: "Mawenzi Tarn to Kibo Hut", altitude: "4,330m → 4,700m", distance: "8 km", duration: "4–5 hrs", description: "Cross the barren Saddle between Mawenzi and Kibo to reach your final camp before summit night." },
    { day: 6, title: "Kibo Hut to Summit to Horombo Hut", altitude: "4,700m → 5,895m → 3,720m", distance: "21 km", duration: "12–15 hrs", description: "Midnight departure for sunrise at Uhuru Peak, descending via the Marangu route to Horombo." },
    { day: 7, title: "Horombo Hut to Marangu Gate", altitude: "3,720m → 1,830m", distance: "18 km", duration: "5–7 hrs", description: "A long final descent through moorland and rainforest to the gate." },
  ],
  "marangu-route": [
    { day: 1, title: "Marangu Gate to Mandara Hut", altitude: "1,860m → 2,700m", distance: "12 km", duration: "4–5 hrs", description: "Registration, then a walk through rainforest to the first of Marangu's hut camps." },
    { day: 2, title: "Mandara Hut to Horombo Hut", altitude: "2,700m → 3,720m", distance: "12 km", duration: "5–6 hrs", description: "The forest thins into open moorland, with views of both Kibo and Mawenzi peaks." },
    { day: 3, title: "Acclimatization day at Horombo Hut", altitude: "3,720m", distance: "up to 7 km", duration: "4–5 hrs", description: "An optional hike toward Zebra Rocks or Mawenzi Ridge before returning to Horombo to rest." },
    { day: 4, title: "Horombo Hut to Kibo Hut", altitude: "3,720m → 4,700m", distance: "10 km", duration: "5–6 hrs", description: "The landscape turns to barren alpine desert as you cross the Saddle to your final hut." },
    { day: 5, title: "Kibo Hut to Summit to Horombo Hut", altitude: "4,700m → 5,895m → 3,720m", distance: "21 km", duration: "12–16 hrs", description: "Depart around midnight for sunrise at Uhuru Peak via Gilman's Point, then descend all the way back to Horombo." },
    { day: 6, title: "Horombo Hut to Marangu Gate", altitude: "3,720m → 1,860m", distance: "20 km", duration: "6–7 hrs", description: "Retrace your steps down through moorland and rainforest to receive your summit certificate." },
  ],
  "umbwe-route": [
    { day: 1, title: "Umbwe Gate to Umbwe Cave Camp", altitude: "1,660m → 2,900m", distance: "11 km", duration: "5–6 hrs", description: "A steep, direct climb through rainforest along the Umbwe ridge — the steepest opening day of any route." },
    { day: 2, title: "Umbwe Cave Camp to Barranco Camp", altitude: "2,900m → 3,960m", distance: "6 km", duration: "4–5 hrs", description: "Continue climbing out of the forest to Barranco Camp, where the trail joins the Machame route." },
    { day: 3, title: "Barranco Camp to Karanga Camp", altitude: "3,960m → 4,035m", distance: "7 km", duration: "4 hrs", description: "The Barranco Wall scramble, followed by undulating terrain across to Karanga." },
    { day: 4, title: "Karanga Camp to Barafu Camp", altitude: "4,035m → 4,640m", distance: "6 km", duration: "3–4 hrs", description: "A shorter day across alpine desert to your final camp before the summit push." },
    { day: 5, title: "Barafu Camp to Summit to Mweka Camp", altitude: "4,640m → 5,895m → 3,100m", distance: "17 km", duration: "10–14 hrs", description: "Midnight departure for sunrise at Uhuru Peak, then descend to Mweka Camp." },
    { day: 6, title: "Mweka Camp to Mweka Gate", altitude: "3,100m → 1,630m", distance: "10 km", duration: "3–4 hrs", description: "Final descent through rainforest to the gate." },
  ],
  "chogoria-route": [
    { day: 1, title: "Chogoria Gate to Lake Ellis Camp", altitude: "2,900m → 3,600m", distance: "9 km", duration: "3 hrs", description: "Enter through dense forest before climbing into open moorland toward Lake Ellis." },
    { day: 2, title: "Lake Ellis Camp to Mintos Camp", altitude: "3,600m → 4,200m", distance: "12 km", duration: "4–5 hrs", description: "Cross the dramatic Gorges Valley, with an optional side trip to the cliff-top viewpoint over Lake Michaelson." },
    { day: 3, title: "Mintos Camp to Point Lenana to Old Moses Camp", altitude: "4,200m → 4,985m → 3,300m", distance: "20 km", duration: "12–14 hrs", description: "A pre-dawn summit push to Point Lenana for sunrise, descending the same day via Shipton's Camp to Old Moses." },
    { day: 4, title: "Old Moses Camp to Sirimon Gate", altitude: "3,300m → 2,650m", distance: "9 km", duration: "2–3 hrs", description: "A short final descent to exit the park." },
    { day: 5, title: "Departure", altitude: "—", distance: "—", duration: "—", description: "Transfer back to Nairobi." },
  ],
  "naro-moru-route": [
    { day: 1, title: "Naro Moru Gate to Met Station", altitude: "2,600m → 3,050m", distance: "9 km", duration: "3–4 hrs", description: "A gentle climb through rainforest and bamboo to the old meteorological station." },
    { day: 2, title: "Met Station to Mackinder's Camp", altitude: "3,050m → 4,200m", distance: "11 km", duration: "5–6 hrs", description: "The notorious \"vertical bog\" crossing, then up through the Teleki Valley beneath Mount Kenya's twin peaks." },
    { day: 3, title: "Mackinder's Camp to Point Lenana to Met Station", altitude: "4,200m → 4,985m → 3,050m", distance: "11 km", duration: "8–10 hrs", description: "A pre-dawn ascent to Point Lenana for sunrise, then descend the same day back to Met Station." },
    { day: 4, title: "Met Station to Naro Moru Gate", altitude: "3,050m → 2,600m", distance: "9 km", duration: "3 hrs", description: "A short final descent through rainforest to exit the park." },
  ],
  "sirimon-route": [
    { day: 1, title: "Sirimon Gate to Old Moses Camp", altitude: "2,650m → 3,300m", distance: "9 km", duration: "3–4 hrs", description: "A steady climb through regenerating forest opening into moorland." },
    { day: 2, title: "Old Moses Camp to Shipton's Camp", altitude: "3,300m → 4,200m", distance: "14 km", duration: "6–7 hrs", description: "Follow the glacial Mackinder Valley up to Shipton's, camped beneath the summit spires of Batian and Nelion." },
    { day: 3, title: "Shipton's Camp to Point Lenana to Old Moses Camp", altitude: "4,200m → 4,985m → 3,300m", distance: "20 km", duration: "11–13 hrs", description: "A pre-dawn summit push for sunrise at Point Lenana, then descend the same day back to Old Moses." },
    { day: 4, title: "Old Moses Camp to Sirimon Gate", altitude: "3,300m → 2,650m", distance: "9 km", duration: "2–3 hrs", description: "A short, gentle final descent to exit the park." },
  ],
};
