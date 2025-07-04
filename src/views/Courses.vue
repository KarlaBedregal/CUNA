<template>
  <div class="container mt-4">
    <div class="card shadow">
      <div class="card-header bg-info text-white">
        <h4 class="mb-0">📚 Lista de Cursos</h4>
      </div>
      <div class="card-body">
        <div v-if="loading" class="alert alert-info">Cargando cursos...</div>
        <div v-if="error" class="alert alert-danger">{{ error }}</div>

        <table class="table table-bordered table-hover table-striped text-center align-middle" v-if="courses.length">
          <thead class="table-dark">
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Código</th>
              <th>Créditos</th>
              <th>Año</th>
              <th>Bimestre</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(course, index) in courses" :key="course.id">
              <td>{{ index + 1 }}</td>
              <td>{{ course.name }}</td>
              <td>{{ course.code }}</td>
              <td>{{ course.credits }}</td>
              <td>{{ course.year }}</td>
              <td>{{ course.bimester }}</td>
              <td>
                <span :class="course.status ? 'text-success fw-bold' : 'text-danger fw-bold'">
                  {{ course.status ? 'Activo' : 'Inactivo' }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>

        <div v-if="!courses.length && !loading && !error" class="text-center text-muted">
          No hay cursos registrados.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'CoursesView',
  computed: {
    ...mapGetters(['courses', 'loading', 'error'])
  },
  created() {
    this.fetchCourses()
  },
  methods: {
    ...mapActions(['fetchCourses'])
  }
}
</script>

<style scoped>
.table th,
.table td {
  vertical-align: middle;
}
</style>