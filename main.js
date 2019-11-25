/* CONTACT FORM LOGIC */

function getRadioValue()
{
    for (var i = 0; i < document.getElementsByName('type').length; i++)
    {
        if (document.getElementsByName('type')[i].checked)
        {
            return document.getElementsByName('type')[i].value;
        }
    }
}

alert(getRadioValue()) 
