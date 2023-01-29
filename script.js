const aData = [{
    codigo: '001001', nome: 'Jose da Silva', email:
        'jose@email.com', telefone: '(11) 99901-1234'
},
{
    codigo: '001002', nome: 'Marcio de Souza', email:
        'marcio@email.com', telefone: '(11) 99902-1234'
},
{
    codigo: '001003', nome: 'Mauricio Cruz', email:
        'mauricio@email.com', telefone: '(11) 99903-1234'
},
{
    codigo: '001004', nome: 'Fabiana Dias', email: 'fabiana@email.com'
    , telefone: '(11) 99904-1234'
}
];

function adicionarElemento() {
    const name = document.getElementById('name').value;
    const code = document.getElementById('code').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    const obj = { codigo: code, nome: name, email: email, telefone: phone };

    if (document.getElementById('name').value === '' || document.getElementById('code').value === '' ||
        document.getElementById('email').value === '' || document.getElementById('phone').value === '') {
        alert('Lamento! Falta alguma informação!');
    } else {
        aData.push(obj);
    }

    document.getElementById("container").innerHTML = ""
    carregarTabela(aData);
}


const adicionar = document.getElementById('adicionar')
    .addEventListener('click', adicionarElemento);

function carregarTabela(dados) {
    const container = document.getElementById("container");

    const header = document.createElement('thead');

    const codigoCabecalho = document.createElement('td');
    const codigoCabecalhoTexto = document.createTextNode('Codigo');
    codigoCabecalho.appendChild(codigoCabecalhoTexto);

    const nomeCabecalho = document.createElement('td');
    const nomeCabecalhoTexto = document.createTextNode('Nome');
    nomeCabecalho.appendChild(nomeCabecalhoTexto);

    const emailCabecalho = document.createElement('td');
    const emailCabecalhoTexto = document.createTextNode('Email');
    emailCabecalho.appendChild(emailCabecalhoTexto);

    const telefoneCabecalho = document.createElement('td');
    const telefoneCabecalhoTexto = document.createTextNode('Telefone');
    telefoneCabecalho.appendChild(telefoneCabecalhoTexto);

    header.appendChild(codigoCabecalho);
    header.appendChild(nomeCabecalho);
    header.appendChild(emailCabecalho);
    header.appendChild(telefoneCabecalho);

    container.appendChild(header);

    dados.forEach(item => {
        const tr = document.createElement('tr');
        const tdCodigo = document.createElement('td');
        const tdNome = document.createElement('td');
        const tdEmail = document.createElement('td');
        const tdTelefone = document.createElement('td');

        const textCodigo = document.createTextNode(item.codigo);
        const textNome = document.createTextNode(item.nome);
        const textEmail = document.createTextNode(item.email);
        const textTelefone = document.createTextNode(item.telefone);



        tdCodigo.appendChild(textCodigo);
        tdNome.appendChild(textNome);
        tdEmail.appendChild(textEmail);
        tdTelefone.appendChild(textTelefone);

        tr.appendChild(tdCodigo);
        tr.appendChild(tdNome)
        tr.appendChild(tdEmail);
        tr.appendChild(tdTelefone);

        container.appendChild(tr);
    });
};



carregarTabela(aData);