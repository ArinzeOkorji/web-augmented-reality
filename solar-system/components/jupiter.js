AFRAME.registerComponent('jupiter', {
    schema: {
        
    },

    init: function () {
        this.el.setAttribute('material', {src:"./textures/jupiter.jpg"});
        this.el.setAttribute('radius', "2.55");
        this.el.setAttribute('position', "3 0 -6");
        this.data.orbitRadius = 83;
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
      const date = time * 0.0004;
    this.el.object3D.position.set(
      -Math.cos(date) * this.data.orbitRadius,
      0,
      Math.sin(date) * this.data.orbitRadius
    );
    }
});
