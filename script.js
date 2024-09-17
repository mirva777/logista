const prepaymentInput = document.getElementById('prepayment');

prepaymentInput.addEventListener('input', function() {
    if (prepaymentInput.value > 100) {
        prepaymentInput.setCustomValidity('Value must be 100 or less.');
    } else {
        prepaymentInput.setCustomValidity('');
    }
});
const input = document.getElementById('username');

input.addEventListener('focus', () => {
    if (!input.value.startsWith('@')) {
        input.value = '@' + input.value;
    }
});

input.addEventListener('input', () => {
    if (!input.value.startsWith('@')) {
        input.value = '@' + input.value.substring(1);
    }
});
 /*document.addEventListener('DOMContentLoaded', function() {
    let isScrolling = false;

    // Function to handle scroll event
    function handleScroll() {
        isScrolling = true;
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            isScrolling = false;
        }, 100);

        let activeElement = document.activeElement;
        if ((activeElement.tagName === 'INPUT' || activeElement.tagName === 'SELECT' || activeElement.tagName === 'TEXTAREA') && activeElement.id !== 'loadName') {
            activeElement.blur();
        }
    }

    let scrollTimeout;

    // Add event listener to detect scrolling
    document.addEventListener('scroll', handleScroll);

    // Add focus event listener to all input, select, and textarea elements
    let inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function(event) {
            if (isScrolling && input.id !== 'loadName') {
                input.blur(); // Blur the input if it was focused during scroll
            }
        });
    });

            // Handle form submission
            const form = document.querySelector('form');
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                const formData = new FormData(form);
                let object = {};
                formData.forEach((value, key) => {
                    if (!Reflect.has(object, key)) {
                        object[key] = value;
                        return;
                    }
                    if (!Array.isArray(object[key])) {
                        object[key] = [object[key]];
                    }
                    object[key].push(value);
                });

                console.log("Form data object:", object);

                // Send data to Telegram WebApp
                Telegram.WebApp.sendData(JSON.stringify(object));
            });

            // Handle combobox change events
            const fromDropdown = document.getElementById('fromDropdown');
            const toDropdown = document.getElementById('toDropdown');

            fromDropdown.addEventListener('change', function() {
                console.log('From country selected:', fromDropdown.value);
            });

            toDropdown.addEventListener('change', function() {
                console.log('To country selected:', toDropdown.value);
            });
        } );*/
















        const fromDropdown = document.getElementById('fromDropdown');
        const fromcityList = document.getElementById('fromcityList');
        const toDropdown = document.getElementById('toDropdown');
        const tocityList = document.getElementById('tocityList');

        const citiesByCountry = {
            "🇰🇿Казахстан🇰🇿": ["Нур-Султан", "Алматы", "Шымкент"],
            "🇷🇺Россия🇷🇺": ["Москва", "Санкт-Петербург", "Новосибирск"],
            "🇩🇪Германия🇩🇪": ["Берлин", "Мюнхен", "Франкфурт"],
            "🇺🇦Украина🇺🇦": ["Киев", "Харьков", "Одесса"],
            "🇦🇲Армения🇦🇲": ["Ереван", "Гюмри", "Ванадзор"],
            "🇹🇷Турция🇹🇷": ["Стамбул", "Анкара", "Измир"],
            "🇨🇳Китай🇨🇳": ["Пекин", "Шанхай", "Гуанчжоу"],
            "🇦🇿Азербайджан🇦🇿": ["Баку", "Гянджа", "Сумгаит"],
            "🇫🇷Франция🇫🇷": ["Париж", "Марсель", "Лион"],
            "🇮🇹Италия🇮🇹": ["Рим", "Милан", "Неаполь"],
            "🇺🇿Узбекистан🇺🇿": ["Ташкент", "Самарканд", "Бухара"],
            "🇹🇯Таджикистан🇹Ј": ["Душанбе", "Худжанд", "Бохтар"],
            "🇰🇬Киргизия🇰🇬": ["Бишкек", "Ош", "Джалал-Абад"],
            "🇹🇲Туркмения🇹🇲": ["Ашхабад", "Туркменабад", "Дашогуз"],
            "🇬🇪Грузия🇬🇪": ["Тбилиси", "Батуми", "Кутаиси"],
            "🇵🇱Польша🇵🇱": ["Варшава", "Краков", "Лодзь"],
            "🇧🇾Беларусь🇧🇾": ["Минск", "Гомель", "Могилёв"],
            "🇲🇩Молдова🇲🇩": ["Кишинёв", "Тирасполь", "Бельцы"],
            "🇬🇧Великобритания🇬🇧": ["Лондон", "Бирмингем", "Манчестер"],
            "🇳🇱Нидерланды🇳🇱": ["Амстердам", "Роттердам", "Гаага"],
            "🇪🇸Испания🇪🇸": ["Мадрид", "Барселона", "Валенсия"],
            "🇱🇹Литва🇱🇹": ["Вильнюс", "Каунас", "Клайпеда"],
            "🇱🇻Латвия🇱🇻": ["Рига", "Даугавпилс", "Лиепая"],
            "🇪🇪Эстония🇪🇪": ["Таллин", "Тарту", "Нарва"]
        };

        function updateCityList(country, cityList) {
            cityList.innerHTML = '';
            if (citiesByCountry[country]) {
                citiesByCountry[country].forEach(city => {
                    const option = document.createElement('option');
                    option.value = city;
                    cityList.appendChild(option);
                });
            }
        }

        fromDropdown.addEventListener('input', function() {
            updateCityList(fromDropdown.value, fromcityList);
        });

        toDropdown.addEventListener('input', function() {
            updateCityList(toDropdown.value, tocityList);
        });
        const countryList = [
    "🇰🇿Казахстан🇰🇿", "🇷🇺Россия🇷🇺", "🇩🇪Германия🇩🇪", "🇺🇦Украина🇺🇦",
    "🇦🇲Армения🇦🇲", "🇹🇷Турция🇹🇷", "🇨🇳Китай🇨🇳", "🇦🇿Азербайджан🇦🇿",
    "🇫🇷Франция🇫🇷", "🇮🇹Италия🇮🇹", "🇺🇿Узбекистан🇺🇿", "🇹🇯Таджикистан🇹🇯",
    "🇰🇬Киргизия🇰🇬", "🇹🇲Туркмения🇹🇲", "🇬🇪Грузия🇬🇪", "🇵🇱Польша🇵🇱",
    "🇧🇾Беларусь🇧🇾", "🇲🇩Молдова🇲🇩", "🇬🇧Великобритания🇬🇧", "🇳🇱Нидерланды🇳🇱",
    "🇪🇸Испания🇪🇸", "🇱🇹Литва🇱🇹", "🇱🇻Латвия🇱🇻", "🇪🇪Эстония🇪🇪"
];

