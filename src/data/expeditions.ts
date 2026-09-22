export interface ItineraryStep {
  day: string;
  title: string;
  desc: string;
}

export interface Expedition {
  id: string;
  title: string;
  category: 'mountain' | 'backwaters' | 'coastal' | 'wildlife' | 'cultural';
  categoryLabel: string;
  location: string;
  duration: string;
  difficulty: string;
  rating: number;
  reviewsCount: number;
  price: number;
  image: string;
  description: string;
  itinerary: ItineraryStep[];
}

export const KERALAM_EXPEDITIONS: Expedition[] = [
  {
    id: 'exp-1',
    title: 'Munnar Tea Hills & Anamudi Ridge Trek',
    category: 'mountain',
    categoryLabel: 'Mountain & Tea Treks',
    location: 'Munnar, Idukki District',
    duration: '4 Days / 3 Nights',
    difficulty: 'Moderate',
    rating: 4.96,
    reviewsCount: 142,
    price: 450,
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1000&q=80',
    description: 'Hike through emerald tea estates, cloud forests, and high-altitude grasslands near Keralam’s highest peak.',
    itinerary: [
      { day: 'Day 1', title: 'Arrival in Munnar & Top Station Sunset Walk', desc: 'Transfer through gap road viewpoints, welcome at eco-lodge, and evening walk through high-altitude tea gardens.' },
      { day: 'Day 2', title: 'Meesapulimala / Rhodo Valley Trek', desc: 'Pre-dawn summit hike through rhododendron forests and rolling grasslands along Keralam mountain border.' },
      { day: 'Day 3', title: 'Eravikulam Sanctuary & Anamudi Ridge Trail', desc: 'Spot the endangered Nilgiri Tahr and trek along mist-covered mountain ridge paths.' },
      { day: 'Day 4', title: 'Attukad Waterfalls & Organic Spice Garden Tour', desc: 'Descend through cascade trails, sample fresh cardamom & pepper, and farewell departure.' }
    ]
  },
  {
    id: 'exp-2',
    title: 'Alleppey & Kumarakom Backwater Voyage',
    category: 'backwaters',
    categoryLabel: 'Backwaters & Houseboats',
    location: 'Alappuzha & Kottayam',
    duration: '3 Days / 2 Nights',
    difficulty: 'Easy',
    rating: 4.98,
    reviewsCount: 210,
    price: 520,
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80',
    description: 'Private traditional Kettuvallam houseboat cruise along palm-fringed canals, paddy fields, and Vembanad Lake.',
    itinerary: [
      { day: 'Day 1', title: 'Boarding at Punnamada Lake & Canal Cruise', desc: 'Welcome tender coconut drink, traditional Keralam Sadhya lunch on board, and quiet navigation through narrow village canals.' },
      { day: 'Day 2', title: 'Vembanad Lake Sunrise & Kayaking Trail', desc: 'Early morning canoe paddling through lotus ponds, bird sanctuary visits in Kumarakom, and fresh Toddy tasting.' },
      { day: 'Day 3', title: 'Coir Village Walk & Alappuzha Beach Sunset', desc: 'Explore historic coir making villages, heritage lighthouse, and beach stroll before checkout.' }
    ]
  },
  {
    id: 'exp-3',
    title: 'Varkala Red Cliff & Coastal Heritage Walk',
    category: 'coastal',
    categoryLabel: 'Coastal & Red Cliffs',
    location: 'Varkala, Thiruvananthapuram',
    duration: '3 Days / 2 Nights',
    difficulty: 'Easy',
    rating: 4.92,
    reviewsCount: 168,
    price: 380,
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1000&q=80',
    description: 'Trek along dramatic red clay cliffs overlooking the Arabian Sea, golden beaches, and ancient Janardhanaswamy temple.',
    itinerary: [
      { day: 'Day 1', title: 'North Cliff Walk & Sunset Yoga Session', desc: 'Check in to cliff-edge retreat, evening coastal walk, and fresh seafood by the sea.' },
      { day: 'Day 2', title: 'Kappil Estuary & Black Sand Beach Trail', desc: 'Hike where backwaters meet the Arabian Sea, paddleboarding in Kappil lake, and Papanasam holy spring dip.' },
      { day: 'Day 3', title: 'Surfing Lesson & Heritage Temple Walk', desc: 'Introductory morning surf session and 2,000-year-old temple visit.' }
    ]
  },
  {
    id: 'exp-4',
    title: 'Periyar Jungle Bamboo Rafting & Tiger Reserve Trail',
    category: 'wildlife',
    categoryLabel: 'Jungle Safaris',
    location: 'Thekkady, Idukki District',
    duration: '4 Days / 3 Nights',
    difficulty: 'Moderate',
    rating: 4.95,
    reviewsCount: 115,
    price: 490,
    image: 'https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?auto=format&fit=crop&w=1000&q=80',
    description: 'Full-day bamboo rafting and trek through deep evergreen forests of Periyar Tiger Reserve with wild elephant herds.',
    itinerary: [
      { day: 'Day 1', title: 'Thekkady Arrival & Spice Plantation Trail', desc: 'Walk through vanilla, cardamom, and clove plantations with master botanists.' },
      { day: 'Day 2', title: 'Full Day Bamboo Rafting & Jungle Hike', desc: 'Trek through core tiger sanctuary zones and float across Periyar Lake surrounded by wild elephants & sambar deer.' },
      { day: 'Day 3', title: 'Gavi Eco-Forest Jeep Safari', desc: 'Off-road rainforest drive to Gavi dam, cardamom processing units, and high canopy walks.' },
      { day: 'Day 4', title: 'Morning Elephant Sightseeing & Departure', desc: 'Early bird watching boat ride on Periyar lake and return transit.' }
    ]
  },
  {
    id: 'exp-5',
    title: 'Ponmudi Mist Hills & Agasthyakoodam Trail',
    category: 'mountain',
    categoryLabel: 'Mountain & Tea Treks',
    location: 'Ponmudi, Thiruvananthapuram',
    duration: '3 Days / 2 Nights',
    difficulty: 'Challenging',
    rating: 4.89,
    reviewsCount: 88,
    price: 360,
    image: 'https://images.unsplash.com/photo-1609828913664-85d4001417ef?auto=format&fit=crop&w=1000&q=80',
    description: 'Navigate 22 hairpin curves to the Golden Peak of Ponmudi, lush orchids, stream crossings, and Agasthya biosphere reserves.',
    itinerary: [
      { day: 'Day 1', title: '22 Hairpin Scenic Drive & Peppara Forest', desc: 'Ascend to Ponmudi hill station, visit Kallar riverbed, and Meenmutty waterfall trek.' },
      { day: 'Day 2', title: 'Golden Peak Summit & Forest Stream Trail', desc: 'Hike across windswept mountain ridges, wild orchid trails, and misty valley viewpoints.' },
      { day: 'Day 3', title: 'Kallar Crystal Waters & Departure', desc: 'Natural pool swimming in Kallar river and return to Trivandrum.' }
    ]
  },
  {
    id: 'exp-6',
    title: 'Jatayu Earth Center & Vagamon Pine Valley Escape',
    category: 'cultural',
    categoryLabel: 'Culture & Adventure',
    location: 'Chadayamangalam & Vagamon',
    duration: '4 Days / 3 Nights',
    difficulty: 'Easy-Moderate',
    rating: 4.97,
    reviewsCount: 130,
    price: 420,
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1000&q=80',
    description: 'Explore the world’s largest bird sculpture at Jatayu Rock followed by Vagamon’s misty pine forests and glass bridge.',
    itinerary: [
      { day: 'Day 1', title: 'Jatayu Rock Cable Car & Sculpture Trek', desc: 'Cable car ride to Jatayu Earth Center, rock adventure activities, and mythological history museum tour.' },
      { day: 'Day 2', title: 'Transit to Vagamon & Kurisumala Meadows', desc: 'Drive through rubber plantations into Vagamon rolling green meadows and dairy farm trails.' },
      { day: 'Day 3', title: 'Pine Forest Walk & Vagamon Lake Boating', desc: 'Hike among tall British-era pine trees, glass bridge walk, and pedal boating.' },
      { day: 'Day 4', title: 'Marmala Waterfall Trail & Departure', desc: 'Trek to hidden Marmala cascade and departure transfer.' }
    ]
  }
];
