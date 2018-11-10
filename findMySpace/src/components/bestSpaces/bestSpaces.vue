<template>
    <div>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"> <!-- cdn não é a melhor forma, mas eu nao lembro como faz com webpack -->
        
        <div class="container">
            <h4 class="title"> espaços especialmente para o seu grupo</h4>
            <hr>
        </div>
        <div class="album py-5 bg-light">
            <div class="container">
                <div class="row">
                    <div v-for="space in spaces">
                        <div class="col-md-4">
                            <div class="card  mb-4 shadow-sm">
                                <img class="card-img-top img-fluid thumbnail" :src="space.image" alt="Card image cap" style="width:100%; display:block;">
                                <div class="card-body">
                                    <h3 class="card-title title col-md-4">{{space.name}}</h3>
                                    <div class="row">
                                        <div class="col-md-6  content">
                                            <h4 class="title">{{space.price}}</h4>
                                        </div>
                                        <div class="col-md-6  content">
                                            <h4 class="title">{{space.space}}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

  data() {
      return {
          spaces: [
              {
                  image: 'https://ayallastudio.com.br/wp-content/uploads/2017/10/danca2-600x400.jpg',
                  name: 'name1',
                  price: '50,00',
                  space: 'local 1'
              },
              {
                  image: 'http://www.ekoconstrutora.com/horizontes/_imgs/08_imovelemaruja_horizontes.jpg',
                  name: 'name2',
                  price: '30,00',
                  space: 'local 2'
              },
              {
                  image: 'http://www.dulliusdance.com.br/web_files/arq_din/infra-05-sala2.jpg',
                  name: 'name3',
                  price: '20,00',
                  space: 'local 3'
              }
          ]
      }
  }
}
</script>

<style scoped>
hr { 
    display: block;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    margin-left: auto;
    margin-right: auto;
    border-style: inset;
    border-width: 5px;
}
.title {
    text-align: left;
}
.content {
    max-width: 40%;
    padding: 0;
}
</style>