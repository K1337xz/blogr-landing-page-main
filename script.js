const navItems = document.querySelectorAll(".mainUl > li");
const productDropdown = document.querySelector(".productDropdown");
const companyDropdown = document.querySelector(".companyDropdown");
const connectDropdown = document.querySelector(".connectDropdown");

for (let i = 0; i < navItems.length; i++) {
	navItems[i].addEventListener("click", () => {
		navItems[i].classList.add("trigger");
	});
}
