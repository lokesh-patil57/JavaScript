let btn = document.querySelector("button");
let url = "https://dog.ceo/api/breeds/image/random";


btn.addEventListener("click" , async () => {
    let link = await getImg()
    let imgg = document.querySelector('#result');
    imgg.setAttribute("src" , link)
    
})

async function getImg() {
  try {
    let res = await axios.get(url);
    let data = res.data
    let msg = data.message
    
    return msg;
  } catch (e) {
    console.log(`Eroor`, e);
    return "/";
  }
}
