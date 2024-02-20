var platform = new H.service.Platform({
    apikey: 'FCPWn_mI6Vm0biC1LaYAsgloxgFlkj7eRKeoat7lmik',
});

// ベクタータイルサービスオブジェクトが日本のデータを提供するコアエンポイントを使用するように設定
var omvService = platform.getOMVService({ path: 'v2/vectortiles/core/mc' });
var baseUrl = 'https://js.api.here.com/v3/3.1/styles/omv/oslo/japan/';

// 日本のデータを表示するためのマップスタイルを設定
var style = new H.map.Style(`${baseUrl}normal.day.yaml`, baseUrl);

// ベースマップ用のプロバイダとレイヤーを設定
var omvProvider = new H.service.omv.Provider(omvService, style);
var omvlayer = new H.map.layer.TileLayer(omvProvider, { max: 22 });

// 地図を表示
async function initializeMap() {
    try {
        // 現在の位置を取得
        const centerCoords = await getGeolocation();

        // マップの初期化
        var map = new H.Map(document.getElementById('mapContainer'), omvlayer, {
            zoom: 15,
            center: centerCoords,
        });

        // マーカーの追加
        var marker = new H.map.Marker(centerCoords);
        map.addObject(marker);

        // 地図の動作機能（パンやズームなど）の追加
        window.addEventListener('resize', () => map.getViewPort().resize());
        var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

        // defaultLayers オブジェクトの初期化
        var defaultLayers = platform.createDefaultLayers();

        // 交通情報レイヤーを地図に追加
        map.addLayer(defaultLayers.vector.traffic.map);
    } catch (error) {
        console.error('Error initializing map:', error);
    }
}

// マップの初期化を呼び出し。初期化しないとgeolocationが機能しない。
initializeMap();

function getGeolocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            position => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                resolve({ lat: latitude, lng: longitude });
            },
            error => {
                reject(error);
            }
        );
    });
}

var tblData = [
  // 一つ目の時刻表
  [
    '# 赤56     (赤羽行き)      ',
    '06: 08 20 32Ｎ 40 48 55',
    '07: 00 06 15 25 33 44Ｎ 56',
    '08: 06 16 27 39 51',
    '09: 04Ｎ 17 28 38 48 58',
    '10: 08 18 28 38 47 58',
    '11: 08 18 28 38 48 58',
    '12: 08 18 28 38 48 58',
    '13: 08 18 28 38 48 58',
    '14: 08 18 28 38Ｎ 48 58',
    '15: 08 18 28 38 48Ｎ 58',
    '16: 08Ｎ 18 28 38 48 58',
    '17: 09 21 34Ｎ 46 58',
    '18: 10 25 45',
    '19: 05 25 45',
    '20: 06 27 57',
    '21: 27',
  ],
  // 二つ目の時刻表
  [
    '# 東練01 (東武練馬行き)',
    '06: 09Ｎ 28Ｎ 43Ｎ 58Ｎ',
    '07: 12Ｎ 25Ｎ 37Ｎ 49Ｎ',
    '08: 00Ｎ 11Ｎ 22Ｎ 33Ｎ 44△ 55△Ｎ',
    '09: 06△Ｎ 17△Ｎ 28△Ｎ 39△Ｎ 50△Ｎ',
    '10: 01△Ｎ 13△Ｎ 25△Ｎ 36△Ｎ 48△Ｎ 59△Ｎ',
    '11: 11△Ｎ 22△Ｎ 34△Ｎ 45△Ｎ 57△Ｎ',
    '12: 08△Ｎ 20△Ｎ 31△Ｎ 43△Ｎ 54△Ｎ',
    '13: 06△Ｎ 17△Ｎ 29△Ｎ 40△Ｎ 52△Ｎ',
    '14: 03△Ｎ 15△Ｎ 26△Ｎ 38△Ｎ 49△Ｎ',
    '15: 01△Ｎ 12△Ｎ 24△Ｎ 36△Ｎ 47△Ｎ 59△Ｎ',
    '16: 10△Ｎ 22△Ｎ 33△Ｎ 45△Ｎ 56△Ｎ',
    '17: 08△Ｎ 19△Ｎ 31△Ｎ 42△Ｎ 54△Ｎ',
    '18: 06△Ｎ 17Ｎ 32Ｎ 47Ｎ',
    '19: 02Ｎ 22Ｎ 42Ｎ',
    '20: 07Ｎ 36Ｎ',
    '21: 05Ｎ 35Ｎ',
  ],
  // 三つ目の時刻表
  [
    '# 増17     (成増行き)      ',
    '06: 52',
    '07: 22 55',
    '08: 27',
    '09: 02 28 48',
    '10: 28',
    '11: 10 38',
    '12: 20 48',
    '13: 30 58',
    '14: 40',
    '15: 22 50',
    '16: 32 57',
    '17: 24 46',
    '18: 05 35',
    '19: 00 29',
  ],
  // 四つ目の時刻表
  [
    '# 高01     (成増行き)      ',
    '06: 05 37Ｎ',
    '07: 08 31 45Ｎ',
    '08: 03Ｎ 18 44 53',
    '09: 15Ｎ 40',
    '10: 00 14 42Ｎ 56',
    '11: 24Ｎ 52Ｎ ',
    '12: 06 34Ｎ',
    '13: 02Ｎ 16 44',
    '14: 12Ｎ 26 54',
    '15: 08Ｎ 36',
    '16: 04 18 45Ｎ ',
    '17: 10Ｎ 35',
    '18: 12 27 45',
    '19: 14Ｎ 52',
    '20: 25 58Ｎ ',
  ],
];

