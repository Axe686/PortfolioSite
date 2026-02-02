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
  const openingEnd = 0.45;

  let openProgress = 0;

  if (progress < openingStart) {
    openProgress = 0;
  } else if (progress < openingEnd) {
    openProgress = (progress - openingStart) / (openingEnd - openingStart);
  } else {
    openProgress = 1;
  }

  openProgress = clamp(openProgress, 0, 1);
  const eased = ease(openProgress);
  const scale = lerp(0.7, 1.08, eased);
  const pagesVisibility = clamp((openProgress - 0.1) / 0.5, 0, 1);

  book.style.setProperty("--book-open", eased.toFixed(3));
  book.style.setProperty("--book-scale", scale.toFixed(3));
  book.style.setProperty("--pages-visibility", pagesVisibility.toFixed(3));

  const spreadProgress = clamp(
    (progress - openingStart) / (1 - openingStart),
    0,
    0.999
  );
  const spreadIndex = Math.min(
    spreads.length - 1,
    Math.floor(spreadProgress * spreads.length)
  );

  spreads.forEach((spread, index) => {
    spread.classList.toggle("is-active", index === spreadIndex);
  });
};

window.addEventListener("scroll", updateBook);
window.addEventListener("resize", updateBook);
window.addEventListener("load", updateBook);
