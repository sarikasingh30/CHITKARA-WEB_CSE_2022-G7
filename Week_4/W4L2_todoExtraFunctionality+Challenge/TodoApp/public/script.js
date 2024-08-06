const btn = document.querySelector(".btn");
const newtask = document.querySelector(".newtask");
const taskList = document.querySelector(".tasklist");


taskList.addEventListener("click", async(ev)=>{
    console.log(ev.target.classList.value)
    // console.log(ev.target.getAttribute("atrid"))
    let taskID=ev.target.getAttribute("atrid")
    if(ev.target.classList.value=="deleteBtn"){
        try {
            let {data}=await axios.post("/deletetodos",{id:taskID})
            mapTodo(data)
        } catch (error) {
            console.log(error)
        }
    }
    if(ev.target.classList.value=="upBtn"){
      try {
        let {data} = await axios.post('/increasepriority',{id:taskID})
        mapTodo(data)
      } catch (error) {
        console.log(error)
      }
    }
    if(ev.target.classList.value=="downBtn"){
      try {
        let {data} = await axios.post('/decreasepriority',{id:taskID})
        mapTodo(data)
      } catch (error) {
        console.log(error)
      }
    }
})



btn.addEventListener("click", async (ev) => {
  try {
    ev.preventDefault();
    let tvalue = newtask.value;
    if (tvalue) {
      let { data } = await axios.post("/addtodos", { name: tvalue });
      mapTodo(data);
      newtask.value = "";
    } else {
      alert("Fill the detail");
    }
  } catch (error) {
    console.log(error);
  }
});

async function getTodos() {
  try {
    let { data } = await axios.get("/gettodos");
    mapTodo(data);
  } catch (err) {
    console.log(err);
  }
}
getTodos();

function mapTodo(data) {
  taskList.innerHTML = "";
  data.forEach((el) => {
    let li = document.createElement("li");
    li.innerHTML = `<span>${el.id} - ${el.name}</span>
              <div class="btnGroup">
                  <button class="upBtn" atrid=${el.id}>↑</button>
                  <button class="downBtn" atrid=${el.id}>↓</button>
                  <button class="deleteBtn" atrid=${el.id}>❌</button>
              </div>
              `;
    li.classList.add("item");
    taskList.appendChild(li);
  });
}




