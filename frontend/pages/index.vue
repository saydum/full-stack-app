<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getEmployees, deleteEmployee } from '@/services/employeeService'
import AppHeader from '@/components/AppHeader.vue'

// Определяем переменные для хранения данных и состояния загрузки
const employees = ref<Array<{ id: number, name: string, salary: number }>>([])
const isLoading = ref(true)

// Функция для получения данных сотрудников
const fetchEmployees = async () => {
  try {
    const data = await getEmployees()
    employees.value = data // предполагается, что data уже является массивом сотрудников
  } catch (error) {
    console.error('Error fetching employees:', error)
  } finally {
    isLoading.value = false
  }
}

// Функция для удаления сотрудника
const removeEmployee = async (id: number) => {
  try {
    await deleteEmployee(id)
    fetchEmployees() // Обновляем список после удаления
  } catch (error) {
    console.error('Error deleting employee:', error)
  }
}

// Загружаем данные при монтировании компонента
onMounted(() => {
  fetchEmployees()
})
</script>

<template>
  <div>
    <AppHeader 
      title="Employees" 
      :show-button="true"
      buttonText="Add new employee" 
    />
    <!-- Показываем сообщение о загрузке -->
    <div v-if="isLoading">Loading...</div>
    
    <!-- Выводим таблицу сотрудников -->
    <table class="table table-hover" v-else>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Salary</th>
          <th scope="col" class="text-end">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="employee in employees" :key="employee.id">
          <th scope="row">{{ employee.id }}</th>
          <td>{{ employee.name }}</td>
          <td>{{ employee.salary }}</td>
          <td class="text-end">
            <button @click="removeEmployee(employee.id)" class="btn btn-danger m-1">Remove</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
