function toggleVisibilityHome(){
  document.getElementById("home").style.display = "block";
  document.getElementById("catalog").style.display = "none";
  document.getElementById("campaign").style.display = "none";
  document.getElementById("price_list").style.display = "none";
  document.getElementById("contact").style.display = "none";
}
function toggleVisibilityCatalog(){
  document.getElementById("home").style.display = "none";
  document.getElementById("catalog").style.display = "block";
  document.getElementById("campaign").style.display = "none";
  document.getElementById("price_list").style.display = "none";
  document.getElementById("contact").style.display = "none";
}

function toggleVisibilityCampaign(){
  document.getElementById("home").style.display = "none";
  document.getElementById("catalog").style.display = "none";
  document.getElementById("campaign").style.display = "block";
  document.getElementById("price_list").style.display = "none";
  document.getElementById("contact").style.display = "none";
}
function toggleVisibilityPriceList(){
  document.getElementById("home").style.display = "none";
  document.getElementById("catalog").style.display = "none";
  document.getElementById("campaign").style.display = "none";
  document.getElementById("price_list").style.display = "block";
  document.getElementById("contact").style.display = "none";
}
function toggleVisibilityContact(){
  document.getElementById("home").style.display = "none";
  document.getElementById("catalog").style.display = "none";
  document.getElementById("campaign").style.display = "none";
  document.getElementById("price_list").style.display = "none";
  document.getElementById("contact").style.display = "block";
}
