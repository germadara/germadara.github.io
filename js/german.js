const app = new Vue({

    el: '#app',
    data: {
        titulo: 'Lista de juegos de german',
        juegos: [
            {nombre:'halo 5', favorito:'true', categoria:'Shooter'},
            {nombre:'GTA', favorito:'false', categoria:'No se que es'},
            {nombre:'Need For Speed', favorito:'false', categoria:'Carreritas dijo jhon'}
            
        ],
        nuevojuego: "",
        nuevacategoria: ""
    },
    methods: {
        agregarjuego(){
            this.juegos.push({
                nombre: this.nuevojuego, favorito:'false', categoria:this.nuevacategoria
            })
        }
    }
})