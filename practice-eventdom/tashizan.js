function greeting(){
  let a=document.querySelector('input[name="left"]');
  let x=Number(a.value);
  let b=document.querySelector('input[name="right"]'); 
  let y=Number(b.value); 
  let keisan=x+y;
  let p=document.querySelector('span#answer'); 
  p.textContent=keisan;
} 
let b=document.querySelector('button#calc');
b.addEventListener('click', greeting);