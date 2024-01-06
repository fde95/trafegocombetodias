AOS.init({
    duration: 1000, // values from 0 to 3000, with step 50ms
    once: true, // whether animation should happen only once - while scrolling down
});

function typeText(element, text, index, callback) {
    if (index < text.length) {
        $(element).text($(element).text() + text[index]);
        setTimeout(function () {
            typeText(element, text, index + 1, callback);
        }, 100);
    } else {
        setTimeout(callback, 1500);
    }
}

function deleteText(element, callback) {
    var text = $(element).text();
    if (text.length > 0) {
        $(element).text(text.slice(0, -1));
        setTimeout(function () {
        deleteText(element, callback);
        }, 50);
    } else {
        setTimeout(callback, 800);
    }
}

function startTyping() {
    typeText('.nomeEFuncao', 'FELIPE ESPINOZA', 0, function () {
            deleteText('.nomeEFuncao', function () {
            typeText('.nomeEFuncao', 'FRONT END', 0, function () {
                deleteText('.nomeEFuncao', startTyping);
            });
        });
    });
}

startTyping();