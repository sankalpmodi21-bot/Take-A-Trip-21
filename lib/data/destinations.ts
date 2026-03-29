export interface ItineraryPdf {
  title: string;
  link: string;
}

export interface MapRegion {
  id: string;
  name: string;
  info: string;
}

export interface Destination {
  id: string;
  name: string;
  type: 'Domestic' | 'International';
  description: string;
  keyAttractions: string[];
  bestTimeToVisit: string;
  itineraryPdfs: ItineraryPdf[];
  mapRegions: MapRegion[];
  imageUrl: string;
}

const defaultPdfs = [
  { title: 'Standard 3-Day Itinerary', link: '#' },
  { title: 'Adventure 5-Day Itinerary', link: '#' },
  { title: 'Luxury 7-Day Itinerary', link: '#' },
  { title: 'Budget 4-Day Itinerary', link: '#' },
  { title: 'Family 6-Day Itinerary', link: '#' },
  { title: 'Romantic 5-Day Honeymoon', link: '#' },
  { title: 'Backpacker 10-Day Trail', link: '#' },
  { title: 'Weekend Getaway 2-Day', link: '#' }
];

const defaultRegions = [
  { id: 'north', name: 'North Region', info: 'Explore the northern mountains and scenic valleys.' },
  { id: 'south', name: 'South Region', info: 'Discover the southern beaches and historical sites.' },
  { id: 'central', name: 'Central Region', info: 'Experience the bustling city life and cultural hubs.' }
];

