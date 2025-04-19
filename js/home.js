document.getElementById('menu-btn').addEventListener('click', function() {
    let dropdown = document.getElementById('auth-dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

// Get the close button
const closeBtn = document.querySelector('.close-btn');
// Get the discount card element
const discountCard = document.querySelector('.discount-card');

// Add click event listener to the close button
closeBtn.addEventListener('click', function() {
    // Hide the discount card by setting display to 'none'
    discountCard.style.display = 'none';
});





const testimonials = [
    { text: "Customers love our tents for their durability, comfort, and ease of setup.", author: "Jenny Wilson", role: "Manager", image: "img/pearson 3.jpg" },
    { text: "These tents are the best for outdoor adventures. Highly recommended!", author: "Mark Stevens", role: "Explorer", image: "img/pearson 2.jpg" },
    { text: "Great quality and easy to set up, CampX provide high quality tent 100% recommended !", author: "Sarah Lee", role: "Backpacker", image: "img/pearson 1.jpg" }
];

let index = 0;
function updateTestimonial() {
    document.getElementById("testimonial-text").innerText = testimonials[index].text;
    document.getElementById("testimonial-author").innerText = testimonials[index].author;
    document.getElementById("testimonial-role").innerText = testimonials[index].role;
    document.getElementById("testimonial-image").src = testimonials[index].image;
}

function prevTestimonial() {
    index = (index - 1 + testimonials.length) % testimonials.length;
    updateTestimonial();
}

function nextTestimonial() {
    index = (index + 1) % testimonials.length;
    updateTestimonial();
}



    document.addEventListener("DOMContentLoaded", () => {
    // Wishlist button functionality
    document.querySelectorAll(".wishlist").forEach(button => {
        button.addEventListener("click", () => {
            button.classList.toggle("active");
            button.textContent = button.classList.contains("active") ? "❤️" : "♡";
        });
    });

    // Color selection functionality (specific to each product)
    document.querySelectorAll(".product-card").forEach((card, index) => {
        let img = card.querySelector("img");
        let colors = card.querySelectorAll(".color");

        // Define specific images for each product card
        const imageSets = [
            {
                "color-blue": "img/tent folder/tent type 1 blue.png",
                "color-green": "img/tent folder/tent type 1 green.png",
                "color-orange": "img/tent folder/tent type 1 yellow.png",
                "color-pink": "img/tent folder/tent type 1 pink.png"
            },
            {
                "color-blue": "img/tent folder/tent type 2 blue.png",
                "color-green": "img/tent folder/tent type 2 green.png",
                "color-orange": "img/tent folder/tent type 2 yellow.png",
                "color-pink": "img/tent folder/tent type 2 pink.png"
            },
            {
                "color-blue": "img/tent folder/tent type 3 blue.png",
                "color-green": "img/tent folder/tent type 3 green.png",
                "color-orange": "img/tent folder/tent type 3 yellow.png",
                "color-pink": "img/tent folder/tent type 3 pink.png"
            },
            {
                "color-blue": "img/tent folder/tent type 4.png", // This product has only one color
            },
        ];

        // Get the image set for the current product
        let productImages = imageSets[index];

        // Disable color options for products with only one color
        if (Object.keys(productImages).length === 1) {
            colors.forEach(color => color.style.opacity = "0.5"); // Grey out the options
        }

        // Add event listener for each color option in the current card
        colors.forEach(color => {
            color.addEventListener("click", () => {
                let selectedColorClass = [...color.classList].find(cls => cls.startsWith("color-"));
                if (selectedColorClass && productImages[selectedColorClass]) {
                    img.src = productImages[selectedColorClass];
                }
            });
        });

    });
});

// Toggle the dropdown menu when the menu icon is clicked on mobile view
document.getElementById('menu-btn').addEventListener('click', function() {
    let dropdown = document.getElementById('auth-dropdown');
    dropdown.classList.toggle('show');
});
