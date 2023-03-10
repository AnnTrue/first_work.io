// Выбираем кнопку
const btn = document.querySelector(".header__theme");

// Отслеживаем щелчок по кнопке
btn.addEventListener("click", function () {
  // Переключаем класс .dark-theme при каждом щелчке
  document.body.classList.toggle("dark__theme");
  // Допустим, тема светлая
  let theme = "light";
  // Если <body> содержит класс .dark-theme…
  if (document.body.classList.contains("dark__theme")) {
    // …тогда делаем тему тёмной
    theme = "dark";
  }
  // После чего сохраняем выбор в localStorage
  localStorage.setItem("theme", theme);
});

// Выбираем настройки темы из localStorage
const currentTheme = localStorage.getItem("theme");
// Если текущая тема в localStorage равна "dark"…
if (currentTheme == "dark") {
  // …тогда мы используем класс .dark-theme
  document.body.classList.add("dark__theme");
}
