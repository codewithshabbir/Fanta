var timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".fanta-flavour",
    start: "0% 95%",
    end: "50% 50%",
    scrub: true,
    markers: true,
  },
});

timeline.to("#fanta", {
  top: "108%",
  left: "21%",
  position: "absolute",
});
