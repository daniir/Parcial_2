import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';


Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  data:function(){
    return {
      usuarioSs:'',
      usuarioPsswrd:'',
      usuarioNmb: "",
      usuarioApd: "",
      usuarioCi: "",
      sexoUsuario: "",
      fechaNac: "",
      estUsuario: "",
      usuarioDir: "",
      nombre: "",
      apellido: "",
      ciudad: "",
      sexo: "",
      estado: "",
      direccion: ""
    }
  }
}).$mount('#app')
