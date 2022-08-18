<template>
    <div>
        <div> 
            <div class="py-4" v-for="(item,i) in makesModels" :key="'make-and-model-' + i"
                :class="{'border-b border-gray-200': makesModels.length > 1 && makesModelsActiveIndex != i }"
            >
                <div class="block sm:flex sm:justify-between sm:items-center">
                    <span class="font-bold sm:flex-grow" v-if="makesModels.length > 1">1. Bmw 116</span>
                    <div class="text-right">
                        <a href="javascript:;" class="inline-block text-sm text-blue-600 hover:text-blue-800"
                            v-if="makesModelsActiveIndex != i && makesModels.length > 1" @click="editMakeModel(i)"><i class="fas fa-pen"></i> Edit</a>
                        <a href="javascript:;" class="inline-block ml-3 text-sm text-blue-600 hover:text-blue-800"
                            @click="removeMakeModel(i)" v-if="makesModels.length > 1"><i class="fas fa-times"></i> Delete</a>
                    </div>
                </div>
                <div class="" v-if="i == makesModelsActiveIndex">
                    <div class="grid grid-cols-4 gap-4">
                        <div class="col-span-2 md:col-span-1">
                            <label class="inline-block font-bold">Make</label>
                            <select name="" class="form-control mt-1">
                                <option value="Mercedes">Mercedes</option>
                            </select>
                        </div>
                        <div class="col-span-2 md:col-span-1">
                            <label class="inline-block font-bold">Model</label>
                            <select name="" class="form-control mt-1">
                                <option value="Mercedes">Mercedes</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <a href="javascript:;" class="inline-block mt-4 text-blue-600 hover:text-blue-800" @click="addMakeModel"
                v-if="makesModels.length < 3"
            >
                <i class="fas fa-plus">Add more makes/models</i>
            </a>
        </div>

        <div class="grid grid-cols-4 gap-4 mt-8">
            <div class="col-span-2 md:col-span-1">
                <label class="inline-block font-bold">Vehicle condition</label>
                <div class="mt-1">
                    <multiselect 
                        :data-options="[
                            {label: 'ozal', id: 1},
                            {label: 'orxan', id: 6},
                            {label: 'aydin', id: 5},
                            {label: 'lorem', id: 4},
                            {label: 'dotem', id: 3},
                            {label: 'qotem', id: 2},
                        ]"
                        :data-indexes="[0, 3, 4]"
                    />
                </div>
            </div>
            <div class="col-span-2 md:col-span-1">
                <label class="inline-block font-bold">Body type</label>
                <div class="mt-1">
                    <multiselect 
                        :data-options="[
                            {label: 'ozal', id: 1},
                            {label: 'orxan', id: 6},
                            {label: 'aydin', id: 5},
                            {label: 'lorem', id: 4},
                            {label: 'dotem', id: 3},
                            {label: 'qotem', id: 2},
                        ]"
                        :data-indexes="[0, 3, 4]"
                    />
                </div>
            </div>
            <div class="col-span-2 md:col-span-1">
                <label class="inline-block font-bold">First registartion</label>
                <div class="flex items-center">
                    <select name="" class="form-control mt-1 w-1/2 rounded-tr-none rounded-br-none">
                        <option value="Mercedes">from</option>
                    </select>
                    <select name="" class="form-control mt-1 w-1/2 rounded-tl-none rounded-bl-none border-l-0">
                        <option value="Mercedes">to</option>
                    </select>
                </div>
            </div>
            <div class="col-span-2 md:col-span-1">
                <label class="inline-block font-bold">Price</label>
                <div class="flex items-center">
                    <select name="" class="form-control mt-1 w-1/2 rounded-tr-none rounded-br-none">
                        <option value="Mercedes">from</option>
                    </select>
                    <select name="" class="form-control mt-1 w-1/2 rounded-tl-none rounded-bl-none border-l-0">
                        <option value="Mercedes">to</option>
                    </select>
                </div>
            </div>
            <div class="col-span-2 md:col-span-1">
                <label class="inline-block font-bold">Fuel</label>
                <div class="mt-1">
                    <multiselect 
                        :data-options="[
                            {label: 'ozal', id: 1},
                            {label: 'orxan', id: 6},
                            {label: 'aydin', id: 5},
                            {label: 'lorem', id: 4},
                            {label: 'dotem', id: 3},
                            {label: 'qotem', id: 2},
                        ]"
                        :data-indexes="[0, 3, 4]"
                    />
                </div>
            </div>
            <div class="col-span-2 md:col-span-1">
                <label class="inline-block font-bold">Millage km</label>
                <div class="flex items-center">
                    <select name="" class="form-control mt-1 w-1/2 rounded-tr-none rounded-br-none">
                        <option value="Mercedes">from</option>
                    </select>
                    <select name="" class="form-control mt-1 w-1/2 rounded-tl-none rounded-bl-none border-l-0">
                        <option value="Mercedes">to</option>
                    </select>
                </div>
            </div>
            <div class="col-span-2 md:col-span-1">
                <label class="inline-block font-bold">Engin cub.sm</label>
                <div class="flex items-center">
                    <select name="" class="form-control mt-1 w-1/2 rounded-tr-none rounded-br-none">
                        <option value="Mercedes">from</option>
                    </select>
                    <select name="" class="form-control mt-1 w-1/2 rounded-tl-none rounded-bl-none border-l-0">
                        <option value="Mercedes">to</option>
                    </select>
                </div>
            </div>
            <div class="col-span-2 md:col-span-1">
                <label class="inline-block font-bold">Gear</label>
                <div class="mt-1">
                    <multiselect 
                        :data-options="[
                            {label: 'ozal', id: 1},
                            {label: 'orxan', id: 6},
                            {label: 'aydin', id: 5},
                            {label: 'lorem', id: 4},
                            {label: 'dotem', id: 3},
                            {label: 'qotem', id: 2},
                        ]"
                        :data-indexes="[0, 3, 4]"
                    />
                </div>
            </div>
            <div class="col-span-2 md:col-span-1">
                <label class="inline-block font-bold">Transmission</label>
                <div class="mt-1">
                    <multiselect 
                        :data-options="[
                            {label: 'ozal', id: 1},
                            {label: 'orxan', id: 6},
                            {label: 'aydin', id: 5},
                            {label: 'lorem', id: 4},
                            {label: 'dotem', id: 3},
                            {label: 'qotem', id: 2},
                        ]"
                        :data-indexes="[0, 3, 4]"
                    />
                </div>
            </div>
            <div class="col-span-2 md:col-span-1">
                <label class="inline-block font-bold">Body color</label>
                <div class="mt-1">
                    <multiselect 
                        :data-options="[
                            {label: 'ozal', id: 1},
                            {label: 'orxan', id: 6},
                            {label: 'aydin', id: 5},
                            {label: 'lorem', id: 4},
                            {label: 'dotem', id: 3},
                            {label: 'qotem', id: 2},
                        ]"
                        :data-indexes="[0, 3, 4]"
                    />
                </div>
            </div>
            <div class="col-span-2 md:col-span-1">
                <label class="inline-block font-bold">Evro emission klas</label>
                <div class="mt-1">
                    <multiselect 
                        :data-options="[
                            {label: 'ozal', id: 1},
                            {label: 'orxan', id: 6},
                            {label: 'aydin', id: 5},
                            {label: 'lorem', id: 4},
                            {label: 'dotem', id: 3},
                            {label: 'qotem', id: 2},
                        ]"
                        :data-indexes="[0, 3, 4]"
                    />
                </div>
            </div>
        </div>

        <div class="mt-8">
            <label class="inline-block text font-bold">Equipment</label>
            <div class="grid grid-cols-4 gap-4 mt-1">
                <div class="col-span-4 md:col-span-2 lg:col-span-1">
                    <div class="pretty p-default">
                            <input type="checkbox" />
                            <div class="state">
                                <label>Check</label>
                            </div>
                    </div>
                </div>
                <div class="col-span-4 md:col-span-2 lg:col-span-1">
                    <div class="pretty p-default">
                            <input type="checkbox" />
                            <div class="state">
                                <label>Check</label>
                            </div>
                    </div>
                </div>
                <div class="col-span-4 md:col-span-2 lg:col-span-1">
                    <div class="pretty p-default">
                            <input type="checkbox" />
                            <div class="state">
                                <label>Check</label>
                            </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-8 text-center sticky bottom-8" id="searchBtnWrapper">
            <button class="mbtn mbtn-primary w-full sm:w-1/3" id="searchBtn">1558562 elan</button>
        </div>
    </div>
</template>

<script>
export default {
    components: {

    },
    props: [

    ],
    data(){
        return {
            makesModels: [],
            makesModelsActiveIndex: null
        }
    },
    computed: {

    },
    mounted(){
        if(!this.makesModels.length){
            this.addMakeModel();
        }
    },
    beforeUnmount(){
        
    },
    methods: {
        addMakeModel(){
            if(this.makesModels.length < 3){
                this.makesModels.push({
                    make: { id: null, name: ''},
                    model: {id: null, name: '', list: []}
                })
                this.makesModelsActiveIndex = this.makesModels.length - 1;
            }
        },

        removeMakeModel(index){
            if(this.makesModels.length > 1){
                this.makesModels.splice(index, 1);
                this.makesModelsActiveIndex = this.makesModels.length - 1;
            }
        },

        editMakeModel(i){
            this.makesModelsActiveIndex = i;
        }
    }
}
</script>

<style>

</style>