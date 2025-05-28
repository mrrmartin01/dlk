var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res) {
  res.render('fashion', { 
    title: 'fashion' ,
    pageStyles: "/stylesheets/wedding.css",
    images: [
        {src:'https://images.unsplash.com/photo-1535821768496-80f6b2bd573a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVyYmFuJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D'},
        {src:'https://images.unsplash.com/photo-1638260753148-d0316920e0af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVyYmFuJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D'},
        {src:'https://plus.unsplash.com/premium_photo-1682125024239-76c9a74dfa16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHVyYmFuJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D'},
        {src:'https://images.unsplash.com/photo-1574427797991-b086946fa9e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHVyYmFuJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D'},
        {src:'https://images.unsplash.com/photo-1728942817677-e0c4def487c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHVyYmFuJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D'},
        {src:'https://images.unsplash.com/photo-1649114383220-c4f0f0dbafbe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHVyYmFuJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D'},
        {src:'https://images.unsplash.com/photo-1620657693781-f1afb0aab9a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG5pa2UlMjBmYXNoaW9ufGVufDB8fDB8fHww'},
        {src:'https://images.unsplash.com/photo-1723020956214-89421e64aaeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fG5pa2UlMjBmYXNoaW9ufGVufDB8fDB8fHww'},
        {src:'https://plus.unsplash.com/premium_photo-1661431314754-430346f90fd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fG5pa2UlMjBmYXNoaW9ufGVufDB8fDB8fHww'},
        {src:'https://images.unsplash.com/photo-1679284392805-1b7f8e2e3f21?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fG5pa2UlMjBmYXNoaW9ufGVufDB8fDB8fHww'},
        {src:'https://images.unsplash.com/photo-1714567911211-39636257a1b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmVncm8lMjBmYXNoaW9ufGVufDB8fDB8fHww'},
        {src:'https://plus.unsplash.com/premium_photo-1729708576586-5d385167873e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8eTJrfGVufDB8fDB8fHww'},
        {src:'https://images.unsplash.com/photo-1667838243561-bf4f3c0fe38b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHkya3xlbnwwfHwwfHx8MA%3D%3D'},
        {src:'https://plus.unsplash.com/premium_photo-1729777215102-6d18e7d6e3da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8eTJrJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D'},
        {src:'https://images.unsplash.com/photo-1667838312789-1c4e11662780?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8eTJrJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D'},
        {src:'https://images.unsplash.com/photo-1614714053570-6c6b6aa54a6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8eTJrJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D'},
        {src:'https://images.unsplash.com/photo-1708533476767-d7222bda06a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHkyayUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D'},
        {src:'https://images.unsplash.com/photo-1618806358014-a9ba02fc62d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHkyayUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D'},
        {src:'https://images.unsplash.com/photo-1698651456379-3d1419f030bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHkyayUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D'},
        {src:'https://images.unsplash.com/photo-1643288178515-8b4ba815313a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHkyayUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D'},
        {src:'https://images.unsplash.com/photo-1622012339635-9b94f510443b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fDkwcyUyMGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D'},
        {src:'https://plus.unsplash.com/premium_photo-1730828574116-ef0a18eaad76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2slMjBzaGVyaWZmJTIwYWVzdGhldGljfGVufDB8fDB8fHww'},
        {src:'https://plus.unsplash.com/premium_photo-1740520684115-6580bd3aa303?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmxhY2slMjBzaGVyaWZmJTIwYWVzdGhldGljfGVufDB8fDB8fHww'},
        {src:'https://images.unsplash.com/photo-1747106755420-7ab9c3728695?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJsYWNrJTIwc2hlcmlmfGVufDB8fDB8fHww'},
        {src:'https://images.unsplash.com/photo-1634133118553-1e6e18299886?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmludGFnZSUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D'},
        {src:'https://plus.unsplash.com/premium_photo-1687609112015-23bcdb2385f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHZpbnRhZ2UlMjBmYXNoaW9ufGVufDB8fDB8fHww'},
        {src:'https://images.unsplash.com/photo-1594201508621-4e853b4db051?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHZpbnRhZ2UlMjBmYXNoaW9ufGVufDB8fDB8fHww'},
        {src:'https://plus.unsplash.com/premium_photo-1687850859071-065b717cfa89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHZpbnRhZ2UlMjBmYXNoaW9ufGVufDB8fDB8fHww'},
        {src:'https://images.unsplash.com/photo-1675218739622-8930d60cf7fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHZpbnRhZ2UlMjBmYXNoaW9ufGVufDB8fDB8fHww'},
        {src:'https://images.unsplash.com/photo-1675873725360-b15df4950952?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHZpbnRhZ2UlMjBmYXNoaW9ufGVufDB8fDB8fHww'},
        {src:'https://images.unsplash.com/photo-1611331827787-109e62126722?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHZpbnRhZ2UlMjBmYXNoaW9ufGVufDB8fDB8fHww'},
        {src:'https://images.unsplash.com/photo-1583071550854-d1d32a5f9290?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGJhcGV8ZW58MHx8MHx8fDA%3D'},
        {src:'https://images.unsplash.com/photo-1626298038175-e9f383124e1f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHVtYXxlbnwwfHwwfHx8MA%3D%3D'},
        {src:'https://images.unsplash.com/photo-1715001750243-7b8d552d4778?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHB1bWF8ZW58MHx8MHx8fDA%3D'},
        {src:'https://images.unsplash.com/photo-1575918679350-bf26b1b4da71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRyYWtlfGVufDB8fDB8fHww'},
        {src:'https://plus.unsplash.com/premium_photo-1674777843203-da3ebb9fbca0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2slMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D'},
        {src:'https://images.unsplash.com/photo-1511945863317-d60e146e9016?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGJsYWNrJTIwcGVvcGxlfGVufDB8fDB8fHww'},
        {src:'https://plus.unsplash.com/premium_photo-1664868839953-8466e51cc1bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGJsYWNrJTIwcGVvcGxlfGVufDB8fDB8fHww'},
        {src:'https://images.unsplash.com/photo-1556172732-1faa5d572eb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fGJsYWNrJTIwcGVvcGxlfGVufDB8fDB8fHww'},
        {src:'https://images.unsplash.com/photo-1590955256827-195a43f21af4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fGJsYWNrJTIwcGVvcGxlfGVufDB8fDB8fHww'},
        {src:'https://plus.unsplash.com/premium_photo-1681483884570-efce71c53be6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIwfHxibGFjayUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D'},
        {src:'https://images.unsplash.com/photo-1525665363629-cdf85a703b50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM0fHxibGFjayUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D'},
        // {src:''},
      ]
    });
});

module.exports = router;