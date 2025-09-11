new Vue({
  el: '#app',
  data: {
    ad: true,
    ad2: false,
    ad3: false,
    showCart: false,
    sandwiches: [
      {
        id: 1,
        name: 'Sub Clássico',
        description: 'Pão fresco, presunto, queijo, alface, tomate e maionese.',
        price: 18.90,
        image: 'https://assets3.thrillist.com/v1/image/2778179/1584x1056/scale;jpeg_quality=60.jpg'
      },
      {
        id: 2,
        name: 'Sub Frango BBQ',
        description: 'Pão fresco, frango grelhado, molho barbecue, cebola crocante.',
        price: 21.50,
        image: 'https://assets3.thrillist.com/v1/image/2778179/1584x1056/scale;jpeg_quality=60.jpg'
      },
      {
        id: 3,
        name: 'Sub Veggie',
        description: 'Pão fresco, alface, tomate, pepino, pimentão, azeitonas e queijo.',
        price: 17.00,
        image: 'https://assets3.thrillist.com/v1/image/2778179/1584x1056/scale;jpeg_quality=60.jpg'
      },
      {
        id: 4,
        name: 'Sub Atum',
        description: 'Pão fresco, salada de atum, alface e tomate.',
        price: 19.90,
        image: 'https://assets3.thrillist.com/v1/image/2778179/1584x1056/scale;jpeg_quality=60.jpg'
      },
      {
        id: 5,
        name: 'Sub Carne Assada',
        description: 'Pão fresco, carne assada, queijo, cebola e pimentão.',
        price: 23.00,
        image: 'https://assets3.thrillist.com/v1/image/2778179/1584x1056/scale;jpeg_quality=60.jpg'
      },
      {
        id: 6,
        name: 'Sub Frango Grelhado',
        description: 'Pão fresco, filé de frango grelhado, alface, tomate e maionese.',
        price: 22.50,
        image: 'https://assets3.thrillist.com/v1/image/2778179/1584x1056/scale;jpeg_quality=60.jpg'
      },
      {
        id: 7,
        name: 'Sub Italiano',
        description: 'Pão fresco, salame, presunto, queijo, alface e tomate.',
        price: 24.00,
        image: 'https://assets3.thrillist.com/v1/image/2778179/1584x1056/scale;jpeg_quality=60.jpg'
      },
      {
        id: 8,
        name: 'Sub Peru',
        description: 'Pão fresco, peito de peru, queijo, alface, tomate e maionese.',
        price: 20.50,
        image: 'https://assets3.thrillist.com/v1/image/2778179/1584x1056/scale;jpeg_quality=60.jpg'
      },
      {
        id: 9,
        name: 'Sub Peito de Peru Light',
        description: 'Pão integral, peito de peru, alface, tomate e mostarda.',
        price: 21.00,
        image: 'https://assets3.thrillist.com/v1/image/2778179/1584x1056/scale;jpeg_quality=60.jpg'
      },
      {
        id: 10,
        name: 'Sub Vegetariano Gourmet',
        description: 'Pão integral, queijo, berinjela grelhada, abobrinha, tomate e alface.',
        price: 19.80,
        image: 'https://assets3.thrillist.com/v1/image/2778179/1584x1056/scale;jpeg_quality=60.jpg'
      }
    ],
    cart: []
  },
  computed: {
    cartCount() {
      return this.cart.reduce((sum, item) => sum + item.quantity, 0);
    },
    totalPrice() {
      return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }
  },
  methods: {
    addToCart(sandwich) {
      const found = this.cart.find(item => item.id === sandwich.id);
      if (found) {
        found.quantity++;
      } else {
        this.cart.push({
          id: sandwich.id,
          name: sandwich.name,
          price: sandwich.price,
          quantity: 1
        });
      }
      this.showCart = true;
    },
    removeFromCart(index) {
      this.cart.splice(index, 1);
    },
    clearCart() {
      this.cart = [];
    },
    close(){
      this.ad = false
      this.ad2 = true
      this.ad3 = true
    }
  }
});
