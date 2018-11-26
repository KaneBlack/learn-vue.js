<template>
	<div class="mt-4">
		<div class="container">
			<div class="row">
				<div class="col-12">
					test
					Page ID is: {{ userId }}
					{{ user.firstName }}
					{{ user.lastName }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		name: 'SpaHome',
		data: () => ({
			user: null
		}),
		computed: {
			userId () {
				return this.$route.params.id
			}
		},
		mounted () {
			this.loadData()
		},
		methods: {
			loadData () {
				axios.get(`http://localhost:3004/users/${this.userId}`)
				.then(response => response.data)
				.then(response => (this.user = response))
			}
		}
	}
</script>

<style scoped>

</style>
