// data.js
// Replace the image paths with your own assets in /assets/images/...

export const quizData = {
  personality: {
    title: "Personality Quiz",
    heroImage: "assets/images/personality/hero.jpg",
    summary: "Discover your style, energy, and personality type.",
    results: {
      adventurous: {
        title: "You Are an Adventurous Explorer",
        image: "assets/images/results/personality-adventurous.jpg",
        description:
          "You enjoy new experiences, changing plans, and stepping outside your comfort zone. You are curious, bold, and ready to try something exciting."
      },
      creative: {
        title: "You Are a Creative Thinker",
        image: "assets/images/results/personality-creative.jpg",
        description:
          "You like original ideas, self-expression, and imaginative choices. You often see possibilities that other people miss."
      },
      calm: {
        title: "You Are a Calm Observer",
        image: "assets/images/results/personality-calm.jpg",
        description:
          "You prefer peace, balance, and thoughtful decisions. You bring a steady energy and usually think before acting."
      },
      social: {
        title: "You Are a Social Spark",
        image: "assets/images/results/personality-social.jpg",
        description:
          "You enjoy people, conversation, and shared experiences. You bring energy into the room and like being around others."
      }
    },
    questions: [
      {
        id: 1,
        question: "You have a free afternoon. What sounds best?",
        image: "assets/images/questions/personality/q1.jpg",
        answers: [
          {
            text: "Go somewhere new",
            image: "assets/images/options/personality/adventure.jpg",
            resultKey: "adventurous"
          },
          {
            text: "Make something creative",
            image: "assets/images/options/personality/creative.jpg",
            resultKey: "creative"
          },
          {
            text: "Stay in and relax",
            image: "assets/images/options/personality/calm.jpg",
            resultKey: "calm"
          },
          {
            text: "Meet friends",
            image: "assets/images/options/personality/social.jpg",
            resultKey: "social"
          }
        ]
      },
      {
        id: 2,
        question: "Which sentence feels most like you?",
        image: "assets/images/questions/personality/q2.jpg",
        answers: [
          {
            text: "I like adventure",
            image: "assets/images/options/personality/adventure-2.jpg",
            resultKey: "adventurous"
          },
          {
            text: "I like ideas",
            image: "assets/images/options/personality/creative-2.jpg",
            resultKey: "creative"
          },
          {
            text: "I like peace",
            image: "assets/images/options/personality/calm-2.jpg",
            resultKey: "calm"
          },
          {
            text: "I like people",
            image: "assets/images/options/personality/social-2.jpg",
            resultKey: "social"
          }
        ]
      }
    ]
  },

  fashion: {
    title: "Fashion Quiz",
    heroImage: "assets/images/fashion/hero.jpg",
    summary: "Find your style vibe and outfit personality.",
    results: {
      street: {
        title: "You Are a Street Style Trendsetter",
        image: "assets/images/results/fashion-street.jpg",
        description:
          "You like confident looks, bold details, and outfits that stand out. Your style feels modern, playful, and expressive."
      },
      classic: {
        title: "You Are a Classic Stylist",
        image: "assets/images/results/fashion-classic.jpg",
        description:
          "You prefer timeless pieces, clean lines, and polished looks. Your style is elegant, balanced, and reliable."
      },
      sporty: {
        title: "You Are a Sporty Casual Star",
        image: "assets/images/results/fashion-sporty.jpg",
        description:
          "You love comfort, movement, and practical style. Your looks are relaxed, easy to wear, and full of energy."
      },
      glam: {
        title: "You Are a Glam Style Icon",
        image: "assets/images/results/fashion-glam.jpg",
        description:
          "You enjoy shine, confidence, and standout fashion choices. Your style feels bold, polished, and exciting."
      }
    },
    questions: [
      {
        id: 1,
        question: "Pick your ideal outfit for a weekend outing.",
        image: "assets/images/questions/fashion/q1.jpg",
        answers: [
          {
            text: "Oversized jacket and trainers",
            image: "assets/images/options/fashion/street.jpg",
            resultKey: "street"
          },
          {
            text: "Neat shirt and jeans",
            image: "assets/images/options/fashion/classic.jpg",
            resultKey: "classic"
          },
          {
            text: "Hoodie and leggings",
            image: "assets/images/options/fashion/sporty.jpg",
            resultKey: "sporty"
          },
          {
            text: "Sparkly top and boots",
            image: "assets/images/options/fashion/glam.jpg",
            resultKey: "glam"
          }
        ]
      },
      {
        id: 2,
        question: "What accessory do you pick first?",
        image: "assets/images/questions/fashion/q2.jpg",
        answers: [
          {
            text: "Bold cap",
            image: "assets/images/options/fashion/cap.jpg",
            resultKey: "street"
          },
          {
            text: "Simple watch",
            image: "assets/images/options/fashion/watch.jpg",
            resultKey: "classic"
          },
          {
            text: "Backpack",
            image: "assets/images/options/fashion/backpack.jpg",
            resultKey: "sporty"
          },
          {
            text: "Statement earrings",
            image: "assets/images/options/fashion/earrings.jpg",
            resultKey: "glam"
          }
        ]
      }
    ]
  },

  travel: {
    title: "Travel Quiz",
    heroImage: "assets/images/travel/hero.jpg",
    summary: "Discover your dream trip personality.",
    results: {
      beach: {
        title: "You Are a Beach Explorer",
        image: "assets/images/results/travel-beach.jpg",
        description:
          "You enjoy sunshine, open views, and relaxed adventures. Your perfect trip mixes fun, nature, and calm moments."
      },
      city: {
        title: "You Are a City Explorer",
        image: "assets/images/results/travel-city.jpg",
        description:
          "You like busy streets, culture, food, and bright places. You enjoy discovering new things around every corner."
      },
      mountain: {
        title: "You Are a Mountain Wanderer",
        image: "assets/images/results/travel-mountain.jpg",
        description:
          "You love fresh air, scenic views, and quiet space. Your dream trip feels peaceful, refreshing, and adventurous."
      },
      roadtrip: {
        title: "You Are a Road Trip Adventurer",
        image: "assets/images/results/travel-roadtrip.jpg",
        description:
          "You like freedom, surprises, and changing scenery. You enjoy the journey as much as the destination."
      }
    },
    questions: [
      {
        id: 1,
        question: "Which place would you visit first?",
        image: "assets/images/questions/travel/q1.jpg",
        answers: [
          {
            text: "A sunny beach",
            image: "assets/images/options/travel/beach.jpg",
            resultKey: "beach"
          },
          {
            text: "A busy city",
            image: "assets/images/options/travel/city.jpg",
            resultKey: "city"
          },
          {
            text: "A mountain trail",
            image: "assets/images/options/travel/mountain.jpg",
            resultKey: "mountain"
          },
          {
            text: "An open highway",
            image: "assets/images/options/travel/roadtrip.jpg",
            resultKey: "roadtrip"
          }
        ]
      },
      {
        id: 2,
        question: "What kind of travel photo do you love most?",
        image: "assets/images/questions/travel/q2.jpg",
        answers: [
          {
            text: "Ocean view",
            image: "assets/images/options/travel/ocean-view.jpg",
            resultKey: "beach"
          },
          {
            text: "City lights",
            image: "assets/images/options/travel/city-lights.jpg",
            resultKey: "city"
          },
          {
            text: "Cloudy peaks",
            image: "assets/images/options/travel/peaks.jpg",
            resultKey: "mountain"
          },
          {
            text: "Map and car",
            image: "assets/images/options/travel/map-car.jpg",
            resultKey: "roadtrip"
          }
        ]
      }
    ]
  },

  color: {
    title: "Color Quiz",
    heroImage: "assets/images/color/hero.jpg",
    summary: "Find the color palette that matches your mood.",
    results: {
      red: {
        title: "You Are Bold Red",
        image: "assets/images/results/color-red.jpg",
        description:
          "You are energetic, strong, and full of confidence. You like attention-grabbing choices and powerful expression."
      },
      blue: {
        title: "You Are Calm Blue",
        image: "assets/images/results/color-blue.jpg",
        description:
          "You are thoughtful, balanced, and steady. You like peace, clarity, and a cool sense of control."
      },
      yellow: {
        title: "You Are Bright Yellow",
        image: "assets/images/results/color-yellow.jpg",
        description:
          "You are cheerful, optimistic, and lively. You enjoy positive energy and a sunny outlook."
      },
      purple: {
        title: "You Are Creative Purple",
        image: "assets/images/results/color-purple.jpg",
        description:
          "You are imaginative, unique, and expressive. You like colours that feel artistic and a little magical."
      }
    },
    questions: [
      {
        id: 1,
        question: "Pick a colour mood for your room.",
        image: "assets/images/questions/color/q1.jpg",
        answers: [
          { text: "Red", image: "assets/images/options/color/red.jpg", resultKey: "red" },
          { text: "Blue", image: "assets/images/options/color/blue.jpg", resultKey: "blue" },
          { text: "Yellow", image: "assets/images/options/color/yellow.jpg", resultKey: "yellow" },
          { text: "Purple", image: "assets/images/options/color/purple.jpg", resultKey: "purple" }
        ]
      },
      {
        id: 2,
        question: "Which object looks most appealing?",
        image: "assets/images/questions/color/q2.jpg",
        answers: [
          { text: "Red sneaker", image: "assets/images/options/color/red-shoe.jpg", resultKey: "red" },
          { text: "Blue sky", image: "assets/images/options/color/blue-sky.jpg", resultKey: "blue" },
          { text: "Yellow sun", image: "assets/images/options/color/yellow-sun.jpg", resultKey: "yellow" },
          { text: "Purple flowers", image: "assets/images/options/color/purple-flowers.jpg", resultKey: "purple" }
        ]
      }
    ]
  },

  love: {
    title: "Love Quiz",
    heroImage: "assets/images/love/hero.jpg",
    summary: "Explore your relationship style.",
    results: {
      romantic: {
        title: "You Are a Romantic Heart",
        image: "assets/images/results/love-romantic.jpg",
        description:
          "You value emotion, connection, and thoughtful gestures. You like meaningful relationships and warm moments."
      },
      loyal: {
        title: "You Are Deeply Loyal",
        image: "assets/images/results/love-loyal.jpg",
        description:
          "You are dependable, caring, and steady. You build trust slowly and value real commitment."
      },
      playful: {
        title: "You Are Playful and Fun",
        image: "assets/images/results/love-playful.jpg",
        description:
          "You enjoy light-hearted energy, jokes, and excitement. You like relationships that feel lively and enjoyable."
      },
      thoughtful: {
        title: "You Are a Thoughtful Partner",
        image: "assets/images/results/love-thoughtful.jpg",
        description:
          "You notice details, listen carefully, and show care through actions. You value balance and understanding."
      }
    },
    questions: [
      {
        id: 1,
        question: "What matters most in a relationship?",
        image: "assets/images/questions/love/q1.jpg",
        answers: [
          { text: "Romance", image: "assets/images/options/love/romance.jpg", resultKey: "romantic" },
          { text: "Trust", image: "assets/images/options/love/trust.jpg", resultKey: "loyal" },
          { text: "Fun", image: "assets/images/options/love/fun.jpg", resultKey: "playful" },
          { text: "Understanding", image: "assets/images/options/love/understanding.jpg", resultKey: "thoughtful" }
        ]
      },
      {
        id: 2,
        question: "Choose a date idea.",
        image: "assets/images/questions/love/q2.jpg",
        answers: [
          { text: "Sunset dinner", image: "assets/images/options/love/dinner.jpg", resultKey: "romantic" },
          { text: "Quiet walk", image: "assets/images/options/love/walk.jpg", resultKey: "loyal" },
          { text: "Theme park", image: "assets/images/options/love/theme-park.jpg", resultKey: "playful" },
          { text: "Coffee and talk", image: "assets/images/options/love/coffee-talk.jpg", resultKey: "thoughtful" }
        ]
      }
    ]
  },

  pets: {
    title: "Pets Quiz",
    heroImage: "assets/images/pets/hero.jpg",
    summary: "Discover which pet vibe matches you.",
    results: {
      cat: {
        title: "You Are a Cat Spirit",
        image: "assets/images/results/pets-cat.jpg",
        description:
          "You like independence, comfort, and calm spaces. You enjoy doing things your own way, with style."
      },
      dog: {
        title: "You Are a Dog Spirit",
        image: "assets/images/results/pets-dog.jpg",
        description:
          "You are loyal, friendly, and full of energy. You enjoy connection, activity, and fun company."
      },
      rabbit: {
        title: "You Are a Rabbit Spirit",
        image: "assets/images/results/pets-rabbit.jpg",
        description:
          "You are gentle, soft-hearted, and observant. You like quiet comfort and a safe environment."
      },
      bird: {
        title: "You Are a Bird Spirit",
        image: "assets/images/results/pets-bird.jpg",
        description:
          "You are curious, expressive, and free-spirited. You like movement, variety, and a little adventure."
      }
    },
    questions: [
      {
        id: 1,
        question: "Which pet room would you choose?",
        image: "assets/images/questions/pets/q1.jpg",
        answers: [
          { text: "A cozy cat corner", image: "assets/images/options/pets/cat.jpg", resultKey: "cat" },
          { text: "A playful dog park", image: "assets/images/options/pets/dog.jpg", resultKey: "dog" },
          { text: "A soft rabbit den", image: "assets/images/options/pets/rabbit.jpg", resultKey: "rabbit" },
          { text: "A bright bird cage", image: "assets/images/options/pets/bird.jpg", resultKey: "bird" }
        ]
      },
      {
        id: 2,
        question: "Which pet personality fits you best?",
        image: "assets/images/questions/pets/q2.jpg",
        answers: [
          { text: "Independent", image: "assets/images/options/pets/independent.jpg", resultKey: "cat" },
          { text: "Loyal", image: "assets/images/options/pets/loyal.jpg", resultKey: "dog" },
          { text: "Gentle", image: "assets/images/options/pets/gentle.jpg", resultKey: "rabbit" },
          { text: "Curious", image: "assets/images/options/pets/curious.jpg", resultKey: "bird" }
        ]
      }
    ]
  }
};
