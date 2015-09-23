Blockly.Blocks.MinecraftHue = 20;
Blockly.Blocks.MinecraftBlocks = [
["air","0"],
["bed","26"],
["bedrock invisible","95"],
["bedrock","7"],
["bookshelf","47"],
["brick block","45"],
["cactus","81"],
["carpet black","171,15"],
["carpet blue","171,11"],
["carpet brown","171,12"],
["carpet cyan","171,9"],
["carpet gray","171,7"],
["carpet green","171,13"],
["carpet light blue","171,3"],
["carpet light gray","171,8"],
["carpet lime","171,5"],
["carpet magenta","171,2"],
["carpet orange","171,1"],
["carpet pink","171,6"],
["carpet purple","171,10"],
["carpet red","171,14"],
["carpet white","171"],
["carpet yellow","171,4"],
["chest","54"],
["clay","82"],
["coal block","173"],
["coal ore","16"],
["cobblestone","4"],
["cobweb","30"],
["crafting table","58"],
["diamond block","57"],
["diamond ore","56"],
["dirt","3"],
["door iron","71"],
["door wood","64"],
["double tallgrass","175,2"],
["farmland","60"],
["fence gate","107"],
["fence","85"],
["fire","51"],
["flower cyan","38"],
["flower yellow","37"],
["furnace active","62"],
["furnace inactive","61"],
["glass pane","102"],
["glass","20"],
["glowstone block","89"],
["gold block","41"],
["gold ore","14"],
["grass tall","31"],
["grass","2"],
["gravel","13"],
["hardened clay stained black","159,15"],
["hardened clay stained blue","159,11"],
["hardened clay stained brown","159,12"],
["hardened clay stained cyan","159,9"],
["hardened clay stained gray","159,7"],
["hardened clay stained green","159,13"],
["hardened clay stained light blue","159,3"],
["hardened clay stained light gray","159,8"],
["hardened clay stained lime","159,5"],
["hardened clay stained magenta","159,2"],
["hardened clay stained orange","159,1"],
["hardened clay stained pink","159,6"],
["hardened clay stained purple","159,10"],
["hardened clay stained red","159,14"],
["hardened clay stained white","159"],
["hardened clay stained yellow","159,4"],
["ice","79"],
["iron block","42"],
["iron ore","15"],
["ladder","65"],
["lapis lazuli block","22"],
["lapis lazuli ore","21"],
["large fern","175,3"],
["lava flowing","10"],
["lava stationary","11"],
["leaves birch decayable","18,2"],
["leaves birch permanent","18,6"],
["leaves jungle decayable","18,3"],
["leaves jungle permanent","18,7"],
["leaves oak decayable","18"],
["leaves oak permanent","18,4"],
["leaves spruce decayable","18,1"],
["leaves spruce permanent","18,5"],
["leaves","18"],
["lilac","175,1"],
["melon","103"],
["moss stone","48"],
["mushroom brown","39"],
["mushroom red","40"],
["obsidian","49"],
["peony","175,5"],
["quartz block","155"],
["redstone block","152"],
["redstone lamp active","124"],
["redstone lamp inactive","123"],
["redstone ore","73"],
["rose bush","175,4"],
["sand","12"],
["sandstone","24"],
["sapling","6"],
["sea lantern","169"],
["snow block","80"],
["snow","78"],
["stained glass black","95,15"],
["stained glass blue","95,11"],
["stained glass brown","95,12"],
["stained glass cyan","95,9"],
["stained glass gray","95,7"],
["stained glass green","95,13"],
["stained glass light blue","95,3"],
["stained glass light gray","95,8"],
["stained glass lime","95,5"],
["stained glass magenta","95,2"],
["stained glass orange","95,1"],
["stained glass pink","95,6"],
["stained glass purple","95,10"],
["stained glass red","95,14"],
["stained glass white","95"],
["stained glass yellow","95,4"],
["stairs cobblestone","67"],
["stairs wood","53"],
["stone brick","98"],
["stone button","77"],
["stone slab double","43"],
["stone slab","44"],
["stone","1"],
["sugar cane","83"],
["sunflower","175"],
["TNT","46"],
["torch","50"],
["water flowing","8"],
["water stationary","9"],
["wood button","143"],
["wood planks","5"],
["wood","17"],
["wool black","35,15"],
["wool blue","35,11"],
["wool brown","35,12"],
["wool cyan","35,9"],
["wool gray","35,7"],
["wool green","35,13"],
["wool light blue","35,3"],
["wool light gray","35,8"],
["wool lime","35,5"],
["wool magenta","35,2"],
["wool orange","35,1"],
["wool pink","35,6"],
["wool purple","35,10"],
["wool red","35,14"],
["wool white","35"],
["wool yellow","35,4"]
];

