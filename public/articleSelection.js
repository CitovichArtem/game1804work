import { drawButton} from './button.js';
import { canvas, ctx, font,canvasWidth, canvasHeight, changeSelectedCharacter, list, characters, updateEnergy} from './game.js';
import { wrapText, MyText, Questions, TestText } from './text.js';

export let  selectedArticle = 0;
let  text;
export let answerFeedBack, answerFeedBack2;
export let numberAnswer = -1;
export let isDisabled$$$ = false;
export let answers = [
    [["Кибербезопасность","Киберинженерия","Соц.инженерия",0],
    ["Опарыши","Червяки","Манка", 1],
    ["Конфиденциальность", "Запутанность ","Запрет",0],
    ["3AF","2FA","2AF",1],
    ["Юр.лица","Физ.лица","Оба варианта", 2]],

    [["Цвет глаз","Фамилии","Пароли",2],
    ["Комбинации символов","Только имена","Даты рождения", 0],
    ["Открыто", "Хэш-значения ","В txt-файле",1],
    ["2","3","12",0],
    ["Чаще - лучше","Раз в год","Никогда", 0],
    ["Обучение","Отказ от интернета","Метод проб и ошибок", 0]],

    [["использовании тех.средств","манипулировании людьми","случайном подборе паролей",1],
    ["Обман по телефону","фишинговые эл.письма","Оба варианта",2],
    ["Вызов эмоций", "Предложение денег взамен ","Угрозы",0],
    ["Использование одного пароля","Отключение средств связи","Обучение принципам безопасности",2]],

    [["Доступность","Конфиденциальность","Скорость",1],
    ["Шифрование данных","Резервное копирование","Сжатие данных", 0],
    ["Несколько форм аутентификации", "Ничего ","Оба варианта",0],
    ["Основы безопасности данных","Организационную структуру","Адрес начальника",0],
    ["Справочник","Лупа и очки","Регулярные аудиты безопасности", 2]],

    [["Телефонных сетей","Компьютерных сетей","Телефонных вывшек",1],
    ["аутентификации и авторизации","Контрацепции","Оба варианта", 0],
    ["Firewall", "Fireboll","Firebay",0],
    ["маме","по сети","устно",1],
    ["IVS и IDS","IDS и IPS","IPS и IVS", 1],
    ["Системах и приложениях", "Совокупностях и таблицах","Оба варианта",0],
    ["Да", "Нет","Затрудняюсь ответить",0],
    ["Осведомленность", "Контрацепция","Сетевая безопасность",0]],

    [["Ключевым","Отверточным","Замочным",0],
    ["Макровирусов","Антивирусов", "Вирусов", 1],
    ["Мониторинг трафика в сети","Контроль трафика в сети","Оба варианта", 2],
    ["Нет", "Да ","Наверное",1],
    ["пароли и аутентификацию","шифрование и хэширование","оба варианта",0],
    ["шифрование","хэширование","Оба варианта", 0],
    ["аутентификация","резервные копии","Оба варианта", 1],
    ["хранение","удаление","обучение", 2],
    ["Эффективная защита","Эффективное использование","Продажа", 0]],

    [["Киберопасность","Безопасность","Опасность",1],
    ["Имя","Номер карты","Оба вариант", 2],
    ["QwerTy123", "Qs21lfs83a ","Yh5*h@a",2],
    ["Антивредитель","Антивирус","Антикод",1],
    ["Обновление ПО","Удаление ПО","Оба варианта", 0]]

];

export const drawArticle = (selectedArticle, list, nameArticle) => {
    var otstup = 20;
    text = TestText[selectedArticle-1][list];
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    MyText(nameArticle, 0, 0.1*canvasHeight, '#ffffff', font, 'Montserrat', 'center');
    drawButton(0.055*canvasWidth, 0.125 * canvasHeight, 0.89*canvasWidth, 0.74*canvasHeight, '',font, false);
    wrapText(ctx, text, 0.055*canvasWidth + otstup,0.175 * canvasHeight,0.89*canvasWidth - 2*otstup, font);
    drawButton(0.1 * canvasWidth, 0.88 * canvasHeight, 0.32 * canvasWidth, 0.08 * canvasHeight, 'Меню', 0.03 * canvasHeight, false);
    drawButton(0.6 * canvasWidth, 0.88 * canvasHeight, 0.32 * canvasWidth, 0.08 * canvasHeight, '<        >', 0.03 * canvasHeight, false);
    drawButton(0.44 * canvasWidth, 0.88 * canvasHeight, 0.14 * canvasWidth, 0.08 * canvasHeight, '$$$', 0.03 * canvasHeight,answers[selectedArticle-1][list][3] !== -2 ? false : true);
    if (answers[selectedArticle-1][list][3] !== -2){
        isDisabled$$$ = false;
    }else{
        isDisabled$$$ = true;
    }
};
export function changeNumberAnswer(x){
    numberAnswer = x;
}
export const handleArticleSelection = (y) => {
    console.log('попали в выбор статьи...');
    changeSelectedCharacter('Article');
    
    switch(true){
        case (y>= 0.135 * canvasHeight && y<= 0.238 * canvasHeight):
            selectedArticle = 1;
            console.log(selectedArticle);
            break;
        case (y>= 0.238 * canvasHeight && y<= 0.341 * canvasHeight):
            selectedArticle = 2;
            console.log(selectedArticle);
            break;
        case (y>= 0.341 * canvasHeight && y<= 0.444 * canvasHeight):
            selectedArticle = 3;
            console.log(selectedArticle);
            break;
        case (y>= 0.444 * canvasHeight && y<= 0.547 * canvasHeight):
            selectedArticle = 4;
            console.log(selectedArticle);
            break;
        case (y>= 0.547 * canvasHeight && y<= 0.650 * canvasHeight):
            selectedArticle = 5;
            console.log(selectedArticle);
            break;
        case (y>= 0.650 * canvasHeight && y<= 0.753 * canvasHeight):
            selectedArticle = 6;
            console.log(selectedArticle);
            break;
        case (y>= 0.753 * canvasHeight && y<= 0.856 * canvasHeight):
            selectedArticle = 7;
            console.log(selectedArticle);
            break;
    }
    console.log('выбрали статью');
};

