// start by selecting anchor tags that are in the navigation <nav> element using 'querySelectorAll'
document.querySelectorAll('nav a').forEach(anchor => {
    // add an Event Listener that will work on each anchor tag in the navigation bar and it is listening for the 'click' event
    anchor.addEventListener('click', function(e) {
        // call the preventDefault to prevent the default action that jumps straight to the anchor tag
        e.preventDefault();
// these next two lines of code determine the target section, it is first getting the href attribute of the anchor tag which is linked to the section id of the different pages
// .substring(1) removes the first character so it isolates the ID only
      const targetId = this.getAttribute('href').substring(1);
// .getElementById selects the HTML element with that ID
      const targetElement = document.getElementById(targetId);
// finally window.scrollTo is called with an object that specifies the vertical position to scroll to and the behaviour "smooth"
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    });
  });


// Listen for a click event on the navigation toggle button
document.querySelector('.nav-toggle').addEventListener('click', function() {
      // Select the navigation links list
      var navLinks = document.querySelector('nav.row ul');
      
      // Check if the navigation links are currently displayed
      if (navLinks.style.display === 'block') {
          // If links are displayed, hide them
          navLinks.style.display = 'none';
      } else {
          // If links are hidden, display them
          navLinks.style.display = 'block';
      }
  });