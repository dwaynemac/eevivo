// PDF PRINTER
$('#print-to-pdf').click( function() {

  var doc = new jsPDF();
  doc.setFontSize(22);
  doc.text(20, 20, 'Exámen ante la Federación');
  doc.setFontSize(16);
  points_apart = 10
  $('.general-data').each( function() {
    doc.text(20, 20 + points_apart,$(this).val());
    points_apart = points_apart + 10
  });

  doc.addPage();
  doc.setFontSize(22);
  doc.text(20, 20, 'Sorteo');
  doc.setFontSize(16);

  points_apart = 10;
  $('.sorteo').each( function() {
    doc.text(20, 20 + points_apart, $(this).val() );
    points_apart = points_apart + 10;
  });

  doc.output('datauri');
});