//initialize Minecraft code

var MCPI = Object.create(null);

MCPI.identityMatrix = [[1,0,0],[0,1,0],[0,0,1]];
MCPI.TO_RADIANS = Math.PI / 180;
MCPI.block = "1";

MCPI.mmMultiply = function(a,b) {
    c = MCPI.identityMatrix;
    for (var i = 0; i < 3 ; i++) for (var j = 0; j < 3 ; j++)
      c[i][j] = a[i][0]*b[0][j] + a[i][1]*b[1][j] + a[i][2]*b[2][j];
    return c;
};

MCPI.mvMultiply = function(a,b) {
    c = [0,0,0];
    for (var i = 0; i < 3 ; i++)
      c[i] = a[i][0]*b[0] + a[i][1]*b[1] + a[i][2]*b[2];
    return c;
};

MCPI.vvAdd = function(a,b) {
    return [a[0]+b[0],a[1]+b[1],a[2]+b[2]];
};

MCPI.vvSub = function(a,b) {
    return [a[0]-b[0],a[1]-b[1],a[2]-b[2]];
};

MCPI.yawMatrix = function(angleDegrees) {
    var theta = angleDegrees * MCPI.TO_RADIANS;
    return [[Math.cos(theta), 0., -Math.sin(theta)],
            [0.,         1., 0.],
            [Math.sin(theta), 0., Math.cos(theta)]];
};

MCPI.rollMatrix = function(angleDegrees) {
    var theta = angleDegrees * MCPI.TO_RADIANS;
    return [[Math.cos(theta), -Math.sin(theta), 0.],
            [Math.sin(theta), Math.cos(theta),0.],
            [0.,          0.,          1.]];
};

MCPI.pitchMatrix = function(angleDegrees) {
    var theta = angleDegrees * MCPI.TO_RADIANS;
    return [[1.,          0.,          0.],
            [0., Math.cos(theta),Math.sin(theta)],
            [0., -Math.sin(theta),Math.cos(theta)]];
};

MCPI.getLine = function(x1,y1,z1,x2,y2,z2) {
    var line = [];
    x1 = Math.floor(x1);
    y1 = Math.floor(y1);
    z1 = Math.floor(z1);
    x2 = Math.floor(x2);
    y2 = Math.floor(y2);
    z2 = Math.floor(z2);
    var point = [x1,y1,z1];
    var dx = x2 - x1;
    var dy = y2 - y1;
    var dz = z2 - z1;
    var x_inc = dx < 0 ? -1 : 1;
    var l = Math.abs(dx);
    var y_inc = dy < 0 ? -1 : 1;
    var m = Math.abs(dy);
    var z_inc = dz < 0 ? -1 : 1;
    var n = Math.abs(dz);
    var dx2 = l * 2;
    var dy2 = m * 2;
    var dz2 = n * 2;

    if (l >= m && l >= n) {
        var err_1 = dy2 - l;
        var err_2 = dz2 - l;
        for (var i=0; i<l; i++) {
            line.push([point[0],point[1],point[2]]);
            if (err_1 > 0) {
                point[1] += y_inc;
                err_1 -= dx2;
            }
            if (err_2 > 0) {
                point[2] += z_inc;
                err_2 -= dx2;
            }
            err_1 += dy2;
            err_2 += dz2;
            point[0] += x_inc;
        }
    }
    else if (m >= l && m >= n) {
        err_1 = dx2 - m;
        err_2 = dz2 - m;
        for (var i=0; i<m; i++) {
            line.push([point[0],point[1],point[2]]);
            if (err_1 > 0) {
                point[0] += x_inc;
                err_1 -= dy2;
            }
            if (err_2 > 0) {
                point[2] += z_inc;
                err_2 -= dy2;
            }
            err_1 += dx2;
            err_2 += dz2;
            point[1] += y_inc;
        }
    }
    else {
        err_1 = dy2 - n;
        err_2 = dx2 - n;
        for (var i=0; i < n; i++) {
            line.push([point[0],point[1],point[2]]);
            if (err_1 > 0) {
                point[1] += y_inc;
                err_1 -= dz2;
            }
            if (err_2 > 0) {
                point[0] += x_inc;
                err_2 -= dz2;
            }
            err_1 += dy2;
            err_2 += dx2;
            point[2] += z_inc;
        }
    }
    line.push([point[0],point[1],point[2]]);
    if (point[0] != x2 || point[1] != y2 || point[2] != z2) {
        line.push([x2,y2,z2]);
    }
    return line;
};

MCPI.setBlock = function(x,y,z,block) {
  MCPI.socket.send("world.setBlock("+x+","+y+","+z+","+block+")");
}

MCPI.drawLine = function(x1,y1,z1,x2,y2,z2) {
    l = MCPI.getLine(x1,y1,z1,x2,y2,z2);
    for (var i=0; i<l.length ; i++) {
        MCPI.setBlock(l[i][0],l[i][1],l[i][2],MCPI.block);
    }
}

MCPI.turtleYaw = function(angleDegrees) {
    MCPI.matrix = mmMultiply(MCPI.matrix, MCPI.yawMatrix(angleDegrees));
};

MCPI.turtlePitch = function(angleDegrees) {
    MCPI.matrix = mmMultiply(MCPI.matrix, MCPI.pitchMatrix(angleDegrees));
};

MCPI.turtleRoll = function(angleDegrees) {
    MCPI.matrix = mmMultiply(MCPI.matrix, MCPI.rollMatrix(angleDegrees));
};

MCPI.turtleGo = function(distance) {
    var heading = [MCPI.matrix[0][2],MCPI.matrix[1][2],MCPI.matrix[2][2]]
    var newX = MCPI.curX + MCPI.matrix[0][2] * distance;
    var newY = MCPI.curY + MCPI.matrix[1][2] * distance;
    var newZ = MCPI.curZ + MCPI.matrix[2][2] * distance;
    if (MCPI.penDown)
        MCPI.drawLine(MCPI.curX,MCPI.curY,MCPI.curZ,newX,newY,newZ);
    MCPI.curX = newX;
    MCPI.curY = newY;
    MCPI.curZ = newZ;
};

MCPI.socket = new WebSocket("ws://127.0.0.1:14711");

MCPI.socket.onopen = function(event) {
  MCPI.socket.onmessage = function(event) {
    var args = event.data.trim().split(",");
    MCPI.playerX = parseFloat(args[0]);
    MCPI.playerY = parseFloat(args[1]);
    MCPI.playerZ = parseFloat(args[2]);
    MCPI.curX = MCPI.playerX
    MCPI.curY = MCPI.playerY
    MCPI.curZ = MCPI.playerZ

    MCPI.socket.onmessage = function(event) {
      var yaw = parseFloat(event.data.trim());

      MCPI.socket.onmessage = function(event) {
      var pitch = parseFloat(event.data.trim());
      MCPI.matrix = MCPI.mmMultiply(MCPI.yawMatrix(yaw), MCPI.pitchMatrix(-pitch));

