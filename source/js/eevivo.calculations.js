
function calculateSorteoAvg() {
  sum = 0.0
  $('.sum-on-sorteo_avg').each( function(){ sum += parseInt($(this).val()); });
  return sum/$('.sum-on-sorteo_avg').length
}

function totalPreYoga(){
	var total = 0;
	$('.sum-in-preyoga_total').each(function(){total += parseInt($(this).val())});
	return total;
};
	
function totalYoga(){
	var total = 0;
	$('.sum-in-yoga_total').each(function(){total += parseInt($(this).val())});
	return total;
};
	
function notaPractica(){
  nota_coreo = totalCoreo();
  nota_sorteo = calculateSorteoAvg()*10;
  return (nota_coreo + nota_sorteo) / 2.0;
}
  
function notaClase(){
  max_yoga = 105;
  nota_yoga = totalYoga()*100.0/max_yoga;
  max_preyoga = 39;
  nota_preyoga = totalPreYoga()*100.0/max_preyoga;
  return (nota_yoga+nota_preyoga)/2.0;
}

function totalDisertacion(){
	var total = 0;
	$('.sum-in-disertacion_total').each(function(){total += parseInt($(this).val())});
	return total;
}

function notaDisertacion(){
  max_disertacion = 60;
  return totalDisertacion()*100.0/max_disertacion;
}
