<template>
    <Form @submit="handleSubmit" :validation-schema="schema" v-slot="{errors}" action="" method="POST">
        <slot name="csrf"></slot>
        <div class="mt-4">
            <label class="font-bold">Email</label>
            <Field type="text" name="email" class="form-control"/>
            <span class="invalid-feedback block" v-if="errors.email">{{errors.email}}</span>
        </div>
        <div class="mt-4">
            <label class="font-bold">Password</label>
            <Field type="password" name="password" class="form-control"/>
            <span class="invalid-feedback block" v-if="errors.password">{{errors.password}}</span>
        </div>
        <div class="mt-4">
            <div class="inline-block">
                <label class="checkbox-container">
                    <div class="checkbox">
                        <input type="checkbox">
                        <svg viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z" /></svg>
                    </div>
                    <div class="select-none">Label Text</div>
                </label>
            </div>
        </div>
        <div class="flex items-center justify-between flex-wrap flex-col-reverse sm:flex-row mt-4">
            <div class="flex-none w-full sm:w-auto md:flex-grow mt-2 sm:mt-0">
                <a href="/forgot-password.html" class="text-blue-600">Forgot Your Password?</a>
            </div>
            <div class="flex-none w-full sm:w-auto md:flex-grow-0">
                <button class="mbtn mbtn-primary block md:inline-block w-full md:w-auto" :disabled="on_submitting">
                    <i class="fas fa-spinner fa-spin" v-if="on_submitting"></i> Login
                </button>
            </div>
        </div>
        <div class="border-t border-gray-200 mt-3"></div>
        <div class="mt-3 text-center">
            <a href="/register.html" class="text-blue-600">Don't have an account?</a>
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