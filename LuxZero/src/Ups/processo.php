<?php
session_start();

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

if (isset($_SESSION['user'])) {
    echo "Welcome {$_SESSION['user']}!";
} else {
    echo 'Novo por aqui?';
    $_SESSION['user'] = 'LOUZER';
    $_SESSION['password'] = '12345678';
}

//excluir
// unset($_SESSION['user']);
// session_destroy();

//VALIDAÇÃO


$user = $_POST['user'];
$password = $_POST['password'];
// $nome = $_POST["nome"];
// $email = $_POST["email"];
$erro = FALSE;

if (strlen($user) < 5) {
    echo "O <b>Usuário</b> deve conter mais de 5 caracteres. <br>";
    $erro = true;
}
if (strlen($password) < 8) {
    echo "A <b>Senha</b> deve conter mais de 8 digitos. <br>";
    $erro = true;
}
if (!$erro) {
    echo "Dados digitados corretamente";
    // echo '<br> <input href="Index.html" type="button" name="entrar" value="entrar">';
    header('Location: ../../Index.html');
    exit;
}

// if(empty($nome)OR strstr($nome,' ')){
//     echo "Insira seu <strong>nome</strong>. <br>";
//     $erro = true;
// }

// if(strlen($email)< 8 OR !strstr($email,'@') OR empty($email)){
//     echo "Digite um <strong>Email</strong> valido. <br>";
//     $erro = true;
// }


?>