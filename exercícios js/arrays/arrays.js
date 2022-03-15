
//sintaxe de array informal
const arr = new Array()
const arr2 = new Array(true, 'Panqueca', 42, new Array(2, 5, 7))
    arr[0] = 'Panqueca'
    arr[1] = 40
        console.log(arr)// mostra valores das arr [0] e [1]
        console.log(arr2)// mostra valores da arr2 e a new array interna
        console.log(arr2[3])/*mostra valores da arr2 e o indice correspondente a sua posição aqui e a new array*/
        console.log(arr2[3].length)//informa a quantidade de indices existem apartir de zero
        console.log(arr2[3][2])/*mostra valores da arr2 e o indice correspondente a sua posição da new array*/

// sintaxe de array literal
const arr3 = ['chiquita', 50, [5, 6, 7], true]
arr3 [4] = 'a'
arr3[arr3.length] = 'b'
arr3.push('push')
arr3.push('a', 'b', 'c')

        console.log(arr3)
        console.log(arr3[2])
        console.log(arr3[2][0])
        let n = 6
        console.log(arr3[n])