var myFullpage = new fullpage("#fullpage", {
   //Navigation
   menu: "#menu",
   lockAnchors: false,

   navigation: true,
   navigationPosition: "right",
   // navigationTooltips: ["Intro", "Minat"],
   showActiveTooltip: true,
   slidesNavigation: true,
   slidesNavPosition: "top",

   //Scrolling
   css3: true,
   scrollingSpeed: 700,
   autoScrolling: true,
   fitToSection: true,
   fitToSectionDelay: 1000,
   scrollBar: false,
   easing: "easeInOutCubic",
   easingcss3: "ease",
   loopBottom: false,
   loopTop: false,
   loopHorizontal: true,
   continuousVertical: false,
   continuousHorizontal: true,
   scrollHorizontally: true,
   interlockedSlides: false,
   dragAndMove: true,
   dragAndMoveKey: 'YWx2YXJvdHJpZ28uY29tX0EyMlpISmhaMEZ1WkUxdmRtVT0wWUc=',
   offsetSections: false,
   resetSliders: false,
   fadingEffect: false,
   // normalScrollElements: "#element1, .element2",
   scrollOverflow: false,
   scrollOverflowReset: false,
   scrollOverflowOptions: null,
   touchSensitivity: 5,
   bigSectionsDestination: null,

   //Accessibility
   keyboardScrolling: true,
   animateAnchor: true,
   recordHistory: true,

   //Design
   controlArrows: true,
   verticalCentered: true,
   // sectionsColor: ["#ccc", "#fff"],
   // paddingTop: "3em",
   // paddingBottom: "10px",
   fixedElements: "#header, .footer",
   responsiveWidth: 0,
   responsiveHeight: 0,
   responsiveSlides: false,
   parallax: false,
   parallaxOptions: {
      type: "reveal",
      percentage: 62,
      property: "translate",
   },
   dropEffect: false,
   dropEffectOptions: {
      speed: 2300,
      color: "#F82F4D",
      zIndex: 9999
   },
   waterEffect: false,
   waterEffectOptions: {
      animateContent: true,
      animateOnMouseMove: true
   },
   cards: false,
   cardsOptions: {
      perspective: 100,
      fadeContent: true,
      fadeBackground: true,
   },

   //Custom selectors
   sectionSelector: ".section",
   slideSelector: ".slide",

   lazyLoading: true,

   //events
   onLeave: function (origin, destination, direction) {},
   afterLoad: function (origin, destination, direction) {},
   afterRender: function () {},
   afterResize: function (width, height) {},
   afterReBuild: function () {},
   afterResponsive: function (isResponsive) {},
   afterSlideLoad: function (section, origin, destination, direction) {},
   onSlideLeave: function (section, origin, destination, direction) {},
});

lightbox.option({
   'resizeDuration': 200,
   'wrapAround': true,
   'alwaysShowNavOnTouchDevices': true,
   'fadeDuration': 400
})