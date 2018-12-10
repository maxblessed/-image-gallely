
//function to access the DOM
function accessAl(query){
  return document.querySelectorAll(query)
}
function accessOn(query){
  return document.querySelector(query)
}

//initializing my variables
let modal=accessOn('#modal');
let img=accessAl('img');
let span=document.createElement('p');
let buttonL=document.createElement('button');
let buttonR=document.createElement('button');
let count=0;
let arr1; let index1
let container=accessOn('#cont');

//setting attribute for left and right button
buttonL.setAttribute('id','left');
buttonR.setAttribute('id','right');

//inserting content to the innerHTML
span.innerHTML='x';
buttonL.innerHTML='<i class="fas fa-chevron-circle-left"></i>';
buttonR.innerHTML='<i class="fas fa-chevron-circle-right"></i>';
buttonR.firstElementChild.style.cssText='color:gray;font-size:40px';
buttonL.firstElementChild.style.cssText='color:gray;font-size:40px';


//appending the created element in the body
document.body.appendChild(span);
document.body.appendChild(buttonR);
document.body.appendChild(buttonL);
buttonR.style.display='none';
buttonL.style.display='none';

//looping over all images
img.forEach((img,index,arr)=>{

  //adding click event to the images
    img.addEventListener('click',function(e){
    e.stopPropagation();

    //looping over  the image to change its width and height
    for (var i = 0; i <arr.length; i++) {
       arr[i].style.cssText=`width:80px;height:80px;opacity:0.1;`;
    }

    //moving the image container down the page and decreasing the size
    container.style.cssText='position:absolute; top:80%;width:50%';

    //show the button, modal and span when click on any of the image
    modal.style.display='block';
    span.style.display='block';
      buttonR.style.display='inline-grid';
    buttonL.style.display='block';

    //showing the modal
   modal.innerHTML=`<img src='${this.src}'/>`;

   //reseting the image opacity to 1
if(e.currentTarget.src===this.src){
  arr[index].style.opacity='1';
}

//updating my arr with all the image and index
arr1=arr;
index1=index;

  })
})

  //adding eventlistener to the left button
 buttonL.addEventListener('click',(e)=>{
e.stopPropagation();
chang(e.currentTarget.id);
},false)


//adding eventlistener the right button
    buttonR.addEventListener('click',(e)=>{
   e.stopPropagation();
   chang(e.currentTarget.id);
 },false)


//function that change the image with its parameters
    function chang(dir){
      //checking if the parameters its equal to the button id
      if(dir==='left'){
      if(index1===0){
        index1=3;

      }else{
        --index1;
      }
  //checking if the parameters its equal to the button id
}else if (dir==='right') {
  if(index1===arr1.length-1){
    index1=0;

  }else{
    ++index1;
  }
}
//reseting the image opacity to 0.1 every time the button is click
for (var i = 0; i <arr1.length; i++) {
arr1[i].style.opacity='0.1';
}

//change the image in the modal when the button is click and reseting the original image opacity
       modal.innerHTML=`<img src='${arr1[index1].src}'/>`
       arr1[index1].style.opacity='1';
    }

//clicking on the span to hide the span button and reset its container to its original position
span.addEventListener('click',function(){
  this.style.display='none';
  this.previousElementSibling.previousElementSibling.style.display='none';
  buttonR.style.display='none';
  buttonL.style.display='none';
  container.style.cssText='width: 90%;position: relative;left: 50%;  transform: translateX(-50%);display: grid;  grid-template-columns: repeat(4,20%);  grid-column-gap: 8px;'
  for (var i = 0; i <arr1.length; i++) {
     arr1[i].style.cssText=`width:100%`;
  }
})
