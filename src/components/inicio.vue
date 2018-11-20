<template>
    <div id='inicio'>
        <center v-if="!verificar">
        <el-input style="width: 200px;height:15px" placeholder="Usuario" type="text" v-model="usuarioSs" id="nombre"></el-input>
        <br>
        <br>
        <el-input style="width: 200px;height:15px" placeholder="Contraseña" type="password" v-model="usuarioPsswrd" id="clave"></el-input>
        <br>
        <br>
        <el-button type="primary"  @click="validar">Ingresar</el-button>
        </center>
        <center v-if="verificar"><formulario/></center>
    </div>
</template>

<script>
import formulario from "./formulario.vue";

export default {
  name: "inicio",
  components: {
    formulario
  },
  data: function() {
    return {
      usuarioSs: "",
      usuarioPsswrd: "",
      verificar: false
    };
  },
  methods: {
    validar: function() {
      if (this.usuarioSs == "admin" && this.usuarioPsswrd == "contra") {
        this.verificar = true;
      } else {
        alert(
          "el usuario " + this.usuarioSs + " y/o la contraseña son erroneas"
        );
        document.getElementById("nombre").value = "";
        document.getElementById("clave").value = "";
        document.getElementById("nombre").focus();
      }
    }
  }
};
</script>



