const container = document.querySelector('.container');
reset = document.querySelector('.reset');


function firstBox() {
  for(i=0; i<256; i++) {
    const Row = 16
    container.style.gridTemplateColumns= "repeat("+ Row + ", "+ (300/Row) +"px)";
    container.style.gridTemplateRows= "repeat("+ Row + ", "+ (300/Row) +"px)"; 
    const boxContent = document.createElement('div');
    boxContent.className = "box";
    container.appendChild(boxContent);
    boxContent.addEventListener('mouseover', function() {
    boxContent.classList.add('makeBlue'); 
    })
  } 
}

firstBox();

reset.addEventListener('click', function() {
  const newRow = prompt('how many rows?');
  for(i=0; i<newRow * newRow; i++) {
    container.style.gridTemplateColumns= "repeat("+ newRow + ", "+ (300/newRow) +"px)";
    container.style.gridTemplateRows= "repeat("+ newRow + ", "+ (300/newRow) +"px)";
    const boxContent = document.createElement('div');
    boxContent.className = "box";
    newContainer.appendChild(boxContent);
    boxContent.addEventListener('mouseover', function() {
    boxContent.classList.add('makeBlue'); 
    })
    
  } 
  
})





