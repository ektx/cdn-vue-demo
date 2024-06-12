function helloPlugin() {
  const component = Vue.defineComponent({
    props: {
      msg: String
    },
    template: `<div>
      <h1>{{msg}}</h1>
      <slot></slot>
    </div>`
  })
  return {
    install(app) {
      if (app) app.component('hello-plugin', component)
    }
  }
}
