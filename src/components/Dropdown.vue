<template>
    <div class="dropdown relative">
        <a href="javascript:;" class="dropBtn flex items-center" 
            :class="dropbtnclasslist" 
            @click="toggle($event)"
        >
            {{dropBtnText}}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                class="inline-block ml-1 transition-all" :class="computedDropBtnIconClass"
                v-if="dropBtnIcon"
            >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
        </a>
        <div :class="dropBtnContentClass" :style="{display: show ? 'block' : 'none'}">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        'drop-btn-class': {type: String}, 
        'drop-btn-text': {type: String, required: true}, 
        'drop-btn-icon-class': {type: String},
        'drop-btn-icon': {type: Boolean, default: false},
        'drop-btn-class-when-show': {type: Array, default: []},
        'drop-btn-class-when-closed': {type: Array, default: []},
        'drop-btn-content-class': {type: String, default: 'hidden absolute min-w-full shadow-dropdown bg-white right-0 top-full dropdown-content z-100'}
    },
    data(){
        return {
            show: false
        }
    },
    computed: {
        dropbtnclasslist(){
            var list = [this.dropBtnClass];
            if(this.show){
                list = list.concat(this.dropBtnClassWhenShow);
            }else{
                list = list.concat(this.dropBtnClassWhenClosed);
            }
            return list; 
        },

        computedDropBtnIconClass(){
            if(this.dropBtnIcon){
                var list = [this.dropBtnIconClass];
                if(this.show){
                    list.push(['transform', 'rotate-180'])
                }else{
                    list.push(['transform', 'rotate-0']);
                }
                return list;
            }else{
                return [];
            }
        }
    },
    mounted(){
        document.addEventListener('click', this.close);
    },
    beforeUnmount(){
        document.removeEventListener('click', this.close)
    },
    methods: {
        toggle(event){
            this.show = !this.show;
        },

        close(event){
            if(!this.$el.contains(event.target)){
                this.show = false;
            }
        }
    }
}
</script>

<style>

</style>