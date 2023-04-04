<script setup lang="ts"></script>

<template>
    <header>
        <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    </header>

    <main>
        <ivy-grid square cols="4">
            <ivy-grid-item>1</ivy-grid-item>
            <ivy-grid-item>2</ivy-grid-item>
            <ivy-grid-item>3</ivy-grid-item>
            <ivy-grid-item>4</ivy-grid-item>
            <ivy-grid-item>5</ivy-grid-item>
        </ivy-grid>
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
