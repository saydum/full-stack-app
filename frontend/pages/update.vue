<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
</script>

<template>
    <div class="container">
        <div class="row">
        <AppHeader title="Update employee" :show-button="false"/>

            <form action="" method="post">
                <div class="mb-3 ">
                    <label for="name" class="form-label">Name employee</label>
                    <input type="text" name="name" class="form-control" id="name" placeholder="Name">
                </div>

                <div class="mb-3">
                    <label for="salary" class="form-label">Salary employee</label>
                    <input type="number" name="salary" class="form-control" id="salary" placeholder="Salary">
                </div>

                <div class="mb-3">
                    <button type="submit" class="btn btn-success">Save</button>
                </div>
            </form>

        </div>
    </div>
</template>