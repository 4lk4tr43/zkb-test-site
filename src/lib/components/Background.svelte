<div class="background">
	<span></span>
	<span></span>
	<span></span>
	<span></span>
	<span></span>
	<span></span>
	<span></span>
	<span></span>
	<span></span>
	<span></span>
	<span></span>
	<span></span>
	<span></span>
	<span></span>
	<span></span>
	<span></span>
	<span></span>
	<span></span>
	<span></span>
	<span></span>
</div>

<style>
    @keyframes move {
        100% {
            transform: translate3d(0, 0, 1px) rotate(360deg);
        }
    }

    .background {
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        background: #fafafa;
        overflow: hidden;
				z-index: -9999;
    }

    .background span {
        width: 20vmin;
        height: 20vmin;
        border-radius: 20vmin;
        backface-visibility: hidden;
        position: absolute;
        animation: move;
        animation-duration: 1;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }


    .background span:nth-child(0) {
        color: #583C87;
        top: 76%;
        left: 51%;
        animation-duration: 93s;
        animation-delay: -55s;
        transform-origin: 9vw 3vh;
        box-shadow: 40vmin 0 5.513539987090837vmin currentColor;
    }
    .background span:nth-child(1) {
        color: #583C87;
        top: 14%;
        left: 4%;
        animation-duration: 49s;
        animation-delay: -106s;
        transform-origin: -24vw -21vh;
        box-shadow: -40vmin 0 5.776509146689671vmin currentColor;
    }
    .background span:nth-child(2) {
        color: #FFACAC;
        top: 78%;
        left: 55%;
        animation-duration: 210s;
        animation-delay: -254s;
        transform-origin: -8vw 6vh;
        box-shadow: -40vmin 0 5.839148416685213vmin currentColor;
    }
    .background span:nth-child(3) {
        color: #FFACAC;
        top: 65%;
        left: 13%;
        animation-duration: 362s;
        animation-delay: -37s;
        transform-origin: -13vw 3vh;
        box-shadow: 40vmin 0 5.16394706004211vmin currentColor;
    }
    .background span:nth-child(4) {
        color: #583C87;
        top: 53%;
        left: 64%;
        animation-duration: 57s;
        animation-delay: -27s;
        transform-origin: 4vw -19vh;
        box-shadow: -40vmin 0 5.207166877693232vmin currentColor;
    }
    .background span:nth-child(5) {
        color: #E45A84;
        top: 31%;
        left: 35%;
        animation-duration: 214s;
        animation-delay: -283s;
        transform-origin: -16vw -23vh;
        box-shadow: -40vmin 0 5.512800059724762vmin currentColor;
    }
    .background span:nth-child(6) {
        color: #E45A84;
        top: 20%;
        left: 1%;
        animation-duration: 281s;
        animation-delay: -449s;
        transform-origin: -5vw 6vh;
        box-shadow: -40vmin 0 5.306775652558035vmin currentColor;
    }
    .background span:nth-child(7) {
        color: #E45A84;
        top: 77%;
        left: 28%;
        animation-duration: 203s;
        animation-delay: -489s;
        transform-origin: 25vw -2vh;
        box-shadow: 40vmin 0 5.033510389441417vmin currentColor;
    }
    .background span:nth-child(8) {
        color: #583C87;
        top: 17%;
        left: 32%;
        animation-duration: 79s;
        animation-delay: -481s;
        transform-origin: -10vw 14vh;
        box-shadow: -40vmin 0 5.7120888515874455vmin currentColor;
    }
    .background span:nth-child(9) {
        color: #E45A84;
        top: 38%;
        left: 98%;
        animation-duration: 491s;
        animation-delay: -412s;
        transform-origin: 2vw -20vh;
        box-shadow: -40vmin 0 5.897165951231294vmin currentColor;
    }
    .background span:nth-child(10) {
        color: #FFACAC;
        top: 41%;
        left: 15%;
        animation-duration: 285s;
        animation-delay: -364s;
        transform-origin: -21vw -22vh;
        box-shadow: -40vmin 0 5.441407254296914vmin currentColor;
    }
    .background span:nth-child(11) {
        color: #E45A84;
        top: 41%;
        left: 29%;
        animation-duration: 376s;
        animation-delay: -308s;
        transform-origin: 4vw -20vh;
        box-shadow: 40vmin 0 5.45662558024396vmin currentColor;
    }
    .background span:nth-child(12) {
        color: #E45A84;
        top: 19%;
        left: 53%;
        animation-duration: 116s;
        animation-delay: -158s;
        transform-origin: -7vw 5vh;
        box-shadow: 40vmin 0 5.031009648228144vmin currentColor;
    }
    .background span:nth-child(13) {
        color: #FFACAC;
        top: 54%;
        left: 83%;
        animation-duration: 188s;
        animation-delay: -82s;
        transform-origin: -6vw 22vh;
        box-shadow: 40vmin 0 5.449176283436518vmin currentColor;
    }
    .background span:nth-child(14) {
        color: #583C87;
        top: 86%;
        left: 90%;
        animation-duration: 211s;
        animation-delay: -356s;
        transform-origin: 14vw -11vh;
        box-shadow: -40vmin 0 5.336653689951617vmin currentColor;
    }
    .background span:nth-child(15) {
        color: #E45A84;
        top: 80%;
        left: 17%;
        animation-duration: 466s;
        animation-delay: -314s;
        transform-origin: 18vw -5vh;
        box-shadow: 40vmin 0 5.4380417803002vmin currentColor;
    }
    .background span:nth-child(16) {
        color: #583C87;
        top: 61%;
        left: 18%;
        animation-duration: 125s;
        animation-delay: -96s;
        transform-origin: -23vw 2vh;
        box-shadow: -40vmin 0 5.016744080211788vmin currentColor;
    }
    .background span:nth-child(17) {
        color: #583C87;
        top: 81%;
        left: 4%;
        animation-duration: 436s;
        animation-delay: -194s;
        transform-origin: 17vw 16vh;
        box-shadow: 40vmin 0 5.707798323071059vmin currentColor;
    }
    .background span:nth-child(18) {
        color: #583C87;
        top: 66%;
        left: 42%;
        animation-duration: 240s;
        animation-delay: -45s;
        transform-origin: -4vw 1vh;
        box-shadow: 40vmin 0 5.39920765289526vmin currentColor;
    }
    .background span:nth-child(19) {
        color: #FFACAC;
        top: 51%;
        left: 33%;
        animation-duration: 49s;
        animation-delay: -478s;
        transform-origin: -17vw -11vh;
        box-shadow: -40vmin 0 5.208457390077786vmin currentColor;
    }
</style>