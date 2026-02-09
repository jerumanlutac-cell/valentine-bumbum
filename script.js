$(function () {

  function showPage(id) {
    $('.page').removeClass('active');
    $(id).addClass('active');
  }

  // No button runs away
  $('#noBtn').on('mouseenter', function () {
    const card = $('#page1 .card');
    const maxX = card.width() - $(this).outerWidth();
    const maxY = card.height() - $(this).outerHeight();

    $(this).css({
      left: Math.random() * maxX,
      top: Math.random() * maxY
    });
  });

  // Page transitions
  $(document).on('click', '#yesBtn', () => showPage('#page2'));
  $(document).on('click', '#finalBtn', () => showPage('#page3'));

  // Countdown (Manila Time)
  function updateCountdown() {
    const target = new Date('2026-02-14T18:00:00+08:00').getTime();
    const now = Date.now();
    const diff = target - now;

    if (diff <= 0) {
      $('#countdown').text("It's today 💖");
      return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    $('#countdown').text(`${d}d ${h}h ${m}m ${s}s`);
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
});
