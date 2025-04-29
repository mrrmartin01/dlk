document.addEventListener("DOMContentLoaded", function () {
  // Swiper init
  const swiper = new Swiper(".swiper", {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    speed: 1000,
    grabCursor: true,
    effect: "flip",
  });

  // AOS init
  AOS.init({
    duration: 800,
    once: true,
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("billingToggle");
  const billingTypeLabel = document.getElementById("billing-type");
  const billingUnits = document.querySelectorAll(".billing-unit");
  const priceElements = document.querySelectorAll(".amount");

  toggle.addEventListener("change", () => {
    const isYearly = toggle.checked;
    billingTypeLabel.textContent = isYearly ? "Yearly" : "Monthly";

    billingUnits.forEach(el => {
      el.textContent = isYearly ? "/yr" : "/mo";
    });

    priceElements.forEach(el => {
      const newValue = isYearly ? el.dataset.yearly : el.dataset.monthly;
      animatePriceChange(el, parseInt(newValue));
    });
  });

  function animatePriceChange(el, newValue) {
    const current = parseInt(el.textContent);
    const duration = 300;
    const frameRate = 30;
    const steps = Math.round(duration / (1000 / frameRate));
    let count = 0;

    const interval = setInterval(() => {
      count++;
      const progress = count / steps;
      const val = Math.round(current + (newValue - current) * progress);
      el.textContent = val;

      if (count === steps) clearInterval(interval);
    }, 1000 / frameRate);
  }
});
