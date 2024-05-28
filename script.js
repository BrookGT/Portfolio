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
