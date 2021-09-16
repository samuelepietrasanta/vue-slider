let app = new Vue({

    el:'#app',


    data:{

        images : [
            {
                source: 'https://images.wired.it/wp-content/uploads/2019/06/18140521/cane.jpg',
                alt : 'immagine di un cane',
            },
            {
                source: 'https://www.focus.it/images/2021/06/08/cane_1020x680.jpg',
                alt : 'immagine di un cane',
            },
            {
                source: 'https://tecnocuci.com/wp-content/uploads/2020/11/cuscino-cane-grande-marrone.jpg',
                alt : 'immagine di un cane',
            },

        ],

        imageIndex : 0,

    },

    methods : {

        previousDog : function(){
            this.imageIndex --;
            if(this.imageIndex < 0){
                this.imageIndex = this.images.length - 1;
            }
            
        },
        nextDog: function(){
            this.imageIndex ++;
            if(this.imageIndex >= this.images.length){
                this.imageIndex = 0;
            }
            
        }
    }

})

//DEVO FINIRLO