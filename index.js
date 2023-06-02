window.addEventListener('DOMContentLoaded', function(){

  var canvas = document.getElementById('canvas');

  var engine = new BABYLON.Engine(canvas, true);
  var createScene = function(){
      
      var scene = new BABYLON.Scene(engine); //create scene

     
      scene.clearColor = new BABYLON.Color3.White();  //set scene color

      const camera = new BABYLON.ArcRotateCamera("Camera", 1, 1, 4, BABYLON.Vector3.Zero(), scene);  //add a camera 
      camera.attachControl(canvas, false);
      
      const light = new BABYLON.PointLight("light",new BABYLON.Vector3(5,10,0), scene); // Lightting
      light.parent= camera; // light color
      light.diffuse = new BABYLON.Color3(1,1,1);

      scene.actionManager= new BABYLON.ActionManager(scene);  //Ceate action
      scene.actionManager.registerAction(
          new BABYLON.ExecuteCodeAction(
              {trigger : BABYLON.ActionManager.OnKeyUpTrigger, parameter : ""},
              function (){
                  light.setEnabled(!light.isEnabled());
              }));

      BABYLON.SceneLoader.ImportMesh("","","cheval.babylon",scene, //Load scene
              function(newMeshes){
                  newMeshes.forEach(function(mesh){
                      mesh.rotation= new BABYLON.Vector3(
                          BABYLON.Tools.ToRadians(45),0,0);
                  })});           

      return scene;
  }

  var scene = createScene();
  engine.runRenderLoop(function(){
      scene.render();

  }); 

});