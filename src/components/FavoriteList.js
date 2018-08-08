import React, { Component } from "react";
import FavoriteLibrary from "./FavoriteLibrary";

class FavoriteList extends Component {

    render(){
        return (
            <div className="favoriteList">
                <h3>My Favorite Library List</h3>
                {
                this.props.libraryTable.map((library, index) => {
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

export default FavoriteList;