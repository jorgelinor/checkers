var black = "<button id=%name% "
var black1 = "onclick='show(%id%)' style='display:block; height: 64px; width: 80px; background: black; float:left'></button>"
var white = "<button id=%name% style='display:block; height: 64px; width: 80px; background: #8B4513; float:left'></button>";
var block = "<div style='display:block;  width: 80px; background: white; float:left'>%num%</div>";
var block1 = "<br><div style='display:block;  width: 80px; background: white;'>%num%</div>";
var reset = "<button id='start' onclick='start();change1();' style='margin-left:590; height:40; color:green;'>Reset</button>"
var play = '<button id="start" onclick="start();change();" style="margin-left:590; height:40; color:green;">Play</button>'

var func = function(){
	var a = ["A","B",'C','D','E','F','G','H'];
	var b = ['1','2','3','4','5','6','7','8'];
	var c = [];
	for (var e in a){
		for (var d in b){
			c.push(a[e]+b[d]);
		};
	};
	return c;
};
var func1 = function(){
	var a = ["a","b",'c','d','e','f','g','h'];
	var b = ['1','2','3','4','5','6','7','8'];
	var c = [];
	for (var e in a){
		for (var d in b){
			c.push(a[e]+b[d]);
		};
	};
	return c;
}
var squares = function(){
	var name = func();
	var name1 = func1();
	var n = 0;
	for (var i = 0; i < 4;i++){
		for (var a = 0; a < 4;a++){
			$("#main").append(white.replace('%name%',name[n]));
			n++;
			$("#main").append(black.replace('%name%',name[n])+black1.replace('%id%',name1[n]));
			n++;
		};
		for (var d = 0; d<4;d++){
			$("#main").append(black.replace('%name%',name[n])+black1.replace('%id%',name1[n]));
			n++;
			$("#main").append(white.replace('%name%',name[n]));
			n++;
		};
	};
};
//white = white.replace('%nam%',name[n])

squares();

var nums = function(){
	for (var i = 1;i<9;i++){
		$("#col").append(block.replace("%num%",i));
	};
};

nums();

var lets = function(){
	var a = ["A",'B','C','D','E','F','G','H'];
	for (var i = 0;i<8;i++){
		$("#row").append(block1.replace("%num%",a[i]));
	};
};

lets();
var availableTokens = ["A2", "A4", "A6", "A8","B1", "B3", "B5", "B7", "C2", "C4", "C6", "C8","D1", "D3", "D5", "D7", "E2", "E4", "E6", "E8","F1", "F3", "F5", "F7", "G2", "G4", "G6", "G8", "H1", "H3", "H5", "H7"]
var a2=['A2','B1','B3','a','a'],a4=['A4','B3','B5','a','a'],a6=['A6','B5','B7','a','a'],a8=['A8','B7'],b1=['B1','C2','a','a','A2'],b3=['B3','C2','C4','A2','A4'],b5=['B5','C4','C6','A4','A6'],b7=['B7','C6','C8','A6','A8'],c2=['C2','D1','D3','B1','B3'],c4=['C4','D3','D5','B3','B5'],c6=['C6','D5','D7','B5','B7'],c8=['C8','D7','a','a','B7']
var d1=['D1','E2','a','a','C2'],d3=['D3','E2','E4','C2','C4'],d5=['D5','E4','E6','C4','C6'],d7=['D7','E6','E8','C6','C8'],e2=['E2','F1','F3','D1','D3'],e4=['E4','F3','F5','D3','D5'],e6=['E6','F5','F7','D5','D7'],e8=['E8','F7','a','a','D7']
var f1=['F1','G2','a','a','E2'],f3=['F3','G2','G4','E2','E4'],f5=['F5','G4','G6','E4','E6'],f7=['F7','G6','G8','E6','E8'],g2=['G2','H1','H3','F1','F3'],g4=['G4','H3','H5','F3','F5'],g6=['G6','H5','H7','F5','F7'],g8=['G8','H7','a','a','F7'],h1=['H1','a','a','a','G2'],h3=['H3','a','a','G2','G4'],h5=['H5','a','a','G4','G6'],h7=['H7','a','a','G6','G8']
function Player(player) {
    player = new Image();
    player.src = 'images/coin.png';
    player.style.cursor = 'pointer'
    player.id = 'coin'
    return player;
};

