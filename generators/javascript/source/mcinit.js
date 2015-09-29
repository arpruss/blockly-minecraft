//initialize Minecraft code

var MCPI = Object.create(null);

MCPI.TO_RADIANS = Math.PI / 180;
MCPI.block = "1";
MCPI.penDown = true;
MCPI.nib = [[0,0,0]];

MCPI.mmMultiply = function(a,b) {
    var c = [[0,0,0],[0,0,0],[0,0,0]];
    for (var i = 0; i < 3 ; i++) for (var j = 0; j < 3 ; j++)
      c[i][j] = a[i][0]*b[0][j] + a[i][1]*b[1][j] + a[i][2]*b[2][j];
    return c;
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

MCPI.postToChat = function(message) {
  MCPI.socket.send("chat.post("+message+")");
};

MCPI.setBlock = function(x,y,z,block) {
  if (block != "0" && Math.floor(x) == Math.floor(MCPI.playerX) && Math.floor(z) == Math.floor(MCPI.playerZ)
      && (Math.floor(y) >= MCPI.playerShiftedHeight) ) {
        MCPI.playerShiftedHeight = Math.floor(y) + 1;
        MCPI.socket.send("player.setPos("+MCPI.playerX+","+MCPI.playerShiftedHeight+","+MCPI.playerZ+")");
  }
  MCPI.socket.send("world.setBlock("+x+","+y+","+z+","+block+")");
};

MCPI.drawPoint = function(x0,y0,z0) {
    var l = MCPI.nib.length;
    if (l == 0) {
        return;
    }
    else if (l == 1) {
        MCPI.setBlock(x0,y0,z0,MCPI.block);
        return;
    }

    for (var i = 0 ; i < l ; i++) {
        var p = MCPI.nib[i];
        var x = p[0] + x0;
        var y = p[1] + y0;
        var z = p[2] + z0;
        var indexable = ""+x+","+y+","+z;
        if (! (indexable in MCPI.saved)) {
            MCPI.setBlock(x,y,z,MCPI.block);
            MCPI.saved[indexable] = 1;
        }
    }
}

MCPI.drawLine = function(x1,y1,z1,x2,y2,z2) {
    MCPI.saved = Object.create(null);
    var l = MCPI.getLine(x1,y1,z1,x2,y2,z2);
    for (var i=0; i<l.length ; i++) {
        MCPI.drawPoint(l[i][0],l[i][1],l[i][2]);
    }
}

MCPI.turtleSetWidth = function(w) {
    MCPI.nib = [];
    if (w == 0) {
        return;
    }
    else if (w == 1) {
        MCPI.nib = [[0,0,0]];
    }
    else if (w == 2) {
        for (x=-1; x<=0; x++)
          for (y=0; y<=1; y++)
            for (z=-1; z<=0; z++)
              MCPI.nib.push([x,y,z]);
    }
    else {
      var r = w/2;
      var r2 = r*r;
      for (var x = -Math.ceil(r) ; x <= Math.ceil(r); x++)
        for (var y = -Math.ceil(r) ; y <= Math.ceil(r); y++)
          for (var z = -Math.ceil(r) ; z <= Math.ceil(r); z++)
            if (x*x + y*y + z*z <= r2)
               MCPI.nib.push([x,y,z]);
    }
}

MCPI.turtleYaw = function(angleDegrees) {
    MCPI.matrix = MCPI.mmMultiply(MCPI.matrix, MCPI.yawMatrix(angleDegrees));
};

MCPI.turtlePitch = function(angleDegrees) {
    MCPI.matrix = MCPI.mmMultiply(MCPI.matrix, MCPI.pitchMatrix(angleDegrees));
};

MCPI.turtleRoll = function(angleDegrees) {
    MCPI.matrix = MCPI.mmMultiply(MCPI.matrix, MCPI.rollMatrix(angleDegrees));
};

MCPI.turtleGo = function(distance) {
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

MCPI.timeoutFunction = function() {
   MCPI.socket.close();
   window.alert('Cannot connect to Minecraft API. Make sure you have Minecraft running with Raspberry Jam Mod.');
   exit();
};

MCPI.timerID = setTimeout(MCPI.timeoutFunction, 5000);

MCPI.socket.onopen = function(event) {
  MCPI.socket.onmessage = function(event) {
    var args = event.data.trim().split(",");
    MCPI.playerX = Math.floor(parseFloat(args[0]));
    MCPI.playerY = Math.floor(parseFloat(args[1]));
    MCPI.playerZ = Math.floor(parseFloat(args[2]));
    MCPI.curX = MCPI.playerX;
    MCPI.curY = MCPI.playerY;
    MCPI.curZ = MCPI.playerZ;
    MCPI.playerShiftedHeight = MCPI.playerY;

    MCPI.socket.onmessage = function(event) {
      var yaw = parseFloat(event.data.trim());
      MCPI.matrix = MCPI.yawMatrix(yaw);
      clearTimeout(MCPI.timerID);


