import Form from '../Form/Form';
import List from '../List/List';
function Main(props) {
    
    return (
        <section className="main">
            <Form onAddItem={props.onAddItem}/>
            <List onDeleteItem={props.onDeleteItem} onCheckItem={props.onCheckItem} onUncheckItem={props.onUncheckItem}
                  todos={props.todos}  />
        </section>
    )
}

export default Main;