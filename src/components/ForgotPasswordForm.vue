<template>
    <Form @submit="handleSubmit" :validation-schema="schema" v-slot="{errors}" action="" method="POST">
        <slot name="csrf"></slot>
        <div class="mt-4">
            <label class="font-bold">Email</label>
            <Field type="text" name="email" class="form-control"/>
            <span class="invalid-feedback block" v-if="errors.email">{{errors.email}}</span>
        </div>
        <div class="mt-4 text-right">
            <button class="mbtn mbtn-primary block md:inline-block w-full md:w-auto" :disabled="on_submitting">
                <i class="fas fa-spinner fa-spin" v-if="on_submitting"></i> Send password reset email
            </button>
        </div>
    </Form>
</template>

<script>
import { Field, Form } from 'vee-validate';
import * as yup from 'yup';

export default {
    components: {
        Field, Form
    },
    data(){
        const schema = yup.object().shape({
            email: yup.string().required().email(),
            password: yup.string().required().min(8)
        });

        return {
            schema,
            on_submitting: false
        }
    },
    setup(){

    },
    mounted(){

    },
    methods: {
        handleSubmit(values){
            console.log(values);
        }
    }
}
</script>

<style>

</style>