<template>
    <div>
        <div class="relative">
            <div class="form-control relative pr-8 cursor-pointer border-b select-none" @click="toggleState"
                :class="{'rounded-b-none border-b-0 border-blue-800': state}"
            >
                <span class="block truncate whitespace-nowrap">{{placeholder}}</span>
                <i class="fas fa-chevron-down text-xs block absolute right-2 top-2"></i>
            </div>
            <div class="absolute top-full left-0 z-10 w-full max-h-48 overflow-x-hidden overflow-y-auto bg-white px-3 border border-blue-800 border-t-0 shadow-card rounded-b select-none"
                v-if="state"
            >
                <div class="py-2" v-for="(item, i) in dataOptions" :key="'option-' + i">
                    <div class="pretty p-default">
                        <input type="checkbox" @change="toggleInput($event, i)" :checked="selected_indexes.indexOf(i) > -1"/>
                        <div class="state p-primary">
                            <label>{{item[label]}}</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {

    },
    props: {
        'data-options': {}, 
        'track-by': {type: String, default: 'id'}, 
        'label': {type: String, default: 'label'},
        'data-indexes': {type: Array}
    },
    data(){
        return {
            state: false,
            selected_indexes: []
        }
    },
    computed: {
        placeholder(){
            var text = !this.selected_indexes.length ? 'All' : '';
            this.selected_indexes.forEach(item => {
                text += text ? `, ${this.dataOptions[item][this.label]}` : this.dataOptions[item][this.label];
            })
            return text;
        }
    },
    mounted(){
        document.addEventListener('click', this.close);
        this.dataIndexes.forEach(item => this.selected_indexes.push(item));
    },
    beforeUnmount(){
        document.removeEventListener('click', this.close);
    },
    methods: {
        toggleState(){
            this.state = !this.state;
        },

        close(event){
            if(!this.$el.contains(event.target)){
                this.state = false;
            }
        },

        toggleInput(event, index){
            // console.log(event, index);
            // var option = this.dataOptions[index];
            if(event.target.checked){
                this.selected_indexes.push(index);
            }else{
                this.selected_indexes.splice(this.selected_indexes.indexOf(index) ,1);
            }

            this.$emit('change', this.selected_indexes);
        }
    }
}
</script>

<style>

</style>