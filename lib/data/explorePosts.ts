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

export const explorePosts: Post[] = [
  // ── Trending ───────────────────────────────────────────────
  { id: "t1", title: "Axe Throwing Night Out",      image: "https://picsum.photos/seed/trn1/400/520", categoryId: "trending",      location: "Kick Axe",         isAI: false, isWeatherAware: false, isSaved: false },
  { id: "t2", title: "Pilates & Brunch Collab",      image: "https://picsum.photos/seed/trn2/400/580", categoryId: "trending",      isAI: false,                  isWeatherAware: false, isSaved: false },
  { id: "t3", title: "Sound Bath Meditation",        image: "https://picsum.photos/seed/trn3/400/500", categoryId: "trending",      isAI: false,                  isWeatherAware: false, isSaved: false },
  { id: "t4", title: "Urban Sketching Walk",         image: "https://picsum.photos/seed/trn4/400/600", categoryId: "trending",      location: "Arts District",    isAI: false, isWeatherAware: false, isSaved: false },
  { id: "t5", title: "Viral Ramen Shop Visit",       image: "https://picsum.photos/seed/trn5/400/540", categoryId: "trending",      location: "Ramen Nagi",       isAI: false, isWeatherAware: false, isSaved: false },

  // ── Seasonal ───────────────────────────────────────────────
  { id: "s1", title: "Cherry Blossom Viewing",       image: "https://picsum.photos/seed/sea1/400/580", categoryId: "seasonal",      location: "Japanese Garden",  isAI: false, isWeatherAware: false, isSaved: false },
  { id: "s2", title: "First Snow Hike",              image: "https://picsum.photos/seed/sea2/400/650", categoryId: "seasonal",      location: "Big Bear",         isAI: false, isWeatherAware: false, isSaved: false },
  { id: "s3", title: "Holiday Market Stroll",        image: "https://picsum.photos/seed/sea3/400/600", categoryId: "seasonal",      location: "Downtown Plaza",   isAI: false, isWeatherAware: false, isSaved: false },
  { id: "s4", title: "Pumpkin Patch Day Trip",       image: "https://picsum.photos/seed/sea4/400/520", categoryId: "seasonal",      location: "Half Moon Bay",    isAI: false, isWeatherAware: false, isSaved: false },
  { id: "s5", title: "Summer Solstice Bonfire",      image: "https://picsum.photos/seed/sea5/400/500", categoryId: "seasonal",      location: "Malibu Beach",     isAI: false, isWeatherAware: false, isSaved: false },

  // ── Cheap ──────────────────────────────────────────────────
  { id: "c1", title: "$5 Taco Tuesday",              image: "https://picsum.photos/seed/chp1/400/520", categoryId: "cheap",         isAI: false,                  isWeatherAware: false, isSaved: false },
  { id: "c2", title: "Free Museum Sundays",          image: "https://picsum.photos/seed/chp2/400/500", categoryId: "cheap",         location: "City Museum",      isAI: false, isWeatherAware: false, isSaved: false },
  { id: "c3", title: "Library Book Club",            image: "https://picsum.photos/seed/chp3/400/480", categoryId: "cheap",         location: "Central Library",  isAI: false, isWeatherAware: false, isSaved: false },
  { id: "c4", title: "Park Picnic with Friends",     image: "https://picsum.photos/seed/chp4/400/600", categoryId: "cheap",         location: "Griffith Park",    isAI: false, isWeatherAware: false, isSaved: false },
  { id: "c5", title: "Sunset Walk at the Pier",      image: "https://picsum.photos/seed/chp5/400/640", categoryId: "cheap",         location: "Santa Monica Pier",isAI: false, isWeatherAware: false, isSaved: false },

  // ── Outdoors ───────────────────────────────────────────────
  { id: "o1", title: "Beach Volleyball Meetup",      image: "https://picsum.photos/seed/out1/400/480", categoryId: "outdoors",      location: "Santa Monica Beach",isAI: false, isWeatherAware: false, isSaved: false },
  { id: "o2", title: "Kayaking at Blue Lake",        image: "https://picsum.photos/seed/out2/400/500", categoryId: "outdoors",      location: "Blue Lake",        isAI: false, isWeatherAware: false, isSaved: false },
  { id: "o3", title: "Mountain Biking at Redwood",   image: "https://picsum.photos/seed/out3/400/700", categoryId: "outdoors",      location: "Redwood Park",     isAI: false, isWeatherAware: false, isSaved: false },
  { id: "o4", title: "Stargazing at Desert Ridge",   image: "https://picsum.photos/seed/out4/400/550", categoryId: "outdoors",      location: "Desert Ridge",     isAI: false, isWeatherAware: false, isSaved: false },
  { id: "o5", title: "Sunrise Hike at Eagle Peak",   image: "https://picsum.photos/seed/out5/400/600", categoryId: "outdoors",      location: "Eagle Peak Trail", isAI: false, isWeatherAware: false, isSaved: false },

  // ── Indoors ────────────────────────────────────────────────
  { id: "i1", title: "Board Game Night at The Parlor",image:"https://picsum.photos/seed/in1/400/500",  categoryId: "indoors",       location: "The Parlor",       isAI: false, isWeatherAware: false, isSaved: false },
  { id: "i2", title: "Escape Room Challenge",        image: "https://picsum.photos/seed/in2/400/520",  categoryId: "indoors",       isAI: false,                  isWeatherAware: false, isSaved: false },
  { id: "i3", title: "Jazz Night at The Atrium",     image: "https://picsum.photos/seed/in3/400/580",  categoryId: "indoors",       location: "The Atrium",       isAI: false, isWeatherAware: false, isSaved: false },
  { id: "i4", title: "Pottery Workshop for Beginners",image:"https://picsum.photos/seed/in4/400/600",  categoryId: "indoors",       location: "Clay Studio",      isAI: false, isWeatherAware: false, isSaved: false },
  { id: "i5", title: "Rooftop Cinema Night",         image: "https://picsum.photos/seed/in5/400/650",  categoryId: "indoors",       location: "Skyline Rooftop",  isAI: false, isWeatherAware: false, isSaved: false },

  // ── Food ───────────────────────────────────────────────────
  { id: "f1", title: "Farmers Market Morning",       image: "https://picsum.photos/seed/food1/400/540",categoryId: "food",          location: "Grand Central Market",isAI: false,isWeatherAware: false, isSaved: false },
  { id: "f2", title: "Omakase Sushi Experience",     image: "https://picsum.photos/seed/food2/400/620",categoryId: "food",          location: "Nobu",             isAI: false, isWeatherAware: false, isSaved: false },
  { id: "f3", title: "Street Taco Tour Downtown",    image: "https://picsum.photos/seed/food3/400/500",categoryId: "food",          location: "Downtown",         isAI: false, isWeatherAware: false, isSaved: false },
  { id: "f4", title: "Vegan Brunch Pop-Up",          image: "https://picsum.photos/seed/food4/400/480",categoryId: "food",          location: "The Garden Spot",  isAI: false, isWeatherAware: false, isSaved: false },
  { id: "f5", title: "Wine & Cheese Tasting",        image: "https://picsum.photos/seed/food5/400/560",categoryId: "food",          isAI: false,                  isWeatherAware: false, isSaved: false },

  // ── Saved ──────────────────────────────────────────────────
  { id: "sv1", title: "Bookmarked: Pasta Night",     image: "https://picsum.photos/seed/sv1/400/600",  categoryId: "saved",         isAI: false,                  isWeatherAware: false, isSaved: true  },
  { id: "sv2", title: "Bookmarked: Rooftop Jazz",    image: "https://picsum.photos/seed/sv2/400/580",  categoryId: "saved",         location: "The Rooftop",      isAI: false, isWeatherAware: false, isSaved: true  },
  { id: "sv3", title: "Bookmarked: Weekend Hike",    image: "https://picsum.photos/seed/sv3/400/520",  categoryId: "saved",         location: "Runyon Canyon",    isAI: false, isWeatherAware: false, isSaved: true  },

  // ── AI Ideas (paid) ────────────────────────────────────────
  { id: "ai1", title: "AI-Planned Mystery Date Night", image: "https://picsum.photos/seed/ai1/400/580",categoryId: "ai-ideas",     isAI: true,                   isWeatherAware: false, isSaved: false },
  { id: "ai2", title: "Budget-Aware Date Suggestions", image: "https://picsum.photos/seed/ai2/400/560",categoryId: "ai-ideas",     isAI: true,                   isWeatherAware: false, isSaved: false },
  { id: "ai3", title: "Mood-Matched Activity Finder",  image: "https://picsum.photos/seed/ai3/400/500",categoryId: "ai-ideas",     isAI: true,                   isWeatherAware: false, isSaved: false },
  { id: "ai4", title: "Personalized Adventure Route",  image: "https://picsum.photos/seed/ai4/400/520",categoryId: "ai-ideas",     isAI: true,                   isWeatherAware: false, isSaved: false },
  { id: "ai5", title: "Smart Group Outing Planner",    image: "https://picsum.photos/seed/ai5/400/600",categoryId: "ai-ideas",     isAI: true,                   isWeatherAware: false, isSaved: false },

  // ── Weather-Aware (paid) ───────────────────────────────────
  { id: "w1", title: "Golden Hour Hike Timer",       image: "https://picsum.photos/seed/wth1/400/600",categoryId: "weather-aware", isAI: false,                  isWeatherAware: true,  isSaved: false },
  { id: "w2", title: "Perfect Picnic Forecast",      image: "https://picsum.photos/seed/wth2/400/520",categoryId: "weather-aware", isAI: false,                  isWeatherAware: true,  isSaved: false },
  { id: "w3", title: "Rain-Day Indoor Escape Plan",  image: "https://picsum.photos/seed/wth3/400/560",categoryId: "weather-aware", isAI: false,                  isWeatherAware: true,  isSaved: false },
  { id: "w4", title: "Snow Day Activity Bundle",     image: "https://picsum.photos/seed/wth4/400/540",categoryId: "weather-aware", isAI: false,                  isWeatherAware: true,  isSaved: false },
];
