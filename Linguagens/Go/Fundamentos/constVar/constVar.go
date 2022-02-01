package main

import (
	"fmt"
	"math"
)

func main() {
	// "const" declara uma constante
	// "var" declara uma variável

	const PI float64 = 3.1415
	// O tipo é declarado depois do nome

	var raio = 3.2
	// Se não informar o tipo, ele é inferido de acordo com o valor na hora da inicialização
	// variáveis sempre precisam ser usadas, senão irá dar erro pra compilar

	// Forma reduzida de declarar uma variável
	area := PI * math.Pow(raio, 2)
	// ":=" cria uma variável e já atribui um valor
	
	fmt.Println("A área da circunferência é", area)

	// Criando várias constantes/variáveis de uma vez
	const (
		a = 1
		b = 2
	)

	var (
		c = 3
		d = 4
	)

	fmt.Println(a, b, c, d)

	// Inicializações múltiplas
	// A declaração das variáveis e os valores atribuídos são separados por "," e respectivos
	var e, f bool = true, false
	fmt.Println(e, f)

	g, h, i := 2, false, "epa!"
	fmt.Println(g, h, i)
}