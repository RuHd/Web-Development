var placar = ['1:1','2:2','3:3','4:4','2:2','3:3','4:4','3:3','4:4','4:4']
var x,y;
var points = 0

for (let i = 0; i<placar.length;i++){
    // console.log(placar[i])
    for(let j = 0; j<placar[i].length; j++) {
            if(placar[i][j] == ":" ){
                j++
                y=placar[i][j]
            } else  {
                x = placar[i][j]
            }
        }
        if (x>y) {
            points += 3  
            
        } else if(x==y){
            points++  
        }
            
        
 } 
 
 console.log(points)


