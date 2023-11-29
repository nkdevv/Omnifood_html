///////////////////////////////////////////////////////////
//set Current Year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
console.log(currentYear);
// yearEl.textContent = currentYear;
///////////////////////////////////////////////////////////
//Make mobile Navigation

const btnEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
///////////////////////////////////////////////////////////
const videoClip = document.querySelector(".video-container");
console.log(videoClip);

videoClip = document.getElementById("").autofocus;

///////////////////////////////////////////////////////

// Smooth Scrolling Animation
const allLinks = document.querySelectorAll("a:link");
// console.log(allLinks);

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // e.preventDefault();
    const href = link.getAttribute("href");
    // console.log(Link);

    //scroll back to top

    // if (href === "#")
    //   window.scrollTo({
    //     top: 0,
    //     behavior: "smooth",
    //   });
    // scroll to other links
    // if (href !== "#" && href.startswith("#")) {
    //   const sectionEl = document.querySelectorAll("href");
    //   sectionEl.scrollIntoView({ behavior: "smooth" });
    // }
  });
});

// if (link.classList.contains("main-nav-link"))
//   headerEl.classList.toggle("nav-open");

///////////////////////////////////////////////////////////
//stricky section
const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the View Port
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

///////////////////////////////////////////////////////////
