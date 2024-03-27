from flask import Flask 
from flask_mail import Mail,Message
app=Flask(__name__)

app.config['MAIL_SERVER']='live.smtp.mailtrap.io'
app.config['MAIL_PORT']=587
app.config['MAIL_USERNAME']='api'
app.config['MAIL_PASSWORD']='1a743c4ea3e416718cbb1f30b3157680'
app.config['MAIL_USE_TLS']=True
app.config['MAIL_USE_SSL']=False
mail=Mail(app)

@app.route('/')
def send():
    message=Message(
    
    recipients="becharaimohamedkhalil@gmail.com",
    sender = "mm_becharai@esi.dz",
    subject = "Verification Code"
    )
    
    message.body="12345"
    mail.send(message)
    return "idealesi!"