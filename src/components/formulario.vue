<template>
    <div id='formulario'>
      <div>
        <h1>Formulario de usuarios</h1> <el-button type="primary">Cerrar Sesión</el-button>
      </div>
        <br>
        <br>
        <el-input style="width: 200px;height:15px" placeholder="Usuario" type="text" v-model="usuarioNmb"></el-input>
        <br>
        <br>
        <el-input style="width: 200px;height:15px" placeholder="Apellido" type="text" v-model="usuarioApd"></el-input>
        <br>
        <br>
        <div>
        <el-select placeholder="Ciudad" v-model="usuarioCi">
        <el-option v-for="item in ciudadespty" :key="item.ciudad" :label="item.label" :value="item.value">
        </el-option>
        </el-select>
        </div>
        <br>
        <br>
        <p>Sexo</p>
        <el-radio v-model="sexoUsuario" label="Masculino">Masculino</el-radio>
        <el-radio v-model="sexoUsuario" label="Femenino">Femenino</el-radio>
        <br>
        <br>
        <p>Fecha de Nacimiento</p>
        <el-date-picker value-format="dd-MM-yyyy" placeholder="Fecha de nacimiento" v-model="fechaNac"></el-date-picker>
        <br>
        <br>
        <p>Estado de usuario</p>
        <el-radio v-model="estUsuario" label="Activo">Activo</el-radio>
        <el-radio v-model="estUsuario" label="Inactivo">Inactivo</el-radio>
        <br>
        <br>
        <el-input style="width: 900px;height:15px" placeholder="Dirección de entrega" type="text" v-model="usuarioDir"></el-input>
        <br>
        <br>
        <el-button type="primary" @click="guardarUser">Agregar</el-button>
        <br>
        <br>
        <el-table :data="tableData1.filter(buscar_usuario => !buscar || buscar_usuario.nombre.toLowerCase().includes(buscar.toLowerCase()))"
        style="width: 100%">
        <el-table-column fixed prop="nombre" label="Nombre" width="180">
        </el-table-column>
        <el-table-column prop="apellido" label="Apellido" width="180">
        </el-table-column>
        <el-table-column prop="ciudad" label="Ciudad" width="180">
        </el-table-column>
        <el-table-column prop="sexo" label="Sexo" width="180">
        </el-table-column>
        <el-table-column value-format="dd-MM-yyyy" prop="fechaNac" label="Fecha de nacimiento" width="180">
        </el-table-column>
        <el-table-column prop="estado" label="Estado" width="180">
        </el-table-column>
        <el-table-column prop="direccion" label="Dirección" width="180">
        </el-table-column>
        <el-table-column fixed="right" align="right" width="120">
        <template slot="header" slot-scope="slot">
        <el-input v-model="buscar" size="mini" placeholder="Buscador" />
        </template>
        <el-table-column fixed="right" label="Operaciones" width="120">
        <template slot-scope="scope">
        <el-button @click.native.prevent="deleteRow(scope.$index, tableData1)" type="danger" size="small"
        icon="el-icon-delete">
        </el-button>
        </template>
        </el-table-column>
        </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
  name: "formulario",
  data: function() {
    return {
      buscar: "",
      usuarioNmb: "",
      usuarioApd: "",
      usuarioCi: "",
      sexoUsuario: "",
      fechaNac: "",
      estUsuario: "",
      usuarioDir: "",
      tableData1: [
        {
          nombre: "Daniel",
          apellido: "Rodas",
          ciudad: "Panamá",
          sexo: "Masculino",
          fechaNac: "1-01-1111",
          estado: "Activo",
          direccion: "Tumba Muerto"
        }
      ],
      ciudadespty: [
        {
          value: "Bocas del Toro",
          label: "Bocas del Toro"
        },
        {
          value: "Chiriquí",
          label: "Chiriquí "
        },
        {
          value: "Coclé ",
          label: "Coclé "
        },
        {
          value: "Colón ",
          label: "Colón "
        },
        {
          value: "Darién",
          label: "Darién "
        },
        {
          value: "Herrera",
          label: "Herrera "
        },
        {
          value: "Los Santos",
          label: "Los Santos"
        },
        {
          value: "Panamá",
          label: "Panamá"
        }
      ]
    };
  },
  methods: {
    guardarUser: function() {
      this.tableData1.push({
        nombre: this.usuarioNmb,
        apellido: this.usuarioApd,
        ciudad: this.usuarioCi,
        sexo: this.sexoUsuario,
        fechaNac: this.fechaNac,
        estado: this.estUsuario,
        direccion: this.usuarioDir
      });
      (this.usuarioNmb = ""),
        (this.usuarioApd = ""),
        (this.usuarioCi = ""),
        (this.sexoUsuario = ""),
        (this.fechaNac = ""),
        (this.estUsuario = ""),
        (this.usuarioDir = "");
      console.log(
        this.nombre,
        this.apellido,
        this.ciudad,
        this.sexo,
        this.fechaNac,
        this.estado,
        this.direccion
      );
    }
  },
  buscar_usuario: function() {
    const index = this.tableData1.findIndex(
      item => item.nombre === this.buscar
    );
    console.log(index);
    if (index > -1) {
      console.log(this.tableData1[index]);
      return true;
    }
    return false;
  },
  deleteRow(index, rows) {
    rows.splice(index, 1);
  },
  handleEdit(index, row) {
    console.log(index, row);
  }
};
</script>

