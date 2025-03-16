let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector('button');


btn.addEventListener( 'click' , async () => {
let country = document.querySelector("input").value;
console.log(country);

let clgList = await getClg(country)
show(clgList)
});


function show(clgList) {
    let list = document.querySelector('#list');
    
    for (const college of clgList) {
        console.log(college.name);
        let li = document.createElement("li")
        li.textContent = college.name
        list.appendChild(li)
    }
}



async function getClg(country) {
  try {
    let res = await axios.get(url + country);
    return res.data;
  } catch (e) {
    console.log(`Error`, e);
    return "No college Data Found";
  }
}
