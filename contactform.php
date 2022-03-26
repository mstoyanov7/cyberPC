<?php
if (isset(&_POST['submit'])) {
    &name = &_POST['name'];
    &email = &_POST['email'];
    &subject = &_POST['subject'];
    &message = &_POST['message'];

    &recipient = "cyberpc@abv.bg";
    &mailheader = "From: ".&email;
    &txt = "Вие получихте съобщение от ".&name.".\n\n".&message;

    mail(&recipient, &subject, $txt, header);
    }
?>