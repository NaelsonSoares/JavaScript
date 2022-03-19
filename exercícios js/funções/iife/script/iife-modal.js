
//function init (){
//    let isValid = true
//    console.log('init modal', isValid)
//}
//init()

//(function(){    
//    let isValid = false
//        console.log('init modal', isValid)
//            function init (){
//                console.log('init do modal')
//          }
//          init()
//})()


(function(win, doc){    
    let isValid = false
        win.alert('olá vocês')
        console.log('init modal', isValid)
            function init (){
                console.log('init do modal')
          }
          init()
})(window, document)