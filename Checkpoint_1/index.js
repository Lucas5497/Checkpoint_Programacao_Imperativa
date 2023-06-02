
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
