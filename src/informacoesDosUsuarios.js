/*
Pré-requisitos:
Declare um vetor contendo informações sobre usuários de um site, contendo as propriedades: id, nome, email, senha e expirado (boleano, pode ser true ou false). Adicione ao menos um dos usuarios como expirado sendo true.
*/
const informacoes = [
  {
    id: 1,
    nome: "Aline B.",
    email: "alineb@existente.com",
    senha: "abCerta123",
    expirado: false,
  },

  {
    id: 2,
    nome: "Filipe B.",
    email: "filipeb@expirada.com",
    senha: "fbCerta123",
    expirado: true,
  },

  {
    id: 3,
    nome: "Paula J.",
    email: "paulaj@naoencontrado.com",
    senha: "pjCerta123",
    expirado: false,
  },

  {
    id: 4,
    nome: "Gabriela B.",
    email: "gabrielab@senhaincorreta.com",
    senha: "gbCerta123",
    expirado: false,
  },
];

/*
Desafio:
Construa uma função de para realizar login. Quem usar a função deverá receber uma mensagem dizendo que o login foi realizado com sucesso caso exista um usuário com email e senha iguais aos informados. A função deve dizer que as credenciais expiraram caso expirado for true. A função também tem que dizer que as credenciais estão incorretas caso o email não exista ou a senha esteja incorreta para aquele email.
*/
export function realizarLogin(email, senha) {
  for (let i = 0; i < informacoes.length; i++) {
    if (informacoes[i].email == email) {
      if (informacoes[i].expirado == true) {
        return "Credenciais expiraram";
      }
      if (informacoes[i].senha != senha) {
        return "Credenciais estão incorretas";
      }
    }
    
  }
  return "login realizado com sucesso";
}
