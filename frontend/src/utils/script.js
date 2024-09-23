import React, { useState} from 'react';
import { Carousel, Dropdown, DropdownButton } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const App = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [text, setText] = useState('');
    const [wordsRemaining, setWordsRemaining] = useState(200);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [sidebarExpanded, setSidebarExpanded] = useState(false);

    const handleImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => setSelectedImage(e.target.result);
            reader.readAsDataURL(event.target.files[0]);
        }
    };

    const handleTextChange = (event) => {
        const text = event.target.value;
        const words = text.split(/\s+/);
        if (words.length <= 200) {
            setText(text);
            setWordsRemaining(200 - words.length);
        }
    };

    const toggleSidebar = () => {
        setSidebarExpanded(!sidebarExpanded);
    };

    return (
        <div>
            {/* Navbar with Dropdown */}
            <DropdownButton id="dropdown-basic-button" title="Dropdown">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>

            {/* Carousel */}
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src="path/to/image1.jpg" alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="path/to/image2.jpg" alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="path/to/image3.jpg" alt="Third slide" />
                </Carousel.Item>
            </Carousel>

            {/* Image Upload */}
            <input type="file" onChange={handleImageChange} />
            {selectedImage && <img src={selectedImage} alt="Selected" />}

            {/* Textarea with Word Limit */}
            <textarea value={text} onChange={handleTextChange} />
            <div>{`Palabras restantes: ${wordsRemaining}`}</div>

            {/* Datepickers */}
            <div>
                <button onClick={() => document.querySelector("#start-date").focus()}>Fecha de Inicio</button>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} id="start-date" />
            </div>
            <div>
                <button onClick={() => document.querySelector("#end-date").focus()}>Fecha de Fin</button>
                <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} id="end-date" />
            </div>

            {/* Sidebar */}
            <button onClick={toggleSidebar}>Toggle Sidebar</button>
            <div id="sidebar" className={sidebarExpanded ? 'expand' : ''}>
                Sidebar content here
            </div>
        </div>
    );
};

export default App;
