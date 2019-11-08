
  let divs = document.querySelectorAll('.div');
  let art = document.querySelectorAll('.art');

  function hideAll() {
    divs.forEach(function(el) {
      el.style.display = 'none';
    });
  }

  hideAll();

  art.forEach(function(el) {
    el.onclick = (e) => {
      hideAll();

      switch (e.target.getAttribute('id')) {
        case 'boys-art':
          document.querySelector('#boys-audio')
          	.style.display = 'block';
          break;
        case 'good-as-hell-art':
          document.querySelector('#good-as-hell-audio')
          	.style.display = 'block';
          break;
        case 'juice-art':
          document.querySelector('#juice-audio')
          .style.display = 'block';
          break;
        case 'truth-hurts-art':
          document.querySelector('#truth-hurts-audio')
          .style.display = 'block';
          break;
      }

      let players = document.querySelectorAll('audio');
    players.forEach(function(el) {
            el.pause();
            el.currentTime = 0;
        });

    }

  });
