function writeCards(names,event){
    let messages=[]
    for(let n=0; n<names.length; n++){
        let gratitude=`Thank you, ${names[n]}, for the wonderful ${event} gift!`
    messages.push(gratitude)
    }
    return messages

}
function countDown(number){
    for(let n=number; n>=0; n--){
        console.log(n);
    }
}
