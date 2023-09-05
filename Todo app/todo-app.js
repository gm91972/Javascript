const btn = document.getElementById('btn');
const input = document.getElementById('input');
const box = document.querySelector('.to-do-box')

btn.addEventListener('click', function () {

    let task = document.createElement('div');
    task.classList.add("task");

    let li = document.createElement('li')
    li.innerText = `${input.value}`;
    task.appendChild(li);

    let checkBtn = document.createElement('button');
    checkBtn.innerHTML = '&#10003;';
    checkBtn.classList.add("checktask");
    task.appendChild(checkBtn);

    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '&#10005;';
    deleteBtn.classList.add("deletetask");
    task.appendChild(deleteBtn);

    if(input.value == ''){
        alert('Please Enter a Task');
    }
    else{
        box.appendChild(task);
    }
    input.value = '';

    checkBtn.addEventListener('click', function(){
       checkBtn.previousElementSibling.style.textDecoration = "line-through";
    });

    deleteBtn.addEventListener('click', function(e){
        let target = e.target;
        target.parentElement.remove();
    });
});
