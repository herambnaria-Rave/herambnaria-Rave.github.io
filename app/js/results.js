//reading the url
var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var emailQuery = urlParams.get('email');
// console.log(emailQuery);
//using a proxy server as the api is giving a cors error
var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
  targetUrl = 'https://ltv-data-api.herokuapp.com/api/v1/records.json?email=' + emailQuery;
fetch(proxyUrl + targetUrl)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    if (data.length == 0) {
      document.getElementById('resultLoading').style.display = 'none';
      document.getElementById('noResultsFound').style.display = 'block';
      document.getElementById('noResultId').innerHTML = emailQuery;
    } else {
      document.getElementById('resultLoading').style.display = 'none';
      document.getElementById('resultsCard').style.display = 'block';
      document.getElementById('name').innerHTML = data.first_name + ' ' + data.last_name;
      document.getElementById('description').innerHTML = data.description;
      document.getElementById('address').innerHTML = data.address;
      document.getElementById('emailId').innerHTML = data.email;
      document.getElementById('phoneNumbers').innerHTML = '';
      for (var i = 0; i < data.phone_numbers.length; i++) {
        var node = document.createElement('LI');
        var textnode = document.createTextNode(data.phone_numbers[i]);
        node.appendChild(textnode);
        document.getElementById('phoneNumbers').appendChild(node);
      }
      document.getElementById('relatives').innerHTML = '';
      for (var i = 0; i < data.relatives.length; i++) {
        var node = document.createElement('LI');
        var textnode = document.createTextNode(data.relatives[i]);
        node.appendChild(textnode);
        document.getElementById('relatives').appendChild(node);
      }
    }
  })
  .catch((error) => {
    console.error(error);
    //set time
    setTimeout(() => {
      document.getElementById('resultLoading').style.display = 'none';
      document.getElementById('resultError').style.display = 'block';
    }, 1000);
  });
