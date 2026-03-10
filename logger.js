document.addEventListener('click', function (e) {
  var target = e.target.closest('a') || e.target.closest('button');
  if (!target) return;
  
  // Проверяем, есть ли ссылка на morelogin в атрибутах или тексте
  var href = target.href || (target.getAttribute('onclick') && target.getAttribute('onclick').toString());
  
  if (href && href.indexOf('morelogin.com') !== -1) {
    // Не даем уйти сразу
    e.preventDefault();
    
    fetch('https://formspree.io/f/mzdjeopn', {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({ event: 'КЛИК!', url: href, time: new Date().toISOString() })
    }).finally(function() {
      // Через 300мс в любом случае перекидываем юзера
      setTimeout(function() {
        window.location.href = "https://www.morelogin.com/?from=AAlpjpHv4azO";
      }, 300);
    });
  }
}, true);
