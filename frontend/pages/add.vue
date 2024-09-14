<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { createEmployee } from '@/services/employeeService';
import AppHeader from '@/components/AppHeader.vue';

const name = ref('');
const salary = ref<number | null>(null);
const router = useRouter();

const handleSubmit = async (event: Event) => {
    event.preventDefault();

    console.log(name.value, salary.value);
    

    if (!name.value || salary.value === null) {
        alert('Please fill out all fields');
        return;
    }

    try {
        const response = await createEmployee({ name: name.value, salary: salary.value });
        console.log('Employee created:', response);
        router.push('/'); // Перенаправление после успешного добавления
    } catch (error) {
        console.error('Error adding employee:', error.response?.data || error.message);
        alert('Failed to add employee');
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <AppHeader title="Add new employee" :show-button="false" />

            <form @submit.prevent="handleSubmit" method="post">
                <div class="mb-3">
                    <label for="name" class="form-label">Name employee</label>
                    <input
                        v-model="name"
                        type="text"
                        class="form-control"
                        id="name"
                        placeholder="Name"
                    />
                </div>

                <div class="mb-3">
                    <label for="salary" class="form-label">Salary employee</label>
                    <input
                        v-model.number="salary"
                        type="text"
                        class="form-control"
                        id="salary"
                        placeholder="Salary"
                    />
                </div>

                <div class="mb-3">
                    <button type="submit" class="btn btn-success">Save</button>
                </div>
            </form>
        </div>
    </div>
</template>
