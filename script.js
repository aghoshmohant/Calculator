function button(val) {
    document.getElementById("screen").value = document.getElementById("screen").value + val
}
function cleardisplay() {
    document.getElementById("screen").value = ""
}
function bg() {
    document.getElementById("calc").style.background = 'black'
    var buttons = document.getElementsByClassName("btn");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.background = 'black'
        buttons[i].style.color = 'white'

    }
    document.getElementsByClassName("btn")
    document.body.style.background = 'black';
    var buttons1 = document.getElementsByClassName("btn1");
    for (var i = 0; i < buttons.length; i++) {
        buttons1[i].style.background = 'black'
        buttons1[i].style.color = 'white'

    }

}
function equal() {
    var text = document.getElementById("screen").value
    var result = eval(text)
    document.getElementById("screen").value = result

}
function bg1() {
    document.getElementById("calc").style.background = 'gray';
    var buttons = document.getElementsByClassName("btn");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.background = 'white'
        buttons[i].style.color = 'black'

    }
    document.getElementsByClassName("btn")
    document.body.style.background = '#e6f0ec';
    var buttons1 = document.getElementsByClassName("btn1");
    for (var i = 0; i < buttons.length; i++) {
        buttons1[i].style.background = 'white'
        buttons1[i].style.color = 'black'


    }

}