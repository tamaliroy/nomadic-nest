const tripDetails = [
    {
      id: 1,
      title: 'Summer holiday in greece',
      destination: ['Santorini', 'Fira', 'Oia'],
      startDate: "03-01-2025",
      endDate: "03-10-2025",
      description:
        "Experience the beauty of Paris with its famous landmarks, rich culture, and amazing cuisine.",
      itinerary: [
        {
          date: "03-01-2025",
          activities: [
            {
              time: '08:00 am',
              activityType: 'things-to-do',
              name: 'Santorini Classic Catamaran Cruise',
              rating: '',
              noOfReviews: '2307',
              startingPrice: '8840',
              duration: '5h'
            },
            {
              time: '12:00 pm',
              activityType: 'food-and-drink',
              name: 'Beefbar Santorini',
              rating: '',
              noOfReviews: '346',
              startingPrice: '8840'
            },
            {
              activityType: 'place-to-stay',
              name: 'Santorini Kastelli Resort',
              rating: '',
              noOfReviews: '1322',
              startingPrice: '8840'
            }
          ]
        },
        {
          date: "03-02-2025",
          activities: [
            {
              activityType: 'place-to-stay',
              name: 'Santorini Kastelli Resort',
              rating: '',
              noOfReviews: '1322',
              startingPrice: '8840'
            }
          ]
        },
        {
          date: "03-03-2025",
          activities: [
            {
              activityType: 'place-to-stay',
              name: 'Santorini Kastelli Resort',
              rating: '',
              noOfReviews: '1322',
              startingPrice: '8840'
            }
          ]
        }
      ],
      imageUrl: "https://example.com/paris.jpg"
    },
    {
      id: 2,
      title: 'Japan Vibes',
      destination: "Tokyo, Japan",
      startDate: "04-15-2025",
      endDate: "04-24-2025",
      description:
        "Explore the vibrant city of Tokyo, from ancient temples to futuristic skyscrapers.",
        itinerary: [
          {
            date: "04-15-2025",
            activities: ["Arrival and check-in", "Explore local neighborhood"]
          },
          {
            date: "04-16-2025",
            activities: ["Visit Senso-ji Temple", "Walk around Asakusa"]
          },
          {
            date: "04-17-2025",
            activities: ["Shibuya Crossing", "Hachiko Statue visit", "Shopping in Shibuya"]
          },
          {
            date: "04-18-2025",
            activities: ["Tokyo Skytree tour", "Dinner with a view"]
          },
          {
            date: "04-19-2025",
            activities: ["Day trip to Nikko", "Return in evening"]
          },
          {
            date: "04-20-2025",
            activities: ["Explore Akihabara", "Tech and gaming stores visit"]
          },
          {
            date: "04-21-2025",
            activities: ["Visit Meiji Shrine", "Stroll in Yoyogi Park"]
          },
          {
            date: "04-22-2025",
            activities: ["Local cuisine tasting tour", "Evening free time"]
          },
          {
            date: "04-23-2025",
            activities: ["Explore Ginza shopping district"]
          },
          {
            date: "04-24-2025",
            activities: ["Pack up, last minute shopping", "Farewell dinner"]
          }
        ],
      imageUrl: "https://example.com/tokyo.jpg"
    },
    {
      id: 3,
      destination: "New York City, USA",
      startDate: "08-11-2025",
      endDate: "08-20-2025",
      description:
        "Discover the bustling streets of New York City, with its iconic skyline, Broadway shows, and diverse neighborhoods.",
        itinerary: [
          {
            date: "08-11-2025",
            activities: ["Arrival and check-in", "Evening walk in Times Square"]
          },
          {
            date: "08-12-2025",
            activities: ["Visit Statue of Liberty", "Ellis Island tour"]
          },
          {
            date: "08-13-2025",
            activities: ["Central Park stroll", "Picnic lunch", "Museum visit (MoMA)"]
          },
          {
            date: "08-14-2025",
            activities: ["Broadway show", "Dinner in Hell’s Kitchen"]
          },
          {
            date: "08-15-2025",
            activities: ["Explore Brooklyn", "Visit Brooklyn Bridge"]
          },
          {
            date: "08-16-2025",
            activities: ["Shopping in SoHo", "Explore local cafes"]
          },
          {
            date: "08-17-2025",
            activities: ["Free day to explore", "Pack up for departure"]
          }
        ],
      imageUrl: "https://example.com/nyc.jpg"
    }
  ];
  
  export default tripDetails;
  