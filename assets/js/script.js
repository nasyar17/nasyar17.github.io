var myFullpage = new fullpage("#fullpage", {
   //Navigation
   menu: "#menu",
   lockAnchors: false,

   navigation: true,
   navigationPosition: "right",
   // navigationTooltips: ["Intro", "Minat"],
   showActiveTooltip: true,
   slidesNavigation: true,
   slidesNavPosition: "bottom",

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
   // normalScrollElements: "#element1, .element2",
   scrollOverflow: false,
   scrollOverflowReset: false,
   scrollOverflowOptions: null,
   touchSensitivity: 1,
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
   responsiveSlides: true,

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