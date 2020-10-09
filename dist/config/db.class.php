<?php

class db {

	//host
	private $host = 'localhost';

	//usuario
	private $usuario = 'root';

	//senha
	private $senha = '';

	//banco de dados
	private $database = 'investidor';

	public function conecta_mysql(){

		//criar a conexao
		$conn = mysqli_connect($this->host, $this->usuario, $this->senha, $this->database);

		//ajustar o charset de comunicação entre a aplicação e o banco de dados
		mysqli_set_charset($conn, 'utf8');

		//verficar se houve erro de conexão
		if(mysqli_connect_errno()){
			echo 'Erro ao tentar se conectar com o BD MySQL: '.mysqli_connect_error();	
		}

		return $conn;
	}

}

?>