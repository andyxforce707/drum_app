$(document).ready(function () {
  var crash = $('#crash');
  var floortom = $('#floortom');
  var hihat = $('#hihat');
  var kick = $('#kick');
  var snare = $('#snare');
  var tom = $('#tom');

  var auCrash = new Audio('audio/crash.mp3');
  var auFloortom = new Audio('audio/floortom.mp3');
  var auHihat = new Audio('audio/hihat.mp3');
  var auKick = new Audio('audio/kick.mp3');
  var auSnare = new Audio('audio/snare.mp3');
  var auTom = new Audio('audio/tom.mp3');

  crash.click(function () {
    auCrash.play();
    let r = Math.round(Math.random() * 255 + 1);
    let g = Math.round(Math.random() * 255 + 1);
    let b = Math.round(Math.random() * 255 + 1);
    $(this).css('boxShadow', '0 0 20px rgba(' + r + ',' + g + ',' + b + ',1)');
    setTimeout(() => {
      $(this).css('boxShadow', `0 0 20px rgba(0,0,0,0.15)`);
    }, 200);
    console.log(`${r} ${g} ${b}`);
  });

  floortom.click(function () {
    auFloortom.play();
    let r = Math.round(Math.random() * 255 + 1);
    let g = Math.round(Math.random() * 255 + 1);
    let b = Math.round(Math.random() * 255 + 1);
    $(this).css('boxShadow', '0 0 20px rgba(' + r + ',' + g + ',' + b + ',1)');
    setTimeout(() => {
      $(this).css('boxShadow', `0 0 20px rgba(0,0,0,0.15)`);
    }, 200);
    console.log(`${r} ${g} ${b}`);
  });

  hihat.click(function () {
    auHihat.play();
    let r = Math.round(Math.random() * 255 + 1);
    let g = Math.round(Math.random() * 255 + 1);
    let b = Math.round(Math.random() * 255 + 1);
    $(this).css('boxShadow', '0 0 20px rgba(' + r + ',' + g + ',' + b + ',1)');
    setTimeout(() => {
      $(this).css('boxShadow', `0 0 20px rgba(0,0,0,0.15)`);
    }, 200);
    console.log(`${r} ${g} ${b}`);
  });

  kick.click(function () {
    auKick.play();
    let r = Math.round(Math.random() * 255 + 1);
    let g = Math.round(Math.random() * 255 + 1);
    let b = Math.round(Math.random() * 255 + 1);
    $(this).css('boxShadow', '0 0 20px rgba(' + r + ',' + g + ',' + b + ',1)');
    setTimeout(() => {
      $(this).css('boxShadow', `0 0 20px rgba(0,0,0,0.15)`);
    }, 200);
    console.log(`${r} ${g} ${b}`);
  });

  snare.click(function () {
    auSnare.play();
    let r = Math.round(Math.random() * 255 + 1);
    let g = Math.round(Math.random() * 255 + 1);
    let b = Math.round(Math.random() * 255 + 1);
    $(this).css('boxShadow', '0 0 20px rgba(' + r + ',' + g + ',' + b + ',1)');
    setTimeout(() => {
      $(this).css('boxShadow', `0 0 20px rgba(0,0,0,0.15)`);
    }, 200);
    console.log(`${r} ${g} ${b}`);
  });

  tom.click(function () {
    auTom.play();
    let r = Math.round(Math.random() * 255 + 1);
    let g = Math.round(Math.random() * 255 + 1);
    let b = Math.round(Math.random() * 255 + 1);
    $(this).css('boxShadow', '0 0 20px rgba(' + r + ',' + g + ',' + b + ',1)');
    setTimeout(() => {
      $(this).css('boxShadow', `0 0 20px rgba(0,0,0,0.15)`);
    }, 200);
  });

  $(document).on('keydown', function (e) {
    let r = Math.round(Math.random() * 255 + 1);
    let g = Math.round(Math.random() * 255 + 1);
    let b = Math.round(Math.random() * 255 + 1);

    if (e.key == 'a') {
      auCrash.play();

      crash.css('transform', 'scale(1.05)');
      setTimeout(() => {
        crash.css('transform', 'scale(1)');
      }, 100);

      crash.css('boxShadow', '0 0 20px rgba(' + r + ',' + g + ',' + b + ',1)');
      setTimeout(() => {
        crash.css('boxShadow', `0 0 20px rgba(0,0,0,0.15)`);
      }, 200);
    } else if (e.key == 's') {
      auFloortom.play();
      floortom.css('transform', 'scale(1.05)');
      setTimeout(() => {
        floortom.css('transform', 'scale(1)');
      }, 100);

      floortom.css('boxShadow', '0 0 20px rgba(' + r + ',' + g + ',' + b + ',1)');
      setTimeout(() => {
        floortom.css('boxShadow', `0 0 20px rgba(0,0,0,0.15)`);
      }, 200);
    } else if (e.key == 'd') {
      auHihat.play();
      hihat.css('transform', 'scale(1.05)');
      setTimeout(() => {
        hihat.css('transform', 'scale(1)');
      }, 100);
      hihat.css('boxShadow', '0 0 20px rgba(' + r + ',' + g + ',' + b + ',1)');
      setTimeout(() => {
        hihat.css('boxShadow', `0 0 20px rgba(0,0,0,0.15)`);
      }, 200);
    } else if (e.key == 'j') {
      auKick.play();
      kick.css('transform', 'scale(1.05)');
      setTimeout(() => {
        kick.css('transform', 'scale(1)');
      }, 100);
      kick.css('boxShadow', '0 0 20px rgba(' + r + ',' + g + ',' + b + ',1)');
      setTimeout(() => {
        kick.css('boxShadow', `0 0 20px rgba(0,0,0,0.15)`);
      }, 200);
    } else if (e.key == 'k') {
      auSnare.play();
      snare.css('transform', 'scale(1.05)');
      setTimeout(() => {
        snare.css('transform', 'scale(1)');
      }, 100);
      snare.css('boxShadow', '0 0 20px rgba(' + r + ',' + g + ',' + b + ',1)');
      setTimeout(() => {
        snare.css('boxShadow', `0 0 20px rgba(0,0,0,0.15)`);
      }, 200);
    } else if (e.key == 'l') {
      auTom.play();
      tom.css('transform', 'scale(1.05)');
      setTimeout(() => {
        tom.css('transform', 'scale(1)');
      }, 100);
      tom.css('boxShadow', '0 0 20px rgba(' + r + ',' + g + ',' + b + ',1)');
      setTimeout(() => {
        tom.css('boxShadow', `0 0 20px rgba(0,0,0,0.15)`);
      }, 200);
    }
  });

  $('.hamburger').click(function () {
    $('.topbar').slideToggle(500);
    $('.blur').fadeToggle(400);
    $(this).toggleClass('active');
  });
});
