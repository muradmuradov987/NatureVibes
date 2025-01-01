export default defineEventHandler((event) => {
  return [
    //Rain
    {
      id: 1,
      title: "Rain",
      card: [
        {
          cardId: 1,
          cardName: "Refreshing Rain",
          imageUrl: "/images/Rain/Refreshing Rain.jpg",
          sound: "/sounds/Rain/Refreshing Rain.mp3",
          isLocked: false,
        },
        {
          cardId: 2,
          cardName: "Rain in Window",
          imageUrl: "/images/Rain/Rain in Window.jpg",
          sound: "/sounds/Rain/Rain in Window.mp3",
          isLocked: false,
        },
        {
          cardId: 3,
          cardName: "Rain in Forest",
          imageUrl: "/images/Rain/Rain in Forest.jpg",
          sound: "/sounds/Rain/Rain in Forest.mp3",
          isLocked: false,
        },
        {
          cardId: 4,
          cardName: "Rain on Leaves",
          imageUrl: "/images/Rain/Rain on Leaves.jpg",
          sound: "/sounds/Rain/Rain on Leaves.mp3",
          isLocked: false,
        },
        {
          cardId: 5,
          cardName: "Rain under Umbrella",
          imageUrl: "/images/Rain/Rain under Umbrella.jpg",
          sound: "/sounds/Rain/Rain under Umbrella.mp3",
          isLocked: true,
          premiumCard: true,
        },
        {
          cardId: 6,
          cardName: "Thunderstorm",
          imageUrl: "/images/Rain/Thunderstorm.jpg",
          sound: "/sounds/Rain/Thunderstorm.mp3",
          isLocked: true,
          premiumCard: true,
        },
      ],
    },
    //Nature
    {
      id: 2,
      title: "Nature",
      card: [
        {
          cardId: 1,
          cardName: "Peaceful Night",
          imageUrl: "/images/Nature/Peaceful Night.jpg",
          sound: "/sounds/Nature/Peaceful Night.mp3",
          isLocked: false,
        },
        {
          cardId: 2,
          cardName: "Vivid Creek",
          imageUrl: "/images/Nature/Vivid Creek.jpg",
          sound: "/sounds/Nature/Vivid Creek.mp3",
          isLocked: false,
        },
        {
          cardId: 3,
          cardName: "Winter Cottage",
          imageUrl: "/images/Nature/Winter Cottage.jpg",
          sound: "/sounds/Nature/Winter Cottage.mp3",
          isLocked: false,
        },

        {
          cardId: 4,
          cardName: "Ocean",
          imageUrl: "/images/Nature/Ocean.jpg",
          sound: "/sounds/Nature/Ocean.mp3",
          isLocked: true,
          premiumCard: true,
        },

        {
          cardId: 5,
          cardName: "Autumn Woods",
          imageUrl: "/images/Nature/Autumn Woods.jpg",
          sound: "/sounds/Nature/Autumn Woods.mp3",
          isLocked: false,
        },
        {
          cardId: 6,
          cardName: "Quiet Cave",
          imageUrl: "/images/Nature/Quiet Cave.jpg",
          sound: "/sounds/Nature/Quiet Cave.mp3",
          isLocked: true,
          premiumCard: true,
        },
        {
          cardId: 7,
          cardName: "Desert",
          imageUrl: "/images/Nature/Desert.jpg",
          sound: "/sounds/Nature/Desert.mp3",
          isLocked: false,
        },
        {
          cardId: 8,
          cardName: "Lake",
          imageUrl: "/images/Nature/Lake.jpg",
          sound: "/sounds/Nature/Lake.mp3",
          isLocked: false,
        },
      ],
    },
    //Relax
    {
      id: 3,
      title: "Relax",
      card: [
        {
          cardId: 1,
          cardName: "Relax",
          imageUrl: "/images/Relax/Relax.jpg",
          sound: "/sounds/Relax/Relax.mp3",
          isLocked: false,
        },
        {
          cardId: 2,
          cardName: "Reflection",
          imageUrl: "/images/Relax/Reflection.jpg",
          sound: "/sounds/Relax/Reflection.mp3",
          isLocked: false,
        },
        {
          cardId: 3,
          cardName: "Calm",
          imageUrl: "/images/Relax/Calm.jpg",
          sound: "/sounds/Relax/Calm.mp3",
          isLocked: false,
        },
        {
          cardId: 4,
          cardName: "Hope",
          imageUrl: "/images/Relax/Hope.jpg",
          sound: "/sounds/Relax/Hope.mp3",
          isLocked: true,
          premiumCard: true,
        },
        {
          cardId: 5,
          cardName: "Serenity",
          imageUrl: "/images/Relax/Serenity.jpg",
          sound: "/sounds/Relax/Serenity.mp3",
          isLocked: false,
        },
        {
          cardId: 6,
          cardName: "Inspiration",
          imageUrl: "/images/Relax/Inspiration.jpg",
          sound: "/sounds/Relax/Inspiration.mp3",
          isLocked: true,
          premiumCard: true,
        },
      ],
    },
    //Transport
    {
      id: 4,
      title: "Transport",
      card: [
        {
          cardId: 1,
          cardName: "Vintage Train",
          imageUrl: "/images/Transport/Vintage Train.jpg",
          sound: "/sounds/Transport/Vintage Train.mp3",
          isLocked: false,
        },
        {
          cardId: 2,
          cardName: "Above the Sky",
          imageUrl: "/images/Transport/Above the Sky.jpg",
          sound: "/sounds/Transport/Above the Sky.mp3",
          isLocked: false,
        },
        {
          cardId: 3,
          cardName: "Soothing Ride",
          imageUrl: "/images/Transport/Soothing Ride.jpg",
          sound: "/sounds/Transport/Soothing Ride.mp3",
          isLocked: true,
          premiumCard: true,
        },
      ],
    },
    //Noise
    {
      id: 5,
      title: "Noise",
      card: [
        {
          cardId: 1,
          cardName: "White Noise",
          imageUrl: "/images/Noise/White Noise.jpg",
          sound: "/sounds/Noise/White Noise.mp3",
          isLocked: false,
        },
        {
          cardId: 2,
          cardName: "Brown Noise",
          imageUrl: "/images/Noise/Brown Noise.jpg",
          sound: "/sounds/Noise/Brown Noise.mp3",
          isLocked: false,
        },
        {
          cardId: 3,
          cardName: "Pink Noise",
          imageUrl: "/images/Noise/Pink Noise.jpg",
          sound: "/sounds/Noise/Pink Noise.mp3",
          isLocked: true,
          premiumCard: true,
        },
      ],
    },
  ];
});
