<script setup lang="ts"></script>

<template>
    <header>
        <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    </header>

    <main>
        <ivy-button>default</ivy-button>
        <ivy-tooltip content="这是 tooltip 的内容">
            <ivy-button>top</ivy-button>
        </ivy-tooltip>
        <ivy-tooltip content="这是 tooltip 的内容" placement="right">
            <ivy-button>right</ivy-button>
        </ivy-tooltip>
        <ivy-tooltip content="这是 tooltip 的内容" placement="bottom">
            <ivy-button>bottom</ivy-button>
        </ivy-tooltip>
        <ivy-tooltip content="这是 tooltip 的内容" placement="left">
            <ivy-button>left</ivy-button>
        </ivy-tooltip>
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

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
        margin: 0 2rem 0 0;
    }

    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }
}
ivy-tooltip {
    --ivy-tooltip-background-color: rgba(70, 76, 91, 0.9);
}
</style>
