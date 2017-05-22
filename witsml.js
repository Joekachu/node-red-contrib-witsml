var Mustache = require('mustache');
module.exports = function(RED) {
    function WitsmlNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
	var add1 = config.msgadd;
	var add2 = config.msgadd2;
	var xml = config.xml;
        node.on('input', function(msg) {
	    var returnobject = {};
            returnobject[add1] = add2;
	    returnobject["textBox"] = Mustache.render(xml, msg.payload);
            msg.payload = returnobject;
	    node.send(msg);
        });
    }
    RED.nodes.registerType("witsml",WitsmlNode);
}