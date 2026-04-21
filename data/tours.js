export const tours = [
  {
    id: 1,
    city: "Skardu",
    title: "Majestic Tour",
    fullTitle: "10-Day Majestic Tour of Skardu, Hunza & Fairy Meadows",
    rating: 5,
    reviews: 28,
    minAge: 12,
    maxPeople: 20,
    price: 1250,
    description:
      "Embark on a 10-day journey through the breathtaking landscapes of Skardu, Hunza Valley, and Fairy Meadows. Explore majestic mountains, sparkling lakes, historic forts, and vibrant local culture. Wake up to views of Nanga Parbat, sail on turquoise waters, and experience the true magic of northern Pakistan.",
    images: [
      "/assets/tours/tour1.png",
      "/assets/tours/tour2.png",
      "/assets/tours/tour3.png",
      "/assets/tours/tour4.png",
      "/assets/tours/tour5.png",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Islamabad",
        description:
          "Arrive at Islamabad Airport and transfer to Hotel. Optional sightseeing in Islamabad & Rawalpindi. Overnight stay at hotel.",
      },
      {
        day: 2,
        title: "Islamabad → Skardu",
        description:
          "Breakfast at hotel. Fly to Skardu (approx. 45 minutes). Visit Shangrila Resort, Upper & Lower Kachura Lakes. Explore Katpana Desert. Dinner and overnight stay in Apex Hotels and Resorts Skardu.",
      },
      {
        day: 3,
        title: "Marsur Rock View Point",
        description:
          "Breakfast at hotel. Drive to Hussain Abad and trek to Marsur Rock View Point (approx. 3 hours). Visit Manthal Buddha and Sadpara Lake. Return to hotel for dinner and overnight stay at Apex Hotels and Resorts Skardu.",
      },
      {
        day: 4,
        title: "Kharpocho Fort, Blind Lake & Sarfaranga Cold Desert",
        description:
          "Breakfast at hotel. Trek to Kharpocho Fort and explore the historic site. Drive to Sarfaranga Cold Desert for unique desert landscapes. Visit Blind Lake and Shigar Valley. Overnight stay in Apex Hotels and Resorts Skardu.",
      },
      {
        day: 5,
        title: "Skardu → Hunza Valley",
        description:
          "Breakfast at hotel. Drive via Skardu-Jaglot Road. Stop at the meeting point of the Karakoram, Himalaya & Hindukush ranges. Lunch at Gilgit and photo stops at Old Silk Road & Rakaposhi Viewpoints. Arrive in Hunza for dinner and overnight stay at Apex Hotels and Resorts Attabad lake.",
      },
      {
        day: 6,
        title: "Hunza Valley Excursion",
        description:
          "Breakfast at hotel. Visit Baltit Fort (700 years old) and Altit Fort (1000 years old) with guided tours. Lunch at Khas-basi Café (run by women entrepreneurs). Drive to Duikar for panoramic views of Hunza, Nagar, Golden Peak, Rusk Lake & Rakaposhi. Overnight stay in Apex Hotels and Resorts Attabad Lake, Hunza.",
      },
      {
        day: 7,
        title: "Gojal Valley Excursion",
        description:
          "Breakfast at hotel. Boating at Attabad Lake. Visit Gulmit Village & Women Carpet Center. Cross Hussaini Suspension Bridge and explore Borith Lake. Drive to Gilgit for dinner and overnight stay.",
      },
      {
        day: 8,
        title: "Gilgit → Fairy Meadows",
        description:
          "Breakfast at hotel. Drive to Raikot Bridge, jeep ride to Tatto Valley. Trek (or optional horse ride) to Fairy Meadows. Lunch and explore the meadows with stunning views of Nanga Parbat. Dinner and overnight stay at Fairy Meadows.",
      },
      {
        day: 9,
        title: "Nanga Parbat Base Camp / Bayal Base Camp",
        description:
          "Breakfast at hotel. Trek to Nanga Parbat Base Camp or Bayal Camp (depending on snow). Return to Fairy Meadows for lunch. Afternoon free for photography and relaxation. Dinner and overnight stay.",
      },
      {
        day: 10,
        title: "Fairy Meadows → Naran → Islamabad & Departure",
        description:
          "Breakfast at Fairy Meadows. Trek back to Tatto Valley and jeep ride to Raikot. Drive via Babusar Pass & Lulusar Lake to Islamabad. Lunch en route. Drop-off at Islamabad Airport for onward departure.",
      },
    ],
    included: [
      "Accommodation: 3-Star Hotels & Apex Resorts",
      "Transportation: Private 4x4 Jeep and Car",
      "Guide: Licensed English-Speaking Guide",
      "Entry Tickets: All Forts and Museum Entry Tickets",
      "Meals: Breakfast and Dinner Daily",
      "Invitation Letter: Tourist Visa Invitation Letter",
    ],
    notIncluded: [
      "International & Domestic Flights",
      "Lunch and Snacks",
      "Personal Equipment",
      "Travel Insurance",
      "Tips and Gratuities",
    ],
    faqs: [
      {
        q: "What is the best time to visit Skardu and Hunza?",
        a: "The best time to visit is from May to October when the weather is pleasant and all roads are open. July to September is ideal for Fairy Meadows.",
      },
      {
        q: "Is this tour suitable for families?",
        a: "Yes, this tour is family-friendly. The treks are moderate and can be replaced with horse rides for those who prefer not to hike.",
      },
      {
        q: "What should I pack for this tour?",
        format: "bullets",
        intro: "We recommend packing:",
        a: `Warm layers and a good jacket\nComfortable hiking shoes\nSunscreen and sunglasses\nPersonal medications\nPower bank (electricity can be limited)\nCamera for incredible views`,
      },
    ],
    relatedTours: [
      {
        id: 2,
        title: "Hunza Valley & Attabad Lake Tour",
        price: 750,
        img: "/assets/tours/tour1.png",
      },
      {
        id: 3,
        title: "Skardu Lakes & Shigar Valley Tour",
        price: 650,
        img: "/assets/tours/tour1.png",
      },
      {
        id: 4,
        title: "Hunza & Khunjerab Pass Adventure",
        price: 850,
        img: "/assets/tours/tour1.png",
      },
    ],
  },
  {
    id: 2,
    city: "Hunza",
    title: "Hunza & Attabad Lake",
    fullTitle: "5-Day Hunza Valley & Attabad Lake Tour",
    rating: 5,
    reviews: 42,
    minAge: 10,
    maxPeople: 25,
    price: 750,
    description:
      "Embark on an unforgettable journey through the spectacular landscapes of northern Pakistan with Apex Tours and Adventures. This tour takes you to the breathtaking valleys of Hunza Valley, where travelers experience majestic mountains, historic forts, and vibrant local culture. From the scenic drive along the Karakoram Highway to the crystal-clear waters of Attabad Lake, every moment of this journey offers stunning views and memorable experiences.",
    images: [
      "/assets/tours/tour1.png",
      "/assets/tours/tour2.png",
      "/assets/tours/tour3.png",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Gilgit – Hunza",
        description:
          "Arrival at Gilgit Airport. Drive to Hunza via the Karakoram Highway. Stop at Rakaposhi viewpoint for photography. Arrival in Hunza and hotel check-in. Overnight stay at Apex Hotels and Resorts Hussaini.",
      },
      {
        day: 2,
        title: "Hunza Sightseeing",
        description:
          "Visit historic Baltit Fort. Explore Altit Fort and Royal Garden. Walk through Karimabad Bazaar. Sunset at Eagle's Nest viewpoint. Overnight stay at Apex Hotels and Resorts Attabad lake.",
      },
      {
        day: 3,
        title: "Attabad Lake – Passu",
        description:
          "Visit the beautiful Attabad Lake. Optional boating experience at the lake. Explore Passu Cones and Hussaini Suspension Bridge. Return to hotel. Overnight stay at Apex Hotels and Resorts Hussaini Gojal.",
      },
      {
        day: 4,
        title: "Khunjerab Pass Excursion",
        description:
          "Early morning drive to Khunjerab Pass. Explore Khunjerab National Park and scenic viewpoints. Return to Hunza. Overnight stay at Apex Hotels and Resorts Hussaini Gojal.",
      },
      {
        day: 5,
        title: "Hunza – Gilgit (Departure)",
        description:
          "Breakfast at hotel. Drive back to Gilgit. Transfer to airport for departure.",
      },
    ],
    included: [
      "Accommodation: Apex Hotels & Resorts",
      "Transportation: Private Vehicle",
      "Guide: English-Speaking Guide",
      "Breakfast & Dinner Daily",
    ],
    notIncluded: ["Flights", "Lunch", "Personal Expenses", "Boating fees"],
    faqs: [
      {
        q: "Can I extend my stay in Hunza?",
        a: "Yes, we can customize the tour and add extra days upon request.",
      },
    ],
    relatedTours: [
      {
        id: 1,
        title: "10-Day Majestic Tour of Skardu, Hunza & Fairy Meadows",
        price: 1250,
        img: "/assets/tours/tour1.png",
      },
      {
        id: 3,
        title: "Skardu Lakes & Shigar Valley Tour",
        price: 650,
        img: "/assets/tours/tour1.png",
      },
    ],
  },
  {
    id: 3,
    city: "Skardu",
    title: "Skardu Lakes & Shigar",
    fullTitle: "5-Day Skardu Lakes & Shigar Valley Tour",
    rating: 4,
    reviews: 19,
    minAge: 10,
    maxPeople: 25,
    price: 650,
    description:
      "Embark on a spectacular adventure to the majestic landscapes of Skardu with Apex Tours and Adventures. Surrounded by towering mountains and crystal-clear lakes, Skardu is one of the most breathtaking destinations in northern Pakistan. This tour offers a perfect combination of natural beauty, cultural exploration, and relaxing moments in scenic valleys.",
    images: [
      "/assets/tours/tour1.png",
      "/assets/tours/tour2.png",
      "/assets/tours/tour3.png",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Skardu",
        description:
          "Arrival at Skardu Airport. Transfer to hotel and check-in. Short city tour and visit Skardu Bazaar. Evening free for relaxation. Overnight stay in Apex Hotels and Resorts Skardu.",
      },
      {
        day: 2,
        title: "Satpara Lake & Buddha Rock",
        description:
          "Visit the beautiful Satpara Lake. Explore Buddha Rock and nearby viewpoints. Enjoy scenic views of surrounding mountains. Return to hotel. Overnight stay in Apex Hotels and Resorts Skardu.",
      },
      {
        day: 3,
        title: "Shigar Valley Exploration",
        description:
          "Drive to Shigar Valley. Visit historic Shigar Fort. Walk through the traditional village and gardens. Enjoy mountain scenery and local culture. Return to Skardu for overnight stay.",
      },
      {
        day: 4,
        title: "Shangrila & Upper Kachura Lake",
        description:
          "Visit famous Shangrila Resort. Explore Upper Kachura Lake and surrounding landscapes. Photography and leisure time by the lake. Return to Skardu. Overnight stay in Apex Hotels and Resorts Skardu.",
      },
      {
        day: 5,
        title: "Departure",
        description: "Breakfast at hotel. Transfer to airport for departure.",
      },
    ],
    included: [
      "Accommodation",
      "Transportation",
      "Guide",
      "Breakfast & Dinner",
    ],
    notIncluded: ["Flights", "Lunch", "Personal Expenses"],
    faqs: [],
    relatedTours: [
      {
        id: 1,
        title: "10-Day Majestic Tour of Skardu, Hunza & Fairy Meadows",
        price: 1250,
        img: "/assets/tours/tour1.png",
      },
      {
        id: 2,
        title: "Hunza Valley & Attabad Lake Tour",
        price: 750,
        img: "/assets/tours/tour1.png",
      },
    ],
  },
  {
    id: 4,
    city: "Hunza",
    title: "Hunza & Khunjerab",
    fullTitle: "7-Day Hunza & Khunjerab Pass Adventure Tour",
    rating: 5,
    reviews: 35,
    minAge: 10,
    maxPeople: 25,
    price: 850,
    description:
      "Experience the dramatic landscapes and cultural treasures of Hunza Valley on this extended adventure tour. This journey takes travelers along the legendary Karakoram Highway, passing through picturesque villages, turquoise lakes, and breathtaking mountain passes. From the iconic beauty of Attabad Lake to the world-famous Khunjerab Pass, visitors will experience nature at its most spectacular.",
    images: [
      "/assets/tours/tour1.png",
      "/assets/tours/tour2.png",
      "/assets/tours/tour3.png",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Gilgit – Hunza",
        description:
          "Arrival at Gilgit Airport. Drive to Hunza via Karakoram Highway. Stop at Rakaposhi viewpoint. Arrival in Hunza and hotel check-in. Overnight stay at Apex Hotels and Resorts Attabad lake Hunza.",
      },
      {
        day: 2,
        title: "Hunza Cultural Tour",
        description:
          "Visit Baltit Fort. Explore Altit Fort and Royal Garden. Walk through Karimabad Bazaar. Sunset at Eagle's Nest viewpoint. Overnight stay at Apex Hotels and Resorts Attabad lake Hunza.",
      },
      {
        day: 3,
        title: "Attabad Lake & Passu",
        description:
          "Visit Attabad Lake. Optional boating experience. Explore Passu Cones and Hussaini Bridge. Overnight stay at Apex Hotels and Resorts Hussaini Gojal.",
      },
      {
        day: 4,
        title: "Khunjerab Pass Excursion",
        description:
          "Drive to Khunjerab Pass. Explore Khunjerab National Park. Return to Hunza. Overnight stay at Apex Hotels and Resorts Attabad Lake Hunza.",
      },
      {
        day: 5,
        title: "Gulmit & Hopper Valley",
        description:
          "Visit Gulmit village. Explore Hopper Glacier viewpoint. Photography and cultural exploration. Overnight stay in Apex Hotels and Resorts Hussaini Gojal.",
      },
      {
        day: 6,
        title: "Hunza Free Exploration",
        description:
          "Free day for sightseeing and shopping. Explore local cafes and scenic viewpoints. Overnight stay in Hunza.",
      },
      {
        day: 7,
        title: "Hunza – Gilgit (Departure)",
        description: "Breakfast at hotel. Drive to Gilgit airport.",
      },
    ],
    included: [
      "Accommodation",
      "Transportation",
      "Guide",
      "Breakfast & Dinner",
    ],
    notIncluded: ["Flights", "Lunch", "Boating fees", "Personal Expenses"],
    faqs: [],
    relatedTours: [],
  },
  {
    id: 5,
    city: "Lahore",
    title: "Heritage & Culture Tour",
    fullTitle: "5-Day Lahore Heritage & Culture Tour",
    rating: 5,
    reviews: 0,
    minAge: 10,
    maxPeople: 25,
    price: 450,
    description:
      "Explore the rich history and vibrant culture of Lahore, the cultural capital of Pakistan, with this 5-day Lahore heritage tour. This journey takes you through centuries-old Mughal architecture, colonial landmarks, and lively bazaars that define the city's timeless charm. From the majestic Badshahi Mosque to the historic Lahore Fort, travelers will experience the essence of Lahore's heritage. Alongside sightseeing, enjoy traditional cuisine, bustling markets, and the warm hospitality that makes Lahore a must-visit destination in Pakistan.",
    images: [
      "/assets/tours/tour1.png",
      "/assets/tours/tour2.png",
      "/assets/tours/tour3.png",
      "/assets/tours/tour4.png",
      "/assets/tours/tour5.png",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Lahore",
        description:
          "Arrival at Allama Iqbal International Airport. Transfer to hotel and check-in. In the evening, visit Liberty Market for shopping and leisure. Overnight stay in Lahore.",
      },
      {
        day: 2,
        title: "Lahore Historic Landmarks",
        description:
          "Visit the iconic Badshahi Mosque followed by exploration of Lahore Fort. Walk through the historic Walled City of Lahore and enjoy local cuisine at Food Street. Overnight stay in Lahore.",
      },
      {
        day: 3,
        title: "Gardens & Museums",
        description:
          "Visit the beautiful Shalimar Gardens and explore cultural history at Lahore Museum. Later, enjoy shopping at Anarkali Bazaar. Overnight stay in Lahore.",
      },
      {
        day: 4,
        title: "Wagah Border Ceremony",
        description:
          "Drive to Wagah Border and witness the famous flag-lowering ceremony between Pakistan and India. Return to Lahore. Overnight stay in Lahore.",
      },
      {
        day: 5,
        title: "Departure",
        description:
          "Breakfast at hotel. Transfer to Allama Iqbal International Airport for departure.",
      },
    ],
    included: [
      "Accommodation: 3-Star Hotel",
      "Transportation: Private Vehicle",
      "Guide: English-Speaking Guide",
      "Entry Tickets: All Forts and Museum Entry Tickets",
      "Meals: Breakfast Daily",
    ],
    notIncluded: [
      "Flights",
      "Lunch & Dinner",
      "Personal Expenses",
      "Travel Insurance",
      "Tips",
    ],
    faqs: [
      {
        q: "What is the best time to visit Lahore?",
        a: "The best time to visit Lahore is from October to March when the weather is pleasant for sightseeing.",
      },
      {
        q: "Is this tour suitable for families?",
        a: "Yes, this tour is family-friendly and suitable for all ages.",
      },
    ],
    relatedTours: [
      {
        id: 1,
        title: "10-Day Majestic Tour of Skardu, Hunza & Fairy Meadows",
        price: 1250,
        img: "/assets/tours/tour1.png",
      },
      {
        id: 2,
        title: "Hunza Valley & Attabad Lake Tour",
        price: 750,
        img: "/assets/tours/tour1.png",
      },
    ],
  },
  {
    id: 6,
    city: "Islamabad",
    title: "Islamabad & Murree Hills",
    fullTitle: "5-Day Islamabad & Murree Hills Tour",
    rating: 5,
    reviews: 0,
    minAge: 8,
    maxPeople: 30,
    price: 400,
    description:
      "Discover the perfect blend of modern city life and scenic hill landscapes with this 5-day Islamabad & Murree tour. Explore the capital city of Islamabad, known for its cleanliness, architecture, and natural beauty, along with the lush green hills of Murree. From the iconic Faisal Mosque to the panoramic views of the Margalla Hills, and the charming streets of Murree, this tour offers a relaxing and refreshing getaway. Visitors can enjoy cool weather, scenic viewpoints, and cultural attractions, making it an ideal family and leisure trip.",
    images: [
      "/assets/tours/tour1.png",
      "/assets/tours/tour2.png",
      "/assets/tours/tour3.png",
      "/assets/tours/tour4.png",
      "/assets/tours/tour5.png",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Islamabad",
        description:
          "Arrival at Islamabad International Airport. Transfer to hotel and relax. In the evening, visit Centaurus Mall for shopping and leisure. Overnight stay in Islamabad.",
      },
      {
        day: 2,
        title: "Islamabad City Tour",
        description:
          "Visit the iconic Faisal Mosque followed by a trip to Pakistan Monument. Explore cultural heritage at Lok Virsa Museum. Overnight stay in Islamabad.",
      },
      {
        day: 3,
        title: "Islamabad → Murree",
        description:
          "Drive towards Murree. Explore the famous Mall Road and enjoy scenic views from Kashmir Point. Overnight stay in Murree.",
      },
      {
        day: 4,
        title: "Patriata Hills Excursion",
        description:
          "Visit Patriata Chairlift and enjoy breathtaking panoramic views of surrounding mountains and forests. Return to Murree. Overnight stay in Murree.",
      },
      {
        day: 5,
        title: "Murree → Islamabad (Departure)",
        description:
          "Drive back to Islamabad. Transfer to Islamabad International Airport for departure.",
      },
    ],
    included: [
      "Accommodation: 3-Star Hotels",
      "Transportation: Private Vehicle",
      "Guide: English-Speaking Guide",
      "Entry Tickets: All Museum and Monument Entry Tickets",
      "Meals: Breakfast Daily",
    ],
    notIncluded: [
      "Flights",
      "Lunch & Dinner",
      "Chairlift Ticket at Patriata",
      "Personal Expenses",
      "Travel Insurance",
      "Tips",
    ],
    faqs: [
      {
        q: "What is the best time to visit Islamabad and Murree?",
        a: "The best time to visit is from April to October for pleasant weather. Summer months (June-August) are perfect for escaping the heat, while winter (December-February) offers snowfall in Murree.",
      },
      {
        q: "Is this tour suitable for families?",
        a: "Yes, this tour is perfect for families, couples, and senior citizens as it involves minimal walking and easy sightseeing.",
      },
      {
        q: "What should I pack for this tour?",
        format: "bullets",
        intro: "We recommend packing:",
        a: "Light clothes for Islamabad\nWarm jacket for Murree evenings\nComfortable walking shoes\nSunscreen and sunglasses\nCamera for scenic views",
      },
    ],
    relatedTours: [
      {
        id: 1,
        title: "10-Day Majestic Tour of Skardu, Hunza & Fairy Meadows",
        price: 1250,
        img: "/assets/tours/tour1.png",
      },
      {
        id: 2,
        title: "Hunza Valley & Attabad Lake Tour",
        price: 750,
        img: "/assets/tours/tour1.png",
      },
    ],
  },
  {
    id: 7,
    city: "Karachi",
    title: "City & Beach Tour",
    fullTitle: "5-Day Karachi City & Beach Tour",
    rating: 5,
    reviews: 0,
    minAge: 8,
    maxPeople: 25,
    price: 380,
    description:
      "Discover the vibrant energy of Karachi, the economic and cultural hub of Pakistan, on this 5-day Karachi city and beach tour. This journey offers a perfect mix of historic landmarks, bustling markets, modern city life, and scenic beaches along the Arabian Sea. From visiting the iconic Mazar-e-Quaid to relaxing at Clifton Beach and exploring vibrant bazaars, this tour is ideal for travelers seeking culture, food, shopping, and coastal relaxation. Karachi's diverse lifestyle, delicious street food, and lively atmosphere make it a must-visit destination in Pakistan.",
    images: [
      "/assets/tours/tour1.png",
      "/assets/tours/tour2.png",
      "/assets/tours/tour3.png",
      "/assets/tours/tour4.png",
      "/assets/tours/tour5.png",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Karachi",
        description:
          "Arrival at Jinnah International Airport. Transfer to hotel and relax. In the evening, visit Clifton Beach for a refreshing seaside experience. Overnight stay in Karachi.",
      },
      {
        day: 2,
        title: "Karachi City Tour",
        description:
          "Visit Mazar-e-Quaid followed by a tour of National Museum of Pakistan. Later, enjoy shopping at Saddar Bazaar. Overnight stay in Karachi.",
      },
      {
        day: 3,
        title: "Beach Exploration",
        description:
          "Excursion to Hawksbay Beach. Spend the day enjoying leisure time, photography, and sea views. Return to hotel. Overnight stay in Karachi.",
      },
      {
        day: 4,
        title: "Markets & Food Tour",
        description:
          "Explore local markets and experience Karachi's famous street food culture. Discover the lively atmosphere and flavors of Karachi. Overnight stay in Karachi.",
      },
      {
        day: 5,
        title: "Departure",
        description:
          "Breakfast at hotel. Transfer to Jinnah International Airport for departure. End of services.",
      },
    ],
    included: [
      "Accommodation: 3-Star Hotel",
      "Transportation: Private Vehicle",
      "Guide: English-Speaking Guide",
      "Entry Tickets: National Museum Entry Ticket",
      "Meals: Breakfast Daily",
    ],
    notIncluded: [
      "Flights",
      "Lunch & Dinner",
      "Beach Activities & Water Sports",
      "Personal Expenses",
      "Travel Insurance",
      "Tips",
    ],
    faqs: [
      {
        q: "What is the best time to visit Karachi?",
        a: "The best time to visit Karachi is from November to February when the weather is cool and pleasant. Avoid visiting from May to August as it's extremely hot and humid.",
      },
      {
        q: "Is this tour suitable for families?",
        a: "Yes, this tour is family-friendly and suitable for all age groups. The beaches and city attractions offer something for everyone.",
      },
      {
        q: "What should I pack for this tour?",
        format: "bullets",
        intro: "We recommend packing:",
        a: "Light cotton clothes\nSwimwear for the beach\nSunscreen and sunglasses\nHat or cap\nComfortable walking shoes\nCamera",
      },
    ],
    relatedTours: [
      {
        id: 1,
        title: "10-Day Majestic Tour of Skardu, Hunza & Fairy Meadows",
        price: 1250,
        img: "/assets/tours/tour1.png",
      },
      {
        id: 5,
        title: "5-Day Islamabad & Murree Hills Tour",
        price: 400,
        img: "/assets/tours/tour1.png",
      },
    ],
  },
  {
    id: 8,
    city: "Skardu",
    title: "Deosai Wildlife Tour",
    fullTitle:
      "7-Day Deosai National Park Wildlife Tour – Skardu & Northern Pakistan",
    rating: 5,
    reviews: 0,
    minAge: 12,
    maxPeople: 20,
    price: 950,
    description:
      "Experience an unforgettable 7-day Deosai National Park wildlife tour from Islamabad to the breathtaking landscapes of northern Pakistan. Travel through the lush valleys of Kaghan Valley, cross the iconic Babusar Pass, and explore the beauty of Skardu before entering the vast wilderness of Deosai National Park. This tour combines jeep safari, camping, sightseeing, and nature exploration, offering a perfect blend of adventure and relaxation. Travelers can choose to travel by road from Islamabad or take a direct flight to Skardu. Sitting at an altitude of around 4,000 meters, Deosai requires light acclimatization. The ideal travel season is mid-July to September, when snow melts and vibrant wildflowers cover the plains.",
    images: [
      "/assets/tours/tour1.png",
      "/assets/tours/tour2.png",
      "/assets/tours/tour3.png",
      "/assets/tours/tour4.png",
      "/assets/tours/tour5.png",
    ],
    itinerary: [
      {
        day: 1,
        title: "Islamabad → Naran / Kaghan",
        description:
          "Depart from Islamabad after breakfast and travel via Abbottabad, Mansehra, and Balakot. Enjoy scenic landscapes en route to Naran / Kaghan. Overnight stay at hotel.",
      },
      {
        day: 2,
        title: "Kaghan → Skardu (via Babusar Pass)",
        description:
          "Early departure towards Babusar Pass with a stop at Lulusar Lake. Continue via Diamer and join the Karakoram Highway along the Indus River to reach Skardu. Overnight stay in Apex Hotels and Resorts Skardu.",
      },
      {
        day: 3,
        title: "Skardu → Deosai National Park",
        description:
          "Travel via Sadpara Lake towards the vast plains of Deosai National Park. Set up camp at Bara Pani and enjoy the untouched natural beauty.",
      },
      {
        day: 4,
        title: "Deosai Exploration (Full Day)",
        description:
          "Full-day exploration of Deosai Plains with activities like fishing, light hiking, photography, and BBQ dinner under the open sky. Overnight camping.",
      },
      {
        day: 5,
        title: "Deosai → Skardu Excursion",
        description:
          "Return to Skardu and explore Shangrila Resort, Kharpocho Fort, and Shigar Desert. Overnight stay in Skardu.",
      },
      {
        day: 6,
        title: "Skardu → Naran / Besham",
        description:
          "Departure from Skardu via the Karakoram Highway towards Naran or Besham. Enjoy scenic stops and photography along the route.",
      },
      {
        day: 7,
        title: "Naran / Besham → Islamabad / Rawalpindi",
        description:
          "Return journey to Islamabad / Rawalpindi. End of tour with drop-off at hotel or airport.",
      },
    ],
    included: [
      "Accommodation: 3-Star Hotels & Camping at Deosai",
      "Transportation: Private 4x4 Jeep and Car",
      "Guide: Licensed English-Speaking Guide",
      "Camping Equipment: Tents, Sleeping Bags, Mattresses",
      "Meals: Breakfast, Dinner & BBQ Night",
      "Entry Tickets: Deosai National Park Entry Fee",
      "Invitation Letter: Tourist Visa Invitation Letter",
    ],
    notIncluded: [
      "International & Domestic Flights",
      "Lunch and Snacks",
      "Personal Equipment",
      "Travel Insurance",
      "Tips and Gratuities",
      "Fishing Equipment",
    ],
    faqs: [
      {
        q: "What is the best time to visit Deosai National Park?",
        a: "The best time to visit Deosai is from mid-July to September when the snow melts, wildflowers bloom, and the park is fully accessible.",
      },
      {
        q: "Is altitude sickness a concern in Deosai?",
        a: "Deosai sits at around 4,000 meters (13,000 feet). Light acclimatization is recommended. We suggest spending a day in Skardu before heading to Deosai.",
      },
      {
        q: "What should I pack for this tour?",
        format: "bullets",
        intro: "We recommend packing:",
        a: "Warm layers and a heavy jacket (temperatures drop at night)\nComfortable hiking shoes\nSunscreen, sunglasses, and hat\nPersonal medications (including Diamox if prone to altitude sickness)\nPower bank (limited electricity at campsite)\nCamera for wildlife and landscapes\nInsect repellent",
      },
      {
        q: "Can I take a flight instead of road travel?",
        a: "Yes, travelers can opt for a direct flight from Islamabad to Skardu instead of the 2-day road journey. Please contact us for flight-inclusive pricing.",
      },
    ],
    relatedTours: [
      {
        id: 1,
        title: "10-Day Majestic Tour of Skardu, Hunza & Fairy Meadows",
        price: 1250,
        img: "/assets/tours/tour1.png",
      },
      {
        id: 3,
        title: "5-Day Skardu Lakes & Shigar Valley Tour",
        price: 650,
        img: "/assets/tours/tour1.png",
      },
    ],
  },
  {
    id: 9,
    city: "Hunza",
    title: "Hunza & Gojal Overland",
    fullTitle:
      "08 Days Hunza & Gojal Valley Overland Tour – Karakoram Highway Adventure Pakistan",
    rating: 5,
    reviews: 0,
    minAge: 10,
    maxPeople: 20,
    price: 1100,
    description:
      "Embark on an unforgettable 8-day overland journey along the legendary Karakoram Highway to the breathtaking valleys of Hunza Valley and Gojal Valley, featuring comfortable hotel stays throughout the tour. Travel through dramatic landscapes where the Karakoram Range, Himalayas, and Hindu Kush converge. Known as the Eighth Wonder of the World, the Karakoram Highway offers some of the most spectacular mountain scenery on Earth. Spend quality time in Hunza, a region renowned for its peaceful environment, Ismaili Muslim culture, and exceptional hospitality. Enjoy scenic walks, explore glaciers flowing from towering peaks, and experience authentic village life surrounded by some of the world's highest mountains. This tour is ideal for travelers seeking soft adventure, cultural exploration, and iconic mountain landscapes in northern Pakistan.",
    images: [
      "/assets/tours/tour1.png",
      "/assets/tours/tour2.png",
      "/assets/tours/tour3.png",
      "/assets/tours/tour4.png",
      "/assets/tours/tour5.png",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Islamabad → Naran / Besham",
        description:
          "Arrival in Islamabad. After meet & greet, drive towards Naran or Besham. En route, optional visit to Taxila, an ancient center of Gandhara civilization. Continue via Mansehra to join the Karakoram Highway. Dinner and overnight stay at hotel. (Drive: 4–6 hours)",
      },
      {
        day: 2,
        title: "Naran / Besham → Gilgit (Indus River Journey)",
        description:
          "Early departure towards Gilgit. Travel along the dramatic Indus River gorge, following the historic Silk Route. Highlights include: Rock carvings at Shatial, Lunch stop at Chilas, Viewpoint of Nanga Parbat (8,125 m) known as the 'Killer Mountain', Scenic views of Rakaposhi and surrounding ranges. Dinner and overnight stay in Gilgit. (Drive: 6–7 hours)",
      },
      {
        day: 3,
        title: "Gilgit → Hunza Valley (Karimabad)",
        description:
          "After breakfast, visit the ancient Buddha carving at Kargah Buddha. Continue along the Hunza River and stop at Rakaposhi Viewpoint before reaching Hunza Valley. Arrive in Karimabad and enjoy panoramic mountain views. Dinner and overnight stay. (Drive: 2–3 hours)",
      },
      {
        day: 4,
        title: "Hunza Valley Exploration",
        description:
          "Full day to explore Hunza Valley. Activities include: Visit Baltit Fort and Altit Fort, Explore Karimabad Bazaar, Scenic views of Rakaposhi, Ultar Peak, and Golden Peak, Optional walk to Ultar Glacier or village trails. Dinner and overnight stay in Hunza.",
      },
      {
        day: 5,
        title: "Hunza → Gojal Valley → Passu",
        description:
          "Drive towards Gojal Valley (Upper Hunza). Stop at the stunning Attabad Lake and continue to Gulmit and Passu. Explore: Gulmit village and local culture, Borit Lake and Gulkin Glacier, Views of the iconic Passu Cones. Dinner and overnight stay in Passu. (Drive: approx. 1–2 hours)",
      },
      {
        day: 6,
        title: "Passu & Surroundings Exploration",
        description:
          "Morning walk to Passu Glacier and nearby viewpoints with stunning mountain scenery. Later visit: Hussaini Suspension Bridge, Local villages and scenic landscapes. Dinner and overnight stay in Passu.",
      },
      {
        day: 7,
        title: "Passu / Gojal → Naran / Besham",
        description:
          "Drive back along the Karakoram Highway, enjoying final views of Hunza and surrounding peaks. Overnight stay in Naran or Besham. (Drive: 6–7 hours)",
      },
      {
        day: 8,
        title: "Naran / Besham → Islamabad (Departure)",
        description:
          "Return journey to Islamabad via Abbottabad. Transfer to Islamabad International Airport for departure.",
      },
    ],
    included: [
      "Accommodation: 3-Star Hotels & Comfortable Guesthouses",
      "Transportation: Private Vehicle along Karakoram Highway",
      "Guide: Licensed English-Speaking Guide",
      "Entry Tickets: Baltit Fort, Altit Fort & Other Sites",
      "Meals: Breakfast and Dinner Daily",
      "Invitation Letter: Tourist Visa Invitation Letter",
    ],
    notIncluded: [
      "International & Domestic Flights",
      "Lunch and Snacks",
      "Personal Equipment",
      "Travel Insurance",
      "Tips and Gratuities",
      "Boating fees at Attabad Lake",
    ],
    faqs: [
      {
        q: "What is the best time to visit Hunza and Gojal Valley?",
        a: "The best time to visit is from April to October. Spring (April-May) offers blooming apricot flowers, summer (June-August) has pleasant weather, and autumn (September-October) features golden and red foliage.",
      },
      {
        q: "Is this tour suitable for families?",
        a: "Yes, this tour is perfect for families, couples, and senior citizens as it involves soft adventure activities and comfortable hotel stays throughout.",
      },
      {
        q: "What should I pack for this tour?",
        format: "bullets",
        intro: "We recommend packing:",
        a: "Light clothes for daytime\nWarm jacket for evenings\nComfortable walking shoes\nSunscreen and sunglasses\nHat or cap\nCamera\nPower bank\nPersonal medications",
      },
      {
        q: "How long is the drive each day?",
        a: "Driving times range from 2 to 7 hours per day. The longest drives are on Days 2 and 7, but we make frequent stops at scenic viewpoints and attractions.",
      },
    ],
    relatedTours: [
      {
        id: 1,
        title: "10-Day Majestic Tour of Skardu, Hunza & Fairy Meadows",
        price: 1250,
        img: "/assets/tours/tour1.png",
      },
      {
        id: 2,
        title: "5-Day Hunza Valley & Attabad Lake Tour",
        price: 750,
        img: "/assets/tours/tour1.png",
      },
      {
        id: 4,
        title: "7-Day Hunza & Khunjerab Pass Adventure Tour",
        price: 850,
        img: "/assets/tours/tour1.png",
      },
    ],
  },
  {
    id: 10,
    city: "Hunza",
    title: "Yak Safari Shimshal",
    fullTitle:
      "Yak Safari in Shimshal Valley, Pakistan – High-Altitude Adventure in the Karakoram",
    rating: 5,
    reviews: 0,
    minAge: 16,
    maxPeople: 12,
    price: 2200,
    description:
      "We are excited to offer an exceptional high-altitude journey — the Yak Safari in Shimshal Valley, one of the most isolated and spectacular regions within the Karakoram Range. This unique expedition takes you deep into untouched mountain terrain, where you travel alongside yaks - the lifeline of local communities - across glaciers, alpine meadows, and rugged trails. It is a rare opportunity to experience nature, culture, and adventure in one of Pakistan's last true wilderness areas. Journey along remote valleys shaped by the powerful Indus River system and explore landscapes surrounded by some of the world's highest peaks. This experience combines trekking, cultural immersion, and high-altitude exploration, making it ideal for travelers seeking something beyond conventional tours.",
    images: [
      "/assets/tours/tour1.png",
      "/assets/tours/tour2.png",
      "/assets/tours/tour3.png",
      "/assets/tours/tour4.png",
      "/assets/tours/tour5.png",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Islamabad",
        description:
          "Arrival at Islamabad International Airport. Warm welcome and transfer to the hotel. After lunch, a city tour of the twin cities, Islamabad & Rawalpindi. Overnight: Hotel in Islamabad",
      },
      {
        day: 2,
        title: "Islamabad → Besham / Naran (or Fly to Gilgit)",
        description:
          "Travel via Grand Trunk Road with a stop at Taxila Museum and nearby archaeological sites. Join the Karakoram Highway and continue towards Besham/Naran. Overnight stay in Gilgit. (300 km | 7–8 hrs)",
      },
      {
        day: 3,
        title: "Besham → Gilgit → Hunza (Karimabad)",
        description:
          "Drive along the scenic Karakoram Highway with views of Nanga Parbat (8,125 m). Continue to Hunza Valley. Overnight stay in Apex Hotels and Resorts Attabad lake. (430 km | 7–8 hrs)",
      },
      {
        day: 4,
        title: "Karimabad → Passu",
        description:
          "Explore local markets and enjoy views of Attabad Lake. Continue to Passu. Overnight stay in Apex Hotels and Resorts Hussaini Gojal. (150 km | 4–5 hrs)",
      },
      {
        day: 5,
        title: "Passu → Shimshal (Safari Begins)",
        description:
          "Drive into Shimshal Valley. Load expedition supplies onto yaks and begin the journey. Visit the shrine of Shams Tabrizi. Overnight stay in Apex Hotels and Resorts Shimshal. (3–5 hrs jeep | ~3,000 m)",
      },
      {
        day: 6,
        title: "Shimshal → Zartgarben / Gar Sar",
        description:
          "Trek through narrow gorges and ascend to high-altitude pastures. Overnight camping. (6–7 hrs | 3,700 m)",
      },
      {
        day: 7,
        title: "Gar Sar → Arbab Parian",
        description:
          "Follow the Maidur River with views of Minglik Sar. Overnight camping. (4–5 hrs | 4,150 m)",
      },
      {
        day: 8,
        title: "Arbab Parian → Shimshal Pass",
        description:
          "Trek towards Shimshal Pass, passing alpine lakes and grazing lands. Overnight camping. (4–5 hrs | 4,735 m)",
      },
      {
        day: 9,
        title: "Shimshal Pass (Rest Day)",
        description:
          "Acclimatization and exploration day for photography and cultural interaction.",
      },
      {
        day: 10,
        title: "Shimshal Pass (Second Rest Day)",
        description:
          "Additional acclimatization day. Explore the surroundings and enjoy high-altitude landscapes.",
      },
      {
        day: 11,
        title: "Shimshal Pass → Arbab Parian",
        description:
          "Return trek with gradual descent. Overnight camping. (5–6 hrs)",
      },
      {
        day: 12,
        title: "Arbab Parian → Maidur",
        description:
          "Easy walk through scenic summer pastures. Overnight camping. (4–5 hrs)",
      },
      {
        day: 13,
        title: "Maidur → Shapodin Pass → Shapodin",
        description:
          "Cross Shapodin Pass (5,150 m) with views of Passu Peak and Shispar Peak. Overnight camping. (7–8 hrs)",
      },
      {
        day: 14,
        title: "Shapodin → Shimshal",
        description:
          "Descend back towards Shimshal Valley. Overnight camping. (4–5 hrs)",
      },
      {
        day: 15,
        title: "Shimshal → Passu",
        description:
          "Trek and jeep transfer to Passu. Overnight stay in Apex Hotels and Resorts Hussaini Gojal.",
      },
      {
        day: 16,
        title: "Passu → Hunza (Karimabad)",
        description:
          "Visit Altit Fort and Baltit Fort. Explore the local bazaar, followed by an afternoon transfer to Apex Hotels & Resorts Attabad Lake. Overnight stay.",
      },
      {
        day: 17,
        title: "Hunza → Besham / Naran",
        description:
          "Visit Kargah Buddha and scenic viewpoints. Overnight stay in Gilgit. (6–7 hrs)",
      },
      {
        day: 18,
        title: "Besham / Naran → Islamabad",
        description:
          "Drive back to Islamabad via Indus River route. Overnight stay. (10–12 hrs)",
      },
      {
        day: 19,
        title: "Departure",
        description:
          "Transfer to Islamabad International Airport for departure.",
      },
    ],
    included: [
      "Accommodation: Hotels & Full Camping Setup",
      "Transportation: Private 4x4 Jeep and Car",
      "Guide: Licensed High-Altitude Mountain Guide",
      "Yak Support: Yaks for Carrying Expedition Supplies",
      "Camping Equipment: Tents, Sleeping Bags, Mattresses",
      "Meals: All Meals During Trek (Breakfast, Lunch, Dinner)",
      "Entry Tickets: All National Park & Village Entry Fees",
      "Invitation Letter: Tourist Visa Invitation Letter",
      "Kitchen Staff & Cook",
    ],
    notIncluded: [
      "International & Domestic Flights",
      "Personal Trekking Gear (Jackets, Boots, Poles, etc.)",
      "Travel Insurance (Mandatory for High-Altitude Trek)",
      "Tips and Gratuities",
      "Personal Expenses & Snacks",
      "Emergency Evacuation",
      "Visa Processing Fees",
    ],
    faqs: [
      {
        q: "What is the best time for Yak Safari in Shimshal?",
        a: "The best time for Yak Safari is from July to September when the weather is stable, passes are open, and pastures are green.",
      },
      {
        q: "How difficult is this trek?",
        a: "This is a challenging high-altitude trek suitable for experienced trekkers. You will trek at altitudes between 3,000m and 5,150m. Good physical fitness and prior high-altitude experience are strongly recommended.",
      },
      {
        q: "Do I need prior trekking experience?",
        a: "Yes, prior high-altitude trekking experience is highly recommended. This is not a beginner-level trek due to the altitude and remote location.",
      },
      {
        q: "What should I pack for this tour?",
        format: "bullets",
        intro: "Essential gear for Yak Safari:",
        a: "Down jacket and warm layers\nWaterproof hiking boots (broken in)\nTrekking poles\nSun hat, warm beanie, and gloves\nHigh SPF sunscreen and lip balm\nPersonal medications and first aid kit\nWater bottles/ hydration bladder (minimum 2L)\nHeadlamp with extra batteries\nPower bank (limited charging)\nSleeping bag (rated -15°C or lower)",
      },
      {
        q: "Is travel insurance mandatory?",
        a: "Yes, comprehensive travel insurance covering high-altitude trekking (above 5,000m) and emergency evacuation is mandatory for this tour.",
      },
      {
        q: "Can I take a flight instead of road travel?",
        a: "Yes, you can fly from Islamabad to Gilgit on Day 2 instead of the road journey. Additional flight charges apply. Please contact us for details.",
      },
      {
        q: "What makes this safari unique?",
        a: "This expedition uses yaks (locally known as Dong) as pack animals, offering an authentic high-altitude caravan experience. Shimshal Valley is one of Pakistan's most remote and untouched regions.",
      },
    ],
    relatedTours: [
      {
        id: 1,
        title: "10-Day Majestic Tour of Skardu, Hunza & Fairy Meadows",
        price: 1250,
        img: "/assets/tours/tour1.png",
      },
      {
        id: 9,
        title: "08 Days Hunza & Gojal Valley Overland Tour",
        price: 1100,
        img: "/assets/tours/tour1.png",
      },
    ],
  },
  {
    id: 12,
    city: "Skardu",
    title: "Deosai Wildlife Adventure",
    fullTitle: "07 Days Deosai National Park Wildlife Tour – Pakistan",
    rating: 5,
    reviews: 0,
    minAge: 12,
    maxPeople: 20,
    price: 950,
    description:
      "Embark on an unforgettable 7-day wildlife adventure in Northern Pakistan, exploring the stunning landscapes of Deosai National Park, Skardu, and Kaghan Valley. Travel through lush valleys, cross the high-altitude Babusar Pass, and camp under starry skies on the vast Deosai Plains. Enjoy light hikes, jeep safaris, local sightseeing, and authentic cultural experiences. Ideal for nature enthusiasts, wildlife photographers, and adventure travelers, this tour offers encounters with Himalayan marmots, alpine flora, and pristine lakes. Travel comfortably by jeep or join via road from Islamabad, with optional flights to Skardu. Best visited between mid-July and September when the meadows bloom with wildflowers.",
    images: [
      "/assets/tours/tour1.png",
      "/assets/tours/tour2.png",
      "/assets/tours/tour3.png",
      "/assets/tours/tour4.png",
      "/assets/tours/tour5.png",
    ],
    itinerary: [
      {
        day: 1,
        title: "Islamabad → Naran / Kaghan",
        description:
          "Depart Islamabad after breakfast via Abbottabad, Mansehra, and Balakot. Enjoy scenic landscapes along the way. Evening arrival in Naran/Kaghan, check-in at hotel, overnight stay.",
      },
      {
        day: 2,
        title: "Kaghan → Skardu (via Babusar Pass)",
        description:
          "Early departure to cross Babusar Pass. Stop at Lulusar Lake for photography and panoramic views. Descend into Diamer District, join Karakoram Highway at Alam Bridge, follow Indus River to Skardu. Overnight stay in Apex Hotels and Resorts Skardu.",
      },
      {
        day: 3,
        title: "Skardu → Deosai National Park",
        description:
          "Drive past Sadpara Lake and local villages. Reach Deosai Plains and set up camp at Bara Pani. Evening amidst untouched wilderness, overnight camping.",
      },
      {
        day: 4,
        title: "Deosai Plains Exploration",
        description:
          "Full day exploring Deosai National Park. Activities: fishing, light hikes, sunrise & sunset photography, and BBQ under open sky. Overnight camping at Bara Pani.",
      },
      {
        day: 5,
        title: "Deosai → Skardu Excursion",
        description:
          "Return to Skardu for sightseeing. Visit Shangrila Resort (Lower Kachura Lake), Kharpocho Fort, and Shigar Desert. Overnight stay in Apex Hotels and Resorts Skardu.",
      },
      {
        day: 6,
        title: "Skardu → Naran / Besham",
        description:
          "Depart Skardu after breakfast, retrace Karakoram Highway toward Besham or Naran. Scenic photo stops along the way. Overnight stay in Naran or Besham.",
      },
      {
        day: 7,
        title: "Naran / Besham → Islamabad / Rawalpindi",
        description:
          "Final journey back to Islamabad or Rawalpindi. Hotel or airport drop-off. Tour concludes with memories of Northern Pakistan's wilderness.",
      },
    ],
    included: [
      "Accommodation: 3-Star Hotels & Camping at Deosai",
      "Transportation: Private 4x4 Jeep and Car",
      "Guide: Licensed English-Speaking Guide",
      "Camping Equipment: Tents, Sleeping Bags, Mattresses",
      "Meals: Breakfast, Dinner & BBQ Night",
      "Entry Tickets: Deosai National Park Entry Fee",
      "Invitation Letter: Tourist Visa Invitation Letter",
    ],
    notIncluded: [
      "International & Domestic Flights",
      "Lunch and Snacks",
      "Personal Equipment",
      "Travel Insurance",
      "Tips and Gratuities",
      "Fishing Equipment",
    ],
    faqs: [
      {
        q: "What is the best time to visit Deosai National Park?",
        a: "The best time to visit Deosai is from mid-July to September when the snow melts, wildflowers bloom, and the park is fully accessible.",
      },
      {
        q: "Is altitude sickness a concern in Deosai?",
        a: "Deosai sits at around 4,000 meters (13,000 feet). Light acclimatization is recommended. We suggest spending a day in Skardu before heading to Deosai.",
      },
      {
        q: "What should I pack for this tour?",
        format: "bullets",
        intro: "We recommend packing:",
        a: "Warm layers and a heavy jacket\nComfortable hiking shoes\nSunscreen, sunglasses, and hat\nPersonal medications\nPower bank\nCamera for wildlife and landscapes\nInsect repellent",
      },
      {
        q: "Can I take a flight instead of road travel?",
        a: "Yes, travelers can opt for a direct flight from Islamabad to Skardu. Please contact us for flight-inclusive pricing.",
      },
    ],
    relatedTours: [
      {
        id: 1,
        title: "10-Day Majestic Tour of Skardu, Hunza & Fairy Meadows",
        price: 1250,
        img: "/assets/tours/tour1.png",
      },
      {
        id: 8,
        title:
          "07 Days Deosai National Park Wildlife Tour – Skardu, Deosai & Northern Pakistan",
        price: 980,
        img: "/assets/tours/tour1.png",
      },
    ],
  },
  {
    id: 13,
    city: "Skardu",
    title: "Majestic Skardu & Hunza",
    fullTitle:
      "09 Days Majestic Skardu & Hunza Valley Tour – Jeep Safari, Pakistan",
    rating: 5,
    reviews: 0,
    minAge: 10,
    maxPeople: 20,
    price: 1350,
    description:
      "Embark on an unforgettable 9-day adventure through Skardu, Hunza, and Gojal Valleys, exploring the majestic peaks of the Karakoram, Himalaya, and Hindukush ranges. This jeep safari takes you across remote valleys, winding mountain roads, and hidden trails, offering a mix of adventure, culture, and breathtaking scenery. Begin in Naran Valley, discovering Shogran's green plateaus and the magical Lake Saiful Maluk. Cross Babusar Pass into the Karakoram, reaching Skardu to explore turquoise lakes, Tibetan-style villages, and historical sites. Continue to Hunza Valley, visiting Baltit and Altit Forts, panoramic viewpoints, and Khunjerab Pass, the highest paved border crossing in the world. Experience light treks, jeep safaris, cultural immersion, and photography opportunities at every turn. Ideal for adventure travelers, photographers, and those seeking the natural beauty of Northern Pakistan.",
    images: [
      "/assets/tours/tour1.png",
      "/assets/tours/tour2.png",
      "/assets/tours/tour3.png",
      "/assets/tours/tour4.png",
      "/assets/tours/tour5.png",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Islamabad",
        description:
          "Pickup from Islamabad airport and transfer to the hotel. Optional exploration of Islamabad & Rawalpindi. Overnight stay at Apex Hotels & Resorts Islamabad (or similar).",
      },
      {
        day: 2,
        title: "Islamabad → Skardu",
        description:
          "Breakfast at the hotel, then flight to Skardu. Visit Upper & Lower Kachura, lunch, then Katpana Desert. Dinner and overnight stay at Apex Hotels & Resorts Skardu.",
      },
      {
        day: 3,
        title: "Marsur Rock View Point",
        description:
          "Drive to Hussain Abad for a 3-hour trek to Marsur Rock View Point. Return to Skardu, visit Manthal Buddha and Sadpara Lake. Dinner and overnight stay at Apex Hotels & Resorts Skardu.",
      },
      {
        day: 4,
        title: "Kharpocho Fort, Blind Lake & Sarfaranga Cold Desert",
        description:
          "Soft trek to Kharpocho Fort, guided visit. Explore Sarfaranga Cold Desert, Shigar Valley for lunch, then Blind Lake. Return to Skardu for dinner and overnight stay at Apex Hotels & Resorts Skardu.",
      },
      {
        day: 5,
        title: "Skardu → Hunza Valley",
        description:
          "Drive via Skardu-Jaglot road, view convergence of Karakoram, Himalaya & Hindukush. Lunch at Gilgit, stops at Old Silk Road & Rakaposhi viewpoint. Arrival in Hunza Valley, dinner, overnight stay at Apex Hotels & Resorts Attabad Lake.",
      },
      {
        day: 6,
        title: "Hunza Valley Excursion",
        description:
          "Soft hike to Baltit Fort, guided tour. Visit Altit Fort, lunch at Kha basi Café (women-run). Drive to Duiker for panoramic views of Hunza & Nagar, Golden Peak, Rusk Lake, Rakaposhi. Return for dinner and overnight stay at Apex Hotels & Resorts Attabad Lake.",
      },
      {
        day: 7,
        title: "Hunza → Gojal Valley",
        description:
          "Visit Hoper Glacier, lunch in Hoper. Explore Attabad Lake, Hussaini Suspension Bridge, Borith Lake in Gojal Valley. Return to Hussaini, Gojal for dinner and overnight stay at Apex Hotels & Resorts Hussaini Gojal.",
      },
      {
        day: 8,
        title: "Gilgit → Besham / Naran",
        description:
          "Breakfast, then drive back to Besham via scenic route. Lunch en route, overnight stay in Naran/Besham (standard hotel or Apex partner property).",
      },
      {
        day: 9,
        title: "Naran → Islamabad & Departure",
        description:
          "Drive back to Islamabad with lunch stop. Arrival and airport or hotel drop-off. Conclude your majestic Northern Pakistan tour.",
      },
    ],
    included: [
      "Accommodation: Apex Hotels & Resorts / Similar",
      "Transportation: Private 4x4 Jeep and Car",
      "Guide: Licensed English-Speaking Guide",
      "Domestic Flight: Islamabad to Skardu (One Way)",
      "Entry Tickets: All Forts, Museums, and National Parks",
      "Meals: Breakfast and Dinner Daily",
      "Invitation Letter: Tourist Visa Invitation Letter",
    ],
    notIncluded: [
      "International Flight",
      "Return Flight from Skardu to Islamabad",
      "Lunch and Snacks",
      "Personal Equipment",
      "Travel Insurance",
      "Tips and Gratuities",
      "Boating fees at Attabad Lake",
    ],
    faqs: [
      {
        q: "What is the best time to visit Skardu and Hunza?",
        a: "The best time to visit is from May to October when the weather is pleasant and all roads are open. July to September is ideal for the best views and accessibility.",
      },
      {
        q: "Is the flight to Skardu included?",
        a: "Yes, one-way domestic flight from Islamabad to Skardu is included in the tour price. Return flight is not included but can be arranged upon request.",
      },
      {
        q: "Is this tour suitable for families?",
        a: "Yes, this tour is family-friendly. The treks are moderate (soft treks) and suitable for most fitness levels.",
      },
      {
        q: "What should I pack for this tour?",
        format: "bullets",
        intro: "We recommend packing:",
        a: "Light clothes for daytime\nWarm layers and a good jacket for evenings\nComfortable hiking/walking shoes\nSunscreen, sunglasses, and hat\nPersonal medications\nPower bank\nCamera for incredible views",
      },
      {
        q: "Can I extend my stay in Hunza or Skardu?",
        a: "Yes, we can customize the tour and add extra days upon request. Please contact us for a personalized itinerary.",
      },
    ],
    relatedTours: [
      {
        id: 1,
        title: "10-Day Majestic Tour of Skardu, Hunza & Fairy Meadows",
        price: 1250,
        img: "/assets/tours/tour1.png",
      },
      {
        id: 9,
        title: "08 Days Hunza & Gojal Valley Overland Tour",
        price: 1100,
        img: "/assets/tours/tour1.png",
      },
      {
        id: 12,
        title: "07 Days Deosai National Park Wildlife Tour",
        price: 950,
        img: "/assets/tours/tour1.png",
      },
    ],
  },
  {
    id: 14,
    city: "Skardu",
    title: "Deosai Adventure",
    fullTitle: "07 Days Deosai National Park Adventure Tour – Pakistan",
    rating: 5,
    reviews: 0,
    minAge: 8,
    maxPeople: 25,
    price: 850,
    description:
      "Experience the untouched wilderness of Deosai National Park on this 7-day light-adventure tour, perfect for families, friends, couples, students, and nature lovers. Known as the 'Land of Giants,' Deosai sits at an average elevation of 4,000 meters, offering expansive green meadows, sparkling streams, rolling hills, and panoramic mountain backdrops. A must-visit destination in Northern Pakistan, Deosai is snow-covered for nearly seven months. The best time to visit is July to September, when wildflowers bloom, wildlife emerges, and the landscape comes alive with vibrant colors. Located at the intersection of the Himalaya and Karakoram ranges, Deosai is ideal for camping, jeep safaris, wildlife photography, stargazing, and nature exploration. Whether seeking tranquility, adventure, or a family-friendly getaway, this tour promises memorable experiences in Northern Pakistan's magical landscapes.",
    images: [
      "/assets/tours/tour1.png",
      "/assets/tours/tour2.png",
      "/assets/tours/tour3.png",
      "/assets/tours/tour4.png",
      "/assets/tours/tour5.png",
    ],
    itinerary: [
      {
        day: 1,
        title: "Islamabad → Naran / Kaghan",
        description:
          "Depart Islamabad toward the scenic Naran–Kaghan Valley via Abbottabad, Mansehra, and Balakot. Enjoy picturesque river valleys, forests, and mountain landscapes en route. Arrival in Naran/Kaghan, check-in at Hotel for overnight stay.",
      },
      {
        day: 2,
        title: "Naran → Babusar Pass → Skardu",
        description:
          "Scenic drive with stops at Lulusar Lake for photography. Cross high-altitude Babusar Pass (4,173 m). Multiple panoramic viewpoints along the way. Descend into Diamer District, join Karakoram Highway, follow Indus River to Skardu. Overnight stay at Apex Hotels & Resorts Skardu.",
      },
      {
        day: 3,
        title: "Skardu → Deosai National Park (Camping at Bara Pani)",
        description:
          "Depart for Deosai National Park, passing Sadpara Lake and Sadpara Village. Set up camp at Bara Pani, enjoy the serene surroundings. Overnight camping under the stars.",
      },
      {
        day: 4,
        title: "Full-Day Deosai Exploration (Camping Night 2)",
        description:
          "Explore Deosai Plains with activities such as: Easy hiking and nature walks, Wildlife spotting (Himalayan brown bears, marmots, birds), Seasonal fishing and photography, Sunset and sunrise views, BBQ under the open sky. Second overnight camping at Bara Pani.",
      },
      {
        day: 5,
        title: "Deosai → Skardu (Sightseeing Day)",
        description:
          "Return to Skardu for lunch and rest. Optional sightseeing: Shangrila Resort (Lower Kachura Lake), Kharpocho Fort, Katpana Cold Desert, Shigar Valley. Overnight stay at Apex Hotels & Resorts Skardu.",
      },
      {
        day: 6,
        title: "Skardu → Naran / Besham",
        description:
          "Begin return journey to Naran or Besham. Enjoy scenic valleys, river views, and photo stops en route. Overnight stay at Hotel (or Naran/Besham partner property).",
      },
      {
        day: 7,
        title: "Naran / Besham → Islamabad",
        description:
          "Drive back to Islamabad. Drop-off at Hotel or Islamabad International Airport. End of the 7-day Deosai adventure tour.",
      },
    ],
    included: [
      "Accommodation: Apex Hotels & Resorts / Partner Properties & Camping at Deosai",
      "Transportation: Private 4x4 Jeep and Car",
      "Guide: Licensed English-Speaking Guide",
      "Camping Equipment: Tents, Sleeping Bags, Mattresses",
      "Meals: Breakfast, Dinner & BBQ Night",
      "Entry Tickets: Deosai National Park Entry Fee",
      "Invitation Letter: Tourist Visa Invitation Letter",
    ],
    notIncluded: [
      "International & Domestic Flights",
      "Lunch and Snacks",
      "Personal Equipment",
      "Travel Insurance",
      "Tips and Gratuities",
      "Fishing Equipment",
      "Optional Sightseeing Entry Fees (Shangrila Resort, Kharpocho Fort)",
    ],
    faqs: [
      {
        q: "What is the best time to visit Deosai National Park?",
        a: "The best time to visit Deosai is from July to September when the snow melts, wildflowers bloom, and wildlife is easily spotted. The park is snow-covered for the remaining 7-8 months of the year.",
      },
      {
        q: "Is this tour suitable for families and children?",
        a: "Yes, this is a light-adventure tour specifically designed for families, couples, students, and nature lovers. Minimum age is 8 years with parental supervision.",
      },
      {
        q: "What is the altitude of Deosai?",
        a: "Deosai sits at an average elevation of 4,000 meters (13,000 feet). Light acclimatization is recommended. We suggest drinking plenty of water and avoiding strenuous activity on the first day.",
      },
      {
        q: "What wildlife can I expect to see?",
        a: "Deosai is home to Himalayan brown bears, Himalayan marmots, ibex, wolves, foxes, and over 100 species of birds. The best time for bear sightings is early morning or late evening.",
      },
      {
        q: "What should I pack for this tour?",
        format: "bullets",
        intro: "We recommend packing:",
        a: "Warm layers and a heavy jacket (temperatures drop below freezing at night)\nComfortable hiking shoes\nSunscreen, sunglasses, and hat\nPersonal medications (including altitude sickness prevention)\nPower bank (limited electricity at campsite)\nCamera with extra batteries\nInsect repellent\nWater bottle (minimum 2L)",
      },
      {
        q: "Can I take a flight instead of road travel?",
        a: "Yes, travelers can opt for a direct flight from Islamabad to Skardu instead of the 2-day road journey. Please contact us for flight-inclusive pricing and customized itineraries.",
      },
    ],
    relatedTours: [
      {
        id: 8,
        title:
          "07 Days Deosai National Park Wildlife Tour – Skardu, Deosai & Northern Pakistan",
        price: 980,
        img: "/assets/tours/tour1.png",
      },
      {
        id: 12,
        title: "07 Days Deosai National Park Wildlife Tour – Pakistan",
        price: 950,
        img: "/assets/tours/tour1.png",
      },
      {
        id: 13,
        title: "09 Days Majestic Skardu & Hunza Valley Tour",
        price: 1350,
        img: "/assets/tours/tour1.png",
      },
    ],
  },
  {
    id: 15,
    city: "Hunza",
    title: "Gilgit Hunza Naltar",
    fullTitle: "8 Days Gilgit, Hunza & Naltar Valley Tour – Pakistan",
    rating: 5,
    reviews: 0,
    minAge: 8,
    maxPeople: 25,
    price: 980,
    description:
      "Discover the breathtaking landscapes of Gilgit Baltistan on this 8-day soft-adventure tour, exploring Hunza Valley, Nagar Valley, Naltar Valley, and Fairy Meadows. This journey combines scenic drives, light trekking, cultural immersion, and unforgettable high-altitude experiences along the Karakoram, Himalaya, and Hindukush ranges. The tour highlights Karimabad, Baltit Fort, Altit Fort, Hopper Glacier, Attabad Lake, Khunjerab Pass, and the colorful alpine lakes of Naltar Valley. Optional activities include jeep rides, short hikes, boating, walking across the Hussaini Suspension Bridge, and interacting with local communities. Ideal for travelers seeking a relaxed yet immersive experience in Northern Pakistan, with comfortable stays at Apex Hotels & Resorts Hunza and Apex Hotels & Resorts Skardu, ensuring premium hospitality in these iconic mountain destinations.",
    images: [
      "/assets/tours/tour1.png",
      "/assets/tours/tour2.png",
      "/assets/tours/tour3.png",
      "/assets/tours/tour4.png",
      "/assets/tours/tour5.png",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Islamabad",
        description:
          "Arrive at Islamabad International Airport. Welcome and transfer to hotel (standard partner property). Dinner and overnight stay.",
      },
      {
        day: 2,
        title: "Islamabad → Naran / Chilas",
        description:
          "Depart after breakfast, drive through scenic valleys to Naran or Chilas. Visit Taxila Museum, scenic stops, tea breaks, and photography points. Dinner and overnight stay at a standard hotel.",
      },
      {
        day: 3,
        title: "Chilas → Fairy Meadows",
        description:
          "Drive to Raikot Bridge, continue by 4x4 jeep to Tato Village. Optional hike or horse ride to Fairy Meadows, with panoramic views of Nanga Parbat. Evening bonfire and traditional local music. Dinner and overnight stay at a Fairy Meadows guesthouse.",
      },
      {
        day: 4,
        title: "Fairy Meadows → Hunza Valley",
        description:
          "Return by jeep to Karakoram Highway, drive to Hunza Valley. Stop at Rakaposhi View Point, Altit Fort, Baltit Fort, and Karimabad Bazaar. Dinner and overnight stay at Apex Hotels & Resorts Attabad lake Hunza.",
      },
      {
        day: 5,
        title: "Hunza, Nagar & Passu Valley",
        description:
          "Full-day excursion covering: Attabad Lake, Hussaini Suspension Bridge, Passu Village, Gulmit & Gulkin Villages. Dinner and overnight stay at Apex Hotels & Resorts Attabad Lake Hunza.",
      },
      {
        day: 6,
        title: "Hunza → Khunjerab Pass → Naltar Valley",
        description:
          "Early departure for Khunjerab Pass, Pakistan–China border. Stop at Passu Cathedral Peaks and Passu Glacier viewpoints. Continue to Naltar Valley. Dinner and overnight stay at a standard hotel in Naltar.",
      },
      {
        day: 7,
        title: "Naltar → Gilgit → Naran / Besham",
        description:
          "Visit Naltar Seven-Color Lakes. Drive via Gilgit to Naran or Besham. Dinner and overnight stay at a standard hotel.",
      },
      {
        day: 8,
        title: "Naran / Besham → Islamabad (Departure)",
        description:
          "Scenic drive back to Islamabad with photography stops. Optional short city tour (time permitting). Drop-off at hotel or Islamabad International Airport.",
      },
    ],
    included: [
      "Accommodation: Apex Hotels & Resorts / Standard Partner Properties",
      "Transportation: Private 4x4 Jeep and Car",
      "Guide: Licensed English-Speaking Guide",
      "Entry Tickets: All Forts, Museums, and National Parks",
      "Meals: Breakfast and Dinner Daily",
      "Invitation Letter: Tourist Visa Invitation Letter",
    ],
    notIncluded: [
      "International & Domestic Flights",
      "Lunch and Snacks",
      "Personal Equipment",
      "Travel Insurance",
      "Tips and Gratuities",
      "Boating fees at Attabad Lake",
      "Horse ride at Fairy Meadows",
      "Jeep ride to Tato Village (included) - horse ride is optional extra",
    ],
    faqs: [
      {
        q: "What is the best time to visit Gilgit, Hunza, and Naltar Valley?",
        a: "The best time to visit is from May to October. Spring (April-May) offers blooming flowers, summer (June-August) has pleasant weather, and autumn (September-October) features stunning golden and red foliage.",
      },
      {
        q: "Is this tour suitable for families?",
        a: "Yes, this is a soft-adventure tour specifically designed for families, couples, and travelers of all ages. Minimum age is 8 years with parental supervision.",
      },
      {
        q: "What is the altitude of Khunjerab Pass?",
        a: "Khunjerab Pass sits at 4,693 meters (15,397 feet), making it the highest paved border crossing in the world. Some travelers may experience mild altitude sickness, so we recommend staying hydrated and moving slowly.",
      },
      {
        q: "What should I pack for this tour?",
        format: "bullets",
        intro: "We recommend packing:",
        a: "Light clothes for daytime\nWarm layers and a heavy jacket (especially for Khunjerab Pass)\nComfortable hiking/walking shoes\nSunscreen, sunglasses, and hat\nPersonal medications\nPower bank\nCamera for incredible views\nInsect repellent",
      },
      {
        q: "Is the hike to Fairy Meadows mandatory?",
        a: "No, the hike to Fairy Meadows is optional. You can take a horse ride instead of hiking, or you can choose to relax at the guesthouse while others hike. The jeep ride to Tato Village is included.",
      },
      {
        q: "What makes Naltar Valley special?",
        a: "Naltar Valley is famous for its stunning seven-color alpine lakes, vibrant pine forests, and dramatic mountain scenery. It's a lesser-known gem in Gilgit Baltistan, perfect for photography and nature lovers.",
      },
    ],
    relatedTours: [
      {
        id: 1,
        title: "10-Day Majestic Tour of Skardu, Hunza & Fairy Meadows",
        price: 1250,
        img: "/assets/tours/tour1.png",
      },
      {
        id: 9,
        title: "08 Days Hunza & Gojal Valley Overland Tour",
        price: 1100,
        img: "/assets/tours/tour1.png",
      },
      {
        id: 13,
        title: "09 Days Majestic Skardu & Hunza Valley Tour",
        price: 1350,
        img: "/assets/tours/tour1.png",
      },
    ],
  },
  {
    id: 16,
    city: "Lahore",
    title: "Ultimate Pakistan Tour",
    fullTitle:
      "15 Days Ultimate Pakistan Cultural & Adventure Tour – Lahore, Hunza & Skardu",
    rating: 5,
    reviews: 0,
    minAge: 10,
    maxPeople: 20,
    price: 2200,
    description:
      "Experience an epic 15-day journey across Pakistan, combining rich history, vibrant culture, and breathtaking natural landscapes. From the historic streets of Lahore to the serene valleys of Hunza and Skardu, this tour showcases the country's most iconic destinations. Explore ancient forts, bustling bazaars, local villages, and high-altitude landscapes. Trek to the majestic Rakaposhi Base Camp, walk across thrilling suspension bridges, and enjoy panoramic views of snow-capped peaks. Relax by alpine lakes, camp in pristine nature, and immerse yourself in centuries-old traditions. This tour is perfect for travelers seeking culture, adventure, and natural beauty in one unforgettable experience, with premium stays at Apex Hotels & Resorts.",
    images: [
      "/assets/tours/tour1.png",
      "/assets/tours/tour2.png",
      "/assets/tours/tour3.png",
      "/assets/tours/tour4.png",
      "/assets/tours/tour5.png",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Lahore",
        description:
          "Pick up from Allama Iqbal International Airport. Transfer to hotel. Optional city exploration if time allows. Dinner and overnight stay.",
      },
      {
        day: 2,
        title: "Lahore Excursion",
        description:
          "Visit Lahore Fort, Badshahi Mosque, and Walled City. Lunch en route. Drive to Wagah Border for the flag-lowering ceremony. Dinner and overnight stay.",
      },
      {
        day: 3,
        title: "Lahore → Besham / Naran",
        description:
          "Breakfast and scenic drive to Besham/Naran. Lunch en route. Evening arrival, dinner, and overnight stay.",
      },
      {
        day: 4,
        title: "Besham / Naran → Gilgit",
        description:
          "Drive along Karakoram Highway. Stop at World's Three Mountain Junction and Nanga Parbat viewpoint. Arrival in Gilgit, dinner, and overnight stay.",
      },
      {
        day: 5,
        title: "Gilgit → Hunza Valley",
        description:
          "Breakfast and drive to Hunza. Stop at Old Silk Route Viewpoint and Rakaposhi Viewpoint. Visit Baltit Fort and Altit Fort. Lunch, then drive to Duikar for panoramic Hunza & Nagar Valley views. Dinner and overnight stay at Apex Hotels & Resorts.",
      },
      {
        day: 6,
        title: "Hunza → Gojal Valley Excursion",
        description:
          "Visit Attabad Lake, Gulmit Village, and Hussaini Suspension Bridge. Lunch at Passu with views of Passu Cones. Return to Hunza, dinner, overnight at Apex Hotels & Resorts.",
      },
      {
        day: 7,
        title: "Hunza → Skardu",
        description:
          "Breakfast and drive to Skardu. Lunch en route. Arrival at Skardu, dinner, overnight stay at Apex Hotels & Resorts Skardu.",
      },
      {
        day: 8,
        title: "Skardu Valley Exploration",
        description:
          "Soft trek to Kharpocho Fort. Visit Sadpara Lake and Manthal Buddha. Lunch and visit Skardu Cold Desert. Dinner and overnight stay at Apex Hotels & Resorts Skardu.",
      },
      {
        day: 9,
        title: "Upper & Lower Kachura Lakes",
        description:
          "Drive to Upper Kachura Lake for sightseeing. Return to Skardu, visit Katpana Desert. Dinner and overnight stay at Apex Hotels & Resorts Skardu.",
      },
      {
        day: 10,
        title: "Skardu → Shigar Valley & Shangrila",
        description:
          "Visit Shigar Fort, Shangrila Resort, and local villages. Lunch en route. Return to Skardu, dinner, overnight at Apex Hotels & Resorts Skardu.",
      },
      {
        day: 11,
        title: "Skardu → Naran",
        description:
          "Breakfast and scenic drive back to Naran. Lunch en route. Dinner and overnight stay at a partner hotel in Naran.",
      },
      {
        day: 12,
        title: "Naran → Babusar Pass → Besham",
        description:
          "Breakfast, drive across Babusar Pass, photography stops. Lunch en route. Dinner and overnight stay in Besham.",
      },
      {
        day: 13,
        title: "Besham → Islamabad",
        description:
          "Breakfast and drive back to Islamabad. Lunch en route. Check-in at hotel, dinner, overnight stay.",
      },
      {
        day: 14,
        title: "Islamabad Sightseeing",
        description:
          "Visit Faisal Mosque, Lok Virsa Museum, and Pakistan Monument. Lunch at a local restaurant. Explore city bazaars and cultural spots. Dinner and overnight stay.",
      },
      {
        day: 15,
        title: "Departure from Islamabad",
        description:
          "Breakfast and hotel check-out. Transfer to Islamabad International Airport. Fly back home with memories of Northern Pakistan.",
      },
    ],
    included: [
      "Accommodation: Apex Hotels & Resorts / Premium Partner Properties",
      "Transportation: Private 4x4 Jeep and Luxury Car",
      "Guide: Licensed English-Speaking Guide throughout the tour",
      "Entry Tickets: All Forts, Museums, and National Parks",
      "Meals: Breakfast and Dinner Daily",
      "Invitation Letter: Tourist Visa Invitation Letter",
      "Wagah Border Ceremony Transfer",
    ],
    notIncluded: [
      "International & Domestic Flights",
      "Lunch and Snacks",
      "Personal Equipment",
      "Travel Insurance",
      "Tips and Gratuities",
      "Boating fees at Attabad Lake",
      "Optional Trekking Equipment",
    ],
    faqs: [
      {
        q: "What is the best time to take this tour?",
        a: "The best time for this comprehensive tour is from May to October. Spring (April-May) and autumn (September-October) offer the most pleasant weather across all destinations.",
      },
      {
        q: "Is this tour suitable for families?",
        a: "Yes, this tour is suitable for families with children aged 10 and above. The itinerary balances cultural sightseeing with soft adventure activities.",
      },
      {
        q: "What is the altitude of the highest point on this tour?",
        a: "The highest point is Babusar Pass at 4,173 meters (13,690 feet). Most travelers handle this altitude well, but we recommend staying hydrated and taking it easy.",
      },
      {
        q: "What should I pack for this 15-day tour?",
        format: "bullets",
        intro: "We recommend packing:",
        a: "Light clothes for Lahore and Islamabad\nWarm layers and a heavy jacket for Hunza, Skardu, and Babusar Pass\nComfortable walking/hiking shoes\nSunscreen, sunglasses, and hat\nPersonal medications\nPower bank and universal adapter\nCamera with extra batteries and memory cards\nReusable water bottle\nFirst aid kit",
      },
      {
        q: "Can I customize this tour?",
        a: "Yes, we can customize the itinerary based on your preferences, including adding or removing days, changing accommodations, or including flights to Skardu instead of road travel.",
      },
      {
        q: "Do I need a visa for Pakistan?",
        a: "Most nationalities require a visa to enter Pakistan. We provide a Tourist Visa Invitation Letter to support your visa application. Please check with your local Pakistan embassy for specific requirements.",
      },
    ],
    relatedTours: [
      {
        id: 1,
        title: "10-Day Majestic Tour of Skardu, Hunza & Fairy Meadows",
        price: 1250,
        img: "/assets/tours/tour1.png",
      },
      {
        id: 5,
        title: "5-Day Lahore Heritage & Culture Tour",
        price: 450,
        img: "/assets/tours/tour1.png",
      },
      {
        id: 13,
        title: "09 Days Majestic Skardu & Hunza Valley Tour",
        price: 1350,
        img: "/assets/tours/tour1.png",
      },
    ],
  },
];

export const getTourById = (id) => {
  const tourId = typeof id === "string" ? parseInt(id, 10) : id;
  return tours.find((tour) => tour.id === tourId);
};
