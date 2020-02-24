var m = 0;


function render(elem) {

    let x = document.getElementById("favcolor").value;

    elem.style.background = x;


}


function rendermd(elem) {

    let x = document.getElementById("favcolor").value;

    elem.style.background = x;

    m = m + 1;
}


function rendermu(elem) {

    let x = document.getElementById("favcolor").value;

    elem.style.background = x;

    m = m - 1;
}


function rendermo(elem) {

    if (m) {
        let x = document.getElementById("favcolor").value;

        elem.style.background = x;

    }

}