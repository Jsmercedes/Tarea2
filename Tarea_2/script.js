var display = document.getElementById('display');
var historyList = document.getElementById('historyList');

window.onload = function() {
    loadHistory();
};

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        var result = eval(display.value);
        addHistory(display.value + ' = ' + result);
        display.value = result;
    } catch (e) {
        alert('Error en la expresión');
    }
}

function addHistory(entry) {
    var li = document.createElement('li');
    li.textContent = entry;
    historyList.appendChild(li);
    saveHistory(entry);
}

function saveHistory(entry) {
    var history = localStorage.getItem('calcHistory');
    if (history) {
        history = JSON.parse(history);
    } else {
        history = [];
    }
    history.push(entry);
    localStorage.setItem('calcHistory', JSON.stringify(history));
}

function loadHistory() {
    var history = localStorage.getItem('calcHistory');
    if (history) {
        history = JSON.parse(history);
        for (var i = 0; i < history.length; i++) {
            var li = document.createElement('li');
            li.textContent = history[i];
            historyList.appendChild(li);
        }
    }
}

function clearHistory() {
    localStorage.removeItem('calcHistory');
    historyList.innerHTML = '';
}
