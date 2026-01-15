// Тут можно оставить пустым, но полезно:
// 1) блокировать случайный zoom on double tap (частично)
// 2) добавить простую аналитику кликов (если нужно)
//
// Сейчас — минимально: лог кликов.
document.addEventListener("click", (e) => {
  const a = e.target.closest("a.tile");
  if (!a) return;
  console.log("Link click:", a.getAttribute("href"));
});
