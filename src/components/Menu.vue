<template>
    <nav class="navbar navbar-dark bg-dark">
        <div class="container">
            <span class="navbar-brand">Simulador de Tweets</span>
            <button 
                class="btn pl4 pr-4" 
                :class="showForm ? 'btn-danger' : 'btn-success'"
                @click="opencloseForm"
            >
                {{ showForm ? 'Cerrar Tweet' : 'Nuevo Tweet' }}
            </button>
        </div>
    </nav>
</template>

<script>
export default {
    props: {
        showForm: Boolean,
        opencloseForm: Function,
    },
};

</script>

<style>

</style>