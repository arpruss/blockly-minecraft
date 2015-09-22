Blockly.JavaScript.minecraft = function() {
  Blockly.JavaScript.definitions_['minecraft'] = "//initialize Minecraft code\n"+
"\n"+
"var MCPI = Object.create(null);\n"+
"\n"+
"MCPI.identityMatrix = [[1,0,0],[0,1,0],[0,0,1]];\n"+
"MCPI.TO_RADIANS = Math.pi / 180;\n"+
"\n"+
"MCPI.matrixMultiply = function(a,b) {\n"+
"    c = MCPI.identityMatrix;\n"+
"    for (var i = 0; i < 3 ; i++) for (var j = 0; j < 3 ; j++)\n"+
"      c[i][j] = a[i][0]*b[0][j] + a[i][1]*b[1][j] + a[i][2]*b[2][j];\n"+
"    return c;\n"+
"};\n"+
"\n"+
"MCPI.yawMatrix = function(angleDegrees) {\n"+
"    theta = angleDegrees * MCPI.TO_RADIANS;\n"+
"    return [[Math.cos(theta), 0., -Math.sin(theta)],\n"+
"            [0.,         1., 0.],\n"+
"            [Math.sin(theta), 0., Math.cos(theta)]];\n"+
"};\n"+
"\n"+
"MCPI.rollMatrix = function(angleDegrees) {\n"+
"    theta = angleDegrees * MCPI.TO_RADIANS;\n"+
"    return [[Math.cos(theta), -Math.sin(theta), 0.],\n"+
"            [Math.sin(theta), Math.cos(theta),0.],\n"+
"            [0.,          0.,          1.]];\n"+
"};\n"+
"\n"+
"MCPI.pitchMatrix = function(angleDegrees) {\n"+
"    theta = angleDegrees * MCPI.TO_RADIANS;\n"+
"    return [[1.,          0.,          0.],\n"+
"            [0., Math.cos(theta),Math.sin(theta)],\n"+
"            [0., -Math.sin(theta),Math.cos(theta)]];\n"+
"};\n"+
"\n"+
"MCPI.socket = new WebSocket(\"ws://127.0.0.1:14711\");\n"+
"\n"+
"MCPI.socket.onopen = function(event) {\n"+
"\n";
  Blockly.JavaScript.cleanups_['minecraft'] = "\n"+
"} // end of Minecraft code\n"+
"\n";
};


Blockly.JavaScript['minecraft_set_block'] = function(block) {
  Blockly.JavaScript.minecraft();

  var dropdown_block = block.getFieldValue('block');
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_z = Blockly.JavaScript.valueToCode(block, 'z', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'MCPI.socket.send("world.setBlock("+'+value_x+'+","+'+value_y+'+","+'+value_z+'+",'+dropdown_block+')\\n");\n';
  return code;
};

