var texts = ['Мне с тобой тепло!',
'Когда ты меня целуешь, я теряю голову!',
'Ты мой улыбака ^_^',
'Самый милашный на той стороне Девяткино)',
'Мне достаточно видеть твои глаза и веснушки, чтобы быть счастливой',
'Хочется радовать тебя каждый день',
'Мой милый кек!',
'Самый комфортный и теплый, как любимый пледик',
'От твоей улыбки у меня бабочки в животе',
'Рядом с тобой я ничего не боюсь!',
'Ты моя любимая моська!',
'Ты - моя макарошка на тарелке!',
'Ты будешь лучшим дедом-пердедом!',
'Очень грустно просыпаться без тебя :&nbsp;(',
'Когда ты пишешь, я готова все бросить и бежать к тебе!',
'Растворяюсь в твоих обнимашках',
'Готова не разбрасывать носки ради тебя!',
'Рядом с тобой я не замечаю никого вокруг',
'Ты мой сладкий пирожочек)',
'Ты делаешь меня улыбаться!'];

function text() {
	var random = Math.floor(Math.random() * 10 + Math.random() * 10);
	var text = document.querySelector('.text');
	text.innerHTML = texts[random];		
	
	
}

setInterval(text, 3500);