function scrollTo(elemId) {
   document.getElementById(elemId).scrollIntoView(true);
}

function toggleImg(imgObj) {
   if (imgObj.className == "thumb") {
      // Shrink down other enlarged image(s)
      var x = document.getElementsByClassName("thumb-enlarged");
      var i;
      for (i = 0; i < x.length; i++) {
         x[i].className = "thumb";
      }

      imgObj.className = "thumb-enlarged"; 
   }
   else {
      imgObj.className = "thumb"; 
   }
}

function quoteChange() {
   var numQuotes = 6;
   var quoteArr = 
   [
      {qt: "If only we'd stop trying to be happy we'd have a pretty good time.", at: "Edith Newbold Wharton"},
      {qt: "Every man for himself, his own ends, the Devil for all.", at: "Robert Burton"},
      {qt: "Our guiding idea has been, other things being equal, complexity in a model indicates vacuousness rather than sophistication.", at: "J.M. Maciejowski"},
      {qt: "I will have no man work for me who has not the capacity to become a partner.", at: "James Cash Penney"},
      {qt: "If you give to a thief he cannot steal from you, and he is no longer a thief.", at: "William Saroyan"},
      {qt: "Chaos is only that instance whose repetition we have not yet discovered.", at: "Matt Berry"},
      {qt: "I have no use for adventures. They're nasty disturbing things that make you late for dinner.", at: "Theodore Bilbo"},
      {qt: "We must be prepared to make heroic sacrifices for the cause of peace that we make ungrudgingly for the cause of war. There is no task that is more important or closer to my heart.", at: "Albert Einstein"},
      {qt: "He was not merely a chip off the old block, but the old block itself.", at: "Edmund Burke"},
      {qt: "The measure of a man is not the number of his servants but in the number of people whom he serves.", at: "Paul D. Moody"},
      {qt: "I would fight for my liberty so long as my strength lasted, and if the time came for me to go, the Lord would let them take me.", at: "Harriet Tubman"},
      {qt: "Madam, before you flatter a man so grossly to his face, you should consider whether or not your flattery is worth his having.", at: "Samuel Johnson"}
   ];

   var quote = $('.blockquote-reverse');

   var quoteText = "This is a quote to quote by";
   var quoteAuth = "Anonymous";

   var i = Math.floor(Math.random() * quoteArr.length);

   quoteText = quoteArr[i].qt;
   quoteAuth = quoteArr[i].at;

   //fadein/out animation while changing quote
   quote.fadeOut(700, function() {   
         quote.html('<p>' + quoteText + '</p> <footer>' + quoteAuth + '</footer>');
         quote.fadeIn(700);
      });
}
