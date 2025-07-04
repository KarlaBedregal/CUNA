<template>
  <div>
    <h2>Lista de Cursos</h2>
    <div v-if="loading">Cargando cursos...</div>
    <div v-if="error" class="alert alert-danger">{{ error }}</div>
    <table class="table" v-if="courses.length">
      <thead>
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
            <span :class="course.status ? 'text-success' : 'text-danger'">
              {{ course.status ? 'Activo' : 'Inactivo' }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
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
