const reviews = [
  {
    name: "Priya Sharma",
    rating: 5,
    text: "Absolutely loved the service!",
    avatar: "https://i.pravatar.cc/100?img=47"
  },
  {
    name: "Rohit Mehta",
    rating: 4,
    text: "Great experience overall.",
    avatar: "https://i.pravatar.cc/100?img=56"
  },
  {
    name: "Neha Kapoor",
    rating: 5,
    text: "Exceeded expectations!",
    avatar: "https://i.pravatar.cc/100?img=65"
  },
  {
    name: "Amit Sinha",
    rating: 3,
    text: "Good service but room for improvement.",
    avatar: "https://i.pravatar.cc/100?img=13"
  },
  {
    name: "Sunita Rao",
    rating: 4,
    text: "Smooth process, polite team.",
    avatar: "https://i.pravatar.cc/100?img=24"
  }
];

const track = document.getElementById('sliderTrack');
let index = 0;

// Create review card
function createCard(review) {
  const stars = "★".repeat(review.rating) + "☆".repeat(5 - review.rating);
  return `
    <div class="review-card">
      <img class="review-avatar" src="${review.avatar}" />
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
