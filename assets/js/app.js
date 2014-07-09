$(function() {
  var height, width, windowWidth, __animationHasStarted, __appFirstRotationTimeline, __appSecondRotationTimeline, __appThirdRotationTimeline, __appTimeline, __displayNavigators, __elements, __hideNavigators, __label, __playNextLabel, __playPreviousLabel, __positions, __ratios, __timeline, __tweens;
  $.fn.reverse = [].reverse;
  __elements = {
    'animationContainer': $('#animation-container'),
    'laptop': $('#animation-elements-laptop'),
    'tablet': $('#animation-elements-tablet'),
    'smartphone': $('#animation-elements-smartphone'),
    'text-1-first-line': $('#animation-texts-1-first-line'),
    'text-1-second-line': $('#animation-texts-1-second-line'),
    'text-1-third-line': $('#animation-texts-1-third-line'),
    'screen-laptop': $('#animation-screens-laptop'),
    'screen-laptop-2': $('#animation-screens-laptop-2'),
    'screen-laptop-graph': $('#animation-screens-laptop-graph'),
    'screen-tablet': $('#animation-screens-tablet'),
    'screen-smartphone': $('#animation-screens-smartphone'),
    'points': $('#animation-points'),
    'horizontal-points': $('#animation-points > .point'),
    'table-first-points': $('#animation-points-table-1 > .point'),
    'table-second-points': $('#animation-points-table-2 > .point'),
    'table-third-points': $('#animation-points-table-3 > .point'),
    'silhouettes-first': $('#animation-silhouettes-first'),
    'silhouettes-second': $('#animation-silhouettes-second'),
    'silhouettes-third': $('#animation-silhouettes-third'),
    'table-first': $('#animation-table-first'),
    'table-second': $('#animation-table-second'),
    'table-third': $('#animation-table-third'),
    'app-first': $('#animation-app-first'),
    'app-second': $('#animation-app-second'),
    'app-third': $('#animation-app-third'),
    'text-3-first-line': $('#animation-texts-3-first-line'),
    'text-3-second-line': $('#animation-texts-3-second-line'),
    'text-3-third-line': $('#animation-texts-3-third-line'),
    'app-first-points': $('#animation-points-table-1 > .point .point-background, #animation-points > .point:lt(17) .point-background').reverse(),
    'app-second-points': $('#animation-points-table-2 > .point .point-background, #animation-points > .point:lt(9) .point-background').reverse(),
    'app-third-points': $('#animation-points-table-3 > .point .point-background, #animation-points > .point .point-background').reverse()
  };
  __ratios = {
    'animation_container': 600 / 1200
  };
  __positions = {
    'laptop': {
      'x': 126 / 1200,
      'y': 52 / 600
    },
    'tablet': {
      'x': 45 / 1200,
      'y': 126 / 600
    },
    'smartphone': {
      'x': 142 / 1200,
      'y': 263 / 600
    },
    'text-1-first-line': {
      'x': 611 / 1200,
      'y': 114 / 600
    },
    'text-1-second-line': {
      'x': 611 / 1200,
      'y': 159 / 600
    },
    'text-1-third-line': {
      'x': 611 / 1200,
      'y': 233 / 600
    },
    'screen-laptop': {
      'x': 233 / 1200,
      'y': 69 / 600
    },
    'screen-laptop-2': {
      'x': 233 / 1200,
      'y': 69 / 600
    },
    'screen-laptop-graph': {
      'x': 233 / 1200,
      'y': 69 / 600
    },
    'screen-tablet': {
      'x': 67 / 1200,
      'y': 148 / 600
    },
    'screen-smartphone': {
      'x': 147 / 1200,
      'y': 283 / 600
    },
    'points': {
      'x': 570 / 1200,
      'y': 95 / 600
    },
    'silhouettes-first': {
      'x': 811 / 1200,
      'y': 138 / 600
    },
    'silhouettes-second': {
      'x': 601 / 1200,
      'y': 154 / 600
    },
    'silhouettes-third': {
      'x': 914 / 1200,
      'y': 142 / 600
    },
    'table-first': {
      'x': 733 / 1200,
      'y': 163 / 600
    },
    'table-second': {
      'x': 573 / 1200,
      'y': 191 / 600
    },
    'table-third': {
      'x': 721 / 1200,
      'y': 212 / 600
    },
    'app-first': {
      'x': 807 / 1200,
      'y': 173 / 600
    },
    'app-second': {
      'x': 675 / 1200,
      'y': 205 / 600
    },
    'app-third': {
      'x': 898 / 1200,
      'y': 244 / 600
    },
    'text-3-first-line': {
      'x': 140 / 1200,
      'y': 433 / 600
    },
    'text-3-second-line': {
      'x': 140 / 1200,
      'y': 480 / 600
    },
    'text-3-third-line': {
      'x': 140 / 1200,
      'y': 525 / 600
    }
  };
  windowWidth = $(window).width();
  width = __elements.animationContainer.width();
  height = width * __ratios.animation_container;
  __elements.animationContainer.css({
    'height': height
  });
  _.each(__elements, function(element, name) {
    if (__positions[name]) {
      return element.css({
        'transform': 'translate3d(' + __positions[name].x * width + 'px,' + __positions[name].y * height + 'px, 0)'
      });
    }
  });
  __tweens = {
    'screen-laptop-first': {
      'target': __elements['screen-laptop'],
      'duration': 0,
      'to': {
        'alpha': 0
      }
    },
    'screen-laptop-2-first': {
      'target': __elements['screen-laptop-2'],
      'duration': 0,
      'to': {
        'alpha': 0
      }
    },
    'screen-laptop-graph-first': {
      'target': __elements['screen-laptop-graph'],
      'duration': 0,
      'to': {
        'alpha': 0
      }
    },
    'screen-tablet-first': {
      'target': __elements['screen-tablet'],
      'duration': 0,
      'to': {
        'alpha': 0
      }
    },
    'screen-smartphone-first': {
      'target': __elements['screen-smartphone'],
      'duration': 0,
      'to': {
        'alpha': 0
      }
    },
    'text-1-first-line-from-right-first': {
      'target': __elements['text-1-first-line'],
      'duration': 0,
      'to': {
        'x': __elements['text-1-first-line'].width() + windowWidth,
        'y': __positions['text-1-first-line'].y * height
      }
    },
    'text-1-second-line-from-right-first': {
      'target': __elements['text-1-second-line'],
      'duration': 0,
      'to': {
        'x': __elements['text-1-second-line'].width() + windowWidth,
        'y': __positions['text-1-second-line'].y * height
      }
    },
    'text-1-third-line-from-right-first': {
      'target': __elements['text-1-third-line'],
      'duration': 0,
      'to': {
        'x': __elements['text-1-third-line'].width() + windowWidth,
        'y': __positions['text-1-third-line'].y * height
      }
    },
    'text-3-first-line-from-right-first': {
      'target': __elements['text-3-first-line'],
      'duration': 0,
      'to': {
        'x': __elements['text-3-first-line'].width() + windowWidth,
        'y': __positions['text-3-first-line'].y * height
      }
    },
    'text-3-second-line-from-right-first': {
      'target': __elements['text-3-second-line'],
      'duration': 0,
      'to': {
        'x': __elements['text-3-second-line'].width() + windowWidth,
        'y': __positions['text-3-second-line'].y * height
      }
    },
    'text-3-third-line-from-right-first': {
      'target': __elements['text-3-third-line'],
      'duration': 0,
      'to': {
        'x': __elements['text-3-third-line'].width() + windowWidth,
        'y': __positions['text-3-third-line'].y * height
      }
    },
    'silhouettes-first-first': {
      'target': __elements['silhouettes-first'],
      'duration': 0,
      'to': {
        'x': __elements['silhouettes-first'].width() + windowWidth,
        'y': __positions['silhouettes-first'].y * height
      }
    },
    'silhouettes-second-first': {
      'target': __elements['silhouettes-second'],
      'duration': 0,
      'to': {
        'x': __elements['silhouettes-second'].width() + windowWidth,
        'y': __positions['silhouettes-second'].y * height
      }
    },
    'silhouettes-third-first': {
      'target': __elements['silhouettes-third'],
      'duration': 0,
      'to': {
        'x': __elements['silhouettes-third'].width() + windowWidth,
        'y': __positions['silhouettes-third'].y * height
      }
    },
    'table-first-first': {
      'target': __elements['table-first'],
      'duration': 0,
      'to': {
        'scale': 0,
        'alpha': 0
      }
    },
    'table-second-first': {
      'target': __elements['table-second'],
      'duration': 0,
      'to': {
        'scale': 0,
        'alpha': 0
      }
    },
    'table-third-first': {
      'target': __elements['table-third'],
      'duration': 0,
      'to': {
        'scale': 0,
        'alpha': 0
      }
    },
    'horizontal-points-first': {
      'target': __elements['horizontal-points'],
      'duration': 0,
      'to': {
        'scale': 0
      }
    },
    'table-first-points-first': {
      'target': __elements['table-first-points'],
      'duration': 0,
      'to': {
        'scale': 0
      }
    },
    'table-second-points-first': {
      'target': __elements['table-second-points'],
      'duration': 0,
      'to': {
        'scale': 0
      }
    },
    'table-third-points-first': {
      'target': __elements['table-third-points'],
      'duration': 0,
      'to': {
        'scale': 0
      }
    },
    'app-first-first': {
      'target': __elements['app-first'],
      'duration': 0,
      'to': {
        'scale': 0
      }
    },
    'app-second-first': {
      'target': __elements['app-second'],
      'duration': 0,
      'to': {
        'scale': 0
      }
    },
    'app-third-first': {
      'target': __elements['app-third'],
      'duration': 0,
      'to': {
        'scale': 0
      }
    },
    'laptop-first': {
      'target': __elements['laptop'],
      'duration': 0,
      'to': {
        'scale': 0.3
      }
    },
    'tablet-first': {
      'target': __elements['tablet'],
      'duration': 0,
      'to': {
        'scale': 0.3
      }
    },
    'smartphone-first': {
      'target': __elements['smartphone'],
      'duration': 0,
      'to': {
        'scale': 0.3
      }
    },
    'laptop-second': {
      'target': __elements['laptop'],
      'duration': 0.6,
      'to': {
        'scale': 1
      }
    },
    'tablet-second': {
      'target': __elements['tablet'],
      'duration': 0.6,
      'to': {
        'scale': 1
      }
    },
    'smartphone-second': {
      'target': __elements['smartphone'],
      'duration': 0.6,
      'to': {
        'scale': 1
      }
    },
    'screen-laptop-second': {
      'target': __elements['screen-laptop'],
      'duration': 0.6,
      'to': {
        'delay': 0.5,
        'alpha': 1
      }
    },
    'screen-tablet-second': {
      'target': __elements['screen-tablet'],
      'duration': 0.6,
      'to': {
        'delay': 0.5,
        'alpha': 1
      }
    },
    'screen-smartphone-second': {
      'target': __elements['screen-smartphone'],
      'duration': 0.6,
      'to': {
        'delay': 0.5,
        'alpha': 1
      }
    },
    'text-1-first-line-from-right-second': {
      'target': __elements['text-1-first-line'],
      'duration': 0.4,
      'to': {
        'x': __positions['text-1-first-line'].x * width,
        'y': __positions['text-1-first-line'].y * height
      }
    },
    'text-1-second-line-from-right-second': {
      'target': __elements['text-1-second-line'],
      'duration': 0.4,
      'to': {
        'x': __positions['text-1-second-line'].x * width,
        'y': __positions['text-1-second-line'].y * height
      }
    },
    'text-1-third-line-from-right-second': {
      'target': __elements['text-1-third-line'],
      'duration': 0.4,
      'to': {
        'x': __positions['text-1-third-line'].x * width,
        'y': __positions['text-1-third-line'].y * height
      }
    },
    'screen-laptop-third': {
      'target': __elements['screen-laptop'],
      'duration': 0.4,
      'to': {
        'delay': 1,
        'alpha': 0
      }
    },
    'screen-laptop-2-second': {
      'target': __elements['screen-laptop-2'],
      'duration': 0.6,
      'to': {
        'alpha': 1
      }
    },
    'text-1-first-line-from-right-third': {
      'target': __elements['text-1-first-line'],
      'duration': 0.4,
      'to': {
        'alpha': 0
      }
    },
    'text-1-second-line-from-right-third': {
      'target': __elements['text-1-second-line'],
      'duration': 0.4,
      'to': {
        'alpha': 0
      }
    },
    'text-1-third-line-from-right-third': {
      'target': __elements['text-1-third-line'],
      'duration': 0.4,
      'to': {
        'alpha': 0
      }
    },
    'table-first-second': {
      'target': __elements['table-first'],
      'duration': 0.4,
      'to': {
        'scale': 1,
        'alpha': 1
      }
    },
    'table-second-second': {
      'target': __elements['table-second'],
      'duration': 0.4,
      'to': {
        'scale': 1,
        'alpha': 1
      }
    },
    'table-third-second': {
      'target': __elements['table-third'],
      'duration': 0.4,
      'to': {
        'scale': 1,
        'alpha': 1
      }
    },
    'horizontal-points-second': {
      'target': __elements['horizontal-points'],
      'duration': 0.1,
      'to': {
        'scale': 1
      }
    },
    'table-first-points-second': {
      'target': __elements['table-first-points'],
      'duration': 0.3,
      'to': {
        'scale': 1
      }
    },
    'table-second-points-second': {
      'target': __elements['table-second-points'],
      'duration': 0.3,
      'to': {
        'scale': 1
      }
    },
    'table-third-points-second': {
      'target': __elements['table-third-points'],
      'duration': 0.3,
      'to': {
        'scale': 1
      }
    },
    'app-first-second': {
      'target': __elements['app-first'],
      'duration': 0.6,
      'to': {
        'scale': 1,
        'ease': Bounce.easeOut
      }
    },
    'app-second-second': {
      'target': __elements['app-second'],
      'duration': 0.6,
      'to': {
        'scale': 1,
        'ease': Bounce.easeOut
      }
    },
    'app-third-second': {
      'target': __elements['app-third'],
      'duration': 0.6,
      'to': {
        'scale': 1,
        'ease': Bounce.easeOut
      }
    },
    'silhouettes-first-second': {
      'target': __elements['silhouettes-first'],
      'duration': 0.4,
      'to': {
        'x': __positions['silhouettes-first'].x * width,
        'y': __positions['silhouettes-first'].y * height
      }
    },
    'silhouettes-second-second': {
      'target': __elements['silhouettes-second'],
      'duration': 0.4,
      'to': {
        'x': __positions['silhouettes-second'].x * width,
        'y': __positions['silhouettes-second'].y * height
      }
    },
    'silhouettes-third-second': {
      'target': __elements['silhouettes-third'],
      'duration': 0.4,
      'to': {
        'x': __positions['silhouettes-third'].x * width,
        'y': __positions['silhouettes-third'].y * height
      }
    },
    'text-3-first-line-from-right-second': {
      'target': __elements['text-3-first-line'],
      'duration': 0.4,
      'to': {
        'x': __positions['text-3-first-line'].x * width,
        'y': __positions['text-3-first-line'].y * height
      }
    },
    'text-3-second-line-from-right-second': {
      'target': __elements['text-3-second-line'],
      'duration': 0.4,
      'to': {
        'x': __positions['text-3-second-line'].x * width,
        'y': __positions['text-3-second-line'].y * height
      }
    },
    'text-3-third-line-from-right-second': {
      'target': __elements['text-3-third-line'],
      'duration': 0.4,
      'to': {
        'x': __positions['text-3-third-line'].x * width,
        'y': __positions['text-3-third-line'].y * height
      }
    },
    'text-3-first-line-from-right-third': {
      'target': __elements['text-3-first-line'],
      'duration': 0.4,
      'to': {
        'alpha': 0
      }
    },
    'text-3-second-line-from-right-third': {
      'target': __elements['text-3-second-line'],
      'duration': 0.4,
      'to': {
        'alpha': 0
      }
    },
    'text-3-third-line-from-right-third': {
      'target': __elements['text-3-third-line'],
      'duration': 0.4,
      'to': {
        'alpha': 0
      }
    },
    'app-first-third': {
      'target': __elements['app-first'],
      'duration': 0.1,
      'to': {
        'rotationY': 45,
        'y': __positions['app-first'].y * height,
        'ease': Ease.linear
      }
    },
    'app-first-fourth': {
      'target': __elements['app-first'],
      'duration': 0.2,
      'to': {
        'rotationY': -45,
        'y': __positions['app-first'].y * height - 10,
        'ease': Ease.linear
      }
    },
    'app-first-fifth': {
      'target': __elements['app-first'],
      'duration': 0.1,
      'to': {
        'rotationY': 0,
        'y': __positions['app-first'].y * height,
        'ease': Ease.linear
      }
    },
    'app-second-third': {
      'target': __elements['app-second'],
      'duration': 0.1,
      'to': {
        'rotationY': 45,
        'y': __positions['app-second'].y * height,
        'ease': Ease.linear
      }
    },
    'app-second-fourth': {
      'target': __elements['app-second'],
      'duration': 0.2,
      'to': {
        'rotationY': -45,
        'y': __positions['app-second'].y * height - 10,
        'ease': Ease.linear
      }
    },
    'app-second-fifth': {
      'target': __elements['app-second'],
      'duration': 0.1,
      'to': {
        'rotationY': 0,
        'y': __positions['app-second'].y * height,
        'ease': Ease.linear
      }
    },
    'app-third-third': {
      'target': __elements['app-third'],
      'duration': 0.1,
      'to': {
        'rotationY': 45,
        'y': __positions['app-third'].y * height,
        'ease': Ease.linear
      }
    },
    'app-third-fourth': {
      'target': __elements['app-third'],
      'duration': 0.2,
      'to': {
        'rotationY': -45,
        'y': __positions['app-third'].y * height - 10,
        'ease': Ease.linear
      }
    },
    'app-third-fifth': {
      'target': __elements['app-third'],
      'duration': 0.1,
      'to': {
        'rotationY': 0,
        'y': __positions['app-third'].y * height,
        'ease': Ease.linear
      }
    },
    'app-first-points-first': {
      'target': __elements['app-first-points'],
      'duration': 0.2,
      'to': {
        'scale': 1
      }
    },
    'app-first-points-second': {
      'target': __elements['app-first-points'],
      'duration': 0.2,
      'to': {
        'scale': 0,
        'delay': 0.3
      }
    },
    'app-second-points-first': {
      'target': __elements['app-second-points'],
      'duration': 0.2,
      'to': {
        'scale': 1
      }
    },
    'app-second-points-second': {
      'target': __elements['app-second-points'],
      'duration': 0.2,
      'to': {
        'scale': 0,
        'delay': 0.3
      }
    },
    'app-third-points-first': {
      'target': __elements['app-third-points'],
      'duration': 0.2,
      'to': {
        'scale': 1
      }
    },
    'app-third-points-second': {
      'target': __elements['app-third-points'],
      'duration': 0.2,
      'to': {
        'scale': 0,
        'delay': 0.3
      }
    },
    'screen-laptop-2-third': {
      'target': __elements['screen-laptop-2'],
      'duration': 0.6,
      'to': {
        'delay': 2.3,
        'alpha': 0
      }
    },
    'screen-laptop-graph-second': {
      'target': __elements['screen-laptop-graph'],
      'duration': 0.6,
      'to': {
        'delay': 2.9,
        'alpha': 1
      }
    }
  };
  __appFirstRotationTimeline = new TimelineMax({
    'repeat': 2,
    'repeatDelay': 0
  });
  __appFirstRotationTimeline.append(TweenMax.to(__tweens['app-first-third'].target, __tweens['app-first-third'].duration, __tweens['app-first-third'].to)).append(TweenMax.to(__tweens['app-first-fourth'].target, __tweens['app-first-fourth'].duration, __tweens['app-first-fourth'].to)).append(TweenMax.to(__tweens['app-first-fifth'].target, __tweens['app-first-fifth'].duration, __tweens['app-first-fifth'].to));
  __appSecondRotationTimeline = new TimelineMax({
    'repeat': 2,
    'repeatDelay': 0
  });
  __appSecondRotationTimeline.append(TweenMax.to(__tweens['app-second-third'].target, __tweens['app-second-third'].duration, __tweens['app-second-third'].to)).append(TweenMax.to(__tweens['app-second-fourth'].target, __tweens['app-second-fourth'].duration, __tweens['app-second-fourth'].to)).append(TweenMax.to(__tweens['app-second-fifth'].target, __tweens['app-second-fifth'].duration, __tweens['app-second-fifth'].to));
  __appThirdRotationTimeline = new TimelineMax({
    'repeat': 2,
    'repeatDelay': 0
  });
  __appThirdRotationTimeline.append(TweenMax.to(__tweens['app-third-third'].target, __tweens['app-third-third'].duration, __tweens['app-third-third'].to)).append(TweenMax.to(__tweens['app-third-fourth'].target, __tweens['app-third-fourth'].duration, __tweens['app-third-fourth'].to)).append(TweenMax.to(__tweens['app-third-fifth'].target, __tweens['app-third-fifth'].duration, __tweens['app-third-fifth'].to));
  __appTimeline = new TimelineMax({
    'repeat': -1
  });
  __appTimeline.append(__appFirstRotationTimeline).appendMultiple([TweenMax.staggerTo(__tweens['app-first-points-first'].target, __tweens['app-first-points-first'].duration, __tweens['app-first-points-first'].to, 0.1), TweenMax.staggerTo(__tweens['app-first-points-second'].target, __tweens['app-first-points-second'].duration, __tweens['app-first-points-second'].to, 0.1)]).append(__appSecondRotationTimeline).appendMultiple([TweenMax.staggerTo(__tweens['app-second-points-first'].target, __tweens['app-second-points-first'].duration, __tweens['app-second-points-first'].to, 0.1), TweenMax.staggerTo(__tweens['app-second-points-second'].target, __tweens['app-second-points-second'].duration, __tweens['app-second-points-second'].to, 0.1)]).append(__appThirdRotationTimeline).appendMultiple([TweenMax.staggerTo(__tweens['app-third-points-first'].target, __tweens['app-third-points-first'].duration, __tweens['app-third-points-first'].to, 0.1), TweenMax.staggerTo(__tweens['app-third-points-second'].target, __tweens['app-third-points-second'].duration, __tweens['app-third-points-second'].to, 0.1)]).addCallback(function() {
    console.log('appTimeline ended', this);
    __displayNavigators();
    return this.removeCallback(null, null);
  }, '+=0');
  $('.animation-navigator').on('click', function(e) {
    e.preventDefault();
    if ($(this).data('slide') === 'previous') {
      return __playPreviousLabel();
    } else {
      return __playNextLabel();
    }
  });
  __animationHasStarted = false;
  __label = 1;
  __displayNavigators = function() {
    return $('.animation-navigator').removeClass('unvisible');
  };
  __hideNavigators = function() {
    return $('.animation-navigator').addClass('unvisible');
  };
  __playPreviousLabel = function() {
    var previousLabel;
    __hideNavigators();
    __label--;
    previousLabel = 'Slide-' + __label;
    if (__label === 0) {
      __label = 3;
    }
    console.log(previousLabel);
    return __timeline.tweenTo(previousLabel);
  };
  __playNextLabel = function() {
    var nextLabel;
    __hideNavigators();
    __label++;
    nextLabel = 'Slide-' + __label;
    if (__label === 3) {
      __label = 0;
    }
    console.log(nextLabel);
    return __timeline.tweenTo(nextLabel);
  };
  __timeline = new TimelineMax({
    'repeat': 0,
    'paused': true,
    'repeatDelay': 1
  });
  __timeline.addLabel('Slide-0').addCallback(function() {
    console.log('0');
    if (__animationHasStarted) {
      return __displayNavigators.apply(this);
    } else {
      return __animationHasStarted = true;
    }
  }, 'Slide-0').appendMultiple([TweenMax.to(__tweens['screen-laptop-first'].target, __tweens['screen-laptop-first'].duration, __tweens['screen-laptop-first'].to), TweenMax.to(__tweens['screen-laptop-2-first'].target, __tweens['screen-laptop-2-first'].duration, __tweens['screen-laptop-2-first'].to), TweenMax.to(__tweens['screen-laptop-graph-first'].target, __tweens['screen-laptop-graph-first'].duration, __tweens['screen-laptop-graph-first'].to), TweenMax.to(__tweens['screen-tablet-first'].target, __tweens['screen-tablet-first'].duration, __tweens['screen-tablet-first'].to), TweenMax.to(__tweens['screen-smartphone-first'].target, __tweens['screen-smartphone-first'].duration, __tweens['screen-smartphone-first'].to), TweenMax.to(__tweens['text-1-first-line-from-right-first'].target, __tweens['text-1-first-line-from-right-first'].duration, __tweens['text-1-first-line-from-right-first'].to), TweenMax.to(__tweens['text-1-second-line-from-right-first'].target, __tweens['text-1-second-line-from-right-first'].duration, __tweens['text-1-second-line-from-right-first'].to), TweenMax.to(__tweens['text-1-third-line-from-right-first'].target, __tweens['text-1-third-line-from-right-first'].duration, __tweens['text-1-third-line-from-right-first'].to), TweenMax.to(__tweens['text-1-third-line-from-right-first'].target, __tweens['text-1-third-line-from-right-first'].duration, __tweens['text-1-third-line-from-right-first'].to), TweenMax.to(__tweens['table-first-first'].target, __tweens['table-first-first'].duration, __tweens['table-first-first'].to), TweenMax.to(__tweens['table-second-first'].target, __tweens['table-second-first'].duration, __tweens['table-second-first'].to), TweenMax.to(__tweens['table-third-first'].target, __tweens['table-third-first'].duration, __tweens['table-third-first'].to), TweenMax.to(__tweens['horizontal-points-first'].target, __tweens['horizontal-points-first'].duration, __tweens['horizontal-points-first'].to), TweenMax.to(__tweens['table-first-points-first'].target, __tweens['table-first-points-first'].duration, __tweens['table-first-points-first'].to), TweenMax.to(__tweens['table-second-points-first'].target, __tweens['table-second-points-first'].duration, __tweens['table-second-points-first'].to), TweenMax.to(__tweens['table-third-points-first'].target, __tweens['table-third-points-first'].duration, __tweens['table-third-points-first'].to), TweenMax.to(__tweens['app-first-first'].target, __tweens['app-first-first'].duration, __tweens['app-first-first'].to), TweenMax.to(__tweens['app-second-first'].target, __tweens['app-second-first'].duration, __tweens['app-second-first'].to), TweenMax.to(__tweens['app-third-first'].target, __tweens['app-third-first'].duration, __tweens['app-third-first'].to), TweenMax.to(__tweens['silhouettes-first-first'].target, __tweens['silhouettes-first-first'].duration, __tweens['silhouettes-first-first'].to), TweenMax.to(__tweens['silhouettes-second-first'].target, __tweens['silhouettes-second-first'].duration, __tweens['silhouettes-second-first'].to), TweenMax.to(__tweens['silhouettes-third-first'].target, __tweens['silhouettes-third-first'].duration, __tweens['silhouettes-third-first'].to), TweenMax.to(__tweens['text-3-first-line-from-right-first'].target, __tweens['text-3-first-line-from-right-first'].duration, __tweens['text-3-first-line-from-right-first'].to), TweenMax.to(__tweens['text-3-second-line-from-right-first'].target, __tweens['text-3-second-line-from-right-first'].duration, __tweens['text-3-second-line-from-right-first'].to), TweenMax.to(__tweens['text-3-third-line-from-right-first'].target, __tweens['text-3-third-line-from-right-first'].duration, __tweens['text-3-third-line-from-right-first'].to)]).appendMultiple([TweenMax.to(__tweens['laptop-first'].target, __tweens['laptop-first'].duration, __tweens['laptop-first'].to, __tweens['laptop-first']), TweenMax.to(__tweens['tablet-first'].target, __tweens['tablet-first'].duration, __tweens['tablet-first'].to), TweenMax.to(__tweens['smartphone-first'].target, __tweens['smartphone-first'].duration, __tweens['smartphone-first'].to)]).appendMultiple([TweenMax.to(__tweens['laptop-second'].target, __tweens['laptop-second'].duration, __tweens['laptop-second'].to), TweenMax.to(__tweens['tablet-second'].target, __tweens['tablet-second'].duration, __tweens['tablet-second'].to), TweenMax.to(__tweens['smartphone-second'].target, __tweens['smartphone-second'].duration, __tweens['smartphone-second'].to)]).appendMultiple([TweenMax.to(__tweens['screen-laptop-second'].target, __tweens['screen-laptop-second'].duration, __tweens['screen-laptop-second'].to), TweenMax.to(__tweens['screen-tablet-second'].target, __tweens['screen-tablet-second'].duration, __tweens['screen-tablet-second'].to), TweenMax.to(__tweens['screen-smartphone-second'].target, __tweens['screen-smartphone-second'].duration, __tweens['screen-smartphone-second'].to)]).append(TweenMax.to(__tweens['text-1-first-line-from-right-second'].target, __tweens['text-1-first-line-from-right-second'].duration, __tweens['text-1-first-line-from-right-second'].to)).append(TweenMax.to(__tweens['text-1-second-line-from-right-second'].target, __tweens['text-1-second-line-from-right-second'].duration, __tweens['text-1-second-line-from-right-second'].to)).append(TweenMax.to(__tweens['text-1-third-line-from-right-second'].target, __tweens['text-1-third-line-from-right-second'].duration, __tweens['text-1-third-line-from-right-second'].to)).addLabel('Slide-1').addCallback(function() {
    console.log('1');
    return __displayNavigators.apply(this);
  }, 'Slide-1').append(TweenMax.to(__tweens['screen-laptop-third'].target, __tweens['screen-laptop-third'].duration, __tweens['screen-laptop-third'].to)).appendMultiple([TweenMax.to(__tweens['text-1-first-line-from-right-third'].target, __tweens['text-1-first-line-from-right-third'].duration, __tweens['text-1-first-line-from-right-third'].to), TweenMax.to(__tweens['text-1-second-line-from-right-third'].target, __tweens['text-1-second-line-from-right-third'].duration, __tweens['text-1-second-line-from-right-third'].to), TweenMax.to(__tweens['text-1-third-line-from-right-third'].target, __tweens['text-1-third-line-from-right-third'].duration, __tweens['text-1-third-line-from-right-third'].to)]).append(TweenMax.to(__tweens['screen-laptop-2-second'].target, __tweens['screen-laptop-2-second'].duration, __tweens['screen-laptop-2-second'].to)).append(TweenMax.to(__tweens['table-first-second'].target, __tweens['table-first-second'].duration, __tweens['table-first-second'].to)).append(TweenMax.to(__tweens['table-second-second'].target, __tweens['table-second-second'].duration, __tweens['table-second-second'].to)).append(TweenMax.to(__tweens['table-third-second'].target, __tweens['table-third-second'].duration, __tweens['table-third-second'].to)).append(TweenMax.staggerTo(__tweens['horizontal-points-second'].target, __tweens['horizontal-points-second'].duration, __tweens['horizontal-points-second'].to, 0.03)).append(TweenMax.staggerTo(__tweens['table-first-points-second'].target, __tweens['table-first-points-second'].duration, __tweens['table-first-points-second'].to, 0.03)).append(TweenMax.staggerTo(__tweens['table-second-points-second'].target, __tweens['table-second-points-second'].duration, __tweens['table-second-points-second'].to, 0.03)).append(TweenMax.staggerTo(__tweens['table-third-points-second'].target, __tweens['table-third-points-second'].duration, __tweens['table-third-points-second'].to, 0.03)).appendMultiple([TweenMax.to(__tweens['app-first-second'].target, __tweens['app-first-second'].duration, __tweens['app-first-second'].to), TweenMax.to(__tweens['app-second-second'].target, __tweens['app-second-second'].duration, __tweens['app-second-second'].to), TweenMax.to(__tweens['app-third-second'].target, __tweens['app-third-second'].duration, __tweens['app-third-second'].to)]).addLabel('Slide-2').addCallback(function() {
    console.log('2');
    return __displayNavigators.apply(this);
  }, 'Slide-2').append(TweenMax.to(__tweens['silhouettes-first-second'].target, __tweens['silhouettes-first-second'].duration, __tweens['silhouettes-first-second'].to)).append(TweenMax.to(__tweens['silhouettes-second-second'].target, __tweens['silhouettes-second-second'].duration, __tweens['silhouettes-second-second'].to)).append(TweenMax.to(__tweens['silhouettes-third-second'].target, __tweens['silhouettes-third-second'].duration, __tweens['silhouettes-third-second'].to)).append(TweenMax.to(__tweens['text-3-first-line-from-right-second'].target, __tweens['text-3-first-line-from-right-second'].duration, __tweens['text-3-first-line-from-right-second'].to)).append(TweenMax.to(__tweens['text-3-second-line-from-right-second'].target, __tweens['text-3-second-line-from-right-second'].duration, __tweens['text-3-second-line-from-right-second'].to)).append(TweenMax.to(__tweens['text-3-third-line-from-right-second'].target, __tweens['text-3-third-line-from-right-second'].duration, __tweens['text-3-third-line-from-right-second'].to)).appendMultiple([__appTimeline, TweenMax.to(__tweens['screen-laptop-2-third'].target, __tweens['screen-laptop-2-third'].duration, __tweens['screen-laptop-2-third'].to), TweenMax.to(__tweens['screen-laptop-graph-second'].target, __tweens['screen-laptop-graph-second'].duration, __tweens['screen-laptop-graph-second'].to)]).addLabel('Slide-3').addCallback(function() {
    console.log('3');
    return __displayNavigators.apply(this);
  }, 'Slide-3');
  console.log('Slide-' + __label);
  return __timeline.tweenTo('Slide-' + __label);
});
