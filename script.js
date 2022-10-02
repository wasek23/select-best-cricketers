const playersList = [
	{ id: 1, name: 'Shakib Al Hasan', photo: 'img/shakib-al-hasan.png', runs: 2045, wickets: 122 },
	{ id: 2, name: 'Mashrafe Mortaza', photo: 'img/mashrafe-mortaza.png', runs: 377, wickets: 42 },
	{ id: 3, name: 'Mushfiqur Rahim', photo: 'img/mushfiqur-rahim.png', runs: 1500, wickets: 0 },
	{ id: 4, name: 'Mahmudullah', photo: 'img/mahmudullah.png', runs: 2121, wickets: 38 },
	{ id: 5, name: 'Mustafizur Rahman', photo: 'img/mustafizur-rahman.png', runs: 59, wickets: 94 },
	{ id: 6, name: 'Afif Hossain', photo: 'img/afif-hossain.png', runs: 844, wickets: 8 },
	{ id: 7, name: 'Hehedi Hasan', photo: 'img/mehedi-hasan.png', runs: 94, wickets: 4 },
	{ id: 8, name: 'Muhammad Saifuddin', photo: 'img/mohammad-saifuddin.png', runs: 196, wickets: 32 },
	{ id: 9, name: 'Nurul Hasan', photo: 'img/nurul-hasan.png', runs: 367, wickets: 0 },
];
const selectedPlayers = [4];

// Select DOM
const playersEl = document.getElementById('players');

// Display Players
playersEl.innerHTML = playersList.map(player => {
	return `<div id='player-${player.id}' class='flex flex-col items-center'>
		<img src='${player.photo}' alt='${player.name}' class='h-52' />

		<div class='w-full flex flex-col items-center p-4'>
			<h3 class='text-xl font-extrabold mb-2'>${player.name}</h3>

			<div class='w-full max-w-[200px] text-light-b3 flex items-center justify-between mb-6'>
				<span>${player.runs} runs</span>
				-
				<span>${player.wickets} wkts</span>
			</div>

			<button player='${player.id}' class='w-full text-white bg-indigo-800 p-2'>Select</button>
		</div>
	</div>`
}).join('');

function updateDisabledState() {
	for (const player of playersList) {
		const button = document.querySelector(`#player-${player.id} button`);

		const isSelected = selectedPlayers.includes(player.id);

		if (isSelected) {
			button.setAttribute('disabled', true);
		} else {
			button.removeAttribute('disabled');
		}
	}
}
updateDisabledState();

playersEl.addEventListener('click', function (e) {
	const playerId = Number(e.target.getAttribute('player'));

	if (playerId > 0) {
		const isSelected = selectedPlayers.includes(playerId);

		if (!isSelected) {
			selectedPlayers.push(playerId);
		} else {
			alert('You have selected the player!');
		}

		updateDisabledState();
	}
});