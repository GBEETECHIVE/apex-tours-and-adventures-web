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
    description:"Embark on a 10-day journey through the breathtaking landscapes of Skardu, Hunza Valley, and Fairy Meadows. Explore majestic mountains, sparkling lakes, historic forts, and vibrant local culture. Wake up to views of Nanga Parbat, sail on turquoise waters, and experience the true magic of northern Pakistan.",
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
];

 export const getTourById = (id) => {
  const tourId = typeof id === "string" ? parseInt(id, 10) : id;
  return tours.find((tour) => tour.id === tourId);
};
