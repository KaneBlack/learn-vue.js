<template>
	<div class="mt-4">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<h1>{{ msg }}</h1>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
  export default {
    name: 'HelloSPA',
    data () {
      return {
        msg: 'Welcome to Hello SPA ',
      }
    }
  }
</script>

<style scoped>

</style>
