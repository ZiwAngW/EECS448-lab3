var array=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"]

var index=0;


pre=function(){
    let x=document.getElementById("pic")
    if(index>0)
    {
        index=index-1
        x.src=array[index]
    }
    else
    {
        index=4
        x.src=array[index]
    }
    
}

next=function(){
    let x=document.getElementById("pic")
    if(index<4)
    {
        index=index+1
        x.src=array[index]
    }
    else
    {
        index=0
        x.src=array[index]
    }
}