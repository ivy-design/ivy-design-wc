<script setup lang="ts">
import { ref } from 'vue'

const value = ref([1, 2])
</script>

<template>
    <header>
        <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    </header>

    <main>
        <div style="margin-top: 24px">
            <ivy-button>default</ivy-button>
            <ivy-button type="primary">primary</ivy-button>
            <ivy-button type="success">success</ivy-button>
            <ivy-button type="warning">warning</ivy-button>
            <ivy-button type="danger">danger</ivy-button>
            <ivy-button type="info">info</ivy-button>
        </div>
        <div style="margin-top: 24px">
            <ivy-button disabled>default</ivy-button>
            <ivy-button type="primary" disabled>primary</ivy-button>
            <ivy-button type="success" disabled>success</ivy-button>
            <ivy-button type="warning" disabled>warning</ivy-button>
            <ivy-button type="danger" disabled>danger</ivy-button>
            <ivy-button type="info" disabled>info</ivy-button>
        </div>

        <div style="margin-top: 24px">
            <ivy-button loading>default</ivy-button>
            <ivy-button type="primary" loading>primary</ivy-button>
            <ivy-button type="success" loading>success</ivy-button>
            <ivy-button type="warning" loading>warning</ivy-button>
            <ivy-button type="danger" loading>danger</ivy-button>
            <ivy-button type="info" loading>info</ivy-button>
        </div>
    </main>
</template>

<style scoped>
header {
    line-height: 1.5;
}

.logo {
    display: block;
    margin: 0 auto 2rem;
}

ivy-tooltip {
    --ivy-tooltip-background-color: rgba(70, 76, 91, 0.9);
}
</style>
