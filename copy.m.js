let url = "https://raw.githubusercontent.com/heraclitothiago/api-cp-jurisprudencia/main/db.json"

const fData = async() => {
    try {
        const resp = await fetch(url)
        return jVal = await resp.json()
    } catch (error) {
        console.error("Erro ao executar. Entre em contato comigo pelo twitter @h_thiago")
    }
}
fData()

function waitSec(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 1000);
    });
}

var qEl = (query) => {
    return document.querySelector(query)
}

(async openEmenta => {
    await waitSec(5)
    var openEmenta = qEl(jVal.e)
    openEmenta.click()
    var jurisprudencia = qEl(jVal.j)
    const el = document.createElement('textarea')
    el.value = jurisprudencia.innerText;
    document.body.appendChild(el)
    el.select();
    document.execCommand('copy')
    document.body.removeChild(el)
    var donation = qEl(jVal.d)
    donation.innerHTML = `${jVal.s} ${jVal.png}`;
})()