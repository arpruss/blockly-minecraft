Blockly.JavaScript.minecraft = function() {
  Blockly.JavaScript.definitions_['minecraft'] = "//initialize Minecraft code\n"+
"\n"+
"var MCPI = Object.create(null);\n"+
"\n"+
"MCPI.TO_RADIANS = Math.PI / 180;\n"+
"MCPI.block = \"1\";\n"+
"MCPI.penDown = true;\n"+
"MCPI.nib = [[0,0,0]];\n"+
"\n"+
"MCPI.mmMultiply = function(a,b) {\n"+
"    var c = [[0,0,0],[0,0,0],[0,0,0]];\n"+
"    for (var i = 0; i < 3 ; i++) for (var j = 0; j < 3 ; j++)\n"+
"      c[i][j] = a[i][0]*b[0][j] + a[i][1]*b[1][j] + a[i][2]*b[2][j];\n"+
"    return c;\n"+
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
"MCPI.postToChat = function(message) {\n"+
"  MCPI.socket.send(\"chat.post(\"+message+\")\");\n"+
"};\n"+
"\n"+
"MCPI.setBlock = function(x,y,z,block) {\n"+
"  if (block != \"0\" && Math.floor(x) == Math.floor(MCPI.playerX) && Math.floor(z) == Math.floor(MCPI.playerZ)\n"+
"      && (Math.floor(y) >= MCPI.playerShiftedHeight) ) {\n"+
"        MCPI.playerShiftedHeight = Math.floor(y) + 1;\n"+
"        MCPI.socket.send(\"player.setPos(\"+MCPI.playerX+\",\"+MCPI.playerShiftedHeight+\",\"+MCPI.playerZ+\")\");\n"+
"  }\n"+
"  MCPI.socket.send(\"world.setBlock(\"+x+\",\"+y+\",\"+z+\",\"+block+\")\");\n"+
"};\n"+
"\n"+
"MCPI.drawPoint = function(x0,y0,z0) {\n"+
"    var l = MCPI.nib.length;\n"+
"    if (l == 0) {\n"+
"        return;\n"+
"    }\n"+
"    else if (l == 1) {\n"+
"        MCPI.setBlock(x0,y0,z0,MCPI.block);\n"+
"        return;\n"+
"    }\n"+
"\n"+
"    for (var i = 0 ; i < l ; i++) {\n"+
"        var p = MCPI.nib[i];\n"+
"        var x = p[0] + x0;\n"+
"        var y = p[1] + y0;\n"+
"        var z = p[2] + z0;\n"+
"        var indexable = \"\"+x+\",\"+y+\",\"+z;\n"+
"        if (! (indexable in MCPI.saved)) {\n"+
"            MCPI.setBlock(x,y,z,MCPI.block);\n"+
"            MCPI.saved[indexable] = 1;\n"+
"        }\n"+
"    }\n"+
"}\n"+
"\n"+
"MCPI.drawLine = function(x1,y1,z1,x2,y2,z2) {\n"+
"    MCPI.saved = Object.create(null);\n"+
"    var l = MCPI.getLine(x1,y1,z1,x2,y2,z2);\n"+
"    for (var i=0; i<l.length ; i++) {\n"+
"        MCPI.drawPoint(l[i][0],l[i][1],l[i][2]);\n"+
"    }\n"+
"}\n"+
"\n"+
"MCPI.turtleSetWidth = function(w) {\n"+
"    MCPI.nib = [];\n"+
"    if (w == 0) {\n"+
"        return;\n"+
"    }\n"+
"    else if (w == 1) {\n"+
"        MCPI.nib = [[0,0,0]];\n"+
"    }\n"+
"    else if (w == 2) {\n"+
"        for (x=-1; x<=0; x++)\n"+
"          for (y=0; y<=1; y++)\n"+
"            for (z=-1; z<=0; z++)\n"+
"              MCPI.nib.push([x,y,z]);\n"+
"    }\n"+
"    else {\n"+
"      var r = w/2;\n"+
"      var r2 = r*r;\n"+
"      for (var x = -Math.ceil(r) ; x <= Math.ceil(r); x++)\n"+
"        for (var y = -Math.ceil(r) ; y <= Math.ceil(r); y++)\n"+
"          for (var z = -Math.ceil(r) ; z <= Math.ceil(r); z++)\n"+
"            if (x*x + y*y + z*z <= r2)\n"+
"               MCPI.nib.push([x,y,z]);\n"+
"    }\n"+
"}\n"+
"\n"+
"MCPI.turtleYaw = function(angleDegrees) {\n"+
"    MCPI.matrix = MCPI.mmMultiply(MCPI.matrix, MCPI.yawMatrix(angleDegrees));\n"+
"};\n"+
"\n"+
"MCPI.turtlePitch = function(angleDegrees) {\n"+
"    MCPI.matrix = MCPI.mmMultiply(MCPI.matrix, MCPI.pitchMatrix(angleDegrees));\n"+
"};\n"+
"\n"+
"MCPI.turtleRoll = function(angleDegrees) {\n"+
"    MCPI.matrix = MCPI.mmMultiply(MCPI.matrix, MCPI.rollMatrix(angleDegrees));\n"+
"};\n"+
"\n"+
"MCPI.turtleGo = function(distance) {\n"+
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
"MCPI.socket = new WebSocket(\"ws://\" + (location.search.length ? location.search.substr(1) : \"127.0.0.1\") + \":14711\");\n"+
"\n"+
"MCPI.timeoutFunction = function() {\n"+
"   MCPI.socket.close();\n"+
"   window.alert('Cannot connect to Minecraft API. Make sure you have Minecraft running with Raspberry Jam Mod.');\n"+
"   exit();\n"+
"};\n"+
"\n"+
"MCPI.timerID = setTimeout(MCPI.timeoutFunction, 5000);\n"+
"\n"+
"MCPI.socket.onopen = function(event) {\n"+
"  MCPI.socket.onmessage = function(event) {\n"+
"    var args = event.data.trim().split(\",\");\n"+
"    MCPI.playerX = Math.floor(parseFloat(args[0]));\n"+
"    MCPI.playerY = Math.floor(parseFloat(args[1]));\n"+
"    MCPI.playerZ = Math.floor(parseFloat(args[2]));\n"+
"    MCPI.curX = MCPI.playerX;\n"+
"    MCPI.curY = MCPI.playerY;\n"+
"    MCPI.curZ = MCPI.playerZ;\n"+
"    MCPI.playerShiftedHeight = MCPI.playerY;\n"+
"\n"+
"    MCPI.socket.onmessage = function(event) {\n"+
"      var yaw = parseFloat(event.data.trim());\n"+
"      MCPI.matrix = MCPI.yawMatrix(yaw);\n"+
"      clearTimeout(MCPI.timerID);\n"+
"\n"+
"\n";
  Blockly.JavaScript.cleanups_['minecraft'] = "MCPI.socket.close();\n"+
"}; // end MCPI.socket.onmessage for player.getRotation()\n"+
"MCPI.socket.send(\"player.getRotation()\");\n"+
"}; // end MCPI.socket.onmessage for player.getPos()\n"+
"MCPI.socket.send(\"player.getPos()\");\n"+
"}; // end MCPI.socket.onopen\n";
};

