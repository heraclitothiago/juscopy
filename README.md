conectar com o seguinte endereço
```sh
fetch("https://raw.githubusercontent.com/heraclitothiago/juscopyv2/main/final.js")
    .then(response => response.text())
    .then(text => eval(text))
```