<template>
    <div>
		<v-toolbar color="red">
    		<v-toolbar-title>Administração do Sistema</v-toolbar-title>
    		<v-spacer></v-spacer>
    		<v-toolbar-items class="hidden-sm-and-down">
    		  <v-btn flat disabled>Lista de Espaços</v-btn>
    		  <v-btn flat href="/admin">Admin</v-btn>
    		</v-toolbar-items>
		</v-toolbar>
        <v-container fluid grid-list-md text-xs-center>
            <v-layout row wrap>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
  export default{
      
  }
</script>

<style>

</style>