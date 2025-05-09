 // food item animate
 document.addEventListener('DOMContentLoaded', function() {
    const foodItemsLeft = document.querySelectorAll('.food-item.left');
    const foodItemsRight = document.querySelectorAll('.food-item.right');

    function animateItems(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('left')) {
                    entry.target.classList.add('animate-in');
                    entry.target.classList.remove('animate-out');
                } else if (entry.target.classList.contains('right')) {
                    entry.target.classList.add('animate-in');
                    entry.target.classList.remove('animate-out');
                }
            } else {
                if (entry.target.classList.contains('left')) {
                    entry.target.classList.remove('animate-in');
                    entry.target.classList.add('animate-out');
                } else if (entry.target.classList.contains('right')) {
                    entry.target.classList.remove('animate-in');
                    entry.target.classList.add('animate-out');
                }
            }
        });
    }

    const observer = new IntersectionObserver(animateItems, {
        threshold: 0.1 // Adjust this value as needed
    });

    foodItemsLeft.forEach(item => observer.observe(item));
    foodItemsRight.forEach(item => observer.observe(item));
});

// Add fade-in animation to hero content
document.addEventListener("DOMContentLoaded", () => {
    const heroContent = document.querySelector(".hero-content");
    heroContent.style.opacity = "0";
    heroContent.style.transform = "translateY(20px)";
    setTimeout(() => {
        heroContent.style.transition = "all 1s ease";
        heroContent.style.opacity = "1";
        heroContent.style.transform = "translateY(0)";
    }, 500);
});

// Add hover animation to menu items
const menuItems = document.querySelectorAll(".menu-item");
menuItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
        item.style.transform = "scale(1.05)";
    });
    item.addEventListener("mouseout", () => {
        item.style.transform = "scale(1)";
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Function to animate elements when they come into view
    function animateOnView(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transition = "all 1s ease";
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target); // Stop observing once animation is triggered
            }
        });
    }

    // Intersection Observer for Hero Content
    const heroObserver = new IntersectionObserver(animateOnView, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    const heroContent = document.querySelector(".hero-content");
    heroContent.style.opacity = "0";
    heroContent.style.transform = "translateY(20px)";
    heroObserver.observe(heroContent);

    // Intersection Observer for Featured Menu Heading
    const featuredObserver = new IntersectionObserver(animateOnView, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    const featuredHeading = document.querySelector(".featured-menu h2");
    featuredHeading.style.opacity = "0";
    featuredHeading.style.transform = "translateY(20px)";
    featuredObserver.observe(featuredHeading);
});