<template>
    <div>

        <h1>Products</h1>

    <table>
        <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Quantity</th>
          
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.title }}</td>
          <td>{{ product.quantity }}</td>
        </tr>
      </tbody>
    </table>


    </div>
    
</template>

<script>

export default {
    name: 'AppProducts',
    data() {
        return{
           
            products:[

                {
                    id:1,
                    title:'Patike',
                    quantity:'20',
                    
                },
                {
                    id:2,
                    title:'Duksevi',
                    quantity:'18',
                    
                },
                {
                    id:3,
                    title:'Sorcevi',
                    quantity:'15',
                    
                },
                {
                    id:4,
                    title:'Kape',
                    quantity:'17',
                    
                },
                {
                    id:5,
                    title:'Jakne',
                    quantity:'14',
                    
                },
                
                
            ]
        }
    },

    methods:{
       
        

    }
}
</script>

