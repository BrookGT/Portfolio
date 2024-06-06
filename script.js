function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
}

function hideSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
}

function scrollToProjects() {
    const contactSection = document.getElementById("projects");

    contactSection.classList.toggle("changed");

    contactSection.scrollIntoView({ behavior: "smooth" });
}

function scrollToContact() {
    const contactSection = document.getElementById("contact");

    contactSection.classList.toggle("changed");

    contactSection.scrollIntoView({ behavior: "smooth" });
}
