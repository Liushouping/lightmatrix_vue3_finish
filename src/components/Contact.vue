<script>
import {  inject, ref, onMounted } from 'vue'
import GoogleMap from '../components/GoogleMap.vue'
export default {
	props: ['burcolor','isburimg'],
  setup(){
  	const swal = inject('$swal')
  	const loader = ref(false)
    onMounted(()=> {

			const form = document.getElementById("form");
			const result = document.getElementById("result");
			
			form.addEventListener("submit", function (e) {
			  const formData = new FormData(form);
			  e.preventDefault();
			  var object = {};
			  formData.forEach((value, key) => {
			    object[key] = value;
			  });
			  var json = JSON.stringify(object);
			  // result.innerHTML = "Please wait...";
			  loader.value = true;
			  fetch("https://api.web3forms.com/submit", {
			    method: "POST",
			    headers: {
			      "Content-Type": "application/json",
			      Accept: "application/json"
			    },
			    body: json
			  })
			    .then(async (response) => {
			      let json = await response.json();

			      if (response.status == 200) {
			      	swal.fire({
				    		toast: true,
				    		showConfirmButton: false,
				    		timer: 3000,
				    		timerProgressBar: true,
				    		animation: true,
				    		position: 'top-end',
							  icon: 'success',
							  title: 'Success Sent mail！',
							})
			        // result.innerHTML = json.message;
			        // result.classList.remove("text-gray-500");
			        // result.classList.add("text-green-500");
			        loader.value = false;
			      } else {
			        console.log(response);
			        swal.fire({
				    		toast: true,
				    		showConfirmButton: false,
				    		timer: 3000,
				    		timerProgressBar: true,
				    		animation: true,
				    		position: 'top-end',
							  icon: 'error',
							  title: 'Error',
							})
			        // result.innerHTML = json.message;
			        // result.classList.remove("text-gray-500");
			        // result.classList.add("text-red-500");
			      }
			    })
			    .catch((error) => {
			    	swal.fire({
				    		toast: true,
				    		showConfirmButton: false,
				    		timer: 3000,
				    		timerProgressBar: true,
				    		animation: true,
				    		position: 'top-end',
							  icon: 'info',
							  title: 'Something went wrong!',
							})
			      // console.log(error);
			      // result.innerHTML = "Something went wrong!";
			    })
			    .then(function () {
			      form.reset();
			      // setTimeout(() => {
			      //   result.style.display = "none";
			      // }, 10000);
			    });
			});
    });
    return {
    	loader
    }
  },
  components: {
  	GoogleMap
  },
}
</script>

<template>
	<div class="w-full h-full bg-gray-900 flex justify-center items-center lg:px-6 py-24">
		<div class="w-[75%] lg:w-[50%] flex flex-col lg:flex-row space-x-0 lg:space-x-6 justify-center items-start">
			<div class="w-full lg:w-1/2">
				<slot name="header"></slot>
				<p class="text-white text-[12px]">Service base/information:<br>If you have business requirements, please contact us, or using the form below to info us. After receiving the message, we will contact you immediately</p>
				<ul class="flex flex-col justify-start pt-4">
		          <li class="text-white text-[12px] before:content-['A'] before:flex flex flex-row text-[#00A0E9]">
		            <span class="ml-2 text-white">1F., No.115, Sec. 1, Hangzhou S. Rd., Zhongzheng Dist., Taipei City , Taiwan(R.O.C)</span>
		          </li>
		          <li class="py-6 text-white text-[14px] before:content-['E'] before:flex flex flex-row text-[#00A0E9]">
		            <span class="ml-2 text-white"><a href="mailto:joe@lightmatrix3d.com">service@lightmatrix3d.com</a></span>
		          </li>
		          <li class="text-white text-[14px] before:content-['T'] before:flex flex flex-row text-[#00A0E9]">
		            <span class="ml-2 text-white"><a href="tel:0227133817">+886 2 2713-3817</a></span>
		          </li>
		          <li class="text-white text-[14px] before:content-['F'] before:flex flex flex-row text-[#00A0E9]">
		            <span class="ml-2 text-white"><a href="tel:0227133915">+886 2 2713-3915</a></span>
		          </li>
		          <li class="text-white text-[14px] before:content-['T'] before:flex flex flex-row text-[#00A0E9]">
		            <span class="ml-2 text-white">Monday to Friday 10:00-19:00</span>
		          </li>
		        </ul>
			</div>
			<div class="w-full lg:w-1/2">
				<form action="https://api.web3forms.com/submit" id="form" method="POST" class="flex flex-col space-y-6 justify-start items-end">

				    <input type="hidden" name="access_key" value="eeefabc4-d597-46b9-9c6a-d02864ce4d15">
				    <input type="hidden" name="subject" value="Your site has received a web message">
				    <input type="hidden" name="from_name" value="LightMatrix">

				    <input 
				    class="w-full bg-white bg-opacity-50 text-white text-[14px] placeholder:text-white py-2 px-6 tracking-[1px] focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-2" 
				    type="text" 
				    name="name" 
				    placeholder="Name" 
				    required>
				    <input 
				    class="w-full bg-white bg-opacity-50 text-white text-[14px] placeholder:text-white py-2 px-6 tracking-[1px] focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-2" 
				    type="email" 
				    name="email" 
				    placeholder="Email" 
				    required>
				    <input 
				    class="w-full bg-white bg-opacity-50 text-white text-[14px] placeholder:text-white py-2 px-6 tracking-[1px] focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-2" 
				    type="tel" 
				    name="phone" 
				    placeholder="Phone No." 
				    required>

				    <textarea 
				    class="w-full bg-white bg-opacity-50 text-white text-[12px] placeholder:text-white py-2 px-6 tracking-[1px] border border-0 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-2" 
				    rows="5" 
				    name="message" 
				    placeholder="Please leave your messages here." 
				    required></textarea>
				    <div class="h-captcha" data-captcha="true"></div>
				    <button 
				    @click.enter="submit"
				    type="submit" 
				    class="sm:mx-0 btn flex flex-row justify-center items-center">
					    <svg v-if="loader" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
					    Submit
				  	</button>
				</form>

			</div>
		</div>
	</div>
	<div class="relative bg-gray-900 w-full h-[450px]">
		<GoogleMap />
	</div>
</template>

<style>
	#map-canvas {
  height: 100%;
  position: absolute; 
  top: 0; 
  bottom: -200px; 
  left: 0; 
  right: 0; 
  z-index: 0;
}

#container {
  z-index: 100;
  position: relative;
}

input, textarea {
   font-size: initial !important;
}
</style>