gsap.registerPlugin(ScrollTrigger);

gsap.from(".left", {
    scrollTrigger: {
        trigger: ".page1",
        start: "top 80%",    
        toggleActions: "play none none reverse"
    },
    x: -200,
    opacity: 0,
    duration: 1.6,
    ease: "power3.out"
});

gsap.from(".right", {
    scrollTrigger: {
        trigger: ".page1",
        start: "top 80%",
        toggleActions: "play none none reverse"
    },
    x: 200,
    opacity: 0,
    duration: 1.6,
    ease: "power3.out",
    delay: 0.2
});





gsap.registerPlugin(ScrollTrigger);

gsap.from(".page2 .texts", {
    scrollTrigger: {
        trigger: ".page2",
        start: "top 80%",
        toggleActions: "play none none reverse"
    },
    y: -50,       
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
});

gsap.from(".page2 .game-card", {
    scrollTrigger: {
        trigger: ".page2",
        start: "top 75%",
        toggleActions: "play none none reverse"
    },
    y: 50,          
    opacity: 0,
    duration: 1,
    stagger: 0.2,   
    ease: "power3.out"
});


gsap.registerPlugin(ScrollTrigger);

gsap.from(".subscribe-content h1", {
    scrollTrigger: {
        trigger: ".subscribe-center",
        start: "top 80%",
        toggleActions: "play none none reverse"
    },
    y: -50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    delay: 0.5 
});

gsap.from(".subscribe-content p", {
    scrollTrigger: {
        trigger: ".subscribe-center",
        start: "top 75%",
        toggleActions: "play none none reverse"
    },
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    delay: 0.5 
});

gsap.from(".subscribe-btn", {
    scrollTrigger: {
        trigger: ".subscribe-center",
        start: "top 70%",
        toggleActions: "play none none reverse"
    },
    scale: 0.8,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.7)",
    delay: 0.5   
});




gsap.registerPlugin(ScrollTrigger);

gsap.from(".platform-card", {
    scrollTrigger: {
        trigger: ".platform-choice-section",
        start: "top 80%",
        toggleActions: "play none none reverse"
    },
    y: 50,         
    opacity: 0,    
    duration: 1,   
    stagger: 0.2,  
    ease: "power3.out",
    delay: 0.5    
});

gsap.from(".platform-choice-section h2", {
    scrollTrigger: {
        trigger: ".platform-choice-section",
        start: "top 90%",
        toggleActions: "play none none reverse"
    },
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    delay: 0.5
});

