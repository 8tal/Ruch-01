function displayCaracter(n){
  lastpair= "A";
  for(let i=1; i<=n; i++){
    if (i%2==1){
      lastpair="A";
    }else{
      lastpair= (i%4==0)? "C": "B";
    }
    console.log(lastpair)
  }
}
displayCaracter(20)