var busTables = [];
var busTables2 = [];
var busTables3 = [];
var busTables4 = [];
var tableNo = 0;

function hms(tim) {
  if (tim == '') return ' ';
  return ('00' + Math.floor(tim / (60 * 60))).slice(-2) + ':' + ('00' + Math.floor((tim % (60 * 60)) / 60)).slice(-2) + ':' + ('00' + (tim % 60)).slice(-2);
};

function hm(tim) {
  if (tim == '') return ' ';
  return ('00' + Math.floor(tim / (60 * 60))).slice(-2) + ':' + ('00' + Math.floor((tim % (60 * 60)) / 60)).slice(-2);
};

function hm2Time(hm) {
  return (Math.floor((hm / 100)) * (60 * 60) + (hm % 100) * 60);
}

function tableSet() {
  for (i = 0; i < tblData.length; i++) {
    var bTable = tblData[i];
    for (j = 0; j < bTable.length; j++) {
      if (bTable[j].charAt(0) == "#") {
        var tbleEl = [bTable[j].substring(2)];
      } else {
        var lineData = bTable[j].split(":");
        var hh = lineData[0];
        if (isFinite(hh)) {
          var minData = lineData[1].split(" ");
          for (k = 0; k < minData.length; k++) {
            var mm = (minData[k]).replace(/\D/g, "");
            var hhmm = hh * 100 + parseInt(mm, 10);
            if (isFinite(hhmm)) {
              tbleEl.push(hhmm);
            }
          }
        }
      }
    }
    busTables.push(tbleEl);
  }
}

function tableSet2() {
  for (i = 1; i < tblData.length; i++) {
    var bTable2 = tblData[i];
    for (j = 0; j < bTable2.length; j++) {
      if (bTable2[j].charAt(0) == "#") {
        var tbleEl = [bTable2[j].substring(2)];
      } else {
        var lineData = bTable2[j].split(":");
        var hh = lineData[0];
        if (isFinite(hh)) {
          var minData = lineData[1].split(" ");
          for (k = 0; k < minData.length; k++) {
            var mm = (minData[k]).replace(/\D/g, "");
            var hhmm = hh * 100 + parseInt(mm, 10);
            if (isFinite(hhmm)) {
              tbleEl.push(hhmm);
            }
          }
        }
      }
    }
    busTables2.push(tbleEl);
  }
}

function tableSet3() {
  for (i = 2; i < tblData.length; i++) {
    var bTable3 = tblData[i];
    for (j = 0; j < bTable3.length; j++) {
      if (bTable3[j].charAt(0) == "#") {
        var tbleEl = [bTable3[j].substring(2)];
      } else {
        var lineData = bTable3[j].split(":");
        var hh = lineData[0];
        if (isFinite(hh)) {
          var minData = lineData[1].split(" ");
          for (k = 0; k < minData.length; k++) {
            var mm = (minData[k]).replace(/\D/g, "");
            var hhmm = hh * 100 + parseInt(mm, 10);
            if (isFinite(hhmm)) {
              tbleEl.push(hhmm);
            }
          }
        }
      }
    }
    busTables3.push(tbleEl);
  }
}

