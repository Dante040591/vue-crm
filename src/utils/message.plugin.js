export default { //кастомный плагин для Vue, ,будет доступен как this.$message/$error('message')
  install(Vue, options) {
    Vue.prototype.$message = function(html) {
      M.toast({html})
    }

    Vue.prototype.$error = function(html) {
      M.toast({html: `[Ошибка]:  ${html}`})
    }
  }
}