const book = document.getElementById("book");
const scrollArea = document.getElementById("book-scroll");
const spreads = Array.from(document.querySelectorAll(".spread"));

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
const lerp = (a, b, t) => a + (b - a) * t;
const ease = (t) => 1 - Math.pow(1 - t, 3);

const updateBook = () => {
  const rect = scrollArea.getBoundingClientRect();
  const totalScroll = rect.height - window.innerHeight;
  const scrolled = clamp(-rect.top, 0, totalScroll);
  const progress = totalScroll === 0 ? 0 : scrolled / totalScroll;

  const openingStart = 0.08;
  const openingEnd = 0.78;
  const closingStart = 0.78;
  const closingEnd = 1;

  let openProgress = 0;

  if (progress < openingStart) {
    openProgress = 0;
  } else if (progress < openingEnd) {
    openProgress = (progress - openingStart) / (openingEnd - openingStart);
  } else {
    openProgress = 1 - (progress - closingStart) / (closingEnd - closingStart);
  }

  openProgress = clamp(openProgress, 0, 1);
  const eased = ease(openProgress);
  const scale = lerp(0.7, 1.08, eased);

  book.style.setProperty("--book-open", eased.toFixed(3));
  book.style.setProperty("--book-scale", scale.toFixed(3));

  const spreadProgress = clamp(
    (progress - openingStart) / (closingStart - openingStart),
    0,
    1
  );
  const pagePosition = spreadProgress * spreads.length;
  const spreadIndex = Math.min(
    spreads.length - 1,
    Math.floor(pagePosition)
  );

  spreads.forEach((spread, index) => {
    const turn = clamp(pagePosition - index, 0, 1);
    spread.style.setProperty("--turn", turn.toFixed(3));
    spread.style.zIndex = spreads.length - index;
    spread.classList.toggle("is-active", index === spreadIndex);
  });
};

window.addEventListener("scroll", updateBook);
window.addEventListener("resize", updateBook);
window.addEventListener("load", updateBook);
