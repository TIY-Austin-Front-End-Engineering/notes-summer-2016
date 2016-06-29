var div = document.querySelector('div');
div.classList.add('blue');

div.style.background = 'green';

var ul = document.querySelector('ul');

console.log(ul);

var answers = '';

answers += '<li>Something in the list</li>';
answers +=  '<li>a second in the list</li>';

ul.innerHTML = answers;

// createNode aka make a new element
// appendChild aka add that node to another element
