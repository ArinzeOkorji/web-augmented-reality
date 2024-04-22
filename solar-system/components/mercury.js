AFRAME.registerComponent('mercury', {
  schema: {
  },

  init: function () {
    // Do something when component first attached.
    this.el.setAttribute('material', { src: './textures/mercury.jpg' });
    this.el.setAttribute('radius', "0.4");
    this.el.setAttribute('position', "2 0 0");
    this.data.orbitRadius = 6;
  },

  update: function () {
    console.log(this.el.object3D)
    // Do something when component's data is updated.
  },

  remove: function () {
    // Do something the component or its entity is detached.
  },

  tick: function (time, timeDelta) {
    // Do something on every scene tick or frame.
    const date = time * 0.002;
    this.el.object3D.position.set(
      -Math.cos(date) * this.data.orbitRadius,
      0,
      Math.sin(date) * this.data.orbitRadius
    );
  }
});
