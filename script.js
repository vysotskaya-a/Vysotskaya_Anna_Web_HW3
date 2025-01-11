let oPlayer = true;
let btn = document.getElementsByClassName("btn"); //коллекция всех кнопок игры
let xScore = document.querySelector(".xScore");  //эл-т с счётом крестика
let oScore = document.querySelector(".oScore"); //эл-т с счётом нолика

// переменные для хранения счёта игры
let x = 0;
let o = 0;

btnsManager(); 

//словарь для клеток поля (возможное содержимое: "", "x", "o")
let field = {
    "A1" : "",
    "A2" : "",
    "A3" : "",
    "B1" : "",
    "B2" : "",
    "B3" : "",
    "C1" : "",
    "C2" : "",
    "C3" : ""
}

// функция replay сбрасывает игровое поле после завершения раунда
function replay() {
    xScore.textContent = x;
    oScore.textContent = o;

    //очищение 9 кнопок
    for (let i = 0; i < btn.length; i++) {
        if (btn[i].classList.contains("taken")) {
            btn[i].classList.remove("taken");
            btn[i].style = "";
            btnsManager();
        }
    }
    //обновление словаря на значения по умолчанию
    for (let i in field){
        field[i] = "";
    }
}

// фукнция checkWin проверяет наличие победы или ничьи
function checkWin() {
    let k = 0;

    for (let i in field) {
        if (field[i] != "") {
            k += 1;
        }
    }

    // условие для ничьи
    if (k == 9) {
        replay();
    }

    // условия для победы
    if (field.A1 == field.A2 && field.A2 == field.A3 && field.A1 != "") { //первая строка
        if (field.A1 == "o") {
            o += 1;
        }
        else if (field.A1 == "x"){
            x += 1;
        }
        replay();
    }
    else if (field.B1 == field.B2 && field.B2 == field.B3 && field.B1 != "") { //вторая строка
        if (field.B1 == "o") {
            o += 1;
        }
        else if (field.B1 == "x"){
            x += 1;
        }
        replay();
    }
    else if (field.C1 == field.C2 && field.C2 == field.C3 && field.C1 != "") { //третья строка
        if (field.C1 == "o") {
            o += 1;
        }
        else if (field.C1 == "x"){
            x += 1;
        }
        replay();
    }
    else if (field.A1 == field.B1 && field.B1 == field.C1 && field.A1 != "") { //первый столбец
        if (field.A1 == "o") {
            o += 1;
        }
        else if (field.A1 == "x"){
            x += 1;
        }
        replay();
    }
    else if (field.A2 == field.B2 && field.B2 == field.C2 && field.A2 != "") { //второй столбец
        if (field.A2 == "o") {
            o += 1;
        }
        else if (field.A2 == "x"){
            x += 1;
        }
        replay();
    }
    else if (field.A3 == field.B3 && field.B3 == field.C3 && field.A3 != "") { //третий столбец
        if (field.A3 == "o") {
            o += 1;
        }
        else if (field.A3 == "x"){
            x += 1;
        }
        replay();
    }
    else if (field.A1 == field.B2 && field.B2 == field.C3 && field.A1 != "") { //главная диагональ
        if (field.A1 == "o") {
            o += 1;
        }
        else if (field.A1 == "x"){
            x += 1;
        }
        replay();
    }
    else if (field.A3 == field.B2 && field.B2 == field.C1 && field.A3 != "") { // побочная диагональ
        if (field.A3 == "o") {
            o += 1;
        }
        else if (field.A3 == "x"){
            x += 1;
        }
        replay();
    }
}

// фукнция btnsManager, урпавляет отображением кнопок
function btnsManager() {
    for (let i = 0; i < btn.length; i++) {
        if (btn[i].classList.contains("taken")) {
            btn[i].classList.remove("o");
            btn[i].classList.remove("x");
        }
        else{
            if (oPlayer) {
                if (btn[i].classList.contains("x")) {
                    btn[i].classList.remove("x");
                }

                if (!btn[i].classList.contains("o")) {
                    btn[i].classList.add("o");
                }
            }
            else{
                if (btn[i].classList.contains("o")) {
                    btn[i].classList.remove("o");
                }

                if (!btn[i].classList.contains("x")) {
                    btn[i].classList.add("x");
                }
            }
        }
    }
}

//функция Move, обрабатывает ходы игроков, 
function Move(obj) {
    if (!obj.classList.contains("taken")) { // если кнопка НЕ занята
        if (obj.classList.contains("o")) { // установка изображения, если игрок нолик
            obj.style = "background-image: url(./assets/o.png)";
            obj.classList.add("taken");
            field[obj.classList[0]] = "o";
        }
        else if (obj.classList.contains("x")) {  // установка изображения, если игрок крестик
            obj.style = "background-image: url(./assets/x.png)";
            obj.classList.add("taken");
            field[obj.classList[0]] = "x";
        }

        oPlayer = !oPlayer; // смена хода (игрока)
        btnsManager(); // обновление доступных кнопок
        checkWin(); // проверка на побуду или ничью после каждого хода
    }
}
