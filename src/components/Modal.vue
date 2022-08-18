<template>
    <div class="fixed z-9999 inset-0 overflow-y-auto bg-black bg-opacity-60"
        v-if="state == 'show'"
    >
        <div class="flex justify-center min-h-screen px-3 md:px-14 py-10" :class="{'items-start': !centered, 'items-center': centered}">
            <div class="w-full bg-white" :class="{'md:w-3/4 lg:1/2 xl:w-5/12': size == 'small'}">
                <div class="flex justify-between p-3">
                    <span class="block text-xl font-semibold">{{title}}</span>
                    <a href="javascript:;" class="cursor-pointer" @click="closeModal()">
                        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </a>
                </div>
                <div class="p-3 text-left">
                    <slot name="modalContent"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        'size': {type: String, default: 'small'},
        'centered': {type: Boolean, default: false},
        'title': {type: String}
    },
    data() {
        return {
            state: 'hide'
        }
    },
    mounted() {
        document.addEventListener('keydown', this.listenKeyDown);
    },
    beforeUnmount(){
        document.removeEventListener('keydown', this.listenKeyDown);
    },
    methods: {
        listenKeyDown(e){
            if(e.keyCode == 27){
                this.closeModal();
            }
        },

        closeModal() {
            this.state = 'hide'
            document.getElementsByTagName('body')[0].style.overflow = 'auto';
        },
        
        openModal(){
            this.state = 'show';
            document.getElementsByTagName('body')[0].style.overflow = 'hidden';
        }
    }
}
</script>

<style scoped>

</style>