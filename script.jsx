class Tooltip extends React.Component {
    constructor(props) {
        super(props) 
        this.state = { opacity : false }
        this.toggle = this.toggle.bind(this)
    }

    togle() {

    }

    render() {

    }
}

ReactDOM.render(<div>
    <Tooltip text="The book you're reading now">React Quickly</Tooltip>
    was published in 2017. it's awesome!
</div>,
document.getElementById('tooltip'))