<!-- filepath: /home/karla/KARLITA/Cuna API unsa/cuna-frontend/src/views/Home.vue -->
<template>
  <div class="home">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#">
          🎓 CUNA UNSA
        </a>
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
            <h1 class="display-4 fw-bold text-primary">
              🎓 Bienvenido a CUNA UNSA
            </h1>
            <p class="lead">
              Sistema de gestión académica para la Universidad Nacional de San Agustín
            </p>
            <div class="mt-4">
              <router-link to="/login" class="btn btn-primary btn-lg me-3">
                Iniciar Sesión
              </router-link>
              <router-link to="/register" class="btn btn-outline-primary btn-lg">
                Registrarse
              </router-link>
            </div>
          </div>
          <div class="col-md-6">
            <div class="text-center">
              <img src="../assets/logo.png" alt="Vue logo" class="img-fluid" style="max-width: 300px;">
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
export default {
  name: 'Home'
}
</script>

<style scoped>
.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  min-height: 100vh;
  display: flex;
  align-items: center;
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