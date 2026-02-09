$(document).ready(function () {

  // NO button runs away
  $('#noBtn').on('mouseenter', function () {
    let container = $('#page1 .card');
    let maxX = container.width() - $(this).outerWidth();
    let maxY = container.height() - $(this).outerHeight();

    $(this).css({
      left: Math.random() * maxX + 'px',
      top: Math.random() * maxY + 'px'
    });
  });

  // Page 1 → Page 2
  $('#yesBtn').on('click', function () {
    $('#page1').removeClass('active');
    $('#page2').addClass('active');
  });

  // ✅ Page 2 → Page 3 (FIXED WITH EVENT DELEGATION)
  $(document).on('click', '#finalBtn', function () {
    $('#page2').removeClass('active');
    $('#page3').addClass('active');
  });

  // Countdown (Manila Time)
  function updateCountdown() {
    const target = new Date('2026-02-14T18:00:00+08:00').getTime();
    const now = new Date().getTime();
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
