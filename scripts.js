//''Check out trees'' script
function navigateToTreesPage() {
    window.location.href = 'trees.html';
}

//''Tools used''script
function navigateToToolsPage() {
  window.location.href = 'tools.html';
}


//''Home button''script
document.addEventListener('DOMContentLoaded', function() {
  const spanElement = document.getElementById('home-link');
  spanElement.addEventListener('click', function() {
      window.location.href = 'index.html';
  });
});
