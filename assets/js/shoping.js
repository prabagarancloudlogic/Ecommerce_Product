
//  Increment Decrement Section 
 
 var minus = document.getElementById("minus");
 var plus = document.getElementById("plus");
 var num = document.getElementById("num");
 var totalamount = document.getElementById("totalamount");

//  getthe localstorage items
 var Title = localStorage.getItem("ProductTitle");
 var Description = localStorage.getItem("ProductDescription").substring(0,100)+"...";
 var Price = localStorage.getItem("ProductPrice");
 var limit = localStorage.getItem("ProductLimit");
var selectedImageSrc = localStorage.getItem("ProductImage");

// Product Title,Description and Price section 
var productName = document.getElementById("productName");
var productDisc = document.getElementById("productDisc");
var priceValue = document.getElementById("priceValue");
var imageItems = document.getElementById("imageItem");

function getlocalStorage(){
 
   productName.innerHTML = Title;
   productDisc.innerHTML = Description;
   priceValue.innerHTML = Price;

  const imageDisplay = document.getElementById("imageItem");
  const imageData = localStorage.getItem("imageData");
  if(imageData){
    imageDisplay.src = imageData;
  }
  else{
    imageDisplay.src = "/image/mutton 1.avif ";
  }
}
getlocalStorage()


  // increment function Section 
var a = document.getElementById("num").textContent;
function increment() {
  var priceValue = document.getElementById("priceValue").innerHTML;
  if (a <= limit) {
    let incValue = a++;
    document.getElementById("num").innerHTML = incValue;
    totalamount.innerHTML = "$" + incValue * priceValue;

  } 
  else if (a >= limit) {
    document.getElementById("maxlimit").style = "visibility: visible";
  }

}

  // Decrement function Section 
function Decrement() {
  var priceValue = document.getElementById("priceValue").innerHTML;
  if (a > 0) {
      a--;
    let decValue = a;
    document.getElementById("num").innerHTML = decValue;
    totalamount.innerHTML = "$" + decValue * priceValue;
    document.getElementById("maxlimit").style = "visibility: hidden";
    
  }
}



function passvalue(){
    var num = document.getElementById("num");
    var totalamount = document.getElementById("totalamount");
    localStorage.setItem("Quantity", num.innerHTML);
    localStorage.setItem("TotalPrice", totalamount.innerHTML);
}




