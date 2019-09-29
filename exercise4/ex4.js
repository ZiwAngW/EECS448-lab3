function comfirm(){
    var par=document.getElementById("di")
    var redb=document.getElementById("redborder").value
    var greenb=document.getElementById("greenborder").value
    var blueb=document.getElementById("Blueborder").value

    var width=document.getElementById("widthborder").value

    var redback=document.getElementById("redback").value
    var greenback=document.getElementById("greenback").value
    var blueback=document.getElementById("Blueback").value

    var sumb=redb+greenb+blueb
    var sumback=redback+greenback+blueback
    par.style.borderColor="#"+sumb
    par.style.borderWidth=width+"px"
    par.style.backgroundColor="#"+sumback


}