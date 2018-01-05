<?php
require_once('phpmailer/class.phpmailer.php');
require_once('phpmailer/class.smtp.php');
$mail = new PHPMailer();
//$mail->SMTPDebug = 2;                               // Enable verbose debug output
$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'mail.okusaluminyum.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;  
$mail->CharSet = 'UTF-8';                                           // Enable SMTP authentication
$mail->Username = 'destek@okusaluminyum.com';                 // SMTP username
$mail->Password = '!12QAzwsx';             // SMTP password
$mail->SMTPSecure = false; 
$mail->SMTPAutoTLS = false;                         // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                    // TCP port to connect to
$message = "";
$status = "false";
if( $_SERVER['REQUEST_METHOD'] == 'POST' ) {
    if( $_POST['form_name'] != '' AND $_POST['form_email'] != '' AND $_POST['form_subject'] != '' ) {
        $name = $_POST['form_name'];
        $email = $_POST['form_email'];
        $subject = $_POST['form_subject'];
        $phone = $_POST['form_phone'];
        $message = $_POST['form_message'];
        $subject = isset($subject) ? $subject : 'New Message | Contact Form';
        $botcheck = $_POST['form_botcheck'];
        $toemail = 'destek@okusaluminyum.com'; // Your Email Address
        $toname = 'Okuş Alüminyum'; // Your Name
        if( $botcheck == '' ) {
            $mail->SetFrom( $email , $name );
            $mail->AddReplyTo( $email , $name );
            $mail->AddAddress( $toemail , $toname );
            $mail->Subject = $subject;
            $name = isset($name) ? "İsim: $name<br><br>" : '';
            $email = isset($email) ? "Mail Adresi: $email<br><br>" : '';
            $phone = isset($phone) ? "Telefon: $phone<br><br>" : '';
            $message = isset($message) ? "Mesaj: $message<br><br>" : '';
            $referrer = $_SERVER['HTTP_REFERER'] ? '<br><br><br>This Form was submitted from: ' . $_SERVER['HTTP_REFERER'] : '';
            $body = "$name $email $phone $message $referrer";
            $mail->MsgHTML( $body );
            $sendEmail = $mail->Send();
            if( $sendEmail == true ):
                $message = '<strong>Mesajınız</strong> bize ulaştı. Çok yakında size geri dönüş yapacağız.';
                $status = "true";
            else:
                $message = 'Beklenmeyen bir hata oluştu.<br /><br /><strong>Reason:</strong><br />' . $mail->ErrorInfo . '';
                $status = "false";
            endif;
        } else {
            $message = 'Bot <strong>Detected</strong>.! Clean yourself Botster.!';
            $status = "false";
        }
    } else {
        $message = 'Lütfen tüm alanları doldurunuz ve tekrar deneyiniz..';
        $status = "false";
    }
} else {
    $message = 'Beklenmeyen bir hata oluştu. Daha sonra tekrar deneyiniz.';
    $status = "false";
}
$status_array = array( 'message' => $message, 'status' => $status);
echo json_encode($status_array);?>