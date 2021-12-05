
const cardarray=[
    {
        Image:"images/one.jpg",
        name:"one"
    },
    {
        Image:"images/two.jpg",
        name:"two"
    },
    {
        Image:"images/three.jpg",
        name:"three"
    },
    {
        Image:"images/four.jpg",
        name:"four"
    },
    {
        Image:"images/five.jpg",
        name:"five"
    },
    {
        Image:"images/six.jpg",
        name:"six"
    },
    {
        Image:"images/one.jpg",
        name:"one"
    },
    {
        Image:"images/two.jpg",
        name:"two"
    },
    {
        Image:"images/three.jpg",
        name:"three"
    },
    {
        Image:"images/four.jpg",
        name:"four"
    },
    {
        Image:"images/five.jpg",
        name:"five"
    },
    {
        Image:"images/six.jpg",
        name:"six"
    },
];

cardarray.sort(()=>0.5-Math.random())


let grid=document.querySelector('.grid');
let resultDisplay=document.querySelector('#result');
let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];

//insert into the grid box
function createBoard(){
cardarray.forEach((value,index)=>{
const card=document.createElement('img');
card.setAttribute('src','images/blank.jpg');
card.setAttribute('id',index);
card.addEventListener('click',flipCard);
grid.appendChild(card);
})}

//checkfor match 
function checkformatch(){
    const cards = document.querySelectorAll('img');
    let optiononeid=cardsChosenId[0];
    let optiontwoid=cardsChosenId[1];

   if(optiononeid==optiontwoid){
       cards[optiononeid].setAttribute('src','images/blank.jpg');
       cards[optiontwoid].setAttribute('src','images/blank.jpg')
   alert('you have choosed same image');
  }  
  else if(cardsChosen[0] === cardsChosen[1]){
alert('you found the match');
cards[optiononeid].setAttribute('src', 'images/white.jpg');
cards[optiontwoid].setAttribute('src', 'images/white.jpg');
cards[optiononeid].removeEventListener('click', flipCard);
cards[optiontwoid].removeEventListener('click', flipCard);
cardsWon.push(cardsChosen);
console.log(cardsWon);
  }
else {
    cards[optiononeid].setAttribute('src', 'images/blank.jpg')
    cards[optiontwoid].setAttribute('src', 'images/blank.jpg')
    alert('Sorry, try again')
  }
  cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardarray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }
}

//on card flip
function flipCard(){
    let cardId= this.getAttribute('id');
    cardsChosen.push(cardarray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src',cardarray[cardId].Image)
    if(cardsChosen.length==2){
        setTimeout(checkformatch,400);
    }
   
}
createBoard(); 
