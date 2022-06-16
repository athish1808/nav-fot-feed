import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './feedback.css';


function Feedback() {
    const [number, setNumber] = useState("");
    const [text, settext] = useState("");
    const navigate = useNavigate()
    const handlesubmit = () => {
        alert('Thanks for your valuable feedback')
        navigate('/')
    }
    return (
        <div className='feed'>
            <h2>Your,Feedback can help us to improve!</h2>
            <form className='feed-form' onSubmit={handlesubmit}>
                <label>Employee ID: 
                    <input className='feed-input'
                        type="text"
                        placeholder='Employee ID'
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        required
                    />
                </label><br />
                <label>Feedback:
                    <textarea className='feed-input1'
                        type="text"
                        placeholder='Feedback'
                        value={text}
                        onChange={(e) => settext(e.target.value)}
                        required
                    />
                </label>
                <div className='feed-btn'>
                    <button type='submit'>Submit your Feedback</button>
                </div>
            </form>

        </div>
    )

}


export default Feedback

