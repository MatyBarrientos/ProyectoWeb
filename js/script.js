let CargarMasBtn = document.querySelector('.paquetes .cargar-mas .btn');
let Item = 4;

CargarMasBtn.onclick = () =>{
   let boxes = [...document.querySelectorAll('.paquetes .container-lugares .box')];
   for (var i = Item; i < Item + 4; i++){
      boxes[i].style.display = 'inline-block';
   };
   Item += 4;
   if(Item >= boxes.length){
      CargarMasBtn.style.display = 'none';
   }
}