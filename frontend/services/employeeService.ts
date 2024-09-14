import { useNuxtApp } from '#app'

export const getEmployees = async () => {
    try {
        const { $axios } = useNuxtApp()
        const response = await $axios.get('/employees')
        return response.data
    } catch (error) {
        console.error('Error fetching employees:', error)
        throw error
    }
}

export const createEmployee = async (employee: any) => {
    try {
        const { $axios } = useNuxtApp()
        const response = await $axios.post('/employees', employee)
        return response.data
    } catch (error) {
        console.error('Error creating employee:', error)
        throw error
    }
}

export const deleteEmployee = async (id: number) => {
    try {
        const { $axios } = useNuxtApp()
        const response = await $axios.delete(`/employees/${id}`)
        return response.data
    } catch (error) {
        console.error('Error deleting employee:', error)
        throw error
    }
}