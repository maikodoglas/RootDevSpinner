$(function () {
    $leftWheel = $(".slot-wheel-left");
	preloadSongs();
    buildSlotWheels($leftWheel);
});

const title = "🎉🎊 PIÃO DO ROOTDEV 🎊🎉";
const participants = [
    "Alex",
    "André",
    "Bruno",
	"Cristian",
    "Fabrício",
    "Gabriel",
    "Lucas",
    "Luis",
    "Maickel",
    "Marcos"
];

var songPiao = new Audio();
var songPiaoRemix = new Audio();
var songPiaoExtended = new Audio();
var songPiaoDenovo = new Audio();
var songPiaoStrikesBack = new Audio();
var songPiaoGalvao = new Audio();
var songPiaoUltimo = new Audio();
var songPiaoHero = new Audio();
var songSilvioTriggered = new Audio();
var songPiaoStorm = new Audio();

var spinParametersList = [
    [43000, "easeInOutQuart", 12000, songPiao],
    [42000, "easeOutQuad", 0, songPiaoRemix],
    [153000, "easeOutBack", 0, songPiaoExtended],
    [42000, "easeInOutQuart", 0, songPiaoDenovo],
    [49000, "easeInOutQuart", 0, songPiaoStrikesBack],
    [36800, "easeInBounce", 0, songPiaoGalvao],
    [38700, "easeOutBack", 0, songPiaoUltimo],
    [48000, "easeInOutQuart", 0, songPiaoHero],
    [11000, "easeInOutQuart", 8000, songSilvioTriggered],
    [10000, "easeOutQuad", 0, songPiaoStorm]
]

let itemsListCount = 0;
let lastSpinNumber = 0;
let lastColor = '#FEFFBF';
let itemsArray = [];

function preloadSongs(){
    songPiao.src = "piao.mp3";
    songPiao.preload = "auto";
    songPiao.load();
	
	songPiaoRemix.src = "piao.remix.mp3";
    songPiaoRemix.preload = "auto";
    songPiaoRemix.load();
	
	songPiaoExtended.src = "piao-extended.mp3";
    songPiaoExtended.preload = "auto";
    songPiaoExtended.load();
	
	songPiaoDenovo.src = "piao-denovo.mp3";
    songPiaoDenovo.preload = "auto";
    songPiaoDenovo.load();
	
	songPiaoStrikesBack.src = "piao-strikes-back.mp3";
    songPiaoStrikesBack.preload = "auto";
    songPiaoStrikesBack.load();
	
	songPiaoGalvao.src = "piao-galvao.mp3";
    songPiaoGalvao.preload = "auto";
    songPiaoGalvao.load();
	
	songPiaoUltimo.src = "piao-ultimo.mp3";
    songPiaoUltimo.preload = "auto";
    songPiaoUltimo.load();
	
	songPiaoHero.src = "piao-hero.mp3";
    songPiaoHero.preload = "auto";
    songPiaoHero.load();
	
	songSilvioTriggered.src = "silvio-triggered.mp3";
    songSilvioTriggered.preload = "auto";
    songSilvioTriggered.load();
	
	songPiaoStorm.src = "piao-storm.mp3";
    songPiaoStorm.preload = "auto";
    songPiaoStorm.load();
}

function buildSlotWheels($container) {

    itemsArray.push(title);
    const amount = 2800;

    for (let i = 0; i < amount; i++) {
        for (let participant of participants) {
            itemsArray.push(participant);
        }
    }

    itemsListCount = itemsArray.length;
    $items = itemsArray.map(buildSlotItem);
    $container.append($items);
}

function buildSlotItem(imgURL) {
    return $(
        '<li class="item" style="background-color: ' +
        randomColor() +
        '"><div style="padding-top: 245px; font-size: 100px">' +
        imgURL +
        "</div></li>"
    );
}

function randomColor(){
	return "hsl(" + 360 * Math.random() + ',' +
             (25 + 70 * Math.random()) + '%,' + 
             (45 + 60 * Math.random()) + '%)'
}

function rodaRoda() {
    spinStart();

    var randomSpinNumber = randomItemIndex(spinParametersList.length);

    while (lastSpinNumber === randomSpinNumber)
        randomSpinNumber = randomItemIndex(spinParametersList.length);

    var spinParameters = spinParametersList[randomSpinNumber];

    spin(spinParameters[0], spinParameters[1], spinParameters[2], spinParameters[3]);

    lastSpinNumber = randomSpinNumber;
}

function spinStart() {
    togglePride();
    document.getElementById("btnRodaRoda").innerText = "Rodando, rodando...";
}

function spin(spinDuration, easing, cooldown, song) {
	song.play();
	
	leftWheelIndex = randomItemIndex(itemsListCount);
	var sortedPlayer = itemsArray[leftWheelIndex];

    console.log(sortedPlayer, leftWheelIndex);

    $leftWheel.animate(
        {
            top: -leftWheelIndex * 600,
        },
        spinDuration,
        easing,
        () => spinEnd(cooldown)
    );
	
	if (randomItemIndex(4) == 3){
		console.log('easter egg madness');
		var waitTime = Math.floor(spinDuration * 70 / 100);
		
		setTimeout(function () {
			document.getElementById("imgRootDev").style.display = "block";
		}, waitTime);
		setTimeout(function () {
			document.getElementById("imgRootDev").style.display = "none";
		}, waitTime + 300);
	}
}

function spinEnd(cooldownTime = 0) {
    party.screen();
    togglePride();
    setTimeout(() => {
        document.getElementById("btnRodaRoda").innerText = "Sortear";
    }, cooldownTime);
}

function togglePride() {
    document.getElementById('pride').classList.toggle("pride");
    document.getElementById('btnRodaRoda').classList.toggle("pride");
}

function randomItemIndex(max) {
    if (window.crypto && window.crypto.getRandomValues) {
        var randomBuffer = new Uint32Array(1);
        window.crypto.getRandomValues(randomBuffer);
        let num = randomBuffer[0] % max;
		return num;
    } else {
        alert('navegador not compatible');
		return 0;
    }
}