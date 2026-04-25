function track(){
  let val = document.getElementById("trackInput").value;

  if(val){
    document.getElementById("result").innerText =
    "📦 Colis en transit... arrivée prévue bientôt";
  } else {
    document.getElementById("result").innerText =
    "Veuillez entrer un numéro";
  }
}

/* COMPTEURS */
let c1=0, c2=0, c3=0;

let interval = setInterval(()=>{
  if(c1<10000){
    c1+=200;
    document.getElementById("c1").innerText = c1 + "+ colis";
  }
  if(c2<5){
    c2++;
    document.getElementById("c2").innerText = c2 + " pays";
  }
  if(c3<98){
    c3+=2;
    document.getElementById("c3").innerText = c3 + "% satisfaction";
  }
},100);
