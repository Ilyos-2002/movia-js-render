
let elList = selectEl("#list")
let elGenre=selectEl("#selectgenre")
let btnSubmit=selectEl("#subbtn")
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











