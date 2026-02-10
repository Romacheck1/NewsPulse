import { Article, Category } from "./types";

// Mock news data - in production, replace with real API calls
const mockArticles: Article[] = [
  {
    id: "1",
    title: "Revolutionary AI Breakthrough Transforms Healthcare",
    source: "Tech News Daily",
    url: "https://example.com/news/1",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800",
    publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    category: "Technology",
    description: "Scientists develop AI system that can diagnose diseases with 99% accuracy."
  },
  {
    id: "2",
    title: "Global Markets Surge on Economic Optimism",
    source: "Financial Times",
    url: "https://example.com/news/2",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800",
    publishedAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
    category: "Business",
    description: "Stock markets worldwide see significant gains as economic indicators improve."
  },
  {
    id: "3",
    title: "New Exoplanet Discovered in Habitable Zone",
    source: "Space Today",
    url: "https://example.com/news/3",
    imageUrl: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=800",
    publishedAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
    category: "Science",
    description: "Astronomers find Earth-like planet that could potentially support life."
  },
  {
    id: "4",
    title: "Breakthrough in Cancer Treatment Shows Promise",
    source: "Health Journal",
    url: "https://example.com/news/4",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800",
    publishedAt: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
    category: "Health",
    description: "New immunotherapy treatment shows 80% success rate in clinical trials."
  },
  {
    id: "5",
    title: "Championship Finals Set for Next Weekend",
    source: "Sports Central",
    url: "https://example.com/news/5",
    imageUrl: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800",
    publishedAt: new Date(Date.now() - 10 * 60 * 60 * 1000).toISOString(),
    category: "Sports",
    description: "Top teams advance to championship finals after thrilling semifinal matches."
  },
  {
    id: "6",
    title: "Quantum Computing Milestone Achieved",
    source: "Tech News Daily",
    url: "https://example.com/news/6",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
    publishedAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
    category: "Technology",
    description: "Researchers achieve quantum supremacy with new 1000-qubit processor."
  },
  {
    id: "7",
    title: "Startup Raises $50M in Series B Funding",
    source: "Business Weekly",
    url: "https://example.com/news/7",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    publishedAt: new Date(Date.now() - 14 * 60 * 60 * 1000).toISOString(),
    category: "Business",
    description: "Tech startup secures major funding round to expand operations globally."
  },
  {
    id: "8",
    title: "Climate Change Research Reveals New Insights",
    source: "Science Today",
    url: "https://example.com/news/8",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    publishedAt: new Date(Date.now() - 16 * 60 * 60 * 1000).toISOString(),
    category: "Science",
    description: "Latest climate models show accelerated warming patterns in polar regions."
  },
  {
    id: "9",
    title: "Mental Health Awareness Campaign Launches",
    source: "Health Journal",
    url: "https://example.com/news/9",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800",
    publishedAt: new Date(Date.now() - 18 * 60 * 60 * 1000).toISOString(),
    category: "Health",
    description: "New initiative aims to reduce stigma around mental health issues."
  },
  {
    id: "10",
    title: "Olympic Games Preparation Underway",
    source: "Sports Central",
    url: "https://example.com/news/10",
    imageUrl: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800",
    publishedAt: new Date(Date.now() - 20 * 60 * 60 * 1000).toISOString(),
    category: "Sports",
    description: "Athletes begin intensive training as Olympic preparations accelerate."
  },
  {
    id: "11",
    title: "5G Networks Expand to Rural Areas",
    source: "Tech News Daily",
    url: "https://example.com/news/11",
    imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800",
    publishedAt: new Date(Date.now() - 22 * 60 * 60 * 1000).toISOString(),
    category: "Technology",
    description: "Telecom companies invest billions to bring high-speed internet to remote regions."
  },
  {
    id: "12",
    title: "Sustainable Energy Investments Reach Record High",
    source: "Business Weekly",
    url: "https://example.com/news/12",
    imageUrl: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800",
    publishedAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    category: "Business",
    description: "Global investments in renewable energy exceed $300 billion this year."
  },
];

export async function fetchNews(category?: Category): Promise<Article[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  if (!category || category === "All") {
    return [...mockArticles];
  }
  
  return mockArticles.filter(article => article.category === category);
}

export async function searchNews(query: string, category?: Category): Promise<Article[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const lowerQuery = query.toLowerCase();
  let filtered = mockArticles.filter(article => 
    article.title.toLowerCase().includes(lowerQuery) ||
    article.description?.toLowerCase().includes(lowerQuery) ||
    article.source?.toLowerCase().includes(lowerQuery)
  );
  
  if (category && category !== "All") {
    filtered = filtered.filter(article => article.category === category);
  }
  
  return filtered;
}
