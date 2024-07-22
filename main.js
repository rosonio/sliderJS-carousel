import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const products = [
  {
    id: 1,
    link: "https://www.thedistiller.gr/pota/apperitivo/luxardo-spritz-3x200ml",
    name: "Luxardo Spritz 3x200ml",
    image:
      "https://www.thedistiller.gr/wp-content/uploads/2024/07/luxardo-aperitivo-spritz-600x909.jpg",
    original_price: 8.18,
    discounted_price: 7.61,
  },
  {
    id: 2,
    link: "https://www.thedistiller.gr/pota/ready-to-drink/luxardo-limoncello-spritz-3x200ml",
    name: "Luxardo Limoncello Spritz 3x200ml",
    image:
      "https://www.thedistiller.gr/wp-content/uploads/2024/07/luxardo-limoncello-spritz-600x909.jpg",
    original_price: 9.15,
    discounted_price: 8.22,
  },
  {
    id: 3,
    link: "https://www.thedistiller.gr/pota/campari-soda-rtd-98ml-5-temachia",
    name: "Campari Soda RTD 98ml",
    image:
      "https://www.thedistiller.gr/wp-content/uploads/2024/05/campari-soda-rtd-600x909.jpg",
    original_price: 9.05,
    discounted_price: 8.42,
  },
  {
    id: 4,
    link: "https://www.thedistiller.gr/pota/liker/tia-maria-liquer-700ml",
    name: "Tia Maria liquer 700ml",
    image:
      "https://www.thedistiller.gr/wp-content/uploads/2022/03/Tia_maria_apperitive_coffee_project_liquer_liker_kafes-600x882.jpg",
    original_price: 22.0,
    discounted_price: null,
  },
  {
    id: 5,
    link: "https://www.thedistiller.gr/pota/quiquiriqui-mezcal-espadin-700ml",
    name: "Quiquiriqui Mezcal Espadin 700ml",
    image:
      "https://www.thedistiller.gr/wp-content/uploads/2022/03/quiquiriqui_mezcal_espadin_700ml_the_distiller__1610101855_905-600x909.jpg",
    original_price: 55.66,
    discounted_price: 52.042,
  },
  {
    id: 6,
    link: "https://www.thedistiller.gr/pota/martin-millers-original-gin-gift-pack-700ml",
    name: "Martin Miller's Original Gin Gift Pack 700ml - Special 2024 Edition for Connoisseurs - Limited Series in Unique Packaging",
    image:
      "https://www.thedistiller.gr/wp-content/uploads/2022/03/quiquiriqui_mezcal_espadin_700ml_the_distiller__1610101855_905-600x909.jpg",
    original_price: 34.15,
    discounted_price: 31.76,
  },
];

// Select the swiper wrapper element
const swiperWrapper = document.querySelector(".swiper-wrapper");
products.forEach((product) => {
  // Create slide element for each product
  const slide = document.createElement("div");
  slide.id = `slide ${product.id}`;
  slide.classList.add("swiper-slide");

  // Determine which price to display
  let priceHTML;
  if (product.discounted_price === null) {
    priceHTML = `<p class="product-price-no-discount">$${product.original_price.toFixed(
      2
    )}</p>`;
  } else {
    priceHTML = `
          <p class="product-price">$${product.original_price.toFixed(2)}</p>
          <p class="product-discounted-price">$${product.discounted_price.toFixed(
            2
          )}</p>
        `;
  }

  // Add the HTML elements to the created slide element
  slide.innerHTML = `
        <div class='container'>
          <h2 class="product-name">${product.name}</h2>
          <div class="product-image-container">
            <img src="${product.image}" class="product-image" alt="${product.name}">
          </div>
          <div class="product-details">
            <div class="price-container">
              ${priceHTML}
            </div>
            <div class="button-container">
              <button class="add-to-cart-btn">Add to Cart</button>
              <button class="add-to-wishlist-btn">Add to Wishlist</button>
            </div>
          </div>
        </div>
      `;

  // Append the created slide to the swiperWrapper
  swiperWrapper.appendChild(slide);
});

// Initialize the swiper
new Swiper(".swiper", {
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
