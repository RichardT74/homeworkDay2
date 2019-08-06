import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
	new Vue({
		el: "#app",
		data: {
			currencies: [],
			selectedCurrency: null,
			seclectedCurrencyRate: ""
		},

     mounted(){
			 this.getCurrency()
		 },

		methods: {
			getCurrency: function(){
				fetch("https://api.exchangeratesapi.io/latest")
				.then(res => res.json())
				.then(currencies => this.currencies = currencies.rates)
			     }
			  }
})
})
