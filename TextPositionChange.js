function LetterChanges(str) { 

var alphabets="abcdefghijklmnopqrstuvwxyz".split("");
str=str.toLowerCase().split("");
var replaceChar="";
for(var i=0;i<str.length;i++)
{
    if(str[i]===(" "))
    {
        replaceChar+=" ";
    }else{
        var place=alphabets.indexOf(str[i]);
        if(place==25)
        {
            replaceChar+=alphabets[0].toUpperCase();
        }else{
            var val = alphabets[place+1];
            if(val.includes('a')||val.includes('e')||val.includes('i')||val.includes('o')||val.includes('u'))
            {
                replaceChar+=val.toUpperCase();
            }else
              { replaceChar+= val;}
            
        }
    }
}

 // code goes here  
 return replaceChar; 
         
}
   
// keep this function call here 
LetterChanges(readline());