function tableSet4() {
  for (i = 3; i < tblData.length; i++) {
    var bTable4 = tblData[i];
    for (j = 0; j < bTable4.length; j++) {
      if (bTable4[j].charAt(0) == "#") {
        var tbleEl = [bTable4[j].substring(2)];
      } else {
        var lineData = bTable4[j].split(":");
        var hh = lineData[0];
        if (isFinite(hh)) {
          var minData = lineData[1].split(" ");
          for (k = 0; k < minData.length; k++) {
            var mm = (minData[k]).replace(/\D/g, "");
            var hhmm = hh * 100 + parseInt(mm, 10);
            if (isFinite(hhmm)) {
              tbleEl.push(hhmm);
            }
          }
        }
      }
    }
    busTables4.push(tbleEl);
  }
}


function clock() {
  var now = new Date();
  var nowTime = (now.getHours() * 60 * 60) + (now.getMinutes() * 60) + now.getSeconds();
  // 今後実装予定 リミット
  // var fnowTime = (now.getHours() * 60 * 60) + (now.getMinutes() * 60) + now.getSeconds();
  var bTime, nbTime, nnbTime;
  bTime = nbTime = nnbTime = '';
  for (var i = 1; i < busTables[tableNo].length; i++) {
    var bt = busTables[tableNo][i];
    if (bt > (now.getHours() * 100 + now.getMinutes())) {
      bTime = hm2Time(bt);
      if ((i + 1) < busTables[tableNo].length) {
        nbTime = hm2Time(busTables[tableNo][i + 1]);
        if ((i + 2) < busTables[tableNo].length) {
          nnbTime = hm2Time(busTables[tableNo][i + 2]);
        };
      };
      break;
    }
  };
  document.getElementById("clock_time").innerHTML = hms(nowTime);
  document.getElementById("bus").innerHTML = hm(bTime);
  document.getElementById("timeLeft").innerHTML = hms(bTime - nowTime);
  document.getElementById("nbus").innerHTML = hm(nbTime);
  document.getElementById("ntimeLeft").innerHTML = hms(nbTime - nowTime);
  document.getElementById("nnbus").innerHTML = hm(nnbTime);
  document.getElementById("nntimeLeft").innerHTML = hms(nnbTime - nowTime);
  document.getElementById("timeLeft").innerHTML = hms(bTime - nowTime);

  // 今後実装予定 リミット
  // document.getElementById("timeLeftHouse").innerHTML = hms(bTime - fnowTime);
  // document.getElementById("ntimeLeftHouse").innerHTML = hms(nbTime - nowTime);
  // document.getElementById("nntimeLeftHouse").innerHTML = hms(nnbTime - nowTime);
};

function clock2() {
  var now = new Date();
  var nowTime = (now.getHours() * 60 * 60) + (now.getMinutes() * 60) + now.getSeconds();
  var bTime, nbTime, nnbTime;
  bTime = nbTime = nnbTime = '';
  for (var i = 1; i < busTables2[tableNo].length; i++) {
    var bt = busTables2[tableNo][i];
    if (bt > (now.getHours() * 100 + now.getMinutes())) {
      bTime = hm2Time(bt);
      if ((i + 1) < busTables2[tableNo].length) {
        nbTime = hm2Time(busTables2[tableNo][i + 1]);
        if ((i + 2) < busTables2[tableNo].length) {
          nnbTime = hm2Time(busTables2[tableNo][i + 2]);
        };
      };
      break;
    }
  };
  document.getElementById("bus2").innerHTML = hm(bTime);
  document.getElementById("timeLeft2").innerHTML = hms(bTime - nowTime);
  document.getElementById("nbus2").innerHTML = hm(nbTime);
  document.getElementById("ntimeLeft2").innerHTML = hms(nbTime - nowTime);
  document.getElementById("nnbus2").innerHTML = hm(nnbTime);
  document.getElementById("nntimeLeft2").innerHTML = hms(nnbTime - nowTime);};

