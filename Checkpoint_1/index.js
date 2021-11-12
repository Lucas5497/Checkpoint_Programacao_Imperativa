/*Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente e desenvolva 
conforme solicitado. Veja abaixo os requisitos do projeto:

- Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos 
pré-definidos. 
      1 - Pipoca - 10 segundos (padrão);
      2 - Macarrão - 8 segundos (padrão);
      3 - Carne - 15 segundos (padrão);
      4 - Feijão - 12 segundos (padrão);
      5 - Brigadeiro - 8 segundos (padrão); 
- O usuário pode alterar o tempo padrão, aumento ou diminuindo de acordo com sua vontade. Se o tempo técnico para maior
 que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir uma mensagem: "tempo insuficiente"; 
- Opções não listadas no menu, exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deve exibir a mensagem: "Prato pronto, bom apetite !!!". */
let prato = ["pipoca","macarrao", "carne","feijao","brigadeiro"];
let tempoPadrao = 0;

function esquentar(comida, tempo){
      comida=="pipoca"? tempoPadrao=10:0;
      comida=="macarrao"? tempoPadrao=8:0;
      comida=="carne"? tempoPadrao=15:0;
      comida=="feijao"? tempoPadrao=12:0;
      comida=="brigadeiro"?tempoPadrao=8:0;
      if (tempo >= tempoPadrao && tempo < tempoPadrao *2){
            console.log("Prato pronto, bom apetite!!!\n:)")
      } else if (tempo >= tempoPadrao *2 && tempo < tempoPadrao *3){
            console.log("A comida queimou!\nPrato pronto, bom apetite!!!\n:)")     
      } else if (tempo < tempoPadrao){
            console.log("Tempo insuficiente!\nPrato pronto, bom apetite!!!\n:)")
      } else if (prato>[4]){
            console.log("Prato inexistente!\n:(")
      }else if (tempo >= tempoPadrao *3){
            console.log("Kabumm!!!\nPrato pronto, bom apetite!!!\n:)")
      }
}
esquentar(prato[6],17);
