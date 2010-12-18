
var store;
store = new Persist.Store('eevivo');
initializeFields();
enableAutoSave();

// initialices all fields with data saved on persistant storage
function initializeFields() {
	// from cookie
	$('.save-this-data').each( function () {
	  file_name = "eev";
	  key = file_name+":"+$(this).attr('id');
	  $(this).val( readFromLocalDB(key) );
	});
	
	// from fields
	$('#show-evaluated-name').text( $('#evaluated_name').val() );
	$('.show-evaluator-name').text(  );
	evaluator_name = $('#evaluator_name').val();
  $('.show-evaluator-name').each(function(){
    $(this).text( evaluator_name );
  });
	$('#show_coreo_total').text( $('#coreo_total').val() );
	for(i=1;i<=5;i+=1){
		var value = parseInt($('#asana_'+i).val());
		$('#asana_name_'+i).text($(asanas).get(value));
	}
}

// saves object value
function saveObject(object){	
	file_name = "eev";
  	data_name = file_name+":"+$(object).attr('id');
  	data_value = $(object).val();
  	// Cookies
  	$.cookie(data_name, data_value,{ expires: 31 });
  	// PersistJS
  	// store.set(data_name,data_value);
}

// retrieves value
function readFromLocalDB(key){
	var ret_value;
	// Cookies
	 return $.cookie(key);
  // PersistJS
	/* store.get(key,function(ok,val){
	 	if(ok){
	 		ret_value = val;
	 	}
	 });
	 return ret_value;*/
}

// set onChange auto-save to CSS selected fields
function enableAutoSave() {
	$('.save-this-data').change( function() {
	  	saveObject( $(this) );
	});
}
