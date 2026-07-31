/* INTRO MESSAGE */

const introMessage = `

Hey Nashiha,

Before you continue...

slow down for a moment.

Take a breath.

Stay here with me.

Because this isn't just another website.

Its a gift from a trying boyfriend to his angel like girlfriend.
I'am sorry I couldnt get you anything for today I hope you feel just
even a little bit happy seeing this.

❤️

`;

let introIndex = 0;

function typeIntro(){

if(introIndex < introMessage.length){

document
.getElementById("introText")
.innerHTML += introMessage.charAt(introIndex);

introIndex++;

setTimeout(typeIntro,40);

}else{

document
.getElementById("continueBtn")
.style.display="inline-block";

}

}

typeIntro();

/* MUSIC + CONTINUE */

document
.getElementById("continueBtn")
.onclick = ()=>{

const music =
document.getElementById("music");

music.play();

document
.getElementById("exitBtn")
.style.display="none";

document
.getElementById("intro")
.classList.remove("active");

document
.getElementById("mainPage")
.classList.add("active");

};

/* EXIT BUTTON */

const exitBtn =
document.getElementById("exitBtn");

const leaveModal =
document.getElementById("leaveModal");

const yesBtn =
document.getElementById("yesBtn");

const noBtn =
document.getElementById("noBtn");

const leaveText =
document.getElementById("leaveText");

exitBtn.onclick = ()=>{

leaveModal.style.display="flex";

};

noBtn.onclick = ()=>{

leaveModal.style.display="none";

leaveText.innerHTML="";

};

yesBtn.onclick = ()=>{

leaveText.innerHTML=

`

<br>

<h3>

sike you cant leave me muhehehe ❤️

</h3>

`;

};

/* FLOATING HEARTS + PETALS */

setInterval(()=>{

const item =
document.createElement("div");

item.className="fall";

item.innerHTML =

Math.random() > 0.5

?

"❤️"

:

"🌹";

item.style.left =

Math.random()*100 + "%";

item.style.fontSize =

(15 + Math.random()*20)

+

"px";

item.style.animationDuration =

(8 + Math.random()*8)

+

"s";

document
.getElementById("floatingContainer")
.appendChild(item);

setTimeout(()=>{

item.remove();

},16000);

},300);

/* LETTER */

const letter = `

My love, I honestly don't think there are enough words in any language to explain how much you mean to me. Every time I try to put my feelings into words, it feels impossible because what I feel for you is so much bigger than anything I could ever write or say. Before you came into my life, I never realized how much one person could change someone's entire world, but somehow you did exactly that. You brought a light into my life that I didn't even know I was missing, and ever since then, everything has felt brighter, happier, and more meaningful. You have become such a huge part of my life that I can't imagine my days without thinking about you, wondering how you're doing, or smiling because of something that reminded me of you. The truth is that you have become my comfort, my happiness, and one of the most beautiful parts of my life. No matter how bad my day is, somehow the thought of you makes things feel a little easier. No matter how stressed, tired, or frustrated I am, your presence has a way of calming me down and reminding me that there are still beautiful things in this world.

I love the way you make me feel understood without having to explain everything. I love the way your smile can completely change my mood. I love the way you laugh, the way you talk, the little things you probably don't even notice about yourself but that I find myself appreciating every single day. Sometimes I catch myself thinking about how lucky I am to have you, and it genuinely amazes me. Out of all the people in this world, somehow I got the chance to know you, care about you, and love you. That thought alone is enough to make me grateful. You have given me so many memories, so many smiles, and so many moments that I will carry with me forever. Even the simplest conversations with you mean more to me than you probably realize because every moment spent with you feels special in its own way.

There are times when I wish you could see yourself through my eyes, just so you could understand how incredible you truly are. I wish you could see how much happiness you bring into my life without even trying. I wish you could see how much I care about you and how deeply you are loved. Because the truth is that you are far more important to me than I could ever properly explain. You have become someone whose happiness matters to me, whose dreams I want to see come true, whose struggles I want to help carry, and whose victories I want to celebrate. When something good happens to you, I find myself happy too. When you're upset, I wish I could do anything to make things better. That's how much you mean to me.

If I spent every day for the rest of my life trying to explain how much I love you, I still don't think it would be enough. My love for you isn't something that can fit into a text message, a paragraph, or even a thousand pages. It's in the way I think about you when you're not around. It's in the way I remember the little details about you. It's in the way I care about your feelings, your happiness, and your future. It's in every smile you've given me, every memory we've made together, and every moment that has made me fall for you even more. You have lit up my world in ways I never thought possible, and I genuinely believe my life is better because you're in it.

No matter how many times I tell you that I love you, it will never feel like enough because those three words could never fully capture everything that is in my heart. You mean more to me than words can express, more than any paragraph can describe, and more than I could ever put into writing. All I know is that loving you has been one of the most beautiful things that has ever happened to me, and if there is one thing I will never stop being grateful for, it is you. Thank you for being you, for bringing so much happiness into my life, and for making my world brighter simply by being a part of it. I love you more than I could ever explain, and I think a part of me always will.
Your loving bf? Anan
❤️

`;

