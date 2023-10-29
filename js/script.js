let CargarMasBtn = document.querySelector('.actividades .cargar-mas .btn');
let Item = 4;

CargarMasBtn.onclick = () =>{
   let boxes = [...document.querySelectorAll('.actividades .container-actividad .box')];
   for (var i = Item; i < Item + 4; i++){
      boxes[i].style.display = 'inline-block';
   };
   Item += 4;
   if(Item >= boxes.length){
      CargarMasBtn.style.display = 'none';
   }
}




