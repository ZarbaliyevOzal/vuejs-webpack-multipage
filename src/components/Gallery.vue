<template>
    <div>
        <!-- carousel start -->
        <div ref="carouselWrapper" :style="carouselWrapperStyle" @mouseenter="handleViewportMouseEnter" @mouseleave="handleViewportMouseLeave">
            <div class="relative w-full pb-3/4" 
                :style="mode == 'fixed' ? {width: '100%', height: '100%', paddingBottom: 0} : ''"
            >
                <div ref="viewport" class="absolute top-0 left-0 w-full h-full">
                    <div class="relative w-full h-full overflow-hidden">
                        <div class="relative w-full h-full">
                            <div class="flex w-full h-full items-center" ref="carouselSlide" @transitionend="handleTransitionEndCarouselSlide">
                                <a href="javascript:;" class="block flex-none w-full h-full" ref="carouselSlideItemLastClone"
                                    @click="mode = 'fixed'"
                                >
                                    <div class="flex w-full h-full justify-center items-center">
                                        <img class="w-full h-full object-cover object-center" :src="images[images.length - 1].original"
                                            :style="mode == 'fixed' ? {width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '100%'} : ''"
                                        />
                                    </div>
                                </a>
                                <a href="javascript:;" class="block flex-none w-full h-full" v-for="(image, i) in images" :key="'original-' + image.original"
                                    @click="mode = 'fixed'"
                                >
                                    <div class="flex w-full h-full justify-center items-center">
                                        <img class="w-full h-full object-cover object-center" :src="image.original"
                                            :style="mode == 'fixed' ? {width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '100%'} : ''"
                                        />
                                    </div>
                                </a>
                                <a href="javascript:;" class="block flex-none w-full h-full" ref="carouselSlideItemFirstClone"
                                    @click="mode = 'fixed'"
                                >
                                    <div class="flex w-full h-full justify-center items-center">
                                        <img class="w-full h-full object-cover object-center" :src="images[0].original"
                                            :style="mode == 'fixed' ? {width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '100%'} : ''"
                                        />
                                    </div>
                                </a>
                            </div>
                            <div class="flex absolute h-full top-0 left-0 items-center">
                                <a href="javascript:;" class="block top-1/2 left-0 px-1 py-3 bg-black bg-opacity-30 hover:bg-opacity-60"
                                    @click="prevSlide"
                                >
                                    <svg class="w-6 h-6 block text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                                    </svg>
                                </a>  
                            </div>
                            <div class="flex absolute h-full top-0 right-0 items-center">
                                <a href="javascript:;" class="block top-1/2 left-0 px-1 py-3 bg-black bg-opacity-30 hover:bg-opacity-60"
                                    @click="nextSlide"
                                >
                                    <svg class="w-6 h-6 block text-white transform rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                                    </svg>
                                </a>  
                            </div>
                            <span class="absolute right-0 block px-1 py-1 text-white text-xs bg-black bg-opacity-30 transition transform duration-300"
                                style="bottom: 0" ref="carouselIndicator"
                            >
                                {{counter > images.length || counter < 1 ? 1 : counter}}/{{images.length}}
                            </span>
                            <div class="hidden absolute w-full top-0 right-0 p-2 text-right bg-black bg-opacity-30" :style="{'display': mode == 'fixed' ? 'block' : 'none'}">
                                <a href="javascript:;" class="text-white" @click="mode = 'static'">
                                    <svg class="inline-block w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <!-- thumbnail navigation wrapper start -->
                        <div ref="thumbnailNavigationWrapper" class="absolute top-full w-full bg-black bg-opacity-40 transition transform duration-300" style="padding: 5px 0"
                            v-if="showThumbnails && mode == 'static'"
                        >
                            <div class="flex w-full" ref="thumbnailNavigationSlide">
                                <a href="javascript:;" class="flex-none" 
                                    style="width: 100px; height: 75px; margin-left: 2px; margin-right: 2px"
                                    v-for="(image,i) in images" :key="'thumbnail-' + image.thumbnail"
                                    @click="goToSlide(i)"
                                >
                                    <img class="w-full h-full object-cover object-center" :src="image.thumbnail" 
                                        :class="{'border-2 border-blue-600': counter == i + 1 || (counter > images.length && i == 0)}"
                                    />
                                </a>
                            </div>
                        </div>
                        <!-- thumbnail navigation wrapper end -->
                    </div>
                </div>
            </div>
        </div>
        <!-- carousel end -->
    </div>
</template>

