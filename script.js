let Path = `M 10 100 Q 250 100 490 100`;
let finalPath = `M 10 100 Q 250 100 490 100`;

let string = document.querySelector('.cont');

string.addEventListener('mousemove',function(dets){
    path = `M 10 100 Q 250 ${dets.y} 490 100`;
    console.log(path);

    gsap.to('svg path',{
        attr:{
            d:path
        },
        duration:0.3,
        ease:"power3.Out"
        
    
    })
})

string.addEventListener('mouseleave',function(dets){
    gsap.to('svg path',{
        attr:{
            d:finalPath
        },
        duration:0.5,
        ease: "elastic.out(1,0.3)"
    })

})