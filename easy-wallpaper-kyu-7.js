function wallpaper(l, w, h) {
    var numb = ['zero', 'one', 'two', 'three', 'four', 'five',
                    'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
                    'twelve', 'thirteen', 'fourteen', 'fifteen',
                    'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];  
    if (l*h*w===0){
        return numb[0]
    }else{
       return numb[Math.ceil(((l * h * 2) + (w * h * 2)) * 1.15 / 5.2)]
    }
}