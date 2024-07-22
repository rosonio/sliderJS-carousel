import Swiper from "swiper/bundle";
import "swiper/css/bundle";

// Fetch the products from the products.json file
fetch("./products.json")
  .then((response) => response.json())
  .then((products) => {
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
  });
