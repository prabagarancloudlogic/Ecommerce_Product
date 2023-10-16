TitleValue = 0;
DescriptionValue = 0;
PriceValue = 0;
LimitValue = 0;
avather =0;


//  Product Title Validation Function section

function ValidatetTitle() {
  let PTitles = document.getElementById("ProductTitle").value;
  if (PTitles) {
    if (PTitles.length > 2) {
      document.getElementById("ProductTitle").style = "border:2px solid green ";
      document.getElementById("Perror1").innerHTML = "Product Title is Good ";
      document.getElementById("Perror1").style = "color:green";
      TitleValue = 1;
    } else {
      document.getElementById("ProductTitle").style = "border:2px solid red ";
      document.getElementById("Perror1").innerHTML ="Product Name Min 3 Charcter Must ";
      document.getElementById("Perror1").style = "color:red";

      TitleValue = 0;
    }
  } else {
    document.getElementById("ProductTitle").style = "border:2px solid red ";
    document.getElementById("Perror1").innerHTML ="Enter Your Product Description";
    TitleValue = 0;
  }
}

//  Product Description Validation Function section

function ValidatetDescription() {
  let ProductDescription = document.getElementById("ProductDescription").value;
  if (ProductDescription) {
    if (ProductDescription.length >= 150) {
      document.getElementById("ProductDescription").style ="border:2px solid green ";
      document.getElementById("Derror1").innerHTML ="Product Description is Good ";
      document.getElementById("Derror1").style = "color:green";
      DescriptionValue = 1;
    } else {
      document.getElementById("ProductDescription").style ="border:2px solid red ";
      document.getElementById("Derror1").innerHTML ="Product Description Min 150 Charcter Must ";
      document.getElementById("Derror1").style = "color:red";
      DescriptionValue = 0;
    }
  } else {
    document.getElementById("ProductDescription").style ="border:2px solid red ";
    document.getElementById("Derror1").innerHTML ="Enter Your Product Description";
    DescriptionValue = 0;
  }
}

//  Product price Validation Function section

function ValidatetPrice() {
  let ProductPrice = document.getElementById("ProductPrice").value;
  let numbers = /^[0-9]+$/;
  if (ProductPrice) {
    if (ProductPrice.match(numbers)) {
      document.getElementById("ProductPrice").style = "border:2px solid green ";
      document.getElementById("Priceerror1").innerHTML ="Product Price is Good ";
      document.getElementById("Priceerror1").style = "color:green";
      PriceValue = 1;
    } else {
      document.getElementById("ProductPrice").style = "border:2px solid red ";
      document.getElementById("Priceerror1").innerHTML ="Product Price Only Contain Number ";
      document.getElementById("Priceerror1").style = "color:red";
      PriceValue = 0;
    }
  } else {
    document.getElementById("ProductPrice").style = "border:2px solid red ";
    document.getElementById("Priceerror1").innerHTML = "Enter Your Product Price";
    document.getElementById("Priceerror1").style = "color:red";
    PriceValue = 0;
  }
}

// Product limit Validation Function section

function ValidatetLimit() {
  let ProductLimit = document.getElementById("ProductLimit").value;
  let numbers = /^[0-9]+$/;
  if (ProductLimit) {
    if (ProductLimit.match(numbers)) {
      document.getElementById("ProductLimit").style = "border:2px solid green ";
      document.getElementById("Plerror1").innerHTML = "Product limit is Good ";
      document.getElementById("Plerror1").style = "color:green";
      LimitValue = 1;
    } else {
      document.getElementById("ProductLimit").style = "border:2px solid red ";
      document.getElementById("Plerror1").innerHTML = "Product limit Only Contain Number ";
      document.getElementById("Plerror1").style = "color:red";
      LimitValue = 0;
    }
  } else {
    document.getElementById("ProductLimit").style = "border:2px solid red ";
    document.getElementById("Plerror1").innerHTML = "Enter Your Product limit";
    document.getElementById("Plerror1").style = "color:red";
    LimitValue = 0;
  }
}


// image check Section 
  function imgcheck(){
    let ImageAcces = document.getElementById("ImageAcces").value;
    if(ImageAcces){
      document.getElementById("imgerror1").style = "visibility: hidden";
       avather = 1;
    }
    else 
    {
       document.getElementById("imgerror1").style = "visibility: visible";
       document.getElementById("imgerror1").innerHTML = " Upload image ";
       avather = 0;
    }
  }

// Product image validation function Section 

function previewImage(event) {
  let imgextension = event.target.files[0].type.split('/')[1];
  var avatar = document.getElementById("avatar");


  if (imgextension == "jpeg" || imgextension == "jpg" || imgextension == 'png')
  {
      
        avatar.style = "display: block;";

        avatar.src = URL.createObjectURL(event.target.files[0]);
        avatar.onload = function () {
          URL.revokeObjectURL(avatar.src);
        }

        const reader = new FileReader();
        reader.onload = function(event){
          const imageData = event.target.result;
          localStorage.setItem("imageData",imageData);

        };
        reader.readAsDataURL(event.target.files[0]);

        
  }
  else {
      document.getElementById("imgerror1").innerHTML = "Upload Image Format png and jpeg";
    avatar.style = "display: none;";
    
  }

}

function validation() {
  ValidatetTitle();
  ValidatetDescription();
  ValidatetPrice();
  ValidatetLimit();
  imgcheck();

  const sumvalue = TitleValue + DescriptionValue + PriceValue + LimitValue +avather  ;

  if (sumvalue == 5) {
    localStorage.setItem("ProductTitle", ProductTitle.value);
    localStorage.setItem("ProductDescription", ProductDescription.value);
    localStorage.setItem("ProductPrice", ProductPrice.value);
    localStorage.setItem("ProductLimit", ProductLimit.value);

    window.location.href = "ProductDetails.html";
  }
}
