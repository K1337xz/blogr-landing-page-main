const navItems = document.querySelectorAll(".mainUl > li");
const navMobile = document.querySelectorAll(".mobUl > li");
const product = document.querySelector(".product");
const company = document.querySelector(".company");
const connect = document.querySelector(".connect");
const productDropdown = document.querySelector(".productDropdown");
const companyDropdown = document.querySelector(".companyDropdown");
const connectDropdown = document.querySelector(".connectDropdown");
const productMobile = document.querySelector(".productDropdownMobile");
const companyMobile = document.querySelector(".companyDropdownMobile");
const connectMobile = document.querySelector(".connectDropdownMobile");
const openMobMenu = document.querySelector(".ham");
const menuMob = document.querySelector(".menuMob");
const closeMobile = document.querySelector(".closeHam");
const header = document.querySelector("header .underNav");

for (let i = 0; i < navItems.length; i++) {
	navItems[i].addEventListener("click", () => {
		if (navItems[i].classList.contains("trigger")) {
			navItems[i].classList.remove("trigger");
		}
		if (navItems[i].classList.contains("trigger")) return;
		for (let j = 0; j < navItems.length; j++) {
			navItems[j].classList.remove("trigger");
		}
		navItems[i].classList.add("trigger");
	});
}
for (let x = 0; x < navMobile.length; x++) {
	navMobile[x].addEventListener("click", () => {
		if (navMobile[x].classList.contains("triggerMob")) {
			navMobile[x].classList.remove("triggerMob");
		}
		if (navMobile[x].classList.contains("triggerMob")) return;
		for (let y = 0; y < navItems.length; y++) {
			navMobile[y].classList.remove("triggerMob");
		}
		navMobile[x].classList.add("triggerMob");
	});
}

function close() {
	for (let x = 0; x < navItems.length; x++) {
		if (navItems[x].classList.contains("trigger")) {
			navItems[x].classList.remove("trigger");
		}
	}
}

function openMobile() {
	menuMob.style.display = `flex`;
	openMobMenu.style.display = `none`;
	closeMobile.style.display = `block`;
}
function closeMob() {
	menuMob.style.display = `none`;
	closeMobile.style.display = `none`;
	openMobMenu.style.display = `block`;
}

header.addEventListener("click", close);
closeMobile.addEventListener("click", closeMob);
openMobMenu.addEventListener("click", openMobile);
