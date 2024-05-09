let todo = document.getElementById('todo');
let todoList = document.querySelector('.todoList');

todo.addEventListener('keypress',(e)=>{
    if(e.key == 'Enter'){
        if(todo.value!='')
      {let li = document.createElement('li');
        li.innerHTML = `${todo.value}`;
        todoList.appendChild(li);
        todo.value='';
        let img = document.createElement('img');
        img.src = 'image/pngwing.com (2).png';
        img.className = 'done';
        let img1 = document.createElement('img');
        img1.src = 'image/pngwing.com (1).png';
        img1.className = 'done';
        let div = document.createElement('div');
        div.className = 'images';
        li.appendChild(div);
        div.appendChild(img);
        div.appendChild(img1);
        div.addEventListener('click',(e)=>{
            // console.log(div.parentElement.parentElement);
           div.parentElement.parentElement.removeChild(div.parentElement);
        })}
    }

})

//   todoList.innerHTML+=`<li> ${todo.value} 
//         <div class="images">
//         <img src="image/pngwing.com (2).png" class="done" alt="">
//         <img src="image/pngwing.com (1).png" class="cancel" alt="">
//         </div>
//         </li>`
      