function validateInput(element, list, errorElement, errorMessage) {
    const value = element.value;
    if (!list.includes(value)) {
        errorElement.textContent = errorMessage;
        errorElement.style.display = 'block';
    } else {
        errorElement.style.display = 'none';
    }
}

function validateCityInput(cityElement, countryElement, errorElement, errorMessage) {
    const selectedCountry = countryElement.value;
    const selectedCity = cityElement.value;
    if (selectedCountry && citiesByCountry[selectedCountry] && !citiesByCountry[selectedCountry].includes(selectedCity)) {
        errorElement.textContent = errorMessage;
        errorElement.style.display = 'block';
    } else {
        errorElement.style.display = 'none';
    }
}

document.getElementById('fromDropdown').addEventListener('input', function() {
    validateInput(
        this,
        countryList,
        document.getElementById('fromCountryError'),
        'Неверный ввод'
    );
});

document.getElementById('fromcityInput').addEventListener('input', function() {
    validateCityInput(
        this,
        document.getElementById('fromDropdown'),
        document.getElementById('fromCityError'),
        'Неверный ввод'
    );
});

document.getElementById('toDropdown').addEventListener('input', function() {
    validateInput(
        this,
        countryList,
        document.getElementById('toCountryError'),
        'Неверный ввод'
    );
});

document.getElementById('tocityInput').addEventListener('input', function() {
    validateCityInput(
        this,
        document.getElementById('toDropdown'),
        document.getElementById('toCityError'),
        'Неверный ввод'
    );
});
document.querySelectorAll('.clearable').forEach(input => {
    input.addEventListener('input', function() {
        const value = this.value;
        this.classList.toggle('x', value.length > 0);
    });

    input.addEventListener('mousemove', function(e) {
        const offset = this.offsetWidth - 30;
        this.classList.toggle('onX', this.value.length > 0 && e.clientX > this.getBoundingClientRect().left + offset);
    });

    input.addEventListener('click', function(e) {
        if (this.classList.contains('onX')) {
            e.preventDefault();
            this.value = '';
            this.classList.remove('x', 'onX');
        }
    });
});




