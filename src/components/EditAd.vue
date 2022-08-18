<template>
    <div>
        <Form action="" method="POST" @submit="onSubmit" :validation-schema="simpleSchema" v-slot="{errors, values}">
            <div class="grid grid-cols-2 gap-4">
                <div class="col-span-2 md:col-span-1">
                    <div class="">
                        <label class=" font-bold">* Body Type</label>
                        <div>
                            <Field name="body_type_id" as="select" class="form-control">
                                <option value="">Choose</option>
                                <option value="1" v-for="body_type in body_types" :key="body_type.name">{{body_type.name}}</option>
                            </Field>
                            <div class="invalid-feedback block" v-if="errors.body_type_id">{{errors.body_type_id}}</div>
                        </div>
                    </div>
                </div>
                <div class="col-span-2 md:col-span-1">
                    <div class="">
                        <label class=" font-bold">Fuel Type</label>
                        <div>
                            <Field name="fuel_type_id" as="select" class="form-control">
                                <option value="">choose</option>
                                <option v-for="fuel_type in fuel_types" :key="fuel_type.name" :value="fuel_type.name">{{fuel_type.name}}</option>
                            </Field>
                            <div class="invalid-feedback block" v-if="errors.fuel_type_id">{{errors.fuel_type_id}}</div>
                        </div>
                    </div>
                </div>
                <div class="col-span-2 md:col-span-1">
                    <div class="">
                        <label class=" font-bold">* Millage km</label>
                        <div>
                            <Field type="text" name="millage_km" class="form-control"/>
                            <div class="invalid-feedback block" v-if="errors.millage_km">{{errors.millage_km}}</div>
                        </div>
                    </div>
                </div>
                <div class="col-span-2 md:col-span-1">
                    <div class="">
                        <label class="font-bold">* Engine size sm<sup>3</sup></label>
                        <div>
                            <Field name="engine_size_cc" as="select" class="form-control">
                                <option value="">choose</option>
                                <option v-for="n in engine_sizes_in_cc" :key="n + 'cc'" :value="n">{{n}}</option>
                            </Field>
                            <div class="invalid-feedback block" v-if="errors.engine_size_cc">{{errors.engine_size_cc}}</div>
                        </div>
                    </div>
                </div>
                <div class="col-span-2 md:col-span-1">
                    <div class="">
                        <label class="font-bold">Engine hp.</label>
                        <div>
                            <Field type="text" name="engine_hp" class="form-control"/>
                            <div class="invalid-feedback block" v-if="errors.engine_hp">{{errors.engine_hp}}</div>
                        </div>
                    </div>
                </div>
                <div class="col-span-2 md:col-span-1">
                    <div class="">
                        <label class=" font-bold">* Gearbox</label>
                        <div>
                            <Field name="gearbox" as="select" class="form-control">
                                <option value="">choose</option>
                                <option v-for="gearbox in gearboxes" :key="gearbox" :value="gearbox">{{gearbox}}</option>
                            </Field>
                            <div class="invalid-feedback block" v-if="errors.gearbox">{{errors.gearbox}}</div>
                        </div>
                    </div>
                </div>
                <div class="col-span-2 md:col-span-1">
                    <div class="">
                        <label class=" font-bold">* Transmission Type</label>
                        <div>
                            <Field name="transmission" as="select" class="form-control">
                                <option value="">choose</option>
                                <option v-for="transmission in transmissions" :key="transmission.name" :value="transmission.name">{{transmission.name}}</option>
                            </Field>
                            <div class="invalid-feedback block" v-if="errors.transmission">{{errors.transmission}}</div>
                        </div>
                    </div>
                </div>
                <div class="col-span-2 md:col-span-1">
                    <div class="">
                        <label class=" font-bold">Body Color</label>
                        <div>
                            <select name="" class="form-control">
                                <option value="">choose</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-span-2 md:col-span-1">
                    <div class="">
                        <label class=" font-bold">Price ($)</label>
                        <div>
                            <input type="text" class="form-control">
                        </div>
                    </div>
                </div>
                <div class="col-span-2 md:col-span-1">
                    <div class="inline-block">
                        <div class="pretty p-default p-curve">
                            <input type="checkbox" />
                            <div class="state p-primary">
                                <label>Barter</label>
                            </div>
                        </div>
                    </div>
                    <div class="inline-block ml-4">
                        <div class="pretty p-default p-curve">
                            <input type="checkbox" />
                            <div class="state p-primary">
                                <label>in Credit</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-2">
                    <label class="font-bold">Equipment</label>
                    <div class="grid grid-cols-4 gap-4 mt-2">
                        <div class="col-span-2 lg:col-span-1">
                            <div class="pretty p-default p-curve">
                                <input type="checkbox" />
                                <div class="state p-primary">
                                    <label>Primary</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-2">
                    <label class="font-bold">Detailed Information</label>
                    <textarea name="" class="form-control h-auto" rows="7"></textarea>
                </div>
                <div class="col-span-2 mt-8">
                    <label class="text-xl font-bold">Images</label>
                    <div class="mt-3">
                        <div class="grid grid-cols-6 gap-4">
                            <div class="col-span-3  sm:col-span-2 xl:col-span-1">
                                <div class="cursor-move">
                                    <div class="relative w-full pb-3/4 border border-gray-400">
                                        <div class="absolute inset-0">
                                            <img src="assets/images/cars/lance-asper-N9Pf2J656aQ-unsplash.jpg" class="w-full h-full object-cover object-center">
                                        </div>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <div class="flex-grow">
                                            <a href="javascript:;" class="inline-block py-1 px-1 text-sm hover:bg-gray-200"><i class="fas fa-undo"></i></a>
                                            <a href="javascript:;" class="inline-block py-1 px-1 text-sm hover:bg-gray-200"><i class="fas fa-redo"></i></a>
                                        </div>
                                        <div>
                                            <a href="javascript:;" class="inline-block py-1 px-1 text-sm hover:bg-gray-200"><i class="fas fa-trash-alt"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-span-3 sm:col-span-2 xl:col-span-1">
                                <label class="cursor-pointer relative">
                                    <div class="relative w-full pb-3/4 border border-gray-400 hover:border-blue-800">
                                        <div class="absolute inset-0">
                                            <div class="flex h-full items-center justify-center bg-blue-50">
                                                <i class="fas fa-plus-circle text-4xl text-blue-600"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <input type="file" name="" multiple class="absolute top-0 left-0 h-0 w-0 opacity-0">
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-right mt-8">
                <button class="mbtn mbtn-primary ">Submit</button>
            </div>
        </Form>
    </div>
