const quotes = [
  "You're doing amazing... at consistently confusing your compiler.",
  "Wow! You debug like a magician — everything disappears.",
  "You're the human equivalent of a try-catch block. Mostly catch.",
  "Your code is so clean… it’s been declared a biohazard.",
  "You’re not a bug, but you sure crash everything you touch.",
  "You're like semicolons — unnecessary, but somehow still there.",
  "Your commit messages are more mysterious than your code.",
  "If Stack Overflow had a restraining order, you'd be its first client.",
  "You're not lazy — you're just aggressively prioritizing rest.",
  "Ah, another brilliant error. Truly, you're the Van Gogh of bugs.",
];

const quoteEl = document.getElementById("quote");
const btn = document.getElementById("generate");
const sfx = document.getElementById("sfx");
const toggleThemeBtn = document.getElementById("toggle-theme");

// 🧠 Typing effect
function typeQuote(text) {
  quoteEl.textContent = "";
  let i = 0;
  const speed = 30;
  const typing = setInterval(() => {
    quoteEl.textContent += text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(typing);
  }, speed);
}

// 🔈 Voice using Web Speech API
function speak(text) {
  const utter = new SpeechSynthesisUtterance(text);
  utter.rate = 1;
  utter.pitch = 1.2;
  utter.voice =
    speechSynthesis
      .getVoices()
      .find((v) => v.name.includes("Google") || v.default) || null;
  speechSynthesis.speak(utter);
}

// 🖱️ Roast button logic
btn.addEventListener("click", () => {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  sfx.play();
  typeQuote(random);
  speak(random);
});
