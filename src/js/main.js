const topicButtons = document.querySelectorAll(".topic-button");

topicButtons.forEach(button => {
    button.addEventListener("click", () => {
        const topic = button.parentElement;

        topic.classList.toggle("expanded");
    });
});