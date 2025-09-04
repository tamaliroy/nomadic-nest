import { useParams } from 'react-router-dom';

function Destination() {
    const { id } = useParams();
    return (
        <div>
            {id}
        </div>
    )
}

export default Destination;