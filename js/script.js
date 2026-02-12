function showGreeting() {
    const greetingElement = document.getElementById("greeting-message");
    const currentHour = new Date().getHours();
    let greetingText;

    if (currentHour < 12) {
        greetingText = "Good Morning ☀️";
    } else if (currentHour < 18) {
        greetingText = "Good Afternoon 🌤️";
    } else {
        greetingText = "Good Evening 🌙";
    }

    greetingElement.textContent = greetingText + ", welcome to my portfolio!";
}

showGreeting();
