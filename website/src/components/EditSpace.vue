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
				var res = await axios.get(host + '/spaces/' + this.$route.params.space_id)
				this.space = res.data
			}
			catch(e){
				return e
			}
		},
		methods:{
			
		}
	}
</script>

<style>

</style>