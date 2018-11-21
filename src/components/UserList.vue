<template>
	<div>
		<table class="table table-hover">
			<thead>
			<tr>
				<th>
					User id
				</th>
				<th>
					First name
				</th>
				<th>
					Last name
				</th>
				<th>
					Balance
				</th>
				<th>
					Delete
				</th>
			</tr>
			</thead>
			<tbody>
			<tr v-for="item in list" :key="item.id">
				<td>
					<router-link :to="'/edit-user/' + item.id">{{ item.id }}</router-link>
				</td>
				<td>
					{{ item.firstName }}
				</td>
				<td>
					{{ item.lastName }}
				</td>
				<td>
					{{ item.balance }}
				</td>
				<td>
					<button type="button" @click="removeUser(item.id)">remove</button>
				</td>
			</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
  export default {
    name: 'UserList',
    props: {
      list: {
        type: Array,
        required: true
      },
      title: {
        type: String,
        default: 'test message (not require)'
      }
    },
    data () {
      return {
        userListtest: '123'
      }
    },
    methods: {
      removeUser: function (id) {
        this.$emit('remove', id)
      }
    }
  }
</script>

<style scoped>

</style>
