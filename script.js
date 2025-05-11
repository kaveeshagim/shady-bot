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

document.getElementById("generate").addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  document.getElementById("quote").innerText = quote;
});
