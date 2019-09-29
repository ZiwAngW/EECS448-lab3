
//let check=document.querySelector("#varify")

update = function () {
var first = document.querySelector("#user").value
var second = document.querySelector("#user2").value
  if(first.length>=8 && second.length>=8)
  {
    if(first===second)
    {
        document.querySelector("#output").innerHTML="Password Match!"
    }
    else
    {
        document.querySelector("#output").innerHTML="Password Not Match!"
    }
  }
  else
  {
    document.querySelector("#output").innerHTML="Password Need at least Eight Digits!"
  }


}




