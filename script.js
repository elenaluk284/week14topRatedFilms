// Массив с информацией о режиссёрах
let directors = [
    {
        name: 'Стивен Спилберг',
        career: 'Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр',
        films: 'https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0',
        top_rated_film: 'Список Шиндлера'
    },
    {
        name: 'Кристофер Нолан',
        career: 'Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр, Композитор',
        films: 'https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu',
        top_rated_film: 'Начало'
    },
    {
        name: 'Мартин МакДона',
        career: 'Сценарист, Режиссёр, Продюсер',
        films: 'https://www.film.ru/person/martin-makdonah',
        top_rated_film: 'Три билборда на границе Эббинга, Миссури'
    },
    {
        name: 'Алексей Балабанов',
        career: 'Режиссёр, Сценарист, Актёр, Продюсер',
        films: 'https://www.film.ru/person/aleksey-balabanov',
        top_rated_film: 'Брат'
    },
    {
        name: 'Питер Фаррелли',
        career: 'Продюсер, Режиссёр, Сценарист, Актёр',
        films: 'https://www.film.ru/person/piter-farrelli',
        top_rated_film: 'Зелёная книга'
    },
    {
        name: 'Юрий Быков',
        career: 'Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер',
        films: 'https://www.film.ru/person/yuriy-bykov',
        top_rated_film: 'Дурак'
    },
    {
        name: 'Жан-Марк Валле',
        career: 'Режиссер, Продюсер, Монтажёр, Актёр, Сценарист',
        films: 'https://www.film.ru/person/zhan-mark-valle',
        top_rated_film: 'Далласский клуб покупателей'
    },
];

// Массив для хранения лучших фильмов режиссёров
let topFilmsList = [];

// Ссылка на контейнер режиссёров в HTML
const directorsContainer = document.getElementById('directors-container');

// Вызываем метод forEach для итерации по массиву режиссёров
directors.forEach((director, index) => {
    // Создаём элементы для отображения информации о режиссёре
    let directorInfo = document.createElement('div');
    directorInfo.classList.add('director-info');

    // Формируем HTML содержимое для каждого режиссёра
    directorInfo.innerHTML = `
        <h2>${index + 1}. ${director.name}</h2>
        <p>${director.career}</p>
        <p><span class="films-link" onclick="window.open('${director.films}', '_blank')">Фильмография</span></p>
    `;

    // Добавляем информацию о режиссёре на страницу
    directorsContainer.appendChild(directorInfo);

    // Добавляем лучший фильм режиссёра в массив topFilmsList
    topFilmsList.push(director.top_rated_film);
});

// Выводим массив с лучшими фильмами режиссёров в консоль
console.log("Лучшие фильмы режиссёров:", topFilmsList);

// Ссылка на контейнер списка лучших фильмов в HTML
const topFilmsListContainer = document.getElementById('top-films-list');

// Выводим список лучших фильмов на страницу
topFilmsListContainer.textContent = topFilmsList.join(', ');

let filmsHtml = topFilmsList.map(film => `<span class="top-films-list-item">${film}</span>`).join(', ');
topFilmsListContainer.innerHTML = filmsHtml;
