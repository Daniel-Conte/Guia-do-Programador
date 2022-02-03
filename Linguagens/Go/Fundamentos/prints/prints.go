package main

import "fmt"

func main() {
	fmt.Print("Mesma")
	fmt.Print(" linha.")
		// Imprime no console
		// Não quebra a linha

	fmt.Println(" Nova")
	fmt.Println("linha.")
		// Imprime no console
		// Quebra a linha no final

	x := 3.141516

	//fmt.Println("O valor de x é " + x)
		// Erro. Não dá pra concatenar uma string com um float

	xs := fmt.Sprint(x)
		// Transforma a varíavel x em uma string
	fmt.Println("O valor de x é " + xs)
	fmt.Println("O valor de x é", x)
		// Exibindo o valor de x sem concatenar

	fmt.Printf("O valor de x é %f", x)
		// Oferece opções de formatação de valores para string
		// "%f" aceita valores float
	fmt.Printf("\nO valor de x é %.2f", x)
		// "%.<casas decimais>f" define quantas casas decimais o valor deve ser formatado
		// Já arredonda o valor das casas que foram cortadas

	a := 1
	b := 1.9999
	c := false
	d := "opa"
	fmt.Printf("\n%d %f %.1f %t %s", a, b, b, c, d)
		// "%d" formata valores inteiros
		// "%t" formata valores boolean
		// "%s" formata valores string
	fmt.Printf("\n%v %v %v %v", a, b, c, d)
		// "%v" formata valores genéricos
}