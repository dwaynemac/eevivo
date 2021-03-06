var asanas = ["shavásana", "puránásana", "sukhásana", "samánásana", "swástikásana", "siddhásana", "padmásana", "vírásana", "vajrásana", "idásana", "pingalásana", "sushumnásana", "bhadrásana", "pádásana", "prathanásana", "trishúlásana", "vrikshásana", "êkapáda úrdhwásana", "Shivanatarájásana", "natarájásana", "úrdhwa dhanurásana", "jánúrdhwa sírshásana", "jánúrdhwásana", "gárudásana", "pakshásana", "úrdhwa pádaprasáranásana", "prasárana êkapádásana", "ádyásana", "grivavartênásana", "báhuvartênásana", "nitambásana", "chandrásana", "trikônásana", "prishthásana", "prishthakônásana", "jánurásana", "sírángushthásana", "pádaprasáranásana", "parighásana", "hanumanásana", "púrnásana", "hastinásana", "talásana", "chakrásana", "kandarásana", "pádahastásana", "mahá shaktyásana", "parshwôttánásana", "dwahastásana", "êkahastásana", "utkásana", "mandukásana", "ômkárásana", "lôlásana", "paschimôttánásana", "upavishta kônásana", "prasáranásana", "vajrôlyásana", "jánusírshásana", "stambhásana", "vamadêvásana", "kapôdásana", "vakrásana", "matsyêndrásana", "shírapádásana", "upádhásana", "kukkutásana", "samakônásana", "gômukhásana", "párvatásana", "garbhásana", "yôgásana", "kúrmásana", "hamsásana", "bhujangásana", "sarpásana", "sharlabhásana", "makarásana", "dhanurásana", "dôlásana", "bhêgásana", "chatuspádásana", "tripádásana", "báhupádásana", "váyútkásana", "angushthásana", "banchêásana", "simhásana", "mayúrásana", "kákásana", "mêrudandásana", "natapádásana", "chalanásana", "vatyanásana", "katikásana", "ushtrásana", "natashíra vajrásana", "gôkarnásana", "viparíta karanyásana", "halásana", "sarvángásana", "viparíta halásana", "matsyásana", "grivásana", "sírshásana", "kapálásana", "dháranásana", "vrishkásana"];
var last = [];

function getRandomAsana( ) {
	do {
		index = $.random($(asanas).length)
	} while( $(last).index(index) != -1 )
	saveLast( index );
	return [index, $(asanas).get(index)];
}

function saveLast( value ) {
	last.push( value );
	if(last.length > 5){
		last.shift();
	}	
};

function makeSorteo( ) {
	for(i=0;i<=5;i+=1){
		var new_asana = getRandomAsana()
		// this won't be considered as change and so won't be auto-saved, save manually
		$('#asana_'+i).val( $(new_asana).get(0) );
		saveObject( $('#asana_'+i) );
		$('#asana_name_'+i).text( $(new_asana).get(1) );
	}
}