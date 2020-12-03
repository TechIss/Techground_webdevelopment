//Example 1
#element {
    border-bottom: none;
    background: none;
    //Content in "normal" mode.
    &:before {
        content: 'Normal mode';
    }
    //Content in fullscreen mode
     &:fullscreen:before {
         content: 'Fullscreen mode';         
    }    
    &:fullscreen::backdrop {
        background: $b;
    }
    //According to MDN we need to prefix, but it doesn't work in my tests.
    &:fullscreen::-webkit-backdrop {
        background: $b;
    }
}

//Example 2
dialog {
    width: 350px;
    padding: 40px;
    border: 1px solid rgba(black,.3);
    border-radius: 2px;
    box-shadow: 0 5px 20px black;
    top: 30%;
}
dialog::backdrop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(darken($g,25),.8);
}





//Styling stuff not needed for demo
body {
    text-align: left;
    line-height: 1.5;
}
h1 {
    font-size: 22px;
    text-transform: none;
    border-bottom: #636363 1px dotted;
    code {
        display: inline-block;
        margin-bottom: 10px;
        color: $y;
        background: none;
        box-shadow: none;
    }
}
h2 { font-size: 18px; }
code { font-size: 1em; }
.example-cntr {
    max-width: 800px;
    margin: 0 auto 50px;
    padding: 30px;
    box-shadow: 0 1px 2px rgba(black,.3);
    background: rgba(black,.15);
    & > code {
        display: block;
        margin-bottom: 10px;
        font-size: 22px;
        color: $y;
        background: none;
        box-shadow: none;
    }
}
.underline { text-decoration: underline; }

//
.hide { display: none; }
#element {
    border-bottom: #444 1px solid;
    padding-bottom: 20px;
    &:before { 
        display: block;
        padding: 5px 0;
        background: $g;
    }
    &:fullscreen:before {
        display: block;
        padding: 5px 250px;
        background: $r;
    }    
}
button {
    padding: 8px 15px;
    cursor: pointer;
    background: linear-gradient(white, #aaa);
    border-radius: 2px;
    &:hover { background: white; }
    &:active { background: linear-gradient(#aaa, white 20%);}
}
.note {
    color: desaturate($y,30);
    font-size: 12px;
    letter-spacing: .5px;
}
.notes {
    margin-bottom: 20px;
    padding: 20px 20px 0;
    border: #444 1px solid;
    border-radius: 3px;
    h2 { margin: 0; }
}
.example {
    margin: 0 20px;
    padding: 20px;
    background: rgba(black,.2);
    margin-bottom: 20px;
    &:last-child { margin-bottom: 0; }
    h1 { border: none !important; margin-bottom: 0 !important; }
    h2 { margin-top: 0; }
}
dialog {
    text-align: center;
    p { text-align: left; }
}