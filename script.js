var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Sorry')
    .pauseFor(2000)
    .deleteAll()
    .typeString('Shrabani')
    .pauseFor(2500)
    .deleteChars(7)
    .start();