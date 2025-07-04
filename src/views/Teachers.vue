<template>
  <div class="container mt-4">
    <div class="card shadow">
      <div class="card-header bg-success text-white">
        <h4>👨‍🏫 Lista de Docentes</h4>
      </div>
      <div class="card-body">
        <div v-if="loading">Cargando docentes...</div>
        <div v-if="error" class="alert alert-danger">{{ error }}</div>
        <table v-if="teachers.length" class="table table-hover table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Estado</th>
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

export default {
  name: 'TeachersView',
  computed: {
    ...mapGetters(['teachers', 'loading', 'error'])
  },
  created() {
    this.fetchTeachers()
  },
  methods: {
    ...mapActions(['fetchTeachers'])
  }
}
</script>


