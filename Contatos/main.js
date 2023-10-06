class Contatos {
    constructor(nome, email, telefone, mensagem) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.mensagem = mensagem;
    }
}

class GerenciadorContatos {
    constructor() {
        this.contatos = []
    }

    adicionarContatos(contato) {
        this.contatos.push(contato);
    }

    exibirContatos() {
        const listaContatos = document.getElementById('contato-lista')

        listaContatos.innerHTML = ''

        for (const contato of this.contatos) {
            const li = document.createElement('li');
            li.innerHTML = `${contato.nome} <br> ${contato.email} <br> ${contato.telefone} <br> ${contato.mensagem}`

            listaContatos.appendChild(li)
        }
    }
}

const gerenciadorContatos = new GerenciadorContatos();

const contatoForm = document.getElementById('contato-form');

const nomeForm = document.getElementById('nome');
const emailForm = document.getElementById('email');
const telefoneForm = document.getElementById('tel');
const mensagemForm = document.getElementById('mensagem')

const mostrarContatos = document.getElementById('mostrar-contatos');
const ocultarContatos = document.getElementById('ocultar-contatos');
const listaContatos = document.getElementById('contato-lista');

contatoForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = nomeForm.value;
    const email = emailForm.value;
    const telefone = telefoneForm.value;
    const mensagem = mensagemForm.value;

    const contato = new Contatos(nome, email, telefone, mensagem);

    gerenciadorContatos.adicionarContatos(contato)

    nomeForm = ''
    emailForm = ''
    telefoneForm = ''
    mensagem = ''
});

mostrarContatos.addEventListener('click', function () {
    gerenciadorContatos.exibirContatos();
    listaContatos.style.display = 'block'
})

ocultarContatos.addEventListener('click', function () {
    listaContatos.style.display = 'none'
})
