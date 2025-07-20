const sampleData = [
  {
    title: "Cozy Mountain Cabin",
    description:
      "Escape to the tranquil beauty of Aspen with this charming wooden cabin nestled in the Rockies. Enjoy crackling fireplaces, panoramic snow-capped views, and nearby hiking trails. Perfect for a romantic getaway or solo retreat.",
    image: {
      filename: "Default Listing",
      url: "https://images.unsplash.com/photo-1688673678101-15195a13a44a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q296eSUyME1vdW50YWluJTIwQ2FiaW58ZW58MHx8MHx8fDA%3D",
    },
    price: 150000,
    location: "Aspen, Colorado",
    country: "USA",
  },
  {
    title: "Urban Loft Apartment",
    description:
      "Stay in this stylish open-plan loft located in the heart of Manhattan. Featuring exposed brick, tall industrial windows, and modern furnishings. Just minutes from Times Square, Broadway, and Central Park.",
    image: {
      filename: "Default Listing",
      url: "https://plus.unsplash.com/premium_photo-1661963579906-f146cde83bf4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VXJiYW4lMjBMb2Z0JTIwQXBhcnRtZW50fGVufDB8fDB8fHww",
    },
    price: 200000,
    location: "New York, New York",
    country: "USA",
  },
  {
    title: "Beachside Bungalow",
    description:
      "This breezy bungalow in Malibu offers direct access to the beach, with sunrises over the Pacific. Features include a wraparound porch, hammock garden, and outdoor shower.",
    image: {
      filename: "Default Listing",
      url: "https://plus.unsplash.com/premium_photo-1681922761648-d5e2c3972982?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmVhY2hzaWRlJTIwQnVuZ2Fsb3d8ZW58MHx8MHx8fDA%3D",
    },
    price: 180000,
    location: "Malibu, California",
    country: "USA",
  },
  {
    title: "Winery Estate Room",
    description:
      "Located within a working Napa Valley vineyard, this luxurious estate room offers scenic views, vineyard tours, and private wine tastings on request. Elegant interiors and countryside tranquility await.",
    image: {
      filename: "Default Listing",
      url: "https://images.unsplash.com/photo-1705591937259-913eb2a7a34d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fFdpbmVyeSUyMEVzdGF0ZSUyMFJvb218ZW58MHx8MHx8fDA%3D",
    },
    price: 220000,
    location: "Napa Valley, California",
    country: "USA",
  },
  {
    title: "Secluded Forest Treehouse",
    description:
      "Perched high among towering pines, this off-grid treehouse combines adventure and comfort. Solar-powered lighting, composting toilet, and forest views from every corner.",
    image: {
      filename: "Default Listing",
      url: "https://images.unsplash.com/photo-1729896632513-3b52a1c1b78c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U2VjbHVkZWQlMjBGb3Jlc3QlMjBUcmVlaG91c2V8ZW58MHx8MHx8fDA%3D",
    },
    price: 145000,
    location: "Whistler, British Columbia",
    country: "Canada",
  },
  {
    title: "Modern Studio Flat",
    description:
      "Perfect for city explorers, this London studio is sleek and modern with a fully-equipped kitchenette, fast Wi-Fi, and walking distance to major museums and parks.",
    image: {
      filename: "Default Listing",
      url: "https://images.unsplash.com/photo-1722604676100-c5e29d41ef50?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TW9kZXJuJTIwU3R1ZGlvJTIwRmxhdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    price: 95000,
    location: "London, England",
    country: "UK",
  },
  {
    title: "Countryside Cottage",
    description:
      "Traditional English charm meets modern amenities in this cozy cottage in the Cotswolds. Private garden, fireplace, and stone walls. Ideal for writers and weekend escapes.",
    image: {
      filename: "Default Listing",
      url: "https://images.unsplash.com/photo-1622908382850-34730895ccbb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q291bnRyeXNpZGUlMjBDb3R0YWdlfGVufDB8fDB8fHww",
    },
    price: 130000,
    location: "Cotswolds, England",
    country: "UK",
  },
  {
    title: "Luxury City Penthouse",
    description:
      "Panoramic skyline views from this glamorous Dubai penthouse. Rooftop infinity pool, designer kitchen, smart home automation, and marble finishes throughout.",
    image: {
      filename: "Default Listing",
      url: "https://images.unsplash.com/photo-1565623833408-d77e39b88af6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8THV4dXJ5JTIwQ2l0eSUyMFBlbnRob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    price: 500000,
    location: "Dubai Marina",
    country: "UAE",
  },
  {
    title: "Historic Manor House",
    description:
      "A stay steeped in history—this Georgian manor offers antique decor, formal gardens, and a breakfast conservatory. Experience the charm of old England in style.",
    image: {
      filename: "Default Listing",
      url: "https://images.unsplash.com/photo-1747752765197-6fd1ea154a8a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SGlzdG9yaWMlMjBNYW5vciUyMEhvdXNlfGVufDB8fDB8fHww",
    },
    price: 300000,
    location: "Bath, Somerset",
    country: "UK",
  },
  {
    title: "Downtown High‑Rise Condo",
    description:
      "Contemporary high-rise with floor-to-ceiling windows, 24/7 concierge, gym access, and sweeping city views. A true Sydney experience from the top floor.",
    image: {
      filename: "Default Listing",
      url: "https://images.unsplash.com/photo-1673165432945-a62c1a82d3ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RG93bnRvd24lMjBIaWdoJUUyJTgwJTkxUmlzZSUyMENvbmRvfGVufDB8fDB8fHww",
    },
    price: 210000,
    location: "Sydney, New South Wales",
    country: "Australia",
  },
  {
    title: "Safari Tent Lodge",
    description:
      "Adventure meets luxury in this tented lodge in Maasai Mara. King-sized beds, ensuite bathrooms, and guided safaris at dawn. Wake up to wildlife outside your window.",
    image: {
      filename: "Default Listing",
      url: "https://plus.unsplash.com/premium_photo-1686090450488-48ce19426bbe?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U2FmYXJpJTIwVGVudCUyMExvZGdlfGVufDB8fDB8fHww",
    },
    price: 250000,
    location: "Maasai Mara",
    country: "Kenya",
  },
  {
    title: "Snowy Alpine Chalet",
    description:
      "Perfect for ski enthusiasts, this cozy chalet includes ski-in/ski-out access, hot tub, and crackling fireplace. Breathtaking views of the Swiss Alps from the deck.",
    image: {
      filename: "Default Listing",
      url: "https://images.unsplash.com/photo-1550503736-c1a2c9033c03?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U25vd3klMjBBbHBpbmUlMjBDaGFsZXR8ZW58MHx8MHx8fDA%3D",
    },
    price: 275000,
    location: "Zermatt",
    country: "Switzerland",
  },
  {
    title: "Tropical Villa Retreat",
    description:
      "Hidden in the rice fields of Ubud, this luxurious villa has an infinity pool, spa services, and open-air architecture. Designed for rest and rejuvenation.",
    image: {
      filename: "Default Listing",
      url: "https://plus.unsplash.com/premium_photo-1697730270201-bdfc5b81a675?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VHJvcGljYWwlMjBWaWxsYSUyMFJldHJlYXR8ZW58MHx8MHx8fDA%3D",
    },
    price: 320000,
    location: "Bali",
    country: "Indonesia",
  },
  {
    title: "Minimalist Beach Flat",
    description:
      "Simple and elegant design with natural materials. Just steps away from Barceloneta beach. Includes a balcony, full kitchen, and sea breeze.",
    image: {
      filename: "Default Listing",
      url: "https://images.unsplash.com/photo-1452002434886-8aaf64143186?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fE1pbmltYWxpc3QlMjBCZWFjaCUyMEZsYXR8ZW58MHx8MHx8fDA%3D",
    },
    price: 190000,
    location: "Barcelona",
    country: "Spain",
  },
  {
    title: "Rustic Barn Conversion",
    description:
      "An old stone barn reimagined with modern interiors, vaulted ceilings, and vineyard views. Located on a working olive farm in Tuscany.",
    image: {
      filename: "Default Listing",
      url: "https://plus.unsplash.com/premium_photo-1694475703960-c12c592b0f49?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UnVzdGljJTIwQmFybiUyMENvbnZlcnNpb258ZW58MHx8MHx8fDA%3D",
    },
    price: 160000,
    location: "Tuscany",
    country: "Italy",
  },
  {
    title: "City Studio with Terrace",
    description:
      "Romantic top-floor apartment in Montmartre with a private terrace and views of the Eiffel Tower. Compact yet charming, perfect for couples.",
    image: {
      filename: "Default Listing",
      url: "https://plus.unsplash.com/premium_photo-1694030762510-1619d3c924a1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Q2l0eSUyMFN0dWRpbyUyMHdpdGglMjBUZXJyYWNlfGVufDB8fDB8fHww",
    },
    price: 205000,
    location: "Paris",
    country: "France",
  },
  {
    title: "Desert Eco‑Lodge",
    description:
      "Sustainable desert retreat with solar-powered showers, Bedouin tents, and stargazing sessions. Disconnect from the world in Moroccan serenity.",
    image: {
      filename: "Default Listing",
      url: "https://plus.unsplash.com/premium_photo-1699533135101-124e59ed5565?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RGVzZXJ0JTIwTG9kZ2V8ZW58MHx8MHx8fDA%3D",
    },
    price: 230000,
    location: "Marrakesh",
    country: "Morocco",
  },
  {
    title: "Island Overwater Bungalow",
    description:
      "Over-the-water bungalow with private deck, glass floor, and lagoon access. Perfect for honeymoons and tropical escapes in paradise.",
    image: {
      filename: "Default Listing",
      url: "https://plus.unsplash.com/premium_photo-1697730288131-6684ca63584b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SXNsYW5kJTIwT3ZlcndhdGVyJTIwQnVuZ2Fsb3d8ZW58MHx8MHx8fDA%3D",
    },
    price: 400000,
    location: "Maldives",
    country: "Maldives",
  },
  {
    title: "Countryside Vineyard Cottage",
    description:
      "A stone cottage surrounded by vines, offering wine tastings, sunset verandas, and Mediterranean charm. Located on a family-run vineyard.",
    image: {
      filename: "Default Listing",
      url: "https://images.unsplash.com/photo-1609706646857-9552684bdc27?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q291bnRyeXNpZGUlMjBWaW5leWFyZCUyMENvdHRhZ2V8ZW58MHx8MHx8fDA%3D",
    },
    price: 180000,
    location: "Santorini",
    country: "Greece",
  },
  {
    title: "Metropolitan Studio Suite",
    description:
      "Small but stylish suite in Shinjuku. Fast Wi-Fi, high-tech toilet, and walkable to everything Tokyo has to offer. Compact Japanese living at its best.",
    image: {
      filename: "Default Listing",
      url: "https://plus.unsplash.com/premium_photo-1661853413809-6be6bed796d9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWV0cm9wb2xpdGFuJTIwU3R1ZGlvJTIwU3VpdGV8ZW58MHx8MHx8fDA%3D",
    },
    price: 195000,
    location: "Tokyo",
    country: "Japan",
  },
  {
    title: "My new villa",
    description: "By the beach",
    image: {
      filename: "Default Listing",
      url: "https://images.unsplash.com/photo-1679683171686-6242c0fde282?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tJTIwdmlsbGF8ZW58MHx8MHx8fDA%3D",
    },
    price: 45000000,
    location: "Goa",
    country: "India",
  },
  {
    title: "Countryside Caravan Stay",
    description: "Cozy retro caravan in green fields.",
    image: {
      filename: "Default Listing",
      url: "https://images.unsplash.com/photo-1709117324824-e19800f3d9ea?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q291bnRyeXNpZGUlMjBDYXJhdmFuJTIwU3RheXxlbnwwfHwwfHx8MA%3D%3D",
    },
    price: 85000,
    location: "Provence",
    country: "France",
  },
  {
    title: "City Penthouse with View",
    description: "Rooftop terrace overlooking city lights.",
    image: {
      filename: "Default Listing",
      url: "https://images.unsplash.com/photo-1674494777503-f5d3484104c9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2l0eSUyMFBlbnRob3VzZSUyMHdpdGglMjBWaWV3fGVufDB8fDB8fHww",
    },
    price: 350000,
    location: "San Francisco",
    country: "USA",
  },
  {
    title: "Clifftop Glass House",
    description: "Modern house with glass walls and cliff views.",
    image: {
      filename: "Default Listing",
      url: "https://images.unsplash.com/photo-1715173679204-af96cba41021?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q2xpZmZ0b3AlMjBHbGFzcyUyMEhvdXNlfGVufDB8fDB8fHww",
    },
    price: 380000,
    location: "Big Sur, California",
    country: "USA",
  },
  {
    title: "City Heritage Studio",
    description: "Historic building meets modern design.",
    image: {
      filename: "Default Listing",
      url: "https://plus.unsplash.com/premium_photo-1692388619456-641ea333bcb6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2l0eSUyMEhlcml0YWdlJTIwU3R1ZGlvfGVufDB8fDB8fHww",
    },
    price: 175000,
    location: "Rome",
    country: "Italy",
  },
  {
    title: "Riverside Cabin Retreat",
    description: "Cabin next to a gentle river.",
    image: {
      filename: "Default Listing",
      url: "https://images.unsplash.com/photo-1695589874975-f5259411a258?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Uml2ZXJzaWRlJTIwQ2FiaW4lMjBSZXRyZWF0fGVufDB8fDB8fHww",
    },
    price: 140000,
    location: "Loch Ness",
    country: "Scotland",
  },
  {
    title: "Treetop Eco‑Cabin",
    description: "Elevated cabin nestled in the treetops.",
    image: {
      filename: "Default Listing",
      url: "https://images.unsplash.com/photo-1667839947751-79a1f28caded?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VHJlZXRvcCUyMEVjbyVFMiU4MCU5MUNhYmlufGVufDB8fDB8fHww",
    },
    price: 165000,
    location: "Costa Rica",
    country: "Costa Rica",
  },
  {
    title: "Minimalist White Loft",
    description: "Clean lines, open space, minimal aesthetic.",
    image: {
      filename: "Default Listing",
      url: "https://images.unsplash.com/photo-1722764373630-af90a8eb1ab3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TWluaW1hbGlzdCUyMFdoaXRlJTIwTG9mdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    price: 215000,
    location: "Berlin",
    country: "Germany",
  },
  {
    title: "Lakeside Modern Home",
    description: "Elegant home by a serene lake.",
    image: {
      filename: "Default Listing",
      url: "https://images.unsplash.com/photo-1637946095935-75936cf3c11c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TGFrZXNpZGUlMjBNb2Rlcm4lMjBIb21lfGVufDB8fDB8fHww",
    },
    price: 260000,
    location: "Queenstown",
    country: "New Zealand",
  },
  {
    title: "Art‑Deco Rooftop Apartment",
    description: "Stylish apartment with Art Deco flair.",
    image: {
      filename: "Default Listing",
      url: "https://images.unsplash.com/photo-1617717760983-c680c284842d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QXJ0JUUyJTgwJTkxRGVjbyUyMFJvb2Z0b3AlMjBBcGFydG1lbnR8ZW58MHx8MHx8fDA%3D",
    },
    price: 225000,
    location: "Buenos Aires",
    country: "Argentina",
  },
  {
    title: "Sunny Terrace House",
    description: "Bright terrace and modern interior.",
    image: {
      filename: "Default Listing",
      url: "https://images.unsplash.com/photo-1603100229840-ca6ae090b406?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U3VubnklMjBUZXJyYWNlJTIwSG91c2V8ZW58MHx8MHx8fDA%3D",
    },
    price: 240000,
    location: "Lisbon",
    country: "Portugal",
  },
];

module.exports = { data: sampleData };
