<template>
  <div>
    <h2>Lista de Docentes</h2>
    <div v-if="loading">Cargando docentes...</div>
    <div v-if="error" class="alert alert-danger">{{ error }}</div>
    <ul v-if="teachers.length">
      <li v-for="teacher in teachers" :key="teacher.id">
        {{ teacher.name }} - {{ teacher.email }}
      </li>
    </ul>
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
