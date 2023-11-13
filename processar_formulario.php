<?php

//Declando minhas variaveis

$nome = addslashes($_GET['nome']);
$email = addslashes($_GET['email']);
$telefone = addslashes($_GET['telefone']);
$mensagem = addslashes($_GET['mensagem']);

// Declarando - Remetente / Destino

$para = "gabrieltechvision@gmail.com";
$assunto = "Clientes - TechVision ( Portfolio)";

// Corpo do E-mail

$corpo = "Nome: ".$nome."\n"."E-mail: ".$email."\n"."Telefone: ".$telefone."\n"."Mensagem: ".$mensagem;

// Cabeçario 

$cabeca = "From: gd699192@gmail.com"."\n"."Reply-to: ".$email."\n"."X=Mailer:PHP/".phpversion();

if(mail($para,$assunto,$corpo,$cabeca)){
    echo("E-mail enviado com sucesso!");
}

    echo("Houve um erro ao enviar o E-mail");

?>