# Tema da Lista
- Ferramentas de desenvolvimento são aqueles aplicativos ou softwares que ajudam desenvolvedores a programar. Alguns exemplos são: o VSCode (para editar o código), o GitHub (para hospedar códigos) e Slack (para programar em conjunto).

# Descrição dos componentes
1. Componente "Tool": </br>
- **useState**: é usado para armazenar a lista (arrayValues) e o id de um elemento da lista que está sendo editada (editingId).
- **Adição de Elementos**: o campo de input permite adicionar novas ferramentas à lista.
- **Edição de Elementos**: quando o botão "Editar" é clicado, o componente "EditTool" é renderizado, permitindo que o usuário edite o nome de um elemento da lista.
- **Remoção de Elementos**: quando o botão "Remover" é clicado, o componente "RemoveTool" permite remover um elemento da lista.

2. Componente "Input":
- **useState**: o componente usa o useSate (valor) para controlar o valor do campo de entrada.
- **Adição de Elementos**: a função cadastrar cria um novo elemento e chama a função action para adicioná-lo à lista.
- **Input**: quando o usuário digita no campo de entrada, o estado "valor" é atualizado. Quando o botão "Adicionar" é clicado, o novo elemento é adicionada à lista.

3. Componente "RemoveTool":
- **remove**: função de callback que é chamada para remover um elemento da lista.
- **ID**: identificador do elemento que será removida.
- **Event Handler**: quando o botão é clicado, a função "remove" é chamada com o ID da ferramenta como argumento.

4. Componente "EditarTool":
- **tool**: objeto do elemento que está sendo editada.
- **saveEdit**: função de callback para salvar o novo nome do elemento.
- **cancelEdit**: função de callback para cancelar a edição.
- **newName**: estado que controla o valor do campo de entrada. O valor inicial de "newName" é o nome atual do elemento (tool.nome).
- **Função handleSave**: chama "saveEdit" com o ID do elemento e o novo nome quando o botão "Salvar" é clicado.
- O campo de entrada permite ao usuário digitar o novo nome.
- Os botões "Salvar" e "Cancelar" permitem ao usuário salvar ou cancelar a edição.
