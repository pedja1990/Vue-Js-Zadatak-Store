<template>
    <div>
        <h1>Customers</h1>

        <table>
            <thead>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in customers" :key="customer.id">
          <td>{{ customer.id }}</td>
          <td>{{ customer.firstName }}</td>
          <td>{{ customer.lastName }}</td>
          <td>{{ customer.email }}</td>
          <button @click="remove(index)">Remove</button>
        </tr>
      </tbody>
        </table>



      

    </div>
    
</template>

<script>
export default {
    name: 'AppCustomers',
    data() {
        return{
            customers:[
                {
                    id:1,
                    firstName:'Predrag',
                    lastName:'Miljus',
                    email:'pedja@email.com'
                },
                {
                    id:2,
                    firstName:'Jelena',
                    lastName:'Miljus',
                    email:'jelena@email.com'
                },
                {
                    id:3,
                    firstName:'Ljiljana',
                    lastName:'Miljus',
                    email:'ljiljana@email.com'
                },
                {
                    id:4,
                    firstName:'Nina',
                    lastName:'Miljus',
                    email:'nina@email.com'
                },
                {
                    id:5,
                    firstName:'Branka',
                    lastName:'Miljus',
                    email:' branka@email.com'
                },
                
            ]
        }
    },

    methods:{
       
        remove(index){
            this.customers.splice(index,1);
        },

    }
}
</script>


