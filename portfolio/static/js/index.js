const button = document.getElementById("openbtn")

if (button)
{
    button.addEventListener("click", handleSidebar);
}

function handleSidebar()
{
    const sideBar = document.getElementById("sidebar");
    const homeSection = document.getElementById('home');

    if (sideBar)
    {
        const currentWidth = getComputedStyle(sideBar).width;
        sideBar.style.width = (currentWidth === "0px") ? "20%" : "0px";

        homeSection.style.marginLeft = (currentWidth === "0px") ? "20%" : "0px";
        homeSection.style.width = (currentWidth === "0px") ? "80%" : "100%";
    }
}


window.addEventListener('load', function () {
    window.scrollTo(0, 0);
});

