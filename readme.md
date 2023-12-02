# Game Calander 
## By Rabhi Alqadi

deployed site: [click here](https://sealproject1-eight.vercel.app/)

## Description on Project



> I am currently developing a website that aims to provide users with a convenient platform for checking the release dates of upcoming video games throughout the entire year. By leveraging the RAWG Video Games Database API, users will have access to a comprehensive and up-to-date list of game releases. The website's functionality involves utilizing JavaScript to fetch game data based on user queries and display relevant information, such as release dates and titles. This initiative seeks to offer gaming enthusiasts a centralized and user-friendly resource to stay informed about the latest game launches, enhancing their overall gaming experience.






## Details about the API



-"https://api.rawg.io/api"
 this line of code will run an array of 20 game titles of assasin creed
```js
function getGame(GameTitle) {
  const url = `${baseURL}/games?key=${apiKey}&search=${GameTitle}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
}

getGame("Assassin's Creed");
```
the Data i get back:
```json
{slug: 'assassins-creed', name: "Assassin's Creed", playtime: 5, platforms: Array(4), stores: Array(3), …}
1
: 
{slug: 'assassins-creed-rebellion', name: "Assassin's Creed: Rebellion", playtime: 0, platforms: Array(2), stores: Array(2), …}
2
: 
{slug: 'assassins-creed-valhalla', name: "Assassin's Creed Valhalla", playtime: 3, platforms: Array(5), stores: Array(4), …}
3
: 
{slug: 'assassins-creed-origins', name: "Assassin's Creed Origins", playtime: 30, platforms: Array(3), stores: Array(3), …}
4
: 
{slug: 'assassins-creed-bloodlines', name: "Assassin's Creed: Bloodlines", playtime: 6, platforms: Array(1), stores: Array(1), …}
5
: 
{slug: 'assassins-creed-syndicate-2', name: "Assassin's Creed Syndicate", playtime: 22, platforms: Array(3), stores: Array(4), …}
6
: 
{slug: 'assassins-creed-odyssey', name: "Assassin's Creed Odyssey", playtime: 33, platforms: Array(4), stores: Array(5), …}
7
: 
{slug: 'assassins-creed-identity', name: 'Assassin’s Creed: Identity', playtime: 0, platforms: Array(2), stores: Array(2), …}
8
: 
{slug: 'assassins-creed-revelations', name: "Assassin's Creed Revelations", playtime: 14, platforms: Array(5), stores: Array(4), …}
9
: 
{slug: 'assassins-creed-unity-2', name: "Assassin's Creed Unity", playtime: 16, platforms: Array(3), stores: Array(3), …}
10
: 
{slug: 'assassins-creed-brotherhood-2', name: 'Assassin’s Creed Brotherhood', playtime: 15, platforms: Array(6), stores: Array(3), …}
11
: 
{slug: 'assassins-creed-rogue-2', name: 'Assassin’s Creed Rogue', playtime: 12, platforms: Array(6), stores: Array(4), …}
12
: 
{slug: 'assassins-creed-mirage', name: "Assassin's Creed Mirage", playtime: 0, platforms: Array(6), stores: Array(2), …}
13
: 
{slug: 'assassins-creed-chronicles', name: "Assassin's Creed Chronicles", playtime: 0, platforms: Array(4), stores: Array(2), …}
14
: 
{slug: 'assassins-creed-chronicles-india-2', name: 'Assassin’s Creed Chronicles: India', playtime: 3, platforms: Array(4), stores: Array(4), …}
15
: 
{slug: 'assassins-creed-chronicles-china-2', name: 'Assassin’s Creed Chronicles: China', playtime: 4, platforms: Array(4), stores: Array(4), …}
16
: 
{slug: 'assassins-creed-chronicles-russia-2', name: 'Assassin’s Creed Chronicles: Russia', playtime: 3, platforms: Array(4), stores: Array(4), …}
17
: 
{slug: 'assassins-creed-ii', name: "Assassin's Creed II", playtime: 14, platforms: Array(6), stores: Array(3), …}
18
: 
{slug: 'assassins-creed-rogue-remastered-2', name: 'Assassin’s Creed Rogue Remastered', playtime: 0, platforms: Array(2), stores: Array(2), …}
19
: 
{slug: 'assassins-creed-pirates', name: "Assassin's Creed Pirates", playtime: 3, platforms: Array(3), stores: Array(2), …}
```

## Mockup

#### Desktop View

![My Desktop View]([img]https://i.imgur.com/TrGizkU.png[/img])

#### Mobile View

![My Mobile View]([img]https://i.imgur.com/TrGizkU.png[/img])



## Schedule of Work

|Day | Goal | What I did accomplish |
|----|------|-----------------------|
| Sat | Create Readme, Deploy, Get Approval| |
| Sun | Build fetch of data in JS file ||
| Mon | Render data from API on screen ||
| Tues| Build form for user to interact with ||
| Wed | wrap up functionality ||
|Thurs| mobile layout styling ||
| Fri | Desktop layout styling ||
| Sat | Present Project ||