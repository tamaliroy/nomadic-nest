import Destinations from './Destinations';
import Schedule from './Schedule';

function Dashboard() {
    return (
        <div className="grid w-5/6 overflow-auto gap-8" style={{gridTemplateColumns: '65% 30%'}}>
            <Destinations />
            <Schedule />
        </div>
    )
}

export default Dashboard;