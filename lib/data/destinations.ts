export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
}

export interface Destination {
  id: string;
  name: string;
  type: 'Domestic' | 'International';
  description: string;
  keyAttractions: string[];
  bestTimeToVisit: string;
  itinerary: ItineraryDay[];
  imageUrl: string;
}

export const destinations: Destination[] = [
  {
    id: 'kashmir',
    name: 'Kashmir',
    type: 'Domestic',
    description: 'Often referred to as "Paradise on Earth," Kashmir mesmerizes visitors with its snow-capped mountains, serene lakes, and lush Mughal gardens. It offers a perfect blend of natural beauty and rich cultural heritage, making it an unforgettable destination for nature lovers and adventure seekers alike.',
    keyAttractions: ['Dal Lake & Shikara Rides', 'Gulmarg Gondola', 'Pahalgam Valley', 'Shankaracharya Temple'],
    bestTimeToVisit: 'March to August for pleasant weather; December to February for snow.',
    imageUrl: 'https://picsum.photos/seed/kashmir/800/600',
    itinerary: [
      { day: 1, title: 'Arrival in Srinagar', description: 'Arrive in Srinagar, check into a traditional houseboat on Dal Lake. Enjoy a relaxing Shikara ride at sunset.' },
      { day: 2, title: 'Gulmarg Excursion', description: 'Take a day trip to Gulmarg. Experience the famous Gulmarg Gondola ride and enjoy panoramic views of the snow-clad peaks.' },
      { day: 3, title: 'Pahalgam & Departure', description: 'Visit the beautiful valleys of Pahalgam. Walk along the Lidder River before heading back to the airport for your departure.' }
    ]
  },
  {
    id: 'himachal',
    name: 'Himachal',
    type: 'Domestic',
    description: 'Himachal Pradesh is a northern Indian state in the Himalayas, known for its trekking, climbing and skiing areas. It features strong Tibetan presence, beautiful hill stations, and breathtaking landscapes that provide a perfect escape from the bustling city life.',
    keyAttractions: ['Rohtang Pass', 'Mall Road, Shimla', 'Dharamshala Monasteries', 'Solang Valley'],
    bestTimeToVisit: 'March to June for summer escapes; October to February for winter sports.',
    imageUrl: 'https://picsum.photos/seed/himachal/800/600',
    itinerary: [
      { day: 1, title: 'Shimla Arrival', description: 'Arrive in Shimla. Spend the evening strolling down the historic Mall Road and visiting the Ridge.' },
      { day: 2, title: 'Manali & Solang Valley', description: 'Travel to Manali. Visit Solang Valley for adventure sports like paragliding and zorbing.' },
      { day: 3, title: 'Rohtang Pass', description: 'Early morning excursion to Rohtang Pass for snow activities, followed by departure in the evening.' }
    ]
  },
  {
    id: 'ladakh',
    name: 'Ladakh',
    type: 'Domestic',
    description: 'Known as the "Land of High Passes," Ladakh is a region characterized by its barren yet beautiful landscapes, crystal-clear lakes, and ancient Buddhist monasteries. It is a haven for bikers, trekkers, and peace-seekers.',
    keyAttractions: ['Pangong Lake', 'Nubra Valley', 'Magnetic Hill', 'Thiksey Monastery'],
    bestTimeToVisit: 'May to September when the roads are clear of snow.',
    imageUrl: 'https://picsum.photos/seed/ladakh/800/600',
    itinerary: [
      { day: 1, title: 'Acclimatization in Leh', description: 'Arrive in Leh. Rest for the day to acclimatize to the high altitude. Visit Shanti Stupa in the evening.' },
      { day: 2, title: 'Nubra Valley via Khardung La', description: 'Drive to Nubra Valley via Khardung La, one of the highest motorable roads. Experience the double-humped camel ride.' },
      { day: 3, title: 'Pangong Lake & Departure', description: 'Visit the mesmerizing Pangong Lake, famous for its changing colors. Return to Leh for departure.' }
    ]
  },
  {
    id: 'andaman',
    name: 'Andaman',
    type: 'Domestic',
    description: 'The Andaman Islands are an Indian archipelago in the Bay of Bengal, known for their palm-lined, white-sand beaches, mangroves, and tropical rainforests. Coral reefs supporting marine life make it a premier destination for scuba diving and snorkeling.',
    keyAttractions: ['Radhanagar Beach', 'Cellular Jail', 'Ross Island', 'Elephant Beach'],
    bestTimeToVisit: 'October to May for clear skies and calm seas.',
    imageUrl: 'https://picsum.photos/seed/andaman/800/600',
    itinerary: [
      { day: 1, title: 'Port Blair History', description: 'Arrive in Port Blair. Visit the historic Cellular Jail and attend the moving Light and Sound show.' },
      { day: 2, title: 'Havelock Island', description: 'Take a ferry to Havelock Island. Spend the day relaxing at the world-renowned Radhanagar Beach.' },
      { day: 3, title: 'Water Sports & Departure', description: 'Enjoy scuba diving or snorkeling at Elephant Beach before taking the ferry back for your flight.' }
    ]
  },
  {
    id: 'kerala',
    name: 'Kerala',
    type: 'Domestic',
    description: 'Famously known as "God\'s Own Country," Kerala offers a diverse landscape of tranquil backwaters, lush tea gardens, pristine beaches, and rich wildlife. Its Ayurvedic treatments and unique cuisine add to the holistic travel experience.',
    keyAttractions: ['Alleppey Backwaters', 'Munnar Tea Gardens', 'Fort Kochi', 'Thekkady Wildlife Sanctuary'],
    bestTimeToVisit: 'September to March for comfortable, cool weather.',
    imageUrl: 'https://picsum.photos/seed/kerala/800/600',
    itinerary: [
      { day: 1, title: 'Heritage of Kochi', description: 'Arrive in Kochi. Explore Fort Kochi, the Chinese Fishing Nets, and the historic Mattancherry Palace.' },
      { day: 2, title: 'Munnar Hills', description: 'Drive to Munnar. Visit the sprawling tea estates, the Tea Museum, and enjoy the cool mountain breeze.' },
      { day: 3, title: 'Alleppey Houseboat', description: 'Travel to Alleppey. Board a traditional houseboat for a cruise through the serene backwaters before departing.' }
    ]
  },
  {
    id: 'north-east',
    name: 'North-east',
    type: 'Domestic',
    description: 'The North-East of India is an unexplored paradise comprising eight states, each with its unique culture, tribal heritage, and untouched natural beauty. From living root bridges to one-horned rhinos, it is a land of wonders.',
    keyAttractions: ['Kaziranga National Park', 'Tsomgo Lake', 'Living Root Bridges', 'Tawang Monastery'],
    bestTimeToVisit: 'October to mid-May to avoid the heavy monsoons.',
    imageUrl: 'https://picsum.photos/seed/northeast/800/600',
    itinerary: [
      { day: 1, title: 'Guwahati & Kamakhya', description: 'Arrive in Guwahati. Visit the sacred Kamakhya Temple and enjoy a sunset cruise on the Brahmaputra River.' },
      { day: 2, title: 'Shillong Sightseeing', description: 'Drive to Shillong, the "Scotland of the East." Visit Umiam Lake and the Don Bosco Museum.' },
      { day: 3, title: 'Cherrapunji Wonders', description: 'Day trip to Cherrapunji. See the Nohkalikai Falls and trek to the fascinating Living Root Bridges before departure.' }
    ]
  },
  {
    id: 'uttarakhand',
    name: 'Uttarakhand',
    type: 'Domestic',
    description: 'Often referred to as "Devbhoomi" (Land of the Gods), Uttarakhand is known for its Hindu pilgrimage sites, the majestic Himalayas, and the origin of the holy river Ganges. It is perfect for spirituality, yoga, and trekking.',
    keyAttractions: ['Nainital Lake', 'Valley of Flowers', 'Rishikesh Ashrams', 'Jim Corbett National Park'],
    bestTimeToVisit: 'March to June for pleasant weather; September to November for clear mountain views.',
    imageUrl: 'https://picsum.photos/seed/uttarakhand/800/600',
    itinerary: [
      { day: 1, title: 'Spiritual Rishikesh', description: 'Arrive in Dehradun/Rishikesh. Visit the ashrams, walk across Laxman Jhula, and witness the evening Ganga Aarti.' },
      { day: 2, title: 'Haridwar Temples', description: 'Travel to Haridwar. Take a holy dip at Har Ki Pauri and explore the bustling local markets and temples.' },
      { day: 3, title: 'Mussoorie Retreat', description: 'Drive up to Mussoorie. Stroll along the Camel\'s Back Road and visit Kempty Falls before heading home.' }
    ]
  },
  {
    id: 'goa',
    name: 'Goa',
    type: 'Domestic',
    description: 'India\'s pocket-sized paradise, Goa is famous for its stellar beaches, vibrant nightlife, Portuguese heritage, and laid-back vibe. Whether you want to party till dawn or relax by the sea, Goa has it all.',
    keyAttractions: ['Baga & Calangute Beaches', 'Dudhsagar Waterfalls', 'Basilica of Bom Jesus', 'Anjuna Flea Market'],
    bestTimeToVisit: 'November to February for the best weather and festive atmosphere.',
    imageUrl: 'https://picsum.photos/seed/goa/800/600',
    itinerary: [
      { day: 1, title: 'North Goa Beaches', description: 'Arrive in Goa. Spend the day beach hopping in North Goa (Baga, Calangute) and enjoy the vibrant nightlife.' },
      { day: 2, title: 'South Goa Heritage', description: 'Explore the quieter South Goa. Visit the historic churches of Old Goa and relax at Palolem Beach.' },
      { day: 3, title: 'Water Sports & Departure', description: 'Indulge in thrilling water sports like parasailing or jet skiing before catching your flight back.' }
    ]
  },
  {
    id: 'singapore',
    name: 'Singapore',
    type: 'International',
    description: 'A global financial center with a tropical climate and multicultural population, Singapore is a marvel of modern architecture seamlessly blended with lush green spaces. It is a paradise for shoppers and foodies.',
    keyAttractions: ['Gardens by the Bay', 'Marina Bay Sands', 'Sentosa Island', 'Universal Studios'],
    bestTimeToVisit: 'February to April for slightly drier weather, though it is a year-round destination.',
    imageUrl: 'https://picsum.photos/seed/singapore/800/600',
    itinerary: [
      { day: 1, title: 'City Marvels', description: 'Arrive in Singapore. Visit the iconic Marina Bay Sands and explore the futuristic Gardens by the Bay in the evening.' },
      { day: 2, title: 'Sentosa Island', description: 'Spend the entire day at Sentosa Island. Enjoy the beaches, cable car ride, and S.E.A. Aquarium.' },
      { day: 3, title: 'Universal Studios & Shopping', description: 'Experience the thrills at Universal Studios. Later, shop at Orchard Road before your departure.' }
    ]
  },
  {
    id: 'malaysia',
    name: 'Malaysia',
    type: 'International',
    description: 'Malaysia offers a beautiful mix of Malay, Chinese, Indian, and European cultural influences. From the towering skyscrapers of Kuala Lumpur to the pristine beaches of Langkawi, it truly is "Truly Asia."',
    keyAttractions: ['Petronas Twin Towers', 'Batu Caves', 'Langkawi Cable Car', 'Mount Kinabalu'],
    bestTimeToVisit: 'December to April for the West Coast; April to October for the East Coast.',
    imageUrl: 'https://picsum.photos/seed/malaysia/800/600',
    itinerary: [
      { day: 1, title: 'Kuala Lumpur City Tour', description: 'Arrive in KL. Visit the iconic Petronas Twin Towers, KL Tower, and explore the vibrant Bukit Bintang area.' },
      { day: 2, title: 'Batu Caves & Genting', description: 'Take a half-day tour to the majestic Batu Caves, followed by a trip to the cool Genting Highlands.' },
      { day: 3, title: 'Cultural Walk & Departure', description: 'Explore Chinatown and Central Market for souvenirs and local street food before heading to the airport.' }
    ]
  },
  {
    id: 'bali',
    name: 'Bali',
    type: 'International',
    description: 'Known as the "Island of the Gods," Bali captivates with its dramatic volcanic mountains, iconic rice paddies, beaches, and coral reefs. The island is deeply spiritual, dotted with thousands of Hindu temples.',
    keyAttractions: ['Uluwatu Temple', 'Ubud Monkey Forest', 'Mount Batur', 'Tegalalang Rice Terrace'],
    bestTimeToVisit: 'April to October during the dry season.',
    imageUrl: 'https://picsum.photos/seed/bali/800/600',
    itinerary: [
      { day: 1, title: 'Seminyak & Sunsets', description: 'Arrive in Bali. Check into Seminyak, relax by the beach, and visit Tanah Lot temple for a stunning sunset.' },
      { day: 2, title: 'Ubud Culture', description: 'Head to Ubud. Walk through the Monkey Forest, visit the Royal Palace, and explore the Tegalalang Rice Terraces.' },
      { day: 3, title: 'Nusa Penida Day Trip', description: 'Take a fast boat to Nusa Penida. Visit Kelingking Beach and Broken Beach before returning for your flight.' }
    ]
  },
  {
    id: 'thailand',
    name: 'Thailand',
    type: 'International',
    description: 'The "Land of Smiles" is Southeast Asia’s most popular travel destination. Thailand offers a perfect mix of opulent royal palaces, ancient ruins, ornate temples, and world-renowned tropical beaches.',
    keyAttractions: ['The Grand Palace', 'Phi Phi Islands', 'Wat Arun', 'Chatuchak Market'],
    bestTimeToVisit: 'November to early April for cool and dry weather.',
    imageUrl: 'https://picsum.photos/seed/thailand/800/600',
    itinerary: [
      { day: 1, title: 'Bangkok Temples', description: 'Arrive in Bangkok. Visit the spectacular Grand Palace and Wat Phra Kaew, followed by a tuk-tuk ride to Wat Arun.' },
      { day: 2, title: 'Phuket Beaches', description: 'Fly to Phuket. Spend the day relaxing on Patong Beach and enjoy the vibrant local nightlife.' },
      { day: 3, title: 'Phi Phi Island Tour', description: 'Take a speedboat tour to the stunning Phi Phi Islands for snorkeling and swimming before your departure.' }
    ]
  },
  {
    id: 'vietnam',
    name: 'Vietnam',
    type: 'International',
    description: 'Vietnam is a country of staggering natural beauty and cultural complexities, of dynamic megacities and hill-tribe villages. Its compelling history and incredible street food make it a top destination.',
    keyAttractions: ['Ha Long Bay', 'Cu Chi Tunnels', 'Hoi An Ancient Town', 'Mekong Delta'],
    bestTimeToVisit: 'February to April and August to October for moderate temperatures.',
    imageUrl: 'https://picsum.photos/seed/vietnam/800/600',
    itinerary: [
      { day: 1, title: 'Hanoi Old Quarter', description: 'Arrive in Hanoi. Wander through the bustling Old Quarter, visit Hoan Kiem Lake, and enjoy traditional Pho.' },
      { day: 2, title: 'Ha Long Bay Cruise', description: 'Take a day trip to Ha Long Bay. Cruise among the thousands of towering limestone islands topped with rainforests.' },
      { day: 3, title: 'Ho Chi Minh City', description: 'Fly to Ho Chi Minh City. Visit the War Remnants Museum and the Cu Chi Tunnels before flying out.' }
    ]
  },
  {
    id: 'dubai',
    name: 'Dubai',
    type: 'International',
    description: 'Dubai is a city of superlatives, home to the world\'s tallest building, largest shopping malls, and artificial islands. It seamlessly blends deep-rooted Bedouin heritage with an ultra-modern lifestyle.',
    keyAttractions: ['Burj Khalifa', 'The Dubai Mall', 'Desert Safari', 'Palm Jumeirah'],
    bestTimeToVisit: 'November to March for pleasant winter weather.',
    imageUrl: 'https://picsum.photos/seed/dubai/800/600',
    itinerary: [
      { day: 1, title: 'Heights & Fountains', description: 'Arrive in Dubai. Visit the observation deck of the Burj Khalifa and watch the spectacular Dubai Fountain show.' },
      { day: 2, title: 'Desert Safari', description: 'Spend the morning shopping at The Dubai Mall. In the afternoon, embark on a thrilling Desert Safari with a BBQ dinner.' },
      { day: 3, title: 'Old Dubai & Departure', description: 'Explore the historic Al Fahidi neighborhood, ride an Abra across Dubai Creek, and visit the Gold Souk before leaving.' }
    ]
  }
];
