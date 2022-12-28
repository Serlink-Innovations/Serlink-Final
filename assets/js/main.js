//Mobile HeaderFixed function
function stickyMenu() {

    const navigation = document.querySelector(".navigation-float");
    navigation.classList.toggle("sticky", window.scrollY > 0);

}

window.addEventListener("scroll", stickyMenu);