export function drawQuestion(text){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    MyText('$ Спец.вопрос $', 0, 0.1*canvasHeight, '#ffffff', font, 'Montserrat', 'center');
    drawButton(0.055*canvasWidth, 0.125 * canvasHeight, 0.89*canvasWidth, 0.74*canvasHeight, '',font, false);
    wrapText(ctx, text, 0.095*canvasWidth,0.175 * canvasHeight,0.85*canvasWidth, font);
    let x=0.13*canvasWidth, y = 0.475 * canvasHeight;
    answers[selectedArticle-1][list].slice(0, -1).forEach(answer => {
        drawButton(x, y, 0.74*canvasWidth, 0.08*canvasHeight, answer,font, false);
        y += 0.10*canvasHeight; // Увеличиваем y для отображения следующего варианта ответа
    });
    drawButton(0.1 * canvasWidth, 0.88 * canvasHeight, 0.32 * canvasWidth, 0.08 * canvasHeight, 'Меню', 0.03 * canvasHeight, false);
    drawButton(0.5 * canvasWidth, 0.88 * canvasHeight, 0.42 * canvasWidth, 0.08 * canvasHeight, 'Материалы', 0.03 * canvasHeight, false);
}
export function drawAnswer(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawButton(0.055*canvasWidth, 0.125 * canvasHeight, 0.89*canvasWidth, 0.74*canvasHeight, '',font, false);
    drawButton(0.1 * canvasWidth, 0.88 * canvasHeight, 0.32 * canvasWidth, 0.08 * canvasHeight, 'Меню', 0.03 * canvasHeight, false);
    if (numberAnswer !== -1){
        checkAnswer(numberAnswer);
    }
}
let isEnergyUpdated = false; 
export function changeFlag(){
    isEnergyUpdated = false;
    console.log('Поменяли флаг на '+isEnergyUpdated);
}
function checkAnswer(numberAnswer) {
    console.log('------ Проверка вопроса' + answers[selectedArticle - 1][list][3]);
    let textColor = 'green';
    if (numberAnswer === answers[selectedArticle - 1][list][3]) {
        answerFeedBack = 'ОТВЕТ ВЕРНЫЙ';
        answerFeedBack2 = 'Бонус начислен';
        if (!isEnergyUpdated) {
            text = upRandomEnergyText();
            isEnergyUpdated = true; // Помечаем, что функция уже была вызвана
            console.log('Поменяли флаг на '+isEnergyUpdated);
        }
        
        answers[selectedArticle - 1][list][3] = -2;
        console.log(answers[selectedArticle - 1][list][3]);
    }else if(answers[selectedArticle - 1][list][3] !== -2) {
        textColor = 'red';
        answerFeedBack = 'ОТВЕТ НЕВЕРНЫЙ';
        answerFeedBack2 = 'Бонус не начислен';
        
    }
    MyText(answerFeedBack, 0, 0.19 * canvasHeight, textColor, font, 'Montserrat', 'center');
    MyText(answerFeedBack2, 0, 0.23 * canvasHeight, textColor, font, 'Montserrat', 'center');
    MyText('Выйди в меню', 0, 0.27 * canvasHeight, '#ffffff', font, 'Montserrat', 'center');

    drawButton(0.5 * canvasWidth, 0.88 * canvasHeight, 0.42 * canvasWidth, 0.08 * canvasHeight, 'Материалы', 0.03 * canvasHeight, false);
}

function upRandomEnergyText() {
    var randomNumber = Math.random();
    var updatedCharacter = randomNumber < 0.5 ? 'Мошенник' : 'Суперкоп';
    updateEnergy(updatedCharacter);
    return updatedCharacter;
}