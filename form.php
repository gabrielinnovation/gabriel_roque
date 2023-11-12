<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Coleta os dados do formulário
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $celular = $_POST["celular"];
    $mensagem = $_POST["mensagem"];

    // Configurações de email
    $destinatario = "gabrieltechvision@gmail.com"; // Substitua pelo seu endereço de email
    $assunto = "Nova mensagem do formulário";

    // Corpo do email
    $corpo = "Nome: $nome\n";
    $corpo .= "Email: $email\n";
    $corpo .= "Celular: $celular\n";
    $corpo .= "Mensagem: $mensagem\n";

    // Envia o email
    $enviado = mail($destinatario, $assunto, $corpo);

    // Verifica se o email foi enviado com sucesso
    if ($enviado) {
        echo "Obrigado por entrar em contato! Sua mensagem foi enviada.";
    } else {
        echo "Desculpe, houve um problema no envio da mensagem. Por favor, tente novamente mais tarde.";
    }
} else {
    // Se alguém tentar acessar este script diretamente, redireciona para o formulário
    header("Location: formulario.html");
    exit();
}
?>

