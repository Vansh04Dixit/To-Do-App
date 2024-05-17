let inp = document.querySelector("#tasks");
let button = document.querySelector("#sub");
let UnorderedList = document.querySelector("ul");


button.addEventListener("click",function(){
    
    let ListItems = document.createElement("li");
    ListItems.innerText = inp.value;
    inp.value = "";
    //Remvoing bullets from list.
    ListItems.style.listStyle = "none";


    let DeleteButton = document.createElement("button")
    DeleteButton.innerText =  "Done";
    DeleteButton.classList.add(".delete");
    ListItems.appendChild(DeleteButton);

    DeleteButton.classList.remove("styling");
    DeleteButton.classList.add("styling-2");

    UnorderedList.appendChild(ListItems);
    
})


document.querySelector("ul").addEventListener("click",(event)=>{
if(event.target.nodeName == "BUTTON"){
    let final = event.target.parentElement;
    final.remove();
    console.log("Deleted")
}}
)

