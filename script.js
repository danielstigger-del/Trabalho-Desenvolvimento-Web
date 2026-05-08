document.getElementById('contactForm').addEventListener('submit', function(event) {
    // 1. Impede o formulário de recarregar a página
    event.preventDefault();

    // 2. Coleta os dados (opcional, para envio via API/fetch)
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log('Dados enviados:', { name, email, message });

    // 3. Exibe a mensagem de sucesso
    const successMessage = document.getElementById('successMessage');
    successMessage.classList.remove('hidden');

    // 4. Limpa o formulário
    document.getElementById('contactForm').reset();

    // 5. Esconde a mensagem após 5 segundos
    setTimeout(() => {
        successMessage.classList.add('hidden');
    }, 5000);
});