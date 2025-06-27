// fetch(url)
//   .then((res) => {
//     console.log(res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//     console.log("data 1: ", data.fact);
//     return fetch(url);
//   })
//   .then(res2 => {
//     return res2.json();
//   })
//   .then(data2 => {
//     console.log("data 2: ", data2.fact);
//   })
//   .catch((err) => {
//     console.log("Error - ", err);
//   });

// async function getCatFact(url) {
//   let response = await fetch(url);
//   let data = await response.json();

//   console.log(data);
//   console.log(data.fact);
// }

let url = "https://catfact.ninja/fact";
let dogUrl = "https://dog.ceo/api/breeds/image/random";
let jokeUrl = "https://icanhazdadjoke.com/";

async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    } catch(e) {
        console.log("Error - ", e);
        return "No fact found";
    }
}

async function getDogImg() {
    try {
        let res = await axios.get(dogUrl);
        return res.data.message;
    } catch (err) {
        console.log("Error - ", err);
        return "No Dog Image Found";
    }
}

async function getJoke() {
    try {
        const config = {headers : {Accept : "application/json"}};
        let res = await axios.get(jokeUrl, config);
        return res.data.joke;
    } catch (err) {
        console.log(err);
        return "No Joke found!"
    }
}

async function getCollegList() {
    let country = document.querySelector('input').value || "India";
    let url = `http://universities.hipolabs.com/search?name=${country}`;
    let res = await axios.get(url);
    return res.data;
}


let catBtn = document.querySelector("#cat-btn");
let dogBtn = document.querySelector("#dog-btn");
let jokeBtn = document.querySelector("#joke-btn");
let clgLstBtn = document.querySelector("#clg-btn");
// document.querySelector('input').value = "India";

catBtn.addEventListener("click", async () => {
    let fact = await getFacts(url);
    let p = document.querySelector("#cat-fact");
    p.innerText = fact;
})

jokeBtn.addEventListener("click", async () => {
    let joke = await getJoke(url);
    let p = document.querySelector("#joke");
    p.innerText = joke;
})

dogBtn.addEventListener("click", async () => {
    let dogImgUrl = await getDogImg();
    let img = document.createElement('img');
    img.setAttribute("src", `${dogImgUrl}`);
    img.classList.add('size');
    let div = document.querySelector("#dog-img-container");

    // Remove all existing children
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
    // Append the new image
    div.append(img);
})

clgLstBtn.addEventListener("click", async () => {
    let data = await getCollegList();
    console.log(data);

    let title = document.createElement('h3');
    title.innerText = document.querySelector('input').value;

    let ul = document.createElement('ul');
    for (let obj of data) {
        let clgName = obj.name;
        let clgUrl = obj.web_pages[0];

        let li = document.createElement('li');
        li.innerText = clgName;
        
        let a = document.createElement('a');
        a.innerText = "Click to visit";
        a.classList.add('btn');
        a.classList.add('search');

        a.setAttribute('href', clgUrl);
        a.setAttribute('target', '_blank');

        li.append(a);
        ul.append(li);
    }

    let container = document.querySelector('.clg-lst-container');

    while (container.firstElementChild) {
        container.removeChild(container.firstElementChild);
    }

    container.append(title);
    container.append(ul);
})