import react, { useState } from 'react';


const MessageForm = (props) => {
    const [color, setColor] = useState("");
    const [width, setWidth] = useState(0);
    const [box, setBox] = useState([{"color":"","width":0,"heigh":0}]);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewColor(color);
        props.onNewWidth(width);
        setBox(box => [...box,{"color":color,"width":width+"px","height":width+"px"}]);
      


    };  
    var removeSecond = (e) => {
        setBox(box => box.filter(box => box !== e)
        );
      
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Set Color</label>
                <input
                    onChange={(e) => (setColor(e.target.value))}
                ></input>
                <br/>
                  <label>Set Size</label>
                <input
                    onChange={(e) => (setWidth(e.target.value))}
                ></input>
                <input type="submit" value="Add" />
            </form>

            <div style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                flexWrap:'wrap'
            }}>
                {box.map((item, i) =>
                <div>
                    <div style={{
                        width: `${item.width}`,
                        height: `${item.width}`,
                        border: '2px solid green',
                        backgroundColor: `${item.color}`,
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '20px',
                    }} key={i}>{item.color}
                    </div>
                    <button onClick={() => removeSecond(item)}>X</button>

                    </div>

)}
            </div>
            
        </>
    );
};

export default MessageForm;
