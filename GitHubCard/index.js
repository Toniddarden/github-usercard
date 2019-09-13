/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
// axios.get('https:api.github.com/users/Toniddarden')
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/


  // axios.get('https:api.github.com/users')
  // .then(function (response) {
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });




 

 
/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/




//Using that array, iterate over it, requesting data for each user, creating a new card for each
//user, and adding that card to the DOM.




/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
axios.get('https:api.github.com/users/Toniddarden')
.then(function (response) {
  // handle success
  console.log(response);
})
.catch(function (error) {
  // handle error
  console.log(error);
})
.finally(function () {
  // always executed
});

const entryCard = document.querySelector(".cards");

const followersArray = ['https://api.github.com/tetondan',
  'https://api.github.com/dustinmyers',
  'https://api.github.com/justsml',
  'https://api.github.com/luishrd',
  'https://api.github.com/bigknell'];

 function userCards(githubFollowers) {

  const card = document.createElement('div');
  card.classList.add('card');

  const cardImage = document.createElement('img');
  Image.src = githubFollowers.avatar_url;
  card.appendChild(cardImage); 

  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');
  card.appendChild(cardInfo);

  const name = document.createElement('h3');
  name.classList.add('name');
  name.textContent = githubFollowers.name;
  cardInfo.appendChild(name);

  const anchor = document.createElement('a');
  anchor.textContent = githubFollowers.following_url;
  
  let firstParagraph = document.createElement('p');
  firstParagraph.classList.add('username');
  firstParagraph.textContent = githubFollowers.login;
  cardInfo.appendChild(firstParagraph);
  
  let secondParagraph = document.createElement('p');
  secondParagraph.textContent = `Location: ${githubFollowers.location}`;
  cardInfo.appendChild(secondParagraph);

  let thirdParagraph = document.createElement('p');
  thirdParagraph.textContent =`Profile:  ${anchor}`;
  cardInfo.appendChild(thirdParagraph);

  let fourthParagraph = document.createElement('p');
  fourthParagraph.textContent = `Followers: ${githubFollowers.followers}`
  cardInfo.appendChild(fourthParagraph);

  let fifthParagraph = document.createElement('p');
  fifthParagraph.textContent = `Following: ${githubFollowers.following}`;
  cardInfo.appendChild(fifthParagraph);

  let sixthParagraph = document.createElement('p');
  sixthParagraph.textContent = `Bio: ${githubFollowers.bio}`
  cardInfo.appendChild(sixthParagraph);

  console.log(card);
  return card;
  

 }

 const githubFollowers = followersArray.map(data => {
  let cards = document.querySelector('.cards');
  cards.appendChild(userCards(data));
})
