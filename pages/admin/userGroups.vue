<template>
  <v-app light>
    <v-content>
      <TopHeader/>
<!--      <v-container>
      <v-row>
        <v-col cols="4">
        </v-col>
        <v-col cols="8"><h1>02</h1></v-col>
      </v-row>
      </v-container>-->
      <v-container style="height: 100vh;">
        <div class="tables-basic">
          <h1 class="page-title mt-10 mb-6">Users Group</h1>
          <v-divider
            inset
          ></v-divider>
          <v-row>
            <v-col cols="4">
             <v-form @submit.prevent="onSubmit">
               <h1>01</h1>
                <notifications group="foo"></notifications>
               <v-text-field
                 label="New User Group"
                 clearable
                 single-line
                 hide-details
                  v-model="name"
               ></v-text-field>
               <v-btn
                 depressed
                 color="error"
                 type="submit"
              @click="doNotification"
               >
                 Create
               </v-btn>
             </v-form>
            </v-col>
            <v-col cols=6>
              <h1>02</h1>

              <v-spacer></v-spacer>
              <v-card class="mb-1">
                <v-card-title class="pa-5 pb-3">
                  <p>Material-UI Table</p>
                  <v-spacer></v-spacer>
                  <v-menu>
                    <template >
                      <v-btn
                        icon>
                        <v-icon color="textColor">mdi-dots-vertical</v-icon>
                      </v-btn>
                    </template>
                    <v-list>
                      <v-list-item
                    >
                        <v-list-item-title></v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </v-card-title>
                <v-simple-table>
                  <template v-slot:default>
                    <thead>
                    <tr>
                      <th class="text-left pa-6">#</th>
                      <th class="text-left">EMAIL</th>
                      <th class="text-left">PRODUCT</th>
                      <th class="text-left">PRICE</th>
                      <th class="text-left">DATE</th>
                      <th class="text-left">CITY</th>
                      <th class="text-left">STATUS</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(group, index) in groups" :key="group.key" >
                      <td >{{index++}}</td>
                      <td><a href="#" @click.prevent="selectGroup(group)">{{group.name}}</a> </td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td >
                        <v-chip
                          link
                          color="secondary"
                          class="ma-2 ml-0"
                        >
                          Declined
                        </v-chip>
                      </td>
                    </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-container>
      <TheFooter></TheFooter>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "userGroups",
  data: function() {
    return{
      name: "",
      group: null
    }
  },
  created() {
    const loadedGroups = this.$store.getters['admin/groups']
    if(loadedGroups.length === 0){
      this.$store.dispatch('admin/getGroups')
    }
  },
  methods: {
    subscribe: function() {
      this.subscribed = !this.subscribed;
    },
    onSubmit (){
     /* console.log("hihihih",this.name)*/

      this.$store.dispatch('admin/createGroup', {name: this.name}).then(()=>{
        this.showLoginError({message})
      })

    },
    selectGroup(group){
      this.group = group
      this.name = group.name
    },
    doNotification(){
      this.$notify({
        'group': 'foo',
        'title': 'Notification',
        'text': 'Add DONE'
      })
    },

  },
computed:{
  groups(){
    return this.$store.getters['admin/groups']
  }
},

};
</script>

<style scoped>

.finedTitle {
  font-weight: 900;
  text-shadow: 2px 2px #000000;
}

.social-icon {
  font-size: 21px;
  color: white;
}
</style>
