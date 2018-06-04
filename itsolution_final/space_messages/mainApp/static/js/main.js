Vue.component('space_message', {
  props: ['id', 'date', 'text', 'readed'],
  template: '<div class="row border rounded" style="padding:3px;"> <div class="col col-md-2">{{ id }}</div><div class="col col-md-3">{{ date }}</div> <div class="col col-md-3">{{ text }}</div><div class="col col-md-3"><button v-on:click="vm.mark_readed(id), readed=\'true\'" class="btn btn-primary btn-sm" >{{ readed }}</button></div></div>',
})

var vm = new Vue({
    el: '#app',
    data: {
        msgs: [],
    },
    created: function(){
            var vm = this
            fetch('http://workrork.beget.tech/api/get_messages?last_id=0')
              .then(function (response) {
                return response.json()
              })
              .then(function (data) {
                vm.msgs = data
              });
              setTimeout(vm.get_msgs, 10000);
            },
    
    methods: {
        get_msgs: function(){
            var vm = this
            var last_id = this.msgs[this.msgs.length - 1]['id']
            fetch('http://workrork.beget.tech/api/get_messages?last_id='+last_id)
              .then(function (response) {
                return response.json()
              })
              .then(function (data) {
                  if(data!==null){
                    data.forEach(function(message, i, data) {
                        vm.msgs.push(message);
                    });
                  }
              });
            setTimeout(vm.get_msgs, 10000);
        },
        mark_readed: function(id){
            fetch('http://workrork.beget.tech/api/mark_read?id='+id);
        },

    },
     delimiters: ['[[',']]']
});