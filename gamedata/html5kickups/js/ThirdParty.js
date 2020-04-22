var ThirdParty = {
GameAds: false,
centerHorizontally: true,
centerVertically: true,
showRotateHint: true,
enableFullscreenToggle: true,

// Called when all assets have been loaded
loadingComplete: function()
{
	 //console.log('API: loadingComplete');
},

// Called when the main menu is showed
mainMenu: function()
{
	//console.log('API: mainMenu');
},

gameHelp: function()
{
	//GameAnalytics.hit('GameHelp');
},

// Called when the game (first level) starts
gameStart: function()
{
	//GameAnalytics.hit('GameStart');
},

// Called when a level is completed
levelComplete: function(level)
{
	//GameAnalytics.hit('LevelComplete', level);
},

// Called when game over
gameOver: function()
{
	//GameAnalytics.hit('GameOver');
},

// Called when game is restarted
restartGame: function()
{
	//console.log('API: restartGame');
},

// Called when game is completed (all levels completed)
gameComplete: function()
{
	//GameAnalytics.hit('GameComplete');
},

showLeaderboard: function()
{
	//console.log('API: showLeaderboard');
	//GameHiscore.leaderBoard();
},

// Called when user is ready to submit a score.
submitScore: function(score)
{
	let pathArray = window.location.pathname.split('/'), newpath = '', currentPath = '';
	for (i = 0; i < pathArray.length; i++) {
		currentPath = pathArray[i].toString().toLowerCase();
		if (currentPath == 'arcade' || currentPath == 'games')
			break;
		newpath += '/' + pathArray[i];
	}
	scorepost(window.location.protocol + '//' + window.location.hostname.replace(/[/]+$/, '') + '/' + newpath.replace(/^[/]+/, '') + '/index.php?act=Arcade&do=newscore', {
		gname : 'html5kickups',
		gscore: score
	});
}

};