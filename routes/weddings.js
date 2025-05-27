var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res) {
  res.render('weddings', { 
    title: 'Weddings' ,
    pageStyles: "/stylesheets/wedding.css",
    images: [
        {src:'https://plus.unsplash.com/premium_photo-1664888532122-5e94aafb4438?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmxhY2slMjB3ZWRkaW5nfGVufDB8fDB8fHww'},
        {src:'https://images.unsplash.com/photo-1513725673171-537abba17912?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fHdlZGRpbmd8ZW58MHx8MHx8fDA%3D'},
        {src:'https://images.unsplash.com/photo-1728247630018-b4be4db58330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHRhdHRvZWQlMjB3ZWRkaW5nfGVufDB8fDB8fHww'},
        {src:'https://images.unsplash.com/photo-1712081615271-5b9144e76ac4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHRhdHRvZWQlMjB3ZWRkaW5nfGVufDB8fDB8fHww'},
        {src:'https://images.unsplash.com/photo-1521033719794-41049d18b8d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG92ZXJzfGVufDB8fDB8fHww'},
        {src:'https://images.unsplash.com/photo-1619000135065-5e5d221cca79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fGxvdmVyc3xlbnwwfHwwfHx8MA%3D%3D'},
        {src:'https://images.unsplash.com/photo-1592409039573-5a135408dcc4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxhY2slMjBhZXN0aGV0aWNzJTIwbG92ZXJzfGVufDB8fDB8fHww'},
        {src:'https://images.unsplash.com/photo-1694055558879-cb0bd6c9a625?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmVncm8lMjB3ZWRkaW5nfGVufDB8fDB8fHww'},
        {src:'https://images.unsplash.com/photo-1515051124667-90dabc5aff59?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGJyaXRpc2glMjB3ZWRkaW5nfGVufDB8fDB8fHww'},
        {src:'https://images.unsplash.com/photo-1644945591600-1b30fd7c23e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGJyaXRpc2glMjB3ZWRkaW5nfGVufDB8fDB8fHww'},
        {src:'https://images.unsplash.com/photo-1717085165277-a72aa8c3a8ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGJyaXRpc2glMjB3ZWRkaW5nfGVufDB8fDB8fHww'},
        {src:'https://images.unsplash.com/photo-1724812773350-a7d0bf664417?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8amFtYWljYW4lMjB3ZWRkaW5nfGVufDB8fDB8fHww'},
        {src:'https://plus.unsplash.com/premium_photo-1723741265062-fda65175efab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8amFtYWljYW4lMjB3ZWRkaW5nfGVufDB8fDB8fHww'},
        {src:'https://plus.unsplash.com/premium_photo-1699389000375-7c6c8ffff20e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGFmcmljYW4lMjB3ZWRkaW5nfGVufDB8fDB8fHww'},
        {src:'https://plus.unsplash.com/premium_photo-1726837383741-eef0c5553209?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGFmcmljYW4lMjB3ZWRkaW5nfGVufDB8fDB8fHww'},
        {src:'https://images.unsplash.com/photo-1684253866485-b26f847ff97e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fGFmcmljYW4lMjB3ZWRkaW5nfGVufDB8fDB8fHww'},
        {src:'https://images.unsplash.com/photo-1645827042168-4fb0cdd0bf7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA1fHxhZnJpY2FuJTIwd2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D'},
        {src:'https://images.unsplash.com/photo-1607567079872-db227fedf583?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA3fHxhZnJpY2FuJTIwd2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D'},
        {src:'https://images.unsplash.com/photo-1738508646362-a4411b915cb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHxhZnJpY2FuJTIwd2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D'},
        {src:'https://images.unsplash.com/photo-1731664454536-84d192092d5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI4fHxhZnJpY2FuJTIwd2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D'},
        {src:'https://images.unsplash.com/photo-1631806683991-1dc7b052f69b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMxfHxhZnJpY2FuJTIwd2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D'},
        {src:'https://images.unsplash.com/photo-1587528311593-666f115a59df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQwfHxhZnJpY2FuJTIwd2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D'},
        {src:'https://images.unsplash.com/photo-1710078443794-015df3a55c6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY1fHxhZnJpY2FuJTIwd2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D'},
        {src:'https://plus.unsplash.com/premium_photo-1732464750981-2dfaa38f7d3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTcwfHxhZnJpY2FuJTIwd2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D'},
        {src:'https://images.unsplash.com/photo-1654697605353-553efa78b471?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjAzfHxhZnJpY2FuJTIwd2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D'},
        {src:'https://images.unsplash.com/photo-1670541984933-1ed2cc77dd0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjE2fHxhZnJpY2FuJTIwd2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D'},
        {src:'https://images.unsplash.com/photo-1681308904230-9ad71388c5d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzAxfHxhZnJpY2FuJTIwd2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D'},
        {src:'https://images.unsplash.com/flagged/photo-1565622508035-2c383b306fda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzA5fHxhZnJpY2FuJTIwd2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D'},
        // {src:''},
      ]
  });
});

module.exports = router;