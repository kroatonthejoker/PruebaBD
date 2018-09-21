/*!
 * 
 * Google Sheets To HTML v0.9a
 * 
 * To use, simply replace the "tq?key=" value in the
 * URL below with your own unique Google document ID
 * 
 * The Google document's sharing must be set to public
 * 
 */

google.load('visualization', '1', {
    packages: ['table']
});
var visualization;

function drawVisualization() {
    var query = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1KlCSbSycOfoHnIgEmzUyd2PA9zb4GlYhhhrFSr8DYxQ&output=html&usp=sharing');
    query.setQuery('SELECT A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R label A "Título", B "Movimiento", C "Nivel Mov.", D "Posición", E "Espacio", F "Controlador", G "Duración", H "Rejugable", I "Duración Total", J "Precio Recomendado", K "Idioma", L "Subtítulos", M "PS4 Pro", N "Físico", O "vrgamecritics", P "realovirtual", Q "metacritic", R "Comentarios"');
    query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
    if (response.isError()) {
        alert('There was a problem with your query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
    var data = response.getDataTable();
    visualization = new google.visualization.Table(document.getElementById('table'));
    visualization.draw(data, {
        allowHtml: true,
        legend: 'bottom'
    });
}
google.setOnLoadCallback(drawVisualization);
