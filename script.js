const reviews = [
  {
    name: "Sonal Kapoor",
    rating: 5,
    date: "April 12, 2025",
    text: "Love these earrings! Super cute and well-made. Fast delivery too. Will order more styles soon. Highly recommend DD Enterprises!",
    avatar: "https://i.pravatar.cc/100?img=28",
  },
  {
    name: "Ishita Bansal",
    rating: 5,
    date: "March 28, 2025",
    text: "Absolutely stunning jewelry! The rose gold bracelet is my new favorite. Compliments everywhere I go. Quality exceeds expectations for this price range. DD Enterprises rocks!",
    avatar: "https://i.pravatar.cc/100?img=29",
  },
  {
    name: "Nidhi Sharma",
    rating: 4,
    date: "June 5, 2025",
    text: "Nice quality bangles at good price. One had minor scratch but overall happy with purchase. Good customer service response.",
    avatar: "https://i.pravatar.cc/100?img=16",
  },
  {
    name: "Rashmi Agarwal ",
    rating: 4,
    date: "May 19, 2025",
    text: "Pretty good collection of trendy pieces. Ordered multiple items for gifting. Most were perfect, one earring had loose stone. Overall satisfied with service and quality.",
    avatar: "https://i.pravatar.cc/100?img=25",
  },
  {
    name: "Tanya Malhotra",
    rating: 5,
    date: "July 2, 2025",
    text: "Beautiful necklace set! Exactly as pictured. Packaging was lovely. My friends loved it at the wedding. Definitely ordering again!",
    avatar: "https://i.pravatar.cc/100?img=26",
  },
  {
    name: "Priyanka Gupta",
    rating: 5,
    date: "March 7, 2025",
    text: "Amazing experience! The traditional choker necklace is gorgeous. Intricate work and comfortable fit. Arrived perfectly packaged. My go-to store for special occasion jewelry now.",
    avatar: "https://i.pravatar.cc/100?img=19",
  },
  {
    name: "Sakshi Verma",
    rating: 3,
    date: "April 26, 2025",
    text: "Okay quality for the price. Ring looks nice but feels slightly cheap. Delivery was on time. Decent for casual wear.",
    avatar: "https://i.pravatar.cc/100?img=20",
  },
  {
    name: "Mansi Jain",
    rating: 4,
    date: "June 18, 2025",
    text: "Good value for money. Bought three rings and they all look elegant. Shipping was quick. Only issue was one ring slightly loose but still wearable.",
    avatar: "https://i.pravatar.cc/100?img=21",
  },
];

const track = document.getElementById("sliderTrack");
let index = 0;

// Create review card
function createCard(review) {
  const stars = "★".repeat(review.rating) + "☆".repeat(5 - review.rating);
  return `
    <div class="review-card">
      <div class="review-header" style="display: flex; align-items: flex-start; gap: 12px;">
        <div style="width: 40px; height: 40px; background-color: #f0f0f0; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
          <i class="fas fa-user" style="color: #555;"></i>
        </div>
        <div>
          <div class="review-name">
            <span style="font-weight: 600;">${review.name}</span>
            <p>Verified</p>
          </div>
          </div>
          </div>
          <div class="review-date" style="font-size: 0.85em; color: #888;">${review.date}</div>
      <div class="review-stars">${stars} <span class="text-dark review-number">${review.rating}.0</span></div>
      <div class="review-text">"${review.text}"</div>
    </div>
  `;
}

// Inject cards and clone first & last for infinite loop
function initSlider() {
  const allCards = reviews.map(createCard).join("");
  track.innerHTML =
    createCard(reviews[reviews.length - 1]) + allCards + createCard(reviews[0]);
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
      track.style.transition = "none";
      updateSlider();
      setTimeout(() => {
        track.style.transition = "transform 0.5s ease";
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
      track.style.transition = "none";
      updateSlider();
      setTimeout(() => {
        track.style.transition = "transform 0.5s ease";
      });
    }, 500);
  }
}

// Apply transform
function updateSlider() {
  const cardWidth = document.querySelector(".review-card").offsetWidth + 30;
  track.style.transform = `translateX(-${cardWidth * index}px)`;
}

window.onload = initSlider;
