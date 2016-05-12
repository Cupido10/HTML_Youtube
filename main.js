var playOrPauseButton,player;

function onYouTubeIframeAPIReady(){
    
    player= new YT.Player('player',{
    height:'398',
    width:'640',
    videoId:'foE1mO2yM04',
    playerVars:{
        'autoplay':0,
        'controls':0,
        "showinfo": 0,
        'start':32,
        'end':127,
        'rel':0
        
    },    
        
      events:{
          'onReady':onPlayerReady,
          'onStateChange':onPlayerStateChange
          
      }  
        
               
        
    });
    
    
    
}

function onPlayerReady(event){
     
     playOrPauseButton=document.getElementById("playOrPauseButton");
     playOrPauseButton.onclick=playOrPauseHandler;
}


function onPlayerStateChange(event){
    
}


function playOrPauseHandler(){
    switch(player.getPlayerState())//0:ened 1:playing 2:paused 5:video cued
    {
        case 1:
               player.pauseVideo();
               playOrPauseButton.value="play";
               break;
        case 2:
               player.playVideo();
               playOrPauseButton.value="pause";
               break;
        case 5:
               player.playVideo();
               playOrPauseButton.value="pause";
               break;
        case 0:
               player.playVideo();
               playOrPauseButton.value="pause";
               break;
        default:
               
        
    }
    
}




