/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


const advertisingImages = document.querySelectorAll('.promo__adv img'),
    backgroundOfFilm = document.querySelector('.promo__bg'),
    nameOfFilm = backgroundOfFilm.querySelector('.promo__genre'),
    list = document.querySelectorAll('.promo__interactive-item');


advertisingImages.forEach(value => value.remove());
backgroundOfFilm.style.backgroundImage = 'url(img/bg.jpg)';

nameOfFilm.textContent = 'ДРАМА';

movieDB.movies.sort();
// list.forEach(value => console.log(value.textContent));

for (let i = 0; i < movieDB.movies.length; i++) {
    list[i].textContent = `${i + 1}: ${movieDB.movies[i]}`;
}