const aquarius = document.getElementById('miseducation');
const pisces = document.getElementById('blonde');
const aries = document.getElementById('mbdtf');
const taurus = document.getElementById('blueprint');
const gemini = document.getElementById('telefone');
const cancer = document.getElementById('take-care');
const leo = document.getElementById('stankonia');
const virgo = document.getElementById('swimming');
const libra = document.getElementById('under-pressure');
const scorpio = document.getElementById('astroworld');
const sagittarius = document.getElementById('illmatic');
const capricorn = document.getElementById('tpab');

aquarius.addEventListener('click', function (ev) {
    console.log('aquarius button clicked: ' + ev.target.id);
    const idName = ev.target.id;
    userPicked(idName);
  });
pisces.addEventListener('click', function (ev) {
    console.log('pisces button clicked: ' + ev.target.id);
    const idName = ev.target.id;
    userPicked(idName);
  });
aries.addEventListener('click', function (ev) {
    console.log('aries button clicked: ' + ev.target.id);
    const idName = ev.target.id;
    userPicked(idName);
  });
taurus.addEventListener('click', function (ev) {
    console.log('taurus button clicked: ' + ev.target.id);
    const idName = ev.target.id;
    userPicked(idName);
  });
gemini.addEventListener('click', function (ev) {
    console.log('gemini button clicked: ' + ev.target.id);
    const idName = ev.target.id;
    userPicked(idName);
  });
cancer.addEventListener('click', function (ev) {
    console.log('cancer button clicked: ' + ev.target.id);
    const idName = ev.target.id;
    userPicked(idName);
  });
leo.addEventListener('click', function (ev) {
    console.log('leo button clicked: ' + ev.target.id);
    const idName = ev.target.id;
    userPicked(idName);
  });
virgo.addEventListener('click', function (ev) {
    console.log('virgo button clicked: ' + ev.target.id);
    const idName = ev.target.id;
    userPicked(idName);
  });
libra.addEventListener('click', function (ev) {
    console.log('libra button clicked: ' + ev.target.id);
    const idName = ev.target.id;
    userPicked(idName);
  });
scorpio.addEventListener('click', function (ev) {
    console.log('scorpio button clicked: ' + ev.target.id);
    const idName = ev.target.id;
    userPicked(idName);
  });
sagittarius.addEventListener('click', function (ev) {
    console.log('sagittarius button clicked: ' + ev.target.id);
    const idName = ev.target.id;
    userPicked(idName);
  });
capricorn.addEventListener('click', function (ev) {
    console.log('capricorn button clicked: ' + ev.target.id);
    const idName = ev.target.id;
    userPicked(idName);
  });


// Initializing Album Modals
const miseducationObj = document.getElementById('myModal1');
const blondeObj = document.getElementById('myModal2');
const mbdtfObj = document.getElementById('myModal3');
const blueprintObj = document.getElementById('myModal4');
const telefoneObj = document.getElementById('myModal5');
const takeCareObj = document.getElementById('myModal6');
const stankoniaObj = document.getElementById('myModal7');
const swimmingObj = document.getElementById('myModal8');
const underPressureObj = document.getElementById('myModal9');
const astroworldObj = document.getElementById('myModal10');
const illmaticObj = document.getElementById('myModal11');
const tpabObj = document.getElementById('myModal12');

// Initializing Audio Sounds
const playMis = document.getElementById('ex_factor');
const playBlonde = document.getElementById('pink_white');
const playMbdtf = document.getElementById('power');
const playBlueprint = document.getElementById('u_dont_know');
const playTelefone = document.getElementById('diddy_bop');
const playTakeCare = document.getElementById('headlines');
const playStankonia = document.getElementById('so_fresh_so_clean');
const playSwimming = document.getElementById('2009');
const playUnderPressure = document.getElementById('gang_related');
const playAstroworld = document.getElementById('butterfly_effect');
const playIllmatic = document.getElementById('nysom');
const playTpab = document.getElementById('alright');

// Play Audio
function playAudio(song) {
  switch(song) {
    case 'miseducation':
       playMis.play();
      break;
    case 'blonde':
      playBlonde.play();
      break;
    case 'mbdtf':
      playMbdtf.play();
      break;
    case 'blueprint':
      playBlueprint.play();
      break;
    case 'telefone':
      playTelefone.play();
      break;
    case 'take-care':
      playTakeCare.play();
      break;
    case 'stankonia':
      playStankonia.play();
      break;
    case 'swimming':
      playSwimming.play();
      break;
    case 'under-pressure':
      playUnderPressure.play();
      break;
    case 'astroworld':
      playAstroworld.play();
      break;
    case 'illmatic':
      playIllmatic.play();
      break;
    case 'tpab':
      playTpab.play();
      break;
    default: 
      return null;
  }
}

