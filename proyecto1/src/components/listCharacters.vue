<template>
    <section>
        <div class="characters"></div>
        <div class="characters_items">
            <h2>Personajes Individuales</h2>
        </div>
    </section>
</template>
   
<script lang="ts">
import { onMounted } from 'vue';
import { useStore } from 'vuex';
export default {
    setup() {
        const store = useStore()
        onMounted(() => {
            store.dispatch('getCharacters')
        })
    },

}
</script>
   
<style lang="scss"></style>
