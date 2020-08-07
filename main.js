const keys = document.querySelectorAll(".key");

console.log(keys);

function playNode(event){
     
    let audioKeyCode = getKeyCode(event);
    
    const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`);

    const isKeyExists = key;

    if(!isKeyExists){
        return;
    }
    addPlayingclass(key); 
    playAudio(audioKeyCode);
}

function addPlayingclass(key){
    key.classList.add('playing');
}

function removePlayingclass(event){
    event.target.classList.remove('playing');
}

function getKeyCode(event){
    let keyCode;
    
    const isKeyboard = event.type === 'keydown';
    
    if(isKeyboard){
        keyCode = event.keyCode;
    } else{
        keyCode = event.target.dataset.key;
    }

    return keyCode;

}


function playAudio(audioKeyCode){
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`);
    
    audio.currentTime = 0;
    audio.play();

}

keys.forEach(function(key){
    key.addEventListener('click', playNode)
    key.addEventListener('transitionend', removePlayingclass)

})

window.addEventListener('keydown', playNode);
