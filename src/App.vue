<template>
	<div id="app">
		<MainNav></MainNav>
		<transition name="fade-up" mode="out-in">
			<router-view/>
		</transition>
	</div>
</template>

<script>
import MainNav from './components/MainNav'

export default {
  name: 'App',
  components: {
    MainNav
  }
}
</script>

<style lang="scss">
	@import "https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700";
	@import '~bootstrap/scss/bootstrap.scss';

	#app {
		font-family: 'Roboto', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}

	h1 {
		text-align: center;
	}

	.fade-up-enter-active, .fade-up-leave-active {
		transition: .5s;
		transform: translate(0,0);
	}

	.fade-up-enter, .fade-up-leave-to {
		transform: translate(0,-20px);
		opacity: 0;
	}

	.items-up-enter-active, .items-up-leave-active {
		transition: .5s;
		transform: translate(0,0);
	}

	.items-up-enter, .items-up-leave-to {
		transform: translate(20px,0);
		height: 0;
		opacity: 0;
	}

	.items-up-list-move {
		transition: transform 1s;
	}
</style>
