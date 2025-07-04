<template>
  <div class="container mt-4">
    <h2 class="mb-4">📚 Lista de Cursos</h2>

    <div v-if="loading" class="alert alert-info">Cargando cursos...</div>
    <div v-if="error" class="alert alert-danger">{{ error }}</div>

    <table v-if="courses.length" class="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Código</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(course, index) in courses" :key="course.id">
          <td>{{ index + 1 }}</td>
          <td>{{ course.name }}</td>
          <td>{{ course.code }}</td>
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
