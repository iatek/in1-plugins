
exports.socialist = function(req, res){
    res.render('socialist/index',{
        title:'jQuery Socialist Social Media Plugin - Create and combine feeds from social networks',
        keywords:'jquery social plugin,combine social feeds,social feed plugin,jquery facebook,social media plugin,jquery twitter feed'
        }
    );
}

exports.socialist.demo = function(req, res){
    res.render('socialist/demo',{
        title:'jQuery Socialist Social Media Plugin - Combine social feeds from multiple social networks',
        keywords:'jquery social plugin,combine social feeds,social feed plugin,jquery facebook,social media plugin,jquery twitter feed,pinterest plugin,craigslist,combine facebook and twitter,linkedin'
        }
    );
}

exports.share = function(req, res){
    res.render('share/index',{
        title:'jQuery Share Social Media Plugin - Simple social media buttons for sharing to multiple social networks',
        keywords:'jquery social plugin,sharing buttons,share,sharing plugin,multiple post sharing,jquery facebook,jquery post tweet'
        }
    );
}

exports.switchr = function(req, res){
    res.render('switchr/index',{ title:'jQueryUI Toggle Switch Widget - No images needed, CSS only toggle switch widget for jQueryUI', keywords:'jQuery plugin,jQueryUI,widget,switch,toggle switch'});
}