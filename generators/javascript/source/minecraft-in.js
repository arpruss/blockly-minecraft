Blockly.JavaScript.minecraft = function() {
  Blockly.JavaScript.definitions_['minecraft'] = '[[[file:mcinit.js]]]';
  Blockly.JavaScript.cleanups_['minecraft'] = '[[[file:mccleanup.js]]]';
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

