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
  other.style.visibility = 'hidden'
  switch (selectedValue) {
    case 'Im a mess /MY FIRST STORY':
      music.setAttribute('src', 'https://www.youtube.com/embed/ma4lm5eAdvg?si=-jAWTV9nOIob45Fd');
      break;
    case 'Magic / Mrs. GREEN APPLE':
      music.setAttribute('src', 'https://www.youtube.com/embed/CN-Ja6jCweA?si=P2sczt7vdo_1oNNu');
      break;
    case 'Replay / LONGMAN':
      music.setAttribute('src', 'https://www.youtube.com/embed/CZyrcHoiJAY?si=5dhuLGCDKClI7tnH');
      break;
    case '青のすみか / キタニタツヤ':
      music.setAttribute('src', 'https://www.youtube.com/embed/zuoVd2QNxJo?si=l4ON5wg53Z_lvjAE');
      break;
    case '澄 / 崎山蒼志':
      music.setAttribute('src', 'https://www.youtube.com/embed/4jWzGkRsHw8?si=NvtgyIcNVyO3POpO');
      break;
    case 'ケセラセラ / Mrs. GREEN APPLE':
      music.setAttribute('src', 'https://www.youtube.com/embed/Jy-QS27q7lA?si=vcCfT5yYb5dg8XaL');
      break;
    case 'シュガーソングとビターステップ / UNISON SQUARE GARDEN':
      music.setAttribute('src', 'https://www.youtube.com/embed/ERLEeGVWYxg?si=R2pOK5vNY4RGGKrr');
      break;
    case '祝福 / YOASOBI':
      music.setAttribute('src', 'https://www.youtube.com/embed/3eytpBOkOFA?si=BeKW7iSJkBw2Wn2n');
      break;
    case '向日葵 / Ado':
      music.setAttribute('src', 'https://www.youtube.com/embed/aOKa-5AHCtU?si=7PqdXb9jq4dzHEQF');
      break;
    case '勿忘草 / GReeeeN':
      music.setAttribute('src', 'https://www.youtube.com/embed/cXXKl0wGQr4?si=CQWL9ZFbHOLJbx7X');
      break;
    case '℃ / ラックライフ':
      music.setAttribute('src', 'https://www.youtube.com/embed/GPmGoyiQ1JA?si=ksW2KgDSQNq8GgYp');
      break;
    case 'その他':
      other.style.visibility = 'visible'
      break;
  }
});

