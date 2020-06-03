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
				<v-flex xs6>
					<v-text-field
            label="Nome"
            outlined
						id="nameInput"
						:value="this.space.name"
          ></v-text-field>
				</v-flex>
				<v-flex xs6>
					<v-card outlined>
						<v-card-text>
							Reservado: {{ this.space.reserved }}
						</v-card-text>
					</v-card>
				</v-flex>
				<v-flex xs12>
					<v-text-field
            label="Limite sonóro"
            outlined
						id = "soundLimitInput"
						:value="this.space.soundLimit"
          ></v-text-field>
				</v-flex>
				<v-flex xs12>
					<v-text-field
            label="Limite de ocupação"
            outlined
						id = "ocupationLimitInput"
						:value="this.space.ocupationLimit"
          ></v-text-field>
				</v-flex>
				<v-flex xs12>
          <v-textarea
            outlined
            label="Funcionalidades"
						id = "featuresInput"
            :value="this.features"
          ></v-textarea>
				</v-flex>
				<v-flex xs12>
					<v-layout justify-center>
						<v-btn 
							color="primary"
							@click="saveChanges"
						>
							Confirmar Mudanças
						</v-btn>
					</v-layout>
				</v-flex>
				<v-col></v-col>
				<v-spacer></v-spacer>
				<v-flex xs12>
					<v-layout justify-center>
						<v-btn v-if="this.space.reserved === true"
							color="primary"
							@click="cancelReservation"
						>
							Cancelar Reserva
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
				space: {},
				items: [true, false],
				features : ""
			}
		},
		mounted: async function(){
			try{
				var res = await axios.get(host + '/spaces/' + this.$route.params.space_id)
				this.space = res.data
				this.features = this.space.features.join('\n')
			}
			catch(e){
				return e
			}
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
					"soundLimit": soundLimit,
					"ocupationLimit": ocupationLimit,
					"features": features
				}

				var res = axios.post(host + '/spaces/' + this.$route.params.space_id + '/editar', space)

				this.$router.push('/spaces/' + this.$route.params.space_id)
			},
			cancelReservation(){
				var space = {
					"reserved": false
				}

				var res = axios.post(host + '/spaces/' + this.$route.params.space_id + '/editar', space)

				this.$router.push('/spaces/' + this.$route.params.space_id)
			}
		}
	}
</script>

<style>

</style>