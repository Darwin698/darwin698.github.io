function plus(button) {
    let search = button.id.slice(0, -2);
    var numberValue = document.getElementById(search);
    var currentValue = parseInt(numberValue.innerHTML, 10);
    numberValue.innerHTML = currentValue + 1;
}
function minus(button) {
    let search = button.id.slice(0, -4);
    var numberValue = document.getElementById(search);
    var currentValue = parseInt(numberValue.innerHTML, 10);

    if (numberValue.textContent === "0") {
        return
    }
    else {
        numberValue.innerHTML = currentValue - 1;
    }
}


function playerName(name) {
    let nameValue = name.value;
    let erorrElement = document.getElementById("errorname");
    // Проверка на максимальное количество символов
    if (nameValue.length > 7) {
        // Показываем ошибку
        erorrElement.innerHTML = "Max 7 symbols";
        erorrElement.style.display = "block";
        return;
    } else {
        // Сбрасываем ошибку
        document.getElementById("errorname").innerHTML = "";
        erorrElement.style.display = "none";
    }

    let search = name.id + "+";
    var numberValue = document.getElementById(search);
    numberValue.innerHTML = nameValue;

    // Скрытие элемента с именем name
    name.style.display = "none";

    // Проверка, существует ли уже кнопка "Change Name"
    var existingButton = document.getElementById("changeNameButton");

    if (!existingButton) {
        // Создание и добавление кнопки "Change Name"
        var changeNameButton = document.createElement("button");
        changeNameButton.id = "changeNameButton";
        changeNameButton.innerHTML = "Change Name";
        changeNameButton.onclick = function () {
            name.style.display = "block";
        };
        changeNameButton.style.width = "300px";
        changeNameButton.style.fontSize = "30px";
        name.parentNode.appendChild(changeNameButton);
    }
}

function rollDice(button) {
    let maxNumber = parseInt(button.id.replace('D', '').replace('+', ''), 10);
    let search = button.id.slice(0, -1);

    // Ожидаем 2 секунды перед установкой результата
    setTimeout(function () {
        var randomNumber = Math.floor(Math.random() * maxNumber) + 1;
        document.getElementById(search).innerText = randomNumber;
    }, 2000);
}
function resetDice() {
    var diceSpans = document.querySelectorAll('span[id^="D"]');
    diceSpans.forEach(function (span) {
        span.innerHTML = '&nbsp;&nbsp;';

    });
}
function showClassInfo() {
    let allClasses = document.querySelectorAll('.trainer[title="trainer"]');

    for (let i = 0; i < allClasses.length; i++) {
        allClasses[i].style.display = "none";
    }
    var selectedClass = document.getElementById("trainer").value;
    var classInfoElement = document.getElementById(selectedClass);
    if (classInfoElement) {
        classInfoElement.style.display = "block";

    }
}

function monfonpick() {
    var monfonCode = document.getElementById("inputMonfon").value;
    var errorElement = document.getElementById("errormonfon");

    // Проверка на пустую строку
    if (monfonCode.trim() === "") {
        // Если строка пустая, удаляем ошибку
        errorElement.innerHTML = "";
        return;
    }

    // Проверка на цифровые значения
    if (!/^\d+$/.test(monfonCode)) {
        // Устанавливаем текст ошибки и стилизуем
        errorElement.innerHTML = "Invalid code";
        errorElement.style.marginLeft = "20px";
        errorElement.style.color = "red";
        return;
    }

    var monfonOption = document.getElementById(monfonCode);
    if (monfonOption && monfonOption.classList.contains('monfon')) {
        var monfonList = document.querySelectorAll('[title="monfon"]');
        monfonList.forEach(function (option) {
            option.style.display = 'none';
            option.selected = false;
        });
        errorElement.innerHTML = "";
        monfonOption.style.display = 'block';
    } else {
        errorElement.innerHTML = "Invalid code";
        errorElement.style.marginLeft = "20px";
        errorElement.style.color = "red";
    }
}

