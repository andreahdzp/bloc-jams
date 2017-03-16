var pointsArray = document.getElementsByClassName('point');

var revealPoint = function(index) {
        index.style.opacity = 1;
        index.style.transform = "scale(1,1) translateY(0)";
        index.style.msTransform = "scale(1,1) translateY(0)";
        index.WebkitTransform = "scale(1,1) translateY(0)";
    };

var animatePoints = function(points) {
    
    forEach(points, revealPoint);
                
};

window.onload = function() {
    // Automatically animate the points on a tall screen where scrolling can't trigger the animation
    if (window.innerHeight > 950) {
        animatePoints(pointsArray);
    }
    
    var sellingPoints = document.getElementsByClassName('selling-points')[0];
    var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;
    
    window.addEventListener('scroll', function(event) {
        if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
            animatePoints(pointsArray);
        }
    });
}

