var animatePoint = function() {
                
    var points = document.getElementsByClassName('point');
    
    var revealPoint = function(index) {
        index.style.opacity = 1;
        index.style.transform = "scale(1,1) translateY(0)";
        index.style.msTransform = "scale(1,1) translateY(0)";
        index.WebkitTransform = "scale(1,1) translateY(0)";
    };
    
    for (var i = 0; i < points.length; i++) {
        revealPoint(points[i]);
    }
                
};