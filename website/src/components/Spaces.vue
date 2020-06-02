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
					<v-card>
						<v-card-text>
							Nome do Espaço: {{ this.space.name }}
						</v-card-text>
					</v-card>
				</v-flex>
				<v-flex xs12>
					<v-card>
						<v-card-text>
							Reservado: {{ this.space.reserved }}
						</v-card-text>
					</v-card>
				</v-flex>
				<v-flex xs12>
					<v-card>
						<v-card-text>
							ID da Reserva: {{ this.space.reservation }}
						</v-card-text>
					</v-card>
				</v-flex>
				<v-flex xs12>
					<v-card>
						<v-card-text>
							Características:
						</v-card-text>
					</v-card>
					<v-card
						v-for="item in this.space.features" 
						:key="item"
					>
						<v-list-item class="text-xs-center">
							{{ item }} 
						</v-list-item>
					</v-card>
				</v-flex>
				<v-btn 
					color="primary"
					@click="editSpace">Editar Espaço</v-btn>
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
				space: {}
			}
		},
		mounted: async function(){
			try{
				console.log(this.$route.params.space_id)
				var res = await axios.get(host + '/spaces/' + this.$route.params.space_id)
				this.space = res.data
				console.log(this.space)
				
				

			}
			catch(e){
				return e
			}
		},
		methods:{
			editSpace(item){
				//var space = {
				//			_id : "5ed678d15218a773b747caa7",
				//			name : "Praça Vila Nova de Famalicão",
				//			reserved : false,
				//			features : [
				//				"Colunas",
				//				"Projetor",
				//				"Computador"
				//			],
				//			soundLimit : 80,
				//			ocupationLimit : 50
				//		}
				//var res2 = axios.post(host + '/spaces/' + this.$route.params.space_id + '/editar',
				//space
				//)
				this.$router.push('/spaces/' + this.$route.params.space_id + '/edit')
			},
		}
	}
</script>

<style>

</style>