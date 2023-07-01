var time = new Date()
var items = 0
var del_count = 0
let add_btn = document.getElementById('get-btn')

add_btn.addEventListener("click", function(){
items++
    time = new Date();
        let task = document.getElementById('get-task').value
        let desc = document.getElementById('get-desc').value

        let new_div = document.createElement('div')
        let p_id = `task${items}`
        let t_id = `t${items}`
        let d_id = `d${items}`
        new_div.setAttribute("id",p_id)
        new_div.setAttribute("class",`task`)
        new_div.setAttribute("onclick",`done_task("${task}",this)`)
        new_div.innerHTML = `<b><span id="${t_id}">${task}</span></b>
        <br><span id="${d_id}">${desc}</span>
        <br><i>Created on ${time.getDate()}/${time.getMonth() + 1}/${time.getFullYear()}<br>
        At ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} </i>`
        let div_p = document.getElementById('all-tasks')
        div_p.appendChild(new_div)
    }
)

function del_task(e){
   e.remove();
}

function done_task(task, e){
    time = new Date()
    let com = document.createElement('div')
    let box = document.getElementById('com-tasks')
    com.setAttribute("class",`task`)
    com.setAttribute("onclick",`del_task(this)`)
    com.innerHTML = `<b>${task}</b><br><i>Completed on ${time.getDate()}/${time.getMonth() + 1}/${time.getFullYear()}<br>
    At ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} </i>`
    box.appendChild(com)
    e.remove()
}

