/*var el = document.getElementById('exampleContainer');
var child = document.createElement('p');
el.appendChild(child);
child.innerHTML = 'Nev paragraph';
console.log(el);*/

var parent = document.getElementById('exampleContainer');
parent.classList.add('row');
for (var i = 0; i < 9; i++) {
    var child = document.createElement('div');
    child.classList.add('col-xs-12');
    child.classList.add('col-sm-4');

    var image = document.createElement('img');
    image.setAttribute('src', 'https://picsum.photos/290/290/?2');
    image.src = 'https://picsum.photos/290/290/?2';
    image.style.width = '100%';


    child.innerHTML = `Nev div ${i}`;
    parent.appendChild(child);
}

i = 0;
while (i < 3) {
    i++;
    console.log(i);
}

i = 1;
do {
  i++;
  console.console.log(i);
}  while (i < 3) ;

i = '1';
if (i == 1) {
  console.log('i is equal to one');
  else if (i > 8) {
    console.log('i more then eight');
    else {
      console.log('fabvsdfbve');
    }

  }

}
$(“.navbar a”).click(function(){
$(“body,html”).animate({
scrollTop:$(“#” + $(this).data(‘value’)).offset().top
},1000)
})
