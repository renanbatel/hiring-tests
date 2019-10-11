# Desafio Lógico - Desenvolvedor

Considere uma matrix onde cada célula contem sempre 0 ou 1. Qualquer células que contenha 1 é chamada de célula preenchida. Podemos assumir que 2 células estão conectadas se qualquer célula adjacente, vertical, horizontal ou diagonalmente estão preenchidas também. 

Na matriz a seguir, por exemplo, todas as células preenchidas com X estão conectadas a célula preenchida com Y:

	X X X
	X Y X
	X X X

Se uma ou mais células preenchidas estiverem conectadas, elas formam uma região. Observe que cada célula de uma região está conectada a zero ou mais células na região, mas não está necessariamente conectada diretamente a todas as outras células da região.

Dada uma matrix _n x m_ encontre e exiba o número de células na maior região da matriz. Observe que pode haver mais de uma região na matriz.

Por exemplo, existem duas regiões na seguinte matrix 3 x 3. A maior região no canto superior esquerdo contem 3 células. A menor região no canto inferior direito contém 1 célula.

	1 1 0
	1 0 0
	0 0 1


#### O que deve ser feito

Complete a função `connectedCell` em um dos arquivos (`index.php` ou `index.js`) onde o resultado deve retornar um inteiro que denote a área da maior região.

connectedCell tem o(s) seguinte(s) parâmetro(s):

- matriz: uma matriz 2D de inteiros onde _matrix[i]_ representa a _i_ linha da matriz.

##### Execuatando com PHP:

	$ php index.php < input/input00.txt

##### Execuatando com NodeJS:

	$ node index.js < input/input00.txt

#### Formato de entrada

A primeira linha contém um inteiro _n_ que representa o número de linhas da matriz.
A segunda linha conteém um inteiro _m_ que representa o número de colunas da matriz.
Todas as outras _n_ linhas contém _m_ colunas separadas por espaço que correspondem a _matriz[n][m]_

#### Restrições

- Os valores devem estar entre 0 e 10

		0 < _n,m_ < 10

- Não deve ser utilizada nenhuma biblioteca ou framework adicional.

#### Formato de saída

Exiba o número de células na maior região.

#### Exemplo de entrada

	4
	4
	1 1 0 0
	0 1 1 0
	0 0 1 0
	1 0 0 0

#### Exemplo de saída

	5

#### Explicação

O diagrama abaixo mostra duas regiões da matriz; para cada região, as células componentes que formam a região são marcadas com um X:

	X X 0 0     1 1 0 0
	0 X X 0     0 1 1 0
	0 0 X 0     0 0 1 0
	1 0 0 0     X 0 0 0

A primeira região contém 5 células e a segunda região contem 1 célula. Precisamos exibir o número de células da maior região.



### O que está sob avaliação

Sua capacidade de analisar, e resolver um problema lógico.

**Tempo:**  Estima-se 4 horas para este desafio, entretanto não há um limite.

**Avaliação:** Para nos enviar seu teste você pode escolher uma das seguintes opções:

- Compartilhar um diretório no GoogleDrive
- Enviar um email para lucas.cardoso@avecbrasil.com.br copiando victor@avecbrasil.com.br, marcus.adolfi@avecbrasil.com.br e jacqueline.mello@avecbrasil.com.br

com os arquivos criados.
