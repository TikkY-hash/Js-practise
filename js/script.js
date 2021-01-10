'use strict';

document.addEventListener('DOMContentLoaded', () => {
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
        list = document.querySelector('.promo__interactive-list'),
        form = document.querySelector('.add'),
        input = form.querySelector('.adding__input'),
        button = form.querySelector('button'),
        checkbox = document.querySelector('[type="checkbox"]');

    const removeAdd = (arr) => {
        arr.forEach(value => value.remove());
    };

    const elements = () => {
        backgroundOfFilm.style.backgroundImage = 'url(img/bg.jpg)';

        nameOfFilm.textContent = 'драма';
    };

    const listSort = (arr) => {
        arr.sort();
    };

    function call(arr, list) {
        list.textContent = "";

        listSort(arr);

        arr.forEach((value, index) => {
            list.innerHTML += `
            <li class="promo__interactive-item">
            ${index + 1}  ${value}
            <div class="delete"></div>
            </li>
            `;
        });
        deleteList(arr);
    }

    function correctWord(word) {
        if (word.length > 21) {
            word = `${word.slice(0,22)}...`;
            return word;
        } else {
            return word;
        }
    }

    function deleteList(arr) {
        document.querySelectorAll('.delete').forEach((value, index) => {
            value.addEventListener('click', () => {
                value.parentElement.remove();
                arr.splice(index, 1);
                call(movieDB.movies, list);
            });
        });
    }

    function checkCheckbox(box) {
        if(box.checked) {
            console.log('Добавляем любимый фильм');
        }
    }

    button.addEventListener('click', (e) => {
        e.preventDefault();
        let userValue = input.value;
        if (userValue) {
            userValue = correctWord(userValue);
            movieDB.movies.push(userValue);
            checkCheckbox(checkbox);
            call(movieDB.movies, list);
        }
    });

    removeAdd(advertisingImages);
    elements();
    call(movieDB.movies, list);
});