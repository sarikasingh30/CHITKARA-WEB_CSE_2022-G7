const btn = document.querySelector('.btn');
const newtask = document.querySelector('.newtask');
const taskList = document.querySelector('.tasklist');



taskList.addEventListener("click",async (ev)=>{
    if(ev.target.classList.contains('deleteBtn')){
        try{
                const taskid=ev.target.getAttribute('atrid');
                console.log(`delete task id: ${taskid}`);
                const {data}=await axios.post(`/deletetodos`,{id:taskid});
                console.log(data);
                maptodo(data)
            }
        catch(err){
            console.log(err)
        }
    }
})



btn.addEventListener("click",async(ev)=>{
    try {
    ev.preventDefault()
    console.log("Hello")
    let tvalue=newtask.value
    if(tvalue){
        let {data}=await axios.post("/addtodos",{
            name:tvalue
        })
        // console.log(data)
        maptodo(data)
        newtask.value=""
    }
    else{
        alert("Fill the task input")
    }
    } catch (error) {
        console.log(error)
    }
})


async function getTodoApp(){
    try{
        let {data}=await axios.get("/gettodos")
        // console.log(data)
        maptodo(data)    
        
    }
    catch(err){
        console.log(err)
    }
}
getTodoApp()

function maptodo(data){
    taskList.innerHTML=""
    data.forEach((el)=>{
        let li=document.createElement("li")
        li.innerHTML=` <span>${el.id} - ${el.name}</span>
        <div class="btnGroup">
            <button class="upBtn" atrid=${el.id}>↑</button>
            <button class="downBtn" atrid=${el.id}>↓</button>
            <button class="deleteBtn" atrid=${el.id}>❌</button>
        </div>`
        li.classList.add("item")
        taskList.appendChild(li)
    })    
     
}