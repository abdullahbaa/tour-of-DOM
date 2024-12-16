// console.log('append js')

// Where to add
const placesList= document.getElementById('places-list');
// What to be added
const li =document.createElement('li');
li.innerText = 'pahartoli bon';
// li.innerText = 'pahartoli Jhau-bon';

// add the child
placesList.appendChild(li);



// section add
// Where to add
const mainContainer = document.getElementById('main-container');
// What to be added
const section =document.createElement('section');
const h1 =document.createElement('h1');
h1.innerText= 'My Food List';
section.appendChild(h1);

const ul =document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Biriyani';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'Salad';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Borhani';
ul.appendChild(li3);

section.appendChild(ul);

mainContainer.appendChild(section);



// Set Html Directly
const sectionDress = document.createElement('section');
sectionDress.innerHTML= `
<h1>My Dress Section </h1>
<ul>
    <li> T-Shirt</li>
    <li> Sendo Ganji</li>
    <li> Lungi</li>
</ul>
`
mainContainer.appendChild(sectionDress);