function clock3() {
  var now = new Date();
  var nowTime = (now.getHours() * 60 * 60) + (now.getMinutes() * 60) + now.getSeconds();
  var bTime, nbTime, nnbTime;
  bTime = nbTime = nnbTime = '';
  for (var i = 1; i < busTables3[tableNo].length; i++) {
    var bt = busTables3[tableNo][i];
    if (bt > (now.getHours() * 100 + now.getMinutes())) {
      bTime = hm2Time(bt);
      if ((i + 1) < busTables3[tableNo].length) {
        nbTime = hm2Time(busTables3[tableNo][i + 1]);
        if ((i + 2) < busTables3[tableNo].length) {
          nnbTime = hm2Time(busTables3[tableNo][i + 2]);
        };
      };
      break;
    }
  };
  document.getElementById("bus3").innerHTML = hm(bTime);
  document.getElementById("timeLeft3").innerHTML = hms(bTime - nowTime);
  document.getElementById("nbus3").innerHTML = hm(nbTime);
  document.getElementById("ntimeLeft3").innerHTML = hms(nbTime - nowTime);
  document.getElementById("nnbus3").innerHTML = hm(nnbTime);
  document.getElementById("nntimeLeft3").innerHTML = hms(nnbTime - nowTime);};

function clock4() {
  var now = new Date();
  var nowTime = (now.getHours() * 60 * 60) + (now.getMinutes() * 60) + now.getSeconds();
  var bTime, nbTime, nnbTime;
  bTime = nbTime = nnbTime = '';
  for (var i = 1; i < busTables4[tableNo].length; i++) {
    var bt = busTables4[tableNo][i];
    if (bt > (now.getHours() * 100 + now.getMinutes())) {
      bTime = hm2Time(bt);
      if ((i + 1) < busTables4[tableNo].length) {
        nbTime = hm2Time(busTables4[tableNo][i + 1]);
        if ((i + 2) < busTables4[tableNo].length) {
          nnbTime = hm2Time(busTables4[tableNo][i + 2]);
        };
      };
      break;
    }
  };
  document.getElementById("bus4").innerHTML = hm(bTime);
  document.getElementById("timeLeft4").innerHTML = hms(bTime - nowTime);
  document.getElementById("nbus4").innerHTML = hm(nbTime);
  document.getElementById("ntimeLeft4").innerHTML = hms(nbTime - nowTime);
  document.getElementById("nnbus4").innerHTML = hm(nnbTime);
  document.getElementById("nntimeLeft4").innerHTML = hms(nnbTime - nowTime);};

function startClock() {
  tableSet();
  tableSet2();
  tableSet3();
  tableSet4();
  setInterval(clock, 1000);
  setInterval(clock2, 1000);
  setInterval(clock3, 1000);
  setInterval(clock4, 1000);
}

function openAka56Link() {
  var Aka56Link = "https://transfer.navitime.biz/5931bus/pc/diagram/BusDiagram?orvCode=00020280&course=0001001141&stopNo=1";
  window.open(Aka56Link, "_blank");
}

function openMasu17Link() {
  var Masu17Link = "https://transfer.navitime.biz/5931bus/pc/diagram/BusDiagram?orvCode=00020280&course=0001000706&stopNo=1";
  window.open(Masu17Link, "_blank");
}

function openTaka01Link() {
  var Taka01Link = "https://transfer.navitime.biz/5931bus/pc/diagram/BusDiagram?orvCode=00020280&course=0001000291&stopNo=1";
  window.open(Taka01Link, "_blank");
}

function openTouneri01Link() {
  var Touneri01 = "https://transfer.navitime.biz/5931bus/pc/diagram/BusDiagram?orvCode=00020278&course=0001000509&stopNo=10";
  window.open(Touneri01, "_blank");
}

onclick="officialLink()"

function officialLink() {
  var Official = "https://5931bus.com/";
  window.open(Official, "_blank");
}

function startClock() {
  tableSet();
  tableSet2();
  tableSet3();
  tableSet4();

  // 一度だけclock関数を呼び出す
  clock();
  clock2();
  clock3();
  clock4();

  // 1秒ごとにクロック関数を呼び出す
  setInterval(clock, 1000);
  setInterval(clock2, 1000);
  setInterval(clock3, 1000);
  setInterval(clock4, 1000);
}

// 上記の変更に対して、Swiperの初期化を行う前にstartClock()を呼び出す
document.addEventListener('DOMContentLoaded', function() {
  startClock();

  const swiper = new Swiper('.sample-slider', {
    loop: true,
    loopAdditionalSlides: 0,
    slidesPerView: 3,
    centeredSlides: true,
    effect: "coverflow",
    coverflowEffect: {
        rotate: 0,
        depth: 300,
        stretch: 30,
        modifier: 1,
        scale: 0.95,
        slideShadows: false,
    },
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
  });

  swiper.on('loopFix', function () {
    swiper.init(); // 初期化の再実行
  });
});