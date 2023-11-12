<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Coleta os dados do formulário
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $celular = $_POST["celular"];
    $mensagem = $_POST["mensagem"];

    // Aqui você pode realizar ações com os dados, como salvá-los em um banco de dados ou enviá-los por email
    // Por exemplo, exibindo na tela para este exemplo
    echo "Nome: " . $nome . "<br>";
    echo "Email: " . $email . "<br>";
    echo "Celular: " . $celular . "<br>";
    echo "Mensagem: " . $mensagem . "<br>";
} else {
    // Se alguém tentar acessar este script diretamente, redireciona para o formulário
    header("Location: formulario.html");
    exit();
}
?>
