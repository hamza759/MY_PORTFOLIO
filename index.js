

function mainanimation() {
  const isSmallScreen = window.matchMedia("(max-width: 480px)").matches;
  gsap.to(".fmain h1", {
    y: -100,
    duration: 1,
    onComplete: function () {
      gsap.to(".fmain h1", {
        opacity: 0
      });
    },
  });

  // gsap.to(".smain", {
  //   x: -1500,
  //   duration: isSmallScreen ? 3 : 1, // Apply conditional duration here
  //   delay: 1.5,
  //   smoothOrigin: true,
  //   onComplete: function () {
  //     gsap.to(".smain", { opacity: 0 });
  //   },
  // });

  gsap.to(".portfolio", {
    duration: 0.5,
    delay: isSmallScreen ? 2 : 2,
    top: "-100vh",
    ease: "Power2.easeOut",
    smoothOrigin: true,
  });

  document.addEventListener('scroll', function () {
    const navbg = document.querySelector(".main nav");
    const value = 30;

    if (window.scrollY > value) {
      navbg.style.backgroundColor = "#282834B3"; // Change background color when scrolling down
    }
  });

}
mainanimation();



function navanimation() {
  let take = gsap.timeline()
  take.from("nav  ul a ", {
    y: -70,
    duration: 1,
    delay: 3,
    opacity: 0.5,
    stagger: 0.5,
  })

}
navanimation()


function navscroll() {
  window.addEventListener('scroll', (event) => {
    let sel = document.querySelector("nav .img2")
    const linksList = document.querySelector(".links ul ");
    const scrollThreshold = 100;  // Adjust as needed
    linksList.style.transition = "transform 1.5s ease-in-out, opacity 1.5s ease-in-out";

    if (window.scrollY > scrollThreshold) {
      linksList.style.opacity = 0;
      linksList.style.transition = "opacity 1.5s ease-in-out";
      linksList.style.transition = "all 2s";
      linksList.style.transitionDuration = "1s";
      linksList.style.transitionTimingFunction = "linear";
      linksList.style.transform = "translateX(40px)"
      sel.style.transform = "rotate(90deg)";
      sel.style.transition = "1.5s ease-in-out";
    }
    else {
      linksList.style.opacity = 1;
      linksList.style.transition = "opacity 1.5s ease-in-out";
      linksList.style.transition = "all 2s";
      linksList.style.transitionDuration = "1s";
      linksList.style.transitionTimingFunction = "linear";
      linksList.style.transform = "translateX(-10px)"
      sel.style.transform = "rotate(0deg)";
      sel.style.transition = "1.5s ease-in-out";
    }

  });

  // here i will create function on logo design
  window.addEventListener('scroll', (event) => {
    let imglogo = document.querySelector("nav .img")
    const logoheading = document.querySelector("nav .img h4");
    const scrollThreshold = 200;
    if (window.scrollY > scrollThreshold) {
      logoheading.style.opacity = 0;
      logoheading.style.transition = "opacity 1.5s ease-in-out";
      logoheading.style.transition = "all 2s";
      logoheading.style.transitionDuration = "1s";
      logoheading.style.transitionTimingFunction = "linear";
      logoheading.style.transform = "translateX(-10px)"
      //  imglogo.style.transform = "scaleX(-1)";
      //  imglogo.style.transition = "1.5s ease-in-out";
      //  imglogo.style.transitionDuration = "1s";
    } else {
      logoheading.style.opacity = 1;
      logoheading.style.transition = "opacity 1.5s ease-in-out";
      logoheading.style.transition = "all 2s";
      logoheading.style.transitionDuration = "1s";
      logoheading.style.transitionTimingFunction = "linear";
      logoheading.style.transform = "translateX(10px)"
      //  imglogo.style.transform = "scale(1)";
      //  imglogo.style.transition = "1.5s ease-in-out";
      // imglogo.style.transitionDuration = "1s";
    }
  });

}
navscroll()


// function btncliked() {
//   let sel = document.querySelector("nav .img2")
// const linksList = document.querySelector(".links ul ");
// let isClcked = false
// sel.addEventListener('click', function () {
//   if (!isClcked) {

//     sel.style.transform = "rotate(90deg)";
//     sel.style.transition = "1.5s ease-in-out";
//     linksList.style.opacity = 0;
//     linksList.style.transform = "translateX(40px)"
//     linksList.style.transition = "opacity 0.5s ease-in-out";  // Add transitio
//     linksList.style.transition = "all 2s";
//     linksList.style.transitionDuration = "1s";
//     linksList.style.transitionTimingFunction = "linear";

//     isClcked = true
//   } else {
//     sel.style.transform = "rotate(0deg)";
//     sel.style.transition = "1.5s ease-in-out";
//     linksList.style.opacity = 1;
//     linksList.style.transform = "translateX(-20px)"
//     linksList.style.transition = "opacity 0.5s ease-in-out";  // Add transitio
//     linksList.style.transition = "all 2s";
//     linksList.style.transitionDuration = "1s";
//     linksList.style.transitionTimingFunction = "linear";
//     isClcked = false
//   }
// });

// }
// btncliked()



