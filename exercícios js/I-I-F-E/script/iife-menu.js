
//function init (){
 //   let isValid = false
 //   console.log('init menu', isValid)
//}
//init()

//function auto-invocável
(function(){    
    let isValid = false
        console.log('init menu', isValid)
            function init (){
                console.log('init do menu')
          }
          init()
})()