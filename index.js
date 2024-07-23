/* texto que se borra */

// function([string1, string2],target id,[color1,color2])    
consoleText(['Hola Mundo.', 'Soy Jonathan Fajardo', 'Front-end Developer.'], 'text', ['darkolivegreen', 'olivedrab', 'darkolivegreen']);

function consoleText(words, id, colors) {
    if (colors === undefined) colors = ['#fff'];
    var visible = true;
    var con = document.getElementById('console');
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById(id)
    target.setAttribute('style', 'color:' + colors[0])
    window.setInterval(function () {

        if (letterCount === 0 && waiting === false) {
            waiting = true;
            target.innerHTML = words[0].substring(0, letterCount)
            window.setTimeout(function () {
                var usedColor = colors.shift();
                colors.push(usedColor);
                var usedWord = words.shift();
                words.push(usedWord);
                x = 1;
                target.setAttribute('style', 'color:' + colors[0])
                letterCount += x;
                waiting = false;
            }, 1000)
        } else if (letterCount === words[0].length + 1 && waiting === false) {
            waiting = true;
            window.setTimeout(function () {
                x = -1;
                letterCount += x;
                waiting = false;
            }, 1000)
        } else if (waiting === false) {
            target.innerHTML = words[0].substring(0, letterCount)
            letterCount += x;
        }
    }, 120)
    window.setInterval(function () {
        if (visible === true) {
            con.className = 'console-underscore hidden'
            visible = false;

        } else {
            con.className = 'console-underscore'

            visible = true;
        }
    }, 400)
}

/* dark mode */

const toggleSwitch = document.querySelector('#toggle');
const modoBtn = document.querySelector('#modo-btn');

// Event listener para cambiar entre modo light y modo dark
toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
        document.body.classList.add('dark-mode');
        modoBtn.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
        modoBtn.classList.remove('dark-mode');
    }
});

// Chequear el estado inicial del modo (por si el usuario tiene preferencias guardadas)
if (localStorage.getItem('modo') === 'dark') {
    toggleSwitch.checked = true;
    document.body.classList.add('dark-mode');
    modoBtn.classList.add('dark-mode');
} else {
    toggleSwitch.checked = false;
}