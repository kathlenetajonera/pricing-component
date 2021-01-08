const toggleBtn = document.querySelector(".toggle_btn");
const toggleIndicator = document.querySelector(".indicator");

const monthlyPlanPricing = document.querySelectorAll(".cost.monthly");
const annualPlanPricing = document.querySelectorAll(".cost.annually");

toggleBtn.addEventListener("click", () => {
    toggleIndicator.classList.toggle("annual");

    if (toggleIndicator.classList.contains("annual")) {
        showElement(annualPlanPricing);
        hideElement(monthlyPlanPricing);
    } else {
        showElement(monthlyPlanPricing);
        hideElement(annualPlanPricing);
    }
})

const showElement = elem => {
    elem.forEach(el => el.style.display = "block");
}

const hideElement = elem => {
    elem.forEach(el => el.style.display = "none");
}