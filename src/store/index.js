import { createStore } from 'vuex'
import api from '@/services/api'

export default createStore({
  state: {
    user: JSON.parse(localStorage.getItem('user')) || null,
    token: localStorage.getItem('token') || null,
    isAuthenticated: !!localStorage.getItem('token'),
    students: [],
    teachers: [],
    courses: [],
    loading: false,
    error: null
  },
  
  mutations: {
    SET_USER(state, user) {
      state.user = user
      state.isAuthenticated = !!user
    },
    
    SET_TOKEN(state, token) {
      state.token = token
      state.isAuthenticated = !!token
    },
    
    SET_STUDENTS(state, students) {
      state.students = students
    },
    
    SET_TEACHERS(state, teachers) {
      state.teachers = teachers
    },
    
    SET_COURSES(state, courses) {
      state.courses = courses
    },
    
    SET_LOADING(state, loading) {
      state.loading = loading
    },
    
    SET_ERROR(state, error) {
      state.error = error
    },
    
    LOGOUT(state) {
      state.user = null
      state.token = null
      state.isAuthenticated = false
    }
  },
  
  actions: {
    async login({ commit }, credentials) {
      try {
        commit('SET_LOADING', true)
        const response = await api.login(credentials)
        
        if (response.data.success) {
          const { user, token } = response.data.data
          
          localStorage.setItem('token', token)
          localStorage.setItem('user', JSON.stringify(user))
          
          commit('SET_TOKEN', token)
          commit('SET_USER', user)
          commit('SET_ERROR', null)
          
          return response.data
        }
      } catch (error) {
        commit('SET_ERROR', error.response?.data?.message || 'Error de login')
        throw error
      } finally {
        commit('SET_LOADING', false)
      }
    },
    
    async register({ commit }, userData) {
      try {
        commit('SET_LOADING', true)
        const response = await api.register(userData)
        
        if (response.data.success) {
          const { user, token } = response.data.data
          
          localStorage.setItem('token', token)
          localStorage.setItem('user', JSON.stringify(user))
          
          commit('SET_TOKEN', token)
          commit('SET_USER', user)
          commit('SET_ERROR', null)
          
          return response.data
        }
      } catch (error) {
        commit('SET_ERROR', error.response?.data?.message || 'Error de registro')
        throw error
      } finally {
        commit('SET_LOADING', false)
      }
    },
    
    async logout({ commit }) {
      try {
        await api.logout()
      } catch (error) {
        console.error('Error al cerrar sesión:', error)
      } finally {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        commit('LOGOUT')
      }
    },
    
    async fetchStudents({ commit }) {
      try {
        commit('SET_LOADING', true)
        const response = await api.getStudents()
        commit('SET_STUDENTS', response.data.data)
      } catch (error) {
        commit('SET_ERROR', error.response?.data?.message || 'Error al cargar estudiantes')
      } finally {
        commit('SET_LOADING', false)
      }
    },
    
      async fetchTeachers({ commit }) {
    try {
      commit('SET_LOADING', true)
      const response = await api.getTeachers()
      console.log('🧪 Docentes response.data:', response.data)
      // Usa la línea correcta según el formato:
      commit('SET_TEACHERS', response.data.data) // ← probablemente así
    } catch (error) {
      console.error('❌ Error docentes:', error.response?.data || error)
      commit('SET_ERROR', 'Error al cargar docentes')
    } finally {
      commit('SET_LOADING', false)
    }
  },
    
    async fetchCourses({ commit }) {
  try {
    commit('SET_LOADING', true)
    const response = await api.getCourses()
    console.log('🧪 Cursos response.data:', response.data)
    commit('SET_COURSES', response.data.data) // ← probablemente así
  } catch (error) {
    console.error('❌ Error cursos:', error.response?.data || error)
    commit('SET_ERROR', 'Error al cargar cursos')
  } finally {
    commit('SET_LOADING', false)
  }
}
  },
  
  getters: {
    isAuthenticated: state => state.isAuthenticated,
    currentUser: state => state.user,
    students: state => state.students,
    teachers: state => state.teachers,
    courses: state => state.courses,
    loading: state => state.loading,
    error: state => state.error
  }
})