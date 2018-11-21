<template>
	<div class="hello mt-4" v-cloak>
		<div class="container">
			<div class="row">
				<div class="col-12">
					<h1>{{ msg }}</h1>

					<hr>

					<p>
						Screen width is {{ screenWidth }}
					</p>

					<p>
						{{ totalUsersTitle }}
					</p>

					<div v-if="!list.length" class="alert alert-warning">
						No users
					</div>

					<user-list v-else :list="list" v-on:remove="removeFromList"></user-list>

					<button type="button" @click.prevent="loadData">
						Load data list prevent
					</button>

					<hr>

					<button type="button" @click.stop="loadData">
						Load data list stop
					</button>

					<button type="button" @click.native="loadData">
						Load data list native
					</button>

					<hr>


					<p>
						{{ test }}
					</p>

					<input type="text" v-bind:value="test" v-on:keypress.enter.exact="changeTest($event.target.value)">

					<input type="text" v-model.trim="test">
					<input type="number" v-model.number="testNum">

				</div>
			</div>
		</div>
	</div>
</template>

<script>

  import UserList from '../components/UserList'

  export default {
    name: 'HelloList',
    components: {
      UserList
    },
    data () {
      return {
        msg: 'Welcome to Hello List ',
        test: 'Hello world enter',
        testNum: '0',
        list: [],
        condition: true,
        screenWidth: window.outerWidth,
      }
    },
    computed: {
      totalUsers: function () {
        return this.list.length
      },
      totalUsersTitle: function () {
        return `Users lenght: ${ this.totalUsers }`
      },
      filteredData: function () {
        return this.condition ? this.list : this.list.filter(item => item.title)
      }
    },
    watch: {
      screenWidth: 'screenWidthChanged'
    },
    mounted: function () {
      window.addEventListener('resize', () => {
        this.screenWidth = window.outerWidth
      })
    },
    methods: {
      changeTest: function (value) {
        this.test = value
      },

      removeFromList: function (id) {
        this.list = this.list.filter(item => item.id !== id)
      },

      screenWidthChanged: function () {
        console.log('screenWidth changed', this.screenWidth)
      },

      loadData: function () {
        this.list = [
          {
            'id': 0,
            'isActive': false,
            'balance': 51.232,
            'picture': 0,
            'age': 32,
            'accessLevel': 'user',
            'firstName': 'Man1',
            'lastName': 'Realman',
            'company': 'Some company1',
          },
          {
            'id': 1,
            'isActive': true,
            'balance': 65.2,
            'picture': 0,
            'age': 32,
            'accessLevel': 'user',
            'firstName': 'Man2',
            'lastName': 'Realman',
            'company': 'Some company2',
          },
          {
            'id': 2,
            'isActive': false,
            'balance': 231.151,
            'picture': 0,
            'age': 32,
            'accessLevel': 'user',
            'firstName': 'Man3',
            'lastName': 'Realman',
            'company': 'Some company3',
          },

        ]
      }
    }
  }
</script>
<style>
</style>
