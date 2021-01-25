let buttons = document.querySelectorAll('button .box'); 

buttons.forEach(button => {
    button.addEventListener('click', function () {
        buttons.forEach(div => div.classList.remove('active'));
        this.classList.toggle('active');
    });
});

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