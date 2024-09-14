import { useNuxtApp } from '#app'

export const getEmployees = async () => {
  const { $axiosApiClient } = useNuxtApp()
  const response = await $axiosApiClient.get('/employees')
  return response.data.result // предполагается, что данные находятся в поле result
}

export const createEmployee = async (employee: { name: string; salary: number }) => {
  const config = useRuntimeConfig()
  try {
    const response = await fetch('/employees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(employee),
    })
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`)
    }
    return await response.json()
  } catch (error) {
    console.error('Error creating employee:', error)
    throw error
  }
}

export const deleteEmployee = async (id: number) => {
  const { $axiosApiClient } = useNuxtApp()
  await $axiosApiClient.delete(`/employees/${id}`)
}