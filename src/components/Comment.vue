<template>
  <div class="comment">
    <div class="comment-open">
    	<avatar></avatar>
    	<input type="text" placeholder="请输入留言" v-model="newItem" v-on:keyup.enter="addItem">
    	<button v-on:click="addItem">提交</button>
    </div>
    <div class="comment-content">
    	<div class="panel-heading">留言列表({{items.length}}条)</div>
        <div class="comment-null" v-if="items.length === 0">还木有评论...( >﹏<。)</div>
		<div class="panel-body">
			<ul>
				<li v-for="item in items">{{item.label}}</li>
			</ul>
		</div>
    </div>
  </div>
</template>

<script>
import Store from '../store'
import Avatar from './Avatar'

export default {
	data: function () {
		return {
			items: Store.fetch(),
			newItem: '',
            count: 0
		}
	},
	components: {
      Avatar
    },
    watch: {
    	items: {
    		handler: function (items) {
    			Store.save(items)
    		},
    		deep: true
    	}
    },
    methods: {
    	addItem: function () {
    		this.items.push({
    			label: this.newItem
    		})
    		this.newItem = ''
            // this.count += 1
            // console.log(this.items.length)
    	}
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	.comment {
		width: 800px;
	}

	.comment-open {
		display: flex;
		justify-content: center;

		.avatar {
			margin-right: 20px;
		}

		input[type="text"] {
			width: 100%;
		}
	}
</style>
