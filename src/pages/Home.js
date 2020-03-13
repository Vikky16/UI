import React from 'react'
import Input from '../components/Input'
import Table from '../components/Table'
import '../pages/home.css'
class Home extends React.Component{
    constructor() {
        super();
        this.state = {
          textArr:[],
          result:[],
          data:null,
        };
      }
      splitText=(text)=>{
        this.setState({
            textArr:text.split('\n')
        })
        this.splitOnArray()
      }
      splitOnArray=()=>{
        let newArray=[]
        if(this.state.textArr.length>0){
          for(var i=0;i<this.state.textArr.length;i++){
            newArray.push(this.state.textArr[i].split(/[^a-zA-Z0-9\s]/g).filter((item) => item != ''))
          }
          this.setState({
              result:newArray
          })
      }}
      showFile = () => {
        
        if (window.File && window.FileReader && window.FileList) {
             let file = document.querySelector('input[type=file]').files[0];
             let reader = new FileReader()
             reader.onload =(event)=>{
                   this.splitText(event.target.result)
                }
             reader.readAsText(file);
             
       } else {
          alert("Your browser is too old to support HTML5 File API");
       }
      }
      showLines=(lines)=>{
       
        if(isNaN(lines)){
          alert("Please Enter Number between 0-9")
        }
        else if(lines){
          if(lines>=this.state.result.length){
            alert("Value is greater than length")
            this.setState({
              result:this.state.data
            })
          }
          else{
            let filterArray=lines?this.state.result.filter((num,i)=>i<lines):this.state.data
            this.setState({
              data:this.state.result,
              result:filterArray,
            })
          }
          
        }
        else{
          this.setState({
            result:this.state.data
          })
        }
      }
      onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        this.showLines(this.state.lines)
    }
      showInput =()=>{
        return(<div className="input">
              <form onSubmit={this.onSubmit.bind(this)}>
                <input type="text" name="delimiter" onChange={this.onChange.bind(this)} />
                <input type="text" name="lines" onChange={this.onChange.bind(this)} />
                <button type="submit">Filter</button>
            </form>
          </div>)
      }
      render() {
        const {result}=this.state
        console.log(this.state)
        return (
          <div className="container">
            <Input type="file" onChange={this.showFile} />
            {result.length>0?this.showInput():''}
            <Table data={this.state.result}></Table>
          </div>
        );
      }
}
export default Home;
