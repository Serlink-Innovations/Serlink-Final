//Mobile HeaderFixed function
function stickyMenu() {
    const navigation = document.querySelector("#navigation");
    navigation.classList.toggle("sticky", window.scrollY > 0)

}

window.addEventListener("scroll", stickyMenu);