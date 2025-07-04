<template>
  <div>
    <h2>Lista de Cursos</h2>
    <div v-if="loading">Cargando cursos...</div>
    <div v-if="error" class="alert alert-danger">{{ error }}</div>
    <ul v-if="courses.length">
      <li v-for="course in courses" :key="course.id">
        {{ course.name }} - {{ course.code }}
      </li>
    </ul>
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