export const destinations: Destination[] = [
  {
    id: 'kashmir',
    name: 'Kashmir',
    type: 'Domestic',
    description: 'Often referred to as "Paradise on Earth," Kashmir mesmerizes visitors with its snow-capped mountains, serene lakes, and lush Mughal gardens. It offers a perfect blend of natural beauty and rich cultural heritage, making it an unforgettable destination for nature lovers and adventure seekers alike.',
    keyAttractions: ['Dal Lake & Shikara Rides', 'Gulmarg Gondola', 'Pahalgam Valley', 'Shankaracharya Temple'],
    bestTimeToVisit: 'March to August for pleasant weather; December to February for snow.',
    imageUrl: 'https://picsum.photos/seed/kashmir/800/600',
    itineraryPdfs: defaultPdfs,
    mapRegions: defaultRegions
  },
  {
    id: 'himachal',
    name: 'Himachal',
    type: 'Domestic',
    description: 'Himachal Pradesh is a northern Indian state in the Himalayas, known for its trekking, climbing and skiing areas. It features strong Tibetan presence, beautiful hill stations, and breathtaking landscapes that provide a perfect escape from the bustling city life.',
    keyAttractions: ['Rohtang Pass', 'Mall Road, Shimla', 'Dharamshala Monasteries', 'Solang Valley'],
    bestTimeToVisit: 'March to June for summer escapes; October to February for winter sports.',
    imageUrl: 'https://picsum.photos/seed/himachal/800/600',
    itineraryPdfs: defaultPdfs,
    mapRegions: defaultRegions
  },
  {
    id: 'ladakh',
    name: 'Ladakh',
    type: 'Domestic',
    description: 'Known as the "Land of High Passes," Ladakh is a region characterized by its barren yet beautiful landscapes, crystal-clear lakes, and ancient Buddhist monasteries. It is a haven for bikers, trekkers, and peace-seekers.',
    keyAttractions: ['Pangong Lake', 'Nubra Valley', 'Magnetic Hill', 'Thiksey Monastery'],
    bestTimeToVisit: 'May to September when the roads are clear of snow.',
    imageUrl: 'https://picsum.photos/seed/ladakh/800/600',
    itineraryPdfs: defaultPdfs,
    mapRegions: defaultRegions
  },
  {
    id: 'andaman',
    name: 'Andaman',
    type: 'Domestic',
    description: 'The Andaman Islands are an Indian archipelago in the Bay of Bengal, known for their palm-lined, white-sand beaches, mangroves, and tropical rainforests. Coral reefs supporting marine life make it a premier destination for scuba diving and snorkeling.',
    keyAttractions: ['Radhanagar Beach', 'Cellular Jail', 'Ross Island', 'Elephant Beach'],
    bestTimeToVisit: 'October to May for clear skies and calm seas.',
    imageUrl: 'https://picsum.photos/seed/andaman/800/600',
    itineraryPdfs: defaultPdfs,
    mapRegions: defaultRegions
  },
  {
    id: 'kerala',
    name: 'Kerala',
    type: 'Domestic',
    description: 'Famously known as "God\'s Own Country," Kerala offers a diverse landscape of tranquil backwaters, lush tea gardens, pristine beaches, and rich wildlife. Its Ayurvedic treatments and unique cuisine add to the holistic travel experience.',
    keyAttractions: ['Alleppey Backwaters', 'Munnar Tea Gardens', 'Fort Kochi', 'Thekkady Wildlife Sanctuary'],
    bestTimeToVisit: 'September to March for comfortable, cool weather.',
    imageUrl: 'https://picsum.photos/seed/kerala/800/600',
    itineraryPdfs: defaultPdfs,
    mapRegions: defaultRegions
  },
  {
    id: 'north-east',
    name: 'North-east',
    type: 'Domestic',
    description: 'The North-East of India is an unexplored paradise comprising eight states, each with its unique culture, tribal heritage, and untouched natural beauty. From living root bridges to one-horned rhinos, it is a land of wonders.',
    keyAttractions: ['Kaziranga National Park', 'Tsomgo Lake', 'Living Root Bridges', 'Tawang Monastery'],
    bestTimeToVisit: 'October to mid-May to avoid the heavy monsoons.',
    imageUrl: 'https://picsum.photos/seed/northeast/800/600',
    itineraryPdfs: defaultPdfs,
    mapRegions: defaultRegions
  },
  {
    id: 'uttarakhand',
    name: 'Uttarakhand',
    type: 'Domestic',
    description: 'Often referred to as "Devbhoomi" (Land of the Gods), Uttarakhand is known for its Hindu pilgrimage sites, the majestic Himalayas, and the origin of the holy river Ganges. It is perfect for spirituality, yoga, and trekking.',
    keyAttractions: ['Nainital Lake', 'Valley of Flowers', 'Rishikesh Ashrams', 'Jim Corbett National Park'],
    bestTimeToVisit: 'March to June for pleasant weather; September to November for clear mountain views.',
    imageUrl: 'https://picsum.photos/seed/uttarakhand/800/600',
    itineraryPdfs: defaultPdfs,
    mapRegions: defaultRegions
  },
  {
    id: 'goa',
    name: 'Goa',
    type: 'Domestic',
    description: 'India\'s pocket-sized paradise, Goa is famous for its stellar beaches, vibrant nightlife, Portuguese heritage, and laid-back vibe. Whether you want to party till dawn or relax by the sea, Goa has it all.',
    keyAttractions: ['Baga & Calangute Beaches', 'Dudhsagar Waterfalls', 'Basilica of Bom Jesus', 'Anjuna Flea Market'],
    bestTimeToVisit: 'November to February for the best weather and festive atmosphere.',
    imageUrl: 'https://picsum.photos/seed/goa/800/600',
    itineraryPdfs: defaultPdfs,
    mapRegions: defaultRegions
  },
  {
    id: 'singapore',
    name: 'Singapore',
    type: 'International',
    description: 'A global financial center with a tropical climate and multicultural population, Singapore is a marvel of modern architecture seamlessly blended with lush green spaces. It is a paradise for shoppers and foodies.',
    keyAttractions: ['Gardens by the Bay', 'Marina Bay Sands', 'Sentosa Island', 'Universal Studios'],
    bestTimeToVisit: 'February to April for slightly drier weather, though it is a year-round destination.',
    imageUrl: 'https://picsum.photos/seed/singapore/800/600',
    itineraryPdfs: defaultPdfs,
    mapRegions: defaultRegions
  },
  {
    id: 'malaysia',
    name: 'Malaysia',
    type: 'International',
    description: 'Malaysia offers a beautiful mix of Malay, Chinese, Indian, and European cultural influences. From the towering skyscrapers of Kuala Lumpur to the pristine beaches of Langkawi, it truly is "Truly Asia."',
    keyAttractions: ['Petronas Twin Towers', 'Batu Caves', 'Langkawi Cable Car', 'Mount Kinabalu'],
    bestTimeToVisit: 'December to April for the West Coast; April to October for the East Coast.',
    imageUrl: 'https://picsum.photos/seed/malaysia/800/600',
    itineraryPdfs: defaultPdfs,
    mapRegions: defaultRegions
  },
  {
    id: 'bali',
    name: 'Bali',
    type: 'International',
    description: 'Known as the "Island of the Gods," Bali captivates with its dramatic volcanic mountains, iconic rice paddies, beaches, and coral reefs. The island is deeply spiritual, dotted with thousands of Hindu temples.',
    keyAttractions: ['Uluwatu Temple', 'Ubud Monkey Forest', 'Mount Batur', 'Tegalalang Rice Terrace'],
    bestTimeToVisit: 'April to October during the dry season.',
    imageUrl: 'https://picsum.photos/seed/bali/800/600',
    itineraryPdfs: defaultPdfs,
    mapRegions: defaultRegions
  },
  {
    id: 'thailand',
    name: 'Thailand',
    type: 'International',
    description: 'The "Land of Smiles" is Southeast Asia’s most popular travel destination. Thailand offers a perfect mix of opulent royal palaces, ancient ruins, ornate temples, and world-renowned tropical beaches.',
    keyAttractions: ['The Grand Palace', 'Phi Phi Islands', 'Wat Arun', 'Chatuchak Market'],
    bestTimeToVisit: 'November to early April for cool and dry weather.',
    imageUrl: 'https://picsum.photos/seed/thailand/800/600',
    itineraryPdfs: defaultPdfs,
    mapRegions: defaultRegions
  },
  {
    id: 'vietnam',
    name: 'Vietnam',
    type: 'International',
    description: 'Vietnam is a country of staggering natural beauty and cultural complexities, of dynamic megacities and hill-tribe villages. Its compelling history and incredible street food make it a top destination.',
    keyAttractions: ['Ha Long Bay', 'Cu Chi Tunnels', 'Hoi An Ancient Town', 'Mekong Delta'],
    bestTimeToVisit: 'February to April and August to October for moderate temperatures.',
    imageUrl: 'https://picsum.photos/seed/vietnam/800/600',
    itineraryPdfs: defaultPdfs,
    mapRegions: defaultRegions
  },
  {
    id: 'dubai',
    name: 'Dubai',
    type: 'International',
    description: 'Dubai is a city of superlatives, home to the world\'s tallest building, largest shopping malls, and artificial islands. It seamlessly blends deep-rooted Bedouin heritage with an ultra-modern lifestyle.',
    keyAttractions: ['Burj Khalifa', 'The Dubai Mall', 'Desert Safari', 'Palm Jumeirah'],
    bestTimeToVisit: 'November to March for pleasant winter weather.',
    imageUrl: 'https://picsum.photos/seed/dubai/800/600',
    itineraryPdfs: defaultPdfs,
    mapRegions: defaultRegions
  }
];
