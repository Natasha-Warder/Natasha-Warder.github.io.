
window.onload=init;

function init()
{
    console.log("window has loaded");
    state.i=1;
    state.j=1;

    
}

var state = {
    i : 0,
    j:0,

};

function nextdress()
{
    console.log("inside function nextdress");
    console.log(state.i);
    var dress=document.getElementById("clothes");
    if(state.i===0){
    dress.setAttribute("class","dress1");
        state.i++;
        console.log(state.i);
    }
    else
     if(state.i===1){
    dress.setAttribute("class","dress2");
         state.i++;
         console.log(state.i);
    }
    else
     if(state.i===2){
    dress.setAttribute("class","dress3");
         state.i=0;
    }
    
}

function nextshoe()
{
    console.log("inside function nextshoe");
    console.log(state.j);
    var shoe=document.getElementById("shoes");
    if(state.j===0){
    shoe.setAttribute("class","shoe1");
        state.j++;
        console.log(state.j);
    }
    else
     if(state.j===1){
    shoe.setAttribute("class","shoe2");
         state.j++;
         console.log(state.j);
    }
    else
     if(state.j===2){
    shoe.setAttribute("class","shoe3");
         state.j=0;
    }
    
}

