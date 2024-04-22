AFRAME.registerComponent('vehicle', {
  schema: {},

  init: function () {
    // Do something when component first attached.
    this.carSpeed = 0;
    this.carAcceleration = 0.001;
    this.speedLimit = 1.5;
    // this.carHasCollided = false;

    this.el.addEventListener('obbcollisionstarted', (e) => {

      if (this.carIsMovingLeft) {
        this.carHasCollidedLeft = true;
      }
      if (this.carIsMovingRight) {
        this.carHasCollidedRight = true;
      }
    });
    this.el.addEventListener('obbcollisionended', (e) => {
      this.carHasCollidedLeft = false;
      this.carHasCollidedRight = false;
    });


    document.addEventListener('keydown', (e) => {

      if (e.key === 'w') {
          this.moveCarForward = true;
        this.carHasStoppedAcceleratingForward = false;
        this.carIsMoving = true;
       

      } else if (e.key === 's') {
          this.reverseCar = true;
        this.carHasStoppedReversing = false;
        this.carIsMoving = true;
        

        // if(this.carSpeed ) {
        //   this.reverseCar = false;
        // }

      } else if (e.key === 'd') {
        this.carIsMovingRight = true;

        // if(this.carIsMoving) {
        //   this.carSpeed += this.carAcceleration;
        // }
      } else if (e.key === 'a') {
        this.carIsMovingLeft = true;
        // if(this.carIsMoving) {
        //   this.carSpeed += this.carAcceleration;
        // }
      } else {
        return
      }

    })
    document.addEventListener('keyup', (e) => {
      if (e.key === 'w' || e.key === 's') {
        this.carIsMoving = false;
        console.log('stop moving')
      } else if (e.key === 'd') {
        this.carIsMovingRight = false;
      } else if (e.key === 'a') {
        this.carIsMovingLeft = false;
      } else {
        return
      }

    })
  },

  update: function () {
    // Do something when component's data is updated.
  },

  remove: function () {
    // Do something the component or its entity is detached.
  },

  tick: function (time, timeDelta) {
    // Do something on every scene tick or frame.

    if (this.moveCarForward) {
      if (this.carSpeed > 0 && this.reverseCar) {
        this.carSpeed -= this.carAcceleration;
      } else if (this.carSpeed < this.speedLimit) {
          this.carIsAcceleratingForward = true;
          this.reverseCar = false;
          this.carIsReversing = false
        if (this.carIsMoving) {
          this.carSpeed += this.carAcceleration;
        }

      }
    }


    if (this.reverseCar) {
      if (this.carSpeed > 0 && this.moveCarForward) {
        this.carSpeed -= this.carAcceleration
      } else if (this.carSpeed < this.speedLimit) {
          this.carIsReversing = true;
          this.moveCarForward = false;
          this.carIsAcceleratingForward = false;
        if (this.carIsMoving) {
          this.carSpeed += this.carAcceleration;
        }
      }


    }


    if (!this.carIsMoving) {
      if (this.carSpeed > 0) {
        this.carSpeed -= this.carAcceleration
      } else {
        this.moveCarForward = false;
        this.carIsAcceleratingForward = false;
        this.reverseCar = false;
        this.carIsReversing = false;
        this.carIsMovingLeft = false;
        this.carIsMovingRight = false;
      }
    }



    if (!this.carHasCollidedRight) {
      if (this.carIsMovingRight) {
        const newCarXPosition = this.el.object3D.position.x + 0.04;
        this.el.object3D.position.set(newCarXPosition, this.el.object3D.position.y, this.el.object3D.position.z);
      }
    }

    if (!this.carHasCollidedLeft) {

      if (this.carIsMovingLeft) {
        const newCarXPosition = this.el.object3D.position.x - 0.04;
        this.el.object3D.position.set(newCarXPosition, this.el.object3D.position.y, this.el.object3D.position.z);
      }
    }

    if (this.carIsAcceleratingForward) {

        const camera = document.querySelector('a-entity[camera]');
      camera.object3D.position.set(camera.object3D.position.x, camera.object3D.position.y, camera.object3D.position.z - this.carSpeed);
      
      

    }

    if (this.carIsReversing) {
        const camera = document.querySelector('a-entity[camera]');
      camera.object3D.position.set(camera.object3D.position.x, camera.object3D.position.y, camera.object3D.position.z + this.carSpeed);
      
      

    }


  }

});
