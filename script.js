function inclui_nome() {
    var nome_variavel = prompt("Coloque seu nome:");
    if(nome_variavel){
        document.getElementById("marcacao_nome").innerHTML = nome_variavel;
    }
    else{
        alert("Nome não atribuido, preencha o nome.");
        inclui_nome();
    }
}

function funcao_resposta(){

    var resp1 = document.querySelector('input[name="quest_1"]:checked');
    var resp2 = document.querySelector('input[name="quest_2"]:checked');
    var resp3 = document.querySelector('input[name="quest_3"]:checked');
    var resp4 = document.querySelector('input[name="quest_4"]:checked');
    var resp5 = document.querySelector('input[name="quest_5"]:checked');
    var resp6 = document.querySelector('input[name="quest_6"]:checked');
    var resp7 = document.querySelector('input[name="quest_7"]:checked');
    var resp8 = document.querySelector('input[name="quest_8"]:checked');
    var resp9 = document.querySelector('input[name="quest_9"]:checked');
    var resp10 = document.querySelector('input[name="quest_10"]:checked');

    var contador = 0;


    if(resp1 && resp2 && resp3 && resp4 && resp5 && resp6 && resp7 && resp8 && resp9 && resp10){
        if(resp1.value == "correta"){
            document.getElementById("resp_correta_1").innerHTML = "correta é 4 segundos. Para determinar esse intervalo de tempo, usamos as equações de movimento do projétil, considerando uma altura de 480 metros, uma velocidade inicial de 200 m/s e um ângulo de lançamento de 30 graus"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_1").innerHTML = "errada Usando as equações de movimento do projétil, chegamos à conclusão de que o intervalo de tempo entre as passagens do projétil pelos pontos de altura 480 metros acima do ponto de lançamento é de 4 segundos."

        }
        if(resp2.value == "correta"){
            document.getElementById("resp_correta_2").innerHTML = "Correta O avião precisa lançar a bomba a 400 metros atrás da lancha para atingi-la, considerando a diferença de velocidade entre o avião e a lancha, a altura e a aceleração da gravidade."
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_2").innerHTML = "Errada A distância horizontal que o avião deve lançar a bomba para atingir a lancha é de 400 metros. Isso é calculado considerando a velocidade relativa entre o avião e a lancha (50 m/s) e o tempo necessário para a bomba atingir a lancha (8 segundos), com base na altura de 320 metros e na aceleração da gravidade de 10 m/s²."

        }
        if(resp3.value == "correta"){
            document.getElementById("resp_correta_3").innerHTML = "Correta Para atingir o mesmo alvo a uma altitude de 0,50 km, o avião não precisa soltar a bomba a nenhuma distância horizontal. A bomba atingiria o alvo diretamente quando soltada, devido à conservação da energia mecânica. Portanto, a resposta correta é 0 km."
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_3").innerHTML = "Errada No segundo cenário, com uma altitude de 0,50 km em vez de 2,0 km, a bomba não precisa ser solta a nenhuma distância horizontal, pois atingirá o alvo diretamente quando soltada devido à redução na altura e na energia potencial necessária. Portanto, a resposta é 0 km."

        }
        if(resp4.value == "correta"){
            document.getElementById("resp_correta_4").innerHTML = "CorretaA bola permanece no ar por 2 segundos antes de atingir o adversário do outro lado da quadra. Isso é calculado usando a equação da queda livre, com uma altura máxima de 20 metros e uma aceleração devido à gravidade de 10 m/s². Portanto, a resposta correta é 2,0 segundos."
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_4").innerHTML = "Errada A bola fica no ar por 2 segundos antes de atingir o adversário do outro lado da quadra. Isso é calculado com base na altura máxima de 20 metros e a aceleração da gravidade de 10 m/s², usando a equação da queda livre."

        }
        if(resp5.value == "correta"){
            document.getElementById("resp_correta_5").innerHTML = "Correta A bala de canhão, disparada horizontalmente a partir de um penhasco de 800 metros de altura com uma velocidade de 60 m/s, terá um alcance horizontal aproximado de 759 metros, considerando a aceleração da gravidade de 10 m/s². "
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_5").innerHTML = "Errada Ao disparar horizontalmente a uma velocidade de 60 m/s a partir de um penhasco de 800 metros de altura, a bala de canhão percorrerá um alcance horizontal aproximado de 759 metros. A aceleração da gravidade não afeta sua velocidade horizontal, mas influencia sua queda vertical."

        }
        if(resp6.value == "correta"){
            document.getElementById("resp_correta_6").innerHTML = "Correta No lançamento horizontal, o movimento na direção vertical é uniformemente retardado devido à aceleração da gravidade, enquanto o movimento na direção horizontal ocorre a uma velocidade constante, sem aceleração. Isso justifica a alternativa correta."
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_6").innerHTML = "Errada No lançamento horizontal, o movimento na direção vertical é uniformemente retardado devido à aceleração da gravidade, enquanto o movimento na direção horizontal ocorre a uma velocidade constante, sem aceleração. Isso justifica a alternativa correta."

        }
        if(resp7.value == "correta"){
            document.getElementById("resp_correta_7").innerHTML = "Correta O alcance horizontal da esfera, que rola sem atrito sobre a mesa a uma velocidade constante de 2,0 m/s, é de 0,8 metros, de acordo com as equações de movimento e considerando a altura da mesa de 0,8 metros e a aceleração da gravidade de 10 m/s²."
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_7").innerHTML = "Errada O alcance horizontal da esfera que rola sem atrito sobre a mesa, com velocidade constante de 2,0 m/s, é de 0,8 metros. Isso é determinado pelo tempo que a esfera leva para cair da altura da mesa (0,8 metros) devido à gravidade, conforme calculado com equações de movimento."
        
        }
        if(resp8.value == "correta"){
            document.getElementById("resp_correta_8").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_8").innerHTML = "Errada"

        }
        if(resp9.value == "correta"){
            document.getElementById("resp_correta_9").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_9").innerHTML = "Errada"

        }
        if(resp10.value == "correta"){
            document.getElementById("resp_correta_10").innerHTML = "Csssssssssssssssrreta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_10").innerHTML = "Errada"

        }
        document.getElementById("quantos_acertos").innerHTML = "Você acertou " + contador + " questões!";
    }
    else{
        alert("responda todas as quests")
    }

}

function mudar(objeto, imagem){

    mov1.src = imagem;
}