const insertAlert = async () => {
    var scriptEl = document.createElement('script');
    scriptEl.setAttribute('src', 'https://cdn.jsdelivr.net/npm/sweetalert2@11');
    document.head.appendChild(scriptEl);
}
insertAlert()

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

const juscopyBtn = async father => {
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
    await divToAppend.appendChild(btnJuscopy);
}

var removeBtn = selector => {
    var btn = document.querySelector(selector);
    btn.remove();
}

const copiar = async element => {
    var btnCopy = await document.querySelector("#juscopy");
    btnCopy.addEventListener("click", () => {
        var content = document.querySelectorAll(element)
        navigator.clipboard.writeText(content[0].innerText)
        Swal.fire(modalAlerts.success)
        console.log('%c Copiado com sucesso! Faça-nos um pix e apoie o nosso projeto e-mail dradvloper@gmail.com',
            'background: #ee8500; color: black; font-size: 15px');
    })
}

if (url().href.match(regex('modelos-pecas'))) {
    removeBtn(".DocumentActionsCard-download-btn");
    removeBtn(".DocumentActionsCard-copy-btn");
    juscopyBtn(".DocumentActionsCard-actions");
    copiar("[data-doc-artifact]")
}
if (url().href.match(regex('processos'))) {
    removeBtn("button.btn--blue");
    juscopyBtn(".ToolBarBase-leftActions");
    copiar("[data-doc-artifact]")
}
if (url().href.match(regex('jurisprudencia'))) {
    removeBtn("button.btn--blue");
    juscopyBtn(".ToolBarBase-leftActions");
    copiar("[data-cy=copy-content-modal-wrapper]")
}
