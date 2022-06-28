function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext){
      var ctx = canvas.getContext('2d');
      var y = 70;
  
        ctx.beginPath();
        // Caja
        
        ctx.strokeRect(120,10,300,500);

        ctx.font="2em Verdana";
        ctx.fillText("UDENAR", 220, 50, 100);
       
        
        ctx.arc(275,75 + y,50,0,Math.PI*2,true); // Círculo externo
        ctx.moveTo(310,75 + y);
        ctx.arc(275,75 + y,35,0,Math.PI,false);   // Boca (contra reloj)
        ctx.moveTo(265,65 + y);
        ctx.arc(260,65 + y,5,0,Math.PI*2,true);  // Ojo izquierdo
        ctx.moveTo(295,65 + y);
        ctx.arc(290,65 + y,5,0,Math.PI*2,true);  // Ojo derecho


        // Línea cuerpo
        ctx.moveTo(270,125 + y);
        ctx.lineTo(270,300 + y);

       

        ctx.stroke();
  
    }
}
