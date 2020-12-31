<template>
    <div class="div">
        <span>
            Hello from Example component
        </span>
    </div>
    <span>{{counter}}</span>
    <a href="javascript:;" class="inline-block ml-3 px-2 py-1 bg-blue-600 text-white border border-blue-900 rounded" @click="counter+=800">Add</a>
</template>

<script>
export default {
    data(){
        return {
            counter: 1500
        }
    }
}
</script>

<style scoped lang="scss">
.div {
    span{
        color: red;
    }
}
</style>