function Player1(player) {
    player = new Image();
    player.src = 'images/coin2.png';
    player.style.cursor = 'pointer'
    player.id = 'coin1'
    return player;
};

var start = function(){
	if ($("#A2").find('img').length < 1){
		for (var i=0;i<12;i++){
			var token = new Player();
			$("#"+availableTokens[i]).append(token)
		}
		for (var e=20;e<32;e++){
			var token = new Player1();
			$("#"+availableTokens[e]).append(token)
		}
	}
};

var tokenIn = function(a){
	if ($(a).find('img').length > 0){
		return true
	}else{
		return false
	}
}
var n = 0;
var change = function(){
	$("#start").remove()
	$("#main").append(reset)
}
var change1 = function(){
	$("#start").remove()
	$("#row").empty();
	$("#col").empty();
	$("#main").empty();
	nums();
	lets();
	squares();
	$("#main").append(play)
}
$("button").click(function() {
                var oID = $(this).attr("id");
                });
var show = function(a){
	var token1 = new Player();
	var token2 = new Player1();
	if ($('#'+a[0]).find('img').length > 0){
		if ($('#'+a[0]).find('#coin').length > 0){
			if ($("#"+a[1]).find('#coin').length === 0){
				$("#"+a[1]).fadeOut(800).fadeIn(200);
				$("#"+a[1]).unbind('click')
				$("#"+a[1]).click(function(){
					if ($("#"+a[1]).find('img').length === 0){
						$("#"+a[1]).append(token1)
						$('#'+a[0]).empty();}
					$("#"+a[2]).unbind('click')
					$("#"+a[0]).unbind('click')
				})
			}
			if ($("#"+a[2]).find('#coin').length === 0){
				$("#"+a[2]).fadeOut(800).fadeIn(200);
				$("#"+a[2]).unbind('click')
				$("#"+a[2]).click(function(){
					if ($("#"+a[2]).find('img').length === 0){
						$("#"+a[2]).append(token1)
						$('#'+a[0]).empty()}
					$("#"+a[1]).unbind('click')
					$("#"+a[0]).unbind('click')
				})
			}
		}else{
			if ($("#"+a[a.length-1]).find('#coin1').length === 0){
				$("#"+a[a.length-1]).fadeOut(800).fadeIn(200);
				$("#"+a[a.length-1]).unbind('click')
				$("#"+a[a.length-1]).click(function(){
					if ($("#"+a[a.length-1]).find('img').length === 0){
						$("#"+a[a.length-1]).append(token2)
						$('#'+a[0]).empty();}
					$("#"+a[a.length-2]).unbind('click')
					$("#"+a[0]).unbind('click')
				})
			}
			if ($("#"+a[a.length-2]).find('#coin1').length === 0){
				$("#"+a[a.length-2]).fadeOut(800).fadeIn(200);
				$("#"+a[a.length-2]).unbind('click')
				$("#"+a[a.length-2]).click(function(){
					if ($("#"+a[a.length-2]).find('img').length === 0){
						$("#"+a[a.length-2]).append(token2)
						$('#'+a[0]).empty();}
					$("#"+a[a.length-1]).unbind('click')
					$("#"+a[0]).unbind('click')
				})
			}
		}
	}
}
var blue = 'coin1',yellow = 'coin'
var tokensPos = function(item){
	var names = func();
	var result = [];
	for (e in names){
		if ($('#'+names[e]).find('#'+item).length > 0){
			result.push(names[e])
		}
	}
	return result
}