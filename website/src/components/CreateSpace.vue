<template>
  <div>
		<v-toolbar color="blue">
      <v-toolbar-title>Administração do Sistema</v-toolbar-title>
    	<v-spacer></v-spacer>
    	<v-toolbar-items class="hidden-sm-and-down">
    	  <v-btn text href="/">Lista de Espaços</v-btn>
    	  <v-btn text href="/admin">Admin</v-btn>
    	</v-toolbar-items>
		</v-toolbar>
		<v-container fluid grid-list-md text-xs-center>
			<v-layout row wrap>
				<v-flex xs12>
					<v-text-field
            label="Nome"
            outlined
						id="nameInput"
          ></v-text-field>
				</v-flex>
				<v-flex xs12>
					<v-text-field
            label="Limite sonóro"
            outlined
						id = "soundLimitInput"
          ></v-text-field>
				</v-flex>
				<v-flex xs12>
					<v-text-field
            label="Limite de ocupação"
            outlined
						id = "ocupationLimitInput"
          ></v-text-field>
				</v-flex>
				<v-flex xs12>
          <v-textarea
            outlined
            label="Funcionalidades"
						id = "featuresInput"
          ></v-textarea>
				</v-flex>
				<v-flex xs12>
					<v-layout justify-center>
						<v-btn 
							color="primary"
							@click="saveChanges"
						>
							Confirmar
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
			return {

			}
		},
		mounted: async function(){

		},
		methods:{
			saveChanges(){
				var name = document.getElementById("nameInput").value
				var soundLimit = document.getElementById("soundLimitInput").value
				var ocupationLimit = document.getElementById("ocupationLimitInput").value
				var features = document.getElementById("featuresInput").value
				features = features.split("\n")

				var space = {
					"name": name,
					"reserved": false,
					"soundLimit": soundLimit,
					"ocupationLimit": ocupationLimit,
					"features": features
				}

				console.log(space)

				var res = axios.post(host + '/spaces/inserir', space)

				this.$router.push('/')
			}
		}
	}
</script>

<style>

</style>