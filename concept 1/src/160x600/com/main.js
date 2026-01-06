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
    container.addEventListener('mouseenter', function() {
        cta_over_2x.style.opacity = '1';
    });
    container.addEventListener('mouseleave', function() {
        cta_over_2x.style.opacity = '0';
    });
}

//ANIMATE
function animate(){
    stopWatch=new Date().getTime(); 

    const bg_copies = [bkg_txt_0,bkg_txt_1,bkg_txt_2,bkg_txt_3,c1_2x,bkg_txt_4,c2_2x,bkg_txt_5,bkg_txt_6,bkg_txt_7,bkg_txt_8,bkg_txt_9,bkg_txt_10,bkg_txt_11,bkg_txt_12,bkg_txt_13]
    //timeline animation here
    //set timeline
    tl
    // 
    .from([bkg_txt_0,bkg_txt_2,bkg_txt_4,bkg_txt_6,bkg_txt_8,bkg_txt_10,bkg_txt_12],.8,{x:-500,ease:Power1.easeOut},0)
    .from([bkg_txt_1,bkg_txt_3,bkg_txt_5,bkg_txt_7,bkg_txt_9,bkg_txt_11,bkg_txt_13],.8,{x:300,ease:Power1.easeOut},0)


    .from(man_2x,0.5,{opacity:0,x:-30,ease:Power1.easeIn},0.3)
// // right left right left
    .from(c1_2x,0.5,{opacity:0,x:-30,ease:Power1.easeIn},"+=.4")
    .from(c2_2x,0.4,{opacity:0,x:-30,ease:Power1.easeIn})
//     .from(c3_2x,0.4,{x:-160,ease:Power1.easeIn})
//     .from(c4_2x,0.4,{x:160,ease:Power1.easeIn})
    .staggerTo(bg_copies,0.3,{opacity:0,ease:Power1.easeOut},0.05,"+=1")

// // ef
    .from(logo2_2x,0.4,{opacity:0,ease:Power1.easeIn},"+=.4")
    .to(logo2_2x,0.4,{opacity:0,ease:Power1.easeIn},"+=1.2")

    .from(logo1_2x,0.4,{opacity:0,ease:Power1.easeIn},"+=.2")
    .to(logo1_2x,0.4,{y:19,ease:Power1.easeIn},"+=.8")

    .from(logo3_2x,0.4,{opacity:0,ease:Power1.easeIn},"+=.2")

    



    
    //.call(returnTimer)
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