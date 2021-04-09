var renderer, scene, camera, model;

var xRotate = 0;
var yRotate = 0;
var zRotate = 0;

var xTranslate = 0;
var yTranslate = 0;
var zTranslate = 0;

var xScale = 0;
var yScale = 0;
var zScale = 0;

var ww = window.innerWidth,
    wh = window.innerHeight;

function init() {

    document.getElementById("xTranslation").onchange = function () {
        xTranslate = parseFloat(event.target.value);
        requestAnimationFrame(render);
        model.position.x = xTranslate;

        console.log('xTranslate: ' + xTranslate);
    };
    document.getElementById("yTranslation").onchange = function () {
        yTranslate = parseFloat(event.target.value);
        model.position.y = yTranslate;
        console.log('yTranslate: ' + yTranslate);
        requestAnimationFrame(render);
    };
    document.getElementById("zTranslation").onchange = function () {
        zTranslate = parseFloat(event.target.value);
        model.position.z = zTranslate;
        console.log('zTranslate: ' + yTranslate);
        requestAnimationFrame(render);
    };
    document.getElementById("xScaling").onchange = function () {
        xScale = parseFloat(event.target.value);
        requestAnimationFrame(render);
    };
    document.getElementById("yScaling").onchange = function () {
        yScale = parseFloat(event.target.value);
        requestAnimationFrame(render);
    };
    document.getElementById("yScaling").onchange = function () {
        zScale = parseFloat(event.target.value);
        requestAnimationFrame(render);
    };
    document.getElementById("xRotation").onchange = function () {
        xRotate = parseFloat(event.target.value);
        requestAnimationFrame(render);
    };
    document.getElementById("yRotation").onchange = function () {
        yRotate = parseFloat(event.target.value);
        requestAnimationFrame(render);
    };
    document.getElementById("zRotation").onchange = function () {
        zRotate = parseFloat(event.target.value);
        requestAnimationFrame(render);
    };
    renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById('gl-canvas')
    });
    renderer.setSize(ww, wh);

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(50, ww / wh, 0.1, 10000);
    camera.position.set(0, 0, 500);
    scene.add(camera);

    //Add a light in the scene
    directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(0, 0, 350);
    directionalLight.lookAt(new THREE.Vector3(0, 0, 0));
    scene.add(directionalLight);

    //Load the obj file

    loadOBJ();    
    requestAnimationFrame(render);

}

var loadOBJ = function () {

    //Manager from ThreeJs to track a loader and its status
    var manager = new THREE.LoadingManager();
    //Loader for Obj from Three.js
    var loader = new THREE.OBJLoader(manager);

    //Launch loading of the obj file, addBananaInScene is the callback when it's ready 
    loader.load('https://raw.githubusercontent.com/Alecfut07/Graficas-y-visualizacion/master/Casquito.obj', addModeltoScene);

};

var addModeltoScene = function (object) {
    model = object;
    model.needsUpdate=true;


    //model.TranslateX(xTranslate);
    //model.TranslateY(yTranslate);
    //model.TranslateZ(zTranslate);
    model.scale.x = 2 + xScale;
    model.scale.y = 2 + yScale;
    model.scale.z = 2 + zScale;




    object.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
            child.material.color = new THREE.Color('pink');
            child.material.needsUpdate = true;
            child.geometry.computeVertexNormals();
        }
    });
    //aqui se agrega el modelo a la escena
    scene.add(model);
    render();
};


var render = function () {
    requestAnimationFrame(render);
    model.rotation.x += xRotate;
    model.rotation.y += yRotate;
    model.rotation.z += zRotate;
    model.updateMatrix();
    renderer.render(scene, camera);
};

init();