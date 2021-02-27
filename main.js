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

function userPicked(whichOne) {
    console.log('userPicked called: ' + whichOne);
    switch (whichOne) {
      case 'miseducation':
            buttons
        // display date range
        // display description
        // play sound
        break;
      case 'blonde':
            buttons
        // displayObj.src = 'img/ful_scorpio.png';
         // display date range
        // display description
        // play sound
        break;  
      case 'mbdtf':
            buttons
        // displayObj.src = 'img/ful_aquarius.png';
        // display date range
        // display description
        // play sound
        break;
      case 'blueprint':
            buttons
        // displayObj.src = 'img/ful_aquarius.png';
        // display date range
        // display description
        // play sound
        break;
      case 'telefone':
            buttons
        // displayObj.src = 'img/ful_aquarius.png';
        // display date range
        // display description
        // play sound
        break;
      case 'take-care':
            buttons
        // display date range
        // display description
        // play sound
        break;
      case 'stankonia':
            buttons
        // displayObj.src = 'img/ful_aquarius.png';
        // display date range
        // display description
        // play sound
        break;
      case 'swimming':
            buttons
        // displayObj.src = 'img/ful_aquarius.png';
        // display date range
        // display description
        // play sound
        break;
      case 'under-pressure':
            buttons
        // displayObj.src = 'img/ful_aquarius.png';
        // display date range
        // display description
        // play sound
        break;
      case 'monster':
            buttons
        // displayObj.src = 'img/ful_aquarius.png';
        // display date range
        // display description
        // play sound
        break;
      case 'eternal-atake':
            buttons
        // displayObj.src = 'img/ful_aquarius.png';
        // display date range
        // display description
        // play sound
        break;
      case 'tpab':
            buttons
        // displayObj.src = 'img/ful_aquarius.png';
        // display date range
        // display description
        // play sound
        break;
      default:
        // displayObj.src = 'img/ful_blank.png';
    }
  }

// Expand Card
let buttons = document.querySelectorAll('.album'); 
let barrier = document.getElementsByClassName('.barrier')

buttons.forEach(button => {
    button.addEventListener('click', function () {
        this.classList.toggle('no-hover');
        buttons.forEach(div => div.classList.remove('active'));
        this.classList.toggle('active');
    });
});



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

    const userBday = new Date(document.getElementById('bday').value);
    console.log('userBday is: ' + userBday);

    let userMonth = userBday.getUTCMonth();
    userMonth++;
    console.log('userMonth is: ' + userMonth);


    document.forms[0].reset();


    
    let AstroSign = "";

    if ((userMonth == 12 && userBday >= 22) || (userMonth == 1 && userBday <= 19)) {
      AstroSign = "tpab";
    } else if ((userMonth == 11 && userBday >= 22) || (userMonth == 12 && userBday <= 21)) {
      AstroSign = "eternal-atake";
    } else if ((userMonth == 10 && userBday >= 24) || (userMonth == 11 && userBday <= 21)) {
      AstroSign = "monster";
    } else if ((userMonth == 9 && userBday >= 23) || (userMonth == 10 && userBday <= 23)) {
      AstroSign = "under-pressure";
    } else if ((userMonth == 8 && userBday >= 23) || (userMonth == 9 && userBday <= 22)) {
      AstroSign = "swimming";
    } else if ((userMonth == 7 && userBday >= 23) || (userMonth == 8 && userBday <= 22)) {
      AstroSign = "stankonia";
    } else if ((userMonth == 6 && userBday >= 22) || (userMonth == 7 && userBday <= 22)) {
      AstroSign = "take-care";
    } else if ((userMonth == 5 && userBday >= 21) || (userMonth == 6 && userBday <= 21)) {
      AstroSign = "telefone";
    } else if ((userMonth == 4 && userBday >= 20) || (userMonth == 5 && userBday <= 20)) {
      AstroSign = "blueprint";
    } else if ((userMonth == 3 && userBday >= 21) || (userMonth == 4 && userBday <= 19)) {
      AstroSign = "mbdtf";
    } else if ((userMonth == 2 && userBday >= 19) || (userMonth == 3 && userBday <= 20)) {
      AstroSign = "blonde";
    } else if ((userMonth == 1 && userBday >= 20) || (userMonth == 2 && userBday <= 18)) {
      AstroSign = "miseducation";
    }

    console.log('AstroSign is: ' + AstroSign);

    userPicked(AstroSign);
 
};

const $form = document.querySelector('.container-date form');
$form.addEventListener('submit', getInput);


const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("help-btn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 
