// tady je místo pro náš program

let odstavec = document.querySelector(".odstavec")

function priNajeti() {
    odstavec.classList.add("p_bold");
}

function priOdjeti() {
    odstavec.classList.remove("p_bold");
}

/**
 * Zcervena vybrany objekt
 *
 * @param {str} elementSelector
 */
function zcervenej(elementSelector) {
  document.querySelector(elementSelector).classList.add("cervena");
}


/**
 * Zvetsi vybrany objekt o jeden pixel
 *
  * @param {obj} event

 */
function zvetsiPismo(elementSelector, add_pix) {

    let element = document.querySelector(elementSelector)
    let currentfontSize =  parseInt(element.style.fontSize);
    console.log(elementSelector, currentfontSize);
    newFontSize = (currentfontSize + add_pix) + 'px';
    console.log(newFontSize);
    element.style.fontSize = newFontSize;

}

