function Moderation_isAcceptablePassage(inputText) {
   var wordsNotAllowed = ['badWord1', 'badWord2'] ; // Change these to the list of words not allowed
   var words = inputText.split(' ');
    for (var i=0; i<words.length; i=i+1) {
        var currentWord = words[i].replace('.','');
                    currentWord = currentWord.replace('_', '');
                    currentWord = currentWord.replace('*', '');
                    currentWord = currentWord.replace('!', '');
                    currentWord = currentWord.replace('?', '');
        for (var j = 0; j <wordsNotAllowed.length ; j = j + 1) {
            if (currentWord.localeCompare(wordsNotAllowed[j]) == 0) {
                return false;
            }
        }
        
    }
    return true;
}
