<template>
    <div>

        <div> 
            <div class="py-4" v-for="(item,i) in makesModels" :key="'make-and-model-' + i"
                :class="{'border-b border-gray-200': makesModels.length > 1 }"
            >
                <div>
                    <div class="flex justify-between items-center">
                        <span class="font-semibold sm:flex-grow overflow-hidden truncate" v-if="makesModels.length > 1">{{i + 1}}. Bmw 116 lorem ipsum dolor</span>
                        <a href="javascript:;" class="inline-block ml-3 text-xs text-blue-600 hover:text-blue-800 font-light"
                            @click="removeMakeModel(i)" v-if="makesModels.length > 1"><i class="fas fa-times"></i></a>
                    </div>
                    <a href="javascript:;" class="inline-block text-xs text-blue-600 hover:text-blue-800"
                            v-if="makesModelsActiveIndex != i && makesModels.length > 1" @click="editMakeModel(i)">Edit</a>
                </div>
                <div class="" v-if="i == makesModelsActiveIndex">
                    <div>
                        <div>
                            <label class="block">Make</label>
                            <select name="" class="form-control mt-1">
                                <option value="Mercedes">Mercedes</option>
                            </select>
                        </div>
                        <div class="mt-2">
                            <label class="block">Model</label>
                            <select name="" class="form-control mt-1">
                                <option value="Mercedes">Mercedes</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <a href="javascript:;" class="inline-block text-sm text-blue-600 hover:text-blue-800" @click="addMakeModel"
                v-if="makesModels.length < 3"
            >
                <i class="fas fa-plus"></i> <span class="">Add more makes/models</span>
            </a>
        </div>

        <div class="mt-4">
            <label class="block">Vehicle condition</label>
            <div class="mt-1">
                <div class="pretty p-default block">
                    <input type="checkbox" />
                    <div class="state p-primary">
                        <label>Primary</label>
                    </div>
                </div>
                <div class="pretty p-default block mt-1">
                    <input type="checkbox" />
                    <div class="state p-primary">
                        <label>Primary</label>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-4">
            <label class="block">Body type</label>
            <div class="mt-1">
                <div class="pretty p-default block">
                    <input type="checkbox" />
                    <div class="state p-primary">
                        <label>Primary</label>
                    </div>
                </div>
                <div class="pretty p-default block mt-1">
                    <input type="checkbox" />
                    <div class="state p-primary">
                        <label>Primary</label>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-4">
            <label class="block">First registartion</label>
            <div class="flex items-center">
                <select name="" class="form-control mt-1 w-1/2 rounded-tr-none rounded-br-none">
                    <option value="Mercedes">from</option>
                </select>
                <select name="" class="form-control mt-1 w-1/2 rounded-tl-none rounded-bl-none border-l-0">
                    <option value="Mercedes">to</option>
                </select>
            </div>
        </div>

        <div class="mt-4">
            <label class="block">Price</label>
            <div class="flex items-center">
                <select name="" class="form-control mt-1 w-1/2 rounded-tr-none rounded-br-none">
                    <option value="Mercedes">from</option>
                    <option>150000</option>
                </select>
                <select name="" class="form-control mt-1 w-1/2 rounded-tl-none rounded-bl-none border-l-0">
                    <option value="Mercedes">to</option>
                    <option>150000</option>
                </select>
            </div>
        </div>
        
        <div class="mt-4">
            <label class="block">Fuel</label>
            <div class="mt-1">
                <div class="pretty p-default block">
                    <input type="checkbox" />
                    <div class="state p-primary">
                        <label>Primary</label>
                    </div>
                </div>
                <div class="pretty p-default block mt-1">
                    <input type="checkbox" />
                    <div class="state p-primary">
                        <label>Primary</label>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-4">
            <label class="block">Millage km</label>
            <div class="flex items-center">
                <select name="" class="form-control mt-1 w-1/2 rounded-tr-none rounded-br-none">
                    <option value="Mercedes">from</option>
                </select>
                <select name="" class="form-control mt-1 w-1/2 rounded-tl-none rounded-bl-none border-l-0">
                    <option value="Mercedes">to</option>
                </select>
            </div>
        </div>
        
        <div class="mt-4">
            <label class="block">Engin cub.sm</label>
            <div class="flex items-center">
                <select name="" class="form-control mt-1 w-1/2 rounded-tr-none rounded-br-none">
                    <option value="Mercedes">from</option>
                </select>
                <select name="" class="form-control mt-1 w-1/2 rounded-tl-none rounded-bl-none border-l-0">
                    <option value="Mercedes">to</option>
                </select>
            </div>
        </div>
        
        <div class="mt-4">
            <label class="block">Gear</label>
            <div class="mt-1">
                <div class="pretty p-default block">
                    <input type="checkbox" />
                    <div class="state p-primary">
                        <label>Primary</label>
                    </div>
                </div>
                <div class="pretty p-default block mt-1">
                    <input type="checkbox" />
                    <div class="state p-primary">
                        <label>Primary</label>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="mt-4">
            <label class="block">Transmission</label>
            <div class="mt-1">
                <div class="pretty p-default block">
                    <input type="checkbox" />
                    <div class="state p-primary">
                        <label>Primary</label>
                    </div>
                </div>
                <div class="pretty p-default block mt-1">
                    <input type="checkbox" />
                    <div class="state p-primary">
                        <label>Primary</label>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="mt-4">
            <label class="block">Body color</label>
            <div class="mt-1">
                <div class="pretty p-default block">
                    <input type="checkbox" />
                    <div class="state p-primary">
                        <label>Primary</label>
                    </div>
                </div>
                <div class="pretty p-default block mt-1">
                    <input type="checkbox" />
                    <div class="state p-primary">
                        <label>Primary</label>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="mt-4">
            <label class="block">Evro emission klas</label>
            <div class="mt-1">
                <div class="pretty p-default block">
                    <input type="checkbox" />
                    <div class="state p-primary">
                        <label>Primary</label>
                    </div>
                </div>
                <div class="pretty p-default block mt-1">
                    <input type="checkbox" />
                    <div class="state p-primary">
                        <label>Primary</label>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-4">
            <label class="block">Equipment</label>
            <div class="mt-1">
                <div class="pretty p-default block">
                    <input type="checkbox" />
                    <div class="state p-primary">
                        <label>Primary</label>
                    </div>
                </div>
                <div class="pretty p-default block mt-1">
                    <input type="checkbox" />
                    <div class="state p-primary">
                        <label>Primary</label>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-8 text-center sticky bottom-4 shadow-card" id="searchBtnWrapper">
            <button class="mbtn mbtn-primary w-full" id="searchBtn">{{formatNumber(100000)}} offers</button>
        </div>
    </div>
</template>

<script>
var numeral = require('numeral');
// numeral.register('locale', 'az', {
//     delimiters: {
//         thousands: ' ',
//         decimal: '.'
//     }
// });
// numeral.locale('az');

export default {
    components: {

    },
    props: {

    },
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
        },

        formatNumber(number){
            return numeral(number).format('0,0');
        }
    }
}
</script>

<style>

</style>