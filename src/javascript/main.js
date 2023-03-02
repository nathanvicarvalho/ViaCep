//for(var i=0; i < 1000000; i++)
var searchResult = document.getElementById('searchResult');
/* var loader = document.getElementById('loader');
loader.style.display = 'none'; */

function getDadosCep(){
        //loader.style.display = 'flex';
        searchResult.style.display = 'block';
        //searchResult.appendChild(loader);
    let inputDadosCep = document.getElementById('cashierSearch').value;
    let url = 'https://viacep.com.br/ws/'+inputDadosCep+'/json/';
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', url);

    xmlHttp.onreadystatechange = function(){
        if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
            let dadosJsonText = xmlHttp.responseText;
            let dadosJsonObject = JSON.parse(dadosJsonText); //para transformar em objetos para recuperar valores (manipulação)
            document.getElementById('cep').innerHTML = dadosJsonObject.cep;
            document.getElementById('endereco').innerHTML = dadosJsonObject.logradouro;
            document.getElementById('bairro').innerHTML = dadosJsonObject.bairro;
            document.getElementById('cidade').innerHTML = dadosJsonObject.localidade;
            document.getElementById('estado').innerHTML = dadosJsonObject.uf;
        }
    }

   /*  if(inputDadosCep == ''){
        var alert = document.getElementById('alerta');
        alert.style.display = 'block';
        searchResult.style.display = 'none';
    }else{
        alert.style.display = 'none';
    } */

    xmlHttp.send();  
}