Blockly.Blocks['minecraft_set_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Put");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(Blockly.Blocks.MinecraftBlocks), "BLOCK");
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("at");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField(",");
    this.appendValueInput("z")
        .setCheck("Number")
        .appendField(",");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.MinecraftHue);
    this.setTooltip('');
    this.setHelpUrl('github.com/arpruss/raspberryjammod');
  }
};

Blockly.Blocks['minecraft_turtle_go'] = {
  init: function() {
    this.appendValueInput("DISTANCE")
        .setCheck("Number")
        .appendField("Turtle forward");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.MinecraftHue);
    this.setTooltip('');
    this.setHelpUrl('github.com/arpruss/raspberryjammod');
  }
};

Blockly.Blocks['minecraft_post_to_chat'] = {
  init: function() {
    this.appendValueInput("MESSAGE")
        .setCheck("String")
        .appendField("Post to chat");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.MinecraftHue);
    this.setTooltip('');
    this.setHelpUrl('github.com/arpruss/raspberryjammod');
  }
};

Blockly.Blocks['minecraft_turtle_yaw'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turtle turn");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["left \u27F2", "-1"], ["right \u27F3", "1"]]), "DIRECTION");
    this.appendValueInput("ANGLE")
        .setCheck("Number")
        .appendField("by");
    this.appendDummyInput()
        .appendField("\u00B0");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.MinecraftHue);
    this.setTooltip('');
    this.setHelpUrl('github.com/arpruss/raspberryjammod');
  }
};

Blockly.Blocks['minecraft_turtle_pitch'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turtle pitch");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["down", "-1"], ["up", "1"]]), "DIRECTION");
    this.appendValueInput("ANGLE")
        .setCheck("Number")
        .appendField("by");
    this.appendDummyInput()
        .appendField("\u00B0");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.MinecraftHue);
    this.setTooltip('');
    this.setHelpUrl('github.com/arpruss/raspberryjammod');
  }
};

Blockly.Blocks['minecraft_turtle_roll'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turtle roll");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["left \u27F2", "-1"], ["right \u27F3", "1"]]), "DIRECTION");
    this.appendValueInput("ANGLE")
        .setCheck("Number")
        .appendField("by");
    this.appendDummyInput()
        .appendField("\u00B0");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.MinecraftHue);
    this.setTooltip('');
    this.setHelpUrl('github.com/arpruss/raspberryjammod');
  }
};

Blockly.Blocks['minecraft_turtle_set_pen'] = {
  init: function() {
    this.appendValueInput("WIDTH")
        .setCheck("Number")
        .appendField("Set pen width to");
    this.appendDummyInput()
        .appendField("and block to");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(Blockly.Blocks.MinecraftBlocks), "BLOCK");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.MinecraftHue);
    this.setTooltip('');
    this.setHelpUrl('github.com/arpruss/raspberryjammod');
  }
};

Blockly.Blocks['minecraft_turtle_pen'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turtle pen");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["up", "0"], ["down", "1"]]), "MODE");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.MinecraftHue);
    this.setTooltip('');
    this.setHelpUrl('github.com/arpruss/raspberryjammod');
  }
};

