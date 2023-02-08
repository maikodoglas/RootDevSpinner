$(function () {
  $leftWheel = $(".slot-wheel-left");
  buildSlotWheels($leftWheel);
});

var listaCores = [
  "#FEFFBF",
  "#D1FFBA",
  "#B8CBFF",
  "#FFBDEB",
  "#FFC08B",
  "#FFFBA2",
  "#D2FFBC",
  "#C2F1FF",
  "#DF8B76",
  "#DDA576",
  "#D496FF",
  "#DFC575",
  "#DFDA75",
  "#CEDF74",
  "#9CC2CB",
  "#1ABB9C",
  "#3498DB",
  "#F7996E",
  "#AE9CD6",
  "#FFAEAE",
  "#8BB9D4",
  "#A6CFA1",
  "#DAD6A1",
  "#E1B298",
  "#E59CA0",
  "#D3FFCE",
  "#7FFFD4",
  "#F08080",
  "#FFF68F",
  "#66CDAA",
  "#BADA55",
  "#C0D6E4",
];

const title = "🎉🎊 PIÃO DO ROOTDEV 🎊🎉";
const participants = [
  "Alex Dalzoto",
  "André Júnior",
  "Bruno Molardi",
  "Fabrício Sonego",
  "Gustavo Sachet",
  "Gabriel Marcon",
  "Lucas Rech",
  "Luis Silva",
  "Maickel Douglas",
  "Marcos Garbin",
  "Ricardo Guimarães",
];
let itemsListCount = 0;

function buildSlotItem(imgURL) {
  return $(
    '<li class="item" style="background-color: ' +
      listaCores[randomItemIndex(listaCores.length - 1)] +
      '"><div style="padding-top: 245px; font-size: 100px">' +
      imgURL +
      "</div></li>"
  );
}

function buildSlotWheels($container) {
  let itemsArray = [];
  itemsArray.push(title);
  const amount = 666;
  for (let i = 0; i < amount; i++) {
    for (let participant of participants) {
      itemsArray.push(participant);
    }
  }
  itemsListCount = itemsArray.length;
  $items = itemsArray.map(buildSlotItem);
  $container.append($items);
}

function randomItemIndex(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var contador = 0;

function rodaRoda() {
  spinStart();
  if (contador == 0) {
    contador = 1;
    spin();
  } else if (contador == 1) {
    contador = 2;
    spin2();
  } else if (contador == 2) {
    contador = 3;
    spin3();
  } else if (contador == 3) {
    contador = 4;
    spin4();
  } else if (contador == 4) {
    contador = 5;
    spin5();
  } else if (contador == 5) {
    contador = 6;
    spin6();
  } else if (contador == 6) {
    contador = 7;
    spin7();
  } else if (contador == 7) {
    contador = 8;
    spin8();
  } else if (contador == 8) {
    contador = 9;
    spin9();
  } else if (contador == 9) {
    contador = 0;
    spin10();
  }
}

function spinStart() {
  document.getElementById("btnRodaRoda").innerText = "Rodando, rodando...";
  //document.getElementById("btnRodaRoda").classList.add("rainbow");
  //document.getElementById("btnRodaRoda").classList.add("rainbow-bg");
}

function spinEnd(cooldownTime = 0) {
  party.screen();
  setTimeout(() => {
    document.getElementById("btnRodaRoda").innerText = "Sortear";
  }, cooldownTime);
  // document.getElementById("btnRodaRoda").classList.remove("rainbow");
  // document.getElementById("btnRodaRoda").classList.remove("rainbow-bg");
}

function spin() {
  var leftWheelIndex = randomItemIndex(itemsListCount - 1);
  var snd = new Audio("piao.mp3");
  snd.play();
  $leftWheel.animate(
    {
      top: -leftWheelIndex * 600,
    },
    43000,
    "easeInOutQuart",
    () => spinEnd(12000)
  );
}

function spin2() {
  var leftWheelIndex = randomItemIndex(itemsListCount - 1);
  console.log(leftWheelIndex);
  var snd = new Audio("piao.remix.mp3");
  snd.play();
  $leftWheel.animate(
    {
      top: -leftWheelIndex * 600,
    },
    42000,
    "easeOutQuad",
    () => spinEnd()
  );
}

function spin3() {
  var leftWheelIndex = randomItemIndex(itemsListCount - 1);
  console.log(leftWheelIndex);
  var snd = new Audio("piao-extended.mp3");
  snd.play();
  $leftWheel.animate(
    {
      top: -leftWheelIndex * 600,
    },
    153000,
    "easeOutBack",
    () => spinEnd()
  );

  setTimeout(function () {
    document.getElementById("imgRootDev").style.display = "block";
  }, 108700);
  setTimeout(function () {
    document.getElementById("imgRootDev").style.display = "none";
  }, 109000);
}

function spin4() {
  var leftWheelIndex = randomItemIndex(itemsListCount - 1);
  console.log(leftWheelIndex);
  var snd = new Audio("piao-denovo.mp3");
  snd.play();
  $leftWheel.animate(
    {
      top: -leftWheelIndex * 600,
    },
    42000,
    "easeInOutQuart",
    () => spinEnd()
  );
}

function spin5() {
  var leftWheelIndex = randomItemIndex(itemsListCount - 1);
  console.log(leftWheelIndex);
  var snd = new Audio("piao-strikes-back.mp3");
  snd.play();
  $leftWheel.animate(
    {
      top: -leftWheelIndex * 600,
    },
    49000,
    "easeInOutQuart",
    () => spinEnd()
  );
}

function spin6() {
  var leftWheelIndex = randomItemIndex(itemsListCount - 1);
  console.log(leftWheelIndex);
  var snd = new Audio("piao-galvao.mp3");
  snd.play();
  $leftWheel.animate(
    {
      top: -leftWheelIndex * 600,
    },
    36800,
    "easeInBounce",
    () => spinEnd()
  );
}

function spin7() {
  var leftWheelIndex = randomItemIndex(itemsListCount - 1);
  console.log(leftWheelIndex);
  var snd = new Audio("piao-ultimo.mp3");
  snd.play();
  $leftWheel.animate(
    {
      top: -leftWheelIndex * 600,
    },
    38700,
    "easeOutBack",
    () => spinEnd()
  );
}

function spin8() {
  var leftWheelIndex = randomItemIndex(itemsListCount - 1);
  console.log(leftWheelIndex);
  var snd = new Audio("piao-hero.mp3");
  snd.play();
  $leftWheel.animate(
    {
      top: -leftWheelIndex * 600,
    },
    48000,
    "easeInOutQuart",
    () => spinEnd()
  );
}

function spin9() {
  var leftWheelIndex = randomItemIndex(itemsListCount - 1);
  console.log(leftWheelIndex);
  var snd = new Audio("silvio-triggered.mp3");
  snd.play();
  $leftWheel.animate(
    {
      top: -leftWheelIndex * 600,
    },
    11000,
    "easeInOutQuart",
    () => spinEnd(8000)
  );
}

function spin10() {
  var leftWheelIndex = randomItemIndex(itemsListCount - 1);
  console.log(leftWheelIndex);
  var snd = new Audio("piao-storm.mp3");
  snd.play();
  $leftWheel.animate(
    {
      top: -leftWheelIndex * 600,
    },
    10000,
    "easeOutQuad",
    () => spinEnd()
  );
}
