
var xRotate=0.01;
var yRotate=0;
var zRotate=0;

var xTranslate=0;
var yTranslate=0;
var zTranslate=0;

var xScale=0;
var yScale=0;
var zScale=0;

var ww = window.innerWidth,
	wh = window.innerHeight;

function init(){
  
  document.getElementById("xTranslation").onchange=function(){
  xTranslate = //parsear slider
  console.log(xT);};
document.getElementById("yTranslation").onchange=function(){
  yTranslate = //parsear slider
document.getElementById("zTranslation").onchange=function(){
  zTranslate = //parsear slider 

	renderer = new THREE.WebGLRenderer({canvas : document.getElementById('gl-canvas')});
	renderer.setSize(ww,wh);

	scene = new THREE.Scene();

	camera = new THREE.PerspectiveCamera(50,ww/wh, 0.1, 10000 );
	camera.position.set(0,0,500);
	scene.add(camera);

	directionalLight = new THREE.DirectionalLight( 0xffffff, 0.8 );
	directionalLight.position.set( 0, 0, 350 );
	directionalLight.lookAt(new THREE.Vector3(0,0,0));
	scene.add( directionalLight );

	loadOBJ();
}

var loadOBJ = function(){

	var manager = new THREE.LoadingManager();
	var loader = new THREE.OBJLoader( manager );
  
	//Launch loading of the obj file, addBananaInScene is the callback when it's ready 
	loader.load( 'https://raw.githubusercontent.com/Alecfut07/Graficas-y-visualizacion/master/Casquito.obj', addToScene);

};