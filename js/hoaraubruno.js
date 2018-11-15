$(function() {
  var words = [
    'un Développeur',
    'un Designer',
    'un Wilder'
  ],
  i = 0;

// On gére l'affichage du menu responsif pour les écrans inférieurs ou égaux a medium (<992px)
 $(".navbar-responsive").toggle();

 $(".menu").click(function () {
   $(".navbar-responsive").toggle("slow");
 });

// On gére l'affichage aléatoire des phrases d'accroche du header (toutes les 3.5 secondes)
setInterval(function (){
  $("#word").fadeOut(function() {
    $(this).html(words[i = (i + 1) % words.length]).fadeIn();
  });
}, 3500);

// On gére le scroll vers les differentes sections du site
$(".scroll").click(function(){
  var section = $("." + this.id);
  $("html,body").animate({scrollTop: section.offset().top}, 'slow');
 });

 // On gére les progress-bar pour les compétences
 window.sr = ScrollReveal();
 sr.reveal('.progress-bar',{
   origin: 'left',
   duration: 2000,
   distance: '100%',
 })
});
