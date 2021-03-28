var arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

var arrColor = ["btn btn-success", "btn btn-danger", "btn btn-warning"]

function printBox () {
    var tableRow = document.getElementsByTagName('tr')

    for (let i = 0; i < arr.length; i++) {
        var out = ''
        for (let j = 0; j < arr.length; j++) {
            out += `<td><div id="box${arr[i][j]}">${arr[i][j]}<div></td>`
        }
        tableRow[i].innerHTML = out + `<td><button type="button" class="btn btn-dark" onclick="sortLeft(${i})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-right" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"/>
      </svg></button></td>`
    }

    tableRow[3].innerHTML = 
    // `
    //     <td>A</td>
    //     <td>A</td>
    //     <td>A</td>
    //     <td></td>
    // `
    `
        <td><button type="button" class="btn btn-dark" onclick="sortBottom(${0})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-up" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"/>
      </svg></button></td>
        <td><button type="button" class="btn btn-dark" onclick="sortBottom(${1})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-up" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"/>
      </svg></button></td>
        <td><button type="button" class="btn btn-dark" onclick="sortBottom(${2})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-up" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"/>
      </svg></button></td>
        <td></td>
    `
}

function sortLeft (index) {
    if (arr[index][0] > arr[index][2]) {
        arr[index].sort((a, b) => a > b ? 1 : -1) // acceding sort
    } else {
        arr[index].sort((a, b) => a > b ? -1 : 1)
    }
    printBox()
}

function sortBottom(index) {
    // take an elements from one colum in matrix to new array
    var arrNew = []
    for (let i = 0; i < arr.length; i++) {
        arrNew.push(arr[i][index])
    }

    // sort it
    if (arrNew[0] > arrNew[2]) {
        arrNew.sort((a, b) => a > b ? 1 : -1) // acceding sort
    } else {
        arrNew.sort((a, b) => a > b ? -1 : 1)
    }

    arr[0][index] = arrNew[0]
    arr[1][index] = arrNew[1]
    arr[2][index] = arrNew[2]
    printBox()            
}

function counter () {
    var newArr =  Array(3).fill(0).map(i => i = Array(3).fill(0))
    // var newArr = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
    for (let i = 0; i < arr.length; i++) {
        for (let j = 2; j >= 0; j--) {
            newArr[j][i] = arr[i][j]
        }
    }
    arr = newArr.reverse()
    printBox()
}

function clockWise () {
    var newArr =  Array(3).fill(0).map(i => i = Array(3).fill(0))
    arr.reverse()
    for (let i = 0; i < arr.length; i++) {
        for (let j = 2; j >= 0; j--) {
            newArr[j][i] = arr[i][j]
        }
    }
    arr = newArr
    printBox()
}

function reset () {
    arr = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]
    printBox()
}

// call main function
printBox()