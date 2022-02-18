const messages = [
    "oscar",
    "estiven",
    "Aleja",
    "Jessica",
    "Juan",
    "Guti",
    "Carolina",
    "Pauliona"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = { randomMsg };