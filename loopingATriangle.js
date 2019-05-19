/*
Write a loop that makes seven calls to console.log to output the following
triangle:
#
##
###
####
#####
######
#######
*/
var hash = "";
for( var i = 1; i <= 7 ; i++ ){
    for( var j = 1; j <= i; j++){
        hash += "#";
    }
    console.log(hash)
    var hash = "";
}