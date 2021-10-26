function wSec(e) {
    return new Promise(t => {
        setTimeout(() => { t(e) }, 1e3)
    })
}
var selector = e => document.querySelector(e);
(async e => {
    await wSec(5);
    selector("button.btn--blue").click();
    var jurisprudencia = selector("div.unprintable:nth-child(2)");
    let newContainer = document.createElement("textarea");
    newContainer.value = jurisprudencia.innerText;
    document.body.appendChild(newContainer);
    newContainer.select();
    document.execCommand("copy");
    document.body.removeChild(newContainer);
    selector("div.unprintable:nth-child(2)").innerHTML = `
    <h3>Jurisprudência copiada com sucesso!!!</h3>
    <p>Nosso script será atualizado em breve e teremos muitas novidades 🎉🥳</p>
    <p>Faça uma contribuição de <b>qualquer valor</b> incentive o desenvolvimento de facilidades que o beneficiarão sempre =)<br>
    <b>Chave pix:<b> dradvloper@gmail.com</p>
    <img src="https://github.com/heraclitothiago/juscopy/raw/main/assets/download.png" alt="pix" style="width: 200px;">
    `
    console.log("%cA Jurisprudência foi copiada!", "background-color: orange; font-size: 15px;");
}
)();
