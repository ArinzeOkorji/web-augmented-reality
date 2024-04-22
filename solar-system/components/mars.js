AFRAME.registerComponent('mars', {
    schema: {
        
    },

    init: function () {
        this.el.setAttribute('material', {src:"./textures/mars.jpg"});
        this.el.setAttribute('radius', "0.65");
        this.el.setAttribute('position', "0 0 -6");
        this.data.orbitRadius = 23;
      // Do something when component first attached.
    },

    update: function () {
      // Do something when component's data is updated.
    },

    remove: function () {
      // Do something the component or its entity is detached.
    },

    tick: function (time, timeDelta) {
      // Do something on every scene tick or frame.
      const date = time * 0.0006;
    this.el.object3D.position.set(
      -Math.cos(date) * this.data.orbitRadius,
      0,
      Math.sin(date) * this.data.orbitRadius
    );
    }
});
