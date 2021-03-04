const aquarius = document.getElementById('miseducation');
const pisces = document.getElementById('blonde');
const aries = document.getElementById('mbdtf');
const taurus = document.getElementById('blueprint');
const gemini = document.getElementById('telefone');
const cancer = document.getElementById('take-care');
const leo = document.getElementById('stankonia');
const virgo = document.getElementById('swimming');
const libra = document.getElementById('under-pressure');
const scorpio = document.getElementById('monster');
const sagittarius = document.getElementById('eternal-atake');
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



const miseducationObj = document.getElementById('myModal1');
const blondeObj = document.getElementById('myModal2');
const mbdtfObj = document.getElementById('myModal3');
const blueprintObj = document.getElementById('myModal4');
const telefoneObj = document.getElementById('myModal5');
const takeCareObj = document.getElementById('myModal6');
const stankoniaObj = document.getElementById('myModal7');
const swimmingObj = document.getElementById('myModal8');
const underPressureObj = document.getElementById('myModal9');
const monsterObj = document.getElementById('myModal10');
const eternalAtakeObj = document.getElementById('myModal11');
const tpabObj = document.getElementById('myModal12');

function userPicked(whichOne) {
    console.log('userPicked called: ' + whichOne);
    switch (whichOne) {
      case 'miseducation':
          miseducationObj.style.display = "block";
          init;
        break;
      case 'blonde':
          blondeObj.style.display = "block";
        break;  
      case 'mbdtf':
          mbdtfObj.style.display = "block";
        break;
      case 'blueprint':
          blueprintObj.style.display = "block";
        break;
      case 'telefone':
          telefoneObj.style.display = "block";
        break;
      case 'take-care':
          takeCareObj.style.display = "block";
        break;
      case 'stankonia':
          stankoniaObj.style.display = "block";
        break;
      case 'swimming':
          swimmingObj.style.display = "block";
        break;
      case 'under-pressure':
          underPressureObj.style.display = "block";
        break;
      case 'monster':
          monsterObj.style.display = "block";
        break;
      case 'eternal-atake':
          eternalAtakeObj.style.display = "block";
        break;
      case 'tpab':
          tpabObj.style.display = "block";
        break;
      default:

    }
  }

// Audio
document.addEventListener('DOMContentLoaded', init);
    const SOUNDS = {};
    
    function init() {
        let miseducation = document.getElementById('miseducation');
        miseducation.addEventListener('click', play);
        
        let blonde = document.getElementById('blonde');
        blonde.addEventListener('click', play);
        
        let mbdtf = document.getElementById('mbdtf');
        mbdtf.addEventListener('click', play);
                
        let blueprint = document.getElementById('blueprint');
        blueprint.addEventListener('click', play);
                
        let telefone = document.getElementById('telefone');
        telefone.addEventListener('click', play);
                
        let takeCare = document.getElementById('take-care');
        takeCare.addEventListener('click', play);
                
        let stankonia = document.getElementById('stankonia');
        stankonia.addEventListener('click', play);
                
        let swimming = document.getElementById('swimming');
        swimming.addEventListener('click', play);
                
        let underPressure = document.getElementById('under-pressure');
        underPressure.addEventListener('click', play);
                
        let monster = document.getElementById('monster');
        monster.addEventListener('click', play);
                
        let eternalAtake = document.getElementById('eternal-atake');
        eternalAtake.addEventListener('click', play);
                
        let tpab = document.getElementById('tpab');
        tpab.addEventListener('click', play);
        
    };

    function play(ev){
        let p = ev.currentTarget;
        ev.preventDefault();

        let fn = p.getAttribute('data-file');
        let src = './sounds/' + fn + '.mp3';
        console.log(src);

        let audio = document.getElementById("music-player");

        audio.src = src;
        audio.play();
    };
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
      AstroSign = "eternal-atake";
    } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
      AstroSign = "monster";
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
      }
   }
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target.classList.contains('modal')) {
       for (let index in modals) {
        if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
       }
      }
    }



