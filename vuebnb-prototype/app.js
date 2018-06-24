var vue = new Vue({
	el:'#app',
	data:{
		title: sample.title,
		address: sample.address,
		about: sample.about,
		headerImageStyle: {"background-image": "url(sample/header.jpg)"},
		amenities: sample.amenities,
		prices: sample.prices,
		contracted: true,
		modalOpen: false
	},
	methods:{
		showMore: function(){
			this.contracted = false;
		}
	},
	watch:{
		modalOpen: function(){
			var className="modal-open";
			if(this.modalOpen){
			   document.body.classList.add(className);		
			}else{
			   document.body.classList.remove(className);	
			}
		}
	}
});