document
.getElementById("letterGift")
.onclick = ()=>{

document
.getElementById("letterModal")
.style.display="flex";

document
.getElementById("letterText")
.innerHTML="";

let i=0;

const typing =
setInterval(()=>{

if(i < letter.length){

document
.getElementById("letterText")
.innerHTML +=

letter.charAt(i);

i++;

}else{

clearInterval(typing);

}

},20);

};

document
.querySelector(".closeBtn")
.onclick = ()=>{

document
.getElementById("letterModal")
.style.display="none";

};

/* GALLERY */

document
.getElementById("galleryGift")
.onclick = ()=>{

document
.getElementById("galleryModal")
.style.display="flex";

};

document
.querySelector(".closeGallery")
.onclick = ()=>{

document
.getElementById("galleryModal")
.style.display="none";

};

/* HEART GAME */

const compliments = [

"Your smile is beautiful ❤️",

"You're genuinely special ❤️",

"You make ordinary days better ❤️",

"You're unforgettable ❤️",

"You deserve happiness ❤️",

"You have the prettiest energy ❤️",

"I love talking to you ❤️",

"You make life brighter ❤️",

"You're amazing ❤️",

"You deserve the world ❤️"

];

document
.getElementById("gameGift")
.onclick = ()=>{

document
.getElementById("gameModal")
.style.display="flex";

startGame();

};

document
.querySelector(".closeGame")
.onclick = ()=>{

document
.getElementById("gameModal")
.style.display="none";

};

function startGame(){

const area =

document.getElementById("gameArea");

area.innerHTML="";

for(let i=0;i<15;i++){

const heart =

document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left =

Math.random()*90 + "%";

heart.style.top =

Math.random()*90 + "%";

heart.onclick = ()=>{

document
.getElementById("compliment")
.innerText =

compliments[
Math.floor(
Math.random()*compliments.length
)
];

heart.remove();

if(

document.querySelectorAll(".heart")
.length === 0

){

document
.getElementById("rewardModal")
.style.display="flex";

}

};

area.appendChild(heart);

}

}

/* REWARD IMAGE */

document
.querySelector(".closeReward")
.onclick = ()=>{

document
.getElementById("rewardModal")
.style.display="none";

};

/* CLOSE MODAL WHEN CLICKING OUTSIDE */

window.onclick = (e)=>{

if(e.target === letterModal){

letterModal.style.display="none";

}

if(e.target === galleryModal){

galleryModal.style.display="none";

}

if(e.target === gameModal){

gameModal.style.display="none";

}

if(e.target === rewardModal){

rewardModal.style.display="none";

}

if(e.target === leaveModal){

leaveModal.style.display="none";

}

};