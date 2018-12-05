var quizz=[{question:"combiens de pattes à un chat?",value:"4 pas sur",rep1:"2,5 pattes",rep2:"sur un arbre?",rep3:"reponse B",rep4:"4 pas sur"},
    {question:"la terre et t'elle ronde?",value:"oui comme un ballon",rep1:"oui comme un ballon",rep2:"elle et plate",rep3:"en vrai je m'en fou",rep4:"les 3"},
    {question:"la lune et t'elle un satellite de la terre",value:"oui j'ai la TV graçe à elle",rep1:"bha nan ",rep2:"ses un caillou",rep3:"oui j'ai la TV graçe à elle",rep4:"une bonne planet mon pote"},
    {question:"combiens y'a t'ils de départements en france ",value:"103",rep1:"trop",rep2:"103",rep3:"59",rep4:"chê pô"},
    {question:"quand on coupe la queue d'un lézard ",value:"elle repousse",rep1:"elle et remplacer par des pattes ",rep2:"bah elle disparait ",rep3:"elle se double",rep4:"elle repousse"},
    {question:"quel et l'actuel président des etats-unis",value:"trump en vrai un idiot ",rep1:"trump en vrai un idiot ",rep2:"macron",rep3:"putin",rep4:"heu..."},
    {question:"dans quel film arnold schwarzenegger a t'il jouer?",value:"total recall",rep1:"la guerre des mondes",rep2:"pearl arbor",rep3:"titanic",rep4:"total recall"},
    {question:"quel et la 1er oeuvre de Osamu tezuka",value:"le roi leo",rep1:"black jack",rep2:"le roi leo",rep3:"astro-boy",rep4:"albator"},
    {question:"quel etait le 1er nom donner à la gamecube",value:"la dolphine",rep1:"la nintendo128",rep2:"the cube",rep3:"la dolphine",rep4:"la nintendo super"},
    {question:"comment son representer les français",value:"baguette+vin",rep1:"baguette+vin",rep2:"raquette+balle",rep3:"mangeur de frommage",rep4:"bha en gilet jaune"},];
var score=0;
var i=0;
var c=0;
$('#question').html(quizz[0].question);
$('#rep1').html(quizz[0].rep1);
$('#rep2').html(quizz[0].rep2);
$('#rep3').html(quizz[0].rep3);
$('#rep4').html(quizz[0].rep4);
for (let s=1;s<=4;s++){
$('#rep'+s).click(function () {

        console.log(i);
        console.log(quizz[i].value);
        console.log($("#rep"+s).html());

if (quizz[i].value===$('#rep'+s).html()){
    score++;
}  if (c===9){
            $("#quizz").hide();
            $("#score").show();
            $("#score").html("nombre de bonnes reponses"+score);
        }
        if (i <= 9) {

            i++;
            $('#question').html(quizz[i].question);
            $('#rep1').html(quizz[i].rep1);
            $('#rep2').html(quizz[i].rep2);
            $('#rep3').html(quizz[i].rep3);
            $('#rep4').html(quizz[i].rep4);
            c++;

        }

}
)
}





