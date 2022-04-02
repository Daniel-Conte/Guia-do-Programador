export default class Cliente {
  // "#<atributo>" define um atributo privado (isso é nativo do javascript)
  #codigo: string | null;
  #nome: string;
  #idade: number;

  constructor(nome: string, idade: number, codigo: string | null = null) {
    this.#nome = nome;
    this.#idade = idade;
    this.#codigo = codigo;
  }

  static vazio() {
    return new Cliente('', 0);
  }

  get codigo() {
    return this.#codigo;
  }

  get nome() {
    return this.#nome;
  }

  get idade() {
    return this.#idade;
  }
}
