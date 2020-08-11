const app = new Vue({

    el: '#app',
    data: {
        clase_juegos: 'seccion-juegos',
        clase_colores: 'seccion-colores',
        estado: 'desactivados',
        menu: [ 
    		{ text: "Juegos!", clase:"juegos", estado:"off"  }, 
            { text: "Colores", clase:"colores", estado:"off"  }, 
            { text: "Third note", estado:"off"  }, 
            { text: "Fourth note", estado:"off"  }, 
            { text: "Fifth note", estado:"off" } 
        ],
        juegos: [
            {nombre:'halo 5', cantidad:0},
            {nombre:'GTA', cantidad:0},
            {nombre:'Need For Speed', cantidad:-1}
            
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
        },
        activarseccion(estado){
            this.estado= 'activos'
        },
        activatemenu(select){
            if(select.estado == "on"){
                select.estado = "off"
            }else{
                select.estado = "on"
            }
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