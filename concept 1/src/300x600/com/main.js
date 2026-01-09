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

    // F2
    .from(woodBg_2x,1,{})
    .from(blueBg_2x,0.5,{y:dimensions.height,ease:Power2.easeOut},"f2-entrance")
    .from(redBg_2x,0.4,{x:-dimensions.width,ease:Power2.easeOut},"f2-entrance+=.1")
    .from(hotdog_2x,.7,{x:-dimensions.width},"+=.2")

    .from(ketchup_2x,.5,{x:dimensions.width,ease:Power2.easeOut},"f2-end")
    .from(mustard_2x,.6,{x:dimensions.width,ease:Power2.easeOut},"f2-end")
    .from(pack_2x,.7,{x:dimensions.width,ease:Power2.easeOut},"f2-end")
    .from(cta_2x,0.7,{x:-dimensions.width,ease:Power2.easeOut},"f2-end") 

    // F3: f1_copy slides out, ef_copy slides in
    .staggerTo(f1_copy,1,{x:dimensions.width+100,ease:Power2.easeOut},.1,"+=.5")
    .staggerFrom(ef_copy,.5,{x:-dimensions.width,ease:Power2.easeOut},.1,"-=.8")

    // .call(returnTimer)
}

function returnTimer(){
    stopWatch=((new Date().getTime())-stopWatch)*.001;
    console.log(stopWatch+" seconds");
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