var X_CLOUD = 100;
var Y_CLOUD = 10;
var HEIGHT_CLOUD = 270;
var WEIDTH_CLOUD = 420;
var text = 'Ура вы победили!';


function renderStatistics(ctx, names, times) {
    ctx.fillStyle =' rgba(0, 0, 0, 0.7)';
    ctx.fillRect(X_CLOUD+10, Y_CLOUD+10, WEIDTH_CLOUD, HEIGHT_CLOUD);
    ctx.fillStyle = 'white';
    ctx.fillRect(X_CLOUD, Y_CLOUD, WEIDTH_CLOUD, HEIGHT_CLOUD);
    ctx.fillStyle = 'black';
    ctx.textBaseline = 'hanging';
    ctx.fillText(text, (X_CLOUD + WEIDTH_CLOUD/3 ), Y_CLOUD + 10);
    // ctx.textBaseline = 'handing';
}
