<template>
    <div>
        <div class="relative flex items-center justify-between h-9" ref="quickSearchFuel">
            <span class="overflow-hidden overflow-ellipsis whitespace-nowrap">
                lorem
            </span>
            <a href="javascript:;" class="relative text-blue-700 underline cursor-pointer text-sm" @click="togglePopup($event)">change</a>
        </div>

        <!-- popup -->
        <div class="absolute w-400px" ref="popupwindow"
            :style="style"
        >
            <div class="px-3 bg-white rounded shadow-lg">
                <h3 class="py-3 border-b border-gray-300 font-bold">Fuel type</h3>
                <div class="py-3">
                    <div class="grid grid-cols-2 gap-4">
                        <div v-for="n in 5" :key="n">
                            <div class="pretty p-default">
                                <input type="checkbox" />
                                <div class="state p-primary">
                                    <label>Primary</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center justify-end mt-2">
                        <a href="javascript:;" class="underline">cancel</a>
                        <a href="javascript:;" class="mbtn mbtn-primary mbtn-s ml-2 px-10 py-1">Apply</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- end popup -->
    </div>
</template>

<script>
export default {
    data(){
        return {
            is_open: false,
            style: 'display:block; visibility: hidden',
            popup_height: '',
        }
    },
    mounted(){
        this.popup_height = this.getPopUpWindowHeight();
    },
    methods: {
        togglePopup(evt){
            this.is_open = !this.is_open;
            console.log(window.scrollY);

            if(this.is_open){
                let left = this.$refs.quickSearchFuel.offsetLeft + this.$refs.quickSearchFuel.clientWidth + 15;
                let top = this.$refs.quickSearchFuel.offsetTop > this.popup_height 
                    ? this.$refs.quickSearchFuel.offsetTop - this.popup_height + 46 : 0;
                console.log(this.popup_height)
                this.style = `
                    display: block; 
                    opacity: 1; 
                    left: ${left}px;
                    top: ${top}px
                `;
            }

            // create overlay
            // var overlay = document.createElement('div');
            // overlay.className = 'absolute w-screen min-h-screen z-20 bg-white opacity-70';
            // overlay.style.cssText = 'top: ' + header_height + 'px;' + 'left:0;bottom:0;right:0';
            // document.getElementById('app').appendChild(overlay);

            // this.is_open = true;
        },

        /**
         * 
         */
        getPopUpWindowHeight(){
            this.style = 'display: block; visibility: hidden';
            var height = this.$refs.popupwindow.clientHeight;
            this.style = 'display:none'; 
            return height;
        }
    } 
}
</script>

<style>

</style>