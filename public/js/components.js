// navigation.js
document.addEventListener('DOMContentLoaded', function () {
  // Fetch the navigation.html file
  fetch('../components/navbar.html')
    .then(function (response) {
      return response.text();
    })
    .then(function (html) {
      // Insert the navigation bar into the header element of each page
      document.getElementById('navbar').innerHTML = html;
    })
    .catch(function (error) {
      console.error('Error fetching navigation bar:', error);
    });
});



// navigation.js
document.addEventListener('DOMContentLoaded', function () {
  // Fetch the navigation.html file
  fetch('../components/footer.html')
    .then(function (response) {
      return response.text();
    })
    .then(function (html) {
      // Insert the navigation bar into the header element of each page
      document.getElementById('footer').innerHTML = html;
    })
    .catch(function (error) {
      console.error('Error fetching navigation bar:', error);
    });
});
