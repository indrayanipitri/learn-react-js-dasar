import React, {useState} from 'react';
import Card from './components/Card';

function App() {
  return (
    <>
    <div className="py-5">
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <Card content= {{ 
                        imageUrl: "http://placekitten.com/g/300/200",
                        title: "Postingan Pertama",
                        date: "Published, 20 Februari 2021"
                     }} />
                </div>
                <div className="col-4">
                    <Card content= {{ 
                        imageUrl: "http://placekitten.com/300/200",
                        title: "Postingan Kedua",
                        date: "Published, 4 Januari 2019"
                     }} />
                </div>
                <div className="col-4">
                    <Card content= {{ 
                        // imageUrl: "http://placekitten.com/g/300/200",
                        title: "Postingan Ketiga",
                        date: "Published, 27 Januri 2018"
                     }} />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default App;