function lenixy() {
    const lenis = new Lenis()
    lenis.on('scroll', (e) => {
        console.log(e)
    })
    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
}
lenixy();

function loderanimation() {
    gsap.to(".loader", {
        y: "-100%",
        duration: 0.5,
        delay:2
    });
}
loderanimation();
//side nav bar

var t3 = gsap.timeline();

    t3.to(".side-nav-bar",{
        x:"-100%",
    })
    t3.from(".ani",{
        x:150,
        opacity:0,
        stagger:.1
    })
    
t3.pause();
var menu =document.querySelector(".menu");
menu.addEventListener("click", function(){
    t3.play(); 
})

document.querySelector(".close").addEventListener("click",function(){
    t3.reverse();
})


//nav bar animation
function navanim() {
    gsap.to(".nav", {
        y: "-100",
        ease: "power4.inOut",
        scrollTrigger: {
            trigger: ".nav",
            // markers:true,
            start: "top top",
            end: "bottom top",
            scrub: 2
        }
    });
}
navanim();

function homepageAnimation() {
    let waveCount = 0;
    const maxWaveCount = 4; // Maximum number of wave elements allowed

    setInterval(function () {
        if (waveCount < maxWaveCount) {
            createWave();
            waveCount++;
        }
    }, 750)

    function createWave() {
        const circleContainer = document.querySelector('.bg-zinc-100');
        const smallCircle = document.createElement('div');
        smallCircle.classList.add('absolute', 'w-5', 'h-5', 'bg-[#16181E]', 'rounded-full', 'opacity-90', 'animate-wave');
        circleContainer.appendChild(smallCircle);

        smallCircle.addEventListener('animationend', () => {
            smallCircle.remove();
            waveCount--;
        });
    }
}
homepageAnimation();

// page2 animation 
function zoom() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".page2",
            start: "50% 50%",
            end: "90% 50%",
            scrub: true,
            // markers: true,
            scroller: "body",
            pin: true
        }
    });
    tl.to(".up", {
        duration: 2,
        rotateX: 110,
        opacity: 0,
        ease: "power2.out",
    }, "rc")
    tl.to(".down", {
        duration: 2,
        rotateX: -110,
        opacity: 0,
        ease: "power2.out",
    }, "rc")
    tl.to(".photo", {
        duration: 2,
        delay: 0.5,
        ease: "power2.out",
        height: "80%",
        width: "80%",
        ease: "power2.out"
    }, "rc")
}
zoom();

function animateY(elemArr) {
    var index = 0;
    document.querySelector(".next").addEventListener("click", function () {
        gsap.to(elemArr[index], {
            top: "-=100%",
            ease: Expo.easeInOut,
            duration: 1,
            onComplete: function () {
                gsap.set(this._targets[0], { top: "100%" });
            }
        });
        index === elemArr.length - 1 ? index = 0 : index++;
        gsap.to(elemArr[index], {
            top: "-=100%",
            ease: Expo.easeInOut,
            duration: 1
        });
    });
}
var h1s = document.querySelectorAll(".h1");
animateY(h1s);
var h2s = document.querySelectorAll(".h2");
animateY(h2s);
var h3s = document.querySelectorAll(".h3");
animateY(h3s);
var h4s = document.querySelectorAll(".h4");
animateY(h4s);
var h4s = document.querySelectorAll(".icons img");
animateY(h4s);


// placedstudent 

const placedStudents1 = [
    {
        name: "Aarav Sharma",
        image_url: "https://randomuser.me/api/portraits/men/10.jpg",
        company: "Google",
        package: "₹12 LPA"
    },
    {
        name: "Kavya Patel",
        image_url: "https://randomuser.me/api/portraits/women/12.jpg",
        company: "Microsoft",
        package: "₹14 LPA"
    },
    {
        name: "Rohan Mehta",
        image_url: "https://randomuser.me/api/portraits/men/20.jpg",
        company: "Amazon",
        package: "₹15 LPA"
    },
    {
        name: "Sanya Verma",
        image_url: "https://randomuser.me/api/portraits/women/22.jpg",
        company: "Facebook",
        package: "₹13 LPA"
    },
];

const placedStudents2 = [
    {
        name: "Vihaan Singh",
        image_url: "https://randomuser.me/api/portraits/men/30.jpg",
        company: "IBM",
        package: "₹11 LPA"
    },
    {
        name: "Ananya Desai",
        image_url: "https://randomuser.me/api/portraits/women/32.jpg",
        company: "TCS",
        package: "₹10 LPA"
    },
    {
        name: "Ishaan Gupta",
        image_url: "https://randomuser.me/api/portraits/men/40.jpg",
        company: "Infosys",
        package: "₹9 LPA"
    },
    {
        name: "Meera Iyer",
        image_url: "https://randomuser.me/api/portraits/women/42.jpg",
        company: "Wipro",
        package: "₹11 LPA"
    }
];

const placedStudents3 = [
    {
        name: "Rhea Jee",
        image_url: "https://randomuser.me/api/portraits/women/52.jpg",
        company: "Capgemini",
        package: "₹12 LPA"
    },
    {
        name: "Aakash Nair",
        image_url: "https://randomuser.me/api/portraits/men/50.jpg",
        company: "Accenture",
        package: "₹10 LPA"
    },

    {
        name: "Aditya Rao",
        image_url: "https://randomuser.me/api/portraits/men/60.jpg",
        company: "Adobe",
        package: "₹13 LPA"
    },
    {
        name: "Pooja Singh",
        image_url: "https://randomuser.me/api/portraits/women/62.jpg",
        company: "Oracle",
        package: "₹14 LPA"
    }
];

function renderStudents(students, containerSelector) {
    let clutter = "";
    students.forEach(function (val) {
        clutter += `<div class="card rounded-md w-full sm:h-96 h-60 mb-1 flex flex-col items-center justify-evenly ">
        <div class="student_img sm:h-28 h-16 sm:w-28 w-16 rounded-full overflow-hidden">
          <img class="h-full w-full object-cover object-center " src="${val.image_url}" alt="">
        </div>
        <h1 class="mt-2 sm:text-3xl text-md text-center leading-tight uppercase font-[gilroy-bold] font-semibold">${val.name}</h1>
        <h1 class="sm:text-xl text-[12px] text-center font-medium leading-tight">Placed in the company ${val.company}</h1>
        <h1 class="sm:text-xl text-[12px] text-center font-medium ">
          with the package of ${val.package}
        </h1>
      </div>`;
    });
    document.querySelector(containerSelector).innerHTML = clutter;
}

renderStudents(placedStudents1, ".carde");
renderStudents(placedStudents2, ".cardes");
renderStudents(placedStudents3, ".cards");

function studentAnimation() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".studentplaced",
            start: "50% 50%",
            end: "90% 50%",
            scrub: true,
            // markers: true,
            scroller: "body",
            pin: true
        }
    });

    tl.to(".carde", {
        y: "25%",
        duration: 2,
        ease: "power2.inOut"
    }, "a");

    tl.to(".cards", {
        y: "25%",
        duration: 2,
        ease: "power2.inOut"
    }, "a");
    tl.to(".cardes", {
        y: "-18%",
        duration: 2,
        ease: "power2.inOut"
    }, "a");
}

studentAnimation();







var card = document.querySelector(".page3_up")
var container = document.querySelector(".container")
card.addEventListener('mousemove',(e) => {
    let xAxis = (window.innerWidth - e.pageX)/150;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(0deg)`;
});
card.addEventListener('mouseleave',(e)=>{ 
    card.style.transform=`rotateY(0deg)`;
});