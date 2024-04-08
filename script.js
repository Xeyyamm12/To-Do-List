const btn = document.querySelector(".add");
const inp = document.querySelector("input");
const cancel = document.querySelector(".cancel");
const ol = document.querySelector('ol');
const listTask=document.querySelector('.list-task')
const inputImg =document.querySelector('.input-img')
const tasks = [];

btn.addEventListener("click", () => {
    console.log(inp.value)
    if (inp.value.trim() === "") {
      alert("Write something");
    }
    else{
        listTask.style.display = 'block';
        const list = document.createElement('li');
        const p = document.createElement('p');
        ol.append(list);
        list.append(p);
        p.textContent = inp.value.trim();
        const imgElement = document.createElement("img");
        list.append(imgElement)
        list.style.display = 'flex';
        list.style.justifyContent = 'space-between';
        list.style.width = '250px'
        imgElement.src ="/img/cancel.png";
        imgElement.classList.add("imgelement");
        tasks.push(list)
        console.log(tasks)
        imgElement.addEventListener("mouseover", (event) => {
          event.target.src ="/img/cancelfull.png";
        });
        
        imgElement.addEventListener("mouseleave", (event) => {
            event.target.src ="/img/cancel.png";
          });
          imgElement.addEventListener("click", ()=>{
                list.remove();
          })
         
    }
   
})
inputImg.addEventListener("click", ()=>{
    inp.value= " ";
  })
  inputImg.addEventListener("mouseover", (event) => {
    event.target.src ="/img/cancelfull.png";
  });
  
  inputImg.addEventListener("mouseleave", (event) => {
      event.target.src ="/img/cancel.png";
    });
