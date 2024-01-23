//JSON 
//JavaScript Object Notation

// propojime elementy se tridou "wrapper"
// [0] - z techto elementu vybereme prvni element v poli
const wrapper = document.getElementsByClassName("wrapper")[0];

// funkce pro nacteni dat 
// async - oznacujeme ze funkce je asynchroni - funkce musi byt oznacena pokud chceme pouzivat slovov await 
// await - cekame nez se vykona nejaka vec (funguje jen pro veci typu Promise)
const loadData = async () => {
    // fetch(url) - nacte data z urcite url - v nasem pripade z lokalni adresy
    const file = await fetch("./res/data/computers.json");
    // .json() prekonvertuje urcitou promennou na datovy format json - na js objekty
    const data = await file.json();
    // vrati promennou data do mista volani funkce - tam kde piseme loadData();
    return data;
}

// window.onload - kdyz se nacte stranka, tak se provede arrow funkce
window.onload = async () => {
    // pockame si nez se nactou data
    const data = await loadData();
    // forEach/map slouzi pro procykleni pole v JS - pro kazdy prvek z pole se provede funkce
    // do funkce muzeme dat max 3 parametry. Do prvniho se ulozi hodnota z pole, do druheho index, do tretiho samotne pole
    /*data.forEach((computer) => {
        console.log(computer.name);
        console.log(computer.cpu)
        console.log(computer.disks)
    })*/
    data.map((computer) => {
        wrapper.innerHTML += `
        <h1>${computer.name}</h1>    
        <p>${computer.gpu}</p>      
        <p>${computer.cpu}</p>  
        <p>${computer.motherboard}</p> 
        <p>${computer.ram}</p> 
        <p>${computer.psu}</p> 
        <p>${computer.disks}</p>  
        `
    })
}