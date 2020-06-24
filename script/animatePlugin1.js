const controller = new ScrollMagic.Controller();
const mobileDevice = window.matchMedia('(max-width : 768px)');

const timeline1 = new TimelineMax();
const timeline2 = new TimelineMax();

timeline1.from('#imgHeader',1, {x : 200, opacity : 0, ease: Back.easeIneaseIn},0)
timeline1.from('#sectionMain',1, {x : -200, opacity : 0}, 0)

timeline2.to('header nav', 0.5, {width:"100%", top : 0, ease: Expo.easeOuteaseOut},0)
animate(timeline2,'#container1', false, 0.4, 0, true);

function animate(timeline,param1, paramDevice1 = false ,param2,param3, param4 = false) {
     return new ScrollMagic.Scene({
          triggerElement : (mobileDevice.matches) ? paramDevice1 : param1, 
          triggerHook : param2,
          offset : param3,
          reverse : param4,
     })
          .setTween(timeline)
          // .addIndicators()
          .addTo(controller)
}

// Animation for mobile and desktop 
const timeline3D = new TimelineMax();
const box = Array.from(document.querySelectorAll('#container2 section:last-child article'));

if(mobileDevice.matches) {
     let timeline3M = [];

     box.forEach((data,index) => {                    
          timeline3M[index] = new TimelineMax();
          
          timeline3M[index].from(`#container2 section article:nth-child(${index+1})`, 0.7, {y : 100, opacity : 0, ease:Expo.easeout})

          animate(timeline3M[index], false , data , 0.5, 0);
     })

}else {
     timeline3D.from('#container2 section article:nth-child(1)', 0.6, {y : -100, opacity : 0})
     timeline3D.from('#container2 section article:nth-child(2)', 0.6, {y : 100, opacity : 0})
     timeline3D.from('#container2 section article:nth-child(3)', 0.6, {y : -100, opacity : 0})

     animate(timeline3D,'#buttonSection',false, 0.1, 0);
}