function mainchild_animation() {
  const isSmallScreen = window.matchMedia("(max-width: 480px)").matches;

  let mainchild = gsap.timeline()
  mainchild.to(".head h4,h3", {
    x: -100,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: ".head h4,h3",
      scroller: "body",
      //  markers:true,

      start: isSmallScreen ? "top 30%" : "top 20%", //
      end: "top 50%",
      scrub: 5

    }
  })

  mainchild.to(".head h1,h2", {
    x: 100,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: ".head h1,h2",
      scroller: "body",
      // markers:true,
      start: isSmallScreen ? "top 30%" : "top 18%", //   26 is for mob and 18 is for destop
      end: "top 50%",
      scrub: 5
    }
  })

  ///////////////socail icons
  gsap.from(".fbimg img", {
    scale: 0,
    opacity: 0,
    duration: 2,
    stagger: 1,
    delay: 3,
  })


}
mainchild_animation()




gsap.utils.toArray(".text h1").forEach((heading) => {
  gsap.to(heading, {
    scale: 1.5,
    duration: 2,
    scrollTrigger: {
      trigger: heading,
      start: "top 40%",
      end: "top 50%",
      // markers: true,
      scrub: 2,
      pin: true
    },
    // fontSize: "4vw", 
    stagger: 1,
    color: "white"
  });
});


function main2animate() {
  let IMG = gsap.timeline()

  IMG = gsap.from(".sectiononeanimate img", {
    duration: 5,
    //  opacity: 0,
    x: -80,
    scale: 0.9,
    stagger: 1,
    scrollTrigger: {
      trigger: ".sectiononeanimate",
      scroller: "body",
      start: "top 40%",
      end: "top 50%",
      scrub: 5,
      // markers:true
    },
  });
  images = gsap.from(".sectiontwoanimate img", {
    duration: 5,
    // opacity: 0,
    x: 80,
    scale: 0.9,
    stagger: 1,
    scrollTrigger: {
      trigger: ".sectiontwoanimate",
      scroller: "body",
      start: "top 40%",
      end: "top 50%",
      scrub: 5,

    },
  });

}

main2animate()


function section_pinning() {

  // gsap.registerPlugin(ScrollTrigger)

  gsap.set('.photo:not(:first-child)', { opacity: 1, scale: 1, y: '100%' })

  const animation = gsap.to('.photo:not(:first-child)', {
    opacity: 1,
    scale: 1,
    duration: 0.5,
    stagger: 1,
    y: '0%',
  })

  ScrollTrigger.create({
    trigger: '.gallery',
    start: 'top top',
    end: 'bottom bottom',
    pin: '.right',
    animation: animation,
    scrub: true,
    //  markers: true,
  })

  gsap.to('.gallery', {
    duration: 1,
    backgroundColor: '#f9d2e5aa',
    scrollTrigger: {
      trigger: '.d1',
      scrub: true,
    },
  })

  gsap.to('.gallery', {
    duration: 1,
    backgroundColor: '#cdd1ffaa',
    scrollTrigger: {
      trigger: '.d2',
      scrub: true,
    },
  })

  gsap.to('.gallery', {
    duration: 1,
    backgroundColor: '#ffe4d3ee',
    scrollTrigger: {
      trigger: '.d3',
      scrub: true,
    },
  })

  gsap.to('.gallery', {
    duration: 1,
    backgroundColor: '#ffb399aa',
    scrollTrigger: {
      trigger: '.d4',
      scrub: true,
    },
  })
}
section_pinning()


function text_color_changed() {
  const isSmallScreen = window.matchMedia("(max-width: 480px)").matches;

  gsap.from(".main4right h1", {
    duration: 5,
    opacity: 0,
    y: -100,
    stagger: 2,
    scrollTrigger: {
      trigger: ".main4right",
      scroller: "body",
      start: isSmallScreen ? "top 60%" : "top 40%", // Conditional start position
      end: isSmallScreen ? "top 70%" : "top 50%", // Conditional start position
      scrub: 4,
      //  markers:true
    }
  })
  let parag = gsap.timeline()
  parag.from(".main4right p", {
    duration: 5,
    x: 200,
    opacity: 0,
    color: "#0E0E0E",
    stagger: 2,
    scrollTrigger: {
      trigger: ".main4right",
      scroller: "body",
      start: isSmallScreen ? "top 60%" : "top 30%", // Conditional start position
      end: isSmallScreen ? "top 70%" : "top 70%", // Conditional start position
      scrub: 10,
      // markers:true

    }
  })
}
text_color_changed()

function sociallinks() {
  let li = document.getElementById("linkdin")
  li.addEventListener('click', () => {
    setTimeout(() => {
      window.open("https://www.linkedin.com/in/hamza-jamil-a34651258");
    }, 500);

  })

  let wa = document.getElementById("whatsapp")
  wa.addEventListener('click', () => {
    setTimeout(() => {
      window.location.href = "tel:+923101809818"; // Replace with your actual WhatsApp number

    }, 500);

  })

  let gh = document.getElementById("github")
  gh.addEventListener('click', () => {
    setTimeout(() => {
      window.open("https://github.com/hamza759");

    }, 500);

  })
  let todo = document.getElementById("g-r-todo")
  todo.addEventListener('click', () => {
    setTimeout(() => {
      window.open("https://github.com/hamza759/Todo-App");

    }, 500);
  })
    let ltodo = document.getElementById("l-video")
    ltodo.addEventListener('click', () => {
      setTimeout(() => {
        window.open("https://www.linkedin.com/posts/hamza-jamil-a34651258_i-built-this-react-app-using-modular-components-activity-7154740907890638848-I5e4?utm_source=share&utm_medium=member_desktop");

      }, 500);

    })
  }
sociallinks()

function links() {


      document.querySelectorAll('a[href^="."]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
          });
        });
      });
    }

links()

