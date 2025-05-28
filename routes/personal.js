var express = require("express");
var router = express.Router();

/* GET about page. */
router.get("/", function (req, res) {
  res.render("personal", {
    title: "Personal",
    description: "A personal page showcasing my interests, hobbies, and experiences.",
    keywords: "personal, hobbies, interests, experiences, about me",
    author: "Theophilus Ogunleye",
    pageStyles: "/stylesheets/wedding.css",
    images: [
        { src: "https://plus.unsplash.com/premium_photo-1664267832242-cc73a2fa4903?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmxhY2slMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D" },
        { src: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmxhY2slMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D" },
        { src: "https://images.unsplash.com/photo-1529245019870-59b249281fd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxhY2slMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D" },
        { src: "https://images.unsplash.com/photo-1568782517100-09bf22d88c2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJsYWNrJTIwcGVvcGxlfGVufDB8fDB8fHww" },
        { src: "https://images.unsplash.com/photo-1533435137002-455932c8538f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsYWNrJTIwcGVvcGxlfGVufDB8fDB8fHww" },
        { src: "https://images.unsplash.com/photo-1563995103864-d87d3c1fdd39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJsYWNrJTIwcGVvcGxlfGVufDB8fDB8fHww" },
        { src: "https://plus.unsplash.com/premium_photo-1723687234994-2a5c99acbc4d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGJsYWNrJTIwcGVvcGxlfGVufDB8fDB8fHww" },
        { src: "https://images.unsplash.com/photo-1519164497992-65f6b58a2981?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGJsYWNrJTIwcGVvcGxlfGVufDB8fDB8fHww" },
        { src: "https://images.unsplash.com/photo-1492462543947-040389c4a66c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGJsYWNrJTIwcGVvcGxlfGVufDB8fDB8fHww" },
        { src: "https://images.unsplash.com/photo-1550332781-aecd27f7434f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGJsYWNrJTIwcGVvcGxlfGVufDB8fDB8fHww" },
        { src: "https://plus.unsplash.com/premium_photo-1661888004202-d8258f9fa2c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGJsYWNrJTIwcGVvcGxlfGVufDB8fDB8fHww" },
        { src: "https://images.unsplash.com/photo-1607868894064-2b6e7ed1b324?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fGJsYWNrJTIwcGVvcGxlfGVufDB8fDB8fHww" },
        { src: "https://images.unsplash.com/photo-1682074441392-d48546100389?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODl8fGJsYWNrJTIwcGVvcGxlfGVufDB8fDB8fHww" },
        { src: "https://images.unsplash.com/photo-1526998827167-cb92fb4703f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxibGFjayUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D" },
        { src: "https://images.unsplash.com/photo-1531945086322-64e2ffae14a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE4fHxibGFjayUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D" },
        { src: "https://images.unsplash.com/photo-1661292932068-8161765c3940?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsYWNrJTIwUG9ydHJhaXR8ZW58MHx8MHx8fDA%3D" },
        { src: "https://images.unsplash.com/photo-1647604466973-7ff5f4b82dec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJsYWNrJTIwUG9ydHJhaXR8ZW58MHx8MHx8fDA%3D" },
        { src: "https://plus.unsplash.com/premium_photo-1674777843190-6f060a67db98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGJsYWNrJTIwUG9ydHJhaXR8ZW58MHx8MHx8fDA%3D" },
        { src: "https://plus.unsplash.com/premium_photo-1687187499452-bfabad35e97a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGJsYWNrJTIwUG9ydHJhaXR8ZW58MHx8MHx8fDA%3D" },
        { src: "https://images.unsplash.com/photo-1683221804415-8f6764b52cea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGJsYWNrJTIwUG9ydHJhaXR8ZW58MHx8MHx8fDA%3D" },
        { src: "https://images.unsplash.com/photo-1622847790720-57ca83a5bc27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGJsYWNrJTIwUG9ydHJhaXR8ZW58MHx8MHx8fDA%3D" },
        { src: "https://images.unsplash.com/photo-1627928420172-49bd173b3830?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGJsYWNrJTIwUG9ydHJhaXR8ZW58MHx8MHx8fDA%3D" },
        { src: "https://plus.unsplash.com/premium_photo-1671748711096-08dae9fbf8a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGJsYWNrJTIwUG9ydHJhaXR8ZW58MHx8MHx8fDA%3D" },
        { src: "https://plus.unsplash.com/premium_photo-1664380904962-bb1b6dd2b98e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmlraW5pJTIwUG9ydHJhaXR8ZW58MHx8MHx8fDA%3D" },
        { src: "https://images.unsplash.com/photo-1619198138175-2a7625348df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmlraW5pJTIwUG9ydHJhaXR8ZW58MHx8MHx8fDA%3D" },
        { src: "https://images.unsplash.com/photo-1721420373188-dcc1f75c8b59?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJpa2luaSUyMFBvcnRyYWl0fGVufDB8fDB8fHww" },
        { src: "https://images.unsplash.com/photo-1656747528463-24336696d262?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJpa2luaSUyMFBvcnRyYWl0fGVufDB8fDB8fHww" },
        { src: "https://images.unsplash.com/photo-1568819317551-31051b37f69f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmlraW5pJTIwc2hvdHN8ZW58MHx8MHx8fDA%3D" },
        { src: "https://images.unsplash.com/photo-1563389308977-12fa75ad1b15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJpa2luaSUyMHNob3RzfGVufDB8fDB8fHww" },
        { src: "https://images.unsplash.com/photo-1728731152406-8390889b2489?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGJpa2luaSUyMHNob3RzfGVufDB8fDB8fHww" },
        { src: "https://images.unsplash.com/photo-1607268765775-b6c01d2c63f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGJpa2luaSUyMHNob3RzfGVufDB8fDB8fHww" },
        { src: "https://images.unsplash.com/photo-1577132181645-32922cf8d0dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGJpa2luaSUyMHNob3RzfGVufDB8fDB8fHww" },
        { src: "https://images.unsplash.com/photo-1714405640029-fb35eb408a37?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z29sZiUyMHNob3RzfGVufDB8fDB8fHww" },
        { src: "https://images.unsplash.com/photo-1623784339206-593c0bcbb7f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWxvbmUlMjBib3l8ZW58MHx8MHx8fDA%3D" },
        { src: "https://images.unsplash.com/photo-1603136974045-5f46bd1335bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGFsb25lJTIwYm95fGVufDB8fDB8fHww" },
        { src: "https://images.unsplash.com/photo-1672273688600-21c459819076?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGFsb25lJTIwYm95fGVufDB8fDB8fHww" },
        { src: "https://plus.unsplash.com/premium_photo-1664036154106-dd19182d3663?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGFsb25lJTIwYm95fGVufDB8fDB8fHww" },
        { src: "https://images.unsplash.com/photo-1673972249399-5fbcf14f240b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGFsb25lJTIwYm95fGVufDB8fDB8fHww" },
        { src: "https://images.unsplash.com/photo-1712150837332-dd33dd5a49c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGFsb25lJTIwYm95fGVufDB8fDB8fHww" },
        { src: "https://images.unsplash.com/photo-1622529949430-fa35f5ddff10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fGFsb25lJTIwYm95fGVufDB8fDB8fHww" },
        { src: "https://plus.unsplash.com/premium_photo-1702597750513-154dc14fb3ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fGFsb25lJTIwYm95fGVufDB8fDB8fHww" },
        // { src: "" },
    ],
  });
});

module.exports = router;
