// asdfsadfsadfs

function d() {
};

function getTree() {
	// Some logic to retrieve, or generate tree structure
	var tree = [
			{
				text : "Курс <b>ПРОГРАММА ОБУЧЕНИЯ ПОЖАРНО-ТЕХНИЧЕСКОГО МИНИМУМА ДЛЯ РУКОВОДИТЕЛЕЙ, ОТВЕТСТВЕННЫХ ЗА ПОЖАРНУЮ БЕЗОПАСНОСТЬ ОБЪЕКТОВ КУЛЬТУРЫ, ТЕАТРОВ, КИНОТЕАТРОВ, ЦИРКОВ, КЛУБОВ, БИБЛИОТЕК (Ф2)</b>",
				agTime : 0,
				nodes : [
						{
							text : "<b>1.</b> Законодательная база в области пожарной безопасности",
							agTime : 0,
							nodes : [
									{
										text : "<b>1.1.</b> Федеральные законы",
										agTime : 0,

									},
									{
										text : "<b>1.2.</b> Ответственность арендаторов по пожарной безопасности",
										agTime : 5,

									},
									{
										text : "<b>1.3.</b> Расчет пожарного риска",
										agTime : 10,
									},
									{
										text : "<b>1.4.</b> Другие нормативные документы"
									} ]
						},
						{
							text : "<b>2.</b> Порядок проведения мероприятий по надзору",
							nodes : [
									{
										text : "<b>2.1.</b> Нормативные акты, ведомственные документы"
									},
									{
										text : "<b>2.2.</b> Принципы защиты лиц при проведении проверок"
									},
									{
										text : "<b>2.3.</b> Предмет проведения проверки"
									},
									{
										text : "<b>2.4.</b> Виды мероприятий по контролю",
										nodes : [
												{
													text : "<b>2.4.1.</b> Плановая проверка"
												},
												{
													text : "<b>2.4.2.</b> Внеплановая проверка"
												}

										]
									} ]
						} ]
			},
			{
				text : "Еще один замечательный курс"
			},
			{
				text : "Курс №2 пожарной подготовки к самым сложным ситуациям в природе"
			},
			{
				text : "Курс №3 пожарной подготовки к самым сложным ситуациям в природе"
			},
			{
				text : "Курс №4 пожарной подготовки к самым сложным ситуациям в природе"
			} ];
	return tree;

}

$('#tree').treeview({
	data : getTree()
});

$('#tree').on('nodeSelected', function(event, data) {
	// Your logic goes here
	console.log("You clicked a paragraph!");
	console.log(event);
	console.log(data);
	$('div#itemIdHolder').html(data.agTime);
	$("#jquery_jplayer_1").jPlayer("play", data.agTime);
});

$(document)
.ready(
		function() {
			$("#jquery_jplayer_1")
					.jPlayer(
							{
								ready : function() {
									$(this)
											.jPlayer(
													"setMedia",
													{
														title : "Big Buck Bunny Trailer",
														//m4v : "http://www.jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v",
														m4v : "http://magaz.auditbezopasnosti.ru/kurs_1.mp4",
														//ogv : "http://www.jplayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv",
														poster : "http://www.jplayer.org/video/poster/Big_Buck_Bunny_Trailer_480x270.png"
													});
								},
								cssSelectorAncestor : "#jp_container_1",
								swfPath : "/js",
								supplied : "m4v, ogv",
								useStateClassSkin : true,
								autoBlur : false,
								smoothPlayBar : true,
								keyEnabled : true,
								remainingDuration : true,
								toggleDuration : true
							});
		});
