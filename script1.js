// Функция showMessage выводит сообщение в консоль
function showMessage(message) {
    console.log(message);
}

// Функция changeBackgroundColor меняет цвет фона страницы
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

// Функция toggleVisibility переключает видимость элемента по селектору
function toggleVisibility(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.style.display = (element.style.display === 'none' || element.style.display === '') ? 'block' : 'none';
    } else {
        showMessage(`Элемент с селектором "${selector}" не найден.`);
    }
}

// Функция обновляет H1 по параметру utm_term из URL
function updateH1FromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmTerm = urlParams.get('utm_term');
    
    const h1Element = document.querySelector('h1');
    if (h1Element) {
        h1Element.textContent = utmTerm ? utmTerm : h1Element.textContent; // Заменяем текст H1, если utm_term присутствует
    }
}

// Функция выводит текущее время в консоль
function logCurrentTime() {
    const now = new Date();
    const formattedTime = now.toTimeString().split(' ')[0]; // Получаем время в формате ЧЧ:ММ:СС
    console.log(formattedTime);
}

// Функция сбрасывает цвет фона к исходному значению
function resetBackgroundColor() {
    document.body.style.backgroundColor = 'white';
}

// Используем обработчик события, чтобы обеспечить выполнение кода после загрузки страницы
document.addEventListener('DOMContentLoaded', () => {
    showMessage("Скрипт загружен!");
    logCurrentTime();

    resetBackgroundColor(); // Сбрасываем цвет фона
    changeBackgroundColor("lightblue"); // Меняем цвет фона на lightblue
    toggleVisibility('.content'); // Переключаем видимость элемента с классом .content

    updateH1FromUrl(); // Обновляем H1 из URL
});