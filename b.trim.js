String.prototype.trim = function(){
    return this.replace(/^\s+/,'').replace(/\s+$/,'')
}

console.log('  as '.trim())