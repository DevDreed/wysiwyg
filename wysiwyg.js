var famousPeople = [{
  title: "Mr.",
  name: "Dale Earnhardt Jr.",
  bio: "Ralph Dale Earnhardt Jr., known professionally as Dale Earnhardt Jr., Dale Jr., or just Junior, is an American professional stock car racing driver and champion team owner.",
  image: "data:image/jpeg;base64,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",
  lifespan: {
    birth: 1974,
    death: ''
  }
}, {
  title: "Intimidator",
  name: "Dale Earnhardt",
  bio: "Ralph Dale Earnhardt Sr. /ˈɜːrnhɑːrt/, known professionally as Dale Earnhardt, was an American professional stock car racing driver and team owner, best known for his involvement in stock car racing for NASCAR.",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Dale_earnhardt.jpg/220px-Dale_earnhardt.jpg",
  lifespan: {
    birth: 1951,
    death: 2001
  }
}, {
  title: "The Greatest",
  name: "Muhammad Ali",
  bio: "Muhammad Ali /ɑːˈliː/ was an American Olympic and professional boxer and activist. He is widely regarded as one of the most significant and celebrated sports figures of the 20th century.",
  image: "data:image/jpeg;base64,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",
  lifespan: {
    birth: 1942,
    death: 2016
  }
}];

var selectedBio = null;
var outputEl = document.getElementById("container");
for (var x = 0; x < famousPeople.length; x++) {
  // Give each person element a unique identifier
  let person = famousPeople[x];
  const containerClass = (x % 2 === 0) ? 'even' : 'odd';

  outputEl.innerHTML += `<div class="person__container ${containerClass}" id="person--${x}">
  <person>
    <header class="biotitle">${person.title} ${person.name}</header>
    <section>
      <div class='bioimage'>
        <img src='${person.image}'/>
      </div>
      <div class='bio'>${person.bio}</div>
    </section>
    <footer>${person.lifespan.birth} - ${person.lifespan.death}</footer>
  </person>
  </div>`;
}

// Now containerEl will have elements in it
var containerEl = document.getElementsByClassName("person__container");
var bioinput = document.getElementById("bioinput");
// Event listeners are created
for (var i = 0; i < containerEl.length; i++) {
  containerEl[i].addEventListener("click", function(event) {
    for (var x = 0; x < containerEl.length; x++) {
      containerEl[x].classList.remove('dotted-border');
    }
    event.currentTarget.classList.add('dotted-border');
    selectedBio = event.currentTarget;
    bioinput.focus();
    bioinput.value = selectedBio.querySelector('.bio').innerHTML;
  });
}
document.getElementById('bioinput').addEventListener('keyup', function(e) {
  if (selectedBio) {
    selectedBio.querySelector('.bio').innerHTML = this.value;
  }
});

document.getElementById('bioinput').addEventListener('keypress', function(e) {
  if (e.keyCode == 13) {
    selectedBio.classList.remove('dotted-border');
    selectedBio = null;
    this.value = "";
    return false;
  }
});
