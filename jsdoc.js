  var p1 = document.getElementById('pag1');
var p2 = document.getElementById('pag2');
var p3 = document.getElementById('pag3');

var startingX;

function b1touchstart(evt){
    startingX = evt.touches[0].clientX;

};

function b1touchmove(evt){
    var touch = evt.touches[0];
    var change = startingX - touch.clientX;
    if (change < 0) {
        return;
    }
    p1.style.left = '-' + change + 'px';
   // p2.style.display = 'block';
    p2.style.left = (screen.width - change) + 'px';
    evt.preventDefault();

};

function b1touchend(evt){
    var change = startingX - evt.changedTouches[0].clientX;
    var threshold = screen.width / 3;
    if (change < threshold) {
        p1.style.left = 0;
        p2.style.left = '100%';
        //p2.style.display = 'none';

    }else{
        p1.style.transition = 'all .3s';
        p2.style.transition = 'all .3s';
        p1.style.left = '-100%';
        p2.style.left = '0';
       // p2.style.display = 'block';
    }
};



function b2touchstart(evt){
    startingX = evt.touches[0].clientX;
    p1.style.transition = '';
    p2.style.transition = '';
    p3.style.transition = '';

   // p1.style.display = 'none';
















};

function b2touchmove(evt){
    var touch = evt.touches[0];
    var change = touch.clientX - startingX;
    if (change < 0) {
        return;
    }
   // p1.style.display = 'block';
    p1.style.left = (change - screen.width) + 'px';
    p2.style.left = change + 'px';
    evt.preventDefault();


//de dos a 3

 var touch = evt.touches[0];
    var change = startingX - touch.clientX;
    if (change < 0) {
        return;
    }
    p2.style.left = '-' + change + 'px';
   // p2.style.display = 'block';
    p3.style.left = (screen.width - change) + 'px';
    evt.preventDefault();


};

function b2touchend(evt){
    var change = evt.changedTouches[0].clientX - startingX;
    var half = screen.width / 4;
    if (change < half) {
        p1.style.left = '-100%';
       // p1.style.display = 'none';
        p2.style.left = 0;
        
        

    }else{
        p1.style.transition = 'all .3s';
        p2.style.transition = 'all .3s';
        
        p1.style.left = '0';
        p2.style.left = '100%';
        
    }


//de dos a 3
    var change = startingX - evt.changedTouches[0].clientX;
    var threshold = screen.width / 3;
    if (change < threshold) {
        p2.style.left = 0;
        p3.style.left = '200%';
        //p2.style.display = 'none';

    }else{
        p2.style.transition = 'all .3s';
        p3.style.transition = 'all .3s';
        p2.style.left = '-100%';
        p3.style.left = '0';
       // p2.style.display = 'block';
    }
};





// function b3touchstart(evt){
//     startingX = evt.touches[0].clientX;
//     p1.style.transition='';
//     p2.style.transition = '';
//     p3.style.transition = '';
//    // p1.style.display = 'none';
// };

// function b3touchmove(evt){
//     var touch = evt.touches[0];
//     var change = touch.clientX - startingX;
//     if (change < 0) {
//         return;
//     }
//    // p1.style.display = 'block';
//     p2.style.left = (change - screen.width) + 'px';
//     p3.style.left = change + 'px';
//     evt.preventDefault();
// };

// function b3touchend(evt){
//     var change = evt.changedTouches[0].clientX - startingX;
//     var half = screen.width / 4;
//     if (change < half) {
//         p2.style.left = '-100%';
//        // p1.style.display = 'none';
//         p3.style.left = 0;
        
        

//     }else{
//         p2.style.transition = 'all .3s';
//         p3.style.transition = 'all .3s';
        
//         p2.style.left = '0';
//         p3.style.left = '100%';
        
//     }
// };

