<template>
  <div>
		<v-toolbar color="blue">
      <v-toolbar-title>Administração do Sistema</v-toolbar-title>
    	<v-spacer></v-spacer>
    	<v-toolbar-items class="hidden-sm-and-down">
    	  <v-btn text href="/">Lista de Espaços</v-btn>
    	  <v-btn text disabled>Admin</v-btn>
    	</v-toolbar-items>
		</v-toolbar>
		<v-container fluid grid-list-md text-xs-center>
			<v-layout row wrap>
				<v-flex xs12>
					<v-card>
						<p align="center" class="display-2 font-weight-thin">
							Nome: Cristiano Ronaldo
						</p>
					</v-card>
				</v-flex>
				<v-flex xs6>
					<v-card>
						<v-flex my-2 xs12>
							<v-card-text>
								Email: cris_ronny@gmail.com
							</v-card-text>
						</v-flex>
					</v-card>
				</v-flex>
				<v-flex xs6>
					<v-card>
						<v-flex my-2 xs6>
							<v-card-text>
								Localidade: Vila Nova de Famalicão
							</v-card-text>
						</v-flex>
					</v-card>
				</v-flex>
			</v-layout>
		</v-container>
  </div>
</template>

<script>

</script>

<style>

</style>