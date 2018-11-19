<template>
    <div id='inicio'>
        <el-input style="width: 200px;height:15px" placeholder="Usuario" type="text" v-model="usuarioSs" id="nombre"></el-input>
        <br>
        <br>
        <el-input style="width: 200px;height:15px" placeholder="Contraseña" type="password" v-model="usuarioPsswrd" id="clave"></el-input>
        <br>
        <br>
        <el-button type="primary" @click="validar">Ingresar</el-button>
    </div>
</template>

<script>
export default {
    name: 'inicio',
    data: function(){
        return {
            usuarioSs:'',
            usuarioPsswrd:'',
        }
    },
    methods:{
    validar: function () {
      if (this.usuarioSs === 'admin' && this.usuarioPsswrd === 'admin') {
           this.$router.replace({ name: "formulario" });
      }
      else {
          alert("el usuario " + this.usuarioSs + " y/o la contraseña son erroneas");
          document.getElementById("nombre").value = "";
          document.getElementById("clave").value = "";
          document.getElementById("nombre").focus();
      }
    }
  }
}
</script>

