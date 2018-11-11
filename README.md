
 # Projeto Find My Space (Em Construção)
 ### Gerente: Hiago
 #### Líder de Front: Anne Kelly
 
 ## Uso:
 
 crie sua pasta e vá até ela no terminal (caso não saiba fazer isso siga os passos a seguir):
 
 ```terminal
 mkdir find-my-space
 cd find-my-space
 ```
 clone o projeto do git:
 
 ```terminal
 git clone https://github.com/akrs3/find-my-space.git
 ```
 Vá até a pasta do repósitório:
 ```terminal
 cd find-my-space
 ```
 
 digite:
 
 ```terminal
 npm install
 ```
 pronto, você já pode codar!

para visualizar:
 
 ```terminal
 npm run dev
 ```
 
 ------
 visualizando o seu component (tela) (exemplo component home.vue)
  ```terminal
 em App.vue
 - adicione import e no export (PASSO 1)
 - dentro da tag template coloque a tag <home/> (PASSO 2)
 - edite a tag template de home.vue (PASSO 3)

[PASSO 1]
<script>
import home from "./components/home/home";

export default {
  name: 'app',
  components: {
    home
  },

[PASSO 2]
<template>
  <div id="app">
  <home/>
  
[PASSO 3]
em findMySpace\src\components\home\home.vue
<template>
  <div>     
		  <div>CODEI AQUI</div>
```

 ## REGRAS:
 
 ### USE [GITFLOW!](https://medium.com/trainingcenter/utilizando-o-fluxo-git-flow-e63d5e0d5e04)
 
 * Tente ter algum tipo de padrão de nomeclatura de suas variáveis
 * **Tudo de estrutura deve ser feito com Bootstrap** Ex: a posição de elementos, ou a distância entre eles...
 * Se não tiver conseguindo fazer alguma coisa, pede ajuda ao coleguinha, somos muitos, alguem consegue ajudar
 * Lembre-se dos repasses!
 
 ## DICAS:

 (Lista atualizada enquanto for sendo encontrado mais material interessante)
 * [Site do Vue](https://vuejs.org/)
 * [Awesome vue](https://github.com/vuejs/awesome-vue)
 * [Site do Bootstrap](https://getbootstrap.com/)
 
 ## Milestones: (Sempre sendo atualizado)
 
 - [ ] Finalização da primeira versão do Mockup
 - [ ] Validação do Mockup
 - [ ] Login
 - [ ] Cadastro
 - [ ] Home
 - [ ] Tela de Espaço
 - [ ] Calendário
 - [ ] Marcar
 - [ ] Doodle
 - [ ] Perfil
 - [ ] Perfil do dono
 
 
 
 
