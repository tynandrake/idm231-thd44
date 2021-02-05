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

// Expand Card
let buttons = document.querySelectorAll('.album'); 

buttons.forEach(button => {
    button.addEventListener('click', function () {
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
let date = [];

function getInput(evt) {
    evt.preventDefault();
    const $userInput = document.getElementById('userInput');
    const userInput = $userInput.value;
    const $userMonth = document.getElementById('month');
    const userMonth = $userMonth.value;  

    date.push(userMonth , userInput);
    document.forms[0].reset();

    console.log({date});
};  

const $form = document.querySelector('.input-group.mb-3 form');
$form.addEventListener('submit', getInput);

//Display Album
// create function
// if ((date[0] == 'january' && date[1]>=20) || (date[0] == 'february' && date[1]<=18)) {
//     document.getElementById('miseducation').innerHTML = ;
// } else if ((date[0] == 'february' && date[1]>=19) || (date[0] == 'march' && date[1]<=20)) {
//     pisces.;
// } else if ((date[0] == 'march' && date[1]>=21) || (date[0] == 'april' && date[1]<=19)) {
//     aries;
// } else if ((date[0] == 'april' && date[1]>=20) || (date[0] == 'may' && date[1]<=20)) {
//     taurus;
// } else if ((date[0] == 'may' && date[1]>=21) || (date[0] == 'june' && date[1]<=20)) {
//     gemini;
// } else if ((date[0] == 'june' && date[1]>=21) || (date[0] == 'july' && date[1]<=22)) {
//     cancer;
// } else if ((date[0] == 'july' && date[1]>=23) || (date[0] == 'august' && date[1]<=22)) {
//     leo;
// } else if ((date[0] == 'august' && date[1]>=23) || (date[0] == 'september' && date[1]<=22)) {
//     virgo;
// } else if ((date[0] == 'september' && date[1]>=23) || (date[0] == 'october' && date[1]<=22)) {
//     libra;
// } else if ((date[0] == 'october' && date[1]>=23) || (date[0] == 'november' && date[1]<=21)) {
//     scorpio;
// } else if ((date[0] == 'november' && date[1]>=22) || (date[0] == 'december' && date[1]<=21)) {
//     sagittarius;
// } else if ((date[0] == 'december' && date[1]>=22) || (date[0] == 'january' && date[1]<=19)) {
//     capricorn;
// };
// animate all divs, activate active 