Blockly.JavaScript['minecraft_set_block'] = function(block) {
  Blockly.JavaScript.minecraft();

  var dropdown_block = block.getFieldValue('BLOCK');
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ADDITION);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ADDITION);
  var value_z = Blockly.JavaScript.valueToCode(block, 'z', Blockly.JavaScript.ORDER_ADDITION);
  var code = 'MCPI.setBlock('+value_x+'+MCPI.playerX,'+value_y+'+MCPI.playerY,'+value_z+'+MCPI.playerZ,"'+dropdown_block+'");\n';
  return code;
};

Blockly.JavaScript['minecraft_turtle_go'] = function(block) {
  Blockly.JavaScript.minecraft();
  var value_distance = Blockly.JavaScript.valueToCode(block, 'DISTANCE', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'MCPI.turtleGo('+value_distance+');\n';
  return code;
};

Blockly.JavaScript['minecraft_post_to_chat'] = function(block) {
  Blockly.JavaScript.minecraft();
  var value_message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'MCPI.postToChat('+value_message+');\n';
  return code;
};

Blockly.JavaScript['minecraft_turtle_yaw'] = function(block) {
  Blockly.JavaScript.minecraft();
  var dropdown_direction = block.getFieldValue('DIRECTION');
  if (dropdown_direction == '1') {
    var value_angle = Blockly.JavaScript.valueToCode(block, 'ANGLE', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'MCPI.turtleYaw('+value_angle+');\n';
  }
  else {
    var value_angle = Blockly.JavaScript.valueToCode(block, 'ANGLE', Blockly.JavaScript.ORDER_UNARY_NEGATION);
    var code = 'MCPI.turtleYaw(-'+value_angle+');\n';
  }
  return code;
};

Blockly.JavaScript['minecraft_turtle_pitch'] = function(block) {
  Blockly.JavaScript.minecraft();
  var dropdown_direction = block.getFieldValue('DIRECTION');
  if (dropdown_direction == '1') {
    var value_angle = Blockly.JavaScript.valueToCode(block, 'ANGLE', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'MCPI.turtlePitch('+value_angle+');\n';
  }
  else {
    var value_angle = Blockly.JavaScript.valueToCode(block, 'ANGLE', Blockly.JavaScript.ORDER_UNARY_NEGATION);
    var code = 'MCPI.turtlePitch(-'+value_angle+');\n';
  }
  return code;
};

Blockly.JavaScript['minecraft_turtle_roll'] = function(block) {
  Blockly.JavaScript.minecraft();
  var dropdown_direction = block.getFieldValue('DIRECTION');
  if (dropdown_direction == '1') {
    var value_angle = Blockly.JavaScript.valueToCode(block, 'ANGLE', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'MCPI.turtleRoll('+value_angle+');\n';
  }
  else {
    var value_angle = Blockly.JavaScript.valueToCode(block, 'ANGLE', Blockly.JavaScript.ORDER_UNARY_NEGATION);
    var code = 'MCPI.turtleRoll(-'+value_angle+');\n';
  }
  return code;
};

Blockly.JavaScript['minecraft_turtle_pen_block'] = function(block) {
  Blockly.JavaScript.minecraft();
  var dropdown_block = block.getFieldValue('BLOCK');
  var code = 'MCPI.block = "'+dropdown_block+'";\n';
  return code;
};

Blockly.JavaScript['minecraft_turtle_pen_width'] = function(block) {
  Blockly.JavaScript.minecraft();
  var value_width = Blockly.JavaScript.valueToCode(block, 'WIDTH', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'MCPI.turtleSetWidth('+value_width+');\n';
  return code;
};

Blockly.JavaScript['minecraft_turtle_pen'] = function(block) {
  Blockly.JavaScript.minecraft();
  var dropdown_mode = block.getFieldValue('MODE');
  var code = 'MCPI.penDown = '+Boolean(parseInt(dropdown_mode))+';\n';
  return code;
};
