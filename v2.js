var swal = document.createElement('script');
swal.setAttribute('src', 'https://cdn.jsdelivr.net/npm/sweetalert2@11');
document.head.appendChild(swal);

var url = () => window.location;

var regex = target => {
    return "https:\/\/.*\.jusbrasil.com.br\/" + target + "\/[0-9]*\/.*";
};

var modalAlerts = {
    success: {
        title: "<strong>Copiado com sucesso!</strong>",
        imageUrl: 'https://raw.githubusercontent.com/heraclitothiago/juscopy/main/assets/download.png',
        imageWidth: 180,
        width: 600,
        showConfirmButton: false,
        html: `Fortaleça nossa causa 💪
<br> Doe-nos 💸 qualquer quantia ☕ e incentive o desenvolvimento de facilidades que o beneficiarão sempre 🤩
<br><b>Pix</b> dradvloper@gmail.com`
    }
}

function juscopyBtn(father) {
    var btnJuscopy = document.createElement('a');
    btnJuscopy.classList.add('btn');
    btnJuscopy.classList.add('btn--orange');
    btnJuscopy.setAttribute("id", "juscopy");
    btnJuscopy.innerText = "Copiar com Juscopy";
    var icon = document.createElement('span');
    icon.classList.add('icon');
    icon.classList.add('icon-content-copy');
    btnJuscopy.appendChild(icon);
    divToAppend = document.querySelector(father);
    divToAppend.appendChild(btnJuscopy);
}

var removeBtn = selector => {
    var btn = document.querySelector(selector);
    btn.remove();
}

if (url().href.match(regex('modelos-pecas'))) {
    removeBtn(".DocumentActionsCard-download-btn");
    removeBtn(".DocumentActionsCard-copy-btn");
    juscopyBtn(".DocumentActionsCard-actions");
} else if (url().href.match(regex('processos'))) {
    removeBtn("button.btn--blue:nth-child(1)");
    juscopyBtn(".ToolBarBase-leftActions");
} else if (url().href.match(regex('jurisprudencia'))) {
    try {
        var btn = document.querySelector("button.btn--blue");
        btn.click();
    } catch (e) {}
    removeBtn(".CopyContentModal-copyButton");
    juscopyBtn(".modal-footer");
} else {
    setTimeout(async () => {
       await Swal.fire({
            title: "<strong>Ooops!</strong>",
            icon: 'error',
            showConfirmButton: false,
            html: `Parece que você não está no ambiente correto
    <br>Tente acessar as páginas de Jurisprudência ou de Modelos de Peças no Jusbrasil
    <br>Acesse a página da documentação <a href="https://github.com/heraclitothiago/juscopy">Juscopy</a>`
        })
    }, 1e3)
}

var selectors = [];
selectors['processos'] = ".unprintable";
selectors['jurisprudencia'] = ".modal-body > div:nth-child(2)";
selectors['modelos-pecas'] = ".unprintable";

try {
    var btnCopy = document.querySelector("#juscopy");
    btnCopy.addEventListener("click", function() {
        var base = url().pathname.split("/")
        var content = document.querySelector(selectors[base[1]])
        navigator.clipboard.writeText(content.innerText)
        Swal.fire(modalAlerts.success)
        scroll(0, 0)
        try {
            //fecha a modal no caso de jurisprudência
            var btnFechar = document.querySelector(".CopyContentModal-closeButton");
            btnFechar.click()
        } catch (e) {}
        console.log('%c Copiado com sucesso! Faça-nos um pix e apoie o nosso projeto e-mail dradvloper@gmail.com',
            'background: #ee8500; color: black; font-size: 15px');
    })
} catch (e) {
setTimeout(async () => {
       await Swal.fire({
            title: "<strong>Ooops!</strong>",
            icon: 'error',
            showConfirmButton: false,
            html: `Oooops, algo inesperado aconteceu
    <br>Tente acessar as páginas de Jurisprudência ou de Modelos de Peças no Jusbrasil
    <br>Acesse a página da documentação <a href="https://github.com/heraclitothiago/juscopy">Juscopy</a>`
        })
    }, 1e3)
}
