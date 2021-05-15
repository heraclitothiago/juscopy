let url = "https://raw.githubusercontent.com/heraclitothiago/api-cp-jurisprudencia/main/db.json"

const fetchDataAndQuerys = async() => {
    try {
        const response = await fetch(url)
        return jsonValues = await response.json()
    } catch (error) {
        console.error("Erro ao executar. Entre em contato comigo pelo twitter @h_thiago")
    }
}
fetchDataAndQuerys()

function awaitToExec(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 1000);
    });
}

var queryElement = (query) => {
    return document.querySelector(query)
}

jsonValues.run