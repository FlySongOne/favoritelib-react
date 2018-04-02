import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import LibrariesForm from './components/LibrariesForm';
import Library from './components/Library';
import FavoriteLibrary from './components/FavoriteLibrary';

class App extends Component {
  constructor () {
    super()

    this.state = {
        libraryInfo: [],
        library: {},
        inputContentValue: "",
        libraryTable: []
    }

    this.searchClick = this.searchClick.bind(this);
    this.handleInputContentValue = this.handleInputContentValue.bind(this);
    this.createLibrary = this.createLibrary.bind(this);
    this.handleCreateSubmit = this.handleCreateSubmit.bind(this);
    this.updateLibrary = this.updateLibrary.bind(this);
    this.handleLibraryChange = this.handleLibraryChange.bind(this);
    this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this);
    this.updateIndex = "";
  }

  componentDidMount = () => {
    axios.get('https://data.cityofnewyork.us/resource/b67a-vkqb.json').then((res) => {
       this.setState({ libraryInfo: res.data});
       //console.log("Hi " + res.data[0].name);  
    })
    axios.get('/libraries/').then((res) => {
       this.setState({ libraryTable: res.data});
      // console.log("second axios " + this.state.libraryTable[0].name);  
    })
  };
 
  handleInputContentValue(event) {
    this.setState({
      inputContentValue: event.target.value
    });
    console.log("inside handle input content ",event.target.value);
  }
   
  searchClick(event){
    event.preventDefault();
    console.log("event target is " + event.target.value);
    let value = this.state.inputContentValue;
    this.searchbyName(value);
    this.searchbyPostCode(value);
  }
  // search library by name
  searchbyName = (value) => {
    
    let listOfLibs = this.state.libraryInfo;
    let targetLib = "";
    targetLib = listOfLibs.filter( lib => lib.name.toLowerCase() === value.toLowerCase())
    
    if(targetLib.length === 1 ) {
    //  console.log("Target is " + targetLib[0].name);
      let libObj = {
         name: targetLib[0].name,
         address: targetLib[0].address,
         city: targetLib[0].city,
         postalCode: targetLib[0].postcode
      }
      this.setState({ library:libObj });
    //  console.log(libObj);
    } else {
      console.log("Not found by name");
    }   
  }
  // searching library list by postal code
  searchbyPostCode = (value) => {
    let listOfLibs = this.state.libraryInfo;
    let targetLib = "";
    targetLib = listOfLibs.filter( lib => lib.postcode === value);
    if(targetLib.length === 1) {
      console.log(targetLib);
      let libObj = {
        name: targetLib[0].name,
        address: targetLib[0].address,
        city: targetLib[0].city,
        postalCode: targetLib[0].postcode
     }
      this.setState({ library:libObj });
      console.log(libObj);
    } else {
      console.log("Not found by postal code");
    }
  }
  // deleting library in table
  deleteLibrary = async (libraryId, index) => {
    try {
        await axios.delete(`/libraries/${libraryId}`)
        
        const updatedLibraryList = [...this.state.libraryTable]
        updatedLibraryList.splice(index, 1)
        this.setState({ libraryTable: updatedLibraryList })
        
    } catch (error) {
        console.log(`Error deleting library with ID of ${libraryId}`)
        console.log(error)
    }
  }

  createLibrary = async (library, index) => {
    
    try {
          const newLibraryResponse = await axios.post(`/libraries/`, library)

          const updatedLibraryList = [...this.state.libraryTable];
          updatedLibraryList.push(newLibraryResponse);

          this.setState({libraryTable: updatedLibraryList});
          console.log("hahhaha" , this.state.libraryTable);
     

    } catch( error ) {
      console.log('Error creating libary!');
      console.log(error);
    }
  }

  updateLibrary = async () => {
    let index = this.updateIndex;
    try {
        const libraryToUpdate = this.state.libraryTable[index]
        console.log(index);
        await axios.patch(`/libraries/${libraryToUpdate.id}`, libraryToUpdate)
    } catch(error) {
        console.log('Error updating library!')
        console.log(error)
    }
  }

  handleLibraryChange = (event, index) => {
    this.updateIndex = index; // to use the index for updating 
    const attributeToChange = event.target.name;
    const newValue = event.target.value;

    const updatedLibraryList = [...this.state.libraryTable];
    const libraryToUpdate = updatedLibraryList[index]
    libraryToUpdate[attributeToChange] = newValue
    
    this.setState({libraryTable: updatedLibraryList})
    console.log(this.state.libraryTable);
  }

  handleCreateSubmit = ( event ) => {
      event.preventDefault();
      this.createLibrary(this.state.library);   
  }

  handleUpdateSubmit = ( event) => {
      event.preventDefault();
      this.updateLibrary();
  }
  
  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Search Your Library</h2>
        </div>
        
        <LibrariesForm
          searchClick={this.searchClick}
          handleInputContentValue={this.handleInputContentValue}
          inputContentValue={this.state.inputContentValue} 
        />
        <Library library={this.state.library} handleCreateSubmit={this.handleCreateSubmit}/>
       
        <h3>My Favorite Library List</h3>
        {
            this.state.libraryTable.map((library, index) => {
                return(
                    <FavoriteLibrary
                      {...library}
                      key={index}
                      index={index}
                      deleteLibrary={this.deleteLibrary}
                      updateLibrary={this.updateLibrary}
                      handleLibraryChange={this.handleLibraryChange}
                      handleUpdateSubmit={this.handleUpdateSubmit}
                    />

                )
            })
        }
      </div>
    );
  }
}

export default App;
