function resize(width) {
    var skills = document.getElementsByClassName('skill');
    var mainInfo = document.getElementsByClassName('main-info');
    var photos = document.getElementsByClassName('photo');
    var mainInfoWidth = 637;
    var containerWidth = 800;
    var skillStyle = "display: inline-block; width: 230px; vertical-align: top; margin: 0 15px";
    var photoHeight = 222;
    if (width < 800) {
        containerWidth = "100%";
        mainInfoWidth = width - 200;
        skillStyle = "display: block; width: 100%;";
    }
    if (width < 450) {
        photoHeight = 100;
        mainInfoWidth = width - 90;
    }
    document.getElementById('container').style.cssText = "width:" + containerWidth + "px; margin: auto;";
    [].forEach.call(mainInfo, function (main) {
        main.style.cssText = "width:" + mainInfoWidth + "px";
    });
    [].forEach.call(photos, function (photo) {
        photo.style.cssText = "height:" + photoHeight + "px";
    });
    [].forEach.call(skills, function (skill) {
        skill.style.cssText = skillStyle;
    });
};

function getLang() {
    var lang = 'en';
    if (navigator) {
        if (navigator.language) {
            lang = navigator.language;
        }
        else if (navigator.browserLanguage) {
            lang = navigator.browserLanguage;
        }
        else if (navigator.systemLanguage) {
            lang = navigator.systemLanguage;
        }
        else if (navigator.userLanguage) {
            lang = navigator.userLanguage;
        }
    };
    if (lang.indexOf('-') > -1) {
        lang = lang.slice(0, lang.indexOf('-'));
        return lang;
    }
    else {
        return lang;
    };
};

function chooseLang(lang) {
    var ru = document.getElementById('ru');
    var en = document.getElementById('en');
    ru.style.display = "none";
    en.style.display = "none";
    if (lang == 'ru') {
        ru.style.display = "block";
        en.style.display = "none";
    }
    else {
        en.style.display = "block";
        ru.style.display = "none";
    }
};
window.onload = function (event) {
    console.log(getLang());
    resize(document.documentElement.clientWidth);
    chooseLang(getLang());
};
window.onresize = function (event) {
    resize(document.documentElement.clientWidth);
};