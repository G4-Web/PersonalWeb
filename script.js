document.addEventListener("DOMContentLoaded", () => {
    const typed = new Typed("#typed-output", {
      strings: [
        "C:\\> npm install -g @vue/cli<br>vue create G4s-Silly-Web<br>cd G4s-Silly-Web<br>npm run serve<br>Website loaded successfully.<br> Enjoy <3<br>",
      ],
      typeSpeed: 20,
      startDelay: 500,
      onComplete: () => {
        gsap.to("#loading-screen", {
          opacity: 0,
          duration: 2,
          onComplete: () => {
            document.getElementById("loading-screen").style.display = "none";
          },
        });
      },
    });
  });
  
  gsap.registerPlugin(ScrollTrigger);
  
  const sections = document.querySelectorAll(".section");
  
  sections.forEach((section) => {
    gsap.from(section, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  });
  