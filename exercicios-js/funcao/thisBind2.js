function Pessoa() {
    this.idade = 0

    //const self = this
    setInterval(function(){
        this.idade++
        //self.idade++
        console.log(this.idade)
    }.bind(this), 1000)
}

new Pessoa
