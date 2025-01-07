//console.log('Hello, World!');
// gsap.to("#box1",{
//   x:1000,
//     duration : 1,
//     delay: 1,
//    repeat : -1,
//    yoyo : true,
 
// })

// gsap.from("#box2",{

// x:1000,
// duration: 1,
// delay: 2,
// rotation :360,
// backgroundColor: "yellow",
// borderRadius :  "50%",
// scale : 3,
 

// })

// gsap.from("h1",{
//     y:60,
//     color: "red",
//     duration:1.5,
//     delay :1,
//     stagger : 0.5,


 

// })

//  Time line [If we use time line we dont need  to use delay every time ]

var tl = gsap.timeline()


// tl.to("#box1",{

//     x:1500,
// duration : 2,
// delay :1,
// })
// tl.to("#box2",{

//     x:1500,
// duration : 2,

// })
// tl.to("#box3",{

//     x:1500,
// duration : 2,

// })

tl.from("h2",{

y :-20,
opacity : 0,
duration : 1,



})
tl.from("h4",{

y :-20,
opacity : 0,
duration : 1,

stagger : 0.3,

})
tl.from("h1",{

y :20,
opacity : 0,
duration : 1,

scale : 0.2,    

})