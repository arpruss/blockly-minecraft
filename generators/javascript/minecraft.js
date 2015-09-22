Blockly.JavaScript.minecraft = function() {
  Blockly.JavaScript.definitions_['minecraft'] = "//initialize Minecraft code\n"+
"\n"+
"var MCPI = Object.create(null);\n"+
"\n"+
"MCPI.identityMatrix = [[1,0,0],[0,1,0],[0,0,1]];\n"+
"MCPI.TO_RADIANS = Math.PI / 180;\n"+
"MCPI.block = \"1\";\n"+
"\n"+
"MCPI.mmMultiply = function(a,b) {\n"+
"    c = MCPI.identityMatrix;\n"+
"    for (var i = 0; i < 3 ; i++) for (var j = 0; j < 3 ; j++)\n"+
"      c[i][j] = a[i][0]*b[0][j] + a[i][1]*b[1][j] + a[i][2]*b[2][j];\n"+
"    return c;\n"+
"};\n"+
"\n"+
"MCPI.mvMultiply = function(a,b) {\n"+
"    c = [0,0,0];\n"+
"    for (var i = 0; i < 3 ; i++)\n"+
"      c[i] = a[i][0]*b[0] + a[i][1]*b[1] + a[i][2]*b[2];\n"+
"    return c;\n"+
"};\n"+
"\n"+
"MCPI.vvAdd = function(a,b) {\n"+
"    return [a[0]+b[0],a[1]+b[1],a[2]+b[2]];\n"+
"};\n"+
"\n"+
"MCPI.vvSub = function(a,b) {\n"+
"    return [a[0]-b[0],a[1]-b[1],a[2]-b[2]];\n"+
"};\n"+
"\n"+
"MCPI.yawMatrix = function(angleDegrees) {\n"+
"    var theta = angleDegrees * MCPI.TO_RADIANS;\n"+
"    return [[Math.cos(theta), 0., -Math.sin(theta)],\n"+
"            [0.,         1., 0.],\n"+
"            [Math.sin(theta), 0., Math.cos(theta)]];\n"+
"};\n"+
"\n"+
"MCPI.rollMatrix = function(angleDegrees) {\n"+
"    var theta = angleDegrees * MCPI.TO_RADIANS;\n"+
"    return [[Math.cos(theta), -Math.sin(theta), 0.],\n"+
"            [Math.sin(theta), Math.cos(theta),0.],\n"+
"            [0.,          0.,          1.]];\n"+
"};\n"+
"\n"+
"MCPI.pitchMatrix = function(angleDegrees) {\n"+
"    var theta = angleDegrees * MCPI.TO_RADIANS;\n"+
"    return [[1.,          0.,          0.],\n"+
"            [0., Math.cos(theta),Math.sin(theta)],\n"+
"            [0., -Math.sin(theta),Math.cos(theta)]];\n"+
"};\n"+
"\n"+
"MCPI.getLine = function(x1,y1,z1,x2,y2,z2) {\n"+
"    var line = [];\n"+
"    x1 = Math.floor(x1);\n"+
"    y1 = Math.floor(y1);\n"+
"    z1 = Math.floor(z1);\n"+
"    x2 = Math.floor(x2);\n"+
"    y2 = Math.floor(y2);\n"+
"    z2 = Math.floor(z2);\n"+
"    var point = [x1,y1,z1];\n"+
"    var dx = x2 - x1;\n"+
"    var dy = y2 - y1;\n"+
"    var dz = z2 - z1;\n"+
"    var x_inc = dx < 0 ? -1 : 1;\n"+
"    var l = Math.abs(dx);\n"+
"    var y_inc = dy < 0 ? -1 : 1;\n"+
"    var m = Math.abs(dy);\n"+
"    var z_inc = dz < 0 ? -1 : 1;\n"+
"    var n = Math.abs(dz);\n"+
"    var dx2 = l * 2;\n"+
"    var dy2 = m * 2;\n"+
"    var dz2 = n * 2;\n"+
"\n"+
"    if (l >= m && l >= n) {\n"+
"        var err_1 = dy2 - l;\n"+
"        var err_2 = dz2 - l;\n"+
"        for (var i=0; i<l; i++) {\n"+
"            line.push([point[0],point[1],point[2]]);\n"+
"            if (err_1 > 0) {\n"+
"                point[1] += y_inc;\n"+
"                err_1 -= dx2;\n"+
"            }\n"+
"            if (err_2 > 0) {\n"+
"                point[2] += z_inc;\n"+
"                err_2 -= dx2;\n"+
"            }\n"+
"            err_1 += dy2;\n"+
"            err_2 += dz2;\n"+
"            point[0] += x_inc;\n"+
"        }\n"+
"    }\n"+
"    else if (m >= l && m >= n) {\n"+
"        err_1 = dx2 - m;\n"+
"        err_2 = dz2 - m;\n"+
"        for (var i=0; i<m; i++) {\n"+
"            line.push([point[0],point[1],point[2]]);\n"+
"            if (err_1 > 0) {\n"+
"                point[0] += x_inc;\n"+
"                err_1 -= dy2;\n"+
"            }\n"+
"            if (err_2 > 0) {\n"+
"                point[2] += z_inc;\n"+
"                err_2 -= dy2;\n"+
"            }\n"+
"            err_1 += dx2;\n"+
"            err_2 += dz2;\n"+
"            point[1] += y_inc;\n"+
"        }\n"+
"    }\n"+
"    else {\n"+
"        err_1 = dy2 - n;\n"+
"        err_2 = dx2 - n;\n"+
"        for (var i=0; i < n; i++) {\n"+
"            line.push([point[0],point[1],point[2]]);\n"+
"            if (err_1 > 0) {\n"+
"                point[1] += y_inc;\n"+
"                err_1 -= dz2;\n"+
"            }\n"+
"            if (err_2 > 0) {\n"+
"                point[0] += x_inc;\n"+
"                err_2 -= dz2;\n"+
"            }\n"+
"            err_1 += dy2;\n"+
"            err_2 += dx2;\n"+
"            point[2] += z_inc;\n"+
"        }\n"+
"    }\n"+
"    line.push([point[0],point[1],point[2]]);\n"+
"    if (point[0] != x2 || point[1] != y2 || point[2] != z2) {\n"+
"        line.push([x2,y2,z2]);\n"+
"    }\n"+
"    return line;\n"+
"};\n"+
"\n"+
"MCPI.setBlock = function(x,y,z,block) {\n"+
"  MCPI.socket.send(\"world.setBlock(\"+x+\",\"+y+\",\"+z+\",\"+block+\")\");\n"+
"}\n"+
"\n"+
"MCPI.drawLine = function(x1,y1,z1,x2,y2,z2) {\n"+
"    l = MCPI.getLine(x1,y1,z1,x2,y2,z2);\n"+
"    for (var i=0; i<l.length ; i++) {\n"+
"        MCPI.setBlock(l[i][0],l[i][1],l[i][2],MCPI.block);\n"+
"    }\n"+
"}\n"+
"\n"+
"MCPI.turtleYaw = function(angleDegrees) {\n"+
"    MCPI.matrix = mmMultiply(MCPI.matrix, MCPI.yawMatrix(angleDegrees));\n"+
"};\n"+
"\n"+
"MCPI.turtlePitch = function(angleDegrees) {\n"+
"    MCPI.matrix = mmMultiply(MCPI.matrix, MCPI.pitchMatrix(angleDegrees));\n"+
"};\n"+
"\n"+
"MCPI.turtleRoll = function(angleDegrees) {\n"+
"    MCPI.matrix = mmMultiply(MCPI.matrix, MCPI.rollMatrix(angleDegrees));\n"+
"};\n"+
"\n"+
"MCPI.turtleGo = function(distance) {\n"+
"    var heading = [MCPI.matrix[0][2],MCPI.matrix[1][2],MCPI.matrix[2][2]]\n"+
"    var newX = MCPI.curX + MCPI.matrix[0][2] * distance;\n"+
"    var newY = MCPI.curY + MCPI.matrix[1][2] * distance;\n"+
"    var newZ = MCPI.curZ + MCPI.matrix[2][2] * distance;\n"+
"    if (MCPI.penDown)\n"+
"        MCPI.drawLine(MCPI.curX,MCPI.curY,MCPI.curZ,newX,newY,newZ);\n"+
"    MCPI.curX = newX;\n"+
"    MCPI.curY = newY;\n"+
"    MCPI.curZ = newZ;\n"+
"};\n"+
"\n"+
"MCPI.socket = new WebSocket(\"ws://127.0.0.1:14711\");\n"+
"\n"+
"MCPI.socket.onopen = function(event) {\n"+
"  MCPI.socket.onmessage = function(event) {\n"+
"    var args = event.data.trim().split(\",\");\n"+
"    MCPI.playerX = parseFloat(args[0]);\n"+
"    MCPI.playerY = parseFloat(args[1]);\n"+
"    MCPI.playerZ = parseFloat(args[2]);\n"+
"    MCPI.curX = MCPI.playerX\n"+
"    MCPI.curY = MCPI.playerY\n"+
"    MCPI.curZ = MCPI.playerZ\n"+
"\n"+
"    MCPI.socket.onmessage = function(event) {\n"+
"      var yaw = parseFloat(event.data.trim());\n"+
"\n"+
"      MCPI.socket.onmessage = function(event) {\n"+
"      var pitch = parseFloat(event.data.trim());\n"+
"      MCPI.matrix = MCPI.mmMultiply(MCPI.yawMatrix(yaw), MCPI.pitchMatrix(-pitch));\n"+
"\n";
  Blockly.JavaScript.cleanups_['minecraft'] = "MCPI.socket.close();\n"+
"}; // end MCPI.socket.onmessage for player.getRotation()\n"+
"MCPI.socket.send(\"player.getPitch()\");\n"+
"}; // end MCPI.socket.onmessage for player.getPitch()\n"+
"MCPI.socket.send(\"player.getRotation()\");\n"+
"}; // end MCPI.socket.onmessage for player.getPos()\n"+
"MCPI.socket.send(\"player.getPos()\");\n"+
"}; // end MCPI.socket.onopen\n";
};


