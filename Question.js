class Question{
    constructor(){
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.title = createElement('h2');
    }

    hide(){
        this.input.hide()
        this.button.hide()
        this.title.hide()
    }

    display(){
        this.title.html("My Quiz Game")
        this.title.position(350,0)

        this.question.html("Question:- What starts and ends with the letter 'E' , but has only one letter? ")
        this.question.position(150,80)
        this.option1.html("1: Everyone")
        this.option1.position(150,100)
        this.option1.html("1: Envelope")
        this.option1.position(150,120)

        this.input.position(150,230)
    }
}