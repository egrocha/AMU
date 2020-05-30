Pre-Requisitos para correr o servidor:

NodeJS
comando npm
Postman (caso queiram testar as rotas e respetivos resultados)
MongoDB


Correr o servidor:

1º Instalar pacotes necessários:

	$npm i
	$npm i mongoose

2º Usar o comando $npm start ou alternativamente $node www

A partir deste ponto, o servidor deverá estar a correr.


==================================================

------------------  API  -------------------------


A base de dados (reservas) será composta por 3 modelos/collections: espaços, utilizadores e reservas.

Estrutura dos modelos:

	*espaços*

		_id : ObjectId atribuído pelo mongo
		name : String

	*utilizadores*

		_id : ObjectId atribuído pelo mongo
		nif: String
		name: String
		password: String

	*reservas*

		_id : ObjectId atribuído pelo mongo
		place: String (Referente ao nome do espaço)
		startDate: String (Formato mm/dd/yyy, hh:mm:ss AM/PM, data em que inicia reserva)
		endDate: String (Formato igual)
		nif: String (Será o nif da pessoa que reservou o espaço)

Rotas:


GET http://localhost:4007/reservas -> Lista todas as reservas ativas

GET http://localhost:4007/reservas/places/:place -> Lista todas as reservas referentes ao espaço :place

GET http://localhost:4007/reservas/:id -> Lista reserva com o id pretendido

POST http://localhost:4007/reservas/:nif/reservar -> Reserva um espaço que esteja disponível no horário pretendido. Nesta rota tanto a APP como o website terão que enviar os seguintes dados no body: place, startDate, endDate. O nif na rota é referente ao user que está logado.

DELETE http://localhost:4007/reservas/:idReserva/cancelar -> Cancela a reserva pretendida com o id dado na rota

GET http://localhost:4007/users -> Lista todas os utilizadores

GET http://localhost:4007/users/:nif -> Lista o utilizador com o nif dado na rota (nif irá funcionar como chave primária, não poderão haver clientes com o mesmo nif)

POST http://localhost:4007/users/registar -> Regista um utilizador. O body terá que ter os seguintes campos: nif, name e password

DELETE http://localhost:4007/users/:nif/remover -> Elimina o utilizador pretendido, com o nif dado na rota, da base de dados.

GET http://localhost:4007/spaces -> Lista todos os espaços existentes

GET http://localhost:4007/spaces/:id -> Lista o espaço pretendido com o id dado na rota

POST http://localhost:4007/spaces/inserir -> Insere um novo espaço na BD. No body terá que vir o campo name preenchido.

DELETE http://localhost:4007/spaces/:id/remover -> Remove o espaço pretendido com o id dado na rota


Nota: O body referido nos comentários é enviado aquando da chamada da rota da API.
Nota2: Aquando da listagem de reservas ou de efetuar uma reserva, as mesmas são atualizadas consoante a data atual. Isto é, se a data atual for superir à data de uma reserva, essa reserva é eliminada da BD.



