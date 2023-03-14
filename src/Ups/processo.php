<?php

//COOKIE

$cookie_name = "Caos";
$cookie_value = "36242400";
setcookie($cookie_name, $cookie_value, time() + 86400);


if (isset($_COOKIE[$cookie_name])) {
    echo 'Você de novo???';
} else {
    echo 'Quem é você?';
    setcookie('Caos', 'senha', time() + 360);
}

if (count($_COOKIE) > 0) {
    echo "Cookie ON";
} else {
    echo "Cookie OFF";
}

    //excluir
// setcookie('Caos', '', time() - 86400);

// $_SESSION 

session_start();
if (isset($_SESSION['user'])) {
    echo "Welcome {$_SESSION['user']}!";
} else {
    echo 'Novo por aqui?';
    $_SESSION['user'] = 'LOUZ';
}

    //excluir
// unset($_SESSION['user']);
// session_destroy();

//VALIDAÇÃO

$user = $_POST["user"];
$password = $_POST["password"];
$erro = FALSE;

if (empty($user) or strstr($user, '')) {
    print_r("Inseira seu nome de usuário");
    $erro = true;
}

if (empty($password) or strlen($password) < 8) {
    print_r("Insira uma senha valida (maior que 8 digitos)");
    $erro = true;
}
?>