function removeArticle(){
  var article = document.getElementById('article');
  article.remove();
};

var selectElement = document.getElementById('songs');
var box = document.getElementById('selectSong');
var submitted = false;
const music = document.getElementById('youtubeMusic');

selectElement.addEventListener("change", function() {
  var other = document.getElementById("other");
  var selectedValue = selectElement.value;
  switch (selectedValue) {
    case '100%ちゅ~学生 / 七森中☆ごらく部':
      music.setAttribute('src', 'https://www.youtube.com/embed/xEbGlwAfrH0?si=tIuWJDsxhEUhzn7N');
      break;
    case 'Hands (feat. AO、Rapbito) / 魂音泉':
      music.setAttribute('src', 'https://www.youtube.com/embed/bdzstYL4tnQ?si=D5FP6uhHr7LxwxCT');
      break;
    case 'Help me, ERINNNNNN!! / COOL&CREATE':
      music.setAttribute('src', 'https://www.youtube.com/embed/egqLZ3tv8Fk?si=eYfzLYhq1IEhyATT');
      break;
    case 'INTERNET YAMERO / NEEDY GIRL':
      music.setAttribute('src', 'https://www.youtube.com/embed/hv9Sk4ZeSAM?si=FZ_a8g2H1qfTpoze');
      break;
    case 'Replay / LONGMAN':
      music.setAttribute('src', 'https://www.youtube.com/embed/CZyrcHoiJAY?si=ZLdOi8vBbsawz-mt');
      break;
    case 'SEE YOU AGAIN! / IOSYS':
      music.setAttribute('src', 'https://www.youtube.com/embed/97jp4kWCUiM?si=xpiAdQvqisY6k9k_');
      break;
    case 'The Sunshower / 亜咲花':
      music.setAttribute('src', 'https://www.youtube.com/embed/7a03ysUTXXg?si=ibK9E4qzP1hILc4u');
      break;
    case '공격전이다 / 조선민주주의인민공화국':
      music.setAttribute('src', 'https://www.youtube.com/embed/z1a-eaL1fHE?si=FRJad1J2Sc1A5cAu');
      break;
    case 'アスノヨゾラ哨戒班 / ゆある':
      music.setAttribute('src', 'https://www.youtube.com/embed/d5UvZI8iSlU?si=n3Qdwt7Cw1fGOmVz');
      break;
    case 'あなたがいる / Wacci':
      music.setAttribute('src', 'https://www.youtube.com/embed/zZyxBa_QDqQ?si=wpUNxzcOZs3ABnmk');
      break;
    case 'かけがえのない詩 / mihimaru GT':
      music.setAttribute('src', 'https://www.youtube.com/embed/xeIj1cLY7u0?si=3wAcXQY8gKI6hOxF');
      break;
    case '君と世界の終わりに / 森羅万象':
      music.setAttribute('src', 'https://www.youtube.com/embed/s7MiAAkwtuQ?si=PGi-UCNHXvgi5xEd');
      break;
    case '紅に染まる恋の花(with Marcia) / 幽閉サテライト':
      music.setAttribute('src', 'https://www.youtube.com/embed/PWacpxkQQJg?si=c_hz3KOupBCfUYyv');
      break;
    case '転がる岩、君に朝が降る / 結束バンド':
      music.setAttribute('src', 'https://www.youtube.com/embed/S8yEAQOaqfk?si=XwO7GGuV0kkge6K8');
      break;
    case '残響は鳴りやまず / 幽閉サテライト':
      music.setAttribute('src', 'https://www.youtube.com/embed/-nfY_bw2XSo?si=r-pgFlYbUNRDeOi2');
      break;
    case '全力少年 / スキマスイッチ':
      music.setAttribute('src', 'https://www.youtube.com/embed/NiwkUVkXIlU?si=63WoPEFSdrg8hart');
      break;
    case '魂の部屋 / 佐々木恵梨':
      music.setAttribute('src', 'https://www.youtube.com/embed/TR_aUVLtLQg?si=ZH6DrEFBBch9x8Uk');
      break;
    case '小さな海 / 結束バンド':
      music.setAttribute('src', 'https://www.youtube.com/embed/j818IwWiz0g?si=fXasH3OdLniurPXe');
      break;
    case 'チェリー / スピッツ':
      music.setAttribute('src', 'https://www.youtube.com/embed/Eze6-eHmtJg?si=FzlL4OS77zwCKMJR');
      break;
    case '天使にふれたよ! / 放課後ティータイム':
      music.setAttribute('src', 'https://www.youtube.com/embed/ba0juE9ROCg?si=8BGm_YsxzQY_JnNw');
      break;
      case '花の塔 / さユり':
        music.setAttribute('src', 'https://www.youtube.com/embed/2KOZ8lYon54?si=KuVoOdDLbryEzy7_');
        break;
      case 'バラライカ / 月島きらり':
        music.setAttribute('src', 'https://www.youtube.com/embed/SYLWe09cOjc?si=vjqgiGcK0x--Bvkr');
        break;
      case 'ミモザ / 佐々木恵梨':
        music.setAttribute('src', 'https://www.youtube.com/embed/mpzh5CBlmBI?si=_Y-56PBZBX5bOi5e');
        break;
      case 'メフィスト / 女王蜂':
        music.setAttribute('src', 'https://www.youtube.com/embed/Yo83M-KOc7k?si=UB9Zpp8eXfJwJVcZ');
        break;
      case 'レッツゴー！陰陽師 / 坊主ダンサーズと琴姫と矢部野彦麿':
        music.setAttribute('src', 'https://www.youtube.com/embed/PumFnlu9EIY?si=8Z-cRuOLfZFMCz5j');
        break;
    case 'その他':
      var otherInput = document.createElement('input');
      otherInput.setAttribute('class', 'input is-primary mt-4');
      otherInput.setAttribute('id', 'other');
      otherInput.setAttribute('placeholder', '楽曲名 / アーティスト名');
      otherInput.setAttribute('name', 'entry.1353190390');
      box.appendChild(otherInput);
      break;
  }

  
  if (other){
    other.remove();
  };
});

