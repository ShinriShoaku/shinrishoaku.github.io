const cubism2Model =
  "../live2d/gremory.model.json";

(async function main() {
  const app = new PIXI.Application({
    view: document.getElementById("canvas"),
    autoStart: true,
    resizeTo: window,
    transparent: true, // Set this to true for a transparent background
  });

  const model2 = await PIXI.live2d.Live2DModel.from(cubism2Model);

  // Set the position to the end horizontally and at the bottom vertically
  model2.position.set((app.screen.width - model2.width * 0.3) , app.screen.height - model2.height * 0.3);

  app.stage.addChild(model2);

  model2.scale.set(0.3);
})();
