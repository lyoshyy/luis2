gsap.matchMedia().add("(min-width: 992px)", () => {
  const splitTypes_1 = document.querySelectorAll(".reveal-type.is-1");
  splitTypes_1.forEach((char, i) => {
    const text_1 = new SplitType(char, { types: ["chars", "words"] });

    const splitTypes_2 = document.querySelectorAll(".reveal-type.is-2");
    splitTypes_2.forEach((char, i) => {
      const text_2 = new SplitType(char, { types: ["chars", "words"] });

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".section_h-header",
          // trigger element - viewport
          start: "100% 30%",
          end: "100% -30%",
          scrub: 1,
          markers: false,
        },
      });

      gsap.set(".h-header_reveal.is-bottom", { opacity: 1 });

      tl.to(text_1.chars, { opacity: 0, stagger: 0.07 });
      tl.from(text_2.chars, { opacity: 0, stagger: 0.07 }, "<1.5");
    });
  });
});

gsap.matchMedia().add("(max-width: 991px)", () => {
  // Mobile
  $(".section_h-header").each(function (index) {
    let triggerElement = $(this);

    let text_1 = $(".reveal-type.is-1");
    let text_2 = $(".reveal-type.is-2");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "center center",
        end: "center center",
        // play pause resume reset restart complete reverse none
        toggleActions: "none play none reverse",
        markers: false,
      },
    });

    gsap.set(".h-header_reveal.is-bottom", { opacity: 1 });

    tl.to(text_1, { opacity: 0 });
    tl.from(text_2, { opacity: 0 }, "<0.4");
  });
});



gsap.matchMedia().add("(min-width: 992px)", () => {
  // desktop setup code here...
  $(".section_h-banner").each(function (index) {
    let triggerElement = $(this);

    let image_bg = $(".h-banner_background-image.is-1");
    let image_left_1 = $(".h-banner_background-image.is-2");
    let image_left_2 = $(".h-banner_background-image.is-3");
    let image_right_1 = $(".h-banner_background-image.is-4");
    let image_right_2 = $(".h-banner_background-image.is-5");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top bottom",
        end: "top 0%",
        // play pause resume reset restart complete reverse none
        toggleActions: "none play none reset",
      },
    });

    gsap.set(".section_h-stocks", { marginTop: "-100svh", zIndex: 1 });

    // Size Section & Border
    tl.to(image_left_1, { x: "-50%" }, 0);
    tl.to(image_left_2, { x: "-50%" }, 0);

    tl.to(image_right_1, { x: "50%" }, 0);
    tl.to(image_right_2, { x: "50%" }, 0);

    tl.to(image_bg, { opacity: 0 }, 0);

    let h2_heading = $(".slider_heading-h2.is-h-stocks");
    let slider_arrows = $(".button-background.is-h-stocks");
    let sw_slide = $(".swiper-slide.is-h-stocks");
    let sw_drag_w = $(".swiper-drag-wrapper.is-h-stocks");
    let sw_drag = $(".swiper-drag.is-h-stocks");

    tl.from(
      sw_slide,
      {
        x: "100%",
        ease: "power2.out",
        opacity: 0,
        duration: 0.8,
        stagger: { each: 0.05 },
      },
      0
    );
    tl.from(sw_drag_w, { x: "-100%", ease: "power2.out", duration: 0.8 }, 0.4);
    tl.from(sw_drag, { x: "-100%", ease: "power2.out", duration: 0.8 }, 0);

    tl.from(h2_heading, { y: "100%", ease: "power2.out", duration: 0.8 }, 0);
    tl.from(slider_arrows, { y: "100%", ease: "power2.out", duration: 0.8 }, 0);

    tl.to(".section_h-banner", { pointerEvents: "none" }, 0.8);
  });
});

// gsap.matchMedia().add("(min-width: 992px)", () => {
//   // desktop setup code here...
//   $(".section_h-banner").each(function () {
//     let triggerElement = $(this);

//     let image_bg = $(".h-banner_background-image.is-1");
//     let image_left_1 = $(".h-banner_background-image.is-2");
//     let image_left_2 = $(".h-banner_background-image.is-3");
//     let image_right_1 = $(".h-banner_background-image.is-4");
//     let image_right_2 = $(".h-banner_background-image.is-5");

//     let tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: triggerElement,
//         // trigger element - viewport
//         start: "top bottom",
//         end: "top 0%",
//         // play pause resume reset restart complete reverse none
//         toggleActions: "none play none reset",
//       },
//     });

//     gsap.set(".section_h-stocks", { marginTop: "-100svh", zIndex: 1 });

//     // Size Section & Border
//     tl.to($(this).find(image_left_1), { x: "-50%" }, 0);
//     tl.to($(this).find(image_left_2), { x: "-50%" }, 0);

//     tl.to($(this).find(image_right_1), { x: "50%" }, 0);
//     tl.to($(this).find(image_right_2), { x: "50%" }, 0);

//     tl.to($(this).find(image_bg), { opacity: 0 }, 0);

//     let h2_heading = $(".slider_heading-h2");
//     let slider_arrows = $(".button-background");
//     let sw_slide = $(".swiper-slide");
//     let sw_drag_w = $(".swiper-drag-wrapper");
//     let sw_drag = $(".swiper-drag");

//     tl.from(
//       sw_slide,
//       {
//         x: "100%",
//         ease: "power2.out",
//         opacity: 0,
//         duration: 0.8,
//         stagger: { each: 0.05 },
//       },
//       0
//     );
//     tl.from(
//       $(this).find(sw_drag_w),
//       { x: "-100%", ease: "power2.out", duration: 0.8 },
//       0.4
//     );
//     tl.from(
//       $(this).find(sw_drag),
//       { x: "-100%", ease: "power2.out", duration: 0.8 },
//       0
//     );

