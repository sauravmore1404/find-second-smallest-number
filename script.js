const secSmallNum=(array)=>{
    let small=array[0];
    let small2=array[0];
    for(let i=1;i<array.length;i++){
      if(array[i]<small){small2=small;small=array[i]; }
      else if(array[i]<small2){small2=array[i];}
    }return document.getElementById("demo").innerHTML=small2;
  }
  