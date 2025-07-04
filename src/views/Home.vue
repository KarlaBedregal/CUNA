<!-- filepath: /home/karla/KARLITA/Cuna API unsa/cuna-frontend/src/views/HomeView.vue -->
<template>
  <div class="home-view">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <router-link class="navbar-brand" to="/">
          🎓 CUNA UNSA
        </router-link>
        <div class="navbar-nav ms-auto">
          <router-link to="/login" class="nav-link">Iniciar Sesión</router-link>
          <router-link to="/register" class="nav-link">Registro</router-link>
        </div>
      </div>
    </nav>

    <div class="hero-section">
      <div class="container">
        <div class="row align-items-center min-vh-100">
          <div class="col-md-6">
            <h1 class="display-4 fw-bold text-white">
              🎓 Bienvenido a CUNA UNSA
            </h1>
            <p class="lead text-white">
              Sistema de gestión académica para la Universidad Nacional de San Agustín
            </p>
            <div class="mt-4">
              <router-link to="/login" class="btn btn-primary btn-lg me-3">
                Iniciar Sesión
              </router-link>
              <router-link to="/register" class="btn btn-outline-light btn-lg">
                Registrarse
              </router-link>
            </div>
          </div>
          <div class="col-md-6">
            <div class="text-center">
              <div class="welcome-card">
                <h3 class="text-white">Sistema Académico</h3>
                <p class="text-white">Gestión integral de estudiantes, docentes y cursos</p>
                <div class="mt-3">
                  <button class="btn btn-outline-light" @click="testConnection">
                    🔗 Probar Conexión API
                  </button>
                </div>
                <div v-if="apiStatus" class="mt-2 alert alert-info">
                  {{ apiStatus }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="features-section py-5 bg-light">
      <div class="container">
        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="card h-100">
              <div class="card-body text-center">
                <h5 class="card-title">👨‍🎓 Gestión de Estudiantes</h5>
                <p class="card-text">Administra información completa de estudiantes</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card h-100">
              <div class="card-body text-center">
                <h5 class="card-title">👨‍🏫 Gestión de Docentes</h5>
                <p class="card-text">Control completo del personal docente</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card h-100">
              <div class="card-body text-center">
                <h5 class="card-title">📚 Gestión de Cursos</h5>
                <p class="card-text">Administración de cursos y materias</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/services/api'

export default {
  name: 'HomeView',
  data() {
    return {
      apiStatus: null
    }
  },
  methods: {
    async testConnection() {
      try {
        this.apiStatus = 'Conectando...'
        const response = await api.getWelcome()
        this.apiStatus = `✅ ${response.data.message}`
      } catch (error) {
        this.apiStatus = `❌ Error: ${error.message}`
      }
    }
  }
}
</script>

<style scoped>
.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.welcome-card {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 15px;
  backdrop-filter: blur(10px);
}

.features-section {
  padding: 80px 0;
}

.card {
  transition: transform 0.3s;
}

.card:hover {
  transform: translateY(-5px);
}
</style>