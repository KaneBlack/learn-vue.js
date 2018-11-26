<template>
	<div class="hello mt-4" v-cloak>
		<div class="container">
			<div class="row">
				<div class="col-12">
					<h1>{{ msg }}</h1>

					<hr>

					<button v-on:click='condition = !condition'>click me</button>

					<hr>

					<p v-bind:title="tooltip" v-bind:class="{ red: condition }">
						{{ msg }}
					</p>

					<hr>

					<div v-if="condition">
						Condition is true
					</div>
					<div v-else>
						Condition is false
					</div>

					<template v-if="condition">
						<div>
							one true
						</div>
						<div>
							two true
						</div>
					</template>

					<template v-else>
						<div>
							one false
						</div>
						<div>
							two false
						</div>
					</template>

					<hr>

					<div v-show="condition">
						Condition is show
					</div>

					<hr>

					<div v-for="(item, index) in list" v-bind:key="item.id">
						{{ index }} {{ item.title }}
					</div>

					<hr>

					<input type="text" v-bind:value="msg" v-on:input="changeTest">

					<hr>

					<input type="text" v-model="msg">

					<hr>

					<div v-once>
						once: {{ msg }}
					</div>

					<div v-text="msg"></div>
					<div v-html="msgHtml"></div>
					<div v-pre>
						pre {{ msg }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data () {
			return {
				msg: 'Welcome to Vue.js',
				tooltip: 'Hello User',
				condition: true,
				msgHtml: `<span> test </span>`,
				list: []
			}
		},
		mounted: function () {
			this.list = [
				{
					id: '1',
					title: 'first item'
				},
				{
					id: '2',
					title: 'second item'
				},
				{
					id: '3',
					title: 'third item'
				},
				{
					id: '4',
					title: 'fourth item'
				}
			]
		},
		methods: {
			changeTest: function (event) {
				this.msg = event.target.value
			}
		}
	}
</script>
<style>
	[v-cloak] {
		display: none;
	}
</style>
