export default defineEventHandler((event) => {
  return [
    //Rain
    {
      id: 1,
      title: "Rain & Thunders",
      extraSound: [
        {
          soundId: 1,
          soundIcon: "/images/Rain/Refreshing Rain.jpg",
          sound: "/sounds/Rain/Refreshing Rain.mp3",
          isLocked: false,
        },
        {
          soundId: 2,
          soundIcon: "/images/Rain/Rain in Window.jpg",
          sound: "/sounds/Rain/Rain in Window.mp3",
          isLocked: false,
        },
        {
          soundId: 3,
          soundIcon: "/images/Rain/Rain in Forest.jpg",
          sound: "/sounds/Rain/Rain in Forest.mp3",
          isLocked: false,
        },
        {
          soundId: 4,
          soundIcon: "/images/Rain/Rain on Leaves.jpg",
          sound: "/sounds/Rain/Rain on Leaves.mp3",
          isLocked: false,
        },
        {
          soundId: 5,
          soundIcon: "/images/Rain/Rain under Umbrella.jpg",
          sound: "/sounds/Rain/Rain under Umbrella.mp3",
          isLocked: true,
          premiumCard: true,
        },
        {
          soundId: 6,
          soundIcon: "/images/Rain/Thunderstorm.jpg",
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
      extraSound: [
        {
          soundId: 1,
          soundIcon: "/images/Nature/Peaceful Night.jpg",
          sound: "/sounds/Nature/Peaceful Night.mp3",
          isLocked: false,
        },
        {
          soundId: 2,
          soundIcon: "/images/Nature/Vivid Creek.jpg",
          sound: "/sounds/Nature/Vivid Creek.mp3",
          isLocked: false,
        },
        {
          soundId: 3,
          soundIcon: "/images/Nature/Winter Cottage.jpg",
          sound: "/sounds/Nature/Winter Cottage.mp3",
          isLocked: false,
        },

        {
          soundId: 4,
          soundIcon: "/images/Nature/Ocean.jpg",
          sound: "/sounds/Nature/Ocean.mp3",
          isLocked: true,
          premiumCard: true,
        },

        {
          soundId: 5,
          soundIcon: "/images/Nature/Autumn Woods.jpg",
          sound: "/sounds/Nature/Autumn Woods.mp3",
          isLocked: false,
        },
        {
          soundId: 6,
          soundIcon: "/images/Nature/Quiet Cave.jpg",
          sound: "/sounds/Nature/Quiet Cave.mp3",
          isLocked: true,
          premiumCard: true,
        },
        {
          soundId: 7,
          soundIcon: "/images/Nature/Desert.jpg",
          sound: "/sounds/Nature/Desert.mp3",
          isLocked: false,
        },
        {
          soundId: 8,
          soundIcon: "/images/Nature/Lake.jpg",
          sound: "/sounds/Nature/Lake.mp3",
          isLocked: false,
        },
      ],
    },
    //Animals
    {
      id: 3,
      title: "Animals",
      extraSound: [
        {
          soundId: 1,
          soundIcon: "/images/Relax/Relax.jpg",
          sound: "/sounds/Relax/Relax.mp3",
          isLocked: false,
        },
        {
          soundId: 2,
          soundIcon: "/images/Relax/Reflection.jpg",
          sound: "/sounds/Relax/Reflection.mp3",
          isLocked: false,
        },
        {
          soundId: 3,
          soundIcon: "/images/Relax/Calm.jpg",
          sound: "/sounds/Relax/Calm.mp3",
          isLocked: false,
        },
        {
          soundId: 4,
          soundIcon: "/images/Relax/Hope.jpg",
          sound: "/sounds/Relax/Hope.mp3",
          isLocked: true,
          premiumCard: true,
        },
        {
          soundId: 5,
          soundIcon: "/images/Relax/Serenity.jpg",
          sound: "/sounds/Relax/Serenity.mp3",
          isLocked: false,
        },
        {
          soundId: 6,
          soundIcon: "/images/Relax/Inspiration.jpg",
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
      extraSound: [
        {
          soundId: 1,
          soundIcon: "/images/Transport/Vintage Train.jpg",
          sound: "/sounds/Transport/Vintage Train.mp3",
          isLocked: false,
        },
        {
          soundId: 2,
          soundIcon: "/images/Transport/Above the Sky.jpg",
          sound: "/sounds/Transport/Above the Sky.mp3",
          isLocked: false,
        },
        {
          soundId: 3,
          soundIcon: "/images/Transport/Soothing Ride.jpg",
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
      extraSound: [
        {
          soundId: 1,
          soundIcon: "/images/Noise/White Noise.jpg",
          sound: "/sounds/Noise/White Noise.mp3",
          isLocked: false,
        },
        {
          soundId: 2,
          soundIcon: "/images/Noise/Brown Noise.jpg",
          sound: "/sounds/Noise/Brown Noise.mp3",
          isLocked: false,
        },
        {
          soundId: 3,
          soundIcon: "/images/Noise/Pink Noise.jpg",
          sound: "/sounds/Noise/Pink Noise.mp3",
          isLocked: true,
          premiumCard: true,
        },
      ],
    },
    //ASMR
    {
      id: 5,
      title: "ASMR",
      extraSound: [
        {
          soundId: 1,
          soundIcon: "/images/Noise/White Noise.jpg",
          sound: "/sounds/Noise/White Noise.mp3",
          isLocked: false,
        },
        {
          soundId: 2,
          soundIcon: "/images/Noise/Brown Noise.jpg",
          sound: "/sounds/Noise/Brown Noise.mp3",
          isLocked: false,
        },
        {
          soundId: 3,
          soundIcon: "/images/Noise/Pink Noise.jpg",
          sound: "/sounds/Noise/Pink Noise.mp3",
          isLocked: true,
          premiumCard: true,
        },
      ],
    },
    //Lullabies
    {
      id: 5,
      title: "Lullabies",
      extraSound: [
        {
          soundId: 1,
          soundIcon: "/images/Noise/White Noise.jpg",
          sound: "/sounds/Noise/White Noise.mp3",
          isLocked: false,
        },
        {
          soundId: 2,
          soundIcon: "/images/Noise/Brown Noise.jpg",
          sound: "/sounds/Noise/Brown Noise.mp3",
          isLocked: false,
        },
        {
          soundId: 3,
          soundIcon: "/images/Noise/Pink Noise.jpg",
          sound: "/sounds/Noise/Pink Noise.mp3",
          isLocked: true,
          premiumCard: true,
        },
      ],
    },
  ];
});
