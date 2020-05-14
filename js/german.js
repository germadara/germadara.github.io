const app = new Vue({

    el: '#app',
    data: {
        titulo: 'Recomiendame un juego!',
        juegos: [
            {nombre:'halo 5', cantidad:0},
            {nombre:'GTA', cantidad:0},
            {nombre:'Need For Speed', cantidad:0}
            
        ],
        nuevojuego: "",
        totalJuegos: 0
    },
    methods: {
        agregarjuego(){
            this.juegos.push({
                nombre: this.nuevojuego, cantidad: 0
            });
            this.nuevojuego = '';
        }
    },
    computed: {
        sumarJuegos(){
            this.totalJuegos = 0;
            for(juego of this.juegos){
                this.totalJuegos = this.totalJuegos + juego.cantidad;
            }
            return this.totalJuegos
        }
    }
})