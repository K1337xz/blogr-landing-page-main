const navItems = document.querySelectorAll(".mainUl > li");
const productDropdown = document.querySelector(".productDropdown");
const companyDropdown = document.querySelector(".companyDropdown");
const connectDropdown = document.querySelector(".connectDropdown");

for (let i = 0; i < navItems.length; i++) {
	navItems[i].addEventListener("click", () => {
		if (navItems[i].classList.contains("trigger")) return;
		for (let j = 0; j < navItems.length; j++) {
			navItems[j].classList.remove("trigger");
		}
		navItems[i].classList.add("trigger");
	});
}
