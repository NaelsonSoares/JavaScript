

    function media(){
     let nota1 = parseFloat(document.getElementById("nota1").value);
     let nota2 = parseFloat(document.getElementById("nota2").value);
     let nota3 = parseFloat(document.getElementById("nota3").value);
     let nota4 = parseFloat(document.getElementById("nota4").value);

     let media = (nota1 + nota2 + nota3 + nota4)/4 ;

     if(media >= 7)
      if(media==10)
       alert("Uau! Aprovado com distinção " + media);
      else
       alert("Parabens, aprovado! Media " + media);
     else
      alert("Reprovado! " + media)
    }