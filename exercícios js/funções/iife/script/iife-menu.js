
//function init (){
 //   let isValid = false
 //   console.log('init menu', isValid)
//}
//init()

//function auto-invocável
//(function(){    
//    let isValid = false
//        console.log('init menu', isValid)
//            function init (){
//                console.log('init do menu')
//          }
//          init()
//})()

//Parâmetros em function auto-invocável (outro exemplo no modal)
(function(n1, n2, n3){    
    let isValid = false
        console.log('init menu', isValid, n1, n2, n3)
            function init (){
                console.log('init do menu')
          }
          init()
})(10, 15, 20)