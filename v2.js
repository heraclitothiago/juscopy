var { pathname, search } = Object.fromEntries(new URLSearchParams(window.location));
var [, target] = pathname.split("/");

var scriptEl = document.createElement('script');
scriptEl.setAttribute('src', 'https://cdn.jsdelivr.net/npm/sweetalert2@11');
document.head.appendChild(scriptEl);

const isLogged = document.querySelector(".topbar-profile") == null ? false : true;

if (isLogged == false) {
    setTimeout(() => {
        Swal.fire({
            title: 'Ooops...',
            text: 'Faça login no jusbrasil para poder copiar o conteúdo!',
        })
        return;
    }, 1000);
}

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

const juscopyBtn = father => {
    var btnJuscopy = document.createElement('a');
    btnJuscopy.classList.add('btn', 'btn--orange');
    btnJuscopy.setAttribute("id", "juscopy");
    btnJuscopy.innerText = "Copiar com Juscopy";
    var icon = document.createElement('span');
    icon.classList.add('icon', 'icon-content-copy');
    btnJuscopy.appendChild(icon);
    divToAppend = document.querySelector(father);
    divToAppend?.appendChild(btnJuscopy);
}

var removeBtn = selector => document.querySelector(selector)?.remove();

const copiar = element => {
    document.querySelector("#juscopy")
        ?.addEventListener("click", () => {
            var content = document.querySelectorAll(element)
            navigator.clipboard.writeText(content[0].innerText)
            Swal.fire(modalAlerts.success)
            console.log('%c Copiado com sucesso! Faça-nos um pix e apoie o nosso projeto e-mail dradvloper@gmail.com', 'background: #ee8500; color: black; font-size: 15px');
        })
}

if (target == 'modelos-pecas') {
    removeBtn(".DocumentActionsCard-actions > div:nth-child(2) > button");
    removeBtn(".DocumentActionsCard-actions > div:nth-child(1) > button");
    juscopyBtn(".DocumentActionsCard-actions");
    copiar("[data-doc-artifact=MODELO_PECA] > [data-testid=copy-content-visible]")
}
if (target == 'processos') {
    removeBtn(".MotionPage-toolBar > div > div > div > .ToolBarBase-leftActions > div > div.Dropdown.dropdown > div.Dropdown-trigger > button");
    removeBtn(".MotionPage-toolBar > div > div > div > .ToolBarBase-leftActions > div > .WithMetricsDispatcher > button")
    juscopyBtn(".MotionPage-toolBar > div > div > div > .ToolBarBase-leftActions > div");
    copiar("[data-doc-artifact] > article")
}
if (target == 'jurisprudencia') {
    removeBtn(".ToolBarBase-leftActions > .LoginRequired > button");
    juscopyBtn(".ToolBarBase-leftActions > .LoginRequired");
    copiar("[data-doc-artifact=PECA] > article")
}
if (search != "") {
    setTimeout(() => {
        Swal.fire({
            title: 'Ooops...',
            text: 'Não encontramos nenhum conteúdo para copiar',
        })
    }, 1000);
}
