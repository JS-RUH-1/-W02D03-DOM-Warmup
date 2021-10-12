let url;
let title;
document.addEventListener("change",function(){
    url = document.getElementById("url").value;
    title = document.getElementById("title").value;
    console.log(url)
    console.log(title)
})
function addBook() {
    if(url == undefined || title == undefined){
        alert("please Type to let it empty")
    }else if(url != undefined || title != undefined){
        let li = document.createElement("li");
        li.innerHTML = `
            <img src="${url}" alt="">
            <h2>${title}</h2>
            <button class="delete" onclick="deleteBook(this)">Delete</button>
        `;
            li.classList.add("container");
    
        document.body.appendChild(li);
        
    }


  }


function deleteBook(element){
        element.parentNode.remove()


}