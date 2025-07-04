<template>
  <div>
    <h2>Lista de Docentes</h2>
    <div v-if="loading">Cargando docentes...</div>
    <div v-if="error" class="alert alert-danger">{{ error }}</div>
    <table class="table" v-if="teachers.length">
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Email</th>
          <th>Teléfono</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(teacher, index) in teachers" :key="teacher.id">
          <td>{{ index + 1 }}</td>
          <td>{{ teacher.names }} {{ teacher.father_surname }} {{ teacher.mother_surname }}</td>
          <td>{{ teacher.email }}</td>
          <td>{{ teacher.phone }}</td>
          <td>
            <span :class="teacher.status ? 'text-success' : 'text-danger'">
              {{ teacher.status ? 'Activo' : 'Inactivo' }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

