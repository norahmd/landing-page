/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/
/**
 * Define Global Variables
 * 
*/
const navBarList = document.getElementById('navbar__list');
const mainContent = document.querySelector('main');
const sections = mainContent.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNavBar(){
// based on the number of sections nav elements will be created for each section
    sections.forEach(function(section){
        let sectionData = section.dataset.nav

        let anchor = document.createElement('a')
        anchor.href = '#' + section.id
        anchor.dataset.section = section.id
        anchor.innerText = sectionData

        let item = document.createElement('li')
        item.appendChild(anchor)

        navBarList.appendChild(item)
    })
    navBarList.style = 'display: flex; text-align: center; justify-content: space-around; margin-top: 15px; margin-bottom: 15px;'
}


// Add class 'active' to section when near top of viewport
var intersectionObserver = new IntersectionObserver(function(entries) {
    // If intersectionRatio is 0, the target is out of view
    if (entries[0].intersectionRatio == 0 || entries[0].intersectionRatio <= 0  ) {

        entries[0].target.classList.remove("active-section");

    } else {

        entries[0].target.classList.add("active-section");

    }
  });


// Scroll to anchor ID using scrollIntoView event
function scrollToSection(event){
    if (event.target.nodeName === 'A'){
        event.preventDefault()
        let elementId = event.target.dataset.section
        let section = document.getElementById(elementId)
        section.scrollIntoView({behavior: "smooth", alignToTop: true})
    } 
}


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
document.addEventListener('DOMContentLoaded', buildNavBar);

// Scroll to section on link click
navBarList.addEventListener('click', scrollToSection)

// Set sections as active
sections.forEach(function(section){
    intersectionObserver.observe(section);
})


