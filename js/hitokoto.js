fetch('https://v1.hitokoto.cn/?c=a&b&c=c')
    .then(response => response.json())
    .then(data => {
        const hitokoto = document.querySelector('#hitokoto_text')
        hitokoto.innerText = data.hitokoto
    })
    .catch(console.error)   
