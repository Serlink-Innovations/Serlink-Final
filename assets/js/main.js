//Mobile HeaderFixed function
function stickyMenu() {
  const header = document.querySelector("body");
  const navigation = document.querySelector(".navigation-float");
  navigation.classList.toggle("sticky", window.scrollY > 0);

  if (navigation.classList.contains("sticky")) {
    header.style.paddingTop = "120px";
  } else {
    header.style.paddingTop = "0";
  }
}

window.addEventListener("scroll", stickyMenu);
