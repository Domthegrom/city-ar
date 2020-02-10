(() => {
    console.log("HERE")
    const modelViewer = document.querySelector('#lamp');
    const orbitCycle = [
      '45deg 55deg 4m',
      '-60deg 110deg 2m',
      modelViewer.cameraOrbit
    ];
    console.log(modelViewer.getFieldOfView, "???")
  
    setInterval(() => {
      const currentOrbitIndex = orbitCycle.indexOf(modelViewer.cameraOrbit);
      modelViewer.cameraOrbit =
          orbitCycle[(currentOrbitIndex + 1) % orbitCycle.length];
    }, 3000);
  })();




  http://127.0.0.1:localhost:3000