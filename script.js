document.addEventListener("DOMContentLoaded", () => {
    const h1Element = document.querySelector('h1');
    if (h1Element) {
        h1Element.textContent = 'Добро пожаловать на наш сайт!';
    }

    const h2Element = document.querySelector('h2');
    if (h2Element) {
        h2Element.style.color = 'red';
    }

    const firstParagraph = document.querySelector('.intro-content p');
    if (firstParagraph) {
        firstParagraph.textContent = 'Это новый текст параграфа.';
    }

    const videos = document.querySelectorAll('iframe');
    if (videos.length > 0) {
        videos[0].style.display = 'none';
    }

    const form = document.querySelector('#contactForm');
    if (form) {
        form.addEventListener('submit', submitForm);
    }

    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', formatPhone);
    }
});


function formatPhone() {
    const phoneInput = document.getElementById('phone');
    let value = phoneInput.value.replace(/[^+\d]/g, '');

    // Форматируем номер телефона
    if (value.length > 1) {
        if (value.startsWith('+')) {
            value = value.replace(/(\+?\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, "$1 ($2) $3-$4-$5");
        } else {
            value = value.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, "$1 ($2) $3-$4-$5");
        }
    }

    phoneInput.value = value;
}

function submitForm(event) {
    event.preventDefault();

    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const phone = document.querySelector('input[name="phone"]').value.replace(/[^+\d]/g, '');

    const date = document.querySelector('input[name="date"]').value;
    const comment = document.querySelector('textarea[name="comment"]').value;

    if (!name || !email || !comment) {
        alert('Пожалуйста, заполните обязательные поля: Имя, E-mail и Комментарий.');
        return;
    }

    // Проверка на формат номера телефона
    if (!/^\+?\d{10,15}$/.test(phone)) {
        alert('Пожалуйста, введите корректный номер телефона.');
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Пожалуйста, введите корректный E-mail.');
        return;
    }

    const formData = { name, email, phone, date, comment };
    
    console.log(`
        Имя: ${formData.name}
        E-mail: ${formData.email}
        Телефон: ${formData.phone}
        Дата: ${formData.date}
        Комментарий: ${formData.comment}
    `);
    document.querySelector('#contactForm').reset();
}

const studentPhoto = document.getElementById('studentPhoto');

studentPhoto.addEventListener('mouseover', () => {
    studentPhoto.style.transform = 'scale(1.1)';
});

studentPhoto.addEventListener('mouseout', () => {
    studentPhoto.style.transform = 'scale(1)';
});

studentPhoto.addEventListener('click', () => {
    studentPhoto.src = "https://avatars.mds.yandex.net/i?id=fa7e0859ebae3ba831793c7643208e9a042bdc3a-5233664-images-thumbs&n=13";
});

studentPhoto.addEventListener('dblclick', () => {
    alert('Не налегай, у меня не так много любимых преподавателей');
});

////////////////////////////////////////////////////////////////////

function showMessage(message) {
    console.log(message);
}

function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

function toggleVisibility(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.style.display = (element.style.display === 'none' || element.style.display === '') ? 'block' : 'none';
    }
}

function extractUtmTerm() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('utm_term');
}

function updateH1Text() {
    const h1Element = document.querySelector('h1');
    const utmTerm = extractUtmTerm();
    if (utmTerm) {
        h1Element.textContent = utmTerm;
    }
}

function logCurrentTime() {
    const now = new Date();
    console.log(now.toLocaleTimeString());
}

function resetBackgroundColor() {
    document.body.style.backgroundColor = 'white';
}

document.addEventListener("DOMContentLoaded", () => {
    showMessage("Скрипт загружен!");
    logCurrentTime();

    resetBackgroundColor();
    changeBackgroundColor("lightblue");

    updateH1Text();

    toggleVisibility('.content');
});
