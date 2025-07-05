<template>
  <div class="container mt-4">
    <div class="card shadow">
      <div class="card-header bg-success text-white d-flex justify-content-between align-items-center">
        <h4>👨‍🏫 Lista de Docentes</h4>
        <button class="btn btn-light btn-sm" @click="showForm = !showForm">
          {{ showForm ? 'Cancelar' : '➕ Agregar Docente' }}
        </button>
      </div>

      <div v-if="showForm" class="card-body border border-success p-3 mb-3">
        <h5>Nuevo Docente</h5>
        <form @submit.prevent="createTeacher">
          <div class="row">
            <div class="col-md-4 mb-2">
              <input v-model="form.names" type="text" class="form-control" placeholder="Nombres" required>
            </div>
            <div class="col-md-4 mb-2">
              <input v-model="form.father_surname" type="text" class="form-control" placeholder="Apellido Paterno" required>
            </div>
            <div class="col-md-4 mb-2">
              <input v-model="form.mother_surname" type="text" class="form-control" placeholder="Apellido Materno" required>
            </div>
            <div class="col-md-6 mb-2">
              <input v-model="form.email" type="email" class="form-control" placeholder="Correo electrónico" required>
            </div>
            <div class="col-md-6 mb-2">
              <input v-model="form.phone" type="text" class="form-control" placeholder="Teléfono">
            </div>
          </div>
          <button type="submit" class="btn btn-success">Guardar</button>
        </form>
      </div>

      <div class="card-body">
        <div v-if="loading">Cargando docentes...</div>
        <div v-if="error" class="alert alert-danger">{{ error }}</div>
        <table v-if="teachers.length" class="table table-hover table-bordered">
          <thead class="table-success">
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(teacher, index) in teachers" :key="teacher.id">
              <td>{{ index + 1 }}</td>
              <td>{{ teacher.names }} {{ teacher.father_surname }} {{ teacher.mother_surname }}</td>
              <td>{{ teacher.email }}</td>
              <td>
                <span :class="teacher.status ? 'text-success' : 'text-danger'">
                  {{ teacher.status ? 'Activo' : 'Inactivo' }}
                </span>
              </td>
              <td>
                <button class="btn btn-sm btn-warning me-2" @click="editTeacher(teacher)">✏️</button>
                <button class="btn btn-sm btn-danger" @click="deleteTeacher(teacher.id)">🗑️</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-else class="text-muted">No hay docentes disponibles.</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import api from '@/services/api'

export default {
  name: 'TeachersView',
  data() {
    return {
      showForm: false,
      form: {
        names: '',
        father_surname: '',
        mother_surname: '',
        email: '',
        phone: ''
      }
    }
  },
  computed: {
    ...mapGetters(['teachers', 'loading', 'error'])
  },
  created() {
    this.fetchTeachers()
  },
  methods: {
    ...mapActions(['fetchTeachers']),

    async createTeacher() {
      try {
        const response = await api.createTeacher(this.form)
        console.log('✅ Docente creado:', response.data)
        this.showForm = false
        this.form = { names: '', father_surname: '', mother_surname: '', email: '', phone: '' }
        this.fetchTeachers()
      } catch (err) {
        console.error('❌ Error al crear docente:', err)
        alert('No se pudo crear el docente')
      }
    },

    async deleteTeacher(id) {
      if (!confirm('¿Estás seguro de eliminar este docente?')) return
      try {
        await api.deleteTeacher(id)
        this.fetchTeachers()
      } catch (err) {
        console.error('❌ Error al eliminar docente:', err)
      }
    },

    editTeacher(teacher) {
      alert(`Editar docente: ${teacher.names}`)
      // Aquí se puede abrir un modal o redirigir a otro formulario
    }
  }
}
</script>

<style scoped>
.table td, .table th {
  vertical-align: middle;
}
</style>