<script>
export default {
    components: {

    },
    props: {
        'show-thumbnails': {type: Boolean, default: false},
        'images': {type: Array, required: true}
    },
    data(){
        return {
            mode: 'static',
            counter: 1,
            thumb_nav_item_width: '',
            thumb_nav_item_height: '',
        }
    },
    computed: {
        carouselWrapperStyle(){
            if(this.mode == 'fixed'){
                return {position: 'fixed', left: 0, top:0, bottom: 0, right: 0, backgroundColor: '#000', zIndex: 9999}; 
            }
            return '';
        },
    },
    mounted(){
        this.initCarousel();
    },
    beforeUnmount(){
        
    },
    methods: {
        initCarousel(){
            this.$refs.carouselSlide.style.transform = `translateX(${(-100 * this.counter)}%)`;
        },

        prevSlide(){
            if(this.counter <= 0) return;
            this.$refs.carouselSlide.style.transition = 'transform 0.4s ease-in-out';
            // let size = this.$refs.viewport.clientWidth;
            this.counter--;
            // slide to previus slide
            this.$refs.carouselSlide.style.transform = `translateX(${(-100 * this.counter)}%)`;
            
            if(this.showThumbnails && this.mode == 'static'){
                // slide carousel thumbnail
                this.slideThumbnailNavigationByCounter();
            }
        },

        nextSlide(){
            if(this.counter > this.images.length) return;
            this.$refs.carouselSlide.style.transition = "transform 0.4s ease-in-out";
            // let size = this.$refs.viewport.clientWidth;
            this.counter++;
            this.$refs.carouselSlide.style.transform = `translateX(${(-100 * this.counter)}%)`;
            
            if(this.showThumbnails && this.mode == 'static'){
                // slide carousel thumbnail
                this.slideThumbnailNavigationByCounter();
            }
        },

        handleTransitionEndCarouselSlide(){
            // let size = this.$refs.viewport.clientWidth;
            if(this.counter == this.images.length + 1){
                this.$refs.carouselSlide.style.transition = "none";
                this.counter = 1;
                this.$refs.carouselSlide.style.transform = `translateX(${(-100 * this.counter)}%)`;
            }
            if(this.counter == 0){
                this.$refs.carouselSlide.style.transition = "none";
                this.counter = this.images.length;
                this.$refs.carouselSlide.style.transform = `translateX(${(-100 * this.counter)}%)`;
            }
        },

        handleViewportMouseEnter(){
            let carousel_width = this.$refs.carouselWrapper.offsetWidth;

            if(this.showThumbnails && this.mode == 'static' && carousel_width > 400){
                // let bottom = this.$refs.thumbnailNavigationWrapper.clientHeight;
                this.$refs.carouselIndicator.style.transform = 'translateY(-85px)';
                this.$refs.thumbnailNavigationWrapper.style.transform = 'translateY(-85px)';
            }  
        },

        handleViewportMouseLeave(){
            let carousel_width = this.$refs.carouselWrapper.offsetWidth;

            if(this.showThumbnails && this.mode == 'static' && carousel_width > 400){
                this.$refs.carouselIndicator.style.transform = 'translateY(0)';
                this.$refs.thumbnailNavigationWrapper.style.transform = 'translateY(0)';
            } 
        },

        slideThumbnailNavigationByCounter(){
            let wrapper = this.$refs.thumbnailNavigationWrapper;
            // nece shekil tam gorunur wrapperde
            let can_be_shown_count = Math.ceil(wrapper.offsetWidth / 100);
            // wrapperden overflow olan hisse piksel ile
            let overflow_x_in_pixel = (can_be_shown_count * 104) - wrapper.offsetWidth;
            let visible_slide = this.counter < 1 ? this.images.length : this.counter > this.images.length ? 1 : this.counter;
            let thumbnail_slide_translate_x = 0;

            if(this.images.length > can_be_shown_count){
                if(visible_slide > 2){
                    this.$refs.thumbnailNavigationSlide.style.transition = 'transform 0.4s ease-in-out';
                    thumbnail_slide_translate_x = (visible_slide + (can_be_shown_count - 2)) >= this.images.length 
                        ? (-104 * (this.images.length - can_be_shown_count) - overflow_x_in_pixel) : (-104 * (visible_slide - 2)); 
                }else{
                    this.$refs.thumbnailNavigationSlide.style.transition = 'none';
                }
                this.$refs.thumbnailNavigationSlide.style.transform = 'translateX(' + thumbnail_slide_translate_x + 'px)';
            }else if(this.images.length == can_be_shown_count){
                if(overflow_x_in_pixel && visible_slide > 2){
                    this.$refs.thumbnailNavigationSlide.style.transition = 'transform 0.4s ease-in-out';
                    thumbnail_slide_translate_x = -overflow_x_in_pixel; 
                }else{
                    this.$refs.thumbnailNavigationSlide.style.transition = 'none';
                }
                this.$refs.thumbnailNavigationSlide.style.transform = 'translateX(' + thumbnail_slide_translate_x + 'px)';
            }
        },

        // translateXThumbnailSlide(direction){
        //     let size = 100 / this.images.length;
        //     if(direction == 'prev'){
        //         this.thumbnail_slide_translate_x = this.thumbnail_slide_translate_x >= 0 ? 0 : this.thumbnail_slide_translate_x + size;
        //         this.$refs.carouselThumbnailSlide.style.transform = 'translateX(' + this.thumbnail_slide_translate_x + '%)';
        //     }

        //     if(direction == 'next'){
        //         this.thumbnail_slide_translate_x = (-(this.images.length - 6) * size) == this.thumbnail_slide_translate_x 
        //             ? this.thumbnail_slide_translate_x
        //             : this.thumbnail_slide_translate_x - size;
        //         this.$refs.carouselThumbnailSlide.style.transform = 'translateX(' + this.thumbnail_slide_translate_x + '%)';
        //     }
        // },

        goToSlide(i){
            this.counter = i + 1;
            this.$refs.carouselSlide.style.transition = "transform 0.4s ease-in-out";
            // slide carousel
            this.$refs.carouselSlide.style.transform = 'translateX('+(-100 * this.counter)+'%)';
            if(this.showThumbnails && this.mode == 'static'){
                this.slideThumbnailNavigationByCounter();
            }
        }
    }
}
</script>

<style>

</style>