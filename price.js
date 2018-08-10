var price_seat=0;
var price_premium_val=0;
var price_optional_val=0;
var total=0;

var seat_choice=""
var premium_choice=""
var optional_choice=""
var row_choice=""
var first_name=""
var last_name=""
var check1=false
var check2=false

function information() {
price_info=localStorage.getItem("price_seat");
premium_info=localStorage.getItem("price_premium_val");
optional_info=localStorage.getItem("price_optional_val");
row_info=localStorage.getItem("row_optional_val");


}
function name_save(){
   first_name = document.getElementById("fname").value;
      //document.getElementById("name").innerHTML = first_name;


   last_name = document.getElementById("lname").value;
      //document.getElementById("name").innerHTML = last_name;
  var saved_first=localStorage.setItem("first_name",first_name);
  var saved_last=localStorage.setItem("last_name",last_name);
}

function name_check(saved_first,saved_last){
  information_check();
  var first_name_check2=localStorage.getItem(saved_first)
  var last_name_check2=localStorage.getItem(saved_last)
  var first_name_check= document.getElementById("fnamecheck").value;
  var last_name_check= document.getElementById("lnamecheck").value;

if (first_name_check==first_name_check2)
  {
    console.log("check")
  check1=true
  }

if (last_name_check==last_name_check2)
  {
  console.log("checking")
  check2=true
  }

if (check1==true && check2==true)
  {
    alert("Your Are In"+price_info+"With"+premium_info+"and"+optional_info+"Your Row Number is "+row_info)
  }
else
  {
  alert("Wrong First Name or Last Name")

  }
}

function information_check(){
information();
  // Row Info
if (row_info==1)
row_choice=1

if (row_info==2)
row_choice=2

if (row_info==3)
row_choice=3

if (row_info==4)
row_choice=4

if (row_info==5)
row_choice=5

if (row_info==6)
row_choice=6

if (row_info==7)
row_choice=7

if (row_info==8)
row_choice=8

if (row_info==9)
row_choice9

if (row_info==10)
row_choice=10
// Premium information
if (premium_info==0)
premium_info=" No Premium Seating "

if (premium_info==75)
premium_info=" Premium Seating "

//Optional information

if (optional_info==0)
optional_info=" No Parking "

if (optional_info==50)
optional_info=" Parking "

//Seat selction information

if (price_info==50)
price_info=" Section 100 "

if (price_info==75)
price_info=" Section 200 "


if (price_info==100)
price_info=" Section 300 "

}

function information_display(){
information();
  // Row Info
if (row_info==1)
row_choice=1

if (row_info==2)
row_choice=2

if (row_info==3)
row_choice=3

if (row_info==4)
row_choice=4

if (row_info==5)
row_choice=5

if (row_info==6)
row_choice=6

if (row_info==7)
row_choice=7

if (row_info==8)
row_choice=8

if (row_info==9)
row_choice9

if (row_info==10)
row_choice=10
// Premium information
if (premium_info==0)
premium_info=" No Premium Seating "

if (premium_info==75)
premium_info=" Premium Seating "

//Optional information

if (optional_info==0)
optional_info=" No Parking "

if (optional_info==50)
optional_info=" Parking "

//Seat selction information

if (price_info==50)
price_info=" Section 100 "

if (price_info==75)
price_info=" Section 200 "


if (price_info==100)
price_info=" Section 300 "

alert("Your Are In"+price_info+"With"+premium_info+"and"+optional_info+"Your Row Number is "+row_info)

}

function seat_price() {
   seat = document.getElementById("seat_selection");
   alert(seat.options[seat.selectedIndex].value);
   price_seat=seat.options[seat.selectedIndex].value;
   localStorage.setItem("price_seat",price_seat);
}

function premium_price() {
   price_premium = document.getElementById("premium_selection");
  alert(price_premium.options[price_premium.selectedIndex].value);
  price_premium_val=price_premium.options[price_premium.selectedIndex].value;
  localStorage.setItem("price_premium_val",price_premium_val);

}

function optional_price(){
   price_optional = document.getElementById("optional_selection");
  alert(price_optional.options[price_optional.selectedIndex].value);
  price_optional_val=(price_optional.options[price_optional.selectedIndex].value);
  localStorage.setItem("price_optional_val",price_optional_val);
  }

function total_price(){
  seat = document.getElementById("seat_selection");
  price_seat=(seat.options[seat.selectedIndex].value);
  price_premium = document.getElementById("premium_selection");
  price_premium_val=(price_premium.options[price_premium.selectedIndex].value);
  price_optional = document.getElementById("optional_selection");
  price_optional_val=(price_optional.options[price_optional.selectedIndex].value);
 total=0.0+Number(price_premium_val)+Number(price_optional_val)+Number(price_seat);
 localStorage.setItem("total",total);
  alert("$"+total);
}

function row_check(){
  row_optional = document.getElementById("row_selection");
 alert(price_optional.options[row_optional.selectedIndex].value);
 row_optional_val=(row_optional.options[row_optional.selectedIndex].value);
 localStorage.setItem("row_optional_val",row_optional_val);
}


function check() {
  toal=localStorage.getItem("total");
  alert("$"+toal);
}

function leave(){
  seat_price();
  premium_price();
  optional_price();
  row_check();
}
