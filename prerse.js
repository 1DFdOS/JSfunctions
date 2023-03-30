
function calculadora(){
    alert("Essa função realiza uma operação aritmética entre dois números baseada na escolha do usuário")  
    var n1 = Number(prompt("insira o primeiro valor"))
    var n2 = Number(prompt("insira o segundo valor"))
    var oper = prompt ("insira um operador aritmético: [+] para soma -x-[-] para subtração -x-[/] para divisão -x- [*] para multiplicação")
    var valor
switch (oper) {
  case '+' :
    valor = n1 + n2;
    alert("o valor da soma corresponde a "+ valor)  
    break;
  case '-' :
    valor = n1 - n2;
    alert("o valor da subtração corresponde a "+ valor)  
    break;
  case '/' :
    valor = n1/n2;
    alert("o valor da divisão corresponde a "+ valor)  
    break;
  case '*' :
    valor = n1*n2;
    alert("o valor da multiplicação corresponde a "+ valor)  
    break;
  default:
    alert("insira um operador válido")
}
}
function calcularIMC() {
   var n1 = Number(prompt("digite seu sexo, digite 1 para masculino e 2 para feminino"))
   var h= Number(prompt("digite sua altura em metros, ex: 1.87 (1.87 m)"))
   var imc 
   if(n1==1){
       imc=(72.7*h)-58;
       alert("o peso de "+ imc +"kg é o ideal para a pessoa do sexo masculino")     
   }else{
       imc=(62.7*h)-44.7;
       alert("o peso de "+ imc +"kg é o ideal para a pessoa do sexo feminino")     
   } if (n1 != 1 && n1 != 2) {
       alert("digite um valor válido")
   }
   }
   function calcularsaliq() {
    window.alert("Esse programa calcula o salário líquido baseado nos valores de entrada como salario bruto e gratificações");
    var salbase=Number(prompt("Digite o seu salário base"))
    var gratif=Number(prompt("Digite o valor de sua gratificação"))
    var salbruto ,IR, salliq
    salbruto = salbase+gratif;
    if(salbruto>1000){
        IR = salbruto*(20/100);
        salliq = Number(salbruto - IR);
        alert("O seu salario liquido é de R$"+ salliq);
    }else{
        IR = salbruto*(15/100);
        salliq = Number(salbruto - IR);
        alert("O seu salario liquido é de R$"+ salliq);
    }
    }
    function maioroumenor() {
        window.alert("Esse diagrama de blocos armazena uma variável e dita se ela é maior ou menor a 100, dando seu valor ou se caso contrário imprimindo zero");
        var n1=Number(prompt("digite um número"))
        if(n1 >= 100){
            window.alert("O número "+ n1 +" é maior que 100")
        }else{
            window.alert("0")
        }
        }
    function Apljuross() {
        window.alert("Esse programa calcula juros simples");
        var capIn=Number(prompt("Digite o seu Capital (Inicial) ex: 1200 para r$ 1200.00 "))
        var juros=Number(prompt("Insira a taxa de juros ex: 0.08 para 8%"))
        var Tmpaplc=Number(prompt("Insira o tempo de aplicação (meses) "))
        var jurossimples
        jurossimples = capIn * juros * Tmpaplc;
        alert("O juros aplicado é de R$"+ jurossimples);
            }
    function Aritmetica() {
        window.alert("Essa função calcula a média aritmética entre 3 números");
        var n1=Number(prompt("Informe o primeiro número"));
        var n2=Number(prompt("Informe o segundo número"));
        var n3=Number(prompt("Informe o terceiro número"));
        var media
        media = (n1+n2+n3)/3;
        alert("A média entre números equivale a "+ media);
            }
    function Ponderada() {
        window.alert("Essa função calcula a média ponderada entre 3 números");
        var n1=Number(prompt("Informe o primeiro número"));
        var p1=Number(prompt("Informe o peso"))
        var n2=Number(prompt("Informe o segundo número"));
        var p2=Number(prompt("Informe o peso"))
        var n3=Number(prompt("Informe o terceiro número"));
        var p3=Number(prompt("Informe o peso"))
        var media
        media = ((n1*p1)+(n2*p2)+(n3*p3))/p1+p2+p3
        alert("A média entre números equivale a "+ media);
            }
    function Maiornum() {
        window.alert("Essa função mostra o maior número dentre 3 inseridos");
        var n1 = prompt("Informe o primeiro número");
        var n2 = prompt("Informe o segundo número");
        var n3 = prompt("Informe o terceiro número");
        if ((n1>n2) && (n1>n3)) alert("O primeiro número é o maior");
        else
        if ((n2>n1) && (n2>n3)) alert("O segundo número é o maior");
        else
        if ((n3>n1) && (n3>n2))  alert("O terceiro número é o maior");
        else
        malert("A média entre números equivale a "+ media);
}
    function duovalores(){
        ("a função é repetida caso o usuário não informar um número para valor 2 diferente de 0")
        var v1 = prompt("Informe o valor 1: ")
        var v2 = 0
        var result = 0
        while (v2==0){
            var v2 = prompt("Informe o valor 2: ")
        if(v2==0){
            window.alert("valor 2 Inválido")
        }
        } 
        result = v1/v2; 
        window.alert(result);
}
    function Maquina(){
        var escolha
        escolha = prompt("Escolha o dispositivo na qual está vendo esse programa, [1] para PC [2] Mobile [3] Computador Lan house [4] Emulação")
        switch (escolha) {
            case '1' :
              alert("Personal Computer Selected...")
              break;
            case '2' :
            alert("Mobile Device Selected...")
              break;
            case '3' :
            alert("External Computer located Selected...")
              break;
            case '4' :
            alert("Emulating...")
              break;
            default:
              alert("insira um operador válido")
        }
    }
    function Plansaud(){
        var idade = prompt("Insira sua idade para saber o valor que deverá pagar pelo plano de saude considerando 100 reais base")
        if(idade < 10){
            var plano= 100 + 80;
            window.alert("o valor adicional é de 80 reais, resultando em "+ plano)
        }else if(idade >= 10 && idade <= 30){
            var plano= 100 + 50;
            window.alert("o valor adicional é de 50 reais, resultando em "+ plano)
        }else if(idade >= 30 && idade <= 60){
            var plano= 100 + 95;
            window.alert("o valor adicional é de 95 reais, resultando em "+ plano)
        }else if(idade >= 60  && idade <= 120){
            var plano= 100 + 130;
            window.alert("o valor adicional é de 130 reais, resultando em "+ plano)
        }else
            window.alert("insira um valor válido")
        }
    
    function Anuidade(){
        window.alert("A função calcula o valor de anuidade aplicando o juros sobre cada mês de multa, o valor deve ser pago em janeiro e é aplicado 5% sobre cada mês")
        var montante
        var Capital = Number(prompt("insira o valor da mensalidade da associação (capital)"));
        var i=Number(prompt("Insira a taxa de juros ex: 0.08 para 8%"))
        var meses = Number(prompt("insira o código do mês, 1 até o 12 para seus respectivos"));
        montante = Capital * Math.pow((1+i),meses)
        window.alert("o valor do montante é de: "+ montante)
    }
    
    function umaocinquenta(){
        let vetor = [1];
        for(let i= 0; i < 50; i++){
            vetor[i] = i + 1;
            console.log(vetor[i]);
        }
        }
    
    function maioroumenorage(){
        window.alert("Essa função verifica maior de idade como verdadeiro e menor de idade como falso");
        var n1=Number(prompt("Insira a sua idade"))
        if(n1 >= 18){
            window.alert("Verdadeiro")
        }else{
            window.alert("Falso")
        }
    }
    function agekid(){
            window.alert("Essa função verifica como parametros as alturas e as taxas de crescimentos anuais de duas crianças e calcula em quanto tempo a criança menor ultrapassará a maior e em quanto tempo isso acontecerá ")
            var altura1= prompt("insira a altura da primeira criança")
            var altura2= prompt("insira a altura da segunda criança")
            var taxa1= prompt("Insira a primeira taxa")
            var taxa2= prompt("insira a segunda taxa")
            let tempo = 0;
            if (altura1 == altura2) {
                if (taxa1 > taxa2) {
                    window.alert(`A primeira criança passará a segunda em 1 ano.`);
                } else if (taxa1 < taxa2) {
                    window.alert(`a segunda criança passará a primeira em 1 ano.`);
                } else {
                    window.alert("As duas crianças possuem a mesma altura");
                }
            } else if (altura1 < altura2) {
                window.alert(`Criança 1 com ${altura1} cm`);
                window.alert(`Criança 2 com ${altura2} cm`);
                while (altura1 < altura2) {
                    altura1 = altura1 + altura1 * taxa1;
                    altura2 = altura2 + altura2 * taxa2;
                    tempo++;
                }
                window.alert(`Criança 1 passou a Criança 2 em ${tempo} ano(s).`);
                window.alert(`Criança 1 com ${altura1} cm`);
                window.alert(`Criança 2 com ${altura2} cm`);
            } else {
                window.alert(`Criança 1 com ${altura1} cm`);
                window.alert(`Criança 2 com ${altura2} cm`);
                while (altura1 > altura2) {
                    altura1 = altura1 + altura1 * taxa1;
                    altura2 = altura2 + altura2 * taxa2;
                    tempo++;
                }
                window.alert(`Criança 2 passou a Criança 1 em ${tempo} ano(s).`);
                window.alert(`Criança 1 com ${altura1} cm`);
                window.alert(`Criança 2 com ${altura2} cm`);
            
                    
        comparaAlturas(50, 0.05, 50, 0.06);
            }
        }
        function autor(){
            window.alert("Por Daniel Felipe Rgm:27256472");

        }

    