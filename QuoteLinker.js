// Author: Shingo Suzuki (@suzushin7)
(function (t, u, s) {
  var a = '<a href="'+u+'" title="'+t+'">'+t+'</a>';
  var code = '<blockquote cite="'+u+'"><p>'+s+'<br />by '+a+'</p></blockquote>';
  prompt('QuoteLinker', code);
})(document.title, location.href, window.getSelection().toString());