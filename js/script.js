const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++)
  navList[i].querySelector("a").addEventListener("click", function () {
    removeBackSection();
    for (let t = 0; t < totalNavList; t++)
      navList[t].querySelector("a").classList.contains("active") &&
        addBackSection(t),
        navList[t].querySelector("a").classList.remove("active");
    this.classList.add("active"),
      showSection(this),
      window.innerWidth < 1200 && asideSectionTogglerBtn();
  });
function removeBackSection() {
  for (let t = 0; t < totalSection; t++)
    allSection[t].classList.remove("back-section");
}
function addBackSection(t) {
  allSection[t].classList.add("back-section");
}
function showSection(t) {
  for (let e = 0; e < totalSection; e++)
    allSection[e].classList.remove("active");
  let a = t.getAttribute("href").split("#")[1];
  document.querySelector("#" + a).classList.add("active");
}
function updateNav(t) {
  for (let e = 0; e < totalNavList; e++) {
    navList[e].querySelector("a").classList.remove("active");
    t.getAttribute("href").split("#")[1] ===
      navList[e].querySelector("a").getAttribute("href").split("#")[1] &&
      navList[e].querySelector("a").classList.add("active");
  }
}
document.querySelector(".hire-me").addEventListener("click", function () {
  let t = this.getAttribute("data-section-index");
  showSection(this), updateNav(this), removeBackSection(), addBackSection(t);
}),
  document.querySelector(".mr-about").addEventListener("click", function () {
    let t = this.getAttribute("data-section-index");
    showSection(this), updateNav(this), removeBackSection(), addBackSection(t);
  });
const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
function asideSectionTogglerBtn() {
  aside.classList.toggle("open"), navTogglerBtn.classList.toggle("open");
  for (let t = 0; t < totalSection; t++) allSection[t].classList.toggle("open");
}
navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});