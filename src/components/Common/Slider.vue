<style src="../../../node_modules/owlcarousel/owl-carousel/owl.theme.css" ></style>
<style src="../../../node_modules/owlcarousel/owl-carousel/owl.carousel.css" ></style>
<style src="../../assets/css/common/slider.css" scoped></style>
<style scoped>
    .owl-theme .owl-controls{
        margin-top:10px !important;
    }
</style>

<template>
    <div class="cm-slider">
    	<div class="owl-carousel" v-if="!!sliderList.length" id="{{sliderId}}">
            <div class="item" v-for="item in sliderList">
            	<img :src="POSTER_URL+item.listimg">
            </div>
    	</div>
    </div>
</template>
<script>
    import { setCarousel } from '../../vuex/actions.js'
    import { POSTER_URL } from '../../api/config.js'
	export default{
        name:'slider',
        props:['sliderList','sliderId'],
        data(){
            return{
                POSTER_URL:POSTER_URL
            }
        }
	}
</script>