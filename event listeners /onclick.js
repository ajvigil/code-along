function buttonClick() {
    console.log('button clicked')
    let pTag = document.getElementById('target')
    console.log(pTag)
    const red = Math.floor(Math.random()*255)
    pTag.style.color = 'rgb(0, 255, 0)'
}