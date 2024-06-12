function helloComponent() {
  return Vue.defineComponent({
    setup() {
      return {
        count: Vue.ref(0)
      }
    },
    template: `<el-button @click="count++">{{ count }}</el-button>`
  })
}
