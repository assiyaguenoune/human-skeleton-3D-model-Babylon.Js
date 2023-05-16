const canvas = document.getElementById("canvas");
const engine = new BABYLON.Engine(canvas, true);

// here the doc for Load function: //doc.babylonjs.com/typedoc/classes/babylon.sceneloader#load
BABYLON.SceneLoader.Load("", "cheval.babylon", engine, function (scene) {
  //as this .babylon example hasn't camera in it, we have to create one
  const camera = new BABYLON.ArcRotateCamera("Camera", 1, 1, 4, BABYLON.Vector3.Zero(), scene);
  camera.attachControl(canvas, false);

  scene.clearColor = new BABYLON.Color3(1, 1, 1);
  //scene.ambientColor = new BABYLON.Color3.White();

  engine.runRenderLoop(function () {
    scene.render();
  });

  window.addEventListener("resize", function () {
    engine.resize();
  });
});