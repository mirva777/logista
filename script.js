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
            "🇰🇿Казахстан🇰🇿": ["Нур-Султан", "Алматы", "Шымкент", "Караганда", "Актобе", "Тараз", "Павлодар", "Усть-Каменогорск", "Семей", "Атырау", "Костанай", "Петропавловск", "Кызылорда"],
            "🇷🇺Россия🇷🇺": ["Москва", "Санкт-Петербург", "Новосибирск", "Екатеринбург", "Казань", "Нижний Новгород", "Самара", "Омск", "Челябинск", "Ростов-на-Дону", "Уфа", "Волгоград", "Красноярск"],
            "🇩🇪Германия🇩🇪": ["Берлин", "Мюнхен", "Франкфурт", "Гамбург", "Кёльн", "Штутгарт", "Дюссельдорф", "Лейпциг", "Дрезден", "Бремен", "Нюрнберг", "Ганновер", "Мангейм"],
            "🇺🇦Украина🇺🇦": ["Киев", "Харьков", "Одесса", "Днепр", "Львов", "Запорожье", "Кривой Рог", "Николаев", "Мариуполь", "Винница", "Чернигов", "Херсон", "Полтава"],
            "🇦🇲Армения🇦🇲": ["Ереван", "Гюмри", "Ванадзор", "Эчмиадзин", "Раздан", "Оджан", "Абовян", "Капан", "Алаверди", "Гавар", "Артём", "Арташат", "Севан"],
            "🇹🇷Турция🇹🇷": ["Стамбул", "Анкара", "Измир", "Бурса", "Анталья", "Адана", "Кония", "Газантеп", "Кайсери", "Мерсин", "Эскишехир", "Диярбакыр", "Самсун"],
            "🇨🇳Китай🇨🇳": ["Пекин", "Шанхай", "Гуанчжоу", "Шэньчжэнь", "Тяньцзинь", "Чунцин", "Ханчжоу", "Нанкин", "Сиань", "Чэнду", "Чанчунь", "Ухань", "Чжухай"],
            "🇦🇿Азербайджан🇦🇿": ["Баку", "Гянджа", "Сумгаит", "Мингечаур", "Шеки", "Ленкорань", "Шамкир", "Шуша", "Нахичевань", "Хачмаз", "Агдам", "Габала", "Закаталы"],
            "🇫🇷Франция🇫🇷": ["Париж", "Марсель", "Лион", "Тулуза", "Ницца", "Нант", "Страсбург", "Монпелье", "Бордо", "Лилль", "Ренн", "Руан", "Реймс"],
            "🇮🇹Италия🇮🇹": ["Рим", "Милан", "Неаполь", "Турин", "Палермо", "Генуя", "Болонья", "Флоренция", "Бари", "Катания", "Венеция", "Верона", "Мессина"],
            "🇺🇿Узбекистан🇺🇿": ["Ташкент", "Самарканд", "Бухара", "Наманган", "Андижан", "Фергана", "Коканд", "Караши", "Хива", "Термез", "Нукус", "Навои", "Гулистан"],
            "🇹🇯Таджикистан🇹Ј": ["Душанбе", "Худжанд", "Бохтар", "Куляб", "Турсунзаде", "Истрафшан", "Пенджикент", "Гиссар", "Вахдат", "Канибадам", "Рогун", "Файзабад", "Исфара"],
            "🇰🇬Киргизия🇰🇬": ["Бишкек", "Ош", "Джалал-Абад", "Каракол", "Токмок", "Талас", "Кызыл-Кия", "Кант", "Баткен", "Нарын", "Балыкчы", "Чолпон-Ата", "Иссык-Куль"],
            "🇹🇲Туркмения🇹🇲": ["Ашхабад", "Туркменабад", "Дашогуз", "Мары", "Байрамали", "Балканабат", "Серахс", "Анау", "Кёнеургенч", "Теджен", "Берекет", "Гумдаг", "Каракум"],
            "🇬🇪Грузия🇬🇪": ["Тбилиси", "Батуми", "Кутаиси", "Рустави", "Зугдиди", "Гори", "Поти", "Самтредиа", "Сенаки", "Ахалцихе", "Телави", "Чиатура", "Мцхета"],
            "🇵🇱Польша🇵🇱": ["Варшава", "Краков", "Лодзь", "Вроцлав", "Познань", "Гданьск", "Щецин", "Быдгощ", "Люблин", "Катовице", "Бялысток", "Гдыня", "Радом"],
            "🇧🇾Беларусь🇧🇾": ["Минск", "Гомель", "Могилёв", "Витебск", "Гродно", "Брест", "Борисов", "Барановичи", "Пинск", "Орша", "Мозырь", "Новополоцк", "Солигорск"],
            "🇲🇩Молдова🇲🇩": ["Кишинёв", "Тирасполь", "Бельцы", "Бендеры", "Рыбница", "Кагул", "Унгены", "Оргеев", "Дрокия", "Комрат", "Хынчешты", "Сорока", "Единцы"],
            "🇬🇧Великобритания🇬🇧": ["Лондон", "Бирмингем", "Манчестер", "Глазго", "Ливерпуль", "Лидс", "Шеффилд", "Эдинбург", "Бристоль", "Кардифф", "Белфаст", "Ньюкасл", "Ноттингем"],
            "🇳🇱Нидерланды🇳🇱": ["Амстердам", "Роттердам", "Гаага", "Утрехт", "Эйндховен", "Гронинген", "Харлем", "Маастрихт", "Бреда", "Неймеген", "Тилбург", "Арнем", "Зволле"],
            "🇪🇸Испания🇪🇸": ["Мадрид", "Барселона", "Валенсия", "Севилья", "Сарагоса", "Малага", "Мурсия", "Пальма", "Лас-Пальмас", "Бильбао", "Аликанте", "Кордоба", "Вальядолид"],
            "🇱🇹Литва🇱🇹": ["Вильнюс", "Каунас", "Клайпеда", "Шяуляй", "Паневежис", "Али́тус", "Мажейкяй", "Утена", "Тау́раге", "Мариямполе", "Тельшяй", "Йонава", "Кедайняй"],
            "🇱🇻Латвия🇱🇻": ["Рига", "Даугавпилс", "Лиепая", "Юрмала", "Валмиера", "Вентспилс", "Елгава", "Резекне", "Сигулда", "Огре", "Тукумс", "Салдус", "Мадона"],
            "🇪🇪Эстония🇪🇪": ["Таллин", "Тарту", "Нарва", "Пярну", "Кохтла-Ярве", "Вильянди", "Раквере", "Маарду", "Кейла", "Силламяэ", "Йыгева", "Хаапсалу", "Рапла"]
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

function hideKeyboard() {
    // Find the active element, usually the input field
    const activeElement = document.activeElement;
    if (activeElement.tagName === 'INPUT') {
        activeElement.blur(); // Remove focus, hides the keyboard
    }
}

// Add event listener for touch or click events
document.addEventListener('click', function(event) {
    // Check if the click target is outside the input
    if (!event.target.closest('input')) {
        hideKeyboard();
    }
});