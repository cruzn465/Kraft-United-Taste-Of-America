//IIFE TO EXTRACT DIMENSION DATA
var dimensions = (function(){
        var str = document.querySelectorAll("[name='ad.size']")[0].getAttributeNode("content").value;
        var widthMatch = /width\=(\d+)/.exec(str);
        var heightMatch = /height\=(\d+)/.exec(str);
        return {
            width: parseInt(widthMatch[1]),
            height: parseInt(heightMatch[1])
        }
})();

var tl;
var stopWatch;

//INITIALIZE
function init(){

    // Helper function for FOUC
    let domReady = (cb) => {
        document.readyState === 'interactive' || document.readyState === 'complete'
        ? cb()
        : document.addEventListener('DOMContentLoaded', cb);
    };
    
    domReady(() => {
        // Display body when DOM is loaded
        document.body.style.visibility = 'visible';
    });

    IDsToVars();

    container.style.width = dimensions.width + 'px';
    container.style.height = dimensions.height + 'px';
    
    //set timeline
    tl = new TimelineLite();

    addListeners();
    
    animate();
}

function addListeners(){
    //replay functionality
    /*
    replay_button.addEventListener('mouseover',function(){
        TweenLite.fromTo(replay_button, .5, {rotation:'-360'}, {overwrite:false, rotation:'0'});
    })
    replay_button.addEventListener('click',function(){
            tl.restart();
    })
    */

    // container hover event listener
    // container.addEventListener('mouseenter', function() {
    //     cta_over_2x.style.opacity = '1';
    // });
    // container.addEventListener('mouseleave', function() {
    //     cta_over_2x.style.opacity = '0';
    // });
}

//ANIMATE
function animate(){
    stopWatch=new Date().getTime(); 

    const f1_copy = [f1c1_2x,f1c2_2x,f1c3_2x,f1c4_2x]
    const ef_copy = [ef_copy1_2x,ef_copy2_2x,ef_copy3_2x,ef_copy4_2x]


    //timeline animation here
    //set timeline
    tl
    // F1
    .from(f1c0_2x,1,{})
    // .to(f1c0_2x,0.5,{x:0,y:0,scale:1,ease:Power2.easeOut},"f2-entrance")
    .fromTo(f1c0_2x, 0.5,{scale:1.25,y:15}, {scale:1,y:0,ease:Power2.easeOut})


    .to(woodBg_2x,0.6,{y:78,scale:1,ease:Power2.easeOut},"f2-entrance")

    // F2: FADE OUT F1 FULL AND FADE IN F1 LINES
    .to(f1c0_2x,0.00001,{opacity:0},"f2-entrance+=.4")
    .from(f1_copy,0.00001,{opacity:0},"f2-entrance+=.4")
    // BGS ENTER
    .from(blueBg_2x,0.5,{y:dimensions.height,ease:Power2.easeOut},"f2-entrance")
    .from(redbg1,0.4,{x:-dimensions.width,ease:Power2.easeOut},"f2-entrance+=.1")
    
    // HOTDOG AND BURGER ENTER
    .from(hotdog_2x,.7,{x:-dimensions.width,ease:Power2.easeOut},"hd")
    .from(burger_2x,.7,{y:dimensions.height,ease:Power2.easeOut},"hd")

    // F3: BURGER EXITS, CONDIMENTS, CTA, LEGAL ENTER
    .to(burger_2x,.5,{y:dimensions.height/2,ease:Power1.easeOut},"+=1.3")
    .from(ketchup_2x,.5,{x:dimensions.width,ease:Power2.easeOut},"f2-end")
    .from(mustard_2x,.6,{x:dimensions.width,ease:Power2.easeOut},"f2-end")
    .from(pack_2x,.7,{x:dimensions.width,ease:Power2.easeOut},"f2-end")
    .from(cheese_2x,.7,{x:dimensions.width,ease:Power2.easeOut},"f2-end")
    .staggerFrom([cta_2x,legal_2x],0.7,{x:-dimensions.width,ease:Power2.easeOut},.1,"f2-end") 

    // F3: f1_copy slides out, ef_copy slides in
    .staggerTo(f1_copy,1,{x:dimensions.width+100,ease:Power2.easeOut},.1,"+=.5")
    .staggerFrom(ef_copy,.5,{x:-dimensions.width,ease:Power2.easeOut},.1,"-=.8")

    
    // .call(returnTimer)
}

function returnTimer(){
    stopWatch=((new Date().getTime())-stopWatch)*.001;
    console.log(stopWatch+" seconds");
}

// RM FXNS
function myFunction() {
  Enabler.exit('BackgroundExit');
}

function exitClickHandler() {
  Enabler.exit('BackgroundExit');
}
function clickThrough(){
    window.open(clicktag);
}

//SET IDs IN DOM TO GLOBAL VARIABLES
function IDsToVars(){
    var allElements = document.getElementsByTagName("*");
    
    for (var q = 0; q<allElements.length; q++){
         var el = allElements[q];
         if (el.id){
            window[el.id]=document.getElementById(el.id);
        }
    }
};