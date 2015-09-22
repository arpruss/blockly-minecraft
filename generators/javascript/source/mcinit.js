//initialize Minecraft code

var MCPI = Object.create(null);

MCPI.identityMatrix = [[1,0,0],[0,1,0],[0,0,1]];
MCPI.TO_RADIANS = Math.PI / 180;

MCPI.matrixMultiply = function(a,b) {
    c = MCPI.identityMatrix;
    for (var i = 0; i < 3 ; i++) for (var j = 0; j < 3 ; j++)
      c[i][j] = a[i][0]*b[0][j] + a[i][1]*b[1][j] + a[i][2]*b[2][j];
    return c;
};

MCPI.yawMatrix = function(angleDegrees) {
    theta = angleDegrees * MCPI.TO_RADIANS;
    return [[Math.cos(theta), 0., -Math.sin(theta)],
            [0.,         1., 0.],
            [Math.sin(theta), 0., Math.cos(theta)]];
};

MCPI.rollMatrix = function(angleDegrees) {
    theta = angleDegrees * MCPI.TO_RADIANS;
    return [[Math.cos(theta), -Math.sin(theta), 0.],
            [Math.sin(theta), Math.cos(theta),0.],
            [0.,          0.,          1.]];
};

MCPI.pitchMatrix = function(angleDegrees) {
    theta = angleDegrees * MCPI.TO_RADIANS;
    return [[1.,          0.,          0.],
            [0., Math.cos(theta),Math.sin(theta)],
            [0., -Math.sin(theta),Math.cos(theta)]];
};

MCPI.socket = new WebSocket("ws://127.0.0.1:14711");

MCPI.socket.onopen = function(event) {
 