function getSum(max){
    let sum = 0
    for(let i=0; i<max; i++){
        sum+=i
    }
    return sum
}
onmessage = function(event){
    console.log(event.data)
    const result = getSum(event.data)
    postMessage(result)
}

