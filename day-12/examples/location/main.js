var data = {
  ponies: {
    title: 'I love ponies',
    body: 'Ponies are absolutely the best! I cannot believe how cool they are! Doesn\'t everyone love ponies?'
  },
  unicorns: {
    title: 'Unicorns for life',
    body: 'If unicorns aren\'t real, I will be so sad. But what\'s cool is that, no one ever can prove that they aren\'t real, so I basically can just be happy to  think about them forever'
  },
  pegasi: {
    title: 'Pegasus for life',
    body: 'If unicorns aren\'t real, I will be so sad. But what\'s cool is that, no one ever can prove that they aren\'t real, so I basically can just be happy to  think about them forever'
  }
};

window.addEventListener('hashchange', function() {
  var dataToRender = location.hash.slice(1);
  renderContent(dataToRender);
  // if (location.hash === "#unicorns") {
  //   renderContent('unicorns');
  // } else {
  //   renderContent('ponies');
  // }
});

function renderContent(whatContent) {
  document.querySelector('#content h1').textContent = data[whatContent].title;
  document.querySelector('#content main').textContent = data[whatContent].body;
}

// make sure to render content to the page when the page first loads, before a "hashchange" event has occured
renderContent('ponies');
