var popupoverlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popup-box");
var addpopupbutton = document.getElementById("add-popup-button");

addpopupbutton.addEventListener("click", function () {
    popupoverlay.style.display = "block";
    popupbox.style.display = "block";
});
//select cancel button;
var cancelpopup=document.getElementById("cancel-popup")
cancelpopup.addEventListener("click", function(){
    event.preventDefault()
       popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});
    
//select task2,add-book,book-title-input,book-author-input,book-description-input;
var task1=document.querySelector(".task1")
var addbook=document.getElementById("add-book");
var booktitleinput=document.getElementById("book-title-input");
var bookauthorinput=document.getElementById("book-author-input")
var bookdescrpitioninput=document.getElementById("book-description-input")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","task2")
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
      <h5>${bookauthorinput.value}</h5>
      <p>${bookdescrpitioninput.value}
      </p>
      <br />
       <button onclick="deletebook(event)">delete</button>`
    task1.append(div)
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
})
function deletebook(event){
    event.target.parentElement.remove()

}