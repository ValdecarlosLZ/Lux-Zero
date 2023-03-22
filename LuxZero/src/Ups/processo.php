<?php
session_start();

$usuario_padrao = "LOUZER";
$senhapadrao    = 12345678;

$user = $_POST['user'];
$password = $_POST['password'];
//COOKIE

if ($user == $usuario_padrao && $password == $senhapadrao){
echo "ENTROU PROCESSO";

    header('Location: ../../Index.html');
    exit;
}
else if ($user < 5 && $password && $password < 8){
echo "Usuario e senha incorretos";
 header('Location: ../../Login.html?ERRO=true');
    exit;}

    function function_alert($msg) {
        echo "<script type='text/javascript'>alert('$msg');</script>";
    }?>

<?php

if ($_POST)
{
    $user == $usuario_padrao && $password == $senhapadrao;

    if ($user)
    {
    ?>
        <div class="sucesso">Login efetuado com sucesso</div>
    <?php
    }
    else
    {
    ?>
<div class="erro"><script>location.reload(forceGet)</script></div>
    <?php
    }
}

?>
/*
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
    header('Location: ../../404.html');
    exit;
} else {
    echo "Cookie OFF";
}

//excluir
// setcookie('Caos', '', time() - 86400);

// $_SESSION 

//excluir
// unset($_SESSION['user']);
// session_destroy();

//VALIDAÇÃO

// $nome = $_POST["nome"];
// $email = $_POST["email"];
$erro = FALSE;

// if(empty($nome)OR strstr($nome,' ')){
//     echo "Insira seu <strong>nome</strong>. <br>";
//     $erro = true;
// }

// if(strlen($email)< 8 OR !strstr($email,'@') OR empty($email)){
//     echo "Digite um <strong>Email</strong> valido. <br>";
//     $erro = true;
// }

*/
