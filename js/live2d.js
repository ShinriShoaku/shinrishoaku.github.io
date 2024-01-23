const cubism2Model = 'live2d/gremory.model.json';

(async function main() {
  const app = new PIXI.Application({
    view: document.getElementById("canvas"),
    autoStart: true,
    resizeTo: window,
    transparent: true,
  });

  const model2 = await PIXI.live2d.Live2DModel.from(cubism2Model);

  // Set the position to the end horizontally and at the bottom vertically
  model2.position.set((app.screen.width - model2.width * 0.31), app.screen.height - model2.height * 0.25) / 2;

  app.stage.addChild(model2);

  model2.scale.set(0.32);

  // Add an onclick event handler to start animation on head touch
  model2.interactive = true;
  model2.buttonMode = true;

  // Wait for the model to be fully loaded
 model2.on('pointertap', (event) => {
    const headPart = model2.masks.getElementById('D_REF.PT_HEAD');

    // Check if the click is on the head part
    if (headPart && headPart.containsPoint(event.data.global)) {
      // Start animation logic for the head
      startHeadAnimation();
    }
  });

  function startHeadAnimation() {
    // Implement your animation logic here
    // For example, you might want to play a specific animation for the head
    // model2.animator.playAnimationByName('your_head_animation_name');
    console.log('Head touched, starting animation...');
  }
})();
