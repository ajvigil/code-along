const grabBacon = () => {
    const targetElement = document.getElementById('target')

    fetch("https://baconipsum.com/api/?type=all-meat&paras=6&start-with-lorem=1")
        .then(response => response.json())
        .then(data => {
            const mappedArray = data.map(index => {
                console.log(index)
                return `<p> ${index} </p>`
                })
            targetElement.innerHTML = mappedArray.join("\n") //\n is a new line instead of it joining with commas
        })
}

window.onload = grabBacon()