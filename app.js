let octave = 5;
var AudioContextFunc = window.AudioContext || window.webkitAudioContext;
var audioContext = new AudioContextFunc();
var player = new WebAudioFontPlayer();
player.loader.decodeAfterLoading(audioContext, '_tone_0121_FluidR3_GM_sf2_file');

function play(note){
		console.log(octave.toString()+note.toString());
	const keyboardKey = document.querySelector(`._${octave.toString()+note.toString()}`);
	keyboardKey.classList.add('light');
	player.queueWaveTable(audioContext, audioContext.destination
		, _tone_0121_FluidR3_GM_sf2_file, 0, 12*octave+note, 10);
	return false;
}

const keysDown = [];

const keys = [['a'],['w'],['s'],['e'],['d'],['f'],['t'],['g'],['y'],['h'],['u'],['j'],['k'],['o'],['l']];

function cancelKey(index,note){
	const keyboardKey = document.querySelector(`._${octave.toString()+note.toString()}`);
	keyboardKey.classList.remove('light');

	if(player.envelopes[index]){
		player.envelopes[index].cancel();
	}
	keysDown.splice(index,1);
	player.envelopes.splice(index,1);
}

function stop(e){

	switch(e.key){
	case 'a':
		cancelKey(keysDown.indexOf('a'),1);
		break;
	case 'w':
		cancelKey(keysDown.indexOf('w'),2);
		break;
	case 's':
		cancelKey(keysDown.indexOf('s'),3);
		break;
	case 'e':
		cancelKey(keysDown.indexOf('e'),4);
		break;
	case 'd':
		cancelKey(keysDown.indexOf('d'),5);
		break;
	case 'f':
		cancelKey(keysDown.indexOf('f'),6);
		break;
	case 't':
		cancelKey(keysDown.indexOf('t'),7);
		break;
	case 'g':
		cancelKey(keysDown.indexOf('g'),8);
		break;
	case 'y':
		cancelKey(keysDown.indexOf('y'),9);
		break;
	case 'h':
		cancelKey(keysDown.indexOf('h'),10);
		break;
	case 'u':
		cancelKey(keysDown.indexOf('u'),11);
		break;
	case 'j':
		cancelKey(keysDown.indexOf('j'),12);
		break;
	case 'k':
		cancelKey(keysDown.indexOf('k'),13);
		break;
	case 'o':
		cancelKey(keysDown.indexOf('o'),14);
		break;
	case 'l':
		cancelKey(keysDown.indexOf('l'),15);
		break;
	default:
		break;
	}
}

let down = false;
const playSound = (e) => {
	if (e.repeat){return;}
	if(keysDown.length<7){
		switch(e.key){
		case 'a':
			if(!keysDown.includes('a')){
				play(1);
				keysDown.push('a');
			}else{
				cancelKey(keysDown.indexOf('a'));
			}
			break;
		case 'w':
			if(!keysDown.includes('w')){
				play(2);
				keysDown.push('w');
			}else{
				cancelKey(keysDown.indexOf('w'));
			}
			break;
		case 's':
			if(!keysDown.includes('s')){
				play(3);
				keysDown.push('s');
			}else{
				cancelKey(keysDown.indexOf('s'));
			}
			break;
		case 'e':
			if(!keysDown.includes('e')){
				play(4);
				keysDown.push('e');
			}else{
				cancelKey(keysDown.indexOf('e'));
			}
			break;
		case 'd':
			if(!keysDown.includes('d')){
				play(5);
				keysDown.push('d');
			}else{
				cancelKey(keysDown.indexOf('d'));
			}
			break;
		case 'f':
			if(!keysDown.includes('f')){
				play(6);
				keysDown.push('f');
			}else{
				cancelKey(keysDown.indexOf('f'));
			}
			break;
		case 't':
			if(!keysDown.includes('t')){
				play(7);
				keysDown.push('t');
			}else{
				cancelKey(keysDown.indexOf('t'));
			}
			break;
		case 'g':
			if(!keysDown.includes('g')){
				play(8);
				keysDown.push('g');
			}else{
				cancelKey(keysDown.indexOf('g'));
			}
			break;
		case 'y':
			if(!keysDown.includes('y')){
				play(9);
				keysDown.push('y');
			}else{
				cancelKey(keysDown.indexOf('y'));
			}
			break;
		case 'h':
			if(!keysDown.includes('h')){
				play(10);
				keysDown.push('h');
			}else{
				cancelKey(keysDown.indexOf('h'));
			}
			break;
		case 'u':
			if(!keysDown.includes('u')){
				play(11);
				keysDown.push('u');
			}else{
				cancelKey(keysDown.indexOf('u'));
			}
			break;
		case 'j':
			if(!keysDown.includes('j')){
				play(12);
				keysDown.push('j');
			}else{
				cancelKey(keysDown.indexOf('j'));
			}
			break;
		case 'k':
			if(!keysDown.includes('k')){
				play(13);
				keysDown.push('k');
			}else{
				cancelKey(keysDown.indexOf('k'));
			}
			break;
		case 'o':
			if(!keysDown.includes('o')){
				play(14);
				keysDown.push('o');
			}else{
				cancelKey(keysDown.indexOf('o'));
			}
			break;
		case 'l':
			if(!keysDown.includes('l')){
				play(15);
				keysDown.push('l');
			}else{
				cancelKey(keysDown.indexOf('l'));
			}
			break;
		case 'z':
			octave--;
			break;
		case 'x':
			octave++;
			break;
		default:
			break;
		}
	}else{
		return;
	}
};

window.addEventListener('keydown', playSound, false);
window.addEventListener('keyup', stop, false);
