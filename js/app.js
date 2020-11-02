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
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    var html = document.documentElement;
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || html.clientHeight) &&
      rect.right <= (window.innerWidth || html.clientWidth)
    );
  }


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNavBar(){
    navBarList.style.textAlign = 'center'
    sections.forEach(function(section){
        let sectionData = section.dataset.nav
        let anchor = document.createElement('a')
        anchor.href = '#' + section.id
        anchor.dataset.section = section.id
        let item = document.createElement('li')
        let itemContent = document.createElement('p')
        itemContent.style.color = 'black'
        itemContent.innerText = sectionData
        item.appendChild(itemContent)
        anchor.appendChild(item)
        navBarList.appendChild(anchor)
    })
    navBarList.style = 'display: flex; text-align: center; justify-content: space-around;'
}

// Add class 'active' to section when near top of viewport
function activateSection(event){
    sections.forEach(function(section){
        if (isInViewport(section)){
            section.classList.add("active-section");
        } else {
            section.classList.remove("active-section");
        }
    })
    // let section = document.getElementById(event.target.href)
    // if (isInViewport(event.target)){
    //     section.classList.add("active-section");
    // } else {
    //     event.target.classList.remove("active-section");
    // }
}




// Scroll to anchor ID using scrollTO event
function scrollToSection(event){
    event.preventDefault()
    let elementId = event.currentTarget.dataset.section
    let section = document.getElementById(elementId)
    section.scrollIntoView({behavior: "smooth", alignToTop: true})
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
document.addEventListener('DOMContentLoaded', buildNavBar());

// Scroll to section on link click
document.querySelectorAll('a').forEach(function(anchor){
    anchor.addEventListener('click', scrollToSection
    );
})
// Set sections as active
window.addEventListener('scroll', activateSection)

