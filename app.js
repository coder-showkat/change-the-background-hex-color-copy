window.onload = () => {
    main()
}

function main() {
    var x = true;
    var hex = document.getElementById('hex')
    var changeBtn = document.getElementById('change-btn')
    var copyBtn = document.getElementById('copy-btn')

    function colorGenerator() {
        var red = Math.round(Math.random() * 255);
        var green = Math.round(Math.random() * 255);
        var blue = Math.round(Math.random() * 255);

        // return `rgb(${red}, ${green}, ${blue})`
        return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
    }
    changeBtn.addEventListener('click', () => {
        var bgcolor = colorGenerator();
        if (x == true) {
            document.getElementById('root').style.backgroundColor = bgcolor;
            hex.value = bgcolor;

        }
    })

    copyBtn.addEventListener('click', function () {
        navigator.clipboard.writeText(hex.value)
        generateToastMessage(`${hex.value} copied`)
    })

    function generateToastMessage(msg) {
        var div = document.createElement('div')
        div.innerHTML = msg
        div.className = 'toast-message toast-message-slide-in'
        document.body.appendChild(div)
        setTimeout(removeToastMessage, 2000)

        function removeToastMessage() {
            div.classList.remove('toast-message-slide-in')
            div.classList.add('toast-message-slide-out')
            div.addEventListener('animationend', function () {
                div.remove()
            })

        }
    }
}