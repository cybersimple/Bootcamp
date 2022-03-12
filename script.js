
let count = document.getElementById('count');

let counter = 10;

let countdown = setInterval(function(){
  count.innerHTML = counter
;  counter--;
  if(counter === -1){
    display();
    
    
    clearInterval(countdown);
  }

},1000)


function display(){
  count.style.display = 'none';
  let div = document.createElement('div');
  div.id="display";


  let text = document.createElement('p')
  text.classList = 'text';
  text.innerText = "Happy Developers Day!!!"
  
  let img = document.createElement('img');
  img.src = "https://bestanimations.com/media/fireworks/671801409ba-awesome-coloful-fireworks-animated-gif-image-3.gif";
  
  div.append(text);
  div.append(img);
  

  div.style.backgroundPosition="cover";
  div.style.boxShadow="5px 5px 15px 5px rgba(0,0,0,0)";
  div.style.borderRadius ="20px";
  div.style.display ="flex";
  div.style.flexDirection ="column";
  div.style.backgroundColor = "rgb(2,0,36)"
  div.style.border
  div.style.margin ="auto";
  div.style.height ="75vh";
  div.style.width = "50vw";
  div.style.overflow ="hidden";
  
  div.classList = "div";
  document.body.append(div);

}

// display();


