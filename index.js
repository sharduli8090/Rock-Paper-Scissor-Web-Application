let scorePlayer = 0;
let scoreComputer = 0;
const names = [
    ['rockB.png','rockY.png','rockR.png'],
    ['paperB.png','paperY.png','paperR.png'],
    ['scissorB.png','scissorY.png','scissorR.png']
];

// Math.floor(Math.random() * 11);

function start(){
    document.getElementById('btn-start').style.display='none';
    document.getElementById('btn-play').style.display='block';
    document.getElementById('score').style.display='block';   

    let scorePlayerB = document.getElementById('score-player');
    scorePlayerB.innerText = scorePlayer;

    let scoreComputerB = document.getElementById('score-computer');
    scoreComputerB.innerText = scoreComputer;

    let image = document.getElementById('rps-image-box');
    let img = document.createElement('img');
    img.setAttribute('src','./images/rockB.png');
    img.setAttribute('class','img-start');
    image.appendChild(img);
}

function checkWin(){
    if(scorePlayer>=5){
        alert('Congratulations! You win!!!');
        location.reload();
    }
    else if(scoreComputer>=5){
        alert('Computer won!!!');
        location.reload();
    }
}

function play(){
    let image = document.getElementById('rps-image-box');
    image.innerHTML = "";

    let player = document.createElement('img');
    let random1 = Math.floor(Math.random() * 3);
    let file1 = names[random1] [Math.floor(Math.random() * 3)];
    file1 = './images/'+file1;
    player.setAttribute('src',file1);
    player.setAttribute('class','img-start');    

    let computer = document.createElement('img');
    let random2 = Math.floor(Math.random() * 3);
    let file2 = names[random2] [Math.floor(Math.random() * 3)];
    file2 = './images/'+file2;
    computer.setAttribute('src',file2);
    computer.setAttribute('class','img-start'); 

    image.appendChild(player);
    image.appendChild(computer);


    if(random1==0 && random2==1){
        scoreComputer++;
        checkWin();
    }
    else if(random1==0 && random2==2){
        scorePlayer++;
        checkWin();
    }
    else if(random1==1 && random2==0){
        scorePlayer++;
        checkWin();
    }
    else if(random1==1 && random2==2){
        scoreComputer++;
        checkWin();
    }
    else if(random1==2 && random2==0){
        scoreComputer++;
        checkWin();
    }
    else if(random1==2 && random2==1){
        scorePlayer++;
        checkWin();
    }
    let scorePlayerB = document.getElementById('score-player');
    scorePlayerB.innerText = scorePlayer;

    let scoreComputerB = document.getElementById('score-computer');
    scoreComputerB.innerText = scoreComputer


}