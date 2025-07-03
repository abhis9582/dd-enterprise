const reviews = [
  {
    name: "Riya Sharma",
    rating: 5,
    text: "Absolutely love my purchase from DD Enterprises! The earrings I ordered look exactly like the pictures and arrived beautifully packaged. The quality is impressive for the price point - they feel sturdy and the finish is gorgeous. I've worn them several times and received so many compliments. Will definitely be ordering more pieces soon!",
    avatar: "https://i.pravatar.cc/100?img=28"
  },
  {
    name: "Priya Agarwal",
    rating: 5,
    text: "DD Enterprises exceeded my expectations! I ordered a complete jewelry set for my sister's wedding and everything was perfect. The intricate detailing on the necklace is stunning, and the matching earrings complete the look beautifully. Fast shipping and excellent customer service. Highly recommend!",
    avatar: "https://i.pravatar.cc/100?img=29"
  },
  {
    name: "Neha Gupta",
    rating: 4,
    text: "Great quality imitation jewelry at affordable prices. I bought three different bracelets and they all look elegant. The only reason I'm not giving 5 stars is that one of the clasps feels a bit loose, but overall very satisfied with my purchase from DD Enterprises.",
    avatar: "https://i.pravatar.cc/100?img=16"
  },
  {
    name: "Ananya Patel",
    rating: 5,
    text: "I'm so impressed with the craftsmanship! The oxidized silver bangles I ordered are exactly what I was looking for. They have a vintage charm and the weight feels substantial. DD Enterprises has become my go-to for fashion jewelry. Will be back for more!",
    avatar: "https://i.pravatar.cc/100?img=25"
  },
  {
    name: "Pooja Singh",
    rating: 4,
    text: "Beautiful pieces and great value for money. I ordered a statement necklace for a special occasion and it was perfect. The only minor issue was that delivery took a day longer than expected, but the quality made up for it. The jewelry photographs beautifully too!",
    avatar: "https://i.pravatar.cc/100?img=26"
  },
  {
    name: "Meera Gupta",
    rating: 5,
    text: "Outstanding service and products! I've been a repeat customer for over a year now. The variety of designs is amazing and the quality is consistently good. My recent purchase of traditional jhumkas was particularly impressive - they look authentic and feel comfortable to wear all day.",
    avatar: "https://i.pravatar.cc/100?img=19"
  },
  {
    name: "Ritika Khanna",
    rating: 5,
    text: "DD Enterprises has a wonderful collection of trendy pieces. I love the contemporary designs and the attention to detail. The ring I purchased fits perfectly and the stone setting is secure. Packaging was also very thoughtful with a lovely jewelry pouch included.",
    avatar: "https://i.pravatar.cc/100?img=20"
  },
  {
    name: "Kavya Reddy",
    rating: 3,
    text: "Fantastic experience from start to finish! The website is easy to navigate, checkout was smooth, and my order arrived exactly when promised. The pearl necklace I bought looks so elegant and has received numerous compliments. The quality rivals much more expensive brands!",
    avatar: "https://i.pravatar.cc/100?img=21"
  },
  {
    name: "Deepika Jain",
    rating: 3,
    text: "Decent quality for the price range. I ordered a few pieces for everyday wear and they serve the purpose well. The finish could be slightly better on some items, but for fashion jewelry, it's acceptable. Customer service was responsive when I had a question about sizing.",
    avatar: "https://i.pravatar.cc/100?img=27"
  },
  {
    name: "Shreya Joshi",
    rating: 5,
    text: "I'm absolutely thrilled with my purchase! The chandelier earrings are gorgeous and surprisingly lightweight despite their size. The attention to detail is remarkable - each tiny bead and crystal is perfectly placed. DD Enterprises has earned a loyal customer in me!",
    avatar: "https://i.pravatar.cc/100?img=23"
  },
  {
    name: "Arya Mehta",
    rating: 4,
    text: "Great selection and competitive prices. I bought a charm bracelet that's perfect for layering with my other jewelry. The charms are well-made and the bracelet itself is sturdy. Shipping was prompt and everything arrived in perfect condition. Would definitely shop here again!",
    avatar: "https://i.pravatar.cc/100?img=24"
  },
];

const track = document.getElementById('sliderTrack');
let index = 0;

// Create review card
function createCard(review) {
  const stars = "★".repeat(review.rating) + "☆".repeat(5 - review.rating);
  return `
    <div class="review-card">
      <div class="review-name">${review.name}</div>
      <div class="review-stars">${stars}</div>
      <div class="review-text">"${review.text}"</div>
    </div>
  `;
}

// Inject cards and clone first & last for infinite loop
function initSlider() {
  const allCards = reviews.map(createCard).join('');
  track.innerHTML = createCard(reviews[reviews.length - 1]) + allCards + createCard(reviews[0]);
  index = 1;
  updateSlider();
}

// Move right
function moveRight() {
  if (index >= reviews.length + 1) return;
  index++;
  updateSlider();

  if (index === reviews.length + 1) {
    setTimeout(() => {
      index = 1;
      track.style.transition = 'none';
      updateSlider();
      setTimeout(() => {
        track.style.transition = 'transform 0.5s ease';
      });
    }, 500);
  }
}

// Move left
function moveLeft() {
  if (index <= 0) return;
  index--;
  updateSlider();

  if (index === 0) {
    setTimeout(() => {
      index = reviews.length;
      track.style.transition = 'none';
      updateSlider();
      setTimeout(() => {
        track.style.transition = 'transform 0.5s ease';
      });
    }, 500);
  }
}

// Apply transform
function updateSlider() {
  const cardWidth = document.querySelector('.review-card').offsetWidth + 30;
  track.style.transform = `translateX(-${cardWidth * index}px)`;
}

window.onload = initSlider;
