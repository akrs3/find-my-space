<template>
 <div> 
      <ul class="slides">
		<input type="radio" name="radio-btn" id="img-1" checked />
		<li class="slide-container">
			<div class="slide">
				<img src="http://farm9.staticflickr.com/8072/8346734966_f9cd7d0941_z.jpg" />
			</div>
			<div class="nav">
				<label for="img-6" class="prev"></label>
				<label for="img-2" class="next"></label>
			</div>
		</li>

		<input type="radio" name="radio-btn" id="img-2" />
		<li class="slide-container">
			<div class="slide">
			  <img src="http://farm9.staticflickr.com/8504/8365873811_d32571df3d_z.jpg" />
			</div>
			<div class="nav">
				<label for="img-1" class="prev"></label>
				<label for="img-3" class="next"></label>
			</div>
		</li>

		<input type="radio" name="radio-btn" id="img-3" />
		<li class="slide-container">
			<div class="slide">
			  <img src="http://farm9.staticflickr.com/8068/8250438572_d1a5917072_z.jpg" />
			</div>
			<div class="nav">
				<label for="img-2" class="prev"></label>
				<label for="img-4" class="next"></label>
			</div>
		</li>

		<input type="radio" name="radio-btn" id="img-4" />
		<li class="slide-container">
			<div class="slide">
			  <img src="http://farm9.staticflickr.com/8061/8237246833_54d8fa37f0_z.jpg" />
			</div>
			<div class="nav">
				<label for="img-3" class="prev"></label>
				<label for="img-5" class="next"></label>
			</div>
		</li>

		<input type="radio" name="radio-btn" id="img-5" />
		<li class="slide-container">
			<div class="slide">
			  <img src="http://farm9.staticflickr.com/8055/8098750623_66292a35c0_z.jpg" />
			</div>
			<div class="nav">
				<label for="img-4" class="prev"></label>
				<label for="img-6" class="next"></label>
			</div>
		</li>

		<input type="radio" name="radio-btn" id="img-6" />
		<li class="slide-container">
			<div class="slide">
			  <img src="http://farm9.staticflickr.com/8195/8098750703_797e102da2_z.jpg" />
			</div>
			<div class="nav">
				<label for="img-5" class="prev"></label>
				<label for="img-1" class="next"></label>
			</div>
		</li>

		<li class="nav-dots">
		  <label for="img-1" class="nav-dot" id="img-dot-1"></label>
		  <label for="img-2" class="nav-dot" id="img-dot-2"></label>
		  <label for="img-3" class="nav-dot" id="img-dot-3"></label>
		  <label for="img-4" class="nav-dot" id="img-dot-4"></label>
		  <label for="img-5" class="nav-dot" id="img-dot-5"></label>
		  <label for="img-6" class="nav-dot" id="img-dot-6"></label>
		</li>
	</ul>
  </div>
</template>

<script>

export default {
   components: {
  },
	data(){
		return {
		  fotos: [
			//[otimizacao] imagens64 colocadas aqui irao pesar o carregamento do site (aumentam o build.js)
		  ]
		}
	}
}
</script>

<style scoped>
.slides {
    padding: 0;
    width: 100%;
    height: 420px;
    display: block;
    position: relative;
}

.slides * {
    user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -webkit-touch-callout: none;
}

.slides input { display: none; }

.slide-container { 
	display: block;  
	overflow: hidden; //crop
	
    width: 100%;
}

.slide {
    top: 0;
    opacity: 0;
	
    width: 97%;
    height: 420px;
    display: block;
    position: absolute;

    transform: scale(0);

    //transition: all .3s;
}

.slide img {
    width: 100%;
    height: 100%;
}

.nav label {
    width: 80px;
    height: 100%;
    display: none;
    position: absolute;

	  opacity: 0;
    z-index: 9;
    cursor: pointer;

    //transition: opacity .2s;

    color: #fff;
    font-size: 156pt;
    text-align: center;
    line-height: 380px;
    background-color: rgba(108, 72, 114, .3);
	background-opacity:0.3;
    text-shadow: 0px 0px 15px rgb(119, 119, 119);
}

.slide + .nav label { opacity: 0.4; }

.nav label:hover { opacity: 1; }

.nav .next { 
	right: 0; 
	background: url('../../assets/button_image_next.png') no-repeat center center; 
	opacity: 0.3;
}

.nav .prev { 
	left: 0; 
	background: url('../../assets/button_image_previous.png') no-repeat center center; 
	opacity: 0.3;
}

input:checked + .slide-container  .slide {
    opacity: 1;

    transform: scale(1);

    transition: opacity 0.2s;
}

input:checked + .slide-container .nav label { display: block; }

.nav-dots {
	width: 100%;
	bottom: 9px;
	height: 11px;
	display: block;
	position: absolute;
	text-align: center;
}

.nav-dots .nav-dot {
	top: -5px;
	width: 11px;
	height: 11px;
	margin: 0 4px;
	position: relative;
	border-radius: 100%;
	display: inline-block;
	background-color: rgba(108, 72, 114, .6);
}

.nav-dots .nav-dot:hover {
	cursor: pointer;
	background-color: rgba(108, 72, 114, .8);
}

input#img-1:checked ~ .nav-dots label#img-dot-1,
input#img-2:checked ~ .nav-dots label#img-dot-2,
input#img-3:checked ~ .nav-dots label#img-dot-3,
input#img-4:checked ~ .nav-dots label#img-dot-4,
input#img-5:checked ~ .nav-dots label#img-dot-5,
input#img-6:checked ~ .nav-dots label#img-dot-6 {
	background: rgba(0, 0, 0, 0.8);
}
</style>