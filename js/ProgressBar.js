$(function() {
  $.widget("custom.ProgressBar", {
    // default options
    options: {
        duration: 0
    },

    _create: function() {
      this.element;
      this.track = $("<div class='track'></div>").appendTo(this.element);
      this.progress = $("<div class='progressBar'></div>");

      this._initProgress();
    },

    _initProgress: function() {
      this.track.append(this.progress);
      const that = this;
      this.timer = setInterval(function() {
        if ( that.progress.width() < that.track.width()) {
          that.progress.css("width", that.progress.width() + 2 + "px");
        }
        if(that.progress.width() >= that.track.width()) {
            that.progress.css('width', 0);
        };
      }, 1);
    },
    
    stopTimer: function(status){
        this.progress.css('width', 100+'%');
        if(status == 'success') {
            this.progress.css('background', '#17dc17');
        }else {
            this.progress.css('background', '#e81313');
        }
        clearInterval(this.timer);
    },

    _destroy: function() {
        this.element.remove();
    }
  });
});