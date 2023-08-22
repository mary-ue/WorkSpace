const citySelect = document.querySelector('#city');
const cityChoices = new Choices(citySelect, {
  searchEnabled: false, // отключить поиск
  itemSelectText: '', // убрать надпись внутри
});
