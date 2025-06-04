// Button for sidebar
const button = document.getElementById("openbtn")

if (button)
{
    button.addEventListener("click", handleSidebar);
}

function handleSidebar()
{
    const sideBar = document.getElementById("sidebar");

    sideBar.classList.toggle('open');
    const IsOpen = sideBar.classList.contains('open');
    localStorage.setItem("sidebarIsOpen", IsOpen);
}

// Persist the sidebar state accross pages
window.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.getElementById("sidebar");
    const isOpen = localStorage.getItem("sidebarIsOpen") === "true";

    if (sidebar && isOpen) {
      sidebar.classList.add("open");
    }
});

// Hide the little message below ;)
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

window.addEventListener('load', function () {
    window.scrollTo(0, 0);
});


