// Function to add and remove animation classes
const animateCSS = (element, animation, prefix = "animate__") =>
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    function handleAnimationEnd() {
      node.classList.remove(`${prefix}animated`, animationName);
      resolve("Animation ended");
    }

    node.addEventListener("animationend", handleAnimationEnd, { once: true });
  });

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get the elements by their IDs
  const frontendMentor = document.getElementById("frontend-mentor");
  const salvatoreMammoliti = document.getElementById("salvatore-mammoliti");

  // Trigger zoom in animations
  animateCSS("#frontend-mentor", "zoomInUp").then(() => {
    // Delay before triggering pulse animation
    setTimeout(() => animateCSS("#frontend-mentor", "pulse"), 100);
  });

  animateCSS("#salvatore-mammoliti", "zoomInDown").then(() => {
    // Delay before triggering pulse animation
    setTimeout(() => animateCSS("#salvatore-mammoliti", "pulse"), 100);
  });
});
