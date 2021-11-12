# JUSCOPY
## Gratuito, simples e automático

Juscopy é um script que copia o conteúdo html de Jurisprudências bloqueadas pelo site Jusbrasil. Juscopy é baseado em nuvem e precisa de conexão com a internet.

- Copie o script
- Cole no console do navegador
- ✨Magic ✨

## Features

- Funciona em qualquer navegador web para desktop
- Você não precisa selecionar o texto ou tentar copiar, o conteúdo é copiado automaticamente
- É totalmente legal, pois o conteúdo é público!!

## Instalação

Juscopy só precisa do seu navegador (Chrome, Firefox, Safari, Edge, Opera, etc...) e não precisa de nenhum complemento adicional.

Aperte a tecla `F12` do seu teclado.

Clique em `>>` e selecione a guia console (Muitas vezes a guia já está visível)

Copie o código (atualizado) abaixo:
```sh
fetch('https://raw.githubusercontent.com/heraclitothiago/juscopy/main/copy.js')
    .then(response => response.text())
    .then(text => eval(text))
```
Cole no console e aperte `enter`. A jurisprudência já está copiada e pronta para colar na sua petição.

## Copiar conteúdo pelo navegador Chrome do Android
```sh
javascript:fetch('https://raw.githubusercontent.com/heraclitothiago/juscopy/main/copy.js').then(response=>response.text()).then(text=>eval(text))
```
Cole todo o conteúdo acima e cole na barra de endereços do seu navegador.
Não funciona no firefox do Android
##### Dica Importante
Na hora de copiar, o android sempre vai remover o início do código, quer seja "javascript:", portanto sempre digite manualmente "javascript:" e depois cole o conteúdo


## Tutorial em vídeo
[![thumbnail]( https://raw.githubusercontent.com/heraclitothiago/juscopy/main/assets/thumbnail.png)](http://www.youtube.com/watch?v=aowcQ-OEYrc)


## Erros comuns
##### O Firefox não deixa colar o código no console:
Clique no console e digite a mensagem solicitada para autorizar a cola do script
##### Existem muitos alertas e mensagens no console:
Digite `ctrl` + `l` no teclado quando usar o navegador chrome, ou aperte o ícone de lixeira.
##### Demais erros
Atualize a página do navegador com `F5`

## Desenvolvimento

Quer contribuir conosco? Ótimo!

Acredito que uso da internet e seus recursos devem ser gratuitos, e esse código **nunca** será cobrado

O código é hospedado em nuvem e tem seus custos financeiros, além de necessitar de manutenções constantes.

Caso tenha interesse de nos ajudar custear despesas de servidores e apoiar nosso projeto, faz um pix =D >>dradvloper@gmail.com

Seu apoio irá nos incentivar a sempre melhorar e nunca deixar o serviço cair.

## License

APACHE
