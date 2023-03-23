// const selectAll = document.querySelector(".all");
// const sort = document.querySelector(".sorted");
// const search = document.querySelector(".search");
// const module_image = document.querySelector(".module-image");
// const module_genre = document.querySelector(".module-genre");
// const description = document.querySelector(".description");
// const module_see = document.querySelector(".module-see");
// const closeBtn = document.querySelector(".close");
// const mod = document.querySelector(".mod");
// let genre = [];

// if (search.value == "") {
//   for (let i = 0; i < films.length; i++) {
//     let date = new Date(films[i].Year);
//     createCard(
//       films[i].Poster,
//       films[i].Title,
//       date.toLocaleDateString(),
//       films[i].id
//     );
//   }
// }
// films.forEach((film) => {
//   film.genres.forEach((genres) => {
//     genre.includes(genres) ? null : genre.push(genres);
//   });
// });

// genre.forEach((e) => {
//   let option = document.createElement("option");
//   option.textContent = e;
//   option.value = e;
//   selectAll.append(option);
// });

// let submit = document.querySelector(`.submit`);
// submit.addEventListener("click", () => {
//   box.innerHTML = "";

//   output = selectAll.options[selectAll.selectedIndex].value;
//   sortValue = sort.options[sort.selectedIndex].value;
//   let sorted = [];

//   films.forEach((film) => {
//     film.genres.includes(output) ? null : sorted.push(film);
//   });

//   if (selectAll == "all") {
//     sorted = films;
//   }

//   if (sortValue == "a-z") {
//     let arr = sorted.sort((a, b) => {
//       return a.Title > b.Title ? 1 : -1;
//     });
//   } else if (sortValue == "z-a") {
//     let arr = sorted.sort((a, b) => {
//       return a.Title < b.Title ? 1 : -1;
//     });
//   } else if (sortValue == "new") {
//     let arr = sorted.sort((a, b) => {
//       return b.Year - a.Year;
//     });
//   } else {
//     let arr = sorted.sort((a, b) => {
//       return a.Year - b.Year;
//     });
//   }

//   let value = search.value;
//   let find = sorted.filter((item) =>
//     item.Title.toLowerCase().includes(value.toLowerCase())
//   );
//   find.forEach((film) => {
//     let date = new Date(film.Year);
//     createCard(film.Poster, film.Title, date.toLocaleDateString(), film.id);
//   });
//   search.value = "";
// });

// const info = document.querySelectorAll(`.info`);
// info.forEach((e) => {
//   e.addEventListener("click", (element) => {
//     module_genre.innerHTML = "";
//     let card = films.find((item) => {
//         return item.id == element.target.dataset.id;
//     });
//     module_image.src = card.Poster;
//     card.genres.forEach((genre) => {
//         let createLi = document.createElement("li");
//         createLi.textContent = genre;
//         module_genre.append(createLi);
//     })
//     description.textContent = card.overview;
//     module_see.href = card.link;
//     mod.style.display = "flex";
//   });

// });

// closeBtn.addEventListener("click", ()=>{
//     mod.style.display = "none";
// })
// function timeYear(params) {
//     let a=params%3600;
//     let b=params%60

// }

let elList = selectEl("#list")
let elGenre=selectEl("#selectgenre")
let btnSubmit=selectEl("#subbtn")
// let newSelGen=selectEl("#selectgenre")
let arrGenr = []
let sortFilm=[]
function renderFunct(array, element) {
    array.forEach(film => {
        let newLi = creatEl("li");
        let newImg = creatEl("img");
        let newH2 = creatEl("h2");
        let newP = creatEl("p");
        let newBtn = creatEl("button");

        setAtt(newLi, "class", "flex flex-col items-center justify-and gap-2 rounded-lg p-2 pb-3 pt-5 bg-black")
        setAtt(newImg, "src", film.Poster)
        setAtt(newImg, "class", "rounded-lg w-[204px] h-[300px]")
        setAtt(newH2, "class", "capitalize font-bold font-x text-xl text-center w-4/5 h-10 mb-7")
        setAtt(newP, "class", "text-lg font-semibold m-3")
        setAtt(newBtn, "class", "py-1 px-4 h-9 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75")
        setAtt(newBtn, "type", "button")


        newH2.textContent = film.Title;
        newP.textContent = film.Year;
        newBtn.textContent = "More";

        newLi.append(newImg, newH2, newP, newBtn);
        elList.append(newLi)


    });
}
renderFunct(films, elList)
function sortGenr(array) {
    array.forEach(film => {
        film.genres.forEach((genre)=>
        arrGenr.includes(genre) ? null : arrGenr.push(genre));
    })
}
sortGenr(films)

function oppGenre(array) {
    array.forEach(film=> {
    let newOpt=creatEl("option")
    newOpt.textContent = film;
    elGenre.append(newOpt)

    });
    
    
}
oppGenre(arrGenr)

btnSubmit.addEventListener("submit", (evt)=> {
    box.innerHTML = ""
   console.log(btnSubmit);
})

console.log(elGenre);











