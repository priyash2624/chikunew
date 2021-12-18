console.log('welcome to spotify');
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterplay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'))
let masterSongName=document.getElementById('masterSongName')



let songs=  [ 
    {songName:"zindagi ka safar" ,filepath:"songs/1.mp3", coverPath:"cover/cover.jpg"},
    {songName:"na ja na ja" ,filepath:"songs/2.mp3", coverPath:"cover/cover4.jpg"},
    {songName:"bahara gtgthht" ,filepath:"songs/3.mp3", coverPath:"cover/cover3.jpg"},
    {songName:"rabbaq  dhdhdjdkdk" ,filepath:"songs/4.mp3", coverPath:"cover/cover2.jpg"},
    {songName:"rabbas  dhdhdjdkdk" ,filepath:"songs/4.mp3", coverPath:"cover/cover2.jpg"},
    {songName:"rabbac  dhdhdjdkdk" ,filepath:"songs/4.mp3", coverPath:"cover/cover2.jpg"},
    
]
songItems.forEach((element,i)=>{

element.getElementsByTagName("img")[0].src=songs[i].coverPath;
element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})
audioElement.addEventListener('timeupdate' ,()=>{

    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    myProgressBar.value=progress;
})


masterplay.addEventListener('click',()=>{
    if(audioElement.paused ||audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove(' fa-3x fa-play-circle  ')
        masterplay.classList.add(' fa-3x  fa-pause-circle  ');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause()
        
        masterSongName.innerText=songs[songIndex].songName
        masterplay.classList.remove('  fa-3x fa-pause-circle')
        masterplay.classList.add( ' fa-3x fa-play-circle');
         gif.style.opacity=0;
    }

    })
   
//     gif.style.opacity=1;
// }


// })
// audioElement.addEventListener('timeupdate' ,()=>{
//     console.log('timeupdate')
  
//     myProgressBar.value=progress;
// })
myProgressBar.addEventListener('change' ,()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
// const makeAllPlays=()=>{
//     Array.from(document.getElementsByName('songItemPlay')).forEach((element)=>{
// element.target.classList.remove('fa-pause-circle')
//         element.classList.add('fa-pause-circle')
//     })
// }
const makeAllPlays =()=>{
   
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle')
element.classList.add('fa-play-circle')
    })

}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click' ,(e)=>{
        console.log(e.target);
        makeAllPlays()
        masterSongName.innerText=songs[songIndex].songName
        index=parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle')
        e.target.classList.add('fa-pause-circle')
        audioElement.src=`songs/${index}.mp3`;
        audioElement.currentTime=0;
        audioElement.play()
        masterplay.classList.remove('fa-play-circle')
        masterplay.classList.add('fa-pause-circle')
    })
});
// songIndex= parseInt(e.target.id)


// audioElement.src=`songs/${index+1}.mp3`
// audioElement.currentTime=0
// audioElement.play();

// })
document.getElementById('next').addEventListener('click' ,()=>{

if(songIndex>6){ songIndex =0;
}
else{
    songIndex+=1
}
audioElement.src=`songs/${songIndex+1}.mp3`
masterSongName.innerText=songs[songIndex].songName
audioElement.currentTime=0
audioElement.play();
masterPlay.classList.remove('fa-play-circle')
masterPlay.classlist.add(' fa-pause-circle');
    


    
})
document.getElementById('previous').addEventListener('click' ,()=>{

    if(songIndex>6){ songIndex =0;
    }
    else{
        songIndex-=1
    }
    audioElement.src=`songs/${songIndex+1}.mp3`
   masterSongName.innerText=songs[songIndex].songName
    audioElement.currentTime=0
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle')
    masterplay.classlist.add('fa-pause-circle');
        
    
    
        
    })


