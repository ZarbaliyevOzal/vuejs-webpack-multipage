<template>
    <div class="text-white px-6 py-4 border-0 rounded relative mb-4" :class="bgColor" v-if="show">
        <span class="text-xl inline-block mr-5 align-middle">
            <i class="fas fa-bell" />
        </span>
        <span class="inline-block align-middle mr-8">
            <slot></slot>
        </span>
        <a href="javascript:;"
            @click="show = false"
            class="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none">
            <span>×</span>
        </a>
    </div>
</template>

<script>
export default {
    props: {
        'bg-color' : {type: String, required: true}
    },
    data(){
        return {
            show: true
        }
    }
}
</script>

<style>

</style>