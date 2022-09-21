<script>
import { ref, onMounted, onUnmounted } from "vue";
import { YoutubeVue3 } from 'youtube-vue3';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default{
  name: "Index",
  components: {
    YoutubeVue3,
  },
  setup() {
    const triggers = ScrollTrigger.getAll();
    const VideoModal = ref(true);
    const play = ref('bXKiQFT9J7c?mute=1&autoplay=1&playlist=bXKiQFT9J7c&loop=1&rel=0');
    const youtube = ref(null);
    const mbyoutube = ref(null);
    const modal = ref(null);
    const framevideo = ref(null);
    const navbar = ref(false);
    const status = ref('Top');
    const top = ref(null);
    const bgframe = ref(null);
    const threeball = ref(null);
    const bgvideo = ref(null);
    const bg4dtech = ref(null);
    const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase());
	  const events = ref(isMobile ? 'touchstart' : 'click');
	  const text = ref('');
	  window.onscroll = function() {
		  scrollFunction()
		};
		function menuopen() {
			gsap.timeline()
	    .set('.mbbg', {
				opacity:0,
				clipPath: "circle(0% at 50% 50%)"
			})
			.to('.mbbg', {
				opacity:1,
				duration: 0.25,
				clipPath: "circle(100% at 50% 50%)"
			})
		};
	  const cluckAndTouchFn = () => {
	      youtube.value.player.playVideo();
	      framevideo.value.play();
	  };
		function scrollFunction() {
		  let mybutton = document.getElementById("back-to-top");

		  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		    mybutton.style.display = "flex";
		  } else {
		    mybutton.style.display = "none";
		  }
		};
		function topFunction() {
		  window.scrollTo(0, 0);
		};
		function scrolltotop() {
	      if (top.value) {
	        top.value.scrollIntoView();
	      } 
		};
		function scrolltobgframe() {
	      if (bgframe.value) {
	      	bgframe.value.scrollIntoView();
	      } 
		};
		function scrolltothreeball() {
	      if (threeball.value) {
	      	threeball.value.scrollIntoView();
	      } 
		};
		function scrolltobgvideo() {
	      if (bgvideo.value) {
	      	bgvideo.value.scrollIntoView();
	      }
		};
		function scrolltobg4dtech() {
	      if (bg4dtech.value) {
	      	bg4dtech.value.scrollIntoView();
	      } 
		};
    onMounted(() => {
      ScrollTrigger.refresh();
      gsap.set(modal.value, {
			    opacity:0,
			    y:-2000,
			    scrollTrigger: {
			      markers: false,
			      trigger: top.value,
			      start: 'top center',
			      end: 'bottom center'
			    }
			  })
			  gsap.to(modal.value, {
			    y: 0,
			    opacity:1,
			    duration: 1.75,
			    delay: 0.5,
			    ease: "power2.out",
			    scrollTrigger: {
			      markers: false,
			      trigger: top.value,
			      start: 'top center',
			      end: 'bottom center',
			      once: true
			    },
			    onEnter() {
				  	mbyoutube.value.player.playVideo();
				  },
			})
			let mm = gsap.matchMedia();
			mm.add("(min-width: 768px)", () => {
			  gsap.set('.ball-02', {
			    opacity:0,
			    x:-253,
			    scrollTrigger: {
			      markers: false,
			      trigger: '#three-ball',
			      start: 'top center',
			      end: 'bottom center'
			    }
			  })
			  gsap.to('.ball-02', {
			    x: 0,
			    opacity:1,
			    duration: 1,
			    delay: 0.75,
			    ease: "power2.out",
			    scrollTrigger: {
			      markers: false,
			      trigger: '#three-ball',
			      start: 'top center',
			      end: 'bottom center'
			    }
			  })
			  gsap.set('.ball-03', {
			    opacity:0,
			    x:-260,
			    scrollTrigger: {
			      markers: false,
			      trigger: '#three-ball',
			      start: 'top center',
			      end: 'bottom center'
			    }
			  })
			  gsap.to('.ball-03', {
			    x: 0,
			    opacity:1,
			    duration: 1,
			    delay: 1.5,
			    ease: "power2.out",
			    scrollTrigger: {
			      markers: false,
			      trigger: '#three-ball',
			      start: 'top center',
			      end: 'bottom center'
			    }
			  })
			});
			mm.add("(max-width: 767px)", () => {
			  gsap.set('.ball-02', {
			    opacity:0,
			    y:10,
			    scrollTrigger: {
			      markers: false,
			      trigger: '#three-ball',
			      start: 'top center',
			      end: 'bottom center'
			    }
			  })
			  gsap.to('.ball-02', {
			    y: 0,
			    opacity:1,
			    duration: 1,
			    delay: 0.75,
			    ease: "power2.out",
			    scrollTrigger: {
			      markers: false,
			      trigger: '#three-ball',
			      start: 'top center',
			      end: 'bottom center'
			    }
			  })
			  //
			  gsap.set('.ball-03', {
			    opacity:0,
			    y:10,
			    scrollTrigger: {
			      markers: false,
			      trigger: '#three-ball',
			      start: 'top center',
			      end: 'bottom center'
			    }
			  })
			  gsap.to('.ball-03', {
			    y: 0,
			    opacity:1,
			    duration: 1,
			    delay: 1.5,
			    ease: "power2.out",
			    scrollTrigger: {
			      markers: false,
			      trigger: '#three-ball',
			      start: 'top center',
			      end: 'bottom center'
			    }
			  })

			  gsap.set('.ball-rot', {
			    opacity:0,
			    scrollTrigger: {
			      markers: false,
			      trigger: '#three-ball',
			      start: 'top center',
			      end: 'bottom center'
			    }
			  })
			  gsap.to('.ball-rot', {
			    rotation:"90",
			    opacity:1,
			    duration: 1,
			    delay: 1.5,
			    ease: "power2.out",
			    scrollTrigger: {
			      markers: false,
			      trigger: '#three-ball',
			      start: 'top center',
			      end: 'bottom center'
			    }
			  })
			});
			// banner
			gsap.set('.aich4d', {
			  opacity:0,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#banner',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.to('.aich4d', {
			  y: 0,
			  opacity:1,
			  duration: 1,
			  delay: 2,
			  ease: "power2.out",
			  scrollTrigger: {
			    markers: false,
			    trigger: '#banner',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.set('.ball_pict', {
			  opacity:0,
			  y:40,
			  scale:0.75,
			  rotation:45,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#banner',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.to('.ball_pict', {
			  y: 0,
			  scale:1,
			  opacity:1,
			  rotation:0,
			  duration: 1,
			  delay: 2.5,
			  ease: "power2.out",
			  scrollTrigger: {
			    markers: false,
			    trigger: '#banner',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			// frame
			gsap.set('.frame-block-1', {
			  opacity:0,
			  y:20,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#bg-frame',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.to('.frame-block-1', {
			  y: 0,
			  opacity:1,
			  duration: 0.5,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#bg-frame',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.set('.Harry-txt-1', {
			  opacity:0,
			  y:20,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#bg-frame',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.to('.Harry-txt-1', {
			  y: 0,
			  opacity:1,
			  duration: 0.5,
			  delay:0.5,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#bg-frame',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.set('.Harry-txt-2', {
			  opacity:0,
			  y:20,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#bg-frame',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.to('.Harry-txt-2', {
			  y: 0,
			  opacity:1,
			  duration: 0.5,
			  delay:0.75,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#bg-frame',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.set('.Harry-txt-3', {
			  opacity:0,
			  y:20,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#bg-frame',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.to('.Harry-txt-3', {
			  y: 0,
			  opacity:1,
			  duration: 0.5,
			  delay:1,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#bg-frame',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			// 4D tech application x
			// a new perspective
			gsap.set('.txt-4d-block', {
			  opacity:0,
			  y:10,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#three-ball',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.to('.txt-4d-block', {
			  y: 0,
			  opacity:1,
			  duration: 0.5,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#three-ball',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.set('.txt-x-block', {
			  opacity:0,
			  y:10,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#three-ball',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.to('.txt-x-block', {
			  y: 0,
			  opacity:1,
			  duration: 0.5,
			  delay:0.5,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#three-ball',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.set('.txt-new-block', {
			  opacity:0,
			  y:10,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#three-ball',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.to('.txt-new-block', {
			  y: 0,
			  opacity:1,
			  duration: 0.5,
			  delay:0.75,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#three-ball',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			// Video 
			gsap.set('.video-txt', {
			  opacity:0,
			  y:10,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#bg-video',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.to('.video-txt', {
			  y: 0,
			  opacity:1,
			  duration: 0.5,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#bg-video',
			    start: 'top center',
			    end: 'bottom center',
			    once: true
			  },
			  onEnter() {

			  },
			})
			// 4D tech application x
			gsap.set('.tech4d-txt', {
			  opacity:0,
			  y:10,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#bg-4dtech',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.to('.tech4d-txt', {
			  y: 0,
			  opacity:1,
			  duration: 0.5,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#bg-4dtech',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.set('.tech4d-x', {
			  opacity:0,
			  y:10,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#bg-4dtech',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.to('.tech4d-x', {
			  y: 0,
			  opacity:1,
			  duration: 0.5,
			  delay: 0.5,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#bg-4dtech',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			// 3D coming OUT
			gsap.set('.coming-txt', {
			  opacity:0,
			  y:10,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#bg-coming',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.to('.coming-txt', {
			  y: 0,
			  opacity:1,
			  duration: 0.5,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#bg-coming',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			// image block
			gsap.set('.h1-block-1', {
			  opacity:0,
			  y:10,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#array-block-1',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.to('.h1-block-1', {
			  y: 0,
			  opacity:1,
			  duration: 0.5,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#array-block-1',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.set('.h1-block-1-1', {
			  opacity:0,
			  y:10,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#array-block-1',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.to('.h1-block-1-1', {
			  y: 0,
			  opacity:1,
			  duration: 0.5,
			  delay:0.5,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#array-block-1',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.set('.gray-block-1', {
			  width:"100%",
			  scrollTrigger: {
			    markers: false,
			    trigger: '#array-block-1',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.to('.gray-block-1', {
			  width:0,
			  duration: 1,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#array-block-1',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.set('.img-block-1', {
			  x:10,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#array-block-1',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.to('.img-block-1', {
			  x:0,
			  duration: 1,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#array-block-1',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.set('.txt-block-1', {
			  opacity:0,
			  y:40,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#array-block-1',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.to('.txt-block-1', {
			  opacity:1,
			  y:0,
			  duration: 0.5,
			  ease: "power4.out",
			  scrollTrigger: {
			    markers: false,
			    trigger: '#array-block-1',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})

			gsap.set('.h1-block-2', {
			  opacity:0,
			  y:10,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#array-block-2',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.to('.h1-block-2', {
			  y: 0,
			  opacity:1,
			  duration: 0.5,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#array-block-2',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.set('.h1-block-2-2', {
			  opacity:0,
			  y:10,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#array-block-2',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.to('.h1-block-2-2', {
			  y: 0,
			  opacity:1,
			  duration: 0.5,
			  delay:0.5,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#array-block-2',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.set('.gray-block-2', {
			  width:"100%",
			  scrollTrigger: {
			    markers: false,
			    trigger: '#array-block-2',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.to('.gray-block-2', {
			  width:0,
			  duration: 1,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#array-block-2',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.set('.img-block-2', {
			  x:40,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#array-block-2',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.to('.img-block-2', {
			  x:0,
			  duration: 1,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#array-block-2',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.set('.txt-block-2', {
			  opacity:0,
			  y:40,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#array-block-2',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.to('.txt-block-2', {
			  opacity:1,
			  y:0,
			  duration: 0.5,
			  ease: "power4.out",
			  scrollTrigger: {
			    markers: false,
			    trigger: '#array-block-2',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})

			gsap.set('.h1-block-3', {
			  opacity:0,
			  y:10,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#array-block-3',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.to('.h1-block-3', {
			  y: 0,
			  opacity:1,
			  duration: 0.5,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#array-block-3',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.set('.h1-block-3-3', {
			  opacity:0,
			  y:10,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#array-block-3',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.to('.h1-block-3-3', {
			  y: 0,
			  opacity:1,
			  duration: 0.5,
			  delay:0.5,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#array-block-3',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.set('.gray-block-3', {
			  width:"100%",
			  scrollTrigger: {
			    markers: false,
			    trigger: '#array-block-3',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.to('.gray-block-3', {
			  width:0,
			  duration: 1,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#array-block-3',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.set('.img-block-3', {
			  x:40,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#array-block-3',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.to('.img-block-3', {
			  x:0,
			  duration: 1,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#array-block-3',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.set('.txt-block-3', {
			  opacity:0,
			  y:40,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#array-block-3',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.to('.txt-block-3', {
			  opacity:1,
			  y:0,
			  duration: 0.5,
			  ease: "power4.out",
			  scrollTrigger: {
			    markers: false,
			    trigger: '#array-block-3',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})

			gsap.set('.h1-block-4', {
			  opacity:0,
			  y:10,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#array-block-4',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.to('.h1-block-4', {
			  y: 0,
			  opacity:1,
			  duration: 0.5,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#array-block-4',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.set('.h1-block-4-4', {
			  opacity:0,
			  y:10,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#array-block-4',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.to('.h1-block-4-4', {
			  y: 0,
			  opacity:1,
			  duration: 0.5,
			  delay:0.5,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#array-block-4',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.set('.gray-block-4', {
			  width:"100%",
			  scrollTrigger: {
			    markers: false,
			    trigger: '#array-block-4',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.to('.gray-block-4', {
			  width:0,
			  duration: 1,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#array-block-4',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.set('.img-block-4', {
			  x:40,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#array-block-4',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.to('.img-block-4', {
			  x:0,
			  duration: 1,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#array-block-4',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.set('.txt-block-4', {
			  opacity:0,
			  y:40,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#array-block-4',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.to('.txt-block-4', {
			  opacity:1,
			  y:0,
			  duration: 0.5,
			  ease: "power4.out",
			  scrollTrigger: {
			    markers: false,
			    trigger: '#array-block-4',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.set('.h1-block-5', {
			  opacity:0,
			  y:10,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#array-block-5',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.to('.h1-block-5', {
			  y: 0,
			  opacity:1,
			  duration: 0.5,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#array-block-5',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.set('.h1-block-5-5', {
			  opacity:0,
			  y:10,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#array-block-5',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.to('.h1-block-5-5', {
			  y: 0,
			  opacity:1,
			  duration: 0.5,
			  delay:0.5,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#array-block-5',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.set('.gray-block-5', {
			  width:"100%",
			  scrollTrigger: {
			    markers: false,
			    trigger: '#array-block-5',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.to('.gray-block-5', {
			  width:0,
			  duration: 1,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#array-block-5',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.set('.img-block-5', {
			  x:10,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#array-block-5',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.to('.img-block-5', {
			  x:0,
			  duration: 1,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#array-block-5',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.set('.txt-block-5', {
			  opacity:0,
			  y:40,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#array-block-5',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.to('.txt-block-5', {
			  opacity:1,
			  y:0,
			  duration: 0.5,
			  ease: "power4.out",
			  scrollTrigger: {
			    markers: false,
			    trigger: '#array-block-5',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			// 3d coming
			gsap.set('.card-1', {
			  opacity:0,
			  y:10,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#bg-3d-coming',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.to('.card-1', {
			  y: 0,
			  opacity:1,
			  duration: 0.5,
			  delay:0.5,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#bg-3d-coming',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.set('.card-2', {
			  opacity:0,
			  y:10,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#bg-3d-coming',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.to('.card-2', {
			  y: 0,
			  opacity:1,
			  duration: 0.5,
			  delay:0.75,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#bg-3d-coming',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.set('.card-3', {
			  opacity:0,
			  y:10,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#bg-3d-coming',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.to('.card-3', {
			  y: 0,
			  opacity:1,
			  duration: 0.5,
			  delay:1,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#bg-3d-coming',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.set('.card-4', {
			  opacity:0,
			  y:10,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#bg-3d-coming',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.to('.card-4', {
			  y: 0,
			  opacity:1,
			  duration: 1,
			  delay:1.25,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#bg-3d-coming',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.set('.card-5', {
			  opacity:0,
			  y:10,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#bg-3d-coming',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.to('.card-5', {
			  y: 0,
			  opacity:1,
			  duration: 1,
			  delay:1.5,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#bg-3d-coming',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			// video-button
			gsap.set('.video', {
			  opacity:0,
			  y:40,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#bg-video',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
			gsap.to('.video', {
			  y:0,
			  opacity:1,
			  duration: 1,
			  delay:0.5,
			  scrollTrigger: {
			    markers: false,
			    trigger: '#bg-video',
			    start: 'top center',
			    end: 'bottom center'
			  }
			})
		//

    });
    onUnmounted(() => {
      triggers.forEach((trigger) => {
        trigger.kill();
      });
      ScrollTrigger.clearMatchMedia();
    });

    return {
			events,
      text,
      cluckAndTouchFn,
      //
    	modal,
    	mbyoutube,
    	youtube,
    	VideoModal,
    	menuopen,
    	framevideo,
    	//
      navbar,
      status,
      play,
      scrollFunction,
      topFunction,
      //
    	top,
    	bgframe,
    	threeball,
    	bgvideo,
    	bg4dtech,
    	// scroll to el
      scrolltotop,
      scrolltobgframe,
      scrolltothreeball,
      scrolltobgvideo,
      scrolltobg4dtech
    }
  },
};
</script>
<template>
	<div v-on:[events]="cluckAndTouchFn">
  <div
  ref="top"
  id="top" 
  class="relative overflow-hidden h-[920px] lg:h-screen bg-[#adadad] pt-[1rem] sm:pt-[2.5rem] lg:pt-10 flex justify-center">

    <header 
    class="max-w-[90%] mx-auto h-[75px] bg-white flex justify-between items-center px-10 z-20 fixed  w-full z-40 navbar">
      <span class="cursor-pointer" @click="topFunction();">
        <img src="../assets/image/aichronus_logo.svg" class="w-[120px]" alt="aichronus logo">
      </span>
      <nav>
        <ul class="hidden lg:flex flex-row space-x-10 text-gray-400 text-[14px] font-ViceCitySans">
          <li :class="{ 'text-black' : status === 'Top' }" @click="status = 'Top';scrolltotop();" class="cursor-pointer hover:text-gray-900">Home</li>
          <li :class="{ 'text-black' : status === 'Foreword' }" @click="status = 'Foreword';scrolltobgframe();" class="cursor-pointer hover:text-gray-900">Foreword</li>
          <li :class="{ 'text-black' : status === 'Projects' }" @click="status = 'Projects';scrolltothreeball();" class="cursor-pointer hover:text-gray-900">Idea</li>
          <li :class="{ 'text-black' : status === 'Video' }" @click="status = 'Video';scrolltobgvideo();" class="cursor-pointer hover:text-gray-900">Video</li>
          <li :class="{ 'text-black' : status === 'Application' }" @click="status = 'Application';scrolltobg4dtech();" class="cursor-pointer hover:text-gray-900">Application</li>
					<li class="text-gray-900 contact_tag flex justify-center items-center"><a href="mailto:service@lightmatrix3d.com">Contact</a></li>
        </ul>

        <button 
        @click="navbar =! navbar;menuopen();"
        class="lg:hidden flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
        </svg>
        </button>
      </nav>
      <teleport to="body">
	      <div 
	      v-show="navbar"
	      class="fixed bg-black/90 w-full h-full top-0 left-0 flex justify-center items-center z-[800] mbbg">
	          <ul class="flex flex-col space-y-10 text-gray-400 text-[14px] font-ViceCitySans">
	            <li :class="{ 'text-yellow-400' : status === 'Top' }" @click="status = 'Top';navbar = !navbar;scrolltotop();" class="cursor-pointer text-white text-center hover:text-yellow-400">Home</li>
	            <li :class="{ 'text-yellow-400' : status === 'Foreword' }" @click="status = 'Foreword';navbar = !navbar;scrolltobgframe();" class="cursor-pointer text-white text-center hover:text-yellow-400">Foreword</li>
	            <li :class="{ 'text-yellow-400' : status === 'Projects' }" @click="status = 'Projects';navbar = !navbar;scrolltothreeball();" class="cursor-pointer text-white text-center hover:text-yellow-400">Idea</li>
	            <li :class="{ 'text-yellow-400' : status === 'Video' }" @click="status = 'Video';navbar = !navbar;scrolltobgvideo();" class="cursor-pointer text-white text-center hover:text-yellow-400">Video</li>
	            <li :class="{ 'text-yellow-400' : status === 'Application' }" @click="status = 'Application';navbar = !navbar;scrolltobg4dtech();" class="cursor-pointer text-white text-center hover:text-yellow-400">Application</li>
							<li class="text-center text-yellow-400 contact_tag flex justify-center items-center"><a href="mailto:service@lightmatrix3d.com">Contact</a></li>
	          </ul>

	          <button @click="navbar =! navbar;">
	            <span class="absolute top-4 right-4 text-white hover:text-yellow-400">
	              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
	                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
	              </svg>
	            </span>
	          </button>
	      </div>
    	</teleport>

    </header>


    <div 
    id="banner"
    class="relative max-w-3xl mx-auto h-full flex flex-col lg:flex-row justify-center items-center pt-40 lg:pt-20">
      <div class="lg:w-1/2 flex flex-col justify-center items-center">
          <div 
          id="fly-in" 
          class="font-ViceCitySans w-full relative flex justify-center items-center text-white text-center text-[42px] pb-[3rem] z-40">  
            <div class="whitespace-nowrap">3D coming OUT</div>
            <div><img src="../assets/image/all_live_txt.png" class="min-w-[380px]" alt="3d coming out"></div>
            <div class="whitespace-nowrap">3D coming OUT</div>
            <div><img src="../assets/image/all_live_txt.png" class="min-w-[380px]" alt="3d coming out"></div>
            <div class="whitespace-nowrap">3D coming OUT</div>
            <div><img src="../assets/image/all_live_txt.png" class="min-w-[380px]" alt="3d coming out"></div>
            <div class="whitespace-nowrap">3D coming OUT</div>
            <div><img src="../assets/image/all_live_txt.png" class="min-w-[380px]" alt="3d coming out"></div>
          </div>
          <div 
          class="aich4d z-[21]">
            <img src="../assets/image/aich_4d.png" width="260px">
          </div>
      </div>
      <div class="lg:w-1/2 flex justify-center items-center pb-20 px-10 sm:px-0">

        <div class="relative flex justify-center items-center ball_pict z-[21]">
          <div 
          class="absolute bottom-0 rounded-full w-[260px] h-[260px] md:w-[320px] md:h-[320px] flex justify-center items-center" 
          style="background: linear-gradient(-45deg,transparent,transparent,#ffff15 1%, transparent 70%);">
          </div>
          <div class="relative flex justify-center items-center z-10 pb-0 min-w-[320px] sm:max-w-[520px] xl:max-w-full">
              <img src="../assets/image/23.webp" alt="aichronus">
          </div>
        </div>

      </div>
    </div>

    <div 
    class="hidden md:flex absolute -left-80 -top-80 w-[600px] h-[600px] rotate-45 bg-[#ffff15] z-20" 
    style="filter: blur(160px);-webkit-filter: blur(160px);"></div>
    <div 
    class="md:hidden absolute -left-80 -top-80 w-[600px] h-[600px] rotate-45 bg-[#ffff15] z-20" 
    style="filter: blur(120px);-webkit-filter: blur(120px);"></div>

  </div>

<!-- -->
  <div 
  ref="bgframe" 
  id="bg-frame"
  class="relative flex flex-col md:flex-row justify-center items-center bg-cover bg-center min-h-[700px]" 
  style="background-image: url('/image/beautiful-view-fisherman-s-bastion-interior-design-budapest-hungary.jpeg');">
    <div class="absolute top-0 left-0 bg-black/70 w-full h-full"></div>
    <div class="max-w-[90%] mx-auto flex flex-col lg:flex-row justify-center items-center w-full space-y-20 md:space-y-0">
      <div class="w-full lg:w-[40%] relative flex justify-center lg:justify-end items-center pt-12 md:pt-0 frame-block-1">
        <div class="relative w-full w-[400px] overflow-hidden">
          <div class="absolute top-0 right-0 z-20 relative">
            <img loading="lazy" src="../assets/image/frame.webp" class="mx-auto w-[60%]" alt="aichronus frame">
          </div>

            <div class="absolute top-0 left-24 sm:left-24 md:left-[3rem] z-10 w-full video-mask">
            <video ref="framevideo" class="w-full h-full scale-150" autoplay muted loop playsinline>
              <source src="../assets/video/mflec-hgg3w.webm" type="video/webm">
              <source src="../assets/video/video480.mp4" type="video/mp4">
            </video>
          </div>
        </div>
      </div>
      <div class="w-full lg:w-[60%] flex flex-col z-20 px-10 md:px-0 pt-0 pb-12 sm:py-12 md:py-0">
        <div class="xl:w-[60%] flex flex-col justify-center lg:justify-start md:pt-2">
          <h5 class="text-white text-[28px] sm:text-[50px] lg:text-[52px] text-center lg:text-left font-bold font-ViceCitySans Harry-txt-1">Have you seen the<br>Harry Potter ?</h5>
          <p class="text-white text-[16px] text-center lg:text-left font-thin pt-10 pb-4 font-KimMochi Harry-txt-2">We realize the magic photo frame in the real world !!</p>
          <div class="flex justify-center lg:justify-end Harry-txt-3">
            <img loading="lazy" src="../assets/image/lightmaltrix_logo.png" class="w-[75px]"  alt="lightmatrix">
          </div>
        </div>
      </div>
    </div>
  </div>
<!-- -->
  <div 
  ref="threeball" 
  id="three-ball"
  class="bg-[#ADADAD] flex flex-col justify-center items-center py-20">
    <h5 class="text-[28px] sm:text-[50px] lg:text-[52px] text-white sm:leading-[4rem] lg:leading-[6rem] txt-4d-block font-ViceCitySans">4D tech application</h5>
    <span class="text-[28px] sm:text-[50px] lg:text-[52px] font-ViceCitySans txt-x-block text-white" 
    style="text-shadow: 0 0 0.2em #ffff15, 0 0 2em #ffff15, 0 0 2em #ffff15">x</span>
    <h5 class="text-[28px] sm:text-[50px] lg:text-[52px] text-white border-b-[2px] border-white mb-20 sm:leading-[4rem] lg:leading-[6rem] md:leading-[4rem] txt-new-block font-ViceCitySans">a new perspective</h5>
    
    <div class="relative">
      <ul class="flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-4 space-y-0">
        <li class="flex flex-col justify-center items-center z-20">
          <div class="w-[210px] h-[210px] rounded-full bg-[#EFEFEF] flex justify-center items-center ball-01">
            <p class="text-center font-ViceCitySans text-[22px]">Unique<br>technology</p>
          </div>
          <p class="text-center py-4 font-KimMochi text-[16px] text-white ball-01">Breaking out the photo frame<br>from 3D image</p>
        </li>
        <li class="font-ViceCitySans text-[22px] text-[#ffff15] pb-6 md:pb-20 ball-02">X</li>
        <li class="flex flex-col justify-center items-center z-10">
          <div class="w-[210px] h-[210px] rounded-full bg-[#ffff15] flex justify-center items-center ball-02">
            <p class="text-center font-ViceCitySans text-[22px]">Digital<br>archive</p>
          </div>
          <p class="text-center py-4 font-KimMochi text-[16px] text-white ball-02">Multiple interactive<br>technology breaking- through</p>
        </li>
        <li class="font-ViceCitySans text-[32px] md:pb-20 text-[#ffff15] ball-03 ball-rot">=</li>
        <li class="flex flex-col justify-center items-center z-10 pt-20 md:pt-0">
          <div 
          class="relative bg-gradient-to-tl from-[#ffff15] to-white rounded-full w-[210px] h-[210px] flex justify-center items-center ball-03">
            <div class="w-[200px] h-[200px] bg-[#ADADAD] rounded-full flex flex-col justify-center items-center">
              <p class="text-center font-ViceCitySans text-[40px] text-[#ffff15]">4D BOX</p>
            </div>

            <div class="absolute -top-16 left-8">
              <img loading="lazy" src="../assets/image/21.webp" width="130px" alt="aichronus">
            </div>
          </div>
          <p class="text-center py-4 font-KimMochi text-[16px] text-[#ffff15] ball-03">Virtual and real<br>integration as being on-site</p>
        </li>
      </ul>
    </div>
  </div>
<!-- -->
  <div 
  ref="bgvideo"
  id="bg-video"
  class="bg-[#EFEFEF] flex flex-col justify-center items-center py-20 overflow-hidden relative">
    <h5 class="video-txt font-ViceCitySans text-[28px] sm:text-[50px] lg:text-[52px] font-bold pb-4 pt-6">Video</h5>
    <div class="relative max-w-2xl w-full mx-auto flex justify-center items-center px-10 md:px-0 z-20 video">

			<YoutubeVue3 
			allow="autoplay"
			ref="youtube" 
			:videoid="play" 
			:controls="1"
			:modestbranding="1"
			:playsinline="1"
			:loop="1"
			class="w-full h-[250px] sm:h-[333px] md:h-[378px]" />

    </div>
    <div class="absolute bottom-0 -right-[100px] md:-right-[100px] z-10">
      <img loading="lazy" src="../assets/image/bigA.png" class="w-[320px] md:w-[520px]"  alt="aichronus big a">
    </div>
  </div>
<!-- -->
  <div 
  ref="bg4dtech"
  id="bg-4dtech"
  class="bg-white h-full flex flex-col justify-center items-center">
    <h5 class="font-ViceCitySans text-[28px] sm:text-[50px] lg:text-[52px] pt-20 tech4d-txt">4D tech application</h5>
    <span class="font-ViceCitySans text-[28px] sm:text-[50px] lg:text-[52px] pb-12 pt-10 tech4d-x" style="text-shadow: 0 0 0.2em #ffff15, 0 0 2em #ffff15, 0 0 2em #ffff15">x</span>
    <div class="flex flex-col justify-center items-center space-y-28 md:space-y-20">
      <div 
      id="array-block-1"
      class="relative max-w-5xl mx-auto flex flex-col justify-center items-center">
        <h5 class="text-center font-KimMochi text-[22px] sm:text-[36px] lg:text-[52px] font-thin h1-block-1">Hologram Video Conference</h5>
        <p class="text-center font-KimMochi text-[16px] text-gray-400 h1-block-1-1">The 4D improved the interaction and change the boring,<br>rigid video conference</p>
        <div class="relative w-full flex flex-col">

          <div class="px-8 md:px-20 z-20">
            <div class="flex flex-col sm:flex-row">
              <div class="sm:w-1/2 sm:ml-2 mt-2 sm:mr-1 mb-2 relative overflow-hidden">
                <img loading="lazy" src="../assets/image/01.webp" class="img-block-1" alt="aichronus">
                <div class="bg-gray-300 w-full h-full absolute top-0 gray-block-1"></div>
              </div>
              <div class="sm:w-1/2 sm:mr-2 mt-0 sm:mt-2 sm:ml-1 mb-2 relative overflow-hidden">
                <img loading="lazy" src="../assets/image/02.webp" class="img-block-1">
                <div class="bg-gray-300 w-full h-full absolute top-0 gray-block-1" alt="aichronus"></div>
              </div>
            </div>

            <div class="bg-[#ffff15] text-center py-6 sm:ml-2 mb-2 mt-0 sm:mr-2 z-20 font-ViceCitySans text-[14px] sm:text-[16px] ">
               <p class="txt-block-1">Naked 3D make you in the real world, better communication and<br>real scene.</p>
            </div>
          </div>

          <div class="flex justify-center items-center relative">
            <div class="absolute -bottom-16 md:-bottom-4 bg-gray-100 rounded-3xl h-[240px] w-[98%] z-10"></div>
          </div>
        </div>
      </div>
      <div 
      id="array-block-2"
      class="relative max-w-5xl mx-auto flex flex-col justify-center items-center">
        <h5 class="font-KimMochi text-[22px] sm:text-[36px] lg:text-[52px] font-thin h1-block-2">Portrait Present As Naked Eye</h5>
        <p class="font-KimMochi text-[16px] text-gray-400 h1-block-2-2">Get out the plane and immerse the feeling of life.</p>
        <div class="relative w-full flex flex-col">

          <div class="px-8 md:px-20 z-20">
            <div class="flex flex-col sm:flex-row">
              <div class="sm:w-1/2 sm:mr-2 mt-2 sm:ml-1 mb-2 relative overflow-hidden">
                <img loading="lazy" src="../assets/image/03.webp" class="img-block-2" alt="aichronus">
                <div class="bg-gray-300 w-full h-full absolute top-0 gray-block-2"></div>
              </div>

              <div class="flex sm:hidden w-full bg-[#ffff15] text-center py-6 sm:ml-2 mb-2 mt-0 sm:mr-1 z-20 font-ViceCitySans text-[14px] sm:text-[16px] justify-center items-center">
                 <p class="txt-block-2">Dynamic portrait preservation,<br>lifelike sense of breaking through<br>photo frame real scene.</p>
              </div>

              <div class="sm:w-1/2 sm:mr-2 sm:mt-2 sm:ml-1 mb-2 relative overflow-hidden">
                <img loading="lazy" src="../assets/image/04.webp" class="img-block-2" alt="aichronus">
                <div class="bg-gray-300 w-full h-full absolute top-0 gray-block-2"></div>
              </div>

              <div class="flex sm:hidden w-full bg-[#ffff15] text-center py-6 sm:ml-2 mb-2 mt-0 sm:mr-1 z-20 font-ViceCitySans text-[14px] sm:text-[16px] justify-center items-center">
                 <p class="txt-block-2">Three dimeson from different<br>angle of eye</p>
              </div>
            </div>

            <div class="w-full hidden sm:flex flex-row">
              <div class="w-1/2 bg-[#ffff15] text-center py-6 sm:ml-2 mb-2 mt-0 sm:mr-1 z-20 font-ViceCitySans text-[14px] sm:text-[16px]">
                 <p class="txt-block-2">Dynamic portrait preservation,<br>lifelike sense of breaking through<br>photo frame real scene.</p>
              </div>
              <div class="w-1/2 bg-[#ffff15] text-center py-6 ml-1 mb-2 mt-0 mr-2 z-20 font-ViceCitySans text-[14px] sm:text-[16px] flex justify-center items-center">
                 <p class="txt-block-2">Three dimeson from different<br>angle of eye</p>
              </div>
            </div>
          </div>

          <div class="flex justify-center items-center relative">
            <div class="absolute -bottom-16 md:-bottom-4 bg-gray-100 rounded-3xl h-[240px] w-[98%] z-10"></div>
          </div>
        </div>
      </div>
      <div 
      id="array-block-3"
      class="relative max-w-5xl mx-auto flex flex-col justify-center items-center">
        <h5 class="font-KimMochi text-[22px] sm:text-[36px] lg:text-[52px] font-thin h1-block-3">Real Interactive Memory Locker</h5>
        <p class="font-KimMochi text-[16px] text-gray-400 h1-block-3-3">Prolong the life, record every moment</p>
        <div class="relative w-full flex flex-col">

          <div class="px-8 md:px-20 z-20">
            <div class="flex flex-col sm:flex-row">
              <div class="sm:w-1/2 sm:mr-2 mt-2 sm:ml-1 mb-2 relative overflow-hidden">
                <img loading="lazy" src="../assets/image/05.webp" class="img-block-3" alt="aichronus">
                <div class="bg-gray-300 w-full h-full absolute top-0 gray-block-3"></div>
              </div>

              <div class="flex sm:hidden w-full sm:w-1/2 bg-[#ffff15] text-center py-6 sm:ml-2 mb-2 mt-0 sm:mr-1 z-20 font-ViceCitySans text-[12px] sm:text-[16px] justify-center items-center">
                 <p class="txt-block-3">Naked visual presentation<br>of pet moving images</p>
              </div>

              <div class="sm:w-1/2 sm:mr-2 sm:mt-2 sm:ml-1 mb-2 relative overflow-hidden">
                <img loading="lazy" src="../assets/image/06.webp" class="img-block-3" alt="aichronus">
                <div class="bg-gray-300 w-full h-full absolute top-0 gray-block-3"></div>
              </div>

              <div class="flex sm:hidden w-full sm:w-1/2 bg-[#ffff15] text-center py-6 sm:ml-1 mb-2 mt-0 sm:mr-2 z-20 font-ViceCitySans text-[12px] sm:text-[16px] justify-center items-center">
                 <p class="txt-block-3">Recording the different<br>growing stage of your pet.</p>
              </div>

            </div>

            <div class="w-full hidden sm:flex flex-row">
              <div class="w-1/2 bg-[#ffff15] text-center py-6 ml-2 mb-2 mt-0 mr-1 z-20 font-ViceCitySans text-[12px] sm:text-[16px]">
                 <p class="txt-block-3">Naked visual presentation<br>of pet moving images</p>
              </div>
              <div class="w-1/2 bg-[#ffff15] text-center py-6 ml-1 mb-2 mt-0 mr-2 z-20 font-ViceCitySans text-[12px] sm:text-[16px]">
                 <p class="txt-block-3">Recording the different<br>growing stage of your pet.</p>
              </div>
            </div>
          </div>

          <div class="flex justify-center items-center relative">
            <div class="absolute -bottom-16 md:-bottom-4 bg-gray-100 rounded-3xl h-[240px] w-[98%] z-10"></div>
          </div>
        </div>
      </div>
      <div 
      id="array-block-4"
      class="relative max-w-5xl mx-auto flex flex-col justify-center items-center">
        <h5 class="font-KimMochi text-[22px] sm:text-[36px] lg:text-[52px] font-thin h1-block-4">Improving The Quality Of Life</h5>
        <p class="font-KimMochi text-[16px] text-gray-400 h1-block-4-4">Get out the plane and immerse the life.</p>
        <div class="relative w-full flex flex-col">

          <div class="px-8 md:px-20 z-20">
            <div class="flex flex-col sm:flex-row">
              <div class="sm:w-1/3 sm:ml-2 mt-2 mb-2 relative overflow-hidden">
                <img loading="lazy" src="../assets/image/31.webp" class="img-block-4" alt="aichronus">
                <div class="bg-gray-300 w-full h-full absolute top-0 gray-block-4"></div>
              </div>
              <div class="sm:w-1/3 sm:mt-2 mb-2 relative overflow-hidden">
                <img loading="lazy" src="../assets/image/33.webp" class="img-block-4" alt="aichronus">
                <div class="bg-gray-300 w-full h-full absolute top-0 gray-block-4"></div>
              </div>
              <div class="sm:w-1/3 sm:mt-2 mb-2 relative overflow-hidden">
                <img loading="lazy" src="../assets/image/32.webp" class="img-block-4" alt="aichronus">
                <div class="bg-gray-300 w-full h-full absolute top-0 gray-block-4"></div>
              </div>
            </div>

            <div class="bg-[#ffff15] text-center py-6 sm:ml-2 mb-2 mt-0 mr-0 z-20 font-ViceCitySans text-[12px] sm:text-[16px]">
                <p class="txt-block-4">Digital archive for real thing,<br>Tailor- made for improving the quality of life.</p>
            </div>
          </div>

          <div class="flex justify-center items-center relative">
            <div class="absolute -bottom-16 md:-bottom-4 bg-gray-100 rounded-3xl h-[240px] w-[98%] z-10"></div>
          </div>
        </div>
      </div>
      <div 
      id="array-block-5"
      class="relative max-w-5xl w-full mx-auto flex flex-col justify-center items-center">
        <h5 class="text-center font-KimMochi text-[22px] sm:text-[36px] lg:text-[52px] font-thin h1-block-5">1:1 Hologram Video Conference</h5>
        <p class="text-center font-KimMochi text-[16px] text-gray-400 h1-block-5-5">As real person in the scene, break the cold feeling<br class="flex md:hidden">of technology and bring the real emotions.</p>
        <div class="relative w-full flex flex-col">

          <div class="px-8 md:px-20 z-20">
            <div class="flex flex-col sm:flex-row justify-center items-center">
              <div class="sm:max-w-[420px] w-full sm:ml-2 mt-2 mb-2 relative overflow-hidden flex justify-center">
                <img loading="lazy" src="../assets/image/11H.webp" class="img-block-5" alt="aichronus">
                <div class="bg-gray-300 w-full h-full absolute top-0 left-0 gray-block-5"></div>
              </div>
            </div>

            <div class="bg-[#ffff15] text-center py-6 sm:ml-2 mb-2 mt-0 z-20 font-ViceCitySans text-[14px] sm:text-[16px]">
               <p class="txt-block-5">1:1 portrait ratio presented, let the video conference<br>
                breaks through the regional restrictions, as if it is right in front of you.</p>
            </div>
          </div>

          <div class="flex justify-center items-center relative">
            <div class="absolute -bottom-16 md:-bottom-4 bg-gray-100 rounded-3xl h-[240px] w-[98%] z-10"></div>
          </div>
        </div>
      </div>
    </div>

    <div 
    id="bg-coming"
    class="pt-[12rem] lg:pt-24 pb-[5rem] lg:pb-0 flex flex-col justify-center items-center">
      <h5 class="font-ViceCitySans font-bold text-[34px] sm:text-[42px] coming-txt">3D coming OUT</h5>
    </div>
  </div>
<!-- -->
  <div 
  id="bg-3d-coming"
  class="bg-[#ffff15] h-full flex flex-col mt-24">
    <div class="max-w-[82%] sm:max-w-5xl mx-auto w-full relative h-[600px] flex flex-col items-center">

      <div class="absolute -top-24 left-0 md:left-48 z-10 card-1">
        <img loading="lazy" src="../assets/image/15.webp" width="360px" alt="aichronus">
      </div>
      <div class="absolute top-[12rem] sm:top-24 right-0 md:right-56 z-20 card-2">
        <img loading="lazy" src="../assets/image/23.webp" width="360px" alt="aichronus">
      </div>
      <div class="absolute top-[28rem] sm:top-80 left-0 md:left-60 z-30 card-3">
        <img loading="lazy" src="../assets/image/11.webp" width="360px" alt="aichronus">
      </div>
    </div>

    <div class="flex flex-col justify-center items-center pt-40 pb-[8rem] lg:pb-[10rem]">
      <div class="card-4">
        <img loading="lazy" src="../assets/image/aich_4d_gray.png" width="260px" alt="aichronus">
      </div>
      <div class="relative font-ViceCitySans text-[34px] sm:text-[42px] mt-12 card-5">All future are LIVE .
        <div class="bg-white rotate-45 w-[5px] h-[5px] absolute right-[92px] sm:right-[88px] top-0"></div>
      </div>
    </div>
  </div>
<!-- -->
  <footer class="bg-[#081236]">
    <div class="max-w-5xl mx-auto flex flex-col md:flex-row items-between py-12 px-12 lg::px-0">
      <div class="w-full">
        <ul class="flex flex-col justify-start">
          <li class="text-white text-[16px] before:content-['A'] before:flex flex flex-row text-[#00A0E9] font-ViceCitySans">
            <span class="ml-2 text-white">1F., No.115, Sec. 1, Hangzhou S. Rd., Zhongzheng<br>Dist., Taipei City , Taiwan(R.O.C)</span>
          </li>
          <li class="py-6 text-white text-[16px] before:content-['E'] before:flex flex flex-row text-[#00A0E9] font-ViceCitySans">
            <span class="ml-2 text-white"><a href="mailto:service@lightmatrix3d.com">service@lightmatrix3d.com</a></span>
          </li>
          <li class="text-white text-[16px] before:content-['T'] before:flex flex flex-row text-[#00A0E9] font-ViceCitySans">
            <span class="ml-2 text-white"><a href="tel:0227133817">+886 2-2713-3817</a></span>
          </li>
          <li class="text-white text-[16px] before:content-['F'] before:flex flex flex-row text-[#00A0E9] font-ViceCitySans">
            <span class="ml-2 text-white"><a href="tel:0227133915">+886 2-2713-3915</a></span>
          </li>
        </ul>
      </div>
      <div class="flex flex-col items-center md:items-end justify-end w-full">
        <img loading="lazy" src="../assets/image/lightmaltrix_logo.png" width="160px" class="mx-auto sm:mx-0 pt-[6rem] sm:pt-0 pb-[1rem] sm:pb-0" alt="lightmatrix">
        <p class="lg:pt-10 text-white text-[16px] font-ViceCitySans">Copyright © 2022 LightMatrix Inc. All Rights Reserved</p>
      </div>
    </div>
  </footer>

  <div 
  id="back-to-top" 
  class="fixed right-8 bottom-8 rounded-full bg-white w-[45px] h-[45px] flex justify-center items-center shadow z-30 cursor-pointer">
    <button 
    type="button" 
    @click="topFunction();">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
      </svg>
    </button>
  </div>
  </div>

  <teleport to="body">
  	<div 
  	ref="modal"
  	v-if="VideoModal"
  	class="fixed top-0 left-0 bg-black/30 w-full h-screen flex justify-center items-center z-[999]">
  		<div class="max-w-2xl w-full mx-auto px-4">
	  		<div class="relative">
					<YoutubeVue3 
					allow="autoplay"
					ref="mbyoutube" 
					:videoid="play" 
					:controls="1"
					:modestbranding="1"
					:playsinline="1"
					:loop="1"
					class="w-full h-[250px] sm:h-[333px]" />

	  			<div class="absolute right-0 -top-12">
			  		<div 
			  		@click="VideoModal = false"
			  		class="rounded-full p-2 bg-gray-900 text-white flex flex-row items-center justify-center cursor-pointer">
			  			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
							  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
							</svg>
			  		</div>
			  	</div>
	  		</div>
  		</div>
  	</div>
  </teleport>

</template>