//     tl.from(
//       $(this).find(h2_heading),
//       { y: "100%", ease: "power2.out", duration: 0.8 },
//       0
//     );
//     tl.from(
//       $(this).find(slider_arrows),
//       { y: "100%", ease: "power2.out", duration: 0.8 },
//       0
//     );

//     tl.to($(this).find(".section_h-banner"), { pointerEvents: "none" }, 0.8);
//   });
// });


gsap.matchMedia().add("(min-width: 992px)", () => {
  // desktop setup code here...
  $(".animation-section-out").each(function (index) {
    let triggerElement = $(this);

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "bottom 40%",
        end: "bottom 30%",
        scrub: 1,
        ease: "power3.out",
      },
    });

    // Size Section & Border
    tl.to(triggerElement, {
      scale: "0.97",
      borderRadius: "1.25rem",
    });
  });

  // desktop setup code here...
  $(".animation-section-in").each(function (index) {
    let triggerElement = $(this);

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top 70%",
        end: "top 40%",
        scrub: 1,
        ease: "power3.in",
      },
    });

    // Size Section & Border
    tl.from(triggerElement, {
      scale: "0.97",
      borderRadius: "1.25rem",
    });
  });
});


gsap.matchMedia().add("(min-width: 992px)", () => {
  // Swiper Top
  $(".is-swiper-top").each(function () {
    let triggerElement = $(this);

    let h2_heading = $(".slider_heading-h2");
    let slider_arrows = $(".button-background");
    let sw_slide = $(".swiper-slide");
    let sw_drag_w = $(".swiper-drag-wrapper");
    let sw_drag = $(".swiper-drag");

    let scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top bottom",
        end: "top 40%",
        // play pause resume reset restart complete reverse none
        toggleActions: "none play none reset",
      },
    });

    scrollTl.from($(this).find(sw_slide), {
      x: "100%",
      ease: "power2.out",
      opacity: 0,
      duration: 0.8,
      stagger: { each: 0.05 },
    });
    scrollTl.from(
      $(this).find(sw_drag_w),
      { x: "-100%", ease: "power2.out", duration: 0.8 },
      0.4
    );
    scrollTl.from(
      $(this).find(sw_drag),
      { x: "-100%", ease: "power2.out", duration: 0.8 },
      0
    );

    scrollTl.from(
      $(this).find(h2_heading),
      { y: "100%", ease: "power2.out", duration: 0.8 },
      0
    );
    scrollTl.from(
      $(this).find(slider_arrows),
      { y: "100%", ease: "power2.out", duration: 0.8 },
      0
    );
  });

  // Swiper Bottom
  $(".is-swiper-bottom").each(function () {
    let triggerElement = $(this);

    let h2_heading = $(".slider_heading-h2");
    let slider_arrows = $(".button-background");
    let sw_slide = $(".swiper-slide");
    let sw_drag_w = $(".swiper-drag-wrapper");
    let sw_drag = $(".swiper-drag");

    let scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top top",
        end: "bottom 40%",
        // play pause resume reset restart complete reverse none
        toggleActions: "none play none reset",
      },
    });

    scrollTl.from($(this).find(sw_slide), {
      x: "100%",
      ease: "power2.out",
      opacity: 0,
      duration: 0.8,
      stagger: { each: 0.05 },
    });
    scrollTl.from(
      $(this).find(sw_drag_w),
      { x: "-100%", ease: "power2.out", duration: 0.8 },
      0.4
    );
    scrollTl.from(
      $(this).find(sw_drag),
      { x: "-100%", ease: "power2.out", duration: 0.8 },
      0
    );

    scrollTl.from(
      $(this).find(h2_heading),
      { y: "100%", ease: "power2.out", duration: 0.8 },
      0
    );
    scrollTl.from(
      $(this).find(slider_arrows),
      { y: "100%", ease: "power2.out", duration: 0.8 },
      0
    );
  });
});


// All Heading

$(".animation-text").each(function () {
  let triggerElement = $(this);

  let heading = $(".heading-style-h2");
  let paragraph = $(".text-size-18-14");
  let button = $(".button");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "top bottom",
      end: "top 80%",
      // play pause resume reset restart complete reverse none
      toggleActions: "none play none reset",
      markers: false,
    },
  });

  tl.from($(this).find(heading), {
    y: "100%",
    ease: "power2.out",
    duration: 0.8,
  });
  tl.from(
    $(this).find(paragraph),
    {
      opacity: 0,
      ease: "power2.out",
      duration: 0.8,
    },
    "<0.2"
  );
  tl.from(
    $(this).find(button),
    {
      opacity: 0,
      ease: "power2.out",
      duration: 0.8,
    },
    "<0.2"
  );
});


$(".section_h-hero").each(function () {
  let loadTl = gsap.timeline();

  let heading_1 = $(".heading-style-h1");
  let text = $(".text-size-18-14");

  loadTl.from($(this).find(heading_1), {
    y: "100%",
    ease: "power2.out",
    duration: 0.8,
  });
  loadTl.from(
    $(this).find(text),
    { opacity: 0, ease: "power2.out", duration: 0.8 },
    "<0.2"
  );
});


// NAvbar
$(".animation-hide-navbar").each(function (index) {
  let triggerElement = $(this);

  let navbar = $(".navbar_component");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "top 50%",
      end: "bottom bottom",
      // play pause resume reset restart complete reverse none
      toggleActions: "play reverse play reverse",
    },
  });

  tl.to(navbar, { y: "-150%", duration: 0.5, ease: "power3.in" });
});
