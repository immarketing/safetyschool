// asdfsadfsadfs

function d() {
};

function getTree() {
	// Some logic to retrieve, or generate tree structure
	var tree = [ {
		text : "Курс №1 <b>пожарной подготовки к самым сложным ситуациям в природе</b>",
		nodes : [ {
			text : "Раздел 1",
			nodes : [ {
				text : "Тема 1"
			}, {
				text : "Тема 2"
			} ]
		}, {
			text : "Раздел 2"
		} ]
	}, {
		text : "Еще один замечательный курс"
	}, {
		text : "Курс №2 пожарной подготовки к самым сложным ситуациям в природе"
	}, {
		text : "Курс №3 пожарной подготовки к самым сложным ситуациям в природе"
	}, {
		text : "Курс №4 пожарной подготовки к самым сложным ситуациям в природе"
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
