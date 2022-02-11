//----------------------------------------LOCAL NAVIGATION
let pageTopLoc;
let topIcon = document.querySelector('.toTop');
window.addEventListener('scroll', function(){
  pageTopLoc = window.pageYOffset;
  if(pageTopLoc>10){
    topIcon.style.display = 'block';
  }
  else{
    topIcon.style.display="none";
  }
});
//---------------------------------------------Modal3 (Pre-Order)
let btn = document.querySelector('.button');
//used named function
btn.addEventListener('click', clickAgain, false);
function clickAgain(){
  alert('Be patience gamer. The pre-order will be available soon');
}
//---------------------------------------------------CHECKOUT
function passvalues(){
  location.href="checkout_FahimNaytik.html";
}

function passvalues2(){
  location.href="checkout_StardewValley.html";}

//---------------------------------------------------TAKES TO thankyou.html
function passvalues3(){
  location.href="thankyou.html";
  let n = document.querySelector('#un').value;
  localStorage.setItem('username',n);
  console.log(username);}
