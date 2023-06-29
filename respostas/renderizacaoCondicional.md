## Renderização Condicional no React

A renderização condicional no React é um conceito que permite controlar quais elementos/componentes devem ser renderizados com base em uma determinada condição ou estado. Isso significa que você pode decidir se um elemento/componente deve ser exibido ou não na interface com base em alguma lógica ou propriedade.

A renderização condicional é útil quando você deseja exibir diferentes conteúdos ou componentes com base em diferentes situações, como o estado do aplicativo, os dados recebidos de uma API, as permissões do usuário, entre outros.

```jsx
import React from "react";

function App() {
  const isLoggedIn = true; // Exemplo de estado que indica se o usuário está logado

  return (
    <div>
      {isLoggedIn ? (
        <h1>Bem-vindo ao nosso aplicativo!</h1>
      ) : (
        <h1>Por favor, faça login para continuar.</h1>
      )}
    </div>
  );
}

export default App;
```
