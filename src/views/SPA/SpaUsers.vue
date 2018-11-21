<template>
	<div class="mt-4">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<h1>{{ msg }}</h1>

					<div class="mt-5">
						<div v-if="!list.length" class="alert alert-warning">
							No users
						</div>

						<user-list v-else :list="list" v-on:remove="removeFromList"></user-list>

						<button type="button" @click.prevent="loadData">
							Load data list prevent
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import UserList from '@/components/UserList'
	import axios from 'axios'
  export default {
    name: 'SpaUsers',
	data: () => ({
	  msg:'Welcome to users list',
	  list: []
	}),
	props: {

	},
	components: {
      'user-list': UserList
	},
	methods: {
      loadData: function () {
        axios.get('http://localhost:3004/users')
		  .then(response => response.data)
		  .then(response => (this.list = response))
      },
      removeFromList: function (id) {
        this.list = this.list.filter(item => item.id !== id)
      },
	}
  }
</script>

<style scoped>

</style>
