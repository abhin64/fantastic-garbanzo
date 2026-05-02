export interface Post {
  id: string;
  title: string;
  image: string;
  category: Category;
  location?: string;
  isAI?: boolean;
  isWeatherAware?: boolean;
}

export const CATEGORIES = [
  "Outdoors",
  "Indoors",
  "Food",
  "Cheap",
  "Seasonal",
  "Trending",
  "AI Ideas",
  "Weather-Aware",
  "Saved",
] as const;

export type Category = (typeof CATEGORIES)[number];

export const explorePosts: Post[] = [
  // Outdoors
  { id: "1",  title: "Sunrise Hike at Eagle Peak",       image: "https://picsum.photos/seed/out1/400/600", category: "Outdoors",       location: "Eagle Peak Trail" },
  { id: "2",  title: "Kayaking at Blue Lake",             image: "https://picsum.photos/seed/out2/400/500", category: "Outdoors",       location: "Blue Lake" },
  { id: "3",  title: "Mountain Biking at Redwood Park",   image: "https://picsum.photos/seed/out3/400/700", category: "Outdoors",       location: "Redwood Park" },
  { id: "4",  title: "Stargazing at Desert Ridge",        image: "https://picsum.photos/seed/out4/400/550", category: "Outdoors",       location: "Desert Ridge" },
  { id: "5",  title: "Beach Volleyball Meetup",           image: "https://picsum.photos/seed/out5/400/480", category: "Outdoors",       location: "Santa Monica Beach" },
  // Indoors
  { id: "6",  title: "Board Game Night at The Parlor",    image: "https://picsum.photos/seed/in1/400/500",  category: "Indoors",        location: "The Parlor" },
  { id: "7",  title: "Pottery Workshop for Beginners",    image: "https://picsum.photos/seed/in2/400/600",  category: "Indoors",        location: "Clay Studio" },
  { id: "8",  title: "Escape Room Challenge",             image: "https://picsum.photos/seed/in3/400/520",  category: "Indoors" },
  { id: "9",  title: "Rooftop Cinema Night",              image: "https://picsum.photos/seed/in4/400/650",  category: "Indoors",        location: "Skyline Rooftop" },
  { id: "10", title: "Jazz Night at The Atrium",          image: "https://picsum.photos/seed/in5/400/580",  category: "Indoors",        location: "The Atrium" },
  // Food
  { id: "11", title: "Street Taco Tour Downtown",         image: "https://picsum.photos/seed/food1/400/500", category: "Food",          location: "Downtown" },
  { id: "12", title: "Omakase Sushi Experience",          image: "https://picsum.photos/seed/food2/400/620", category: "Food",          location: "Nobu" },
  { id: "13", title: "Vegan Brunch Pop-Up",               image: "https://picsum.photos/seed/food3/400/480", category: "Food",          location: "The Garden Spot" },
  { id: "14", title: "Wine & Cheese Tasting",             image: "https://picsum.photos/seed/food4/400/560", category: "Food" },
  { id: "15", title: "Farmers Market Morning",            image: "https://picsum.photos/seed/food5/400/540", category: "Food",          location: "Grand Central Market" },
  // Cheap
  { id: "16", title: "Free Museum Sundays",               image: "https://picsum.photos/seed/chp1/400/500", category: "Cheap",          location: "City Museum" },
  { id: "17", title: "Park Picnic with Friends",          image: "https://picsum.photos/seed/chp2/400/600", category: "Cheap",          location: "Griffith Park" },
  { id: "18", title: "$5 Taco Tuesday",                   image: "https://picsum.photos/seed/chp3/400/520", category: "Cheap" },
  { id: "19", title: "Library Book Club",                 image: "https://picsum.photos/seed/chp4/400/480", category: "Cheap",          location: "Central Library" },
  { id: "20", title: "Sunset Walk at the Pier",           image: "https://picsum.photos/seed/chp5/400/640", category: "Cheap",          location: "Santa Monica Pier" },
  // Seasonal
  { id: "21", title: "Cherry Blossom Viewing",            image: "https://picsum.photos/seed/sea1/400/580", category: "Seasonal",       location: "Japanese Garden" },
  { id: "22", title: "Pumpkin Patch Day Trip",            image: "https://picsum.photos/seed/sea2/400/520", category: "Seasonal",       location: "Half Moon Bay" },
  { id: "23", title: "Holiday Market Stroll",             image: "https://picsum.photos/seed/sea3/400/600", category: "Seasonal",       location: "Downtown Plaza" },
  { id: "24", title: "Summer Solstice Bonfire",           image: "https://picsum.photos/seed/sea4/400/500", category: "Seasonal",       location: "Malibu Beach" },
  { id: "25", title: "First Snow Hike",                   image: "https://picsum.photos/seed/sea5/400/650", category: "Seasonal",       location: "Big Bear" },
  // Trending
  { id: "26", title: "Pilates & Brunch Collab",           image: "https://picsum.photos/seed/trn1/400/520", category: "Trending" },
  { id: "27", title: "Viral Ramen Shop Visit",            image: "https://picsum.photos/seed/trn2/400/580", category: "Trending",       location: "Ramen Nagi" },
  { id: "28", title: "Urban Sketching Walk",              image: "https://picsum.photos/seed/trn3/400/500", category: "Trending",       location: "Arts District" },
  { id: "29", title: "Sound Bath Meditation",             image: "https://picsum.photos/seed/trn4/400/600", category: "Trending" },
  { id: "30", title: "Axe Throwing Night Out",            image: "https://picsum.photos/seed/trn5/400/540", category: "Trending",       location: "Kick Axe" },
  // AI Ideas (paid)
  { id: "31", title: "AI-Planned Mystery Date Night",     image: "https://picsum.photos/seed/ai1/400/580",  category: "AI Ideas",       isAI: true },
  { id: "32", title: "Personalized Adventure Route",      image: "https://picsum.photos/seed/ai2/400/520",  category: "AI Ideas",       isAI: true },
  { id: "33", title: "Smart Group Outing Planner",        image: "https://picsum.photos/seed/ai3/400/600",  category: "AI Ideas",       isAI: true },
  { id: "34", title: "Mood-Matched Activity Finder",      image: "https://picsum.photos/seed/ai4/400/500",  category: "AI Ideas",       isAI: true },
  { id: "35", title: "Budget-Aware Date Suggestions",     image: "https://picsum.photos/seed/ai5/400/560",  category: "AI Ideas",       isAI: true },
  // Weather-Aware (paid)
  { id: "36", title: "Rain-Day Indoor Escape Plan",       image: "https://picsum.photos/seed/wth1/400/560", category: "Weather-Aware",  isWeatherAware: true },
  { id: "37", title: "Perfect Picnic Forecast",           image: "https://picsum.photos/seed/wth2/400/520", category: "Weather-Aware",  isWeatherAware: true },
  { id: "38", title: "Golden Hour Hike Timer",            image: "https://picsum.photos/seed/wth3/400/600", category: "Weather-Aware",  isWeatherAware: true },
  { id: "39", title: "Snow Day Activity Bundle",          image: "https://picsum.photos/seed/wth4/400/540", category: "Weather-Aware",  isWeatherAware: true },
  // Saved
  { id: "40", title: "Bookmarked: Rooftop Jazz",          image: "https://picsum.photos/seed/sv1/400/580",  category: "Saved",          location: "The Rooftop" },
  { id: "41", title: "Bookmarked: Weekend Hike",          image: "https://picsum.photos/seed/sv2/400/520",  category: "Saved",          location: "Runyon Canyon" },
  { id: "42", title: "Bookmarked: Pasta Night",           image: "https://picsum.photos/seed/sv3/400/600",  category: "Saved" },
];
