<template>
    <a href="javascript:;" class="block" title="delete" @click="$refs.deleteModal.openModal()">
        <i class="inline-block w-8 h-8 bg-no-repeat bg-contain bg-center" style="background-image: url(assets/images/svg-icons/trash.svg)"></i>
    </a>

    <Modal ref="deleteModal" centered title="Confirm Ownership" size="small">
        <template #modalContent>
            <div>
                <form action="">
                    <div>For deleting the ad you have to input the pin code of the ad</div>
                    <div class="flex items-end mt-4">
                        <div class="flex-grow">
                            <label class="font-semibold">Pin code</label>
                            <div>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                        <div class="ml-4">
                            <button class="mbtn mbtn-primary mbtn-s">Submit</button>
                        </div>
                    </div>                    
                </form>
            </div>
        </template>
    </Modal>
</template>

<script>
import Modal from './Modal.vue'

export default {
    components: {
        Modal
    }
}
</script>

<style>

</style>