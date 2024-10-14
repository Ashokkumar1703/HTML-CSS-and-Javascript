const numSeatsSelect = document.getElementById("num-seats");
const attendee2Container = document.getElementById("attendee-2-container");

numSeatsSelect.addEventListener("change", () => {
    if (numSeatsSelect.value === "2") {
        attendee2Container.style.display = "block";
    } else {
        attendee2Container.style.display = "none";
    }
});