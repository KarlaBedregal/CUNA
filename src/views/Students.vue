<!-- filepath: /home/karla/KARLITA/Cuna API unsa/cuna-frontend/src/views/StudentsView.vue -->
<template>
  <div class="students-view">
    <navbar-component />
    
    <div class="container mt-4">
      <div class="row">
        <div class="col-12">
          <h1>👨‍🎓 Gestión de Estudiantes</h1>
        </div>
      </div>
      
      <div class="row mt-4">
        <div class="col-12">
          <div class="card">
            <div class="card-header d-flex justify-content-between align-items-center">
              <h5>📋 Lista de Estudiantes</h5>
              <button class="btn btn-primary" @click="fetchStudents">
                🔄 Actualizar
              </button>
            </div>
            <div class="card-body">
              <div v-if="loading" class="text-center">
                <div class="spinner-border" role="status">
                  <span class="visually-hidden">Cargando...</span>
                </div>
              </div>
              
              <div v-else-if="error" class="alert alert-danger">
                {{ error }}
              </div>
              
              <div v-else-if="students.length === 0" class="text-center">
                <p>No hay estudiantes registrados</p>
              </div>
              
              <div v-else>
                <div class="table-responsive">
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>CUI</th>
                        <th>Nombre</th>
                        <th>Estado</th>
                        <th>Fecha Creación</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="student in students" :key="student.id">
                        <td>{{ student.id }}</td>
                        <td>{{ student.cui }}</td>
                        <td>{{ student.names }}</td>
                        <td>
                          <span :class="student.status ? 'badge bg-success' : 'badge bg-danger'">
                            {{ student.status ? 'Activo' : 'Inactivo' }}
                          </span>
                        </td>
                        <td>{{ new Date(student.created).toLocaleDateString() }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import NavbarComponent from '@/components/common/NavbarComponent.vue'

export default {
  name: 'StudentsView',
  components: {
    NavbarComponent
  },
  
  computed: {
    ...mapGetters(['students', 'loading', 'error'])
  },
  
  methods: {
    ...mapActions(['fetchStudents'])
  },
  
  async created() {
    await this.fetchStudents()
  }
}
</script>