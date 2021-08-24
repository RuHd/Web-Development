var placar = ['1:1','2:1','3:5','4:4','2:2','3:7','4:4','3:5','4:4','4:4']
var x,y;
var points = 0
var v = 0
var l = 0
var d = 0
var serieA = ["Athletico PR" , "Atletico GO", "Atletico MG", "Flamengo" , "Palmeiras" , "Corinthians"]

class time {
    constructor(name) {
        this.name = name
        this.pontos=0
        this.posiçao = 0
    }

    posiçaoTabela(){
        this.pontos = pointsTeam()
        console.log(this.pontos)  
    }
}

const "${COR}" = new time("Corinthians")

function pointsTeam () {
    for (let i = 0; i<placar.length;i++){
    
        for(let j = 0; j<placar[i].length; j++) {
                if(placar[i][j] == ":" ){
                    j++
                    y=placar[i][j]
                } else  {
                    x = placar[i][j]
                }
        }
            // Verifica a quantidade de pontos baseado no resultado das partidas
            if (x>y) {
                v++
                points += 3  
                
                
            } else if(x==y){
                d++
                points++  
            } else {
                l++
            }
    } 
    
   return points
}
COR.posiçaoTabela()










 
 


