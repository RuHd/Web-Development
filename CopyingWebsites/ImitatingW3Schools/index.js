var menu = document.getElementById('menu')
var options = menu.getElementsByTagName('li')
var list = document.getElementById('list-options')
var selection = list.getElementsByTagName('ul')
var head = list.getElementsByTagName('h2')
var index = []



for(let i = 0; i<options.length; i++){
    
    options[i].addEventListener("click", function(){
        var index = i
        for(let j = 0; j<head.length; j++){
          if( index !== j) {
              head[j].style.display="none;"
              head[j].style.display="none;"
          }
        }
    })
}



