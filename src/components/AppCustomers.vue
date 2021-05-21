<template>
    <div>

        <!-- <form v-on:submmit.prevent="addNewCustomer">
            <input name="id" type="integer" v-model="newCustomer.id"/>
            <input v-model="newCustomer.FirstName" type="text" placeholder="Name">
            <input v-model="newCustomer.lastName" type="text" placeholder="Last Name">
            <input v-model="newCustomer.Email" type="text" placeholder="Email">

            <button type="submit">Submit</button>
        </form> -->

        <form @submit.prevent="addNewCustomer">
        <label for="id">ID:</label>
        <input name="id" type="integer" v-model="newCustomer.id"/>
        <label for="firstName">First name:</label>
        <input  name="firstName" type="text" v-model="newCustomer.firstName"/>
        <label for="lastName">Last name:</label>
        <input  name="lastName" type="text" v-model="newCustomer.lastName"/>
        <label for="email">Email:</label>
        <input  name="email" type="text" v-model="newCustomer.email"/>
        <button >Add new</button>
        </form>


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
          <button @click="remove(customer)">Remove</button>
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
            newCustomer: {
            
            

            },
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
       
        remove(customer) {
        this.customers.splice(this.customers.indexOf(customer), 1);
      },

        addNewCustomer(){

            let newCustomer = {
                id: this.newCustomerId,
                firstName: this.newCustomerFirstName,
                lastName: this.newCustomerlastName,
                emial: this.newCustomerEmail,
                
            }
            this.customers.push(newCustomer);
            this.newCustomerId = 
            this.newCustomerFirstName = '';
            this.newCustomerlastName = '';
            this.newCustomerEmail = '';

        }

    }
}
</script>


