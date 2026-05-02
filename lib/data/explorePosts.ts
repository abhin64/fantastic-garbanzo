export interface Post {
  id: string;
  title: string;
  image: string;
  categoryId: string;
  location?: string;
  isAI: boolean;
  isWeatherAware: boolean;
  isSaved: boolean;
}

const U = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=80`;

export const explorePosts: Post[] = [
  // ── Trending ───────────────────────────────────────────────
  { id: "t1", title: "Axe Throwing Night Out",       image: U("1517816743823-d58b7f06d02e"), categoryId: "trending",      location: "Kick Axe",              isAI: false, isWeatherAware: false, isSaved: false },
  { id: "t2", title: "Pilates & Brunch Collab",       image: U("1518611012118-696072aa579a"), categoryId: "trending",                                         isAI: false, isWeatherAware: false, isSaved: false },
  { id: "t3", title: "Sound Bath Meditation",         image: U("1544367567-0f2fcb009e0b"),    categoryId: "trending",                                         isAI: false, isWeatherAware: false, isSaved: false },
  { id: "t4", title: "Urban Sketching Walk",          image: U("1513364776144-60967b0f800f"), categoryId: "trending",      location: "Arts District",          isAI: false, isWeatherAware: false, isSaved: false },
  { id: "t5", title: "Viral Ramen Shop Visit",        image: U("1569050467447-ce54b3bbc37d"), categoryId: "trending",      location: "Ramen Nagi",             isAI: false, isWeatherAware: false, isSaved: false },

  // ── Seasonal ───────────────────────────────────────────────
  { id: "s1", title: "Cherry Blossom Viewing",        image: U("1522383225753-4a8f1ce2e22c"), categoryId: "seasonal",      location: "Japanese Garden",        isAI: false, isWeatherAware: false, isSaved: false },
  { id: "s2", title: "First Snow Hike",               image: U("1551244072-5d12893278bc"),    categoryId: "seasonal",      location: "Big Bear",               isAI: false, isWeatherAware: false, isSaved: false },
  { id: "s3", title: "Holiday Market Stroll",         image: U("1513519245088-0e12902e5a38"), categoryId: "seasonal",      location: "Downtown Plaza",         isAI: false, isWeatherAware: false, isSaved: false },
  { id: "s4", title: "Pumpkin Patch Day Trip",        image: U("1508193638397-1c4234db14d8"), categoryId: "seasonal",      location: "Half Moon Bay",          isAI: false, isWeatherAware: false, isSaved: false },
  { id: "s5", title: "Summer Solstice Bonfire",       image: U("1504196606672-aef5c9cefc92"), categoryId: "seasonal",      location: "Malibu Beach",           isAI: false, isWeatherAware: false, isSaved: false },

  // ── Cheap ──────────────────────────────────────────────────
  { id: "c1", title: "$5 Taco Tuesday",               image: U("1565299585323-38d6b0865b47"), categoryId: "cheap",                                            isAI: false, isWeatherAware: false, isSaved: false },
  { id: "c2", title: "Free Museum Sundays",           image: U("1544967082-d9d25d867d66"),    categoryId: "cheap",         location: "City Museum",            isAI: false, isWeatherAware: false, isSaved: false },
  { id: "c3", title: "Library Book Club",             image: U("1521587760476-6c12a4b040da"), categoryId: "cheap",         location: "Central Library",        isAI: false, isWeatherAware: false, isSaved: false },
  { id: "c4", title: "Park Picnic with Friends",      image: U("1416331108676-a22ccb276e35"), categoryId: "cheap",         location: "Griffith Park",          isAI: false, isWeatherAware: false, isSaved: false },
  { id: "c5", title: "Sunset Walk at the Pier",       image: U("1476041800959-2f6bb412c8ce"), categoryId: "cheap",         location: "Santa Monica Pier",      isAI: false, isWeatherAware: false, isSaved: false },

  // ── Outdoors ───────────────────────────────────────────────
  { id: "o1", title: "Beach Volleyball Meetup",       image: U("1507525428034-b723cf961d3e"), categoryId: "outdoors",      location: "Santa Monica Beach",     isAI: false, isWeatherAware: false, isSaved: false },
  { id: "o2", title: "Kayaking at Blue Lake",         image: U("1506905925346-21bda4d32df4"), categoryId: "outdoors",      location: "Blue Lake",              isAI: false, isWeatherAware: false, isSaved: false },
  { id: "o3", title: "Mountain Biking at Redwood",    image: U("1558618666-fcd25c85cd64"),    categoryId: "outdoors",      location: "Redwood Park",           isAI: false, isWeatherAware: false, isSaved: false },
  { id: "o4", title: "Stargazing at Desert Ridge",    image: U("1419242902214-272b3f66ee7a"), categoryId: "outdoors",      location: "Desert Ridge",           isAI: false, isWeatherAware: false, isSaved: false },
  { id: "o5", title: "Sunrise Hike at Eagle Peak",    image: U("1551632811-561732d1e306"),    categoryId: "outdoors",      location: "Eagle Peak Trail",       isAI: false, isWeatherAware: false, isSaved: false },

  // ── Indoors ────────────────────────────────────────────────
  { id: "i1", title: "Board Game Night at The Parlor",image: U("1610890716171-6673eb95a1ab"), categoryId: "indoors",       location: "The Parlor",             isAI: false, isWeatherAware: false, isSaved: false },
  { id: "i2", title: "Escape Room Challenge",         image: U("1531986362435-16b427eb9c26"), categoryId: "indoors",                                          isAI: false, isWeatherAware: false, isSaved: false },
  { id: "i3", title: "Jazz Night at The Atrium",      image: U("1415201364774-f6f0bb35f28f"), categoryId: "indoors",       location: "The Atrium",             isAI: false, isWeatherAware: false, isSaved: false },
  { id: "i4", title: "Pottery Workshop for Beginners",image: U("1565193566173-7a0ee3dbe261"), categoryId: "indoors",       location: "Clay Studio",            isAI: false, isWeatherAware: false, isSaved: false },
  { id: "i5", title: "Rooftop Cinema Night",          image: U("1489599849927-2ee91cede3ba"), categoryId: "indoors",       location: "Skyline Rooftop",        isAI: false, isWeatherAware: false, isSaved: false },

  // ── Food ───────────────────────────────────────────────────
  { id: "f1", title: "Farmers Market Morning",        image: U("1488459716781-31db52582fe9"), categoryId: "food",          location: "Grand Central Market",   isAI: false, isWeatherAware: false, isSaved: false },
  { id: "f2", title: "Omakase Sushi Experience",      image: U("1579871494447-9811cf80d66c"), categoryId: "food",          location: "Nobu",                   isAI: false, isWeatherAware: false, isSaved: false },
  { id: "f3", title: "Street Taco Tour Downtown",     image: U("1552566991-b056a68e8d99"),    categoryId: "food",          location: "Downtown",               isAI: false, isWeatherAware: false, isSaved: false },
  { id: "f4", title: "Vegan Brunch Pop-Up",           image: U("1476224203421-74177f19a825"), categoryId: "food",          location: "The Garden Spot",        isAI: false, isWeatherAware: false, isSaved: false },
  { id: "f5", title: "Wine & Cheese Tasting",         image: U("1510812431401-41d2bd2722f3"), categoryId: "food",                                             isAI: false, isWeatherAware: false, isSaved: false },

  // ── Saved ──────────────────────────────────────────────────
  { id: "sv1", title: "Bookmarked: Pasta Night",      image: U("1473093295043-cdd812d0e601"), categoryId: "saved",                                            isAI: false, isWeatherAware: false, isSaved: true  },
  { id: "sv2", title: "Bookmarked: Rooftop Jazz",     image: U("1516450360539-83f229cba8b3"), categoryId: "saved",         location: "The Rooftop",            isAI: false, isWeatherAware: false, isSaved: true  },
  { id: "sv3", title: "Bookmarked: Weekend Hike",     image: U("1441974231531-c6227db76b6e"), categoryId: "saved",         location: "Runyon Canyon",          isAI: false, isWeatherAware: false, isSaved: true  },

  // ── AI Ideas (paid) ────────────────────────────────────────
  { id: "ai1", title: "AI-Planned Mystery Date Night",image: U("1677442135703-1787eea5ce01"), categoryId: "ai-ideas",                                         isAI: true,  isWeatherAware: false, isSaved: false },
  { id: "ai2", title: "Budget-Aware Date Suggestions",image: U("1620712943543-bcc4688e7485"), categoryId: "ai-ideas",                                         isAI: true,  isWeatherAware: false, isSaved: false },
  { id: "ai3", title: "Mood-Matched Activity Finder", image: U("1535378917042-10a22c5bb1b1"), categoryId: "ai-ideas",                                         isAI: true,  isWeatherAware: false, isSaved: false },
  { id: "ai4", title: "Personalized Adventure Route", image: U("1504384308090-c5eac4e66c41"), categoryId: "ai-ideas",                                         isAI: true,  isWeatherAware: false, isSaved: false },
  { id: "ai5", title: "Smart Group Outing Planner",   image: U("1485827404703-89b55fcc595e"), categoryId: "ai-ideas",                                         isAI: true,  isWeatherAware: false, isSaved: false },

  // ── Weather-Aware (paid) ───────────────────────────────────
  { id: "w1", title: "Golden Hour Hike Timer",        image: U("1499336315816-097655dcfbda"), categoryId: "weather-aware",                                    isAI: false, isWeatherAware: true,  isSaved: false },
  { id: "w2", title: "Perfect Picnic Forecast",       image: U("1530122202428-37bfbb7e8c6e"), categoryId: "weather-aware",                                    isAI: false, isWeatherAware: true,  isSaved: false },
  { id: "w3", title: "Rain-Day Indoor Escape Plan",   image: U("1501854140801-50d01698950b"), categoryId: "weather-aware",                                    isAI: false, isWeatherAware: true,  isSaved: false },
  { id: "w4", title: "Snow Day Activity Bundle",      image: U("1517884635067-7a39de1fb96d"), categoryId: "weather-aware",                                    isAI: false, isWeatherAware: true,  isSaved: false },
];
