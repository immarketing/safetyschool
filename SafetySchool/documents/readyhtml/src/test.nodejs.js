// asdfsadfsadfs

function d() {
};

function getTree() {
	// Some logic to retrieve, or generate tree structure
	var tree = [ {
		text : "Parent 1",
		nodes : [ {
			text : "Child 1",
			nodes : [ {
				text : "Grandchild 1"
			}, {
				text : "Grandchild 2"
			} ]
		}, {
			text : "Child 2"
		} ]
	}, {
		text : "Parent 2"
	}, {
		text : "Parent 3"
	}, {
		text : "Parent 4"
	}, {
		text : "Parent 5"
	}, {
		text : "Parent 2"
	}, {
		text : "Parent 3"
	}, {
		text : "Parent 4"
	}, {
		text : "Parent 5"
	}, {
		text : "Parent 2"
	}, {
		text : "Parent 3"
	}, {
		text : "Parent 4"
	}, {
		text : "Parent 5"
	}, {
		text : "Parent 2"
	}, {
		text : "Parent 3"
	}, {
		text : "Parent 4"
	}, {
		text : "Parent 5"
	}, {
		text : "Parent 2"
	}, {
		text : "Parent 3"
	}, {
		text : "Parent 4"
	}, {
		text : "Parent 5"
	} ];
	return tree;
}

$('#tree').treeview({
	data : getTree()
});

$('#tree').on('nodeSelected', function(event, data) {
	// Your logic goes here
	console.log( "You clicked a paragraph!" );
	console.log( event );
	console.log( data );
	$('div#itemIdHolder').html(data.nodeId);
});
