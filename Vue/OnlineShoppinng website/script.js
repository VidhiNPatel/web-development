console.log("script connected");

Vue.component('product', {
    template: `
    <div class="product">
        <div class="product-image">
            <img v-bind:src='image'>
        </div>
        <div class="product-info">
            <h1>{{ product }}</h1>
            <p v-show='inStock'>In stock</p>
            <p v-show="!inStock">Out of stock</p>
            <p>User has prime membership : {{ primemember }}</p>
            <p>Shipping : {{ shippingChagre }}</p>
            <p v-show='onSale '>{{ onSale ? onSaleItem : ""}}</p>
            <product-details :details='details'></product-details>
            <div v-for='varient in varients'
                :key='varient.varientId'
                class='colorBox'
                :style="{ backgroundColor : varient.varientColor}"
                @click='showImage(varient)'>
            </div>
            <div>
                <button @click='addToCart'
                        :disabled = '!inStock'
                        :class = '{ disabledButton : !inStock}'>
                        Add to Cart
                </button>
                <button @click='removeFromCart'>
                    Remove from Cart
                </button>
            </div>

        </div>

    </div>`,
    props: {
        primemember : {
            type : Boolean,
            required : true
        }
    },
    data(){
        return {
            product: 'socks',
            brand: 'Vue Mastery',
            image: 'vmSocks-blue-onWhite.jpg',
            inStock: true,
            selectedVarient : 0,
            selectedIds : [],
            details: ['80% cotton', '20% polyster', 'gender-neutral'],
            varients: [{
                varientId: 1,
                varientColor: 'green',
                varientImage: 'vmSocks-green-onWhite.jpg',
            },
            {
                varientId: 2,
                varientColor: 'blue',
                varientImage: 'vmSocks-blue-onWhite.jpg',
            }],

            onSale: true,

        }
    },
    methods: {
        showImage(varient) {
            this.image = varient.varientImage;
            this.selectedIds.push(varient.varientId);
        },
        addToCart() {
            this.$emit('add-to-cart',this.selectedIds);
        },
        removeFromCart() {
            this.$emit('remove-from-cart',this.selectedIds);
        }
    },
    computed: {
        onSaleItem() {
            return `${this.brand} ${this.product} are on sale!  `;
        },
        shippingChagre(){
            if(this.primemember){
                return 'Free';
            } else {
                return '$2.99';
            }
        }
    }
});

Vue.component('product-details', {
    props : {
        details : {
            type : Array ,
            required : true
        }
    },
    template : `<ul>
        <li v-for='detail in details'>{{ detail }}</li>
    </ul>`,

});

var app = new Vue({
    el: '#app',
    data : {
        primemember : true,
        cart: [],
    },
    methods : {
        updateCart(selectedItems) {
            console.log("selectedItems = ",selectedItems);

            this.cart.push(selectedItems);
        },
        removeCart(selectedItems) {
            this.cart.pop(selectedItems);
        }
    }

});