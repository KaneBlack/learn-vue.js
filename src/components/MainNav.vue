<template>
	<div class="container-fluid">
		<div class="row justify-content-between">
			<div class="col-6">
				<nav class="main-sub-nav">
					<ul>
						<li>
							<router-link to="/users">spa users</router-link>
						</li>
						<!--<li>-->
							<!--<router-link to="/edit-user">spa edit users</router-link>-->
						<!--</li>-->
					</ul>
				</nav>
			</div>
			<div class="col-6">
				<nav class="main-nav">
					<ul>
						<li>
							<router-link to="/">Lesson 1</router-link>
						</li>
						<li>
							<router-link to="/list">Lesson 2</router-link>
						</li>
						<li>
							<router-link to="/spa">Lesson 3</router-link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'MainNav'
}
</script>
<style lang="scss">

	.main-nav, .main-sub-nav {
		ul {
			padding: 0;
			margin: 0;
			list-style: none;
			text-align: right;
			li {
				display: inline-block;
				vertical-align: top;
				margin: 0 10px;
				a {
					display: inline-block;
					color: #0f0f0f;
					text-transform: lowercase;
					transition: color 300ms ease-out;
					&.router-link-exact-active {
						color: #900;
						text-decoration: none;
						pointer-events: none;
					}
				}
			}
		}
	}

	.main-sub-nav {
		ul {
			text-align: left;
		}
	}

</style>
