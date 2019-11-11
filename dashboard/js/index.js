$(document).ready(function() {
	/*Variables para el grafico general*/
	var etiquetas = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
	var data_absolute = [19, 35, 40, 22, 57, 45, 60, 39, 44, 28, 32, 20];
	var var_grafico_principal = document.getElementById("grafico-principal").getContext("2d");

	/*Configuración del grafico general*/
	var data_stats = {
		labels: etiquetas,
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

	var options_stats = {
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

	/*Detonamiento de gráficos*/
	var grafico_principal = new Chart(var_grafico_principal, {
		type: "line",
		data: data_stats,
		options: options_stats
	});

	setDataChart(data_absolute);

	/*ÁREA DE FUNCIONES*/
	/*Actualización de datos a gráfico general*/
	function setDataChart(data_fill) {
		grafico_principal.data.datasets[0].data = data_fill;
		grafico_principal.update();
	}

	/*Remover datos a grafico*/
	function removeDataChart() {}
});