<template>
    <Form @submit="handleSubmit" :validation-schema="schema" v-slot="{errors}" action="" method="POST">
        <slot name="csrf"></slot>
        <div class="mt-4">
            <label class="font-semibold">Name</label>
            <Field type="text" name="name" class="form-control"/>
            <span class="invalid-feedback block" v-if="errors.name">{{errors.name}}</span>
        </div>
        <div class="mt-4">
            <label class="font-semibold">Last Name</label>
            <Field type="text" name="last_name" class="form-control"/>
            <span class="invalid-feedback block" v-if="errors.last_name">{{errors.last_name}}</span>
        </div>
        <div class="mt-4">
            <label class="font-semibold">Email</label>
            <Field type="text" name="email" class="form-control"/>
            <span class="invalid-feedback block" v-if="errors.email">{{errors.email}}</span>
        </div>
        <div class="mt-4">
            <label class="font-semibold">Password</label>
            <Field type="password" name="password" class="form-control"/>
            <span class="invalid-feedback block" v-if="errors.password">{{errors.password}}</span>
        </div>
        <div class="mt-4">
            <label class="font-semibold">Confirm Password</label>
            <Field type="password" name="password_confirmation" class="form-control"/>
            <span class="invalid-feedback block" v-if="errors.password_confirmation">{{errors.password_confirmation}}</span>
        </div>
        <div class="mt-4 text-right">
            <button class="mbtn mbtn-primary block md:inline-block w-full md:w-auto" :disabled="on_submitting">
                <i class="fas fa-spinner fa-spin" v-if="on_submitting"></i> Register
            </button>
        </div>
        <div class="border-t border-gray-200 mt-3"></div>
        <div class="mt-3 text-center">
            <a href="/login.html" class="text-blue-600">Already have an account?</a>
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