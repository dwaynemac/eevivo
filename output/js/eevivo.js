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