<!-- <script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getEmployees, deleteEmployee } from '@/services/employeeService'

const employees = ref([])
const isLoading = ref(true)

const fetchEmployess = async () => {
    try {
        const data = await getEmployees()
        employees.value = data.result
    } catch (error) {
        console.error('Error fetching employees:', error);
    } finally {
        isLoading.value = false
    }
}

const removeEmployee = async (id: number) => {
    try {
        await deleteEmployee(id)
        fetchEmployess()
    } catch (error) {
        console.error('Error deleting employee:', error);
    }
}

onMounted(() => {
    fetchEmployess()
})


</script> -->

<template>
    <div>
        <!-- <div v-if="isLoading">Loading...</div> -->
        <AppHeader title="Employees" :show-button="true" button-text="Add Employee" />

        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Salary</th>
                    <th scope="col" class="text-end">Actions</th>
                </tr>
            </thead>
            <tbody>
                <!-- <tr v-for="employee in employees" :key="employee.id">
                    <th scope="row">{{ employee.id }}</th>
                    <td>{{ employee.name }}</td>
                    <td>{{ employee.salary }}</td>
                    <td class="text-end">
                        <button @click="removeEmployee(employee.id)" class="btn btn-danger m-1">Remove</button>
                    </td>
                </tr> -->
            </tbody>
        </table>
    </div>
</template>