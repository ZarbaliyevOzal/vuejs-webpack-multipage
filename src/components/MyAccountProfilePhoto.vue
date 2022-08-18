<template>
    <!-- placeholder -->
    <div class="relative block m-0 p-0 cursor-wait w-full pb-3/4 select-none" v-if="!ready">
        <div class="absolute inset-0 py-5 border-2 border-gray-300 rounded">
            <div class="flex flex-wrap items-center justify-center h-full">
                <svg class="inline-block w-14 h-14 fill-current text-gray-500" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g id="XMLID_1184_"><g id="XMLID_176_"><path id="XMLID_178_" d="m318.006 211.841c-16.814 0-33.145 3.261-48.537 9.69-5.096 2.129-7.501 7.986-5.373 13.082 2.129 5.097 7.986 7.499 13.082 5.373 12.938-5.405 26.674-8.145 40.828-8.145 58.449 0 106 47.552 106 106s-47.551 106-106 106-106-47.552-106-106c0-14.132 2.732-27.85 8.121-40.77 2.126-5.098-.283-10.953-5.38-13.079-5.094-2.123-10.953.283-13.079 5.38-6.411 15.373-9.662 31.68-9.662 48.469 0 69.477 56.523 126 126 126s126-56.523 126-126-56.523-126-126-126z"/><path id="XMLID_711_" d="m318.006 419.841c45.215 0 82-36.785 82-82s-36.785-82-82-82-82 36.785-82 82 36.786 82 82 82zm0-144c34.187 0 62 27.814 62 62s-27.813 62-62 62-62-27.813-62-62 27.813-62 62-62z"/><path id="XMLID_714_" d="m461.284 163.841h-30.42l-34.915-59.087c-1.799-3.045-5.073-4.913-8.609-4.913h-138.667c-3.537 0-6.81 1.868-8.609 4.913l-34.915 59.087h-57.149v-12c0-19.851-16.149-36-36-36s-36 16.149-36 36v12h-25.284c-27.965 0-50.716 22.751-50.716 50.717v246.566c0 27.966 22.751 50.717 50.716 50.717h410.567c27.965 0 50.716-22.751 50.716-50.717v-246.566c.001-27.966-22.751-50.717-50.715-50.717zm-206.905-44h127.254l26 44h-179.254zm-158.379 32c0-8.822 7.178-16 16-16s16 7.178 16 16v12h-32zm396 309.283c0 16.938-13.779 30.717-30.716 30.717h-410.568c-16.937 0-30.716-13.78-30.716-30.717v-246.566c0-16.938 13.779-30.717 30.716-30.717h410.567c16.937 0 30.716 13.779 30.716 30.717v246.566z"/><path id="XMLID_717_" d="m318.006 318.341c10.753 0 19.5 8.748 19.5 19.5 0 5.523 4.477 10 10 10s10-4.477 10-10c0-21.78-17.72-39.5-39.5-39.5-5.523 0-10 4.478-10 10s4.477 10 10 10z"/><path id="XMLID_718_" d="m318.006 73.532c5.523 0 10-4.478 10-10v-53.373c0-5.522-4.477-10-10-10s-10 4.477-10 10v53.373c0 5.523 4.477 10 10 10z"/><path id="XMLID_719_" d="m365.591 73.532c2.559 0 5.119-.977 7.071-2.929l36.691-36.691c3.905-3.905 3.905-10.237-.001-14.143-3.905-3.904-10.237-3.904-14.142 0l-36.69 36.692c-3.905 3.905-3.905 10.237 0 14.143 1.953 1.952 4.512 2.928 7.071 2.928z"/><path id="XMLID_720_" d="m263.35 70.604c1.953 1.952 4.512 2.929 7.071 2.929s5.119-.977 7.071-2.929c3.905-3.905 3.906-10.237.001-14.143l-36.691-36.691c-3.905-3.903-10.237-3.904-14.142 0-3.905 3.905-3.906 10.237-.001 14.143z"/><path id="XMLID_730_" d="m138 245.841h-52c-5.523 0-10 4.478-10 10 0 5.523 4.477 10 10 10h52c5.523 0 10-4.477 10-10s-4.477-10-10-10z"/><path id="XMLID_731_" d="m235.96 265.84c2.63 0 5.21-1.07 7.07-2.93s2.93-4.431 2.93-7.07c0-2.63-1.07-5.21-2.93-7.07-1.86-1.859-4.44-2.93-7.07-2.93s-5.21 1.07-7.07 2.93c-1.87 1.86-2.93 4.441-2.93 7.07 0 2.63 1.06 5.21 2.93 7.07 1.86 1.86 4.43 2.93 7.07 2.93z"/></g></g></svg>
                <span class="text-gray-600 font-semibold">Choose profile photo</span>
            </div>
        </div>
        <div class="absolute w-full h-full top-0 left-0 bg-black bg-opacity-60">
            <div class="flex w-full h-full items-center justify-center">
                <span class="text-2xl text-white">
                    <i class="fas fa-spinner fa-spin"></i>
                </span>
            </div>
        </div>
    </div>

    <!--  -->
    <div ref="profile-photo-wrapper">
        <label class="relative block m-0 p-0 cursor-pointer w-full pb-3/4"
            v-if="ready && !img"
        >
            <div class="absolute inset-0 py-5 border-2 border-gray-300 rounded">
                <div class="flex flex-wrap items-center justify-center h-full">
                    <div class="text-center">
                        <svg class="inline-block w-14 h-14 fill-current text-gray-500" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g id="XMLID_1184_"><g id="XMLID_176_"><path id="XMLID_178_" d="m318.006 211.841c-16.814 0-33.145 3.261-48.537 9.69-5.096 2.129-7.501 7.986-5.373 13.082 2.129 5.097 7.986 7.499 13.082 5.373 12.938-5.405 26.674-8.145 40.828-8.145 58.449 0 106 47.552 106 106s-47.551 106-106 106-106-47.552-106-106c0-14.132 2.732-27.85 8.121-40.77 2.126-5.098-.283-10.953-5.38-13.079-5.094-2.123-10.953.283-13.079 5.38-6.411 15.373-9.662 31.68-9.662 48.469 0 69.477 56.523 126 126 126s126-56.523 126-126-56.523-126-126-126z"/><path id="XMLID_711_" d="m318.006 419.841c45.215 0 82-36.785 82-82s-36.785-82-82-82-82 36.785-82 82 36.786 82 82 82zm0-144c34.187 0 62 27.814 62 62s-27.813 62-62 62-62-27.813-62-62 27.813-62 62-62z"/><path id="XMLID_714_" d="m461.284 163.841h-30.42l-34.915-59.087c-1.799-3.045-5.073-4.913-8.609-4.913h-138.667c-3.537 0-6.81 1.868-8.609 4.913l-34.915 59.087h-57.149v-12c0-19.851-16.149-36-36-36s-36 16.149-36 36v12h-25.284c-27.965 0-50.716 22.751-50.716 50.717v246.566c0 27.966 22.751 50.717 50.716 50.717h410.567c27.965 0 50.716-22.751 50.716-50.717v-246.566c.001-27.966-22.751-50.717-50.715-50.717zm-206.905-44h127.254l26 44h-179.254zm-158.379 32c0-8.822 7.178-16 16-16s16 7.178 16 16v12h-32zm396 309.283c0 16.938-13.779 30.717-30.716 30.717h-410.568c-16.937 0-30.716-13.78-30.716-30.717v-246.566c0-16.938 13.779-30.717 30.716-30.717h410.567c16.937 0 30.716 13.779 30.716 30.717v246.566z"/><path id="XMLID_717_" d="m318.006 318.341c10.753 0 19.5 8.748 19.5 19.5 0 5.523 4.477 10 10 10s10-4.477 10-10c0-21.78-17.72-39.5-39.5-39.5-5.523 0-10 4.478-10 10s4.477 10 10 10z"/><path id="XMLID_718_" d="m318.006 73.532c5.523 0 10-4.478 10-10v-53.373c0-5.522-4.477-10-10-10s-10 4.477-10 10v53.373c0 5.523 4.477 10 10 10z"/><path id="XMLID_719_" d="m365.591 73.532c2.559 0 5.119-.977 7.071-2.929l36.691-36.691c3.905-3.905 3.905-10.237-.001-14.143-3.905-3.904-10.237-3.904-14.142 0l-36.69 36.692c-3.905 3.905-3.905 10.237 0 14.143 1.953 1.952 4.512 2.928 7.071 2.928z"/><path id="XMLID_720_" d="m263.35 70.604c1.953 1.952 4.512 2.929 7.071 2.929s5.119-.977 7.071-2.929c3.905-3.905 3.906-10.237.001-14.143l-36.691-36.691c-3.905-3.903-10.237-3.904-14.142 0-3.905 3.905-3.906 10.237-.001 14.143z"/><path id="XMLID_730_" d="m138 245.841h-52c-5.523 0-10 4.478-10 10 0 5.523 4.477 10 10 10h52c5.523 0 10-4.477 10-10s-4.477-10-10-10z"/><path id="XMLID_731_" d="m235.96 265.84c2.63 0 5.21-1.07 7.07-2.93s2.93-4.431 2.93-7.07c0-2.63-1.07-5.21-2.93-7.07-1.86-1.859-4.44-2.93-7.07-2.93s-5.21 1.07-7.07 2.93c-1.87 1.86-2.93 4.441-2.93 7.07 0 2.63 1.06 5.21 2.93 7.07 1.86 1.86 4.43 2.93 7.07 2.93z"/></g></g></svg>
                        <span class="block mt-2 text-gray-600 text-center font-semibold">Choose profile photo</span>
                    </div>
                </div>
            </div>
            <input type="file" class="absolute w-0 h-0 opacity-0" @change="handleChange($event)">
        </label>
        <div class="relative" v-show="img">
            <a href="javascript:;" class="absolute block -top-3 -right-3 p-1 bg-red-700 border-2 border-white rounded-full cursor-pointer"
                @click="removeImg"
            >
                <svg class="block w-4 h-4 fill-current text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </a>
            <canvas id="profile-photo-canvas" :width="canvas_width" :height="canvas_height" class="bg-transparent border border-blue-500 cursor-move"  
                @mousedown="handleMouseDown($event)" @mouseup="mouse_down = false"
                @mousemove="handleMouseMove($event)"
            ></canvas>
        </div>
        <div class="mt-2">
            <button class="mbtn mbtn-primary mbtn-s w-full" @click="uploadImage">Save</button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            ready: false,
            canvas_width: null,
            canvas_height: null,
            mouse_down: false,
            canvas: null,
            ctx: null,
            ctx_x: 0,
            ctx_y: 0,
            old_y: 0,
            old_x: 0,
            img: null,
            ratio: 0,
        }
    },
    mounted(){
        this.canvas_width = this.$refs['profile-photo-wrapper'].clientWidth;
        this.canvas_height = Math.floor(this.canvas_width * 0.75 * 100) / 100;
        this.canvas = document.getElementById('profile-photo-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.addEventListener('touchstart', this.handleTouchStart);
        this.canvas.addEventListener('touchmove', this.handleTouchMove);

        this.ready = true;
    },
    beforeUnmount(){
        this.canvas.removeEventListener('touchstart', this.handleTouchStart);
        this.canvas.removeEventListener('touchmove', this.handleTouchMove);
    },
    methods: {
        handleChange(evt){
            this.initializeCanvas();

            if(evt.target.files.length > 0 && evt.target.files[0]){
                var img = new Image();
                // img.onload = this.drawCanvas(ctx, img);
                img.onload = () => {
                    this.img = img;
                    this.ratio = Math.floor((img.width / img.height) * 100) / 100;
                    if(this.ratio < 1){
                        let new_height = Math.round((this.canvas_width / this.ratio) * 100) / 100;
                        this.ctx.drawImage(img, 0, 0, this.canvas_width, new_height);
                    }else if(this.ratio > 1){
                        let new_width = Math.round((this.ratio * this.canvas_height) * 100) / 100;
                        this.ctx.drawImage(img, 0, 0, new_width, this.canvas_height);
                    }
                }
                img.src = URL.createObjectURL(evt.target.files[0]);
            }
        },

        drawCanvas(evt_pageX, evt_pageY){
            // clear canvas
            this.ctx.clearRect(0, 0, this.canvas_width, this.canvas_height);
            if(this.ratio < 1){
                let new_height = Math.round((this.canvas_width / this.ratio) * 100) / 100;
                // move value in y-axis
                var diff = evt_pageY - this.old_y;
                // max allowed movement value in y-axis
                var max_allowed_y_value = new_height - this.canvas_height;
                this.ctx_y = this.ctx_y + -diff > max_allowed_y_value ? max_allowed_y_value : this.ctx_y + -diff;
                this.ctx.drawImage(this.img, 0, this.ctx_y < 0 ? 0 : -this.ctx_y, this.canvas_width, new_height);
                this.old_y = evt_pageY;
            }else if(this.ratio > 1){
                let new_width = Math.round((this.ratio * this.canvas_height) * 100) / 100;
                // move value in x-axis
                var diff = evt_pageX - this.old_x;
                // max allowed movement value x-axis
                var max_allowed_x_value = new_width - this.canvas_width;
                this.ctx_x = this.ctx_x + -diff > max_allowed_x_value ? max_allowed_x_value : this.ctx_x + -diff;
                this.ctx.drawImage(this.img, this.ctx_x < 0 ? 0 : -this.ctx_x, 0, new_width, this.canvas_height);
                this.old_x = evt_pageX;
            }
        },

        handleMouseDown(evt){
            if(this.img){
                this.mouse_down = true;
                this.old_y = evt.pageY;
                this.old_x = evt.pageX;
            }
        },

        handleMouseMove(evt){
            if(this.mouse_down && this.img){
                this.drawCanvas(evt.pageX, evt.pageY);
            }
        },

        handleTouchStart(e){
            if(this.img){
                this.mouse_down = true;
                this.old_y = e.touches[0].pageY;
                this.old_x = e.touches[0].pageX;
            }
        },

        handleTouchMove(e){
            e.preventDefault();
            if(this.mouse_down && this.img){
                this.drawCanvas(e.touches[0].pageX, e.touches[0].pageY);
            }
        },

        initializeCanvas(){
            // clear canvas
            this.ctx.clearRect(0, 0, 200, 200);
            this.img = null;
            this.ratio = 0;
            this.ctx_x = 0;
            this.ctx_y = 0;
            this.old_x = 0;
            this.old_y = 0;
        },

        removeImg(){
            this.initializeCanvas();
        },

        uploadImage(){
            var canvas_data = this.canvas.toDataURL("image/png");
        }
    }
}
</script>

<style>

</style>