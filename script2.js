
let feedGridElement = document.getElementById('feed');

let jsonDatabase= [
{
  "profilePic": "https://miro.medium.com/max/512/1*7tlP1ph61ompULJdycVJlQ.png",
  "name": "Sarah",
  "feedImg1": "https://bestprohealth.com/pure-and-natural-weight-loss/img/sarah-ig-header.png",
  "feedImg2": "https://bestprohealth.com/pure-and-natural-weight-loss/img/sarah-ig-header.png",
  "nameID":"Sarah",
  "caption":"lol I hate this",
  "commentbutton": "Comment",
},

{
  "profilePic": "https://miro.medium.com/max/512/1*7tlP1ph61ompULJdycVJlQ.png",
  "name": "Sarah",
  "feedImg1": "https://bestprohealth.com/pure-and-natural-weight-loss/img/sarah-ig-header.png",
  "feedImg2": "https://bestprohealth.com/pure-and-natural-weight-loss/img/sarah-ig-header.png",
  "nameID":"Sarah",
  "caption":"lol I hate this",
  "commentbutton": "Comment",

}
]

window.addEventListener('DOMContentLoaded', (event) => {
  for (var i=0; i < jsonDatabase.length; i++) {
    populateFeed(jsonDatabase[i]);
  }
  new Glide('.glide').mount();
});


function populateFeed(incomingJSON) {

  let newContentElement = document.createElement("DIV");
  newContentElement.classList.add('feedbox');

  let a = document.createElement("DIV");
  a.classList.add('profile');
  newContentElement.appendChild(a);

  let a1 = document.createElement("IMG");
  a1.classList.add('profilePic');
  a1.src = incomingJSON['profilePic'];
  a.appendChild(a1);

  let a2 = document.createElement("H1");
  a2.classList.add('name');
  a2.innerText = incomingJSON['name'];
  a.appendChild(a2);

  let b= document.createElement("DIV");
  b.classList.add('glide');
  newContentElement.appendChild(b);

  let b1= document.createElement("DIV");
  b1.classList.add('glide__track');
  b1.setAttribute("data-glide-el", "track");
  b.appendChild(b1);

  let b1_1 = document.createElement("UL");
  b1_1.classList.add('glide__slides');
  b1.appendChild(b1_1);


//////
  let b1_2 = document.createElement("LI");
  b1_2.classList.add('glide__slide');
  b1_1.appendChild(b1_2);

  let b1_2_1 = document.createElement("IMG");
  b1_2_1.classList.add('feedImg');
  b1_2_1.src= incomingJSON['feedImg1'];
  b1_2.appendChild(b1_2_1);
  ////////

  let b1_3 = document.createElement("LI");
  b1_3.classList.add('glide__slide');
  b1_1.appendChild(b1_3);

  let b1_3_1 = document.createElement("IMG");
  b1_3_1.classList.add('feedImg');
  b1_3_1.src= incomingJSON['feedImg2'];
  b1_3.appendChild(b1_3_1);

  let likeButtonContainer = document.createElement("DIV");
  likeButtonContainer.classList.add('likeButtonContainer');
  newContentElement.appendChild(likeButtonContainer);

  let likeButton = document.createElement("BUTTON");
  likeButton.setAttribute("id", "likeButton");
  likeButton.setAttribute("onclick", "check()");
  likeButtonContainer.appendChild(likeButton);

  let icon= document.createElement("I");
  icon.classList.add("fas", "fa-heart", "fa-2x");
  likeButton.appendChild(icon);

  let c = document.createElement("DIV");
  c.classList.add('captionContainer');
  newContentElement.appendChild(c);

  let c1 = document.createElement("H5");
  c1.classList.add('nameID');
  c1.innerText = incomingJSON['nameID'];
  c.appendChild(c1);

  let c2 = document.createElement("P");
  c2.classList.add('caption');
  c2.innerText = incomingJSON['caption'];
  c.appendChild(c2);

  let commentsOutput = document.createElement("DIV");
  commentsOutput.setAttribute("id", "commentsOutput");
  newContentElement.appendChild(commentsOutput);

  let d= document.createElement("DIV");
  d.classList.add('comments');
  newContentElement.appendChild(d);

  let e = document.createElement("INPUT");
  e.setAttribute("type", "text");
  e.setAttribute("id", "name");
  d.appendChild(e);

  let f = document.createElement("BUTTON");
  f.setAttribute("id", "commentButton");
  f.setAttribute("onclick", "hi()");
  f.innerText = incomingJSON['commentbutton'];
  d.appendChild(f);


  feedGridElement.appendChild(newContentElement);
}



// var buttonElement = document.getElementById("button4");
//
//
//   var buttonElement = document.getElementById("button4");
//
//   buttonElement.addEventListener("click", inputProfile);
//
//
//
//
// function inputProfile () {
//   var nameElement= document.getElementById("name").value;
//   var instructionProfile = document.getElementById("instructionProfile");
//
//
//   instructionProfile.innerText = ("nameElement");
//
//
//   console.log(nameElement)
//
// };



var commentsOutput = document.getElementById("commentsOutput");
var e = document.getElementById("name");
var f = document.getElementById("commentButton");

f.addEventListener("click", hi);

let commentsArray= [];

commentsOutput.appendChild(commentsArray[0]);

function hi() {

  var e = document.getElementById("name");


    let newParagraph = document.createElement("P");
    newParagraph.classList.add("newParagraph");
    newParagraph.innerHTML = e.value + "<br>";
    commentsOutput.appendChild(newParagraph);

commentsArray.push(newParagraph);


}

var likeButton = document.getElementById("likeButton");

likeButton.addEventListener("click", check);

function check() {

  alert ("hihihi");
  console.log("working");
}
