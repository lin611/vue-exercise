<template>
<div id="demo">
  <li v-for="(v, k) in comments">
    {{v.id}}——{{v.content}}
    <button v-on:click="remove(k)">删除</button>
  </li>
  <textarea rows="10" cols="20" v-model="current"></textarea><br/>
  <button v-on:click="push('first')">在数据前面增加</button>
  <button v-on:click="push('last')">在数据后面增加</button>
  <br>
  <button v-on:click="del('first')">删除第一个数据</button>
  <button v-on:click="del('last')">删除最后一个数据</button>
  <br>
  <button v-on:click="sort">降序排序</button>
  <br>
  <button v-on:click="reverse">数据反转</button>
  <br>
  <button v-on:click="alldel">删除所有数据</button>
</div>
</template>

<script type="text/javascript">
  export default {
    data: function () {
      return {
        current: '',
        comments: [
          {id: 1, content: 'JAVA'},
          {id: 0, content: 'PHP'},
          {id: 3, content: 'HTML'},
          {id: 2, content: 'CSS'}
        ]
      }
    },
    methods: {
      // 删除所有数据的方法：
      alldel () {
        this.comments = []
      },
      // 倒序排序的方法：
      sort () {
        this.comments.sort((a, b) => {
          return a.id < b.id
        })
      },
      // 反转数据：
      reverse () {
        this.comments.reverse()
      },
      // 增加数据的方法：
      push (type) {
        var id = this.comments.length
        var content = {id: id, content: this.current}
        switch (type) {
          case 'first':
            this.comments.unshift(content)
            break
          case 'last':
            this.comments.push(content)
            break
        }
        this.current = ''
      },
      // 删除数据的方法：
      del (type) {
        switch (type) {
          case 'first':
            this.comments.shift()
            break
          case 'last':
            this.comments.pop()
            break
        }
      },
      // 点击删除，删除对应的数据信息：
      remove (k) {
        this.comments.splice(k, 1)
      }
    }
  }
</script>