function pauseAudio() {
  playMis.pause();
  playMis.currentTime = 0;

  playBlonde.pause();
  playBlonde.currentTime = 0;

  playMbdtf.pause();
  playMbdtf.currentTime = 0;

  playBlueprint.pause();
  playBlueprint.currentTime = 0;

  playTelefone.pause();
  playTelefone.currentTime = 0;

  playTakeCare.pause();
  playTakeCare.currentTime = 0;

  playStankonia.pause();
  playStankonia.currentTime = 0;

  playSwimming.pause();
  playSwimming.currentTime = 0;

  playUnderPressure.pause();
  playUnderPressure.currentTime = 0;

  playAstroworld.pause();
  playAstroworld.currentTime = 0;

  playIllmatic.pause();
  playIllmatic.currentTime = 0;

  playTpab.pause();
  playTpab.currentTime = 0;
}

// UserPick Function
function userPicked(whichOne) {
    console.log('userPicked called: ' + whichOne);
    switch (whichOne) {
      case 'miseducation':
          miseducationObj.style.display = "block";
          playAudio('miseducation');
        break;
      case 'blonde':
          blondeObj.style.display = "block";
        playAudio('blonde');
        break;  
      case 'mbdtf':
          mbdtfObj.style.display = "block";
        playAudio('mbdtf');
        break;
      case 'blueprint':
          blueprintObj.style.display = "block";
        playAudio('blueprint');
        break;
      case 'telefone':
          telefoneObj.style.display = "block";
        playAudio('telefone');
        break;
      case 'take-care':
          takeCareObj.style.display = "block";
        playAudio('take-care');
        break;
      case 'stankonia':
          stankoniaObj.style.display = "block";
        playAudio('stankonia');
        break;
      case 'swimming':
          swimmingObj.style.display = "block";
        playAudio('swimming');
        break;
      case 'under-pressure':
          underPressureObj.style.display = "block";
        playAudio('under-pressure');
        break;
      case 'astroworld':
          astroworldObj.style.display = "block";
        playAudio('astroworld');
        break;
      case 'illmatic':
          illmaticObj.style.display = "block";
        playAudio('illmatic');
        break;
      case 'tpab':
          tpabObj.style.display = "block";
        playAudio('tpab');
        break;
      default:

    }
  }

 
// Get Date
function getInput(evt) {
    evt.preventDefault();
    
    const $form = document.getElementById('userSubmit');
    $form.addEventListener('submit', getInput);

    // Get the user date and extract the month of year and day of month
    const userBday = new Date(document.getElementById('bday').value);
    console.log('userBday is: ' + userBday);

    // Figure out the zodiac sign based on month and of year and day of month
    let whichMonth = userBday.getUTCMonth();
    whichMonth++;
    console.log('whichMonth is: ' + whichMonth);

    const whichDayOfMonth = userBday.getUTCDate();
    console.log('whichDayOfMonth is: ' + whichDayOfMonth);

    document.forms[0].reset();


    let AstroSign = "";

    if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
      AstroSign = "tpab";
    } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
      AstroSign = "illmatic";
    } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
      AstroSign = "astroworld";
    } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
      AstroSign = "under-pressure";
    } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
      AstroSign = "swimming";
    } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
      AstroSign = "stankonia";
    } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
      AstroSign = "take-care";
    } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
      AstroSign = "telefone";
    } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
      AstroSign = "blueprint";
    } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
      AstroSign = "mbdtf";
    } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
      AstroSign = "blonde";
    } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
      AstroSign = "miseducation";
    }

    console.log('AstroSign is: ' + AstroSign);

    userPicked(AstroSign);
 
};

const $form = document.querySelector('.container-date form');
$form.addEventListener('submit', getInput);




// Get the button that opens the modal
const btn = document.querySelectorAll("button.modal-button-album, button.modal-button");

// All page modals
const modals = document.querySelectorAll('.modal');

// Get the <span> element that closes the modal
const spans = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
for (let i = 0; i < btn.length; i++) {
  btn[i].onclick = function(e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
  }
}

// When the user clicks on <span> (x), close the modal
for (let i = 0; i < spans.length; i++) {
  spans[i].onclick = function() {
    for (let index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none"; 
      pauseAudio();   
    }
  }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
      for (let index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
      pauseAudio();    
      }
    }
  }