Blockly.JavaScript['minecraft_set_block'] = function(block) {
  Blockly.JavaScript.minecraft();

  var dropdown_block = block.getFieldValue('block');
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_z = Blockly.JavaScript.valueToCode(block, 'z', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'MCPI.setBlock('+value_x+','+value_y+','+value_z+',"'+dropdown_block+'");\n';
  return code;
};

Blockly.JavaScript['minecraft_turtle_go'] = function(block) {
  Blockly.JavaScript.minecraft();
  var value_distance = Blockly.JavaScript.valueToCode(block, 'DISTANCE', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'MCPI.turtleGo('+value_distance+');\n';
  return code;
};

Blockly.JavaScript['minecraft_turtle_yaw'] = function(block) {
  Blockly.JavaScript.minecraft();
  var dropdown_direction = block.getFieldValue('DIRECTION');
  var angle_angle = block.getFieldValue('ANGLE');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'MCPI.turtleYaw('+angle_angle+'*'+dropdown_direction+');\n';
  return code;
};

Blockly.JavaScript['minecraft_turtle_pitch'] = function(block) {
  Blockly.JavaScript.minecraft();
  var dropdown_direction = block.getFieldValue('DIRECTION');
  var angle_angle = block.getFieldValue('ANGLE');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'MCPI.turtlePitch('+angle_angle+'*'+dropdown_direction+');\n';
  return code;
};

Blockly.JavaScript['minecraft_turtle_roll'] = function(block) {
  Blockly.JavaScript.minecraft();
  var dropdown_direction = block.getFieldValue('DIRECTION');
  var angle_angle = block.getFieldValue('ANGLE');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'MCPI.turtleRoll('+angle_angle+'*'+dropdown_direction+');\n';
  return code;
};
