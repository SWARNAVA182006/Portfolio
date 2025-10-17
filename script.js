const words = ["CSE-AI & ML Developer", "Problem Solver", "Learner"];
let i = 0, j = 0, currentWord = [], isDeleting = false, speed = 150;

function type(){
  const target = document.getElementById('typing');
  if(i >= words.length) i=0;
  let word = words[i];
  if(!isDeleting){
    currentWord.push(word[j]);
    j++;
    target.innerHTML = currentWord.join('');
    if(j === word.length){ isDeleting=true; speed=1000; } 
    else { speed=150; }
  } else {
    currentWord.pop();
    target.innerHTML = currentWord.join('');
    if(currentWord.length===0){ isDeleting=false; j=0; i++; speed=500; } 
    else { speed=50; }
  }
  setTimeout(type,speed);
}
document.addEventListener('DOMContentLoaded', type);
