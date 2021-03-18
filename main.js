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
 * @param {str} elementSelector
 * @param {int} add_pix
 */
function zvetsiPismo(elementSelector, add_pix) {

    let element = document.querySelector(elementSelector)
    let currentfontSize =  parseInt(element.style.fontSize);
    /** console.log(elementSelector, currentfontSize); */
    newFontSize = (currentfontSize + add_pix) + 'px';
    /** console.log(newFontSize); */
    element.style.fontSize = newFontSize;

}


/**
 * Pusti audio
 *
 * @param {str} elementSelector
 */
function hraj(elementSelector) {
  let zvuk;
  zvuk = document.querySelector(elementSelector);
  zvuk.play();
}


/**
 * Zastaví audio - pauza
 *
 * @param {str} elementSelector
 */
function pauza(elementSelector) {
  let zvuk;
  zvuk = document.querySelector(elementSelector);
  zvuk.pause();
}

/**
 * Ztlumí audio
 *
 * @param {str} elementSelector
 */
function ztlum(elementSelector) {
  let zvuk;
  zvuk = document.querySelector(elementSelector);
  zvuk.volume = 0;
}

/**
 * Ztliší audio na polovinu
 *
 * @param {str} elementSelector
 */
function ztis(elementSelector) {
  let zvuk;
  zvuk = document.querySelector(elementSelector);
  zvuk.volume = 0.5;
 }


 /**
  * Nahlas audio
  *
  * @param {str} elementSelector
  */
 function nahlas(elementSelector) {
   let zvuk;
   zvuk = document.querySelector(elementSelector);
   zvuk.volume = 1;
  }



 /**
  * Na zacatek audia
  *
  * @param {str} elementSelector
  */
 function na_zacatek(elementSelector) {
   let zvuk;
   zvuk = document.querySelector(elementSelector);
   zvuk.currentTime = 0;
  }