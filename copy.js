var button = document.querySelector('button.btn--blue');
button.click()
var jurisContent = async () => {
    var jurisprudencia = document.querySelector('.modal-body > div:nth-child(2)');
    return textJuris = await jurisprudencia.innerText;
}

await jurisContent()
var newContainer = document.createElement("textarea");
newContainer.value = textJuris;
document.body.appendChild(newContainer);
newContainer.select();
document.execCommand("copy");
document.body.removeChild(newContainer);
document.querySelector(".CopyContentModal-body").innerHTML = `
    <h2>Jurisprudência copiada com sucesso!!!</h2>
    <hr>
    <p style="line-height: 20px;">Nosso script será atualizado em breve e teremos muitas novidades 🎉🥳</p>
    <p style="line-height: 20px;">Faça uma contribuição de <b>qualquer valor</b> incentive o desenvolvimento de facilidades que o beneficiarão sempre 😊<br>
    <b>Chave pix:<b> dradvloper@gmail.com</p>
    <img src="https://github.com/heraclitothiago/juscopy/raw/main/assets/download.png" alt="pix" style="width: 180px;">
    `
console.log("%cA Jurisprudência foi copiada!", "background-color: orange; font-size: 15px;");
document.querySelector('.CopyContentModal-copyButton').remove()
