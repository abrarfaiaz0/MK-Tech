const pop = document.getElementById("pop");
const banner = document.getElementById("banner");
const native = document.getElementById("native");
const skim = document.getElementById("skim");

pop.onclick = function(){goPop();}
banner.onclick = function(){goBanner();}
native.onclick = function(){goNative();}
skim.onclick = function(){goSkim();}


function goPop(){
    clearOther();
    let button = document.getElementById("pop");
   let title = document.getElementById("ad-title");
   let text = document.getElementById("ad-text");
   button.style.color = "white";
   button.style.backgroundColor = "#FF6F00";
   title.innerHTML = "POP-UNDER";
   text.innerHTML = "This is one of the most popular ads. After user’s click, this ad opens landing page in behind. So, the user experience is not hampered much.";
}
function goNative(){
    clearOther();
    let button = document.getElementById("native");
   let title = document.getElementById("ad-title");
   let text = document.getElementById("ad-text");
   button.style.color = "white";
   button.style.backgroundColor = "#FF6F00";
   title.innerHTML = "NATIVE";
   text.innerHTML = "Ad format with the image and the title, that perfectly fits into the content of the site. Native ads are placed in the most visible areas of the page and, thus, this format shows good results and the level of interaction.";
}
function goSkim(){
    clearOther();
    let button = document.getElementById("skim");
   let title = document.getElementById("ad-title");
   let text = document.getElementById("ad-text");
   button.style.color = "white";
   button.style.backgroundColor = "#FF6F00";
   title.innerHTML = "SKIM";
   text.innerHTML = "'SKIM' is a link that a publisher inserts on a specific site element, and after clicking on it, an advertisement appears to the user. SKIM gives 100% control of your sold traffic amount, higher CR to advertisers and CPM rates to publishers.";
}
function goBanner(){
    clearOther();
    let button = document.getElementById("banner");
   let title = document.getElementById("ad-title");
   let text = document.getElementById("ad-text");
   button.style.color = "white";
   button.style.backgroundColor = "#FF6F00";
   title.innerHTML = "BANNER AD";
   text.innerHTML = "Choose between the available banner formats. Highly effective ad for visibility.                                                                                               ";
}

function clearOther(){
    pop.style.color = "black";
    banner.style.color = "black";
    native.style.color = "black";
    skim.style.color = "black";
    pop.style.backgroundColor = "#F2F2F2";
    banner.style.backgroundColor = "#F2F2F2";
    native.style.backgroundColor = "#F2F2F2";
    skim.style.backgroundColor = "#F2F2F2";
}
