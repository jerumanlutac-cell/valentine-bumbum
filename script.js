$(document).ready(function () {

  // NO button runs away
  $('#noBtn').on('mouseenter', function () {
    let container = $('.container');

    let maxX = container.width() - $(this).outerWidth();
    let maxY = container.height() - $(this).outerHeight();

    let randomX = Math.random() * maxX;
    let randomY = Math.random() * maxY;

    $(this).css({
      left: randomX + 'px',
      top: randomY + 'px'
    });
  });

  // YES button action (PLAY SOUND FIRST)
  $('#yesBtn').click(function () {
    const purr = document.getElementById('purrSound');

    // restart and play sound
    purr.pause();
    purr.currentTime = 0;
    purr.play();

    // THEN change the content
    $('.container').html(`
      <img src="cat.png" class="cat">
      <h1>YAYYYY BUMBUM 💖🐱</h1>
      <p>I knew you’d say yes 🥰</p>
      <p>Happy Valentine’s Day 💐</p>
    `);
  });

});