function stuffHeadInput() {
    var stuffHeadCode = document.getElementById("inputStuffHead").value;
    var errorElement = document.getElementById("errorstufBody");

    // Проверка на пустую строку
    if (stuffHeadCode.trim() === "") {
        // Если строка пустая, удаляем ошибку
        errorElement.innerHTML = "";
        return;
    }

    // Проверка на цифровые значения
    if (!/^\d+$/.test(stuffHeadCode)) {
        // Устанавливаем текст ошибки и стилизуем
        errorElement.innerHTML = "Invalid code";
        errorElement.style.marginLeft = "20px";
        return;
    }

    var stuffOption = document.getElementById(stuffHeadCode);
    if (stuffOption && stuffOption.classList.contains('headStuffContainer')) {
        var stuffList = document.querySelectorAll('[title="stuffHead"]');
        stuffList.forEach(function (option) {
            option.style.display = 'none';
            option.selected = false;
        });
        errorElement.innerHTML = "";
        stuffOption.style.display = 'flex';

    } else {
        errorElement.innerHTML = "Invalid code";
        errorElement.style.marginLeft = "20px";
    }
}
function deleteHead() {
    let headImages = document.querySelectorAll('[title="stuffHead"]');
    headImages.forEach(function (headImage) {
        headImage.style.display = 'none';
    });
    let input = document.getElementById("inputStuffHead");
    input.value = "";
    defaultHead = document.getElementById("deafaultHead");

    defaultHead.style.display = "flex";

}
function stuffBodyInput() {
    var stuffbodyCode = document.getElementById("inputStuffBody").value;
    var errorElement = document.getElementById("errorstufBody");

    // Проверка на пустую строку
    if (stuffbodyCode.trim() === "") {
        // Если строка пустая, удаляем ошибку
        errorElement.innerHTML = "";
        return;
    }

    // Проверка на цифровые значения
    if (!/^\d+$/.test(stuffbodyCode)) {
        // Устанавливаем текст ошибки и стилизуем
        errorElement.innerHTML = "Invalid code";
        errorElement.style.marginLeft = "20px";
        return;
    }

    var stuffOption = document.getElementById(stuffbodyCode);
    if (stuffOption && stuffOption.classList.contains('bodyStuffContainer')) {
        var stuffList = document.querySelectorAll('[title="stuffBody"]');
        stuffList.forEach(function (option) {
            option.style.display = 'none';
            option.selected = false;
        });
        errorElement.innerHTML = "";
        stuffOption.style.display = 'flex';

    } else {
        errorElement.innerHTML = "Invalid code";
        errorElement.style.marginLeft = "20px";
    }
}
function deletebody() {
    let bodyImages = document.querySelectorAll('[title="stuffBody"]');
    bodyImages.forEach(function (bodyImages) {
        bodyImages.style.display = 'none';
    });
    let input = document.getElementById("inputStuffBody");
    input.value = "";
    defaultHead = document.getElementById("deafaultBody");

    defaultHead.style.display = "flex";

}
function playerResult() {
    let diceValues = document.querySelectorAll('[class="dicenameResult"]');
    diceValues.forEach(function (diceValue) {
        if (diceValue.innerText.trim() !== "") {
            let button = document.getElementById("playerButton");
            button.style.display = "none";

            let spanResult = document.getElementById("playerRes");
            spanResult.style.display = "flex";


            let result = 0;

            diceValues.forEach(function (diceValue) {
                // Предполагая, что diceValue содержит числовое значение
                result += parseInt(diceValue.textContent.trim()) || 0;
            });

            // Присвоение результата в элемент с id "playerRes"
            spanResult.textContent = result;
        }
    });
}
function enemyResult() {
    let diceValues = document.querySelectorAll('[class="dicenameResult"]');
    diceValues.forEach(function (diceValue) {
        if (diceValue.innerText.trim() !== "") {
    let button = document.getElementById("enemyButton");
    button.style.display = "none";

    let spanResult = document.getElementById("enemyRes");
    spanResult.style.display = "flex";

    let diceValues = document.querySelectorAll('[class="dicenameResult"]');
    let result = 0;

    diceValues.forEach(function (diceValue) {
        // Предполагая, что diceValue содержит числовое значение
        result += parseInt(diceValue.textContent.trim()) || 0;
    });

    // Присвоение результата в элемент с id "playerRes"
    spanResult.textContent = result;
}
});
}
function resetResult() {
    let spanResult = document.getElementById("playerRes");
    spanResult.textContent = "";
    spanResult.style.display = "none";
    let buttonPlayer = document.getElementById("playerButton");
    buttonPlayer.style.display = "flex";

    let buttonEnemy = document.getElementById("enemyButton");
    buttonEnemy.style.display = "flex";
    let enemyResult = document.getElementById("enemyRes");
    enemyResult.textContent = "";
    enemyResult.style.display = "none";
}


let clicks = 0;

function x2(button) {
    let search = button.id.slice(0, -2);

    let playerValue = document.getElementById(search);
    let currentValue = parseFloat(playerValue.textContent);
    if (!isNaN(currentValue) && currentValue !== "0") {



        if (clicks % 2 === 0) {
            // Первое нажатие: умножаем на 2
            currentValue *= 2;
            button.style.background = "green";
        } else {
            // Второе нажатие: делим на 2
            currentValue /= 2;
            button.style.background = "buttonface";
        }

        // Округляем результат до двух знаков после запятой
        currentValue = parseFloat(currentValue.toFixed(2));

        // Обновляем текст элемента с новым значением
        playerValue.textContent = currentValue;

        // Увеличиваем счетчик нажатий
        clicks++;
    }
}