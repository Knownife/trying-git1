
import ComponentC from "./componentC";

function ComponentB() {
    return <div className={'box'}>
        <h1>component B</h1>
        <ComponentC/>
    </div>
}

export default ComponentB;