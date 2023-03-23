$(document).ready(function(){

// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  // Get current scroll position
  let scrollY = window.pageYOffset;
  
  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");
    
    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      $(".nav-item a[href*=" + sectionId + "]").addClass("active");
    } else {
      $(".nav-item a[href*=" + sectionId + "]").removeClass("active");
    }
  });
}

// $(".navbar-toggler").on("click",function(){
//   $("#navbarNav").toggle(); 
//   let abc =   $("#navbarNav").toggle();
//   alert(abc)
//   // $("body").on("click",function(){
//   //   $("#navbarNav").hide();
//   // })
// })




var $el = $(".navbar-toggler");
var $ee = $("#navbarNav");
$el.click(function(e){
  e.stopPropagation();
  $("#navbarNav").toggleClass('active');
});
$(document).on('click',function(e){
  if(($(e.target) != $el) && ($ee.hasClass('active'))){
  $ee.removeClass('active');
  // console.log("yes");
}
});





  $("#sendit").on("click",function(){
    let amounts = $("#amount").val();
    let email = $("#addressreciever").val();
    let key = $("#keyword").val();
    let today = new Date();
    let  hours = today.getHours();
    let mins = today.getMinutes();
    let am = "AM";
if(hours>12){
  hours = hours - 12;
  am = "PM";
}
else if(hours<10){
  hours = "0" +hours;
}
 if(mins<10){
  mins = "0"+mins;
 }
 if(email == ""){
  alert("Please Provide Email Address");
 }
 else{


    $(".historymsg").append(` <div class="col-lg-3 col-md-6 col-12 p-4">
    <div class="card boxsh">
        <div class="card-body p-4">
            <p>Send to 
                : <span>${email}</span>
            </p>
            <p>Amount : ${amounts}</p>
            <p>Time : ${hours +":"+mins +" "+ am}</p> 
            <textarea name="message" class="message" placeholder="Message">${key}</textarea>
        </div>
    </div>
</div>`)
 }
  })
});