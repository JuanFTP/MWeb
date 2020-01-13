$(document).ready(function() {
	/*Variables para el grafico general*/
	let grafico_principal;
	let label_principal = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
	let data_principal = [19, 35, 40, 22, 57, 45, 60, 39, 44, 28, 32, 20];
	let var_grafico_principal = document.getElementById("grafico-principal").getContext("2d");
	let conf_data_principal;
	let conf_options_principal;

	/*Variables del grupo de gráficos*/
	let label_grupo = ["Facebook", "Twitter", "Instagram"];
	let group_color = ["#68ABFF", "#85EFFE", "#FF92B0"];
	let max_limit = 100;
	let min_limit = 0;

	/*Primer mes*/
	let grafico_primer_mes;
	let data_primer_mes = [40, 85, 90];
	let var_grafico_primer_mes = document.getElementById("grafico-primer-mes").getContext("2d");
	let conf_data_primer_mes;
	let conf_options_primer_mes;

	/*Configuracion grafico principal*/
	conf_data_principal = {
		labels: label_principal,
		datasets: [{
			borderColor: "#618EFF",
			backgroundColor: "rgba(97, 142, 255, 0.10)",
			label: "Rendimiento",
			fill: "start",
			pointStyle: "circle",
			pointBackgroundColor: "#618EFF",
			borderWidth: 1.5,
			pointRadius: 1.5,
			pointHoverRadius: 2,
			stepped: true,
			tension: 0
		}]
	};

	conf_options_principal = {
		responsive: true,
		responsiveAnimationDuration: 500,
		maintainAspectRatio: false,
		layout: {
			padding: {
				left: 0,
				right: 0,
				top: 20,
				bottom: 0
			}
		},
		legend: {
			position: "top",
			display: false
		},
		tooltips: {
			backgroundColor: "rgba(252, 252, 252, 0.9)",
			titleFontColor: "#618EFF",
			bodyFontColor: "#618EFF",
			borderColor: "#618EFF",
			borderWidth: 0.5,
			xPadding: 10, 
			yPadding: 10
		},
		scales: {
			xAxes: [{
				gridLines: {
					display: true,
					color: "#F1F1F1"
				},
				scaleLabel: {
					display: false,
					labelString: "Meses",
					fontColor: "#1C2451"
				}
			}],
			yAxes: [{
				gridLines: {
					display: false,
					color: "#F1F1F1"
				},
				scaleLabel: {
					display: false,
					labelString: "Unidades",
					fontColor: "#1C2451"
				},
				ticks: {
					suggestedMax: 80,
					suggestedMin: 0
				}
			}]
		}
	};

	/*Configuración grafioc primer mes*/
	conf_data_primer_mes = {
		labels: label_grupo,
		datasets: [{
			data: data_primer_mes,
			backgroundColor: group_color,
			borderWidth: 10.0
		}]
	};

	conf_options_primer_mes = {
		responsive: true,
		responsiveAnimationDuration: 500,
		maintainAspectRatio: false,
		legend: {
			display: false
		},
		tooltips: {
			backgroundColor: "rgba(252, 252, 252, 0.9)",
			titleFontColor: "#618EFF",
			bodyFontColor: "#618EFF",
			borderColor: "#618EFF",
			borderWidth: 0.5,
			xPadding: 10, 
			yPadding: 10
		},
		scales: {
			xAxes: [{
				gridLines: {
					display: false
				},
				scaleLabel: {
					display: false
				},
				ticks: {
					display: false,
					suggestedMax: max_limit,
					suggestedMin: min_limit
				}
			}],
			yAxes: [{
				gridLines: {
					display: false
				},
				ticks: {
					display: true
				},
				scaleLabel: {
					display: false
				}
			}]
		}
	};

	/*Detonamiento de gráficos*/
	grafico_principal = new Chart(var_grafico_principal, {
		type: "line",
		data: conf_data_principal,
		options: conf_options_principal
	});

	/*Gráficos de tráfico de datos por mes*/
	grafico_primer_mes = new Chart(var_grafico_primer_mes, {
		type: 'horizontalBar',
		data: conf_data_primer_mes,
		options: conf_options_primer_mes
	});
	
	/*ÁREA DE FUNCIONES*/
	/*Actualización de datos a gráfico general*/
	function setDataChart(data_fill) {
		grafico_principal.data.datasets[0].data = data_fill;
		grafico_principal.update();
	}

	/*Actualización de datos del grafico del primer mes*/
	function setDataPrimerMes(data_fill) {
		
	}

	console.log(grafico_primer_mes);

	/*Detonamiento de datos*/
	setDataChart(data_principal);
	setDataPrimerMes(data_primer_mes);
});