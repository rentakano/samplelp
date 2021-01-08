$(function(){
    $("h2").textillate({
        loop: true,
        in: {
            effect: 'fedeInDown',
            delay:50,
            shuffle: true
        },
        out: {
            effect: 'flash',
            delay: 50
        }
    });
})


