<!-- Usando 3+ hífens cria-se uma linha -->
<!-- Sempre deixe os hífens isolados pra não interagir com a linha de baixo e de cima -->

---

Texto demarcado

---

-------
-----

Várias linhas

------
---

# Itálico

<!-- Envolve com underlines "_" -->
Esta é uma forma de escrever em _itálico_

<!-- Envolve com asteriscos "*" -->
Outra forma de escrever em *itálico*

# Negrito

<!-- Envolve com 2 asteriscos "**" -->
Esta é uma forma de escrever em **negrito**

<!-- Envolve com 2 underlines "__" -->
Outra forma de escrever em __negrito__

# Negrito e Itálico

<!-- Envolve com 2 underlines e 1 asterisco "__*" -->
Esta é uma forma de escrever em __*negrito e itálico*__

<!-- Envolve com 3 asteriscos "***" -->
Outra forma de escrever em ***negrito e itálico***

<!-- Envolve com 3 underlines "___" -->
Outra forma de escrever em ___negrito e itálico___

# Texto Riscado

<!-- Basta envolver o texto com 2 tils "~~"  -->
Esta palavra está ~~riscada~~

# Links

<!-- [<NomeDoLink>](<link> ["<titleDoLink>"]) 'titleDoLink' é o texto que aparece quando o mouse fica em cima do link-->
[Guia Do Programador](https://github.com/Daniel-Conte/Guia-do-Programador "Meu repositório no GitHub")


<!-- link normal -->
<https://github.com/Daniel-Conte/Guia-do-Programador>

# Códigos

## Código feio (sem cor)

<!-- Envolve com crase " ` " -->
Escrevendo um código: `scanf("%d",&num);`

<!-- Envolve com 3+ crases " ``` " -->
Escrevendo várias linhas de código:
```
    #include <stdio.h>
    int main(){
    int num;
    }
```

```
    function escreverNome(nome) {
        console.log(nome)
    }
```

## Código bonito (com cor)

<!-- Basta colocar o nome da linguagem após as primeiras crases -->
``` C++
    #include <stdio.h>
    int main(){
    int num;
    }
```

``` Javascript
    function escreverNome(nome) {
        console.log(nome)
    }
```

# Citação

<!-- Coloca um sinal de maior que ">" no inicio -->
<!-- Dê um "TAB" no fim de cada linha ou pule uma linha para deixar um embaixo do outro -->
> Markdown  
> Guia do Programador   
> Citações