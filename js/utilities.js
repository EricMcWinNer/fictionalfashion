var numberWithCommas = function (x)
{
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};


function capitalizeString (string)
{
    string = string.trim();
    var stringArray = string.split(" ");
    for (var i = 0; i < stringArray.length; i++)
    {
        if (stringArray[i].length)
        {
            var newLetter = stringArray[i][0].toUpperCase();
            var rest = stringArray[i].substr(1).toLowerCase();
            stringArray[i] = newLetter + rest;
        }
    }
    return stringArray.join(" ");
}


function containsNumber (string)
{
    var numbers = "0123456789";
    for (var i = 0; i < string.length; i++)
    {
        for (var j = 0; j < numbers.length; j++)
        {
            if (string[i] === numbers[j])
            {
                return true;
            }
        }
    }
    return false;
}


function containsOnlyNumbers (string, dashes)
{
    dashes = (dashes == undefined || dashes == null) ? false : dashes;
    var numbers = (dashes === false) ? "0123456789" : "0123456789-";
    for (var i = 0; i < string.length; i++)
    {
        var test = false;
        for (var j = 0; j < numbers.length; j++)
        {
            if (string[i] == numbers[j])
            {
                test = true;
                break;
            }
        }
        if (test === false)
        {
            return false;
        }
    }
    return true;
}


function containsLetter (string, letterCase)
{
    var letters;
    if (letterCase === null)
    {
        letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    }
    else if (letterCase === "UPPER")
    {
        letters = "ABCDEFGJIJKLMNOPQRSTUVWXYZ";
    }
    else
    {
        letters = "abcdefghijklmnopqrstuvwxyz";
    }

    for (var i = 0; i < string.length; i++)
    {
        for (var j = 0; j < letters.length; j++)
        {
            if (string[i] == string[j])
            {
                return true;
            }
        }
    }
    return false;

}


function containsOnlyLetters (string, letterCase)
{
    var letters;
    if (letterCase === null)
    {
        letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    }
    else if (letterCase === "UPPER")
    {
        letters = "ABCDEFGJIJKLMNOPQRSTUVWXYZ";
    }
    else
    {
        letters = "abcdefghijklmnopqrstuvwxyz";
    }
    for (var i = 0; i < string.length; i++)
    {
        var test = false;
        for (var j = 0; j < letters.length; j++)
        {
            if (string[i] == letters[j])
            {
                test = true;
                break;
            }
        }
        if (test === false)
        {
            return false;
        }
    }
    return true;
}


function excerptString (string, length, word)
{
    word = word == null ? false : word;
    if (word === true)
    {
        var stringArray = string.split(" ");

        var finalString = '';
        for (var i = 0; i < length; i++)
        {
            finalString += stringArray[i];
        }
        return finalString += "...";
    }
    else
    {
        if (string.length < length)
        {
            return string;
        }
        else
        {
            return string.substr(0, length) + "...";
        }
    }
}


function validateEmail (email)
{
    var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return (emailRegex.test(email));
}


function post (path, attributes, method)
{
    method = method || "post";

    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", path);
    for (var i = 0; i < attributes.length; i++)
    {
        var childField = document.createElement('input');
        childField.setAttribute("type", "hidden");
        childField.setAttribute("name", attributes[i][0]);
        childField.setAttribute("value", attributes[i][1]);
        form.appendChild(childField);
    }
    document.body.appendChild(form);
    form.submit();
}
