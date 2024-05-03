let conversation = [
    { message: "Hey there! 😊 How's your day going?", user: "sender" }, // Sarah
    { message: "Hi Sarah! My day's been pretty good, thanks for asking! How about you?", user: "receiver" }, // Alex
    { message: "I'm doing well, just chilling at home after work. What do you do for fun?", user: "sender" }, // Sarah
    { message: "Nice! I enjoy hiking on weekends, trying out new restaurants, and sometimes just binge-watching Netflix. How about you?", user: "receiver" }, // Alex
    { message: "Hiking sounds fun! I'm into painting, reading, and lately, I've been trying my hand at cooking new recipes.", user: "sender" }, // Sarah
    { message: "That's awesome! What kind of paintings do you usually do?", user: "receiver" }, // Alex
    { restoImg: require('../assets/images/PerlaRestaurante.png'), restoName: 'Perla Restaurante', restoCuisine: 'Portugese', user: "receiver", isLink: true }, // Alex
    { message: "I mostly paint landscapes and abstract art. It's really therapeutic for me. What about you? What's your favorite type of cuisine?", user: "sender" }, // Sarah
    { message: "I admire landscapes! As for cuisine, I'm a huge fan of Italian food. Can't resist a good pizza or pasta dish. 😄", user: "receiver" }, // Alex
    { message: "Italian food is a classic choice! I'm a sucker for Mexican food myself. Spicy tacos and guac are my weakness! 🌮🥑", user: "sender" }, // Sarah
    { message: "Oh, I'm totally down for Mexican food anytime! Maybe we could grab some tacos together sometime? 😉", user: "receiver" }, // Alex
    { message: "Absolutely! That sounds like a plan! 😊 So, what's your favorite travel destination?", user: "sender" }, // Sarah
    { message: "Tough question! I'd say Japan. The culture, the food, the scenery - it's all amazing. How about you?", user: "receiver" }, // Alex
    { message: "Japan is on my bucket list! I'd love to visit someday. As for me, I've always been drawn to the beaches of Greece. The crystal-clear waters and stunning sunsets are so dreamy.", user: "sender" }, // Sarah
    { restoImg: require('../assets/images/PerlaRestaurante.png'), restoName: 'Perla Restaurante', restoCuisine: 'Portugese', user: "receiver", isLink: true }, // Alex
    { message: "Greece sounds incredible! We should definitely plan a trip together someday. 😄", user: "receiver" }, // Alex
    { message: "Haha, I'd love that! 😊 Well, it's been great chatting with you, Alex, but I have to head out now. Talk to you soon?", user: "sender" }, // Sarah
    { message: "Definitely! Have a wonderful evening, Sarah", user: "receiver" }, // Alex
    { message: "Looking forward to our taco date! Take care! 😊", user: "receiver" }, // Alex
    { message: "You too, Alex! Bye for now! 😊👋", user: "sender" } // Sarah
];

const getList = () => {
  return conversation;
};

const addItem = (item) => {
  conversation = [...conversation, item];
};

  //conversation generated from ChatGPT
export { getList, addItem };