let ladder = {
    step: 0,
    
    up: function () {
      this.step++;
      return this;
    },
    
    down: function () {
      this.step--;
      return this;
    },
    
    showStep: function () {
      if (this.step < 0) {
        console.log("the step can't be negative");
      } else {
        console.log(this.step);
      }
      return this;
    }
};

ladder.up().up().down().showStep();



  