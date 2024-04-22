AFRAME.registerComponent('venus', {
    schema: {
        
    },

    init: function () {
        this.el.setAttribute('material', {src: "./textures/venus.jpg"});
        this.el.setAttribute('radius',"0.5");
        this.el.setAttribute('position',"-3 0 0");
        this.data.orbitRadius = 12;
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
      const date = time * 0.001;
    this.el.object3D.position.set(
      -Math.cos(date) * this.data.orbitRadius,
      0,
      Math.sin(date) * this.data.orbitRadius
    );
    }
});
