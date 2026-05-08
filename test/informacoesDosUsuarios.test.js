import { realizarLogin } from "../src/informacoesDosUsuarios.js";
import assert from "node:assert";

/*
Testes:
Escreva 4 testes: 1) Sucesso, 2) Credencial expirada, 3) Usuario não encontrado e 4) Senha incorreta para o usuário encontrado.

Exemplo:
fazerLogin('email@existente.com', 'senhaCerta123'); -> 'Login realizado com sucesso'
fazerLogin('credencial@expirada.com', 'senhaCerta123'); -> Renove suas credenciais
*/

describe("Testes de validação do login do usuário no site", function () {
  it("Teste de validar o login com as credenciais expirada", function () {
    // Act
    const retornoDaFuncao = realizarLogin("filipeb@expirada.com", "fbCerta123");
    // Assert
    assert.equal(retornoDaFuncao, "Credenciais expiraram");
  });

  it("Teste de validar o login realizado com sucesso", function () {
    // Act
    const retornoDaFuncao = realizarLogin("alineb@existente.com", "abCerta123");
    // Assert
    assert.equal(retornoDaFuncao, "Login realizado com sucesso");
  });
  it('Teste de validar o login credenciais está incorreta - Senha invalida',function(){
    // Act
    const retornoDaFuncao = realizarLogin("paulaj@naoencontrado.com","abCerta123");
    // Assert
    assert.equal(retornoDaFuncao, "Credenciais estão incorretas");
  });
  it('Teste de validar o login usuário não encontrado', function(){
    // Act
    const retornoDaFuncao = realizarLogin("test@usuarionaoencontado","tuneErrado");
    // Assert
    assert.equal(retornoDaFuncao, "Usuário não encontrado");
  });
});
