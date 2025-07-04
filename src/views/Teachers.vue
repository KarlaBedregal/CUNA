<template>
  <div class="container mt-4">
    <h2 class="mb-4">👨‍🏫 Lista de Docentes</h2>

    <div v-if="loading" class="alert alert-info">Cargando docentes...</div>
    <div v-if="error" class="alert alert-danger">{{ error }}</div>

    <table v-if="teachers.length" class="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(teacher, index) in teachers" :key="teacher.id">
          <td>{{ index + 1 }}</td>
          <td>{{ teacher.name }}</td>
          <td>{{ teacher.email }}</td>
        </tr>
      </tbody>
    </table>
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

