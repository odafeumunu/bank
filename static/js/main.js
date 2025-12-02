// SideBar
const sideBar = document.getElementById("sideBar");
const menuIcons = document.getElementById("menuToggle");

menuIcons.addEventListener("click", () => {
  sideBar.classList.toggle("open");
  menuIcons.classList.toggle("active");
});
