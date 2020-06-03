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
				<v-flex xs6>
					<v-flex xs12>
						<v-card>
							<v-card-text>
								Nome: John Doe
							</v-card-text>
						</v-card>
					</v-flex>
					<v-flex xs12>
						<v-card>
							<v-card-text>
								Email: jmac1337@gmail.com
							</v-card-text>
						</v-card>
					</v-flex>
					<v-flex xs12>
						<v-card>
							<v-card-text>
								Localidade: Louro
							</v-card-text>
						</v-card>
					</v-flex>
				</v-flex>
				<v-flex xs6>
					<v-card>
						<v-layout justify-center>
							<v-card-actions>
								<v-img src="@/assets/admin.png"></v-img>
							</v-card-actions>
						</v-layout>
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