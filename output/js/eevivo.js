
function initializeFields() {
	// from cookie
	$('.save-this-data').each( function () {
	  file_name = "eev";
	  $(this).val( $.cookie(file_name+":"+$(this).attr('id')) );
	});
	
	// from fields
	$('#show-evaluated-name').text( $('#evaluated_name').val() );
	$('#show-evaluator-name').text( $('#evaluator_name').val() );
	for(i=1;i<=5;i+=1){
		var value = parseInt($('#asana_'+i).val());
		$('#asana_name_'+i).text($(asanas).get(value));
	}
}
initializeFields();

function saveObject(object){
	file_name = "eev";
  	cookie_name = file_name+":"+$(object).attr('id');
  	cookie_value = $(object).val();
  	// cookie expires in one month
  	$.cookie(cookie_name, cookie_value,{ expires: 31 });
}

// SET AUTO-SAVE
$('.save-this-data').change( function() {
  saveObject( $(this) );
});

// SORTEO
// SUM
  // initialize on load
  new_val = parseInt($('#dem_con_1').val()) + parseInt($('#ejec_1').val())
  $('#show-asana-1-tot').text( new_val )
  $('#asana_tot_1').val( new_val )

  // set onChange updates
  $('#dem_con_1').change( function() {
    new_val = parseInt($(this).val()) + parseInt($('#ejec_1').val())
    $('#show-asana-1-tot').text( new_val )
    $('#asana_tot_1').val( new_val )
  });

  $('#ejec_1').change( function() {
    new_val = parseInt($(this).val()) + parseInt($('#dem_con_1').val())
    $('#show-asana-1-tot').text( new_val )
    $('#asana_tot_1').val( new_val )
  });
  // initialize on load
  new_val = parseInt($('#dem_con_2').val()) + parseInt($('#ejec_2').val())
  $('#show-asana-2-tot').text( new_val )
  $('#asana_tot_2').val( new_val )

  // set onChange updates
  $('#dem_con_2').change( function() {
    new_val = parseInt($(this).val()) + parseInt($('#ejec_2').val())
    $('#show-asana-2-tot').text( new_val )
    $('#asana_tot_2').val( new_val )
  });

  $('#ejec_2').change( function() {
    new_val = parseInt($(this).val()) + parseInt($('#dem_con_2').val())
    $('#show-asana-2-tot').text( new_val )
    $('#asana_tot_2').val( new_val )
  });
  // initialize on load
  new_val = parseInt($('#dem_con_3').val()) + parseInt($('#ejec_3').val())
  $('#show-asana-3-tot').text( new_val )
  $('#asana_tot_3').val( new_val )

  // set onChange updates
  $('#dem_con_3').change( function() {
    new_val = parseInt($(this).val()) + parseInt($('#ejec_3').val())
    $('#show-asana-3-tot').text( new_val )
    $('#asana_tot_3').val( new_val )
  });

  $('#ejec_3').change( function() {
    new_val = parseInt($(this).val()) + parseInt($('#dem_con_3').val())
    $('#show-asana-3-tot').text( new_val )
    $('#asana_tot_3').val( new_val )
  });
  // initialize on load
  new_val = parseInt($('#dem_con_4').val()) + parseInt($('#ejec_4').val())
  $('#show-asana-4-tot').text( new_val )
  $('#asana_tot_4').val( new_val )

  // set onChange updates
  $('#dem_con_4').change( function() {
    new_val = parseInt($(this).val()) + parseInt($('#ejec_4').val())
    $('#show-asana-4-tot').text( new_val )
    $('#asana_tot_4').val( new_val )
  });

  $('#ejec_4').change( function() {
    new_val = parseInt($(this).val()) + parseInt($('#dem_con_4').val())
    $('#show-asana-4-tot').text( new_val )
    $('#asana_tot_4').val( new_val )
  });
  // initialize on load
  new_val = parseInt($('#dem_con_5').val()) + parseInt($('#ejec_5').val())
  $('#show-asana-5-tot').text( new_val )
  $('#asana_tot_5').val( new_val )

  // set onChange updates
  $('#dem_con_5').change( function() {
    new_val = parseInt($(this).val()) + parseInt($('#ejec_5').val())
    $('#show-asana-5-tot').text( new_val )
    $('#asana_tot_5').val( new_val )
  });

  $('#ejec_5').change( function() {
    new_val = parseInt($(this).val()) + parseInt($('#dem_con_5').val())
    $('#show-asana-5-tot').text( new_val )
    $('#asana_tot_5').val( new_val )
  });

// AVERAGE
function calculateSorteoAvg() {
  sum = 0.0
  $('.sum-on-sorteo_avg').each( function(){ sum += parseInt($(this).val()); });
  return sum/$('.sum-on-sorteo_avg').length
}

// initalize on load
$('#sorteo_avg').val( calculateSorteoAvg() );
$('#show-sorteo_avg').text( calculateSorteoAvg() );

$('.update-sorteo_avg').change( function() {
  $('#sorteo_avg').val( calculateSorteoAvg() );
  $('#show-sorteo_avg').text( calculateSorteoAvg() );
});