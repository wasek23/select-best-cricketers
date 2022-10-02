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
const selectedPlayersEl = document.getElementById('selectedPlayers');
const calculatePlayerExpensesBtn = document.getElementById('calculatePlayerExpenses');
const playerExpensesEl = document.getElementById('playerExpenses');

// Display Players
playersEl.innerHTML = playersList.map(player => `<div id='player-${player.id}' class='flex flex-col items-center bg-black-0d'>
	<img src='${player.photo}' alt='${player.name}' class='h-52' />

	<div class='w-full flex flex-col items-center p-4'>
		<h3 class='text-xl font-extrabold mb-2'>${player.name}</h3>

		<div class='w-full max-w-[200px] text-light-b3 flex items-center justify-between mb-6'>
			<span>${player.runs} runs</span>
			-
			<span>${player.wickets} wkts</span>
		</div>

		<button player='${player.id}' class='w-full font-semibold text-white uppercase bg-indigo-800 p-2'>Select</button>
	</div>
</div>`).join('');

// Display Selected Players
function displaySelectedPlayers() {
	selectedPlayersEl.innerHTML = selectedPlayers.map((pId, index) => {
		const player = playersList.find(p => p.id === pId);

		return `<li class='flex items-center font-base gap-5 mb-5'>
			<span class='text-xl font-bold text-black-8'>${index + 1}. </span> ${player.name}
		</li>`
	}).join('');
}
displaySelectedPlayers();

// Update player button according event
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

// On select player
playersEl.addEventListener('click', function (e) {
	const playerId = Number(e.target.getAttribute('player'));

	if (playerId > 0) {
		const isSelected = selectedPlayers.includes(playerId);

		if (isSelected) {
			alert('You have selected the player!');
		} else if (!isSelected && selectedPlayers.length < 5) {
			selectedPlayers.push(playerId);
		} else if (!isSelected && selectedPlayers.length >= 5) {
			alert('You cannot select more then 5 players!');
		}

		displaySelectedPlayers();
		updateDisabledState();
	}
});

// Calculate player expenses
calculatePlayerExpensesBtn.addEventListener('click', function () {
	const perPlayerPrice = Number(document.getElementById('perPlayerPrice').value);

	playerExpensesEl.innerText = perPlayerPrice * selectedPlayers.length;
});