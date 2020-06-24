const timeline = new TimelineMax();

timeline.from('header main aside:last-child',0.5, {x : -200, opacity : 0}, 0.5);

animate(timeline2,'#container5', false, 0.4, 0, true);
