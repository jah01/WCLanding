//js file for !!!test/index.html
//created on January 19, 2020 by Joseph Hilber
//the first of many


//PUT THIS BACK IN AFTER TESTING------------- IT IS NEEDED
//document.body.style.overflowY = "hidden";
//setInterval(function() {document.body.style.overflowY = "visible"}, 8000);

var arrow = document.getElementById("arrow");
//arrow.style.opacity = 0;
arrow.style.pointerEvents = "none";
arrow.style.cursor= "default";

//gsap.to(arrow, {delay: 5, duration: .8, ease: "power4.out", y: 0});
//setInterval(function() {arrow.style.opacity = "1"}, 8000);
setInterval(function() {arrow.style.pointerEvents = "auto"}, 7000);
setInterval(function() {arrow.style.cursor = "pointer"}, 7000);

var link1 = document.getElementById("link1");
function scrollDown() {
    window.scrollTo(0, 750);
}


//initial
arrow.style.marginTop = parseInt(window.innerHeight - 160, 10) + "px";
//arrow.style.marginLeft = parseInt((window.innerWidth - 136) / 2.0, 10) + "px";
//arrow.style.marginTop = parseInt(document.getElementById("part3").getBoundingClientRect().top + 100, 10) + "px";
arrow.style.marginLeft = parseInt((window.innerWidth - 136) / 2.0, 10) + "px";

//if window size changes
window.onresize = function(event) {
    if (window.innerHeight > 600) {
//        arrow.style.marginTop = parseInt(document.getElementById("part3").getBoundingClientRect().top + 100, 10) + "px";
        arrow.style.marginTop = parseInt(window.innerHeight - 160, 10) + "px";
        arrow.style.marginLeft = parseInt((window.innerWidth - 136) / 2.0, 10) + "px";
    }
};


//https://stackoverflow.com/questions/3664381/force-page-scroll-position-to-top-at-page-refresh-in-html
//special thanks to ProfNandaa
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

var element = document.getElementById("phone");

var gTest = element.getElementById("Group_9");
var lilNotif = element.getElementById("lowerNotifBadge");


TweenMax.to(lilNotif, {delay: 5.2, opacity:0});
TweenLite.to(gTest, 0, { x: 0, y: 100 });
gsap.to(gTest, {delay: 5, duration: .8, ease: "power4.out", y: 0}); //delay  this later
TweenMax.from(gTest, {delay: 5, opacity:0});


//USING LINE 140 FOR THE SQUIGGLES
document.getElementById("firstSquiggle").style.marginTop = "-314px";
document.getElementById("secondSquiggle").style.marginTop = "-400px";

document.getElementById("toughSquiggle").style.marginTop = "-140px"; //used if this was on the bottom -7em I think

//document.getElementById("picturePhone").style.marginTop = "-800px";
//maybe later



//-121px for Firefox


//document.getElementById("lowerGray").style.marginTop = "-118px";


if( navigator.userAgent.indexOf("Chrome") != -1 ) {
    document.getElementById("lowerGray").style.marginTop = "-5.9em"; //-118px; //-5.9em is best for now
} else if( navigator.userAgent.indexOf("Firefox") != -1 ) {
    document.getElementById("lowerGray").style.marginTop = "-121px";
}




//USING LINE 149 FOR THE SQUIGGLES
//document.getElementById("firstSquiggle").style.marginTop = "-100em";
//document.getElementById("secondSquiggle").style.marginTop = "-20em";
//
//document.getElementById("toughSquiggle").style.marginTop = "0em";










//var toughSquigglePath = element.getElementById("toughSquigglePath");
//
//function firstFunction(el, opac) {
//    el.style.opacity = opac;
//
//}
//
//var counter = 0;
//while (counter < 1) {
//    
//    setTimeout(firstFunction(toughSquigglePath), 1000);
//    counter += .1;
//}



//document.getElementById("toughSquigglePath").style.opacity = "0.5";



//huge thanks to https://jakearchibald.com/2013/animated-line-drawing-svg/
var squi = document.querySelector("#squi");

var length = squi.getTotalLength();
// Clear any previous transition
squi.style.transition = squi.style.WebkitTransition =
  'none';
// Set up the starting positions
squi.style.strokeDasharray = length + ' ' + length;
squi.style.strokeDashoffset = length;
// Trigger a layout so styles are calculated & the browser
// picks up the starting position before animating
squi.getBoundingClientRect();
// Define our transition
squi.style.transition = squi.style.WebkitTransition =
  'stroke-dashoffset 3s 2s ease-in-out';
// Go!
squi.style.strokeDashoffset = '0';


var squi2 = document.querySelector("#squi2");

var length2 = squi2.getTotalLength();
// Clear any previous transition
squi2.style.transition = squi2.style.WebkitTransition =
  'none';
// Set up the starting positions
squi2.style.strokeDasharray = length2 + ' ' + length2;
squi2.style.strokeDashoffset = length2;
// Trigger a layout so styles are calculated & the browser
// picks up the starting position before animating
squi2.getBoundingClientRect();
// Define our transition
squi2.style.transition = squi2.style.WebkitTransition =
  'stroke-dashoffset 3s 2s ease-in-out';
// Go!
squi2.style.strokeDashoffset = '0';

//var squi3 = document.querySelector("#toughSquigglePath");
//
//var length3 = squi3.getTotalLength();
//// Clear any previous transition
//squi3.style.transition = squi3.style.WebkitTransition =
//  'none';
//// Set up the starting positions
//squi3.style.strokeDasharray = length3 + ' ' + length3;
//squi3.style.strokeDashoffset = length3;
//// Trigger a layout so styles are calculated & the browser
//// picks up the starting position before animating
//squi3.getBoundingClientRect();
//// Define our transition
//squi3.style.transition = squi3.style.WebkitTransition =
//  'stroke-dashoffset 3s 2s ease-in-out';
//// Go!
//squi3.style.strokeDashoffset = '0';



//TweenLite.fromTo(gTest, 4, {autoAlpha:0}, {autoAlpha:1});


//var element = document.querySelector("#phone");
//var phone =  element.querySelector("#Group_10");
//g10 = phone.querySelector("Group_10");

//gsap.to(phone, {duration: 2, x: 300});

//var test = Snap("#phone");
//var test2 = test.select("#upperNotif");
//test2.attr({fill: "#fa0"});






//change the colors of the gray areas with javascript backgrounds
