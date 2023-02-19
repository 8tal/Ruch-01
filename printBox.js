function printBox(width, heigth){
  let box=" ";
  for(var j= 1;j<= heigth; j++){
    for(var i=1;i<=width; i++){
      if (j == 1 || j == heigth){
        box+= " * " ;
      }else{
        box+= " " ;
      }
    }
    box+="\n"
  }
  console.log(box);
}
printBox(5, 4);
printBox(6, 5)