</template>

<script>
import { Field, Form } from 'vee-validate';
import * as yup from 'yup';

export default {
    components: {
        Field,
        Form
    },
    props: {

    },
    data(){
        const simpleSchema = yup.object().shape({
            make_id: yup.number().required(),
            model_id: yup.number().required(),
            body_type_id: yup.number().required(),
            email: yup.string().required().email()
        })

        return{
            simpleSchema,
            makes: [],
            models: [],
            body_types: [],
            fuel_types: [],
            gearboxes: [],
            transmission_types: [],
            body_colors: [],
            equipments: [],
        }
    },
    computed: {
        years(){
            return [
                2021, 2020, 
                2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 
                2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000, 
                1999, 1998, 1997, 1996, 1995, 1994, 1993, 1992, 1991, 1990, 
                1989, 1988, 1987, 1986, 1985, 1984, 1983, 1982, 1981, 1980, 
                1979, 1978, 1977, 1976, 1975, 1974, 1973, 1972, 1971, 1970,
                1969, 1968, 1967, 1966, 1965, 1964, 1963, 1962, 1961, 1960,
                1959, 1958, 1957, 1956, 1955, 1954, 1953, 1952, 1951, 1950,
                1949, 1948, 1947, 1946, 1945, 1944, 1943, 1942, 1941, 1940,
                1939, 1938, 1937, 1936, 1935, 1934, 1933, 1932, 1931, 1930,
            ]
        },
        engine_sizes_in_cc(){
            return [
                10, 25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350, 375, 400, 425, 450, 475, 
                500, 525, 550, 575, 600, 625, 650, 675, 700, 725, 750, 775, 800, 825, 850, 875, 900, 925, 950, 975,
                1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350, 1400, 1450, 1500, 1600, 1700, 1800, 1900,
                2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900,
                3000, 3100, 3200, 3300, 3400, 3500, 3600, 3700, 3800, 3900,
                4000, 4100, 4200, 4300, 4400, 4500, 4600, 4700, 4800, 4900,
                5000, 5100, 5200, 5300, 5400, 5500, 5600, 5700, 5800, 5900,
                6000, 6100, 6200, 6300, 6400, 6500, 6600, 6700, 6800, 6900,
                7000, 7500, 8000, 8500, 9000, 9500,
                10000, 11000, 12000, 13000, 14000, 15000, 16000
            ]
        }
    },
    setup(){

    },
    mounted(){
        
    },
    methods: {
        onSubmit(values){
            console.log(values);
        },

        handleMakeChange(value){
            console.log(value);
        }
    }
}
</script>

<style>

</style>