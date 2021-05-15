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

(async openEmenta => {
    await awaitToExec(5)
    var openEmenta = queryElement(jsonValues.ementaSeletor)
    openEmenta.click()
    var jurisprudencia = queryElement(jsonValues.jurisprudenciaSelector)
    const el = document.createElement('textarea')
    el.value = jurisprudencia.innerText;
    document.body.appendChild(el)
    el.select();
    document.execCommand('copy')
    document.body.removeChild(el)
    var donation = queryElement(jsonValues.donationSelector)
    donation.innerHTML = `${jsonValues.successMessage} ${jsonValues.pngFile}`;
})()