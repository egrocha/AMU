<template>
    <div>
		  <v-toolbar color="blue">
    		<v-toolbar-title>Administração do Sistema</v-toolbar-title>
    		<v-spacer></v-spacer>
    		<v-toolbar-items class="hidden-sm-and-down">
    		  <v-btn text disabled>Lista de Espaços</v-btn>
    		  <v-btn text href="/admin">Admin</v-btn>
    		</v-toolbar-items>
		  </v-toolbar>
      <v-container fluid grid-list-md text-xs-center>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-title>
              <v-flex xs3>
                <v-text-field
                  v-model="search"
                  append-icon="search"
                  label="Procurar Espaço"
                  single-line
                  hide-details
                >
                </v-text-field>
              </v-flex>
            </v-card-title>
            <v-data-table
              :headers="headers"
              :items="spaces"
              :search="search"
              item-key="name"
              class="elevation-1"
              @click:row="redirectSpace"
            >
              <!--
              <template v-slot:items="props">
                <tr @click="redirectSpace(props.item)">
                  <td class="text-xs-left">
                    {{props.item.name}}
                  </td>
                </tr>
              </template>
              -->
              <!--
              <template v-slot:expand="props">
                <v-card flat @click="expandClicked(props.item)">
                  <v-card-text>
                    Nome: {{ props.item.name}}
                  </v-card-text>
                </v-card>
              </template>
              -->
              <template v-slot:no-results>
                <v-alert :value="true" color="error" icon="warning">
                  There are no results for "{{ search }}".
                </v-alert>
              </template>
            </v-data-table>
          </v-flex>

				  <v-flex xs12>
				  	<v-layout justify-center>
				  		<v-btn
				  			color="primary"
				  			@click="createSpace"
				  		>
				  			Criar Espaço Novo
				  		</v-btn>
				  	</v-layout>
				  </v-flex>
        </v-layout>
      </v-container>
    </div>
</template>

<script>
  import axios from 'axios'
  const host = 'http://localhost:8080'
  export default {
    data(){
      return{
        expand: false,
        search: '',
        headers:[
          {
            text: 'Nome',
            align: 'left',
            sortable: true,
            value: 'name'
          },
          {
            text: 'Reservado',
            align: 'left',
            sortable: true,
            value: 'reserved'
          }
        ],
        spaces: []
      }
    },
    mounted: async function(){
      try{
        var res = await axios.get(host + '/spaces')
        this.spaces = res.data
      }
      catch(e){
        return e
      }
    },
    methods: {
      redirectSpace(item){
        this.$router.push('/spaces/' + item._id)
      },
      createSpace(item){
				this.$router.push('/spaces/create')
			}
    }
  }
</script>

<style>

</style>