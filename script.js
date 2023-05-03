console.log("Welcome to Tic Tac Toe");
let turn="X";
let isgameover=false;
//function to chnage the turn
const changeturn=()=>{
    
    if (turn==="X")
    {
        return "O";
    }
    else{
        return "X";
    }
}
// function to check the win
const checkwin=()=>{
    let boxtexts=document.getElementsByClassName('boxtext');
    let wins=[
        [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    wins.forEach(e=>{
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText===boxtexts[e[2]].innerText) && (boxtexts[e[0]].innerText!=='')){
            document.querySelector('.superviser').innerText=boxtexts[e[0]].innerText+"  Won";
            isgameover=true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px";
        }
    })
}
// Game logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turn=changeturn();
            checkwin();
            if(!isgameover){
                document.getElementsByClassName("superviser")[0].innerText="Turn for " + turn;
            }
            
        }
    })
})
// event listener for reset function
reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText="";
    })
    turn='X';
    isgameover=false;
    document.getElementsByClassName("superviser")[0].innerText="Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px";
})