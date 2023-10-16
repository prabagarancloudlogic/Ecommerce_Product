function passvalue() {
  let pName = document.getElementById("pName");
  let pDiscrib = document.getElementById("pDiscrib");
  let pQuantity = document.getElementById("Quantity");
  let pTotal = document.getElementById("TotalAmount");
  let pImage = document.getElementById("imageItem");

  // local assign
  let productName = localStorage.getItem("ProductTitle");
  let productDis = localStorage.getItem("ProductDescription");
  let productQuantity = localStorage.getItem("Quantity");
  let TotalAmount = localStorage.getItem("TotalPrice");
  let imageData = localStorage.getItem("imageData");

  pName.innerHTML = productName;
  pDiscrib.innerHTML = productDis;
  pQuantity.innerHTML = productQuantity;
  pTotal.innerHTML = TotalAmount;
  pImage.src = imageData;
}
passvalue();

function order(){
  let productName = document.getElementById("pName");
    swal({
      title: "Are you sure?",
      text: "Once You Submitted , your order Will be Confirmed !",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal(productName.innerHTML," order Will be Confirmed !", {
          icon: "success",
        });
      } else {
        
        swal("Sorry!", "Opps, something went wrong. Please try again later.", "error");
         
      }
    });
}