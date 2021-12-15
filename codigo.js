function calcular(){
          let nome = String(document.getElementById('Nome').value)
          let altura = Number(document.getElementById('Altura').value) / 100
          let peso = Number(document.getElementById('Peso').value)
          let classificacao = ``
          let IMC = peso / (altura * altura)
          if (nome != "" && altura != "" && peso != ""){
             if(IMC <= 18.5){
               classificacao += `Abaixo do peso`
             }
             else if(IMC <= 24.9){
               classificacao += `Com peso normal`
              }
             else if(IMC <= 29.9){
               classificacao += `com Sobrepeso`
             }
             else if(IMC <= 34.9){
               classificacao += `com Obesidade Grau I`
             }
             else if(IMC <= 39.9){
               classificacao += `com Obesidade Grau II`
             }
             else{
              classificacao += `com Obesidade Grau III`
             } 
             mensagem.innerHTML = `${nome} seu IMC é ${IMC.toFixed(1)} e você está ${classificacao}`
         }
         
         else{
           window.alert('Preencha todos os campos!')
         }
      }
