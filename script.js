/* Modal dos projetos */

function abrirModal(projeto) {

    const modal = document.getElementById("modal");
    const titulo = document.getElementById("tituloModal");
    const texto = document.getElementById("textoModal");

    titulo.textContent = projeto;

    texto.textContent =
        "Este projeto faz parte das ações sociais da ONG Esperança. " +
        "Você pode participar realizando seu cadastro como voluntário.";

    modal.style.display = "flex";
}


function fecharModal() {

    const modal = document.getElementById("modal");

    modal.style.display = "none";
}


/* Validação do formulário */

const formulario = document.getElementById("formulario");

if (formulario) {

    formulario.addEventListener("submit", function(event) {

        event.preventDefault();

        let valido = true;

        const nome =
            document.getElementById("nome");

        const email =
            document.getElementById("email");

        const telefone =
            document.getElementById("telefone");

        const cidade =
            document.getElementById("cidade");


        const erroNome =
            document.getElementById("erroNome");

        const erroEmail =
            document.getElementById("erroEmail");

        const erroTelefone =
            document.getElementById("erroTelefone");

        const erroCidade =
            document.getElementById("erroCidade");


        /* Limpa as mensagens */

        erroNome.textContent = "";
        erroEmail.textContent = "";
        erroTelefone.textContent = "";
        erroCidade.textContent = "";


        /* Validação do nome */

        if (nome.value.trim() === "") {

            erroNome.textContent =
                "Informe seu nome.";

            valido = false;
        }


        /* Validação do e-mail */

        if (email.value.trim() === "") {

            erroEmail.textContent =
                "Informe seu e-mail.";

            valido = false;

        } else if (!email.value.includes("@")) {

            erroEmail.textContent =
                "Informe um e-mail válido.";

            valido = false;
        }


        /* Validação do telefone */

        if (telefone.value.trim() === "") {

            erroTelefone.textContent =
                "Informe seu telefone.";

            valido = false;
        }


        /* Validação da cidade */

        if (cidade.value.trim() === "") {

            erroCidade.textContent =
                "Informe sua cidade.";

            valido = false;
        }


        /* Salva os dados */

        if (valido) {

            const voluntario = {

                nome: nome.value,
                email: email.value,
                telefone: telefone.value,
                cidade: cidade.value

            };


            localStorage.setItem(
                "voluntario",
                JSON.stringify(voluntario)
            );


            /* Mostra o Toast */

            const toast =
                document.getElementById("toast");

            toast.style.display = "block";


            formulario.reset();


            setTimeout(function() {

                toast.style.display = "none";

            }, 3000);
        }

    });
}