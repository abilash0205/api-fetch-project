//! API Fetch
const api_url = "https://jsonplaceholder.typicode.com/comments";

async function getApi(url) {
  // Storing response
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    // Storing data in form of JSON
    const data = await response.json();
    console.log(data);
    if (response) {
      hideLoader();
    }
    show(data);
  } catch (error) {
    hideLoader();
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.style.display = 'block';
    errorMessage.innerHTML = (error);
  }
}
// Calling that async function
getApi(api_url);

// Function to hide the loader
function hideLoader() {
  document.getElementById("loading").style.display = "none";
}

// Function to define innerHTML for HTML table
function show(data) {
  let tab = `
  <tr>
    <th class="col">ID</th>
    <th class="col">Name</th>
    <th class="col">Email</th>
    <th class="col">Message</th>
 </tr>
 `;

  // Loop to access all rows
  for (let r of data) {
    tab += `
    <tr> 
      <td>${r.id} </td>
      <td>${r.name}</td>
      <td><a href="mailto:${r.email}" class="text-decoration-none">${r.email}</a></td> 
      <td>${r.body}</td>          
    </tr>
    `;
  }
  // Setting innerHTML as tab variable
  document.getElementById("registrations").innerHTML = tab;
}
