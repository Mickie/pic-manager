var pg= require ('pg')
//var theDBUrl = process.env.DATABASE_URL || "tcp://fanzo_site:fanzo_site@localhost/pic-manager";
var theDBUrl= "pg://fanzo_site:fanzo_site@localhost/pic-manager"
exports.signup = function(req, res){

    res.render('signUp.html', { title: 'Sign Up' });
};
exports.signin = function(req, res){
   pg.connect(theDBUrl,function(err,client){

    var theName=document.signupform.name.value;
    var theEmail=document.signupform.email.value;
    var thePassword=document.signupform.password.value;
    client.query('INSERT INTO users(name,email,encrypted_password) VALUES('+theName+','+theEmail+','+thePassword+')')

   })
   //if success, send a notice: you have successfully registered with us, render the signIn page
    res.render('signIn.html', { title: 'Sign In' });
   //if not, send a failure notice, stay on the signup page
};
exports.login = function(req, res){
    //if success, render the user page
    res.render('user.html', { title: 'user' });
    //if not, stay on signIn page
};
exports.user = function(req, res){
    //if success, render the user page
    res.render('user.html', { title: 'user' });
    //if not, stay on signIn page
};